import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_28-鼠标位置获取" tabindex="-1"><a class="header-anchor" href="#_28-鼠标位置获取" aria-hidden="true">#</a> 28 鼠标位置获取</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">div</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">/*
    offsetX/offsetY: 事件触发相对于当前元素自身的位置
    clientX/clientY: 事件触发相对于浏览器可视区域的位置
    注意点: 可视区域是不包括滚动出去的范围的
    pageX/pageY:     事件触发相对于整个网页的位置
    主要点: 整个网页包括滚动出去的范围的
    screenX/screenY: 事件触发相对于屏幕的位置，企业开发一般用不上
    */</span>
    <span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oDiv<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
        <span class="token comment">// console.log(&quot;offsetX&quot;, event.offsetX);</span>
        <span class="token comment">// console.log(&quot;offsetY&quot;, event.offsetY);</span>
        <span class="token comment">/*
        console.log(&quot;clientX&quot;, event.clientX);
        console.log(&quot;clientY&quot;, event.clientY);
        console.log(&quot;----------------------&quot;);
        console.log(&quot;pageX&quot;, event.pageX);
        console.log(&quot;pageY&quot;, event.pageY);
        */</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>screenX<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>screenY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clientX/clientY无论高级浏览器还是低级浏览器都支持
pageX/pageY只有高级浏览器支持, 低级浏览器是不支持的(IE9以下)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","28鼠标位置获取.html.vue"]]);export{d as default};
