import type { BlockerFunction } from "react-router-dom";
import type { AppRouteRecordRaw, RouterSubscriber } from "./types";

import { useAnimationStore, usePermissionStore, useUserStore } from "#src/store";
import { NProgress } from "#src/utils";

import { createBrowserRouter, matchRoutes } from "react-router-dom";
import {
	addIdToRoutes,
	checkLogin,
	checkPublicRoute,
	checkRouteRole,
	getInitReactRoutes,
	replaceBaseWithRoot,
} from "./utils";

const modules = import.meta.glob<
	Record<string, { default: AppRouteRecordRaw[] }>
>("./modules/**/*.ts", { eager: true });

export const routeModuleList = Object.keys(modules).reduce<AppRouteRecordRaw[]>(
	(list, key) => {
		const mod = modules[key].default ?? {};
		const modList = Array.isArray(mod) ? [...mod] : [mod];
		return [...list, ...addIdToRoutes(modList)];
	},
	[],
);

export const router = createBrowserRouter(
	getInitReactRoutes(routeModuleList),
	{
		basename: import.meta.env.BASE_URL,
	},
);

/**
 * 全局前置守卫，用于在路由跳转前执行一些操作
 *
 * @returns 返回 true 则取消当前导航，返回 false 则继续导航
 */
const routerBeforeEach: BlockerFunction = ({ nextLocation }) => {
	const { transitionProgress } = useAnimationStore.getState();
	/* 开启进度条动画 */
	transitionProgress && NProgress.start();

	const currentRoute = matchRoutes(
		router.routes,
		nextLocation,
		import.meta.env.BASE_URL,
	) ?? [];
	const { pathname, search } = nextLocation;
	const pathnameWithoutBase = replaceBaseWithRoot(pathname);

	/* 路由白名单 */
	const isPublicRoute = checkPublicRoute(pathnameWithoutBase, currentRoute[currentRoute.length - 1]?.route?.handle?.ignoreAccess);
	if (isPublicRoute) {
		return false;
	}

	/* 是否登录 */
	const isLogin = checkLogin(pathnameWithoutBase, search, router.navigate);
	if (!isLogin) {
		return true;
	}

	/* 跳转到默认路由 */
	if (pathname === import.meta.env.BASE_URL) {
		router.navigate(import.meta.env.VITE_BASE_HOME_PATH, { replace: true });
		return true;
	}

	/* --------------- 以下为已登录的处理逻辑 ------------------ */
	// 路由权限校验
	const hasRole = checkRouteRole(currentRoute[currentRoute.length - 1]?.route?.handle?.roles, undefined, router.navigate);
	// 未通过权限校验
	if (!hasRole) {
		return true;
	}
	return false;
};

/**
 * 路由守卫，在路由跳转完成后执行
 *
 */
const routerAfterEach: RouterSubscriber = (routerState) => {
	const { transitionProgress } = useAnimationStore.getState();
	if (routerState.navigation.state === "idle") {
		/* 路由变化更新文档标题的逻辑放到了路由守卫组件中（guard.tsx） */
		/* 关闭进度条动画 */
		transitionProgress && NProgress.done();
	}
};

/**
 * 浏览器刷新并不会触发 routerBeforeEach ，所以需要在 routerInitReady 来进行一些初始化操作
 */
async function routerInitReady() {
	const { transitionProgress } = useAnimationStore.getState();
	/* 路由初始化时，开启进度条动画 */
	transitionProgress && NProgress.start();
	function handleDomReady() {
		transitionProgress && NProgress.done();
		document.removeEventListener("DOMContentLoaded", handleDomReady);
	}
	document.addEventListener("DOMContentLoaded", handleDomReady);

	const { pathname, search } = router.state.location;
	const pathnameWithoutBase = replaceBaseWithRoot(pathname);
	const currentRoute = router.state.matches[router.state.matches.length - 1];
	/* 路由白名单 */
	const isPublicRoute = checkPublicRoute(pathnameWithoutBase, currentRoute.route.handle?.ignoreAccess);
	if (isPublicRoute) {
		return;
	}

	/* 是否登录 */
	const isLogin = checkLogin(pathnameWithoutBase, search, router.navigate);
	if (!isLogin) {
		return;
	}

	/* --------------- 以下为已登录的处理逻辑 ------------------ */

	// 已登录但未获取动态路由，则获取动态路由
	const { hasFetchedDynamicRoutes, handleAsyncRoutes } = usePermissionStore.getState();
	if (!hasFetchedDynamicRoutes) {
		/**
		 * 用户信息包含了用户角色，需要在获取菜单权限前面获取，用于权限校验
		 */
		await Promise.all([handleAsyncRoutes(), useUserStore.getState().getUserInfo()]);
		/**
		 * 需要替换当前路由
		 * https://router.vuejs.org/guide/advanced/dynamic-routing#Adding-routes
		 *
		 * 为什么需要替换当前路由？
		 * 1. 假如用户导航到动态路由 /system/user
		 * 2. 浏览器匹配路由，但是没有匹配到，进入 404 路由
		 * 3. 等待获取动态路由后，通过 router.navigate 跳转到 /system/user
		 *
		 * 注意：navigate 方法调用之后会触发 routerBeforeEach 钩子
		 */

		return router.navigate(`${pathnameWithoutBase}${search}`);
	}

	/**
	 * 路由权限校验逻辑
	 *
	 * 因为 routerInitReady 被触发 hasFetchedDynamicRoutes 一定是 false
	 * 所以 获取动态路由之后 直接 return router.navigate
	 * 权限校验的校验会在 routerBeforeEach 中执行
	 */
}

export async function setupRouter() {
	// router beforeEach
	router.getBlocker("beforeEach", routerBeforeEach);
	// router afterEach
	router.subscribe(routerAfterEach);

	await routerInitReady();
}

export default router;
