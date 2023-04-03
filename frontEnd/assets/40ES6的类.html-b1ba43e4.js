import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_40-es6的类" tabindex="-1"><a class="header-anchor" href="#_40-es6的类" aria-hidden="true">#</a> 40 ES6的类</h1><ol><li>ES6之前通过构造函数定义一个类（见面向对象三大特性封装，讲的有ES6之前的静态、实例）。</li><li>ES6开始系统提供了一个名称叫做class的关键字，这个关键字就是专门用于定义类的。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token comment">// 当我们通过new创建对象的时候系统会自动调用constructor方法，被称之为构造方法</span>
    <span class="token comment">// constructor里的属性是每个实例都不共享的。</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实例对象属性和方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 仍然是实例的属性，不是共享的。与写在constructor等效。</span>
    sex <span class="token operator">=</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">;</span><span class="token comment">// 不支持1/2 （比如火狐）</span>
    <span class="token comment">// constructor外的方法也是实例方法(不用static修饰)，只不过是共享的，放在property中</span>
    <span class="token comment">// 实例对象共享的属性和方法，相当于在构造函数的prototype</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 静态属性和方法，用类名.方法名访问</span>
    <span class="token keyword">static</span> num <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span><span class="token comment">// 不支持2/2 （比如火狐）</span>
    <span class="token keyword">static</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 静态方法的this只能访问静态属性和静态方法，不能访问实例中的东西</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;run&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 实例对象的属性和方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span>name<span class="token punctuation">,</span> per<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 实例对象共享的属性和方法</span>
per<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 静态属性和静态方法</span>
Person<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// 支持的定义静态变量的方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
Person<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong></p><ol><li>在ES标准中static只支持定义静态方法不支持定义静态变量。比如支持上文中的<code>static run(){</code>，但不支持<code> static num = 55;</code>。</li><li>那么如何添加静态变量？还是像构造函数中一样用类名点属性名=值即可。例如<code>Person.num = 55;</code>。</li></ol><h2 id="原型对象添加属性的补充" tabindex="-1"><a class="header-anchor" href="#原型对象添加属性的补充" aria-hidden="true">#</a> 原型对象添加属性的补充</h2><p>1 在ES6之前想在原型对象中添加方法</p><div class="language-txet line-numbers-mode" data-ext="txet"><pre class="language-txet"><code>添加属性
1. 方法一：\`类名.prototype.属性名=值\`动态添加。
2. 方法二：通过修改\`Person.prototype={}\`添加。
添加方法
1. 方法一：\`类名.prototype.方法名=function(){}\`。
2. 方法二：通过修改\`Person.prototype={}\`添加。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 在ES6之后想给原型对象添加属性和方法</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>添加属性
1. 只有一种方法，那就是\`类名.prototype.属性名=值\`动态添加。
2. 如果通过\`Person.prototype={}\`是不能添加成功的，无法修改原型对象。
3. 注意不能像添加共享方法一样，写在constructor外面，首先大部分浏览器不支持这样做，谷歌虽然可以支持这样的语法，但是写出来的结果仍是实例属性而不是共享的。
添加方法
1. 方法一：\`类名.prototype.方法名=function(){}\`
2. 方法二：直接写在constructor构造函数的外面，但前面不要加static（不然就变成静态方法了，静态方法实例对象调用不了）。例如上述代码中的say方法就是添加在原型对象中的方法。
3. 如果通过Person.prototype={}是不能添加成功的，无法修改原型对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","40ES6的类.html.vue"]]);export{r as default};
