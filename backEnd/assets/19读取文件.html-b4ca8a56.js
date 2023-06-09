import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_19-读取文件" tabindex="-1"><a class="header-anchor" href="#_19-读取文件" aria-hidden="true">#</a> 19 读取文件</h1><h2 id="_1-读取整个文件" tabindex="-1"><a class="header-anchor" href="#_1-读取整个文件" aria-hidden="true">#</a> 1 读取整个文件</h2><p><code>pai.txt</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3.141592635
8979323846
264338279
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;pai.txt&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> file_obj<span class="token punctuation">:</span>
    contents <span class="token operator">=</span> file_obj<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
 在这个程序中，第一行代码做了大量的工作。
 我们先来看看函数open()。要以任何方式使用文件，那怕仅仅是打印其内容，都得先打开文件，才能访问它。
 函数open()接受一个参数：要打开的文件的名称。
 Python在当前执行的文件所在的目录中查找指定的文件。
 在本例中，当前运行的是car.py，因此Python在car.py所在的目录中查找pai.txt。
 函数open()返回一个表示文件的对象。
 在这里，open(&#39;pi_digits.txt&#39;)返回一个表示文件pai.txt的对象，
 Python将该对象赋给file_object供以后使用。 
 关键字with在不再需要访问文件后将其关闭。在这个程序中，注意到我们调用了open()，
 但没有调用close()。也可以调用open()和close()来打开和关闭文件，但这样做时，
 如果程序存在bug导致方法close()未执行，文件将不会关闭。这看似微不足道，
 但未妥善关闭文件可能导致数据丢失或受损。如果在程序中过早调用close()，
 你会发现需要使用文件时它已关闭(无法访问)，这会导致更多的错误。并非在任何情况
 下都能轻松确定关闭文件的恰当时机，但通过使用前面所示的结构，可让Python去确定：
 你只管打开文件，并在需要时使用它，Python自会在合适的时候自动将其关闭。
 有了表示pai.txt的文件对象后，使用方法read()(前述程序的第二行)读取这个文件的
 全部内容，并将其作为一个长长的字符串赋给变量contents。这样，通过打印contents的值，
 就可将这个文本文件的全部内容显示出来：
 3.21152888
 2643383279
 相比于原始文件，该输出唯一不同的地方是末尾多了一个空行。
 为何会多出这个空行呢？因为read()到达文件末尾时返回一个空字符串，
 而将这个空字符串显示出来时就是一个空行。要删除多出来的空行，
 可在函数调用print()中使用rstrip()：
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-逐行读取" tabindex="-1"><a class="header-anchor" href="#_2-逐行读取" aria-hidden="true">#</a> 2 逐行读取</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>filename <span class="token operator">=</span> <span class="token string">&#39;pai.txt&#39;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> file_object<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> file_object<span class="token punctuation">:</span>
        <span class="token comment"># print(line) # 有空行</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建一个包含文件各行内容的列表" tabindex="-1"><a class="header-anchor" href="#_3-创建一个包含文件各行内容的列表" aria-hidden="true">#</a> 3 创建一个包含文件各行内容的列表</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>filename <span class="token operator">=</span> <span class="token string">&#39;pai.txt&#39;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> file_object<span class="token punctuation">:</span>
    lines <span class="token operator">=</span> file_object<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 
使用关键字with时，open()返回的文件对象只在with代码块内可用。
如果要在with代码块外访问文件的内容，可在with代码块内将文件的各行存储在一个列表中，
并在with代码块外使用该列表：可以立即处理文件的各个部分，也可以推迟到程序后面再处理。

readlines()从文件中读取每一行，并将其存储在一个列表中。
接下来，该列表被赋给变量lines。在with代码块外，依然可使用这个变量。
使用一个简单的for循环来打印lines中的各行。
因为列表lines的每个元素都对应于文件中的一行，所以输出与文件内容完全一致。
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-圆周率中的生日" tabindex="-1"><a class="header-anchor" href="#_4-圆周率中的生日" aria-hidden="true">#</a> 4 圆周率中的生日</h2><p>作者用这种方式读取了大型文件，对于可处理的数据量，Python没有任何限制，只要系统的内存足够多，你想处理多少数据都可以。</p><p><code>pai.txt</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3.141592635
8979323846
26433827903
28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>filename <span class="token operator">=</span> <span class="token string">&#39;pai.txt&#39;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> file_object<span class="token punctuation">:</span>
    lines <span class="token operator">=</span> file_object<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

pi_string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
    pi_string <span class="token operator">+=</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token string">&#39;0328&#39;</span> <span class="token keyword">in</span> pi_string<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your birthday appears in the first million digits of pi!&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;cry&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[t];function p(c,o){return s(),a("div",null,l)}const r=n(i,[["render",p],["__file","19读取文件.html.vue"]]);export{r as default};
