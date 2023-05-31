import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},c=e(`<h1 id="_18-不记录组" tabindex="-1"><a class="header-anchor" href="#_18-不记录组" aria-hidden="true">#</a> 18 不记录组</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 我想提取baidu</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;www.baidu.com&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.\\w+\\.(org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;com&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]

此时arr[1] 是第一个原子组com，而且并不含我想要的baidu
我们可以把baidu也添加到分组中
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.(\\w+)\\.(org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;baidu&#39;,
  &#39;com&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]
此时baidu是arr[1]
如果我不想让com出现在arr中，我可以使用?:让他不记录原子组
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.(\\w+)\\.(?:org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;baidu&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]
此时就不再记录?:标记的原子组了，
并且也不能使用?:所标记的对应原子组的 \\1  $1等便捷方法了。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[c];function t(o,d){return s(),a("div",null,l)}const u=n(i,[["render",t],["__file","18不记录组.html.vue"]]);export{u as default};
