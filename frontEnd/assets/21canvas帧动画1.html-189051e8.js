import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_21-canvas帧动画1" tabindex="-1"><a class="header-anchor" href="#_21-canvas帧动画1" aria-hidden="true">#</a> 21 canvas帧动画1</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>21-Canvas帧动画<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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

    <span class="token comment">// 3.加载图片</span>
    <span class="token keyword">let</span> oImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oImg<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 3.1计算每一张图片的宽高</span>
        <span class="token keyword">let</span> imageWidth <span class="token operator">=</span> oImg<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        <span class="token keyword">let</span> imageHeight <span class="token operator">=</span> oImg<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
        <span class="token keyword">let</span> personWidth <span class="token operator">=</span> imageWidth <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> personHeight <span class="token operator">=</span> imageHeight <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.2计算绘制的位置</span>
        <span class="token keyword">let</span> canvasWidth <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        <span class="token keyword">let</span> canvasHeight <span class="token operator">=</span> oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
        <span class="token keyword">let</span> originX <span class="token operator">=</span> canvasWidth <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> personWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> originY <span class="token operator">=</span> canvasHeight <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> personHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.3绘制图片</span>
        oCtx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>oImg<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> personHeight <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> personWidth<span class="token punctuation">,</span> personHeight<span class="token punctuation">,</span> originX<span class="token punctuation">,</span> originY<span class="token punctuation">,</span> personWidth<span class="token punctuation">,</span> personHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.4实现逐帧动画</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oCtx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvasWidth<span class="token punctuation">,</span> canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oCtx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>oImg<span class="token punctuation">,</span> index <span class="token operator">*</span> personWidth<span class="token punctuation">,</span> personHeight <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> personWidth<span class="token punctuation">,</span> personHeight<span class="token punctuation">,</span> originX<span class="token punctuation">,</span> originY<span class="token punctuation">,</span> personWidth<span class="token punctuation">,</span> personHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
            index<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    oImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;images/person.png&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","21canvas帧动画1.html.vue"]]);export{k as default};
