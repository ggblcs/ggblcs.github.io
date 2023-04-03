import{_ as a,p as e,q as n,a1 as s}from"./framework-96b046e1.js";const i={},r=s(`<h1 id="_007-数组" tabindex="-1"><a class="header-anchor" href="#_007-数组" aria-hidden="true">#</a> 007 数组</h1><h2 id="_01-一维数组" tabindex="-1"><a class="header-anchor" href="#_01-一维数组" aria-hidden="true">#</a> 01 一维数组</h2><h3 id="_1-1-定义方式" tabindex="-1"><a class="header-anchor" href="#_1-1-定义方式" aria-hidden="true">#</a> 1.1 定义方式</h3><ol><li><code>数组类型 数组名[数组长度];</code></li><li><code>数组类型 数组名[数组长度] = {1,2,3};</code></li><li><code>数组类型 数组名[] = {1,2,3};</code></li></ol><h3 id="_1-2-sizeof与数组" tabindex="-1"><a class="header-anchor" href="#_1-2-sizeof与数组" aria-hidden="true">#</a> 1.2 sizeof与数组</h3><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>sizeof(arr); //获取数组占用总空间
sizeof(arr[0]); //获取a【0】 占用空间
sizeof(arr)/sizeof(arr[0]); //获取数组总长度

arr; //获取数组地址
&amp;arr[0]; //获取arr[0]地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-二维数组" tabindex="-1"><a class="header-anchor" href="#_02-二维数组" aria-hidden="true">#</a> 02 二维数组</h2><p>跟坐标系没关系，最好不要按照坐标系理解。</p><h3 id="_2-1-定义方式" tabindex="-1"><a class="header-anchor" href="#_2-1-定义方式" aria-hidden="true">#</a> 2.1 定义方式</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 1. 数据类型 数组名[行数][列数];</span>
<span class="token comment">// 2. 数据类型 数组名[行数][列数] = {{数据1, //数据2}, {数据3, 数据4}};</span>
<span class="token comment">// 3. 数据类型 数组名[行数][列数] = {数据1, 数据2, 数据3, 数据4};</span>
<span class="token comment">// 4. 数据类型 数组名[  ][列数] = {数据1, 数据2, 数据3, 数据4};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-sizeof与数组" tabindex="-1"><a class="header-anchor" href="#_2-2-sizeof与数组" aria-hidden="true">#</a> 2.2 sizeof与数组</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>sizeof(arr); //二维数组占用空间大小
sizeof(arr[0]); // 二维数组第一行占用空间大小
sizeof(arr[0][0]); //二维数组第一个元素占用空间大小

sizeof(arr)/sizeof(arr[0]); //二维数组行数
sizeof(arr[0])/sizeof(arr[0][0]); //二维数组列数

arr[0]; //二维数组第一行首地址
arr[1]; //二维数组第二行首地址
(int)&amp;arr[0][0]; //二维数组第一个元素首地址(强制转换为十进制)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-指针访问数组" tabindex="-1"><a class="header-anchor" href="#_03-指针访问数组" aria-hidden="true">#</a> 03 指针访问数组</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token operator">*</span> p <span class="token operator">=</span> arr<span class="token punctuation">;</span>
<span class="token operator">*</span>p<span class="token punctuation">;</span> <span class="token comment">//arr[0]</span>
p<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token operator">*</span>p<span class="token punctuation">;</span>  <span class="token comment">//arr[1]</span>
<span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//arr[2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C语言进阶笔记中更详细。</p>`,15),d=[r];function c(l,o){return e(),n("div",null,d)}const p=a(i,[["render",c],["__file","007数组.html.vue"]]);export{p as default};
