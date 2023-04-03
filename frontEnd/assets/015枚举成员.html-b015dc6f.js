import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_015-枚举成员" tabindex="-1"><a class="header-anchor" href="#_015-枚举成员" aria-hidden="true">#</a> 015 枚举成员</h1><p>主要是一些概念性的东西，有点鸡肋，可看可不看。</p><p>每个枚举成员都有一个值，根据枚举成员值的定义，可以将枚举成员换分为两大类</p><ul><li>常量枚举成员</li><li>计算枚举成员</li></ul><h2 id="_1-常量枚举成员" tabindex="-1"><a class="header-anchor" href="#_1-常量枚举成员" aria-hidden="true">#</a> 1 常量枚举成员</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 初值为0</span>
<span class="token comment">/*
若枚举类型的第一个枚举成员没有定义初始值，
那么该枚举成员是常量枚举成员并且初始值为0
*/</span>
<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
 <span class="token constant">A</span><span class="token punctuation">,</span>
 <span class="token constant">B</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Foo2 <span class="token punctuation">{</span>
    <span class="token constant">A</span><span class="token punctuation">,</span>
    <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// C // C报错，因为前一个枚举成员不是数值常量，不能进行自增</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常量枚举成员的规则 1 2 3 4 5 举例：下面枚举成员均为常量枚举成员</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 常量枚举表达式可以是数字字面量、字符串字面量和不包含替换值的模板字面量。</span>
<span class="token comment">// 2. 常量枚举成员表达式可以是对前面定义的枚举成员的引用。</span>
<span class="token keyword">enum</span> Foo1<span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 数字字面量</span>
    <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 字符串字面量</span>
    <span class="token constant">C</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">C</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token comment">// 无替换值的模板字面量</span>
    <span class="token constant">D</span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token comment">// 引用前面定义的常量枚举成员</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 常量枚举表达式可以是用分组运算符包围起来的常量枚举表达式</span>
<span class="token comment">// 4. 常量枚举表达式中可以使用一元运算符： &quot; + — ~ &quot;</span>
<span class="token comment">// 5. 常量枚举表达式中可以使用二元运算符： “ + - * ++ / % &lt;&lt; &gt;&gt; &gt;&gt;&gt; &amp; | ^ ”</span>
<span class="token keyword">enum</span> Foo2<span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 一元运算符</span>
    <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 二元运算符</span>
    <span class="token constant">C</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 分组运算符（小括号）</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意：含字符串值成员的枚举中不允许使用计算的值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-计算枚举成员" tabindex="-1"><a class="header-anchor" href="#_2-计算枚举成员" aria-hidden="true">#</a> 2 计算枚举成员</h2><p>除常量枚举成员之外的其他枚举成员都属于计算枚举成员。举例如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo3<span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token constant">B</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-枚举成员做类型" tabindex="-1"><a class="header-anchor" href="#_3-枚举成员做类型" aria-hidden="true">#</a> 3 枚举成员做类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1.枚举成员类型</span>
<span class="token comment">// 我们就可以把枚举成员当做类型来使用</span>

<span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span>
    Female
    <span class="token comment">// Male = &#39;www.it666.com&#39;,</span>
    <span class="token comment">// Female = &#39;www.itzb.com&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> Gender<span class="token punctuation">.</span>Male
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">TestInterface</span><span class="token punctuation">{</span>
    <span class="token comment">// age!: Gender.Male // ok</span>
    age<span class="token operator">!</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token comment">// ok 注意点: 由于数字枚举的本质就是数值, 所以这里写一个数值也不会报错</span>
    <span class="token comment">// age!: Gender.Female // err 由于类型不匹配, 所以会报错</span>

    <span class="token comment">// age!: Gender.Male  // ok</span>
    <span class="token comment">// age!: Gender.Female // err</span>
    <span class="token comment">// age!: &#39;www.it666.com&#39; // err 注意点: 如果是字符串枚举, 那么只能是枚举成员的值, 不能是其它的值</span>
    <span class="token comment">// age!: string // err</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无用的知识：</p><p>枚举的成员本身也可以作为一种类型限制声明的变量。下面是小标题。</p><p><s>1 联合型枚举类型</s></p><p><s>联合枚举类型是所有联合枚举成员类型构成的联合类型</s></p><p><s>感觉没啥用，略</s></p><p><s>2 const枚举类型</s> 0+ <s>感觉没啥用，略</s></p>`,19),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","015枚举成员.html.vue"]]);export{d as default};
