import{c,j as e}from"./index-dQcG57Ga.js";import{G as t,W as i,h}from"./antd-bmUhe7Yi.js";import"./faker-tLuEN5nQ.js";import"./react-Bzu7VVH0.js";const x=`
{
	"i18n-ally.localesPaths": "src/locales",
	// https://github.com/lokalise/i18n-ally/wiki/Path-Matcher
	"i18n-ally.namespace": true,
	"i18n-ally.pathMatcher": "{locale}/{namespaces}.json",
	"i18n-ally.sourceLanguage": "zh-CN",
	"i18n-ally.displayLanguage": "zh-CN",
	"i18n-ally.enabledFrameworks": ["react-i18next"],
	"i18n-ally.keystyle": "nested"
}
`,j=`
import { useTranslation } from "react-i18next";
export default function About() {
	const { t } = useTranslation();

	return (
		<div>
			{t("about.aboutProject")}
		</div>
	);
}
`,u=`
import { t } from "#src/locales";
const title = t("global.menus.about");
`,{Title:p}=t,y=c({headerAnchor:{position:"relative","& a":{opacity:0,position:"absolute",left:"-22px"},"&:hover a":{opacity:1}}});function n({children:s,...o}){const d=y();return e.jsxs(p,{id:s,className:d.headerAnchor,...o,children:[e.jsx("a",{href:`#${s}`,"aria-label":`Permalink to ${s}`,children:"#"}),s]})}const m="/react-antd-admin/assets/lokalise.i18n-ally-9iAxUC0X.png",g="/react-antd-admin/assets/lokalise.i18n-ally-plugin-HCIXmQGB.png",b="/react-antd-admin/assets/i18n-translation-qiMD80Hz.png",{Paragraph:l,Text:a,Link:r}=t,f=c({alignCenter:{textAlign:"center"}});function A(){const s=f();return e.jsxs(t,{style:{padding:"0 3em"},children:[e.jsx(n,{children:"国际化"}),e.jsxs(l,{children:["平台的国际化由下面两个库提供支持：",e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{href:"https://www.i18next.com/",children:"i18next"})}),e.jsx("li",{children:e.jsx(r,{href:"https://react.i18next.com/",children:"react-i18next"})})]})]}),e.jsx(n,{level:2,children:"VSCode 插件"}),e.jsxs(l,{children:["国际化默认使用的是 JSON 文件，这导致调试和书写非常困难。利用 VSCode 的",e.jsx(a,{copyable:!0,code:!0,children:"lokalise.i18n-ally"}),"插件我们可以获得良好的编写体验和类型提示。"]}),e.jsx(l,{className:s.alignCenter,children:e.jsx(i,{src:g,alt:"lokalise.i18n-ally plugin"})}),e.jsxs(l,{children:["当然不要忘记把下面的 json 代码添加到您本地"," ",e.jsx(a,{copyable:!0,code:!0,children:"vscode/settings.json"}),"文件中："]}),e.jsx(l,{children:e.jsx("pre",{children:x})}),e.jsx(l,{children:e.jsx(a,{children:"正确配置之后，您将会看到如下友好的页面，代码中被翻译的文字，以及侧边栏中构建的翻译字典树："})}),e.jsx(l,{className:s.alignCenter,children:e.jsx(i,{src:m,alt:"lokalise.i18n-ally"})}),e.jsx(n,{level:2,children:"使用国际化"}),e.jsxs(l,{children:["国际化文件默认存储在",e.jsx(a,{copyable:!0,code:!0,children:"src/locales"}),"文件夹下面，打开之后，你将会看到两个文件夹：",e.jsxs("ul",{children:[e.jsx("li",{children:"zh-CN（中文）"}),e.jsx("li",{children:"en-US（英文）"})]})]}),e.jsx(l,{children:"其中 global 文件夹存放的是公共或者全局的翻译文件。"}),e.jsx(l,{children:"其他情况比如新建一个页面那么简单新建一个文件夹来存放就好了。"}),e.jsx(l,{children:"根据实践，存放翻译的 JSON 文件最好超过一层，下面两种都是友好的。"}),e.jsx(l,{children:e.jsx(i,{src:b,alt:"i18n Translation"})}),e.jsx(n,{level:2,children:"在 JSX 中使用"}),e.jsx(l,{children:e.jsx("pre",{children:j})}),e.jsx(h,{}),e.jsx(n,{level:2,children:"在纯 JS 或 TS 中使用"}),e.jsx(l,{children:e.jsx("pre",{children:u})}),e.jsx(l,{})]})}export{A as default};
