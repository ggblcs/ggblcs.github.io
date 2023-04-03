import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_05-动态内存分配" tabindex="-1"><a class="header-anchor" href="#_05-动态内存分配" aria-hidden="true">#</a> 05 动态内存分配</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> len<span class="token punctuation">;</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token number">102</span><span class="token punctuation">,</span><span class="token number">103</span><span class="token punctuation">,</span><span class="token number">104</span><span class="token punctuation">,</span><span class="token number">105</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//详解见下</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//类似于a[0] = 4</span>
    b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//类似于a[1] = 5</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d &quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span>b<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//我们可以把b当作普通数组来使用</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span>b<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
详解
int * b = (int *)malloc(sizeof(int) * len);

sizeof(int) * len 计算出需要的总字节数

malloc（）会向操作系统申请需要的字节数，同时返回一个首地址，该首地址是void *类型

因为是void *类型，为了与int *类型一致才能计算，所以需要强制类型转换

疑问：指针都是首地址，为什么要区分各种类型？
其实区分类型是很重要的，只有指针知道是什么类型，才能知道访问时能直接访问几个字节；
对于指针的运算p+1也是知道什么类型之后才能加用首地址加上单位数据类型的尺寸
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","05动态内存分配.html.vue"]]);export{k as default};
