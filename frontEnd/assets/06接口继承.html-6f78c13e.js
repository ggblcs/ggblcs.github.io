import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_06-接口继承" tabindex="-1"><a class="header-anchor" href="#_06-接口继承" aria-hidden="true">#</a> 06 接口继承</h1><p>接口可以继承</p><ul><li>接口</li><li>对象类型的类型别名</li><li>类</li><li>对象类型的交叉类型</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 接口的继承</span>
<span class="token comment">// 注意点：如果子接口与父接口之间存在同名的类型成员，那么子接口中的类型成员具有更高优先级。</span>
<span class="token comment">//  子接口与父接口中的同名类型成员必须是类型兼容的。（子接口中同名类型成员的类型需要能够赋值给父接口中同名类型成员的类型）</span>
<span class="token comment">// 如果仅是多个父接口之间存在同名的类型成员，而子接口本身没有该同名类型成员，那么父接口中同名类型成员的类型必须是完全相同的。</span>
<span class="token keyword">interface</span> <span class="token class-name">LengthInterface</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">WidthInterface</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">HeightInterface</span> <span class="token punctuation">{</span>
    height<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">RectInterface</span> <span class="token keyword">extends</span> <span class="token class-name">LengthInterface</span><span class="token punctuation">,</span>WidthInterface<span class="token punctuation">,</span>HeightInterface <span class="token punctuation">{</span>
    <span class="token comment">// length:number</span>
    <span class="token comment">// width:number</span>
    <span class="token comment">// height:number</span>
    color<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> rect<span class="token operator">:</span>RectInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这几个属性必须都写上</span>
    length<span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span><span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 父接口存在同名类型成员并且类型成员类型不同的情况：</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A1</span></span> <span class="token punctuation">{</span>
    say<span class="token operator">:</span><span class="token punctuation">{</span>word<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A2</span></span> <span class="token punctuation">{</span>
    say<span class="token operator">:</span><span class="token punctuation">{</span>sing<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// interface AN extends A1, A2{} // 报错，A1，A2的say类型不同</span>
<span class="token comment">// 解决：在AN中也定义同名say，具有更高优先级，从而取代父接口，需要注意子接口AN的say需要与父接口中的say是类型兼容的</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">AN</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A1</span></span><span class="token punctuation">,</span> <span class="token constant">A2</span><span class="token punctuation">{</span>
    say<span class="token operator">:</span><span class="token punctuation">{</span>word<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>sing<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// {word:string;sing:number}类型既能赋值给{word:string}类型，也能赋值给{sing:number}类型。</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function i(l,o){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","06接口继承.html.vue"]]);export{u as default};
