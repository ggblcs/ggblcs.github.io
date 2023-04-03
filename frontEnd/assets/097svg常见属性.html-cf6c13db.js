import{_ as n,p as s,q as t,a1 as a}from"./framework-96b046e1.js";const o={},e=a(`<h1 id="_97-svg常见属性" tabindex="-1"><a class="header-anchor" href="#_97-svg常见属性" aria-hidden="true">#</a> 97 svg常见属性</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>06-SVG常见属性上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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
        <span class="token selector">line</span><span class="token punctuation">{</span>
            <span class="token property">stroke</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token property">stroke-width</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
            <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> move 10s 0s linear infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span><span class="token punctuation">{</span>
                <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">to</span><span class="token punctuation">{</span>
                <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> -200<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
    fill: 修改填充颜色
    fill-opacity: 0~1 设置填充颜色的透明度
    stroke: 修改描边颜色
    stroke-width: 修改描边宽度
    stroke-opacity: 0~1 设置描边透明度
    stroke-linecap: butt/square/round  设置线段两端帽子
    stroke-dasharray: 设置虚线
    stroke-dashoffset: 设置虚线偏移位
    stroke-linejoin: miter/bevel/round 设置折线转角样式
    --&gt;</span>
    <span class="token comment">&lt;!--&lt;rect x=&quot;100&quot; y=&quot;100&quot; width=&quot;100&quot; height=&quot;100&quot; fill=&quot;blue&quot;&gt;&lt;/rect&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;rect x=&quot;100&quot; y=&quot;100&quot; width=&quot;100&quot; height=&quot;100&quot; fill=&quot;blue&quot; fill-opacity=&quot;0.5&quot;&gt;&lt;/rect&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;100&quot; x2=&quot;300&quot; y2=&quot;100&quot; stroke=&quot;red&quot;&gt;&lt;/line&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;100&quot; x2=&quot;300&quot; y2=&quot;100&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot;&gt;&lt;/line&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;100&quot; x2=&quot;300&quot; y2=&quot;100&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-opacity=&quot;0.5&quot;&gt;&lt;/line&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    &lt;line x1=&quot;100&quot; y1=&quot;100&quot; x2=&quot;300&quot; y2=&quot;100&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-linecap=&quot;butt&quot;&gt;&lt;/line&gt;
    &lt;line x1=&quot;100&quot; y1=&quot;200&quot; x2=&quot;300&quot; y2=&quot;200&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-linecap=&quot;square&quot;&gt;&lt;/line&gt;
    &lt;line x1=&quot;100&quot; y1=&quot;300&quot; x2=&quot;300&quot; y2=&quot;300&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-linecap=&quot;round&quot;&gt;&lt;/line&gt;
    --&gt;</span>

    <span class="token comment">&lt;!--
    注意点:
    在SVG中这些所有的常用属性都是可以直接在CSS中使用的
    --&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;100&quot; x2=&quot;300&quot; y2=&quot;100&quot;&gt;&lt;/line&gt;--&gt;</span>

    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;200&quot; x2=&quot;300&quot; y2=&quot;200&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-dasharray=&quot;10 20 30&quot;&gt;&lt;/line&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;200&quot; x2=&quot;300&quot; y2=&quot;200&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-dasharray=&quot;10 &quot; stroke-dashoffset=&quot;15&quot;&gt;&lt;/line&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;line x1=&quot;100&quot; y1=&quot;300&quot; x2=&quot;300&quot; y2=&quot;300&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; stroke-dasharray=&quot;10 &quot; stroke-dashoffset=&quot;-15&quot;&gt;&lt;/line&gt;--&gt;</span>

    <span class="token comment">&lt;!--&lt;polyline points=&quot;100 100 300 100 300 300&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; fill=&quot;none&quot; stroke-linejoin=&quot;miter&quot;&gt;&lt;/polyline&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;polyline points=&quot;100 100 300 100 300 300&quot; stroke=&quot;red&quot; stroke-width=&quot;10&quot; fill=&quot;none&quot; stroke-linejoin=&quot;bevel&quot;&gt;&lt;/polyline&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100 100 300 100 300 300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>polyline</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[e];function l(u,i){return s(),t("div",null,p)}const r=n(o,[["render",l],["__file","097svg常见属性.html.vue"]]);export{r as default};
