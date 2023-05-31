import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_25-symbol类型" tabindex="-1"><a class="header-anchor" href="#_25-symbol类型" aria-hidden="true">#</a> 25 Symbol类型</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么Symbol?
Symbol是ES6中新增的一种数据类型, 被划分到了基本数据类型中
基本数据类型: symbol bool number string null undefined
引用数据类型: Object

2.Symbol的作用
用来表示一个独一无二的值

3.如果生成一个独一无二的值?
let xxx = Symbol();
*/</span>
<span class="token comment">/*
4.为什么需要Symbol?
在企业开发中如果需要对一些第三方的插件、框架进行自定义的时候
可能会因为添加了同名的属性或者方法, 将框架中原有的属性或者方法覆盖掉
为了避免这种情况的发生, 框架的作者或者我们就可以使用Symbol作为属性或者方法的名称

5.如何区分Symbol?
在通过Symbol生成独一无二的值时可以设置一个标记
这个标记仅仅用于区分, 没有其它任何含义
*/</span>
<span class="token keyword">let</span> xxx <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> yyy <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xxx <span class="token operator">===</span> yyy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">/*
let obj = {
    name: &quot;lnj&quot;,
    say: function () {
        console.log(&quot;say&quot;);
    }
}
obj.name = &quot;it666&quot;;
console.log(obj.name);
obj.say = function () {
    console.log(&quot;test&quot;);
}
obj.say();
*/</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意点: 如果想使用变量作为对象属性的名称, 那么必须加上[]</span>
    <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>say<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// obj.name = &quot;it666&quot;;</span>
obj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;it666&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">/*
{
  [Symbol(name)]: &#39;lnj&#39;,
  [Symbol(say)]: [Function: [say]],
  [Symbol(name)]: &#39;it666&#39;
}
所以Symbol(&#39;name&#39;)与Symbol(&#39;name&#39;)不是一种东西。
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function o(c,p){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","25Symbol类型.html.vue"]]);export{d as default};
