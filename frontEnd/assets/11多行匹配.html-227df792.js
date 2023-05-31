import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_11-多行匹配" tabindex="-1"><a class="header-anchor" href="#_11-多行匹配" aria-hidden="true">#</a> 11 多行匹配</h1><blockquote><p>m的意思是每一行单独处理。/aaa/gm</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
#1 js,200元 #
#2 php,300元 #
#9 www.baidu.com # 不合规范的数据
#3 node.js,180元 #
</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">/*
想要的结果：
[
  { name: &#39;js&#39;, price: &#39;200元&#39; },
  { name: &#39;php&#39;, price: &#39;300元&#39; },
  { name: &#39;node.js&#39;, price: &#39;180元&#39; }
]
*/</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*#\\d+\\s+.+#$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> lessons <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// console.log(v);</span>
    v <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*#\\d+\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*#</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> price<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> price<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lessons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  { name: &#39;js&#39;, price: &#39;200元&#39; },
  { name: &#39;php&#39;, price: &#39;300元&#39; },
  { name: &#39;node.js&#39;, price: &#39;180元&#39; }
]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function i(l,o){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","11多行匹配.html.vue"]]);export{r as default};
