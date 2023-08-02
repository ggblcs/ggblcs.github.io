import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_04-koa2处理动态网页" tabindex="-1"><a class="header-anchor" href="#_04-koa2处理动态网页" aria-hidden="true">#</a> 04 Koa2处理动态网页</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Koa如何处理动态资源?
Koa是一个轻量级的框架, 它将所有的附加功能都封装到了独立的模块中
所以想要使用这些功能, 都必须先安装才能使用

https://www.npmjs.com/package/koa-views
* */</span>
<span class="token comment">// 1.导入Koa</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> serve <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理静态资源的模块</span>
<span class="token keyword">const</span> views <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理动态资源的模块</span>

<span class="token comment">// 2.创建服务端实例对象</span>
<span class="token keyword">const</span> <span class="token number">04</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">0.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册处理静态资源的中间件</span>
<span class="token number">0.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">views</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">extension</span><span class="token operator">:</span> <span class="token string">&#39;ejs&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// response</span>
<span class="token comment">// koa中的ctx就是express中的req,res的结合体</span>
<span class="token number">0.</span><span class="token function">use</span><span class="token punctuation">(</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ctx.body = &#39;Hello Koa&#39;;</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;com.it666.www&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.指定监听的端口</span>
<span class="token number">0.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","04Koa2处理动态网页.html.vue"]]);export{r as default};
