import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_14-网页的宽高的获取" tabindex="-1"><a class="header-anchor" href="#_14-网页的宽高的获取" aria-hidden="true">#</a> 14 网页的宽高的获取</h1><p>当下不考虑兼容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innerWidth/innerHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>考虑兼容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
// 注意点: innerWidth/innerHeight只能在IE9以及IE9以上的浏览器中才能获取
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// 注意点: documentElement.clientWidth/documentElement.clientHeight
// 可以用于在IE9以下的浏览器的标准模式中获取
// 浏览器在渲染网页的时候有两种模式&quot;标准模式&quot;/&quot;混杂模式/怪异模式&quot;
// 默认情况下都是以标准模式来进行渲染的(CSS1Compat)
// 如果网页没有书写文档声明&lt;!DOCTYPE html&gt;, 那么就会按照&quot;混杂模式/怪异模式&quot;来进行渲染的(BackCompat)
// documentElement  --&gt; HTML  --&gt; 整个网页
// console.log(document.documentElement);
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

// 注意点: 在混杂模式中利用如下的方式获取可视区域的宽高
// console.log(document.compatMode);// CSS1Compat
// console.log(document.body.clientWidth);
// console.log(document.body.clientHeight);
*/</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span>width<span class="token punctuation">,</span> height<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">)</span><span class="token punctuation">{</span>
        width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
        height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">&quot;BackCompat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
        height <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
        height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> height
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[i];function c(p,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","14网页的宽高的获取.html.vue"]]);export{d as default};
