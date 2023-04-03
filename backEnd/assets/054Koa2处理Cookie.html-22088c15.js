import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_054-koa2处理cookie" tabindex="-1"><a class="header-anchor" href="#_054-koa2处理cookie" aria-hidden="true">#</a> 054 Koa2处理Cookie</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Koa如何处理cookie?
- Koa中处理cookie不需要引入其他模块, 只要拿到ctx对象就可以操作cookie

https://demopark.github.io/koa-docs-Zh-CN/
https://demopark.github.io/koa-docs-Zh-CN/api/context.html
* */</span>
<span class="token comment">// 1.导入Koa</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> serve <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理静态资源的模块</span>
<span class="token keyword">const</span> views <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理动态资源的模块</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理路由的模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建路由对象</span>
<span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-bodyparser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 导入处理post请求参数的模块</span>

<span class="token comment">// 2.创建服务端实例对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册处理静态资源的中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">views</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">extension</span><span class="token operator">:</span> <span class="token string">&#39;ejs&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册处理动态资源的中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">bodyParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注册处理post请求参数的中间件</span>

<span class="token comment">// 处理路由</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/setCookie&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// ctx.cookies.set(&#39;name&#39;, &#39;lnj&#39;, {</span>
    <span class="token comment">//     path: &#39;/&#39;,</span>
    <span class="token comment">//     httpOnly: true,</span>
    <span class="token comment">//     maxAge: 24 * 60 * 60 * 1000</span>
    <span class="token comment">// });</span>
    <span class="token comment">// 注意点: 在koa中不能给cookie设置中文的值</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span><span class="token string">&#39;李南江&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// let value = new Buffer(&#39;李南江&#39;).toString(&#39;base64&#39;);</span>
    <span class="token comment">// console.log(value); // 5p2O5Y2X5rGf</span>
    <span class="token comment">// let res = new Buffer(&#39;5p2O5Y2X5rGf&#39;, &#39;base64&#39;).toString();</span>
    <span class="token comment">// console.log(res);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getCookie&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// console.log(ctx.cookies.get(&#39;name&#39;));</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> ctx<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;userName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 启动路由功能</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自动设置响应头</span>

<span class="token comment">// 3.指定监听的端口</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","054Koa2处理Cookie.html.vue"]]);export{k as default};
