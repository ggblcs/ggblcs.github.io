import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_06-window" tabindex="-1"><a class="header-anchor" href="#_06-window" aria-hidden="true">#</a> 06 window</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk  <span class="token comment"># 使用Tkinter前需要先导入</span>
<span class="token keyword">import</span> cv2
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># 第1步，实例化object，建立窗口window</span>
window <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 第2步，给窗口的可视化起名字</span>
window<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;My Window&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 第3步，设定窗口的大小(长 * 宽)</span>
window<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;500x300&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 这里的乘是小x</span>

<span class="token comment"># 第4步，在图形界面上设定标签</span>
l <span class="token operator">=</span> tk<span class="token punctuation">.</span>Label<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;你好！this is Tkinter&#39;</span><span class="token punctuation">,</span> bg<span class="token operator">=</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> font<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 说明： bg为背景，font为字体，width为长，height为高，这里的长和高是字符的长和高，比如height=2,就是标签有2个字符这么高</span>

<span class="token comment"># 第5步，放置标签</span>
l<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Label内容content区域放置位置，自动调节尺寸</span>
<span class="token comment"># 放置lable的方法有：1）l.pack(); 2)l.place();</span>

<span class="token comment"># 第6步，主窗口循环显示</span>
window<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 注意，loop因为是循环的意思，window.mainloop就会让window不断的刷新，如果没有mainloop,就是一个静态的window,传入进去的值就不会有循环，mainloop就相当于一个很大的while循环，有个while，每点击一次就会更新一次，所以我们必须要有循环</span>
<span class="token comment"># 所有的窗口文件都必须有类似的mainloop函数，mainloop是窗口文件的关键的关键。</span>


<span class="token comment"># 图2</span>
img2 <span class="token operator">=</span> cv2<span class="token punctuation">.</span>imread<span class="token punctuation">(</span><span class="token string">&#39;G:\\\\999.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 图集</span>
imgs <span class="token operator">=</span> np<span class="token punctuation">.</span>hstack<span class="token punctuation">(</span><span class="token punctuation">[</span>img2<span class="token punctuation">,</span>img2<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 展示多个</span>
cv2<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&quot;mutil_pic&quot;</span><span class="token punctuation">,</span> imgs<span class="token punctuation">)</span>
<span class="token comment">#等待关闭</span>
cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","06window.html.vue"]]);export{d as default};
