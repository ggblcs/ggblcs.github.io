import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_28-hmr热更新上" tabindex="-1"><a class="header-anchor" href="#_28-hmr热更新上" aria-hidden="true">#</a> 28 HMR热更新上</h1><p><strong>没什么用</strong></p><p>虽然能禁止浏览器自动刷新，但是，新改动的代码依然会起作用，只是js动态添加的数据不会像刷新一样被清空了。</p><p>在2021年的今天，我不安装HMR只用默认的devServer也能实现这效果。也就是觉得<strong>HMR没什么用</strong>了。</p><p>另一个老师讲的不一样，说HMR是在devserve开启时只更新你修改的模块，所以浏览器也不刷新了（支持html和css，默认不太支持js）。如果你没有开启这个，就会每次在你修改代码时整个页面重新打包，所以既浪费时间，浏览器还会刷新一下体验不好。</p><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是HMR?
1.1通过webpack-dev-server自动打包并没有真正的放到指定的目录中
因为读写磁盘是非常耗时和消耗性能的,
所以为了提升性能webpack-dev-server将转换好的内容直接放到了内存中
1.2通过webpack-dev-server可以实现实时监听打包内容的变化,
每次打包之后都会自动刷新网页, 但是正是因为每当内容被修改时都会自动刷新网页
所以给我们带来了很多不便, 这时就需要通过HMR插件来优化调试开发
1.3HMR(HotModuleReplacementPlugin)热更新插件,
会在内容发生改变的时候时时的更新修改的内容但是不会重新刷新网站(重新刷新网页会导致js动态添加数【比如点击按钮新增段落】据重置)

2.HMR使用:
HotModuleReplacementPlugin是一个内置插件, 所以不需要任何安装直接引入webpack模块即可使用
2.1在devServer中开启热更新
hot: true, // 开启热更新
hotOnly: true // 即使热更新不生效，浏览器也不自动刷新
2.2在webpack.config.js中创建热更新插件
new Webpack.HotModuleReplacementPlugin()

3.注意点:
如果是通过style-loader来处理CSS, 那么经过前面两步就已经实现了热更新
如果是通过MiniCssExtractPlugin.loader来处理CSS, 那么还需要额外配置MiniCssExtractPlugin.loader
options:{
    hmr: true
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-使用" tabindex="-1"><a class="header-anchor" href="#_02-使用" aria-hidden="true">#</a> 02 使用</h2><p>内部插件，不用下载</p><p><code>webpack.config.js</code>配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    devServer: 自动检测文件变化配置
    * */</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;./bundle&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9090</span><span class="token punctuation">,</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 域名跨域</span>
            <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// https跨域</span>
            <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">}</span> <span class="token comment">// 路径重写, 将路径中的api替换为空</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启热更新, 只要开启了热更新就不会自动刷新网页了===新增==</span>
        <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 哪怕不支持热更新也不要刷新网页===新增==</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">Webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-额外配置" tabindex="-1"><a class="header-anchor" href="#_03-额外配置" aria-hidden="true">#</a> 03 额外配置</h2><blockquote><p>如果使用的是<code>style-loader</code>[将css插入HTML]，<strong>不需要</strong>此额外配置。</p><p>如果使用的是<code>MiniCssExtractPlugin.loader</code>[将CSS单独打包到一个文件中]，<strong>需要</strong>此配置才能热更新CSS，否则编辑css文件后，没效果</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// loader: &quot;style-loader&quot;</span>
<span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
<span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//关键</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-版本更新" tabindex="-1"><a class="header-anchor" href="#_04-版本更新" aria-hidden="true">#</a> 04 版本更新</h2><p>新版本这样配置，不然报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token string">&quot;only&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[t];function l(i,r){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","28HMR热更新上.html.vue"]]);export{d as default};
