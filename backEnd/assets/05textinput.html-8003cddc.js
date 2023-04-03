import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_05-textinput" tabindex="-1"><a class="header-anchor" href="#_05-textinput" aria-hidden="true">#</a> 05 textinput</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>

<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上设定输入框控件entry并放置控件</span>
e1 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Entry<span class="token punctuation">(</span>window<span class="token punctuation">,</span> show<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 显示成密文形式</span>
e2 <span class="token operator">=</span> tk<span class="token punctuation">.</span>Entry<span class="token punctuation">(</span>window<span class="token punctuation">,</span> show<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 显示成明文形式</span>
e1<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>
e2<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第5步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","05textinput.html.vue"]]);export{r as default};
