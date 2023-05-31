import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_14-枚举类型" tabindex="-1"><a class="header-anchor" href="#_14-枚举类型" aria-hidden="true">#</a> 14 枚举类型</h1><p>个人理解：枚举的声明方式有点像类，而不是对象。</p><blockquote><p>枚举类型是TS为JS扩展的一种类型, 在原生的JS中是没有枚举类型的 枚举用于表示固定的几个取值 例如: 一年只有四季、人的性别只能是男或者女</p></blockquote><h2 id="_1-数值型枚举" tabindex="-1"><a class="header-anchor" href="#_1-数值型枚举" aria-hidden="true">#</a> 1 数值型枚举</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 一、定义枚举</span>
<span class="token comment">// 定义了一个名称叫做Gender的枚举类型, 这个枚举类型的取值有两个, 分别是Male和Femal</span>
<span class="token comment">// 如果在定义枚举时没有设置枚举成员的值，TypeScript将自动计算枚举成员的值，从0开始，自增。</span>
<span class="token keyword">enum</span> Gender1<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span> <span class="token comment">// 0</span>
    Femal <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意点: TS中的枚举类型的取值, 默认是从上至下从0开始递增的</span>
<span class="token comment">//         虽然默认是从0开始递增的, 但是我们也可以手动的指定枚举的取值的值</span>
<span class="token comment">// 注意点: 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增</span>
<span class="token comment">// 注意点: 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响</span>
<span class="token comment">// 注意点: 我们还可以同时修改多个枚举值的取值, 如果同时修改了多个, 那么修改的是什么最后就是什么</span>
<span class="token keyword">enum</span> Gender2<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span> <span class="token comment">// 0 ， 默认从0开始</span>
    MoreOne<span class="token punctuation">,</span> <span class="token comment">// 1， 自增</span>
    Femail <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 6  有指定，就按指定的来</span>
    MoreThree <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token comment">// 9  指定几个，几个就按指定的来</span>
    MoreTwo <span class="token comment">// 10 从最后一个指定的，继续自增</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 二、访问</span>
<span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span> <span class="token comment">// 0</span>
    Femal <span class="token comment">// 1</span>
<span class="token punctuation">}</span>
<span class="token comment">// 我们可以通过枚举值拿到它对应的数字</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// 我们还可以通过它对应的数据拿到它的枚举值</span>
<span class="token comment">// 注意点，只有数值型枚举才可以这样做</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Male</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 三、赋值</span>
<span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
    Male<span class="token punctuation">,</span> <span class="token comment">// 0</span>
    Femal <span class="token comment">// 1</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3.1 给数值型枚举赋值</span>
<span class="token comment">// 定义了一个名称叫做val的变量, 这个变量中只能保存Male或者Femal</span>
<span class="token keyword">const</span> val1<span class="token operator">:</span>Gender <span class="token operator">=</span> Gender<span class="token punctuation">.</span>Male<span class="token punctuation">;</span> 
<span class="token comment">// const val2:Gender = &#39;nan&#39;; // 报错</span>
<span class="token comment">// const val3:Gender  = false;// 报错</span>
<span class="token comment">// 注意点: TS中的枚举底层实现的本质其实就是数值类型, 所以赋值一个数值不会报错</span>
<span class="token comment">// 注意点：只有数值型枚举能这么做</span>
<span class="token keyword">const</span> val4<span class="token operator">:</span>Gender <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span> <span class="token comment">// 不会报错</span>
<span class="token comment">// 3.2 给数值型赋值</span>
<span class="token keyword">const</span> num1<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> Gender<span class="token punctuation">.</span>Male

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
// 数字枚举的取值默认从0开始递增
// 数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果
const num = 666;
function getNum() {
    return 888;
}
enum Gender{
    // Male = 6,
    // Male = num, // 注意点: 如果使用常量给前面的枚举值赋值了, 那么后面的枚举值也需要手动的赋值
    // Female = 8
    Male = getNum(), // 注意点: 如果使用计算结果给前面的枚举值赋值了, 那么后面的枚举值也需要手动的赋值
    Female = 123
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 探究底层实现原理</span>
<span class="token comment">/*
var Gender;
(function (Gender) {
 // Gender[key] = value;
    Gender[Gender[&quot;Male&quot;] = 0] = &quot;Male&quot;;
    Gender[Gender[&quot;Femal&quot;] = 1] = &quot;Femal&quot;;
})(Gender || (Gender = {}));

let Gender = {};
Gender[&quot;Male&quot;] = 0;
Gender[0] = &quot;Male&quot;;
Gender[&quot;Femal&quot;] = 1;
Gender[1] = &quot;Femal&quot;;
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-字符串型枚举" tabindex="-1"><a class="header-anchor" href="#_2-字符串型枚举" aria-hidden="true">#</a> 2 字符串型枚举</h2><p>枚举成员的值为字符串。字符串枚举成员没有自增长的行为，但是数值枚举有自增，0，1，2 。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 和数字枚举不一样, 字符串枚举不能使用常量或者计算结果给枚举值赋值</span>
<span class="token comment">// 虽然字符串枚举不能够使用常量或者计算结果给枚举值赋值, 但是它可以使用内部的其它枚举值来赋值</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&#39;Up1&#39;</span><span class="token punctuation">,</span>
    Right <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span>

    <span class="token constant">U</span> <span class="token operator">=</span> Up<span class="token punctuation">,</span>
    <span class="token constant">R</span> <span class="token operator">=</span> Right<span class="token punctuation">,</span>
    <span class="token constant">D</span> <span class="token operator">=</span> Down<span class="token punctuation">,</span>
    <span class="token constant">L</span> <span class="token operator">=</span> Left
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Up1</span>
<span class="token comment">// console.log(Direction[&quot;Up1&quot;]); // 报错，只有数值枚举可以Direction[0]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">U</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Up1</span>

<span class="token keyword">const</span> dir1<span class="token operator">:</span>Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Up
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Up1</span>

<span class="token keyword">const</span> dir2<span class="token operator">:</span>String <span class="token operator">=</span> Direction<span class="token punctuation">.</span><span class="token constant">D</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Down</span>
<span class="token comment">// 字符串枚举是String类型的子类型，因此允许将字符串枚举类型赋值给String类型。 </span>

<span class="token comment">// const dir3:Direction = &quot;Up1&quot; // 报错</span>
<span class="token comment">// 但是反过来，不允许将String类型赋值给字符串枚举类型，这一点与数值枚举类型是不同的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-异构型枚举" tabindex="-1"><a class="header-anchor" href="#_3-异构型枚举" aria-hidden="true">#</a> 3 异构型枚举</h2><p>typescript允许在一个枚举中同时定义数值型枚举成员和字符串枚举成员，我们将这种类型的枚举称作异构型枚举。语法上允许，但是<strong>不推荐在代码中使用异构型枚举</strong>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个异构型枚举</span>
<span class="token keyword">enum</span> ColorA <span class="token punctuation">{</span>
    Back <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    White <span class="token operator">=</span> <span class="token string">&quot;White&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 含字符串值成员的枚举中不允许使用计算的值作为初始值。</span>
<span class="token keyword">enum</span> ColorB <span class="token punctuation">{</span>
    <span class="token comment">// Back = 0+0, // 报错 因为含有字符串枚举成员，所以不允许使用计算的值</span>
    White <span class="token operator">=</span> <span class="token string">&quot;White&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果数值枚举成员在前，可以不用定义默认初始值。</span>
<span class="token keyword">enum</span> ColorC <span class="token punctuation">{</span>
    Back<span class="token punctuation">,</span>
    White <span class="token operator">=</span> <span class="token string">&quot;White&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果数值枚举成员在后，必须指定默认初始值</span>
<span class="token keyword">enum</span> ColorD <span class="token punctuation">{</span>
    White <span class="token operator">=</span> <span class="token string">&quot;White&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Back // 报错，没有指定初始值。</span>
    Back <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","14枚举类型.html.vue"]]);export{u as default};
