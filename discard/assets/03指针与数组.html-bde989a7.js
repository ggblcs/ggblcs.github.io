import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_03-指针与数组" tabindex="-1"><a class="header-anchor" href="#_03-指针与数组" aria-hidden="true">#</a> 03 指针与数组</h1><p>导读：在VScode中运行。</p><p>讲师：郝斌。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  ��F6�Զ�����</span>
<span class="token comment">// 按F6自动运行，注意编码问题，运行结果在黑窗口中，编码gbk</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-指针" tabindex="-1"><a class="header-anchor" href="#_01-指针" aria-hidden="true">#</a> 01 指针</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">//utf-8</span>
<span class="token comment">// 指针就是地址，地址就是指针</span>
<span class="token comment">// 指针变量是存放内存单元地址的变量?</span>
<span class="token keyword">int</span> <span class="token function">zhizhen1</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> p<span class="token punctuation">;</span><span class="token comment">//p是个指针变量，int *表示该p变量只能存储int类型的地址</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j<span class="token punctuation">;</span>

    p <span class="token operator">=</span> <span class="token operator">&amp;</span>i<span class="token punctuation">;</span><span class="token comment">//此时*p 和i 就变成了同一种东西，*p 就是i ，i就是*p</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ָ指针1 p = %d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
不是定义了一个名为*k的形参，而是定义了一个名为k的形参，类型为int *
*/</span>
<span class="token keyword">int</span> <span class="token function">kk2</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">*</span>k <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">zhizhen2</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token function">kk2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ָ指针2 k = %d\\n&quot;</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">zhizhen1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">zhizhen2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-指针与数组" tabindex="-1"><a class="header-anchor" href="#_02-指针与数组" aria-hidden="true">#</a> 02 指针与数组</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">/**
 * 【数组名】
一维数组名是个指针常量，
它存放的是一维数组第一个元素的地址，它的值不能被改变。
一维数组名指向的是数组的第一个元素

【下标和指针的关系】
a[i] &lt;==&gt; *(a+i)
*/</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">zhishidian1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">zhishidian2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">zhishidian1</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//下标和指针的关系演示</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a[3]</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b = %d\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//p输出的是地址</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
void show_Array(int * p,int i){//参数int * p只能接收地址，是int * 类型的参数p
    p[2] = -1;//p[0] == *p
}
*/</span>
<span class="token keyword">void</span> <span class="token function">show_Array</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> p <span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">zhishidian2</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">show_Array</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a等价于&amp;a[0], &amp;a[0]本省就是int * 类型</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//无论指针指向的变量占几个字节，指针本身都只占4个字节。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","03指针与数组.html.vue"]]);export{k as default};
