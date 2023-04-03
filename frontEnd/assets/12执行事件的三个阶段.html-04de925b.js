import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e="/assets/042-5-badc2b5c.jpg",i={},c=t('<h1 id="_12-执行事件的三个阶段" tabindex="-1"><a class="header-anchor" href="#_12-执行事件的三个阶段" aria-hidden="true">#</a> 12 执行事件的三个阶段</h1><img src="'+e+`" alt="Screenshot_20201030_150455" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.事件的三个阶段
1.1.捕获阶段(从外向内的传递事件)
1.2.当前目标阶段
1.3.冒泡的阶段(从内向外的传递事件)

2.注意点:
三个阶段只有两个会被同时执行
要么捕获和当前, 要么当前和冒泡

3.为什么要么只能是捕获和当前, 要么只能是当前和冒泡?
这是JS处理事件的历史问题
早期各大浏览器厂商为占领市场, 以及对事件的理解不同
后续W3C为了兼容, 将两种方式都纳入标准
*/</span>
<span class="token comment">/*
1.如何设置事件到底是捕获还是冒泡?
通过addEventListener方法, 这个方法接收三个参数
第一个参数: 事件的名称
第二个参数: 回调函数
第三个参数: false冒泡  / true 捕获

注意点:
onXxx的属性, 不接收任何参数, 所以默认就是冒泡
attachEvent方法, 只能接收两个参数, 所以默认就是冒泡
*/</span>
<span class="token keyword">let</span> oFDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> oSDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.son&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
oFDiv.addEventListener(&quot;click&quot;, function () {
    console.log(&quot;father&quot;);
}, false);
oSDiv.addEventListener(&quot;click&quot;, function () {
    console.log(&quot;son&quot;);
}, false);
*/</span>
oFDiv<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
oSDiv<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;son&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
IE 6.0:
div -&gt; body -&gt; html -&gt; document
其他浏览器:
div -&gt; body -&gt; html -&gt; document -&gt; window
注意：
不是所有的事件都能冒泡，以下事件不冒泡：blur、focus、load、unload
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[c];function p(o,u){return s(),a("div",null,l)}const v=n(i,[["render",p],["__file","12执行事件的三个阶段.html.vue"]]);export{v as default};
