import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_51-pj延时提示框" tabindex="-1"><a class="header-anchor" href="#_51-pj延时提示框" aria-hidden="true">#</a> 51 pj延时提示框</h1><hr><h2 id="title-pj延时提示框" tabindex="-1"><a class="header-anchor" href="#title-pj延时提示框" aria-hidden="true">#</a> title: pj延时提示框</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>延时提示框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">div</span><span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">#div1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">#div2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token comment">/*display: block;*/</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
       <span class="token keyword">var</span> oDiv1<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">var</span> oDiv2<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        var timer;</span>
        oDiv2<span class="token punctuation">.</span>onmouseover<span class="token operator">=</span>oDiv1<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        oDiv2<span class="token punctuation">.</span>onmouseout<span class="token operator">=</span>oDiv1<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            timer<span class="token operator">=</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>
                    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        oDiv2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//        alert(typeof timer);</span>


    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--合并之前--&gt;</span>
<span class="token comment">&lt;!--===========================================--&gt;</span>
<span class="token comment">&lt;!--&lt;!DOCTYPE html&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;html lang=&quot;en&quot;&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;head&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;meta charset=&quot;UTF-8&quot;&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;title&gt;延时提示框&lt;/title&gt;--&gt;</span>
    <span class="token comment">&lt;!--&lt;style&gt;--&gt;</span>
        <span class="token comment">&lt;!--div{--&gt;</span>
            <span class="token comment">&lt;!--float: left;--&gt;</span>
            <span class="token comment">&lt;!--margin: 10px;--&gt;</span>
        <span class="token comment">&lt;!--}--&gt;</span>
        <span class="token comment">&lt;!--#div1{--&gt;</span>
            <span class="token comment">&lt;!--width: 50px;--&gt;</span>
            <span class="token comment">&lt;!--height: 50px;--&gt;</span>
            <span class="token comment">&lt;!--background-color: red;--&gt;</span>
        <span class="token comment">&lt;!--}--&gt;</span>
        <span class="token comment">&lt;!--#div2{--&gt;</span>
            <span class="token comment">&lt;!--width: 250px;--&gt;</span>
            <span class="token comment">&lt;!--height: 250px;--&gt;</span>
            <span class="token comment">&lt;!--background-color: #ccc;--&gt;</span>
            <span class="token comment">&lt;!--display: none;--&gt;</span>
            <span class="token comment">&lt;!--/*display: block;*/--&gt;</span>
        <span class="token comment">&lt;!--}--&gt;</span>
    <span class="token comment">&lt;!--&lt;/style&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;/head&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;div id=&quot;div1&quot;&gt;&lt;/div&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;div id=&quot;div2&quot;&gt;&lt;/div&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;script&gt;--&gt;</span>
    <span class="token comment">&lt;!--window.onload=function()--&gt;</span>
    <span class="token comment">&lt;!--{--&gt;</span>
        <span class="token comment">&lt;!--var oDiv1=document.getElementById(&#39;div1&#39;);--&gt;</span>
        <span class="token comment">&lt;!--var oDiv2=document.getElementById(&#39;div2&#39;);--&gt;</span>

        <span class="token comment">&lt;!--oDiv1.onmouseover=function()--&gt;</span>
        <span class="token comment">&lt;!--{--&gt;</span>
            <span class="token comment">&lt;!--clearTimeout(timer);--&gt;</span>
            <span class="token comment">&lt;!--oDiv2.style.display=&#39;block&#39;;--&gt;</span>
        <span class="token comment">&lt;!--};--&gt;</span>
        <span class="token comment">&lt;!--oDiv1.onmouseout=function()--&gt;</span>
        <span class="token comment">&lt;!--{--&gt;</span>
           <span class="token comment">&lt;!--timer= setTimeout(function ()--&gt;</span>
            <span class="token comment">&lt;!--{--&gt;</span>
                <span class="token comment">&lt;!--oDiv2.style.display = &#39;none&#39;;--&gt;</span>
            <span class="token comment">&lt;!--}, 500);--&gt;</span>
        <span class="token comment">&lt;!--};--&gt;</span>
        <span class="token comment">&lt;!--oDiv2.onmouseover=function(){--&gt;</span>
           <span class="token comment">&lt;!--clearTimeout(timer);--&gt;</span>
        <span class="token comment">&lt;!--};--&gt;</span>
        <span class="token comment">&lt;!--oDiv2.onmouseout=function(){--&gt;</span>
            <span class="token comment">&lt;!--timer=setTimeout(function(){--&gt;</span>
            <span class="token comment">&lt;!--oDiv2.style.display=&#39;none&#39;;--&gt;</span>
            <span class="token comment">&lt;!--},500)--&gt;</span>
        <span class="token comment">&lt;!--};--&gt;</span>
    <span class="token comment">&lt;!--}--&gt;</span>
<span class="token comment">&lt;!--&lt;/script&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;/body&gt;--&gt;</span>
<span class="token comment">&lt;!--&lt;/html&gt;--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[p];function c(o,i){return s(),a("div",null,l)}const d=n(e,[["render",c],["__file","51pj延时提示框.html.vue"]]);export{d as default};
