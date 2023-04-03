import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_058-抽象类和抽象成员" tabindex="-1"><a class="header-anchor" href="#_058-抽象类和抽象成员" aria-hidden="true">#</a> 058 抽象类和抽象成员</h1><h2 id="_1-抽象类" tabindex="-1"><a class="header-anchor" href="#_1-抽象类" aria-hidden="true">#</a> 1 抽象类</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是抽象类?
抽象类是专门用于定义哪些不希望被外界直接创建的类的
抽象类一般用于定义基类
抽象类和接口一样用于约束子类
抽象类与具体类的一个重要区别是，抽象类不能被实例化。也就是说，不允许使用new运算符来创建一个抽象类的实例。

抽象类作用：作为基类使用，派生类可以继承抽象类，抽象类也可以继承其他抽象类。

2.抽象类和接口区别?
接口中只能定义约束, 不能定义具体实现
而抽象类中既可以定义约束, 又可以定义具体实现
* */</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 抽象类允许包含抽象成员，也允许包含非抽象成员</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">正在吃东西</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// let p = new Person();</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的名字是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stu<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stu<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-抽象成员" tabindex="-1"><a class="header-anchor" href="#_2-抽象成员" aria-hidden="true">#</a> 2 抽象成员</h2><p>在抽象类中允许声明抽象成员，抽象成员不允许包含具体实现代码.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// abstract b:number = 0 // error</span>
    <span class="token keyword">abstract</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">get</span> <span class="token function">accessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">set</span> <span class="token function">accessor</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// abstract method() { }; // err 抽象方法不能带有具体实现</span>
    <span class="token comment">// abstract get accessor(): string { return &#39;&#39; }; // err 抽象存取器中不能带有具体实现。</span>
    <span class="token comment">// abstract set accessor(val: string) { }; // err</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
如果一个类继承了抽象类，那么在具体的派生类中必须实现抽象类基类中的所有抽象成员。
因此，抽象类中的抽象成员不能声明为private，否则将无法在派生类中实现该成员
*/</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">// abstract private b: number; // err &quot;private”修饰符不能与“abstract”修饰符一起使用</span>
    <span class="token keyword">abstract</span> <span class="token keyword">get</span> <span class="token function">accessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">set</span> <span class="token function">accessor</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">M</span></span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 实现抽象属性a</span>
    <span class="token keyword">private</span> _accessor<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 实现抽象存取器accessor</span>
    <span class="token keyword">get</span> <span class="token function">accessor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_accessor<span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">accessor</span> <span class="token punctuation">(</span>val<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_accessor <span class="token operator">=</span> val<span class="token punctuation">}</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token comment">// 实现抽象方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","058抽象类和抽象成员.html.vue"]]);export{r as default};
