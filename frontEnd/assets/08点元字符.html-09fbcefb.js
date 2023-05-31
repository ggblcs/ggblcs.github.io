import{_ as s,p as n,q as e,a1 as a}from"./framework-96b046e1.js";const t={},l=a(`<h1 id="_08-点元字符" tabindex="-1"><a class="header-anchor" href="#_08-点元字符" aria-hidden="true">#</a> 08 点元字符</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .包括除了换行符之外的任何字符。</span>
<span class="token comment">// 也就是说.包括\\d \\w</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">&quot;hhej-_@#&amp;&amp;**&lt;(&quot;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
www.baidu.com
jfjggg
</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 正常情况下，只能匹配一行，匹配到换行符就不能再匹配了</span>
<span class="token comment">// 但是s单行模式可以匹配多行</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">s</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function r(c,p){return n(),e("div",null,i)}const d=s(t,[["render",r],["__file","08点元字符.html.vue"]]);export{d as default};
