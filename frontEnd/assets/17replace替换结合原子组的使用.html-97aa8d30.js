import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_17-replace替换结合原子组的使用" tabindex="-1"><a class="header-anchor" href="#_17-replace替换结合原子组的使用" aria-hidden="true">#</a> 17 replace替换结合原子组的使用</h1><ol><li>原子组可用$1, $2来对应。</li><li>replace回调，参数与匹配的带有index，group属性的数组一致，并且return啥就把匹配到的内容替换为啥。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;--我是中国人--&quot;</span>
<span class="token comment">// 把--后的第二个文字（是）保留下来，其余用-代替</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(--)(\\W(\\W))\\W+</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;--我是中国人--&#39;,
  &#39;--&#39;,
  &#39;我是&#39;,
  &#39;是&#39;,
  index: 0,
  input: &#39;--我是中国人--&#39;,
  groups: undefined
]

原子组中的内容：
arr[1] --
arr[2] 我是
arr[3] 是
显然，如果原子组里还有原子组，则会先列出最外层括号的，再列出内层括号的
*/</span>
<span class="token comment">// 修改方法一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;---$3-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是-----</span>
<span class="token comment">// $3就是第三处原子组</span>
<span class="token comment">// 修改方法二</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// --我是中国人-- -- 我是 是</span>
    <span class="token comment">// 输出的内容就是匹配的数组顺序，先是匹配的内容，再是原子组</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">---</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p3<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-----</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是-----</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;--我是中国人-- --他刚才管理--&quot;</span>
<span class="token comment">// 把--后的第二个文字（是）保留下来，其余用-代替</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(--)(\\W(\\W))[^-]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;--我是中国人&#39;, &#39;--他刚才管理&#39; ] 

原子组中的内容：
arr[1] --
arr[2] 我是
arr[3] 是
显然，如果原子组里还有原子组，则会先列出最外层括号的，再列出内层括号的
*/</span>
<span class="token comment">// 修改方法一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;---$3-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是------- ---刚-------</span>
<span class="token comment">// $3就是第三处原子组</span>
<span class="token comment">// 修改方法二</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    --我是中国人 -- 我是 是
    --他刚才管理 -- 他刚 刚
    */</span>
    <span class="token comment">// 输出的内容就是匹配的数组顺序，先是匹配的内容，再是原子组</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">---</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p3<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-----</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是------- ---刚-------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","17replace替换结合原子组的使用.html.vue"]]);export{r as default};
