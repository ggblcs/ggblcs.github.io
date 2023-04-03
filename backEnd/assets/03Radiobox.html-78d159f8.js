import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_03-radiobox" tabindex="-1"><a class="header-anchor" href="#_03-radiobox" aria-hidden="true">#</a> 03 Radiobox</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>

<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上创建一个标签label用以显示并放置</span>
var <span class="token operator">=</span> tk<span class="token punctuation">.</span>StringVar<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 定义一个var用来将radiobutton的值和Label的值联系在一起.</span>
l <span class="token operator">=</span> tk<span class="token punctuation">.</span>Label<span class="token punctuation">(</span>window<span class="token punctuation">,</span> bg<span class="token operator">=</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;empty&#39;</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 第6步，定义选项触发函数功能</span>
<span class="token keyword">def</span> <span class="token function">print_selection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    l<span class="token punctuation">.</span>config<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&#39;you have selected &#39;</span> <span class="token operator">+</span> var<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 第5步，创建三个radiobutton选项，其中variable=var, value=&#39;A&#39;的意思就是，当我们鼠标选中了其中一个选项，把value的值A放到变量var中，然后赋值给variable</span>
r1 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Radiobutton<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;Option A&#39;</span><span class="token punctuation">,</span> variable<span class="token operator">=</span>var<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span>print_selection<span class="token punctuation">)</span>
r1<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>
r2 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Radiobutton<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;Option B&#39;</span><span class="token punctuation">,</span> variable<span class="token operator">=</span>var<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span>print_selection<span class="token punctuation">)</span>
r2<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>
r3 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Radiobutton<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;Option C&#39;</span><span class="token punctuation">,</span> variable<span class="token operator">=</span>var<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span>print_selection<span class="token punctuation">)</span>
r3<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第7步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","03Radiobox.html.vue"]]);export{r as default};
