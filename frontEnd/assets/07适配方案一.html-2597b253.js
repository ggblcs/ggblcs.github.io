import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_07-适配方案一" tabindex="-1"><a class="header-anchor" href="#_07-适配方案一" aria-hidden="true">#</a> 07 适配方案一</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>07-移动端常用适配方案一<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.top</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.top&gt;img</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.top&gt;p</span><span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 33px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.middle, .bottom</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 124px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.main</span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed #0d7efb<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.main&gt;img:nth-of-type(1)</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 175px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 116px<span class="token punctuation">;</span>
            <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.main&gt;img:nth-of-type(2)</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.bottom</span><span class="token punctuation">{</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
            <span class="token selector">.top&gt;p</span><span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.middle, .bottom</span><span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 143px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.main&gt;img:nth-of-type(1)</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 206px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 135px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.main&gt;img:nth-of-type(2)</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.bottom</span><span class="token punctuation">{</span>
                <span class="token property">margin-top</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
            <span class="token selector">.top&gt;p</span><span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 43px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.middle, .bottom</span><span class="token punctuation">{</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.main&gt;img:nth-of-type(1)</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 227px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.main&gt;img:nth-of-type(2)</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.bottom</span><span class="token punctuation">{</span>
                <span class="token property">margin-top</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/bg.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>实名认证<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/back.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/add.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/back.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images/add.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.通过媒体查询
     媒体查询的方式可以说是我早期采用的布局方式，
     它主要是通过查询设备的宽度来执行不同的css代码，最终达到界面的配置

     2.媒体查询优势
     简单, 哪里不对改哪里
     调整屏幕宽度的时候不用刷新页面即可响应式展示
     特别适合对移动短和PC维护同一套代码的时候

     3.媒体查询劣势
     由于移动端和PC端维护同一套代码, 所以代码量比较大，维护不方便
     为了兼顾大屏幕或高清设备，会造成其他设备资源浪费，特别是加载图片资源
     为了兼顾移动端和PC端各自响应式的展示效果，难免会损失各自特有的交互方式

     4.应用场景
     对于比较简单(界面不复杂)的网页, 诸如: 企业官网、宣传单页等
     我们可以通过媒体查询、伸缩布局、Bootstrap来实现响应式站点

     对于比较复杂(界面复杂)的网页, 诸如: 电商、团购等
     更多的则是才是PC端一套代码, 移动端一套代码
    * */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","07适配方案一.html.vue"]]);export{k as default};
