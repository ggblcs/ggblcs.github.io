import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_19-setup参数" tabindex="-1"><a class="header-anchor" href="#_19-setup参数" aria-hidden="true">#</a> 19 setup参数</h1><p>语法糖使用definProps、defineEmits</p><ol><li><p>props</p></li><li><p>context</p></li></ol><p>prpos</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BannerContent</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BannerContent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">props</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 如果使用语法糖就不用再 props 了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>context</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>context<span class="token punctuation">.</span>attrs <span class="token comment">// 组件上定义的属性，如class，相当于$attr</span>
context<span class="token punctuation">.</span>slots <span class="token comment">// 插槽，相当于$slots</span>
context<span class="token punctuation">.</span>emit <span class="token comment">// 触发事件 相当于$emit</span>
context<span class="token punctuation">.</span>expose <span class="token comment">// 暴露公共，暴露后，父组件就可以this.$refs.xxx.aaa</span>
<span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> expose <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","19setup参数.html.vue"]]);export{r as default};
