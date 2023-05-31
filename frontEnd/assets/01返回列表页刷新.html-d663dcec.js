import{_ as t,M as p,p as o,q as c,R as n,t as a,N as e,a1 as i}from"./framework-96b046e1.js";const l={},r=i(`<h1 id="_01-返回列表页刷新" tabindex="-1"><a class="header-anchor" href="#_01-返回列表页刷新" aria-hidden="true">#</a> 01 返回列表页刷新</h1><h2 id="_1-返回列表页刷新页面方案一" tabindex="-1"><a class="header-anchor" href="#_1-返回列表页刷新页面方案一" aria-hidden="true">#</a> 1 返回列表页刷新页面方案一</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/pages/myApplication/decorationManagement/selectDecorationTemplate&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">getSelectedId</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>workorder_id <span class="token operator">=</span> id
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;getSelectedId&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeId<span class="token punctuation">)</span>
uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={href:"https://uniapp.dcloud.net.cn/api/router.html#navigateto",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/weixin_58791464/article/details/127689424",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/BelleLinQ/article/details/128833955",target:"_blank",rel:"noopener noreferrer"};function v(_,h){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",u,[a("官网地址-页面和路由"),e(s)])]),n("p",null,[a("方案二 "),n("a",d,[a("较多方法"),e(s)]),a(" 方案三 "),n("a",k,[a("pages"),e(s)])])])}const g=t(l,[["render",v],["__file","01返回列表页刷新.html.vue"]]);export{g as default};
