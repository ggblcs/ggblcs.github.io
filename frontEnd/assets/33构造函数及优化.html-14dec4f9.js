import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_33-构造函数及优化" tabindex="-1"><a class="header-anchor" href="#_33-构造函数及优化" aria-hidden="true">#</a> 33 构造函数及优化</h1><h2 id="_01-构造函数" tabindex="-1"><a class="header-anchor" href="#_01-构造函数" aria-hidden="true">#</a> 01 构造函数</h2><p>工厂函数虽能创建对象，但显得不专业。</p><ol><li><p>构造函数和工厂函数一样，都是专门用于创建对象的。</p></li><li><p>构造函数本质上是工厂函数的简写。</p></li><li><p>构造函数与工厂函数的区别：</p><ol><li>构造函数的<strong>函数名称首字母必须大写</strong>。</li><li>构造函数只能够通过new来调用。</li></ol></li><li><p>当我们new Person();时系统做了什么？</p><ol><li>会在构造函数中创建一个对象。</li><li>会自动将刚才创建的对象赋值给this。</li><li>会在构造函数的最后自动添加return this。</li></ol></li></ol><p>构造函数（理解，每次new都会重新创建say方法，浪费性能。）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//与工厂函数相比，相当于</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">//let obj = new Object();系统自动添加</span>
   <span class="token comment">//let this = obj;系统自动添加</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">//return this;系统自动添加</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-优化的构造函数" tabindex="-1"><a class="header-anchor" href="#_02-优化的构造函数" aria-hidden="true">#</a> 02 优化的构造函数</h2><ol><li>优化半成品1/3（理解，say方法污染全局命名空间）：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
上面的构造函数调用obj1.say()与调用的obj2.say()不是同一块内存下的say()函数吗？

obj1和obj2，创建了两个对象，每个对象创建了一次say()函数。这两者本就是截然不同的东西。而构造函数其实本质上也是工厂函数，都是一样的。

其次，我们可以通过obj1.say === obj2.say判断。===判断如果相等，代表着两个函数内容相同，且存储在同一块内存。显然输出的是false。

这样同一个函数相当于复制了很多遍，岂不是浪费性能
*/</span>
<span class="token comment">//优化开始</span>
<span class="token keyword">function</span> <span class="token function">mySay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>say <span class="token operator">=</span> mySay<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>say <span class="token operator">===</span> obj2<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token comment">//优化成功</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>优化半成品2/3（理解，额外创建对象不专业）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
   上述方法，虽不太占用内存了，但是方法定义在全局之中，浪费了一个全局名字，而且看着也好像跟构造方法无关，影响阅读。
//1. 阅读性降低了
//2. 污染了全局的命名空间
*/</span>

<span class="token comment">//解决：把方法放在一个对象里。</span>
<span class="token keyword">let</span> fns <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function-variable function">mySay</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>say <span class="token operator">=</span> fns<span class="token punctuation">.</span>mySay<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>say <span class="token operator">===</span> obj2<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>优化半成品3/3（理解，未修复construct指向）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//上面的仍然不专业</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function-variable function">mySay</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">,</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>say <span class="token operator">===</span> obj2<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","33构造函数及优化.html.vue"]]);export{k as default};
