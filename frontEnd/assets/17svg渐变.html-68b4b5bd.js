import{_ as n,p as a,q as s,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_17-svg渐变" tabindex="-1"><a class="header-anchor" href="#_17-svg渐变" aria-hidden="true">#</a> 17 svg渐变</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>16-SVG渐变<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">svg</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--
        1.线性渐变和径向渐变
        和Canvas一样, 在SVG中也可以生成渐变颜色
        &lt;linearGradient&gt;&lt;/linearGradient&gt; 线性渐变
        &lt;radialGradient&gt;&lt;/radialGradient&gt; 径向渐变

        2.渐变属性
        x1/y1: 渐变范围开始位置
        x2/y2: 渐变范围结束位置
        默认情况下x1/y1/x2/y2是当前元素的百分比
        可以通过gradientUnits修改
        gradientUnits=&quot;objectBoundingBox&quot;
        gradientUnits=&quot;userSpaceOnUse&quot;

        3.注意点:
        使用渐变颜色需要通过url(#id)格式来使用
        --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--&lt;linearGradient id=&quot;myColor&quot; x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;1&quot; y2=&quot;1&quot;&gt;--&gt;</span>
        <span class="token comment">&lt;!--&lt;linearGradient id=&quot;myColor&quot; x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;1&quot; y2=&quot;1&quot; gradientUnits=&quot;objectBoundingBox&quot;&gt;--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">gradientUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userSpaceOnUse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stop</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stop</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url(#myColor)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(c,u){return a(),s("div",null,o)}const k=n(p,[["render",l],["__file","17svg渐变.html.vue"]]);export{k as default};
