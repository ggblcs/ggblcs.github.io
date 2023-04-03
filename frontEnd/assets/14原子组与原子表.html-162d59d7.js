import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_14-原子组与原子表" tabindex="-1"><a class="header-anchor" href="#_14-原子组与原子表" aria-hidden="true">#</a> 14 原子组与原子表</h1><p>原子表就是一个中括号[]，里面匹配是任意的某一个都行。值得注意的是，原子组只代表一个字符。剩下就不多说了。</p><p>原子组()小括号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配一个日期，要求日期格式是-或/连接都能正常匹配</span>
<span class="token keyword">let</span> date_1 <span class="token operator">=</span> <span class="token string">&quot;2022-12-26&quot;</span>
<span class="token keyword">let</span> date_2 <span class="token operator">=</span> <span class="token string">&quot;2022/12/26&quot;</span>
<span class="token keyword">let</span> date_err <span class="token operator">=</span> <span class="token string">&quot;2022-12/26&quot;</span> <span class="token comment">// 显然不符合规范的日期</span>

<span class="token keyword">let</span> reg_err <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{4}[\\/-]\\d{2}[\\/-]\\d{2}</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_err<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;2022-12-26&#39;, index: 0, input: &#39;2022-12-26&#39;, groups: undefined ]
[ &#39;2022/12/26&#39;, index: 0, input: &#39;2022/12/26&#39;, groups: undefined ]
[ &#39;2022-12/26&#39;, index: 0, input: &#39;2022-12/26&#39;, groups: undefined ]
虽然-或/连接的都能正常匹配，但是-/同时存在的不符合规范的也被匹配到了
*/</span>
<span class="token comment">// 我们使用原子表来解决这个问题</span>
<span class="token keyword">let</span> reg_ok <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{4}([\\/-])\\d{2}\\1\\d{2}</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_err<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;2022-12-26&#39;, &#39;-&#39;, index: 0, input: &#39;2022-12-26&#39;, groups: undefined ]
[ &#39;2022/12/26&#39;, &#39;/&#39;, index: 0, input: &#39;2022/12/26&#39;, groups: undefined ]
null

reg_ok中的原子组([\\/-])对应后边的\\1
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原子组，组就是分组的意思，意思就是一组了，比如要匹配一对标签，<code>&lt;h1&gt;&lt;/h1&gt;</code>，如果前面是数字1，后面也必须是数字1，这样才是一对h1标签，要想实现这个功能就是用原子组。 原子组()对应的内容用<code>\\1</code>依次往后依次用<code>\\2</code> <code>\\3</code>对应。对应的内容就是一组，对应的内容必须一样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> h1 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1&gt;哈罗单词&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> h2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h2&gt;哈罗单&lt;/h2&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> h_err <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1&gt;哈罗单&lt;/h2&gt;</span><span class="token template-punctuation string">\`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h_err<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
[
 &#39;&lt;h1&gt;哈罗单词&lt;/h1&gt;&#39;,
 &#39;h1&#39;,
 index: 0,
 input: &#39;&lt;h1&gt;哈罗单词&lt;/h1&gt;&#39;,
 groups: undefined
]
[
 &#39;&lt;h2&gt;哈罗单&lt;/h2&gt;&#39;,
 &#39;h2&#39;,
 index: 0,
 input: &#39;&lt;h2&gt;哈罗单&lt;/h2&gt;&#39;,
 groups: undefined
]
null
*/</span>
<span class="token comment">// 值得注意的是，打印的数组内容arr[0]是匹配到的内容。</span>
<span class="token comment">// arr[1]注意是原子组的内容。如果有多个原子组，就依次往下放arr[2] arr[3]</span>
<span class="token comment">// 然后才是index等内容。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","14原子组与原子表.html.vue"]]);export{r as default};
