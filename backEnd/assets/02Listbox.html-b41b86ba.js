import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_02-listbox" tabindex="-1"><a class="header-anchor" href="#_02-listbox" aria-hidden="true">#</a> 02 Listbox</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>

<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上创建一个标签label用以显示并放置</span>
var1 <span class="token operator">=</span> tk<span class="token punctuation">.</span>StringVar<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 创建变量，用var1用来接收鼠标点击具体选项的内容</span>
l <span class="token operator">=</span> tk<span class="token punctuation">.</span>Label<span class="token punctuation">(</span>window<span class="token punctuation">,</span> bg<span class="token operator">=</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> fg<span class="token operator">=</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> textvariable<span class="token operator">=</span>var1<span class="token punctuation">)</span>
l<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 第6步，创建一个方法用于按钮的点击事件</span>
<span class="token keyword">def</span> <span class="token function">print_selection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    value <span class="token operator">=</span> lb<span class="token punctuation">.</span>get<span class="token punctuation">(</span>lb<span class="token punctuation">.</span>curselection<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 获取当前选中的文本</span>
    var1<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>  <span class="token comment"># 为label设置值</span>


<span class="token comment"># 第5步，创建一个按钮并放置，点击按钮调用print_selection函数</span>
b1 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;print selection&#39;</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> command<span class="token operator">=</span>print_selection<span class="token punctuation">)</span>
b1<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第7步，创建Listbox并为其添加内容</span>
var2 <span class="token operator">=</span> tk<span class="token punctuation">.</span>StringVar<span class="token punctuation">(</span><span class="token punctuation">)</span>
var2<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 为变量var2设置值</span>
<span class="token comment"># 创建Listbox</span>
lb <span class="token operator">=</span> tk<span class="token punctuation">.</span>Listbox<span class="token punctuation">(</span>window<span class="token punctuation">,</span> listvariable<span class="token operator">=</span>var2<span class="token punctuation">)</span>  <span class="token comment"># 将var2的值赋给Listbox</span>
<span class="token comment"># 创建一个list并将值循环添加到Listbox控件中</span>
list_items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> list_items<span class="token punctuation">:</span>
    lb<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>  <span class="token comment"># 从最后一个位置开始加入值</span>
lb<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 在第一个位置加入&#39;first&#39;字符</span>
lb<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 在第二个位置加入&#39;second&#39;字符</span>
lb<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 删除第二个位置的字符</span>
lb<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第8步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","02Listbox.html.vue"]]);export{k as default};
