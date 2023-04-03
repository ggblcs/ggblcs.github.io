import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_08-style获取css" tabindex="-1"><a class="header-anchor" href="#_08-style获取css" aria-hidden="true">#</a> 08 style获取CSS</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过style属性获取宽高</p><ol><li>获取的宽高不包括 边框和内边距</li><li>只能获取内设置的宽高, 不能获取CSS设置的宽高</li><li>可以获取也可以设置</li><li>高级低级浏览器都支持</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var oDiv = document.getElementById(&quot;box&quot;);
oDiv.style.width = &quot;166px&quot;;
oDiv.style.height = &quot;166px&quot;;
console.log(oDiv.style.width);
console.log(oDiv.style.height);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(e,[["render",i],["__file","08style获取CSS.html.vue"]]);export{d as default};
