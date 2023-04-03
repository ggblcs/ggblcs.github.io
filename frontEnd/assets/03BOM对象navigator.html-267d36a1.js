import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_03-bom对象navigator" tabindex="-1"><a class="header-anchor" href="#_03-bom对象navigator" aria-hidden="true">#</a> 03 BOM对象navigator</h1><ol><li>通过userAgent属性匹配浏览器型号。</li><li>还有很多浏览器，百度搜索userAgent js直接拷贝代码。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Navigator: 代表当前浏览器的信息, 通过Navigator我们就能判断用户当前是什么浏览器</span>
<span class="token comment">// console.log(window.navigator);</span>
<span class="token keyword">var</span> agent <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">chrome</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>agent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;当前是谷歌浏览器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">firefox</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>agent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;当前是火狐浏览器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">msie</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>agent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;当前是低级IE浏览器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;ActiveXObject&quot;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;当前是高级IE浏览器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","03BOM对象navigator.html.vue"]]);export{r as default};
