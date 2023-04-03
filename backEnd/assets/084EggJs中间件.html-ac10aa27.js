import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_084-eggjs中间件" tabindex="-1"><a class="header-anchor" href="#_084-eggjs中间件" aria-hidden="true">#</a> 084 EggJs中间件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.EggJS中间件
EggJS是基于KOA的, 所以EggJS的中间件形式和 Koa 的中间件形式是一样的
只不过EggJS规定我们需要将中间件写到特殊的目录中
只不过EggJS中为中间件提供了多种使用方式
https://eggjs.org/zh-cn/basics/middleware.html
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建<code>/app/middleware</code></p><hr><p>在<code>middleware</code>新增自定义文件<code>clientCheck.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 自定义中间件
 * <span class="token keyword">@param</span> <span class="token parameter">options</span> 是一个对象
 * <span class="token keyword">@param</span> <span class="token parameter">app</span>     服务器实例对象
 */</span>
<span class="token comment">// { ua: /Chrome/ }</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 1.获取客户端的请求信息</span>
       <span class="token keyword">let</span> userAgent <span class="token operator">=</span>  ctx<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">// 2.判断客户端是否是谷歌浏览器</span>
       <span class="token keyword">let</span> flag <span class="token operator">=</span> options<span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
           ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">401</span><span class="token punctuation">;</span>
           ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;不支持当前的浏览器&#39;</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>config.default.js</code>中配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// exports.keys = &#39;COM.it666.*?&#39;; // 用于生成客户端中保存的userId</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token string">&#39;COM.it666.*?&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">security</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">csrf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">ignoreJSON</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 false，当设置为 true 时，将会放过所有 content-type 为 \`application/json\` 的请求</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">view</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">mapping</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&#39;.html&#39;</span><span class="token operator">:</span><span class="token string">&#39;ejs&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logger</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置需要的中间件，数组顺序即为中间件的加载顺序</span>
    <span class="token comment">// 注意点: 这里的中间件名称就是文件名称</span>
    <span class="token comment">// middleware: [ &#39;clientCheck&#39; ],</span>
    <span class="token comment">// 这里的key也是中间件文件的名称</span>
    <span class="token comment">// 这里的值将来就会传递给中间件的options</span>
    <span class="token comment">// clientCheck: {</span>
    <span class="token comment">//     ua: /Chrome/</span>
    <span class="token comment">// },</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> clientCheck <span class="token operator">=</span> app<span class="token punctuation">.</span>middleware<span class="token punctuation">.</span><span class="token function">clientCheck</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">ua</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Chrome</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","084EggJs中间件.html.vue"]]);export{u as default};
