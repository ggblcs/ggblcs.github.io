import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_14-函数模块化" tabindex="-1"><a class="header-anchor" href="#_14-函数模块化" aria-hidden="true">#</a> 14 函数模块化</h1><h2 id="_1-import导入整个模块" tabindex="-1"><a class="header-anchor" href="#_1-import导入整个模块" aria-hidden="true">#</a> 1 import导入整个模块</h2><p><code>b.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I am file B&#39;</span><span class="token punctuation">)</span>
printB<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> b

<span class="token keyword">def</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I am file A&#39;</span><span class="token punctuation">)</span>
printA<span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>printB<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot; 
I am file B
I am file A
I am file B
 &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-导入特定函数" tabindex="-1"><a class="header-anchor" href="#_2-导入特定函数" aria-hidden="true">#</a> 2 导入特定函数</h2><p><code>b.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun1_from_b&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fun2_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun2_from_b&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> b <span class="token keyword">import</span> fun1_from_b<span class="token punctuation">,</span> fun2_from_b

<span class="token keyword">def</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I am file A&#39;</span><span class="token punctuation">)</span>
printA<span class="token punctuation">(</span><span class="token punctuation">)</span>

fun1_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
fun2_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 
I am file A
fun1_from_b
fun2_from_b
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用as给函数指定别名" tabindex="-1"><a class="header-anchor" href="#_3-使用as给函数指定别名" aria-hidden="true">#</a> 3 使用as给函数指定别名</h2><p><code>b.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun1_from_b&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fun2_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun2_from_b&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> b <span class="token keyword">import</span> fun1_from_b <span class="token keyword">as</span> fun<span class="token punctuation">,</span> fun2_from_b

<span class="token keyword">def</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I am file A&#39;</span><span class="token punctuation">)</span>
printA<span class="token punctuation">(</span><span class="token punctuation">)</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
fun2_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 
I am file A
fun1_from_b
fun2_from_b
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用as给模块指定别名" tabindex="-1"><a class="header-anchor" href="#_3-使用as给模块指定别名" aria-hidden="true">#</a> 3 使用as给模块指定别名</h2><p><code>b.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun1_from_b&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fun2_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun2_from_b&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> b <span class="token keyword">as</span> m

m<span class="token punctuation">.</span>fun1_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>fun2_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-导入模块中所有函数" tabindex="-1"><a class="header-anchor" href="#_4-导入模块中所有函数" aria-hidden="true">#</a> 4 导入模块中所有函数</h2><p>使用*导入模块中所有函数。</p><p><code>b.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun1_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun1_from_b&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fun2_from_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;fun2_from_b&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> b <span class="token keyword">import</span> <span class="token operator">*</span>

fun1_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
fun2_from_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最好不要使用这种方式导入，因为如果模块中有函数的名称与当前项目中使用的名称相同时，可能导致覆盖。</p>`,28),i=[t];function o(c,l){return s(),a("div",null,i)}const d=n(p,[["render",o],["__file","14函数模块化.html.vue"]]);export{d as default};
