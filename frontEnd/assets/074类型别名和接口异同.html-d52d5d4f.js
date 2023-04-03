import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_074-类型别名和接口异同" tabindex="-1"><a class="header-anchor" href="#_074-类型别名和接口异同" aria-hidden="true">#</a> 074 类型别名和接口异同</h1><p>书·</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 接口和类型别名是相互兼容的</span>
<span class="token keyword">type</span> <span class="token class-name">MyType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> value3<span class="token operator">:</span>MyType <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> value4<span class="token operator">:</span>MyInterface <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
value3 <span class="token operator">=</span> value4<span class="token punctuation">;</span>
value4 <span class="token operator">=</span> value3<span class="token punctuation">;</span>
<span class="token comment">// 类型别名与接口相似并且大部分情况可以互换使用，但也有区别</span>
<span class="token comment">// 区别一：类型别名能够表示非对象类型，而接口只能表示对象类型。</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F1</span></span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> bigint
<span class="token comment">// 区别二：接口可以继承接口、类等对象类型，而类型别名不支持继承</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">G1</span></span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">G2</span></span> <span class="token punctuation">{</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">G</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">G1</span></span><span class="token punctuation">,</span> <span class="token constant">G2</span> <span class="token punctuation">{</span>sex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">// 通过变通的方法让类型别名实现类似继承的功能(借助交叉类型)</span>
<span class="token comment">// 此种方法只适用于表示对象类型的类型别名，如果类型表示非对象类型，则无法使用该方法。</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">H1</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">H2</span></span> <span class="token operator">=</span> <span class="token constant">H1</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>sex<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">funH</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token constant">H2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> x<span class="token punctuation">.</span>name
    <span class="token keyword">const</span> sex <span class="token operator">=</span> x<span class="token punctuation">.</span>sex
<span class="token punctuation">}</span>
<span class="token comment">// 区别三：接口具有声明合并的行为，而类型别名则不会进行声明合并</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token punctuation">{</span>y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">// 定义两个同名接口I1，最终这两个接口中的类型成员会被合并为如下：</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说*</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 接口和类型别名异同</span>
<span class="token comment">// 1.都可以描述属性或方法</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TA</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IA</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 2.都允许拓展</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IB</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IC</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">IB</span></span><span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> valC<span class="token operator">:</span><span class="token constant">IC</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TC</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TD</span></span> <span class="token operator">=</span> <span class="token constant">TC</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> valD<span class="token operator">:</span><span class="token constant">TD</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 3.type 可以声明基本类型别名，联合类型，元组等类型, interface不能</span>
<span class="token comment">// type MyType1 = boolean;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TE</span></span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TF</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">// 4.type不会自动合并</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IG</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IG</span></span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> valG<span class="token operator">:</span><span class="token constant">IG</span>  <span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TH</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span>
<span class="token comment">// type TH = {age:number} // 两个TH报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","074类型别名和接口异同.html.vue"]]);export{k as default};
