import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_06-新世界浏览器脚本" tabindex="-1"><a class="header-anchor" href="#_06-新世界浏览器脚本" aria-hidden="true">#</a> 06 新世界浏览器脚本</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//==UserScript==</span>
<span class="token comment">// @name         查看新世界下载链接</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net</span>
<span class="token comment">// @include		 *</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>player_aaaa<span class="token punctuation">.</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> arrObj <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;arr&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arrObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arrObj <span class="token operator">=</span> <span class="token string">&#39;{&quot;arr&quot;:[]}&#39;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> arrs <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>arrObj<span class="token punctuation">)</span>
            <span class="token keyword">let</span> arr <span class="token operator">=</span> arrs<span class="token punctuation">.</span>arr
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>player_aaaa<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;arr&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arrs<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","06新世界浏览器脚本.html.vue"]]);export{r as default};
