import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_12-图片灰度转换" tabindex="-1"><a class="header-anchor" href="#_12-图片灰度转换" aria-hidden="true">#</a> 12 图片灰度转换</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv
img<span class="token operator">=</span>cv<span class="token punctuation">.</span>imread<span class="token punctuation">(</span><span class="token string">&#39;lena.jpg&#39;</span><span class="token punctuation">)</span>
cv<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;BGR_img&#39;</span><span class="token punctuation">,</span>img<span class="token punctuation">)</span>

<span class="token comment">#将图片灰度转换</span>
gray_img<span class="token operator">=</span>cv<span class="token punctuation">.</span>cvtColor<span class="token punctuation">(</span>img<span class="token punctuation">,</span>cv<span class="token punctuation">.</span>COLOR_BGR2GRAY<span class="token punctuation">)</span>
cv<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;gray_img&#39;</span><span class="token punctuation">,</span>gray_img<span class="token punctuation">)</span>
<span class="token comment">#保存图片</span>
cv<span class="token punctuation">.</span>imwrite<span class="token punctuation">(</span><span class="token string">&#39;gray_lena.jpg&#39;</span><span class="token punctuation">,</span>gray_img<span class="token punctuation">)</span>
cv<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
cv<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function i(o,l){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","12图片灰度转换.html.vue"]]);export{r as default};
