import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_09-canvas绘制坐标系" tabindex="-1"><a class="header-anchor" href="#_09-canvas绘制坐标系" aria-hidden="true">#</a> 09 canvas绘制坐标系</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>09-Canvas绘制坐标系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">canvas</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1.拿到canvas</span>
    <span class="token keyword">let</span> oCanvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.从canvas中拿到绘图工具</span>
    <span class="token keyword">let</span> oCtx <span class="token operator">=</span> oCanvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.定义变量保存小方格的尺寸</span>
    <span class="token keyword">let</span> gridSize <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.拿到canvas的宽高</span>
    <span class="token keyword">let</span> canvasWidth <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">let</span> canvasHeight <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token comment">// 5.计算在垂直方向和水平方向可以绘制多少条横线</span>
    <span class="token keyword">let</span> row <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>canvasHeight <span class="token operator">/</span> gridSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> col <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>canvasWidth <span class="token operator">/</span> gridSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 6.绘制垂直方向的横线</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        oCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">*</span> gridSize <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>canvasWidth<span class="token punctuation">,</span> i <span class="token operator">*</span> gridSize <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 7.绘制水平方向的横线</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        oCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>i <span class="token operator">*</span> gridSize <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>i <span class="token operator">*</span> gridSize <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">,</span> canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">;</span>
        oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 1.计算坐标系原点的位置</span>
    <span class="token keyword">let</span> originX <span class="token operator">=</span> gridSize<span class="token punctuation">;</span>
    <span class="token keyword">let</span> originY <span class="token operator">=</span> canvasHeight <span class="token operator">-</span> gridSize<span class="token punctuation">;</span>
    <span class="token comment">// 2.计算X轴终点的位置</span>
    <span class="token keyword">let</span> endX <span class="token operator">=</span> canvasWidth <span class="token operator">-</span> gridSize<span class="token punctuation">;</span>
    <span class="token comment">// 3.绘制X轴</span>
    oCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>originX<span class="token punctuation">,</span> originY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>endX<span class="token punctuation">,</span> originY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.绘制X轴的箭头</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>endX <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span> originY <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>endX <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span> originY <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>endX<span class="token punctuation">,</span> originY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 5.计算Y轴终点的位置</span>
    <span class="token keyword">let</span> endY <span class="token operator">=</span> gridSize<span class="token punctuation">;</span>
    <span class="token comment">// 3.绘制Y轴</span>
    oCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>originX<span class="token punctuation">,</span> originY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>originX<span class="token punctuation">,</span> endY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.绘制X轴的箭头</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>originX <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">,</span> endY <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>originX <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">,</span> endY <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>originX<span class="token punctuation">,</span> endY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function e(l,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","09canvas绘制坐标系.html.vue"]]);export{k as default};
