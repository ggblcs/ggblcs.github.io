import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_98-svg绘制路径" tabindex="-1"><a class="header-anchor" href="#_98-svg绘制路径" aria-hidden="true">#</a> 98 svg绘制路径</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>07-SVG绘制路径<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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
    1.什么是SVG路径
    SVG路径是一个比较牛X的东西, 可以绘制任意图形, 只不过比较复杂而已
    M = moveto  起点
    L = lineto  其它点
    H = horizontal lineto 和上一个点Y相等
    V = vertical lineto   和上一个点X相等
    Z = closepath  关闭当前路径
    --&gt;</span>
    <span class="token comment">&lt;!--
    S = smooth curveto
    S(x2, y2, x, y)  从当前位置光滑的绘制三次贝塞尔曲线到指定位置

    T = smooth quadratic Bézier curveto
    T(x, y) 从当前位置光滑的绘制二次贝塞尔曲线到指定位置
    --&gt;</span>
    <span class="token comment">&lt;!--&lt;path d=&quot;M 100 100 L 300 100&quot; stroke=&quot;red&quot;&gt;&lt;/path&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;path d=&quot;M 100 100 L 300 100 L 300 300&quot; stroke=&quot;red&quot; fill=&quot;none&quot; stroke-width=&quot;10&quot;&gt;&lt;/path&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;path d=&quot;M 100 100 L 300 100 L 300 300 L 100 100&quot; stroke=&quot;red&quot; fill=&quot;none&quot; stroke-width=&quot;10&quot;&gt;&lt;/path&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;path d=&quot;M 100 100 L 300 100 L 300 300 Z&quot; stroke=&quot;red&quot; fill=&quot;none&quot; stroke-width=&quot;10&quot;&gt;&lt;/path&gt;--&gt;</span>

    <span class="token comment">&lt;!--&lt;path d=&quot;M 100 100 H 300 V 300 Z&quot; stroke=&quot;red&quot; fill=&quot;none&quot; stroke-width=&quot;10&quot;&gt;&lt;/path&gt;--&gt;</span>
    <span class="token comment">&lt;!--
   2.路径指令注意点
   大写字母是绝对定位, 小写字母是相对定位
   绝对定位: 写什么位置就是什么位置
   相对定位: 相对上一次的位置, 在上一次位置基础上做调整
   --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M 100 100 l 300 100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[e];function o(c,i){return s(),a("div",null,l)}const d=n(p,[["render",o],["__file","098svg绘制路径.html.vue"]]);export{d as default};
