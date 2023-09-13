import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_45-拷贝与深拷贝" tabindex="-1"><a class="header-anchor" href="#_45-拷贝与深拷贝" aria-hidden="true">#</a> 45 拷贝与深拷贝</h1><h2 id="_01-assign方法" tabindex="-1"><a class="header-anchor" href="#_01-assign方法" aria-hidden="true">#</a> 01 assign方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//let p2 = p1;//浅拷贝</span>
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//分配空间</span>
    
    <span class="token comment">/*
    方式一
    p2.name = p1.name;
    p2.age = p1.age;
     */</span>
     
    <span class="token comment">/*
    方式二
    for(let key in p1){
        p2[key] = p1[key];
    }
     */</span>
     
    <span class="token comment">/*
    方式三
    Object.assign(p2,p1);
     */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>assign可以将第二个参数的对象的属性和方法拷贝到第一个参数的对象中。</p><p><strong>缺点</strong>：如果对象中都是基本数据类型，那么以上三种方法都能实现深拷贝。但是，如果对象中有引用数据类型，比如对象中有对象，对象中有数组，那么，对象中的数组就不能被深拷贝。原理很好理解。对象中的数组的地址被赋值给新对象的新数组，那么对象中的数组本质上还是一个东西。</p><h2 id="_01-深拷贝" tabindex="-1"><a class="header-anchor" href="#_01-深拷贝" aria-hidden="true">#</a> 01 深拷贝</h2><ol><li><p>什么是深拷贝？什么是浅拷贝？</p><ol><li><p>深拷贝</p><p>修改新变量的值不会影响原有变量的值。</p><p>默认情况下基本数据类型都是深拷贝。</p></li><li><p>浅拷贝</p><p>修改新变量的值会影响原有变量的值。</p><p>默认情况下引用类型都是浅拷贝。</p></li></ol></li></ol><h3 id="手撸深拷贝算法" tabindex="-1"><a class="header-anchor" href="#手撸深拷贝算法" aria-hidden="true">#</a> 手撸深拷贝算法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    cat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//为什么写在这的方法是写入了原型中，不能被遍历，而写在这的对象却能被遍历？？？？？暂且留个疑问，待有时间解决</span>
    scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">depCopy</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1. 通过遍历拿到source中的所有属性</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> source<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//2. 取出当前遍历到的属性对应的取值</span>
        <span class="token keyword">let</span> sourceValue <span class="token operator">=</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 判断当前的取值是否是引用数据类型</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sourceValue <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//相当于new Array或者new Object</span>
            <span class="token comment">//实例对象.constructor拿到的是构造方法，之前学过</span>
            <span class="token keyword">let</span> subTarget <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">sourceValue<span class="token punctuation">.</span>constructor</span><span class="token punctuation">;</span>
            target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> subTarget<span class="token punctuation">;</span>
            <span class="token function">depCopy</span><span class="token punctuation">(</span>subTarget<span class="token punctuation">,</span> sourceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> sourceValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">depCopy</span><span class="token punctuation">(</span>p2<span class="token punctuation">,</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
p2<span class="token punctuation">.</span>cat<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>cat<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>cat<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>愉悦看代码：浏览器开发者工具控制台选项旁边source选项卡，找到代码点行号，设置断点，点击刷新，点下一步就OK。</p>`,10),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","45拷贝与深拷贝.html.vue"]]);export{r as default};
