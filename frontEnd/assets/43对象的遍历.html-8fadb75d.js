import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_43-对象的遍历" tabindex="-1"><a class="header-anchor" href="#_43-对象的遍历" aria-hidden="true">#</a> 43 对象的遍历</h1><p>在js中可以通过高级for循环来遍历对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在ES6中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// name age</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//zs 20</span>
    <span class="token comment">//注意不能像下面这样写，下面代码的含义是取出p对象中名字叫做key的属性值，实际没有这个属性</span>
    <span class="token comment">// console.log(p.key);//undefined</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    为什么属性都遍历出来了，但是say方法没遍历出来？
    say方法存在于原型对象中，原型对象是不会被遍历的。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES6以前，与ES6差不多一样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">myName<span class="token punctuation">,</span> myAge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> myName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> myAge<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// name age say</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//zs 20 fun</span>
<span class="token punctuation">}</span>

<span class="token comment">//这次遍历有say方法。</span>
<span class="token comment">//如果不想遍历出方法，可以加个if语句</span>
<span class="token comment">/*
for(let key in p){
    if(p[key] instanceof Function){
    continue;
    }
    console.log(key);
}
    */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用for/in循环，有时候可以先获取对象所有属性名的数组，然后再通过for/of循环遍历该数组。</p><p>有4个函数可以用来取得属性名数组：</p><p>·Object.keys()返回对象可枚举自有属性名的数组。不包含不可枚举属性、继承属性或名字是符号的属性（参见6.10.3节）。</p><p>·Object.getOwnPropertyNames()与Object.keys()类似，但也会返回不可枚举自有属性名的数组，只要它们的名字是字符串。</p><p>·Object.getOwnPropertySymbols()返回名字是符号的自有属性，无论是否可枚举。</p><p>·Reflect.ownKeys()返回所有属性名，包括可枚举和不可枚举属性，以及字符串属性和符号属性（参见14.6节）。</p>`,13),c=[t];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","43对象的遍历.html.vue"]]);export{k as default};
