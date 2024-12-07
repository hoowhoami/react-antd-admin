import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.Dgf1XuiP.js";const l="/react-antd-admin/docs/guide/preferences.png",g=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/fundamentals/settings.md","filePath":"zh/guide/fundamentals/settings.md","lastUpdated":1733563188000}'),e={name:"zh/guide/fundamentals/settings.md"};function p(h,s,k,d,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="环境变量和模式" tabindex="-1">环境变量和模式 <a class="header-anchor" href="#环境变量和模式" aria-label="Permalink to &quot;环境变量和模式&quot;">​</a></h2><p>项目使用 Vite 构建的，所以 Vite 的环境变量可直接在本项目使用，如果不了解 Vite 的环境变量和模式，可点击链接 <a href="https://vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite Env Variables and Modes</a> 直接学习。</p><h3 id="vite-环境变量" tabindex="-1">Vite 环境变量 <a class="header-anchor" href="#vite-环境变量" aria-label="Permalink to &quot;Vite 环境变量&quot;">​</a></h3><p>这三个文件最为常用： <code>.env</code>、<code>.env.development</code>、<code>.env.production</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 在所有的环境中被载入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env.local</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 在所有的环境中被载入，但会被 git 忽略</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env.[mode]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 只在指定的模式中被载入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env.[mode].local</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 只在指定的模式中被载入，但会被 git 忽略</span></span></code></pre></div><p><strong>只有以 <code>VITE_</code> 开头的变量会被正确加载</strong>：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_SOME_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在项目代码中可以这样访问：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_SOME_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 123</span></span></code></pre></div></div><h4 id="环境优先级" tabindex="-1">环境优先级 <a class="header-anchor" href="#环境优先级" aria-label="Permalink to &quot;环境优先级&quot;">​</a></h4><p>指定模式的文件（例如 .env.production）会比通用形式的优先级更高（例如 .env）。</p><p>另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 .env 类文件覆盖。例如当运行 <code>VITE_SOME_KEY=123 vite build</code> 的时候。</p><p>.env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。</p><h2 id="项目环境配置" tabindex="-1">项目环境配置 <a class="header-anchor" href="#项目环境配置" aria-label="Permalink to &quot;项目环境配置&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6tpJU" id="tab-Zn0Eqm2" checked><label data-title=".env" for="tab-Zn0Eqm2">.env</label><input type="radio" name="group-6tpJU" id="tab-MRfowXE"><label data-title=".env.development" for="tab-MRfowXE">.env.development</label><input type="radio" name="group-6tpJU" id="tab-jYFtOjb"><label data-title=".env.production" for="tab-jYFtOjb">.env.production</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 后端 API 前缀</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_API_BASE_URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/api&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录之后默认调转的路由</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_BASE_HOME_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/home&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启系统自动更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_APP_VERSION_MONITOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Y&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 网站标题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VITE_GLOB_APP_TITLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;React Antd Admin&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div></div></div><h2 id="新增一个环境变量" tabindex="-1">新增一个环境变量 <a class="header-anchor" href="#新增一个环境变量" aria-label="Permalink to &quot;新增一个环境变量&quot;">​</a></h2><p>新增一个可动态修改的配置项，只需要按照如下步骤即可：</p><ol><li>在环境配置文件，例如 <code>.env</code> 新增一个以 <code>VITE_</code> 开头的变量，如：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3333</span></span></code></pre></div><ol start="2"><li>在 <code>src/types/vite-env.d.ts</code> 文件中新增对应的类型：</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite/client&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite-plugin-svgr/client&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMetaEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_API_BASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_BASE_HOME_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_APP_VERSION_MONITOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Y&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;N&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_GLOB_APP_TITLE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMeta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMetaEnv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>通过 <code>import.meta.env.VITE_PORT</code> 即可获取配置的值。</li></ol><h2 id="偏好设置" tabindex="-1">偏好设置 <a class="header-anchor" href="#偏好设置" aria-label="Permalink to &quot;偏好设置&quot;">​</a></h2><p>是否开启路由动画、导航的类型、侧边栏的宽度等等，这些应用的设置被集中到偏好设置中，偏好设置作为一个统一的设置入口，用于动态配置项目的各种功能：</p><p><img src="`+l+`" alt="preferences"></p><p>使用偏好配置设置好之后，可以一键复制到 <code>src/store/preferences.ts</code> 文件中找到 <code>DEFAULT_PREFERENCES</code> 变量直接，覆盖框架默认配置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 默认偏好设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DEFAULT_PREFERENCES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	language: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh-CN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Theme ================== */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	theme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	colorBlindMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	colorGrayMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	themeRadius: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	builtinTheme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	themeColorPrimary: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#1677ff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Theme ================== */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Animation ================== */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	transitionProgress: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	transitionLoading: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	transitionEnable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	transitionName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fade-slide&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Animation ================== */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Layout ================== */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	navigationStyle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SIDE_NAVIGATION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	sidebarWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">210</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	sideCollapseWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COLLAPSED_WIDTH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Layout ================== */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Tabbar ================== */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarEnable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarShowIcon: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarPersist: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarDraggable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarStyleType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarShowMore: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabbarShowMaximize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* ================== Tabbar ================== */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">satisfies</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PreferencesState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>覆盖默认偏好设置之后，需要点击偏好设置右上角的重置按钮。</li><li>或者更改配置后直接清空缓存。</li></ul></div>`,27)]))}const c=i(e,[["render",p]]);export{g as __pageData,c as default};
