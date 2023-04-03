import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_03-原子表与原子组" tabindex="-1"><a class="header-anchor" href="#_03-原子表与原子组" aria-hidden="true">#</a> 03 原子表与原子组</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">&quot;010-2654215&quot;</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[2546]</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 原子表[]表示或的意思，[2546]表示2或5或4或6，中间就不用再加选择符|了。</span>

<span class="token comment">// /[-\\d:]/g表示从头到尾匹配-或数字或：</span>
<span class="token comment">// /[^-\\d:]/g表示除了-、数字、：，剩下的都匹配，原子表中^就是否定的意思</span>
<span class="token comment">// [a-z]原子表区间</span>
<span class="token comment">// [^au]原子表的排除匹配</span>
<span class="token comment">// 如果把()放在[]外边,()就是原子组 /[au]()/</span>
<span class="token comment">// 如果把()放在[]里边，()就是普通()，/[()]/</span>
<span class="token comment">// 如果把.+放在[]外边，就是匹配除了换行符的一切字符，匹配一个或多个，/.+/</span>
<span class="token comment">// 如果把.+放在[]里边，就是匹配普通的.+字符转不转义\\都一样，/[.+]/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">&quot;010-2654215&quot;</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(12|34)</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 原子组，中间加|，表示12这个整体，或34这个整体</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[l];function i(o,p){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","03原子表与原子组.html.vue"]]);export{d as default};
