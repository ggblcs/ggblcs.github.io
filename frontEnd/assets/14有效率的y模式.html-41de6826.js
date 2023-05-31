import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_14-有效率的y模式" tabindex="-1"><a class="header-anchor" href="#_14-有效率的y模式" aria-hidden="true">#</a> 14 有效率的y模式</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 有效率的y模式</span>
<span class="token comment">// 一、g模式全局匹配效果</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;wwaw&quot;</span>
<span class="token keyword">let</span> reg_g <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
<span class="token keyword">let</span> reg_y <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">y</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
[ &#39;w&#39;, index: 1, input: &#39;wwaw&#39;, groups: undefined ]
2
[ &#39;w&#39;, index: 3, input: &#39;wwaw&#39;, groups: undefined ]
4
null
0
*/</span>
<span class="token comment">// 显然g模式匹配w如果下一个字符不是w，则直接跳过，然后匹配下一个，从头匹配到尾部</span>

<span class="token comment">// 二、y模式匹配效果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
[ &#39;w&#39;, index: 1, input: &#39;wwaw&#39;, groups: undefined ]
2
null
0
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
*/</span>
<span class="token comment">// 显然y模式是如果匹配到了非想要的元素，直接停止，不再匹配</span>

<span class="token comment">// 三、修改lastIndex</span>
<span class="token comment">// 如果刚开始就不是想要的内容，则直接停止，我们可以修改lastIndex来修改匹配的位置</span>
<span class="token keyword">let</span> str_1 <span class="token operator">=</span> <span class="token string">&quot;aaw&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----分割线11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
null
0
null
0
因为第一个字母是a，不是要找的w，所以y模式直接就罢工了，不再往下匹配
我们可以修改lastIndex，让正则直接从w开始匹配
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----分割线22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reg_y<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 2, input: &#39;aaw&#39;, groups: undefined ]
3
null
0
*/</span>

<span class="token comment">// 四、使用方法</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">&quot;你好我的QQ有三个：2625,8888,7777可以随便加一个&quot;</span>
<span class="token keyword">let</span> reg_qq <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d+),?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">y</span></span>
reg_qq<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> qq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>res <span class="token operator">=</span> reg_qq<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    qq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qq<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// [ &#39;2625&#39;, &#39;8888&#39;, &#39;7777&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","14有效率的y模式.html.vue"]]);export{k as default};
