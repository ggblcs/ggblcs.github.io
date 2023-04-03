import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_04-textarea" tabindex="-1"><a class="header-anchor" href="#_04-textarea" aria-hidden="true">#</a> 04 textarea</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>

<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上设定输入框控件entry框并放置</span>
e <span class="token operator">=</span> tk<span class="token punctuation">.</span>Entry<span class="token punctuation">(</span>window<span class="token punctuation">,</span> show<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>  <span class="token comment"># 显示成明文形式</span>
e<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 第5步，定义两个触发事件时的函数insert_point和insert_end（注意：因为Python的执行顺序是从上往下，所以函数一定要放在按钮的上面）</span>
<span class="token keyword">def</span> <span class="token function">insert_point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 在鼠标焦点处插入输入内容</span>
    var <span class="token operator">=</span> e<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token string">&#39;insert&#39;</span><span class="token punctuation">,</span> var<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">insert_end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 在文本框内容最后接着插入输入内容</span>
    var <span class="token operator">=</span> e<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> var<span class="token punctuation">)</span>


<span class="token comment"># 第6步，创建并放置两个按钮分别触发两种情况</span>
b1 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;insert point&#39;</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
               height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> command<span class="token operator">=</span>insert_point<span class="token punctuation">)</span>
b1<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>
b2 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;insert end&#39;</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
               height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> command<span class="token operator">=</span>insert_end<span class="token punctuation">)</span>
b2<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第7步，创建并放置一个多行文本框text用以显示，指定height=3为文本框是三个字符高度</span>
t <span class="token operator">=</span> tk<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>window<span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第8步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","04textarea.html.vue"]]);export{r as default};
