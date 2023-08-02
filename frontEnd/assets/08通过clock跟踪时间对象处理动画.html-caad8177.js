import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_08-通过clock跟踪时间对象处理动画" tabindex="-1"><a class="header-anchor" href="#_08-通过clock跟踪时间对象处理动画" aria-hidden="true">#</a> 08 通过clock跟踪时间对象处理动画</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取时钟运行总时长</span>
    <span class="token keyword">let</span> time <span class="token operator">=</span> clock<span class="token punctuation">.</span><span class="token function">getElapsedTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// let deltaTime = clock.getDelta()</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;始终运行的总时长&#39;</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
    <span class="token comment">// console.log(&#39;两次获取时间爱的间隔&#39;, deltaTime)</span>

    <span class="token keyword">let</span> t <span class="token operator">=</span> time <span class="token operator">%</span> <span class="token number">5</span>
    cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> t<span class="token operator">*</span><span class="token number">1</span> <span class="token comment">// 位置等于时间乘以速度</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
    <span class="token comment">// animate()</span>
    renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","08通过clock跟踪时间对象处理动画.html.vue"]]);export{r as default};
