import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_01-button" tabindex="-1"><a class="header-anchor" href="#_01-button" aria-hidden="true">#</a> 01 Button</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>


<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>

<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上设定标签</span>
var <span class="token operator">=</span> tk<span class="token punctuation">.</span>StringVar<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 将label标签的内容设置为字符类型，用var来接收hit_me函数的传出内容用以显示在标签上</span>
l <span class="token operator">=</span> tk<span class="token punctuation">.</span>Label<span class="token punctuation">(</span>window<span class="token punctuation">,</span> textvariable<span class="token operator">=</span>var<span class="token punctuation">,</span> bg<span class="token operator">=</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> fg<span class="token operator">=</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 说明： bg为背景，fg为字体颜色，font为字体，width为长，height为高，这里的长和高是字符的长和高，比如height=2,就是标签有2个字符这么高</span>
l<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 定义一个函数功能（内容自己自由编写），供点击Button按键时调用，调用命令参数command=函数名</span>
on_hit <span class="token operator">=</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">hit_me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> on_hit
    <span class="token keyword">if</span> on_hit <span class="token operator">==</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
        on_hit <span class="token operator">=</span> <span class="token boolean">True</span>
        var<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;you hit me&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        on_hit <span class="token operator">=</span> <span class="token boolean">False</span>
        var<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># 第5步，在窗口界面设置放置Button按键</span>
b <span class="token operator">=</span> tk<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;hit me&#39;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> command<span class="token operator">=</span>hit_me<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第6步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","01Button.html.vue"]]);export{r as default};
