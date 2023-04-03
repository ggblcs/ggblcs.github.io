import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_24-闭包" tabindex="-1"><a class="header-anchor" href="#_24-闭包" aria-hidden="true">#</a> 24 闭包</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是闭包(closure)?
闭包是一种特殊的函数。

2.如何生成一个闭包?
当一个内部函数引用了外部函数的数据(变量/函数)时, 那么内部的函数就是闭包
所以只要满足&quot;是函数嵌套&quot;、&quot;内部函数引用外部函数数据&quot;

3.闭包特点:
只要闭包还在使用外部函数的数据, 那么外部的数据就一直不会被释放
也就是说可以延长外部函数数据的生命周期

4.闭包注意点:
当后续不需要使用闭包时候, 一定要手动将闭包设置为null, 否则会出现内存泄漏
*/</span>
<span class="token comment">/*
function test() {
    var i = 666; // 局部变量
} // 只要代码执行到了大括号结束, i这个变量就会自动释放
console.log(i); // i is not defined
*/</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
    <span class="token comment">// 由于demo函数满足闭包的两个条件, 所以demo函数就是闭包</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function l(o,p){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","24闭包.html.vue"]]);export{d as default};
