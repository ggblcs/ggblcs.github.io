import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_20-表单输入框事件" tabindex="-1"><a class="header-anchor" href="#_20-表单输入框事件" aria-hidden="true">#</a> 20 表单输入框事件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> oInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.监听input获取焦点</span>
    <span class="token comment">// oInput.onfocus = function () {</span>
    <span class="token comment">//     console.log(&quot;获取到了焦点&quot;);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// 2.监听input失去焦点</span>
    <span class="token comment">// oInput.onblur = function () {</span>
    <span class="token comment">//     console.log(&quot;失去了焦点&quot;);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// 3.监听input内容改变</span>
    <span class="token comment">// 注意点: onchange事件只有表单失去焦点的时候, 才能拿到修改之后的数据</span>
    <span class="token comment">// oInput.onchange = function () {</span>
    <span class="token comment">//     console.log(this.value);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// oninput事件可以时时获取到用户修改之后的数据, 只要用户修改了数据就会调用(执行)</span>
    <span class="token comment">// 注意点: oninput事件只有在IE9以及IE9以上的浏览器才能使用</span>
    <span class="token comment">// 在IE9以下, 如果想时时的获取到用户修改之后的数据, 可以通过onpropertychange事件来实现</span>
    oInput<span class="token punctuation">.</span><span class="token function-variable function">oninput</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,3),c=[o];function i(p,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","20表单输入框事件.html.vue"]]);export{d as default};
