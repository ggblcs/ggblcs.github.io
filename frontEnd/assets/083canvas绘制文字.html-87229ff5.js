import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_83-canvas绘制文字" tabindex="-1"><a class="header-anchor" href="#_83-canvas绘制文字" aria-hidden="true">#</a> 83 canvas绘制文字</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>19-Canvas绘制文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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
    <span class="token comment">// 3.绘制参考线</span>
    <span class="token keyword">let</span> canvasWidth <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">let</span> canvasHeight <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> canvasHeight<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>canvasWidth<span class="token punctuation">,</span> canvasHeight<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>canvasWidth<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>canvasWidth<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.绘制文字</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;知播渔教育&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过font属性可以设置文字的大小和样式</span>
    oCtx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;50px 微软雅黑&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过textBaseline属性可以设置文字垂直方向的对齐方式</span>
    <span class="token comment">// 注意点: 在对齐的时候是以绘制文字的y作为参考点进行对齐的</span>
    oCtx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过textAlign属性可以设置文字水平方向的对齐方式</span>
    <span class="token comment">// 注意点: 在对齐的时候是以绘制文字的x作为参考点进行对齐的</span>
    oCtx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    注意点:
    在绘制文字的时候, 是以文字的左下角作为参考点进行绘制
    * */</span>
    <span class="token comment">// oCtx.strokeText(str, canvasWidth/2, canvasHeight/2);</span>
    oCtx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> canvasWidth<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> canvasHeight<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// oCtx.fillRect(canvasWidth/2, canvasHeight/2, 100, 100);</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","083canvas绘制文字.html.vue"]]);export{k as default};
