import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_04-只读属性" tabindex="-1"><a class="header-anchor" href="#_04-只读属性" aria-hidden="true">#</a> 04 只读属性</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token keyword">readonly</span> lastName<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span>ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在接口中使用只读属性 只说了用 readonly 修饰符</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// 只读属性：让对象属性只能在对象刚刚创建的时候修改其值</span>
<span class="token comment">// 接口中readonly修饰符只允许在属性签名和索引签名中使用</span>

<span class="token keyword">interface</span> <span class="token class-name">FullName</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">readonly</span> lastName<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span>num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> myName<span class="token operator">:</span>FullName <span class="token operator">=</span> <span class="token punctuation">{</span>
    firstName<span class="token operator">:</span> <span class="token string">&#39;Jonathan&#39;</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span> <span class="token string">&#39;Lee&#39;</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// myName.lastName = &#39;Wang&#39;; // 报错</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
如果接口中既定义了只读索引签名，
    又定义了非只读的属性签名，
    那么非只读的属性签名定义的属性依旧是非只读的，
    除此之外的所有属性都是只读的
*/</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span>
    x<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">8</span> <span class="token comment">// ok</span>
<span class="token comment">// a.y = 9 // 报错，y属性是只读的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","04只读属性.html.vue"]]);export{u as default};
