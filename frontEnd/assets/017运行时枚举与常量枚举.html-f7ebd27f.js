import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const l={},i=e(`<h1 id="_017-运行时枚举与常量枚举" tabindex="-1"><a class="header-anchor" href="#_017-运行时枚举与常量枚举" aria-hidden="true">#</a> 017 运行时枚举与常量枚举</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 运行时枚举</span>
<span class="token comment">// 枚举在编译之后是一个真实存储的对象, 所以可以在运行时使用</span>
<span class="token comment">// 而像接口这种只是用来做约束做静态检查的代码, 编译之后是不存在的</span>
<span class="token comment">// 接口</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 运行时枚举</span>
<span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span>
    Female
<span class="token punctuation">}</span>


<span class="token comment">// 常量枚举</span>
<span class="token comment">// 普通枚举和常量枚举的区别</span>
<span class="token comment">// 普通枚举会生成真实存在的对象</span>
<span class="token comment">// 常量枚举不会生成真实存在的对象, 而是利用枚举成员的值直接替换使用到的地方</span>
<span class="token comment">// 运行时枚举</span>
<span class="token keyword">enum</span> Gender1<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span>
    Female
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender1<span class="token punctuation">.</span>Male <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 常量枚举</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> Gender2<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span>
    Female
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender2<span class="token punctuation">.</span>Male <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
编译后
*/</span>
<span class="token comment">// var Gender1;</span>
<span class="token comment">// (function (Gender1) {</span>
<span class="token comment">//     Gender1[Gender1[&quot;Male&quot;] = 0] = &quot;Male&quot;;</span>
<span class="token comment">//     Gender1[Gender1[&quot;Female&quot;] = 1] = &quot;Female&quot;;</span>
<span class="token comment">// })(Gender1 || (Gender1 = {}));</span>
<span class="token comment">// console.log(Gender1.Male === 0);</span>
<span class="token comment">// console.log(0 /* Gender2.Male */ === 0);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function t(o,p){return s(),a("div",null,c)}const u=n(l,[["render",t],["__file","017运行时枚举与常量枚举.html.vue"]]);export{u as default};
