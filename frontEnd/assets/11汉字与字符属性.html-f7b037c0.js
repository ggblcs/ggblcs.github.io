import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_11-汉字与字符属性" tabindex="-1"><a class="header-anchor" href="#_11-汉字与字符属性" aria-hidden="true">#</a> 11 汉字与字符属性</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 汉字与字符属性</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot; www.baidu.com我很爱国!2022&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{L}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;w&#39;,  &#39;w&#39;,  &#39;w&#39;,  &#39;b&#39;, &#39;a&#39;,  &#39;i&#39;,  &#39;d&#39;,  &#39;u&#39;, &#39;c&#39;,  &#39;o&#39;, &#39;m&#39;,  &#39;我&#39;, &#39;很&#39;, &#39;爱&#39;, &#39;国&#39;]</span>
<span class="token comment">// \\p{L}匹配具有L属性的字符，其实就是字母和汉字，数字不具有L（字母）属性</span>
<span class="token comment">// 匹配属性需要结合u模式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{P}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;.&#39;, &#39;.&#39;, &#39;!&#39; ]</span>
<span class="token comment">// \\p{P} 大写P是匹配具有标点属性的，就是匹配标点。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{sc=Han}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ug</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;我&#39;, &#39;很&#39;, &#39;爱&#39;, &#39;国&#39; ]</span>
<span class="token comment">// \\p是匹配属性，需要结合u模式使用</span>
<span class="token comment">// sc=Han意思是匹配汉字【中国】</span>
<span class="token comment">/*
 有时候匹配宽字节的字母，
 比如xy但是不是两个字节的xy，我打不出来，
 正则表达式匹配出来是乱码
 此时也需要使用u模式，u模式可以正确匹配宽字节内容
 */</span>
<span class="token comment">// 还有特别多的属性可以查阅官网</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function l(o,i){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","11汉字与字符属性.html.vue"]]);export{r as default};
