import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_02-配置文件" tabindex="-1"><a class="header-anchor" href="#_02-配置文件" aria-hidden="true">#</a> 02 配置文件</h1><p>我的提炼：</p><ol><li>复制下面配置规则到webpack.config.js文件中。</li><li>使用命令npx webpack直接可以运行打包。</li></ol><p>原文</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    mode: 指定打包的模式, 模式有两种
    一种是开发模式(development): 不会对打包的JS代码进行压缩
    还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
    * */</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;production&quot; | &quot;development&quot;</span>
    <span class="token comment">/*
    entry: 指定需要打包的文件
    * */</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        filename: 指定打包之后的JS文件的名称
        * */</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/*
        path: 指定打包之后的文件存储到什么地方
        * */</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;bundle&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","02配置文件.html.vue"]]);export{u as default};
