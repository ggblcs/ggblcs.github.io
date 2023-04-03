import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const o={},p=t(`<h1 id="_26-symbol注意点" tabindex="-1"><a class="header-anchor" href="#_26-symbol注意点" aria-hidden="true">#</a> 26 Symbol注意点</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.通过Symbol生成独一无二值时需要在后面加上(), 但是前面不能加new, 因为它不是引用类型</span>
<span class="token keyword">let</span> xxx1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token comment">// let xxx2 = new Symbol(); // 错误</span>

<span class="token comment">// 2.通过Symbol生成独一无二值时传入的字符串仅仅是一个标记, 方便我们阅读代码, 没有其它任何意义</span>
<span class="token keyword">let</span> xxx3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.做类型转换的时候不能转换成数值</span>
<span class="token keyword">let</span> xxx4 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>xxx4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(name)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>xxx4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// console.log(Number(xxx4)); // 报错</span>

<span class="token comment">// 4.不能做任何运算</span>
<span class="token keyword">let</span> xxx5 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(xxx5 + &quot;abc&quot;); // 报错</span>
<span class="token comment">// console.log(xxx5 + 123); // 报错</span>

<span class="token comment">// 5.Symbol生成的值作为属性或方法名称时, 一定更要保存下来, 否则后续无法使用</span>
<span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> objA <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;it666&quot;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objA<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lnj</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objA<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// 6.for循环无法遍历出Symbol的属性和方法</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意点: 如果想使用变量作为对象属性的名称, 那么必须加上[]</span>
    <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>say<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">hi</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
age
gender
hi
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ Symbol(name), Symbol(say) ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[p];function c(l,i){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","026Symbol注意点.html.vue"]]);export{k as default};
