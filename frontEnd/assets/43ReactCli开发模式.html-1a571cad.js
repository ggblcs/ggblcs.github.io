import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_43-reactcli开发模式" tabindex="-1"><a class="header-anchor" href="#_43-reactcli开发模式" aria-hidden="true">#</a> 43 ReactCli开发模式</h1><p>从本章开始，项目的内容。</p><p>全程高能，默写配置，tea 很牛。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// corss-env 能定义环境变量</span>
<span class="token comment">// 1. 安装略</span>
<span class="token comment">// 2. dev: &quot;cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js&quot; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 补全导入后缀名</span>
<span class="token keyword">import</span> xxx <span class="token keyword">from</span> <span class="token string">&quot;index&quot;</span>
<span class="token comment">// webpack.config.js</span>
<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// webpack解析模块加载选项</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span> <span class="token comment">// 自动补全文件扩展名</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 默认webpack 不支持 HMR 热更新 js 文件，想更新在 main.js 写额外配置代码，太麻烦</span>
<span class="token comment">// React 开发了插件解决（仅React项目），React Refresh Webpack plugin</span>
<span class="token comment">// npm install -D @pmmmwh/react-refresh-webpack-plugin  react-refresh</span>
<span class="token comment">// 配置自己搜，也可以看下面（两部）</span>
<span class="token comment">// 一：在 babel-loader 的options 的plugins 增加 &quot;react-refresh/babel&quot;</span>
<span class="token comment">// 二：在plugins 中 new 一下 ReactRefreshWebpackPlugin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由中 ---/about， 但about并不是真实存在的文件或文件夹</span>
<span class="token comment">// 需要仍然返回index.html （单页应用）</span>
<span class="token comment">// 解决：devServer: { historyApiFallback: true}， 解决刷新404 问题。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[c];function l(p,o){return n(),a("div",null,i)}const d=s(t,[["render",l],["__file","43ReactCli开发模式.html.vue"]]);export{d as default};
