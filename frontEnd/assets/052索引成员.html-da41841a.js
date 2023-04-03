import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_052-索引成员" tabindex="-1"><a class="header-anchor" href="#_052-索引成员" aria-hidden="true">#</a> 052 索引成员</h1><p>不常用</p><p>定义类的索引成员并不常见。索引签名包含两种，分别为字符串索引签名和数值索引签名。在类的索引成员上不允许定义可访问性修饰符，如public和private等。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","052索引成员.html.vue"]]);export{u as default};
