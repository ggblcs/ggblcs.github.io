import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_026-接口" tabindex="-1"><a class="header-anchor" href="#_026-接口" aria-hidden="true">#</a> 026 接口</h1><p>从语法角度来看，接口声明就是在对象类型字面量之前添加了interface关键字和接口名，因此对象类型字面量的语法规则同样适用于接口声明。</p><p>接口类型的类型成员也分为以下五类。</p><ul><li>属性签名</li><li>调用签名</li><li>构造签名</li><li>方法签名</li><li>索引签名</li></ul><h2 id="_1-接口类型介绍" tabindex="-1"><a class="header-anchor" href="#_1-接口类型介绍" aria-hidden="true">#</a> 1 接口类型介绍</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是接口类型?
和number,string,boolean,enum这些数据类型一样,
接口也是一种类型, 也是用来约束使用者的

类似于对象类型字面量，接口类型也能够表示任意的对象类型。不同的是，接口类型能够给对象类型命名，以及定义类型参数。接口类型无法表示原始类型，如boolean类型等。
* */</span>
<span class="token comment">// 定义一个接口类型，首字母大写</span>
<span class="token keyword">interface</span> <span class="token class-name">FullName</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span>string <span class="token comment">// 可用, ; 或无符号连接</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&#39;Jonathan&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">&#39;Lee&#39;</span>
    <span class="token comment">// lastName:18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 需求: 要求定义一个函数输出一个人完整的姓名, 这个人的姓必须是字符串, 这个人的名也必须是一个字符</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">}</span><span class="token operator">:</span>FullName</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的姓名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">say</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-属性签名" tabindex="-1"><a class="header-anchor" href="#_2-属性签名" aria-hidden="true">#</a> 2 属性签名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span><span class="token punctuation">{</span>
    x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    z<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-调用签名" tabindex="-1"><a class="header-anchor" href="#_3-调用签名" aria-hidden="true">#</a> 3 调用签名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ia</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>Error
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-构造签名" tabindex="-1"><a class="header-anchor" href="#_4-构造签名" aria-hidden="true">#</a> 4 构造签名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ib</span><span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>Error<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-方法签名" tabindex="-1"><a class="header-anchor" href="#_5-方法签名" aria-hidden="true">#</a> 5 方法签名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 方法签名是声明函数类型的属性成员的简写</span>
<span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
    <span class="token function">getElementById</span><span class="token punctuation">(</span>element<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement<span class="token operator">|</span><span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// 之所以说是方法签名是声明函数类型的属性成员的简写，</span>
<span class="token comment">// 是因为方法签名可以改写为具有同等效果但语法稍复杂的属性签名，改写后的语法中，属性名保持不变，并使用对象类型字面量和调用签名来表示函数类型。</span>
<span class="token comment">// 由于该对象类型字面量中仅包含一个调用签名，因此也可以使用函数类型字面量来代替对象类型字面量</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">// 方法签名</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">{</span>
    f<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span> <span class="token comment">// 属性签名和对象类型字面量</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">{</span>
    <span class="token function-variable function">f</span><span class="token operator">:</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token comment">// 属性签名和函数类型字面量</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法签名中的属性名可以为可计算属性名</span>
<span class="token keyword">const</span> funName <span class="token operator">=</span> <span class="token string">&#39;fun&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">D</span></span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>funName<span class="token punctuation">]</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 若接口中包含多个名字相同单参数列表不同的方法签名成员，则表示该方法是重载方法。</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">E</span></span><span class="token punctuation">{</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-索引签名" tabindex="-1"><a class="header-anchor" href="#_6-索引签名" aria-hidden="true">#</a> 6 索引签名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 什么是索引签名?</span>
<span class="token comment">// 索引签名用于描述使用索引访问的对象属性的类型。</span>
<span class="token comment">// 索引签名只有两种，1 字符串索引签名 2 数值索引签名</span>

<span class="token comment">// 1/2 字符串索引签名</span>
<span class="token keyword">interface</span> <span class="token class-name">FullName</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 一个接口中最多只能定义一个字符串索引签名.字符串索引签名会约束该对象中所有属性的类型。</span>
<span class="token comment">// 例如：下面字符串索引签名定义了索引值的类型为number类型，那么该接口中所有的属性的类型必须能够赋值给number类型。</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A1</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

    a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    b<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
    c<span class="token operator">:</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此例中，属性a、b、c的类型都能够赋值给字符串索引签名中定义的number类型因此不会产生错误。</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A2</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token comment">// a:boolean; // 编译错误</span>
    <span class="token comment">// b:()=&gt;number // 编译错误</span>
    <span class="token comment">// c():number // 编译错误</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B1</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span><span class="token constant">B1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意点: 只要key和value满足索引签名的限定即可, 无论有多少个都无所谓</span>
    firstName<span class="token operator">:</span><span class="token string">&#39;Jonathan&#39;</span><span class="token punctuation">,</span>
    lastName<span class="token operator">:</span><span class="token string">&#39;Lee&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// middleName:false // 报错</span>
    <span class="token boolean">false</span><span class="token operator">:</span> <span class="token string">&#39;666&#39;</span> <span class="token comment">// 无论key是什么类型最终都会自动转换成字符串类型, 所以没有报错</span>
<span class="token punctuation">}</span>


<span class="token comment">// 2/2 数值索引签名</span>
<span class="token comment">// 一个接口中最多只能定义一个数值索引签名。数值索引签名约束了数值属性名对应的属性值的类型。</span>
<span class="token comment">// 若接口中同时存在字符串索引签名和数值索引签名，那么数值索引签名的类型必须能够赋值给字符串索引签名的类型。</span>
<span class="token comment">// 因为在JavaScript中，对象的属性名只能为字符串（或Symbol）。</span>
<span class="token comment">// 虽然JavaScript也允许使用数字等其他值作为对象的索引，但最终它们都会被转换为字符串类型。</span>
<span class="token comment">// 因此，数值索引签名能够表示的属性集合是字符串索引签名能够表示的属性集合的子集。</span>
<span class="token comment">// 其实这段话的意思就是，假设字符串索引的值为number，数字索引2最终会变为字符串索引&#39;2&#39;，刚刚说了任意字符串类型必须为number，那么&#39;2&#39;:value的value也必须是number或number的子类。</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">N1</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token constant">N1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token operator">:</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span><span class="token string">&#39;c&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">N2</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 
interface N3 {
    [xx1:string]:0|1;
    [xx2:number]:number // 报错 “number”索引类型“number”不能分配给“string”索引类型“0 | 1”。
}
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[t];function l(o,c){return s(),a("div",null,i)}const u=n(p,[["render",l],["__file","026接口.html.vue"]]);export{u as default};
