import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_021-尾端类型never" tabindex="-1"><a class="header-anchor" href="#_021-尾端类型never" aria-hidden="true">#</a> 021 尾端类型never</h1><p>尾端类型是所有其他类型的子类型,由于一个值不可能同时属于所有类型,例如一个值不可能既是字符串类型,又是数字类型.<strong>因此尾端类型中不包含任何值.</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Never类型</span>
<span class="token comment">// 表示的是那些永不存在的值的类型,never就是不包含任何可能的值,表示函数无法返回值</span>
<span class="token comment">// 一般用于抛出异常或根本不可能有返回值的函数</span>
<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ok</span>

<span class="token comment">// function demo2():never {</span>
<span class="token comment">//     while (true){}</span>
<span class="token comment">// }</span>
<span class="token comment">// demo2();</span>
<span class="token comment">// ok</span>

<span class="token comment">// function demo():never {</span>
    
<span class="token comment">// }</span>
<span class="token comment">// demo();</span>
<span class="token comment">// 报错  因为返回值是undefined,所以代码写出来就报错了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// **以下均不会报错**，但是使用ES5的语法f1就会报错;</span>
<span class="token comment">// 又一天,在vscode中,使用新旧语法均不会报错.</span>
<span class="token keyword">let</span> <span class="token function-variable function">f1</span><span class="token operator">:</span><span class="token punctuation">(</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token keyword">let</span> <span class="token function-variable function">f2</span><span class="token operator">:</span><span class="token punctuation">(</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>
<span class="token keyword">let</span> <span class="token function-variable function">f3</span><span class="token operator">:</span><span class="token punctuation">(</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">never</span>

<span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token function-variable function">f3</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><s>根据尾端类型的定义,never类型是所有其他类型的子类型,所以,never允许赋值给任何类型,尽管并不存在never类型的值.</s></p><p>之前说any可以赋值给任何其它类型,唯独不包括never.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span><span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token comment">// 事实上还是报错了,错误原因是  在赋值前使用了变量“x”。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","021尾端类型never.html.vue"]]);export{u as default};
