import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_18-函数节流" tabindex="-1"><a class="header-anchor" href="#_18-函数节流" aria-hidden="true">#</a> 18 函数节流</h1><p><strong>个人总结关于函数防抖和函数节流的区别</strong>：</p><ol><li><strong>函数防抖</strong>是我们做<strong>调整</strong>（比如我们调整浏览器宽高）<strong>时</strong>，<strong>定时器里的代码不执行</strong>，调整一次，就清除一次定时器。直到调整完了，才执行定时器里的代码。</li><li><strong>函数节流</strong>是我们做<strong>调整的那一瞬间</strong>（比如我们调整浏览器宽高），就开始<strong>执行定时器里的代码</strong>，直到定时器里的代码执行完毕，令flag=true才能执行下一次定时器。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是函数节流[throttle]?
函数节流也是优化高频率执行js代码的一种手段
可以减少高频调用函数的执行次数

2.函数节流作用
减少代码执行次数, 提升网页性能

3.函数节流应用场景
oninput / onmousemove  / onscroll / onresize等事件

4.函数节流和函数防抖区别
函数节流是减少连续的高频操作函数执行次数  (例如连续调用10次, 可能只执行3-4次)
函数防抖是让连续的高频操作时函数只执行一次(例如连续调用10次, 但是只会执行1次)
*/</span>

<span class="token keyword">let</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">resetSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>width<span class="token punctuation">,</span> height<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> width <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
    oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> height <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">resetSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听可视区域尺寸的变化</span>
<span class="token comment">/*
window.onresize = debounce(function () {
    resetSize();
    console.log(&quot;尺寸的变化&quot;);
}, 1000);
 */</span>
<span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// if(false) if(true) if(false)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    timerId <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">resetSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;尺寸的变化&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// resetSize();</span>
    <span class="token comment">// console.log(&quot;尺寸的变化&quot;);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tool.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">)</span><span class="token punctuation">{</span>
            width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span>
            height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">&quot;BackCompat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            width <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            height <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> height
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">getPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>pageXOffset<span class="token punctuation">)</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> window<span class="token punctuation">.</span>pageXOffset<span class="token punctuation">;</span>
            y <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">&quot;BackCompat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>
            y <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>
            y <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> y
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span><span class="token operator">+</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">getStyleAttr</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>currentStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> obj<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// fn = test</span>
        <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
            timerId <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay <span class="token operator">||</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// fn = test</span>
        <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
            timerId <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay <span class="token operator">||</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    window<span class="token punctuation">.</span>getScreen <span class="token operator">=</span> getScreen<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>getPageScroll <span class="token operator">=</span> getPageScroll<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>addEvent <span class="token operator">=</span> addEvent<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>getStyleAttr <span class="token operator">=</span> getStyleAttr<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>debounce <span class="token operator">=</span> debounce<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>throttle <span class="token operator">=</span> throttle<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数节流的封装" tabindex="-1"><a class="header-anchor" href="#函数节流的封装" aria-hidden="true">#</a> 函数节流的封装</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// fn = test</span>
        <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
            timerId <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay <span class="token operator">||</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","18函数节流.html.vue"]]);export{k as default};
