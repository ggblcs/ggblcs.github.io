import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_07-搭建vuepress博客" tabindex="-1"><a class="header-anchor" href="#_07-搭建vuepress博客" aria-hidden="true">#</a> 07 搭建vuepress博客</h1><h2 id="_1-安装初始化" tabindex="-1"><a class="header-anchor" href="#_1-安装初始化" aria-hidden="true">#</a> 1 安装初始化</h2><ol><li><p>安装node并检测，cmd输入<code>node -v</code>显示<code>v14.15.0</code>，输入<code>npm -v</code>显示<code>6.14.8</code>。表示安装成功。</p></li><li><p>安装cnpm并检测，cmd输入<code>npm install -g cnpm --registry=https://registry.npm.taobao.org</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装后会显示安装路径
C:\\Users\\26254\\AppData\\Roaming\\npm\\cnpm -&gt; C:\\Users\\26254\\AppData\\Roaming\\npm\\node_modules\\cnpm\\bin\\cnpm
+ cnpm@6.1.1
added 688 packages from 971 contributors in 31.368s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入cnpm -v检测是否正常，判断是否需要配置环境变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>path下添加C:\\Users\\26254\\AppData\\Roaming\\npm因该是吧？？？反正我没配。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>全局安装vuepress：cmd中输入<code>cnpm install -g vuepress</code>。</p></li><li><p>使用命令，建立文件目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir vuepress-blog
cd vuepress-blog
mkdir docs
npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入docs文件夹，新建md文件，名为README.md，并在README（首页），写入以下内容：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /img/logo.jpg
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> 快速上手 →
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /zh/guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 以Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue驱动
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受vue+webpack的开发体验，在Markdown中使用vue组件，同时可以使用vue来开发自定义主题。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 为每个页面预渲染生成静态的HTML，同时在页面被加载时，将作为SPA运行。
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright @ 2018<span class="token punctuation">-</span>present Evan You</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-核心配置" tabindex="-1"><a class="header-anchor" href="#_2-核心配置" aria-hidden="true">#</a> 2 核心配置</h2><ol><li><p>在cmd中，进入docs文件夹内<code>cd docs</code>。</p></li><li><p>在cmd中，输入<code>mkdir .vuepress</code>创建.vuepress文件夹，因为带点，所以不用命令有可能创建失败。</p></li><li><p>在cmd中，输入<code>cd .vuepress</code>进入，输入<code>touch config.js</code>创建config.js文件。也可以直接鼠标右击创建txt文件改名js文件。</p><ol><li>config.js文件时整个项目的核心配置文件，所有菜单、栏目相关的配置均在该模块中。</li><li>事实上我输入命令touch显示不认识该命令，只好手动建文件了。</li></ol></li><li><p>在config.js中输入以下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;桓&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;军哥带你上王者&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span><span class="token comment">//一般不配，默认在.vuepress目录下</span>
	<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;7777&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/logo.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
		<span class="token comment">// [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/img/logo.favicon&#39; }],</span>
		<span class="token comment">// [&#39;link&#39;, { rel: &#39;stylesheet&#39;, href: &#39;/css/style.css&#39; }],</span>
		<span class="token comment">// [&#39;script&#39;, { charset: &#39;utf-8&#39;, src: &#39;/js/main.js&#39; }],//添加js</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// nav: require(&quot;./nav.js&quot;),</span>
        <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;懵逼指南&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/guide/&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// sidebar: require(&quot;./sidebar.js&quot;),</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;新手指南&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;/guide/notes/one&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;新手指南&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;/guide/notes/two&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;last Updated&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">searchMaxSuggestoins</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		<span class="token literal-property property">serviceWorker</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">UpdatePopup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;有新的内容.&quot;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&#39;更新&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">editLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&#39;在GitHub上编辑此页！&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在cmd中输入<code>cd ..</code>进入vuepress-blog文件夹，这是根目录，主要是这里面有个json文件。</p></li><li><p>在cmd中输入命令<code>vuepress dev docs</code>运行一下试试。</p></li><li><p>一般情况下不会报错，会显示链接http://localhost:7777/</p></li><li><p>运行后浏览器中有可能会出现乱码，是因为编码问题。</p><ol><li>把readme重新指定编码格式，我这次没出现这个问题。</li><li>在cmd中<code>ctrl+c</code>结束运行，再输入<code>vuepress dev docs</code>重新运行。</li></ol></li></ol><h2 id="_3-导航栏的配置" tabindex="-1"><a class="header-anchor" href="#_3-导航栏的配置" aria-hidden="true">#</a> 3 导航栏的配置</h2><ol><li><p>找到在.vuepress文件夹下的config.js文件并打开。</p></li><li><p>找到themeConfig主题配置。</p></li><li><p>找到下面代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;懵逼指南&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/guide/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在导航栏只有一个导航，数量较少，在数量较多时，简易引入新的js文件，怎么做？看下面步骤：</p><ol><li><p>将config.js文件中nav的代码修改一下，把原来注释的取消注释，并把该注释的注释掉，就是改成引入的js路径文件。</p></li><li><p>在config.js文件所在文件夹中新建nav.js文件。</p></li><li><p>在nav.js文件中复制以下内容。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;懵逼指南&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">{</span>
		<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;面试宝典&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;初级开发篇&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/baodian/zero/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;中高进阶篇&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/baodian/high/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	
	<span class="token punctuation">{</span>
		<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;工具箱&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;在线编辑&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;图片压缩&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://tinypng.com/&#39;</span> <span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;在线服务&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;阿里云&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.aliyun.com/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;腾讯云&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://cloud.tencent.com/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;技术分享指南&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;掘金&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://juejin.im/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSDN&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://blog.csdn.net/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解释说明：</p><ol><li><p>比如下面代码，text是标题，link是地址。</p></li><li><p>link有两种，既可以是本地的<code>/guide/</code>跳到某个目录下，也可以是外链<code>https://www.aliyun.com/</code>。link还可以不写，不写你就在技术分享界面上点不动，仅此而已。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;懵逼指南&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果想搞个下拉菜单（菜单之中有菜单）就弄个items就可以了。items中还可以有items。</p></li><li><p><code>/guide/</code>后面的那个斜杠默认是找readme文件的。</p></li></ol></li></ol></li></ol><h2 id="_4-侧边栏配置" tabindex="-1"><a class="header-anchor" href="#_4-侧边栏配置" aria-hidden="true">#</a> 4 侧边栏配置</h2><ol><li><p>首先在技术分享界面点击导航栏的某个，才能出现侧边栏。</p></li><li><p>像配置导航栏一样，</p></li><li><p>找到并删除或注释掉下面代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;新手指南&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;/guide/notes/one&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;新手指南&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;/guide/notes/two&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>找到并取消注释下面代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sidebar: require(&quot;./sidebar.js&quot;),</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在config.js文件旁新建文件sidebar.js。这个文件作为总管控侧边栏js文件。</p></li><li><p>在js文件中写入下面代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//由于一个一个手动配不利于维护，直接管控</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../guide/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//懵逼指南的侧边栏，第一个模块下面的侧边栏//require函数里可以省略.js文件后缀名</span>

	<span class="token string-property property">&#39;/baodian/zero&#39;</span><span class="token operator">:</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../baodian/zero/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//第2个模块下面的侧边栏</span>
	<span class="token string-property property">&#39;/baodian/high&#39;</span><span class="token operator">:</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../baodian/high/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显然上面需要在上级目录（与.vuepress同级）中新建两个文件夹<code>guide baodian</code>。</p></li><li><p>下面先完成guide里的配置。</p></li><li><p>在guide文件夹里新建README.md文件，内容随便写。</p></li><li><p>在guide文件夹里新建sidebar.js文件作为侧边栏具体配置文件。并写入如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span>
<span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;新手指南&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;/guide/notes/one&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;芝麻学院&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;/guide/notes/two&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解释说明：</p><ol><li><p>如下代码指向的其实是notes文件夹里的one.md。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;/guide/notes/one&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如下代码表示可以折叠。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li><li><p>显然guide文件夹下还需要新建一个文件夹<code>notes</code>。</p></li><li><p>notes文件夹下需要建两个文件分别是：one.md和two.md。里面随便写上一些话。</p></li><li><p>下面再完成baodian里的配置。</p></li><li><p>在baodian文件夹里新建zero和high两个文件夹。</p></li><li><p>在zero文件夹里建sidebar.js文件。并写入如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;初级宝典&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//表示可以折叠</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/baodian/zero/notes/bd1&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// { </span>
    <span class="token comment">//     title: &#39;知码学院&#39;,</span>
    <span class="token comment">//     collapsible: true,</span>
    <span class="token comment">//     children: [</span>
    <span class="token comment">//         &#39;/guide/notes/two&#39;,</span>
    <span class="token comment">//     ]</span>
    <span class="token comment">// }</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在zero文件夹里新建README.md文件并写入如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zero下的readme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在zero文件夹下新建note文件夹</p></li><li><p>在note文件夹里新建bd1.md文件，并写入如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># one

## <span class="token number">222222222222222</span>

### <span class="token number">33333333333333333</span>
​<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
title: &#39;关于我&#39;
date: 2020-11-9 22:38:39 时间，按时间显示的话，就是根据此时间
# 永久拦截
permalink: &#39;/guide&#39;  /点击的话就跳转到这个目录
isTimeLine: true  //是否显示时间线
sidebar: true  //是否侧边栏
isShowComment: true  //是否能评论
​</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在high文件夹下新建sidebar.js文件，并写入如下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;高级宝典&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//表示可以折叠</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/baodian/high/notes/bd2&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// {</span>
    <span class="token comment">//     title: &#39;知码学院&#39;,</span>
    <span class="token comment">//     collapsible: true,</span>
    <span class="token comment">//     children: [</span>
    <span class="token comment">//         &#39;/guide/notes/two&#39;,</span>
    <span class="token comment">//     ]</span>
    <span class="token comment">// }</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在high文件夹下新建README.md文件，内容随便写。</p></li><li><p>在high文件夹下新建notes文件夹</p></li><li><p>在notes文件夹下新建bd2.md文件，内容随便写。</p></li><li><p>运行一下试试：</p></li></ol><h2 id="_5-静态资源配置" tabindex="-1"><a class="header-anchor" href="#_5-静态资源配置" aria-hidden="true">#</a> 5 静态资源配置</h2><p>vuepress默认图片目录是<code>/docs/.vuepress/public/</code>。</p><ol><li>在.vuepress文件夹下新建public文件夹。</li><li>在public文件夹下新建img文件夹。</li><li>在img文件夹下放入两张图片，名为<code>logo.jpg ad.jpg</code>。</li><li>图片路径在Readme.md文件（只是让你知道，不需改）。</li></ol><p>如何在导航栏也放logo？</p><ol><li><p>在public文件夹下新建css文件夹。</p></li><li><p>通过浏览器开发者模式查看logo要放入的div的类名。</p></li><li><p>在css文件夹中新建style.css文件。并写入下面内容：</p></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#app .navbar .home-link span::before</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 2.4rem<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;../img/logo.jpg&#39;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在config.js中找到下面的内容取消注释：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// [&#39;link&#39;, { rel: &#39;stylesheet&#39;, href: &#39;/css/style.css&#39; }],</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><p>拓展（老师没讲具体操作）：另一张图片ad.jpg是为了添加个小广告，js可以使广告变成动态的。但是没细讲，所以也不用操作。</p></li><li><p>运行一下试试。</p></li><li><p>在config.js中有这么一句代码，意思是标签页的标签图标地址：</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.favicon&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-部署" tabindex="-1"><a class="header-anchor" href="#_6-部署" aria-hidden="true">#</a> 6 部署</h2><ol><li><p>在docs/.vuepress/config.js中设置正确的base。</p><ol><li><p>如果你打算发布到<code>https://&lt;USERNAME&gt;.github.io</code>，则可以省略这一步，因为base默认值为<code>&quot;/&quot;</code>。</p></li><li><p>如果打算发布到<code>https://&lt;username&gt;.github.io/&lt;REPO&gt;</code></p><p>(也就是说你的仓库在<code>https://github.com&lt;USERNAME&gt;/&lt;REPO&gt;</code>),</p><p>则将base设置为<code>&quot;/&lt;REPO&gt;/&quot;。</code></p></li></ol></li><li><p>新建仓库，命名为<code>zhyboys.github.io</code>，zhyboys是用户名</p></li><li><p>在vuepress-blog文件夹里（与docs同级）新建deploy.sh文件，并写入下面内容：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件 docs:build是在某文件配置的命令（名字是自己起的）</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:zhyboys/zhyboys.github.io.git master

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意要把</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git@github.com:zhyboys/zhyboys.github.io.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>中的用户名zhyboys修改为自己的。</p><ol start="4"><li>在package.json文件中加入一句话<code>&quot;docs:build&quot;: &quot;vuepress build docs&quot;</code>，加入后的样子如下：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>安装好git和小乌龟</p></li><li><p>在vuepress-blog文件夹下右击，git bush here。</p></li><li><p>工作区在哪就在那bush。</p></li><li><p>输入命令<code>bash deploy.sh</code></p></li><li><p>搭建好的地址</p></li><li><blockquote><p>https://wwe.lanzous.com/iqQBNi8nnna</p></blockquote></li><li><p>需要用到的安装包：git node，小乌龟虽有，可以不用。链接：https://wwe.lanzous.com/iNL8Zi8nqwh</p></li></ol><h2 id="_7-防忘记" tabindex="-1"><a class="header-anchor" href="#_7-防忘记" aria-hidden="true">#</a> 7 防忘记</h2><p>新建分类</p><ol><li>新建分类需要在nav.js配置导航。</li><li>新建分类（笔记文件夹）需要在siderbar.js配置侧边栏。</li><li>新建分类的根目录需要新建siderbar.js分配题目。</li><li>新建分类的根目录需要新建readme.md文件。</li></ol><p>新建笔记</p><ol><li>新建笔记需要在新建分类的siderbar.js登记。</li></ol><p>关于nav样式</p><ol><li>表示点击某个nav链接直接进入谋篇文章。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>text<span class="token operator">:</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>link<span class="token operator">:</span><span class="token string">&quot;/typora/00前端系列/03JavaScript/001概念&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>表示点击某个nav直接进入文件夹下的README.md</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;MySQL&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/typora/数据库MySQL/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于siderbar样式</p><ol><li>没有分类标题，直接一竖列文章标题，不可折叠。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//表示可以折叠</span>
<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;/typora/数据库MySQL/01数据库操作&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/02表的操作&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/03数据的操作&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/04Where条件&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/05数据类型&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/06SQL分类与字符集&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/07列属性&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;/typora/数据库MySQL/08数据完整性&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>有文章分类标题，可以折叠。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;篇一&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//表示可以折叠</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;/typora/数据库MySQL/01数据库操作&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/02表的操作&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/03数据的操作&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/04Where条件&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;篇二&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;/typora/数据库MySQL/05数据类型&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/06SQL分类与字符集&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/07列属性&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/typora/数据库MySQL/08数据完整性&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-错误处理" tabindex="-1"><a class="header-anchor" href="#_8-错误处理" aria-hidden="true">#</a> 8 错误处理</h2><ol><li><p>会有一个就是language MySQL not exist 我猜测并不是自己没有在sql代码中标记该语言，相反没有标记反倒应该不会报错，应该是vupress库中没有mysql语言。</p></li><li><p>插入图片，当前图片路径必须带<code>./</code>，这点一定要注意，默认不带，需要修改。</p></li><li><p>在开头使用下列的原因：这样写会导致只有侧边栏有题目，而正文不显示，可以添加序号，这样侧边栏显得有序。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 02数据类型
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>正文用#写标题侧边栏也会收录，但正文写一级标题用序号可能不太好看。</p></li><li><p>如果标题采用标签，标签前加#，则编译后技术分享上面侧边栏标题为空。一级标题就写#不要用二级标题代替。</p></li><li><p>不能写成序号后直接跟一句代码，否则编译出错，如下所示。</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">数组类型 数组名[数组长度];</span><span class="token template-punctuation string">\`</span></span>
<span class="token number">2.</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">数组类型 数组名[数组长度] = {1,2,3};</span><span class="token template-punctuation string">\`</span></span>
<span class="token number">3.</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">数组类型 数组名[] = {1,2,3};</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>正文中不能出现单个标签而不闭合，因为md中的html也会被识别编译，如果出现单个标签而不闭合，或者说只是想引用标签（如下）。总之，正文中不正确使用 html 标签会报错。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;span&gt;\` 想在正文中引用标签就要使用字符串模板符号包裹起来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li><p>正文中使用 <code>&lt;style&gt;</code>标签和<code>&lt;script&gt;</code> 标签会编译出错。或者说其中的某一个标签不能使用。编译时提示这两个标签都将被忽略并且编译失败。最终我把两个标签都删了解决了问题。</p></li><li><p>内存溢出问题。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 首先，我浏览了别人的技术分享网站，调大的内存限制，但是好像并没有什么用！
技术分享地址：https://cloud.tencent.com/developer/article/1819759

2. 然后我下载了最新版的vuepress，会跑出来很多错，这些错都是因为md笔记语法有问题(cmd都列出来了)，我修改了有问题的语法，就成功了。

3. 在解决完之后，最后我发现github上，已经有人遇到了这个问题，并且有解决方案.

4. 终极解决方案（因为执行前三步只是暂时解决了问题，随着笔记的增多，问题再次出现）
    &quot;docs:dev&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vuepress/bin/vuepress.js dev docs&quot;,
    &quot;docs:build&quot;: &quot;node --max_old_space_size=8192 ./node_modules/vuepress/bin/vuepress.js build docs&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-node自动创建文件" tabindex="-1"><a class="header-anchor" href="#_9-node自动创建文件" aria-hidden="true">#</a> 9 node自动创建文件</h2><p>在node环境中拷贝运行即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Create</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileNameArray <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;00zs.md&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;01zs.md&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>serialLength <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 序号长度</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rootPath <span class="token operator">=</span> <span class="token string">&#39;./typora&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">createDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> isExist <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isExist<span class="token punctuation">)</span><span class="token punctuation">{</span>
            fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 在新建的目录下创建文件</span>
    <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileNameArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileNameArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
            <span class="token keyword">let</span> fileSerial <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serialLength<span class="token punctuation">)</span>
            <span class="token keyword">let</span> fileContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"># </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileSerial<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>serialLength<span class="token punctuation">,</span> <span class="token punctuation">(</span>fileName<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
            <span class="token keyword">let</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
            writeStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fileContent<span class="token punctuation">)</span>
            writeStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;\\t&#39;</span> <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&#39; 已创建&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            writeStream<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","07搭建vuepress博客.html.vue"]]);export{u as default};
