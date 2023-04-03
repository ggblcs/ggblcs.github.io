import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_47-狂派灰太狼大练习" tabindex="-1"><a class="header-anchor" href="#_47-狂派灰太狼大练习" aria-hidden="true">#</a> 47 狂派灰太狼大练习</h1><h2 id="_01-知识补充" tabindex="-1"><a class="header-anchor" href="#_01-知识补充" aria-hidden="true">#</a> 01 知识补充</h2><h3 id="_1-1-css线性渐变" tabindex="-1"><a class="header-anchor" href="#_1-1-css线性渐变" aria-hidden="true">#</a> 1.1 CSS线性渐变</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#e55c3d<span class="token punctuation">,</span>#c50000<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-jquery设置css" tabindex="-1"><a class="header-anchor" href="#_1-2-jquery设置css" aria-hidden="true">#</a> 1.2 jQuery设置css</h3><blockquote><p>好像两种写法都行</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.progress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;180px&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.progress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">180</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-jquery点击只能点一次" tabindex="-1"><a class="header-anchor" href="#_1-3-jquery点击只能点一次" aria-hidden="true">#</a> 1.3 jQuery点击只能点一次</h3><blockquote><p>其实这个在点击事件中讲过，只不过不常用，忘了</p><p>应用场景：锅打灰太狼，只能打一次，加分一次，多次加分是bug</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 点击事件</span>
$wolfImage<span class="token punctuation">.</span><span class="token function">one</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-发布感受" tabindex="-1"><a class="header-anchor" href="#_02-发布感受" aria-hidden="true">#</a> 02 发布感受</h2><p>在本地：运行感觉良好。</p><p>在服务器：10元服务器，卡的一批，图片不出来。垃圾。</p>`,13),c=[p];function o(i,u){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","47狂拍灰太狼大练习.html.vue"]]);export{r as default};
