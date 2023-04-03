import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_05-js计算当前周周一周日" tabindex="-1"><a class="header-anchor" href="#_05-js计算当前周周一周日" aria-hidden="true">#</a> 05 JS计算当前周周一周日</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2020-01-15&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> nowTime <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> day <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> oneDayTime <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>

<span class="token comment">// 显示周一</span>
<span class="token keyword">var</span> MondayTime <span class="token operator">=</span> nowTime <span class="token operator">-</span> <span class="token punctuation">(</span>day <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> oneDayTime

<span class="token comment">// 显示周日</span>
<span class="token keyword">var</span> SundayTime <span class="token operator">=</span> nowTime <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">-</span> day<span class="token punctuation">)</span> <span class="token operator">*</span> oneDayTime

<span class="token comment">// 初始化日期时间</span>
<span class="token keyword">var</span> monday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>MondayTime<span class="token punctuation">)</span>
<span class="token keyword">var</span> sunday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>SundayTime<span class="token punctuation">)</span>

<span class="token comment">// 打印查看结果</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>monday<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sunday<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复习与回顾：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>myDate<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//获取当前月份(0-11,0代表1月)</span>
myDate<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//获取当前日(1-31)</span>
myDate<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//获取当前星期X(0-6,0代表星期天)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","05JS计算当前周周一周日.html.vue"]]);export{r as default};
