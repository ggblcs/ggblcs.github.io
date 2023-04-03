import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_15-二维数组" tabindex="-1"><a class="header-anchor" href="#_15-二维数组" aria-hidden="true">#</a> 15 二维数组</h1><p><strong>内容过于简单，不需要看</strong></p><ol><li><p>什么是二维数组？</p><p>二维数组就是数组的每一个元素又是一个数组，我们就称之为二维数组。</p></li><li><p>如何操作二维数组？</p><ol><li><p>获取数据</p><p>数组名称[二维数组索引]; 得到一个一维数组。</p><p>数组名称<code>[二维数组索引][一维数组索引]</code>; 得到一维数组中的元素。</p></li><li><p>存储数据</p><p>数组名称[二维数组索引]=一维数组;</p><p>数组名称<code>[二维数组索引][一维数组索引]</code>=值</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//二维数组</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong></p><p>在定义二维数组中，将来需要存储多少个一维数组，就写上多少个[]即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","15二维数组.html.vue"]]);export{r as default};
