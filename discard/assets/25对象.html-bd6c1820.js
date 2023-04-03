import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>对象<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--属性和方法--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    
<span class="token comment">//    属性</span>
    <span class="token keyword">var</span> dog <span class="token operator">=</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">friend</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;大黄&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;小黄&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;小白&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//方法</span>
        <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;吃&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token punctuation">,</span>
        <span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;跑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span><span class="token comment">//直接改掉了里面的属性值。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;准备好了吗？下面要开始遍历了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> dog<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印出的是属性名</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;===========&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印出的是属性名</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印出的是值</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/*
    注意点：遍历对象要使用for...in...
     */</span>

<span class="token comment">//    ===========工厂函数对象=========================</span>
    <span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> p <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function-variable function">doIt</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是一个会写代码的女强人&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">//    =============自定义构造函数对象==================</span>
    <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token operator">=</span>sex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">,</span><span class="token function-variable function">doIt</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我会写代码&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//        不用写return，因为有new</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> dl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;小赵&#39;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> xl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;小李&#39;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    工厂函数对象与自定义构造函数对象的区别：
    工厂函数对象创建的类都是Object类，举个例子，创建狗类、猫类、人类作为动物类的子类，则创建的对象通过typeof只能查出是动物类（Object），无法查询具体是哪个类。
    自定义函数对象可以查出该对象具体是哪个类
     */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","25对象.html.vue"]]);export{k as default};
