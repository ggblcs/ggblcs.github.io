import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_27-iterator基本概念" tabindex="-1"><a class="header-anchor" href="#_27-iterator基本概念" aria-hidden="true">#</a> 27 Iterator基本概念</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>46-Iterator基本概念<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.什么是Iterator?
    Iterator又叫做迭代器, 是一种接口
    这里的接口和现实中接口一样, 是一种标准一种规范
    例如: 电脑的USB接口有电脑USB接口的标准和规范, 正式因为有了标准和规范
          所以A厂商生成的USB线可以插到B厂商电脑的USB接口上

    它规定了不同数据类型统一访问的机制, 这里的访问机制主要指数据的遍历
    在ES6中Iterator接口主要供for...of消费

    2.默认情况下以下数据类型都实现的Iterator接口
    Array/Map/Set/String/TypedArray/函数的 arguments 对象/NodeList 对象
    */</span>
    <span class="token comment">/*
    1.只要一个数据已经实现了Iterator接口, 那么这个数据就有一个叫做[Symbol.iterator]的属性
    2.[Symbol.iterator]的属性会返回一个函数
    3.[Symbol.iterator]返回的函数执行之后会返回一个对象
    4.[Symbol.iterator]函数返回的对象中又一个名称叫做next的方法
    5.next方法每次执行都会返回一个对象{value: 1, done: false}
    6.这个对象中存储了当前取出的数据和是否取完了的标记
    */</span>
    <span class="token comment">/*
    // let arr = [1, 3, 5];
    // console.log(arr[Symbol.iterator]);
    // let it = arr[Symbol.iterator]();
    // console.log(it);
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());
    // console.log(it.next());

    // for(let value of arr){
    //     console.log(value);
    // }

    // let obj = {
    //     name: &quot;lnj&quot;,
    //     age: 34,
    //     gender: &quot;man&quot;
    // }
    // console.log(obj[Symbol.iterator]);
    // for(let value of obj){
    //     console.log(value);
    // }
    */</span>

    <span class="token keyword">class</span> <span class="token class-name">MyArray</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// this[0] = 1;</span>
                <span class="token comment">// this[1] = 3;</span>
                <span class="token comment">// this[2] = 5;</span>
                <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> that<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> that<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> that<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(arr);</span>
    <span class="token comment">// console.log(arr[0]);</span>
    <span class="token comment">// arr[0] = 666;</span>
    <span class="token comment">// console.log(arr);</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(arr[Symbol.iterator]);</span>
    <span class="token comment">// let it = arr[Symbol.iterator]();</span>
    <span class="token comment">// console.log(it);</span>
    <span class="token comment">// console.log(it.next());</span>
    <span class="token comment">// console.log(it.next());</span>
    <span class="token comment">// console.log(it.next());</span>
    <span class="token comment">// console.log(it.next());</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function o(i,c){return s(),a("div",null,l)}const r=n(e,[["render",o],["__file","027Iterator基本概念.html.vue"]]);export{r as default};
