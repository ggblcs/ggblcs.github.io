import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_13-lastindex属性" tabindex="-1"><a class="header-anchor" href="#_13-lastindex属性" aria-hidden="true">#</a> 13 lastIndex属性</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// lastIndex属性</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;www.baidu.com_&quot;</span>
<span class="token keyword">let</span> reg_ <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> reg_g <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
<span class="token comment">// 匹配一个字符时，输出数组，里面有匹配到的的字符的属性比如index是在字符串的第几位</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, &#39;w&#39;, &#39;w&#39;, &#39;b&#39;, &#39;a&#39;, &#39;i&#39;, &#39;d&#39;, &#39;u&#39;, &#39;c&#39;, &#39;o&#39;, &#39;m&#39;, &#39;_&#39;]</span>
<span class="token comment">// 匹配两个或两个以上字符时，输出的数组就没有属性了</span>

<span class="token comment">// match是字符串的方法，我们可以使用正则对象的方法让每一个字符都输出属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;b&#39;, index: 4, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 5</span>
<span class="token comment">/*
从上面可以看到，exec方法每次只输出一个字母，每次执行都会往下进行
lastIndex记录了当前匹配到的字符的位置
注意点：需要结合g【全局匹配】模式使用，否则lastIndex总是输出0，只会匹配第一个
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","13lastIndex属性.html.vue"]]);export{d as default};
