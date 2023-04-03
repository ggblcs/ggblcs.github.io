import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_11-三大家族client" tabindex="-1"><a class="header-anchor" href="#_11-三大家族client" aria-hidden="true">#</a> 11 三大家族client</h1><p>内容包括clientWidth，clientHeight，clientTop，clientLeft</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>/*
1.offsetWidth = 宽度 + 内边距 + 边框
 offsetHeight = 高度 + 内边距 + 边框
2.clientWidth = 宽度 + 内边距
 clientHeight = 高度 + 内边距
*/
let oDiv = document.querySelector(&quot;div&quot;);
// console.log(oDiv.clientWidth);
// console.log(oDiv.clientHeight);

/*
1.offsetLeft/offsetTop: 距离第一个定位祖先元素偏移位 || body
2.clientLeft/clientTop: 左边框 和 顶部边框
*/
console.log(oDiv.clientLeft);
console.log(oDiv.clientTop);
oDiv.scrollWidth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 50px solid #000<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function c(p,o){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","11三大家族client.html.vue"]]);export{u as default};
