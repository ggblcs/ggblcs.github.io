import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_27-svg脚本编程" tabindex="-1"><a class="header-anchor" href="#_27-svg脚本编程" aria-hidden="true">#</a> 27 svg脚本编程</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>26-SVG脚本编程<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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
<span class="token comment">&lt;!--
&lt;svg width=&quot;500&quot; height=&quot;500&quot;&gt;
    &lt;circle cx=&quot;100&quot; cy=&quot;100&quot; r=&quot;50&quot; fill=&quot;red&quot;&gt;&lt;/circle&gt;
    &lt;image xlink:href=&quot;images/lnj.jpg&quot; x=&quot;200&quot; y=&quot;200&quot;&gt;&lt;/image&gt;
&lt;/svg&gt;
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.SVG脚本编程注意点:
    创建SVG时必须指定命名空间
    const SVG_NS = &quot;http://www.w3.org/2000/svg&quot;
    * */</span>
    <span class="token keyword">const</span> <span class="token constant">SVG_NS</span> <span class="token operator">=</span> <span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span>
    <span class="token comment">// let oSvg = document.createElement(&quot;svg&quot;);</span>
    <span class="token keyword">let</span> oSvg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span><span class="token string">&quot;svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oSvg<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oSvg<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oSvg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// let oCircle = document.createElement(&quot;circle&quot;);</span>
    <span class="token keyword">let</span> oCircle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span><span class="token string">&quot;circle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCircle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCircle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;cy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCircle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oCircle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;fill&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oSvg<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oCircle<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    2.SVG脚本编程注意点:
    使用xlink属性也必须指定命名空间
    const XLINK_NS = &quot;http://www.w3.org/1999/xlink&quot;;
    * */</span>
    <span class="token keyword">const</span> <span class="token constant">XLINK_NS</span> <span class="token operator">=</span> <span class="token string">&quot;http://www.w3.org/1999/xlink&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> oImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oImage<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oImage<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// oImage.setAttribute(&quot;xlink:href&quot;, &quot;images/lnj.jpg&quot;);</span>
    oImage<span class="token punctuation">.</span><span class="token function">setAttributeNS</span><span class="token punctuation">(</span><span class="token constant">XLINK_NS</span><span class="token punctuation">,</span><span class="token string">&quot;xlink:href&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;images/lnj.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oSvg<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oImage<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    3.脚本编程推荐自学svg框架
    https://svgjs.com/
    http://snapsvg.io/docs/
    * */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","27svg脚本编程.html.vue"]]);export{k as default};
