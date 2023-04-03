import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_048-koa2基本使用" tabindex="-1"><a class="header-anchor" href="#_048-koa2基本使用" aria-hidden="true">#</a> 048 Koa2基本使用</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.如何使用Koa?
1.1手动安装手动配置
1.2利用Koa脚手架工具安装使用(Koa-generator)

2.手动安装手动配置
cnpm install koa --save
https://www.npmjs.com/package/koa
* */</span>
<span class="token comment">// 1.导入Koa</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.创建服务端实例对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// response</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;Hello Koa&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.指定监听的端口</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","048Koa2基本使用.html.vue"]]);export{d as default};
