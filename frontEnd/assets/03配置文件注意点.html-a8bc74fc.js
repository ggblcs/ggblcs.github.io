import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_03-配置文件注意点" tabindex="-1"><a class="header-anchor" href="#_03-配置文件注意点" aria-hidden="true">#</a> 03 配置文件注意点</h1><p>我的提炼</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>教你修改配置文件名，应该不常用！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>老师原文</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.webpack配置注意事项
配置文件的名称必须叫做: webpack.config.js, 否则直接输入 npx webpack打包会出错
如果要使用其它名称, 那么在输入打包命令时候必须通过 --config 指定配置文件名称
npx webpack --config xxx

2.打包命令简化
每次输入npx webpack --config xxx来打包文件会有一点蛋疼, 所以我们可以通过npm script来简化这个操作
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx webpack --config nj.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nj.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function l(o,c){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","03配置文件注意点.html.vue"]]);export{d as default};
