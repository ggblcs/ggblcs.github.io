import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_24-给原子组起别名" tabindex="-1"><a class="header-anchor" href="#_24-给原子组起别名" aria-hidden="true">#</a> 24 给原子组起别名</h1><p><code>(?&lt;name&gt;abc)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给原子组起别名</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(a)(b)(c)(d)(e)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1-$2-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-b-c-d-efg</span>
<span class="token comment">// 注意fg没被替换，因为fg没被匹配到也没在组内，上面被替换的内容只是replace的第一个参数，也就是reg匹配到的内容</span>
<span class="token comment">// 现在发现$num太多容易记混，想起别名</span>
<span class="token comment">// ?&lt;name&gt;</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;zhao&gt;a)(?&lt;qian&gt;b)(c)(d)(e)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1-$2-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-b-c-d-efg</span>
<span class="token comment">// 起别名后，原来的名字依然能用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$&lt;zhao&gt;-$&lt;zhao&gt;-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-a-c-d-efg</span>
<span class="token comment">// 还可以用别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;js20元php90元ts30元&quot;</span>

<span class="token keyword">let</span> reg_origin <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+?)(\\d+?元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_origin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;js20元&#39;, &#39;php90元&#39;, &#39;ts30元&#39; ]</span>
<span class="token keyword">let</span> reg_name <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;language&gt;[a-z]+?)(?&lt;price&gt;\\d+?元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

<span class="token keyword">let</span> res_origin <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg_origin<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res_origin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(val);</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;js20元&#39;,
  &#39;js&#39;,
  &#39;20元&#39;,
  index: 0,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
[
  &#39;php90元&#39;,
  &#39;php&#39;,
  &#39;90元&#39;,
  index: 5,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
[
  &#39;ts30元&#39;,
  &#39;ts&#39;,
  &#39;30元&#39;,
  index: 11,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
*/</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> res_name <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg_name<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res_name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>groups<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;js20元&#39;,
  &#39;js&#39;,
  &#39;20元&#39;,
  index: 0,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;js&#39;, price: &#39;20元&#39; }
]
[
  &#39;php90元&#39;,
  &#39;php&#39;,
  &#39;90元&#39;,
  index: 5,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;php&#39;, price: &#39;90元&#39; }
]
[
  &#39;ts30元&#39;,
  &#39;ts&#39;,
  &#39;30元&#39;,
  index: 11,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;ts&#39;, price: &#39;30元&#39; }
]

*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  [Object: null prototype] { language: &#39;js&#39;, price: &#39;20元&#39; },
  [Object: null prototype] { language: &#39;php&#39;, price: &#39;90元&#39; },
  [Object: null prototype] { language: &#39;ts&#39;, price: &#39;30元&#39; }
]
*/</span>

<span class="token comment">// 由此可见起别名后，对groups的影响，groups直接帮我们提取好信息了，里面对象形式，key:value</span>
<span class="token comment">// 使用更方便</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[l];function t(c,o){return s(),a("div",null,p)}const d=n(i,[["render",t],["__file","24给原子组起别名.html.vue"]]);export{d as default};
