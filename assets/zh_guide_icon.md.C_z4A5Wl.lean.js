import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.Dgf1XuiP.js";const d=JSON.parse('{"title":"图标","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/icon.md","filePath":"zh/guide/icon.md","lastUpdated":1731988959000}'),e={name:"zh/guide/icon.md"};function l(h,s,o,r,p,k){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="icon" tabindex="-1">图标 <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;图标 {#icon}&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请勿使用 Unicode 引用图标（或者它的变体 font-class 引用），因为它不支持彩色图标，需要引入字体文件，使用方式复杂且文件较大，涉及到图标请使用 SVG 图片。</p></div><h2 id="为什么使用-svg" tabindex="-1">为什么使用 SVG？ <a class="header-anchor" href="#为什么使用-svg" aria-label="Permalink to &quot;为什么使用 SVG？&quot;">​</a></h2><ul><li>支持多色图标。</li><li>矢量可无限缩放。</li><li>无兼容性问题。</li><li>轻量级，文件小。</li><li>支持像字体那样，通过 font-size, color 来调整样式。</li></ul><h2 id="svg-作为图标" tabindex="-1">SVG 作为图标？ <a class="header-anchor" href="#svg-作为图标" aria-label="Permalink to &quot;SVG 作为图标？&quot;">​</a></h2><p>使用了优秀的 <a href="https://react-svgr.com/docs/getting-started" target="_blank" rel="noreferrer">svgr</a> 来为项目赋能，默认开启了压缩，安装以下插件即可使用：</p><ol><li><a href="https://github.com/pd4d10/vite-plugin-svgr" target="_blank" rel="noreferrer">vite-plugin-svgr</a></li><li><code>@svgr/plugin-jsx</code> 和 <code>@svgr/plugin-svgo</code></li></ol><p>所有的图标放在 <a href="https://github.com/condorheroblog/react-antd-admin/tree/main/src/icons" target="_blank" rel="noreferrer">src/icons</a> 目录下，在 svg 文件中放入 svg 源文件，然后在 <code>icons/index.tsx</code> 文件中导出即可使用。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导出图标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Icon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ant-design/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Moon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./svg/moon.svg?react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MoonIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CustomIconComponentProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Icon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{Moon} {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其他文件中使用这个图标：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FollowSystemIcon, MoonIcon, SunIcon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#src/icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图标自动响应设置的字体和文字颜色</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;MoonIcon className=&quot;text-xl&quot; /&gt;</span></span></code></pre></div><h2 id="svg-作为图片" tabindex="-1">SVG 作为图片？ <a class="header-anchor" href="#svg-作为图片" aria-label="Permalink to &quot;SVG 作为图片？&quot;">​</a></h2><p>假如一个 svg 文件不是图标，仅仅作为图片使用，可以把这个文件放在在 <code>src/assets/svg</code> 目录下，那么在代码中这样使用：</p><h3 id="作为组件使用" tabindex="-1">作为组件使用 <a class="header-anchor" href="#作为组件使用" aria-label="Permalink to &quot;作为组件使用&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#src/assets/svg/logo.svg?react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;Logo /&gt;</span></span></code></pre></div><h3 id="作为-img-标签的地址" tabindex="-1">作为 img 标签的地址 <a class="header-anchor" href="#作为-img-标签的地址" aria-label="Permalink to &quot;作为 img 标签的地址&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> logo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#src/assets/svg/logo.svg?url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;img src={logo} alt=&quot;logo&quot; /&gt;</span></span></code></pre></div><h2 id="项目如何管理-svg-图标" tabindex="-1">项目如何管理 SVG 图标？ <a class="header-anchor" href="#项目如何管理-svg-图标" aria-label="Permalink to &quot;项目如何管理 SVG 图标？&quot;">​</a></h2><p>推荐下面两个在线网站，UI 可以方便上传项目 SVG 文件，开发人员也可以方便下载：</p><ol><li><a href="https://www.iconfont.cn/help/detail?spm=a313x.help_detail.i1.dfd524534.44ac3a81lKu1J6&amp;helptype=about" target="_blank" rel="noreferrer">iconfont</a></li><li><a href="https://bytedance.larkoffice.com/wiki/wikcnrOVHCJQ4V3a7mDvmLjrePf" target="_blank" rel="noreferrer">IconPark</a></li></ol><h2 id="为什么不使用图标精灵" tabindex="-1">为什么不使用图标精灵？ <a class="header-anchor" href="#为什么不使用图标精灵" aria-label="Permalink to &quot;为什么不使用图标精灵？&quot;">​</a></h2><p>如果你喜欢图标精灵，那么可以使用 <a href="https://github.com/vbenjs/vite-plugin-svg-icons" target="_blank" rel="noreferrer">vite-plugin-svg-icons</a> 插件来实现，但是这个插件需要手动配置，使用起来比较麻烦。</p><p>最重要的是，图标精灵使用方式也是以一个组件的方式，所以没必要引入图标精灵。</p><h2 id="为什么不使用-iconify-图标" tabindex="-1">为什么不使用 iconify 图标？ <a class="header-anchor" href="#为什么不使用-iconify-图标" aria-label="Permalink to &quot;为什么不使用 iconify 图标？&quot;">​</a></h2><p><a href="https://iconify.design/" target="_blank" rel="noreferrer">iconify</a> 是在线图标且是外网，第一次访问下载图标需要时间，所以第一次加载页面会闪动。，而且 iconify 是外链，万一外链挂了，图标就找不到了。正因为此，我们集成 iconify 到项目中。</p><p>但是非常推荐在 iconify 中寻找项目需要的图标，然后下载到本地使用，推荐第一个链接进行查找。</p><ol><li><a href="https://icon-sets.iconify.design/" target="_blank" rel="noreferrer">icon-sets</a></li><li><a href="https://icones.js.org/" target="_blank" rel="noreferrer">icones</a></li></ol>`,27)]))}const g=i(e,[["render",l]]);export{d as __pageData,g as default};
