import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_02-成员变量" tabindex="-1"><a class="header-anchor" href="#_02-成员变量" aria-hidden="true">#</a> 02 成员变量</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span> <span class="token comment">// 定义一个成员变量，在成员变量声明中设置初始值</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span> <span class="token comment">// 在类的构造函数中设置成员变量初始值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启用strictPropertyInitialization编译选项后，成员变量必须在声明时进行初始化或在构造函数中进行初始化（必须与strictNullChecks编译选项同时启用）。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// strictPropertyInitialization</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A2</span></span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
    b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// ok 在构造函数中初始化</span>
    <span class="token comment">// c:number; // 报错，未进行初始化</span>
    d<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 报错，</span>
    <span class="token comment">// 如果通过构造函数调用某个方法，进而在该方法中间接的初始化成员变量，</span>
    <span class="token comment">// 那么该编译器将无法检测到该初始化的操作，因此会产生编译错误。</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">99</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果我们确实想要通过某些方法来初始化类的成员变量，这是可以使用非空类型断言“！”来通知编译器，该成员变量已经进行初始化，以避免编译错误。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A3</span></span><span class="token punctuation">{</span>
    a<span class="token operator">!</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 非空类型断言</span>
    <span class="token function">init</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">666</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>readonly属性。只读成员变量必须在声明时初始化或在构造函数里初始化。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">readonly</span> b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">// readonly c:number; // 报错</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 不管是在类内部还是在类内部都不允许修改只读属性成员变量的值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","02成员变量.html.vue"]]);export{r as default};
