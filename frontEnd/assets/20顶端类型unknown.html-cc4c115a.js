import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const o={},p=e(`<h1 id="_20-顶端类型unknown" tabindex="-1"><a class="header-anchor" href="#_20-顶端类型unknown" aria-hidden="true">#</a> 20 顶端类型unknown</h1><p>unknown与any非常相似,但更安全.</p><p>any是顶端类型,所以任何类型都可以赋值给any unknown是顶端类型,所以任何类型都可以赋值给unknown</p><p>any类型可以赋值给其他类型,比如string,number等 unknown类型 只可以 赋值给any类型和unknown类型 unknown类型 不可以 赋值给其他类型.</p><p>unknown类型也不可以进行大部分操作,除非细分为具体类型.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 其他类型赋值给unknown</span>
<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">unknown</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span>
a <span class="token operator">=</span> <span class="token boolean">true</span>
a <span class="token operator">=</span> <span class="token keyword">undefined</span>
a <span class="token operator">=</span> <span class="token keyword">null</span>
a <span class="token operator">=</span> <span class="token number">58</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// unknown赋值给其他类型</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span>
<span class="token comment">// let c:string = b; // 报错</span>
<span class="token comment">// let d:boolean = b // 报错</span>
<span class="token comment">// ...</span>

<span class="token comment">// any赋值给unknown</span>
<span class="token keyword">let</span> h1<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> h2<span class="token operator">:</span><span class="token builtin">unknown</span> <span class="token operator">=</span> h1<span class="token punctuation">;</span> <span class="token comment">// Ok</span>

<span class="token comment">// unknown赋值给any</span>
<span class="token keyword">let</span> j1<span class="token operator">:</span><span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> j2<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> j1 <span class="token comment">// ok</span>

<span class="token keyword">let</span> x<span class="token operator">:</span><span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// unknown类型不允许进行大部分操作</span>
<span class="token comment">// const a = x + 1; // 报错</span>
<span class="token comment">// const b = x.foo // 报错</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// message.length // 报错</span>
<span class="token punctuation">}</span>

<span class="token comment">// 除非将unknown类型进行细分</span>
<span class="token comment">// 使用typeof运算符检查参数message是否为字符串</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> message <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 不报错</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[p];function l(c,i){return s(),a("div",null,t)}const k=n(o,[["render",l],["__file","20顶端类型unknown.html.vue"]]);export{k as default};
