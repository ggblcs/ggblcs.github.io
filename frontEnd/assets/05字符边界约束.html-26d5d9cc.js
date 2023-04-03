import{_ as e,p as s,q as a,a1 as n}from"./framework-96b046e1.js";const r={},l=n(`<h1 id="_05-字符边界约束" tabindex="-1"><a class="header-anchor" href="#_05-字符边界约束" aria-hidden="true">#</a> 05 字符边界约束</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d$</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// ^表示必须以？开头，$表示必须以？结尾</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]{3,6}</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 表示字母a-z，3-6位。匹配3-6位字母，剩下不管还有没有字母都不管了。</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{3,6}$</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 表示从头到尾只能有3-6位字母。不能多也不能少。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;amd 2021&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token comment">// 没有g时表示匹配到一个数字就停下了，g表示匹配到了也不停，继续匹配。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function p(c,o){return s(),a("div",null,t)}const d=e(r,[["render",p],["__file","05字符边界约束.html.vue"]]);export{d as default};
