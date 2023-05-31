import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_22-matchall完成全局匹配" tabindex="-1"><a class="header-anchor" href="#_22-matchall完成全局匹配" aria-hidden="true">#</a> 22 matchAll完成全局匹配</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
--中国--
--日本--
--德国--

</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 使用正则取出各个国家放入数组中</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--(\\W+?)--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;--中国--&#39;, &#39;--日本--&#39;, &#39;--德国--&#39; ]</span>
<span class="token comment">// 此时还是取不出中国，因为原子组没有在列表中</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Object [RegExp String Iterator] {}</span>
<span class="token comment">// 得到一个迭代对象</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;--中国--&#39;,
  &#39;中国&#39;,
  index: 1,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
[
  &#39;--日本--&#39;,
  &#39;日本&#39;,
  index: 8,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
[
  &#39;--德国--&#39;,
  &#39;德国&#39;,
  index: 15,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
*/</span>
<span class="token comment">// 这次就可以取出想要的国家名称了。</span>

<span class="token comment">// 小技巧</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>matchAll是高级浏览器才支持，低端浏览器需要自己实现。实现过程看不懂，就不写了。</p>`,3),t=[l];function c(p,o){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","22matchAll完成全局匹配.html.vue"]]);export{d as default};
