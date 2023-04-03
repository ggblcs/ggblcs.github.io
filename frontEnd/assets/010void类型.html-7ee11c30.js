import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_010-void类型" tabindex="-1"><a class="header-anchor" href="#_010-void类型" aria-hidden="true">#</a> 010 void类型</h1><blockquote><p>viod用作函数的返回值类型，表示没有返回值，也可以让一个变量值是undefined和null，但这样做没有意义。</p></blockquote><p>严格模式下,void只能为undefined. 可参见类型检查.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// void类型</span>
<span class="token comment">// void与any正好相反, 表示没有任何类型, 一般用于函数返回值</span>
<span class="token comment">// 在TS中只有null和undefined可以赋值给void类型</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> value<span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined</span>
<span class="token comment">// value = 123; // 报错</span>
<span class="token comment">// value = &quot;abc&quot;;// 报错</span>
<span class="token comment">// value = true;// 报错</span>
<span class="token comment">// 注意点（应该有错）: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型</span>
<span class="token comment">// 事实上null和undefined既不能赋值给string，也不能赋值给布尔，number。</span>
<span class="token comment">// value = null; // 不会报错</span>
value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span><span class="token comment">// 不会报错</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[o];function c(i,p){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","010void类型.html.vue"]]);export{u as default};
