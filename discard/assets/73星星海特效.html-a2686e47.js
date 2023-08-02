import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_73-星星海特效" tabindex="-1"><a class="header-anchor" href="#_73-星星海特效" aria-hidden="true">#</a> 73 星星海特效</h1><hr><h2 id="title-星星海特效" tabindex="-1"><a class="header-anchor" href="#title-星星海特效" aria-hidden="true">#</a> title: 星星海特效</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>星星海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">body</span><span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">span</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;star.png&quot;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token comment">/*background-size: cover;*/</span>
            <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> flash 1s alternate infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> flash</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">}</span>
            <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">opacity</span><span class="token punctuation">:</span>1<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token selector">span:hover</span><span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>3<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span>all 1s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取屏幕的尺寸大小</span>
        <span class="token keyword">var</span> scrWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
        <span class="token keyword">var</span> scrHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>

        <span class="token comment">//动态创建星星</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">150</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//            2.1创建星星</span>
            <span class="token keyword">var</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            2.2 随机坐标</span>
            <span class="token keyword">var</span> x <span class="token operator">=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>scrWidth<span class="token punctuation">)</span> <span class="token punctuation">;</span>
            <span class="token keyword">var</span> y <span class="token operator">=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>scrHeight<span class="token punctuation">)</span> <span class="token punctuation">;</span>
            span<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> y<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            span<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> x<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//            2.3随机缩放</span>
            <span class="token keyword">var</span> styl <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1.5</span><span class="token punctuation">;</span>
<span class="token comment">//            span.style.transform = &#39;scale(&#39;+styl+&#39;)&#39;;</span>

<span class="token comment">//            2.4随机频率</span>
            <span class="token keyword">var</span> rate <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1.5</span><span class="token punctuation">;</span>
            span<span class="token punctuation">.</span>style<span class="token punctuation">.</span>animationDelay <span class="token operator">=</span> rate<span class="token operator">+</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">//        var timer = null;</span>
<span class="token comment">//                //动态创建星星</span>
<span class="token comment">//        for(var i = 0; i&lt;150; i++){</span>
<span class="token comment">//            clearInterval(timer);</span>
<span class="token comment">//            timer = setInterval(function(){</span>
<span class="token comment">//                var span = document.createElement(&#39;span&#39;);</span>
<span class="token comment">//                document.body.appendChild(span);</span>
<span class="token comment">////            2.2 随机坐标</span>
<span class="token comment">//                var x =parseInt(Math.random()*scrWidth) ;</span>
<span class="token comment">//                var y =parseInt(Math.random()*scrHeight) ;</span>
<span class="token comment">//                span.style.top = y+&#39;px&#39;;</span>
<span class="token comment">//                span.style.left = x+&#39;px&#39;;</span>
<span class="token comment">//            },500);</span>
<span class="token comment">////            2.1创建星星</span>
<span class="token comment">//</span>
<span class="token comment">//        }</span>

    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","73星星海特效.html.vue"]]);export{k as default};
