import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_092-eggjs统一接口响应格式" tabindex="-1"><a class="header-anchor" href="#_092-eggjs统一接口响应格式" aria-hidden="true">#</a> 092 EggJs统一接口响应格式</h1><p>使用扩展实现模板</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">errorCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 成功状态码</span>
        <span class="token number">200</span><span class="token operator">:</span> <span class="token string">&#39;请求成功。客户端向服务器请求数据，服务器返回相关数据&#39;</span><span class="token punctuation">,</span>
        <span class="token number">201</span><span class="token operator">:</span> <span class="token string">&#39;资源创建成功。客户端向服务器提供数据，服务器创建资源&#39;</span><span class="token punctuation">,</span>
        <span class="token number">202</span><span class="token operator">:</span> <span class="token string">&#39;请求被接收。但处理尚未完成&#39;</span><span class="token punctuation">,</span>
        <span class="token number">204</span><span class="token operator">:</span> <span class="token string">&#39;客户端告知服务器删除一个资源，服务器移除它&#39;</span><span class="token punctuation">,</span>
        <span class="token number">206</span><span class="token operator">:</span> <span class="token string">&#39;请求成功。但是只有部分回应&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 错误状态码</span>
        <span class="token number">400</span><span class="token operator">:</span> <span class="token string">&#39;请求无效。数据不正确，请重试&#39;</span><span class="token punctuation">,</span>
        <span class="token number">401</span><span class="token operator">:</span> <span class="token string">&#39;请求没有权限。缺少API token，无效或者超时&#39;</span><span class="token punctuation">,</span>
        <span class="token number">403</span><span class="token operator">:</span> <span class="token string">&#39;用户得到授权，但是访问是被禁止的。&#39;</span><span class="token punctuation">,</span>
        <span class="token number">404</span><span class="token operator">:</span> <span class="token string">&#39;发出的请求针对的是不存在的记录，服务器没有进行操作。&#39;</span><span class="token punctuation">,</span>
        <span class="token number">406</span><span class="token operator">:</span> <span class="token string">&#39;请求失败。请求头部不一致，请重试&#39;</span><span class="token punctuation">,</span>
        <span class="token number">410</span><span class="token operator">:</span> <span class="token string">&#39;请求的资源被永久删除，且不会再得到的。&#39;</span><span class="token punctuation">,</span>
        <span class="token number">422</span><span class="token operator">:</span> <span class="token string">&#39;请求失败。请验证参数&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 服务器错误状态码</span>
        <span class="token number">500</span><span class="token operator">:</span> <span class="token string">&#39;服务器发生错误，请检查服务器。&#39;</span><span class="token punctuation">,</span>
        <span class="token number">502</span><span class="token operator">:</span> <span class="token string">&#39;网关错误&#39;</span><span class="token punctuation">,</span>
        <span class="token number">503</span><span class="token operator">:</span> <span class="token string">&#39;服务不可用，服务器暂时过载或维护。&#39;</span><span class="token punctuation">,</span>
        <span class="token number">504</span><span class="token operator">:</span> <span class="token string">&#39;网关超时&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","092EggJs统计接口响应格式.html.vue"]]);export{u as default};
