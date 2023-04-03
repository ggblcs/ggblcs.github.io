import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},i=t(`<h1 id="_10-添加事件三种方式" tabindex="-1"><a class="header-anchor" href="#_10-添加事件三种方式" aria-hidden="true">#</a> 10 添加事件三种方式</h1><h2 id="_3-添加事件的三种方式" tabindex="-1"><a class="header-anchor" href="#_3-添加事件的三种方式" aria-hidden="true">#</a> 3.添加事件的三种方式</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> oBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
方式一:
1.通过onxxx的方式来添加
注意点: 由于是给属性赋值, 所以后赋值的会覆盖先赋值
*/</span>
<span class="token comment">/*
oBtn.onclick = function () {
    alert(&quot;666&quot;);
}
oBtn.onclick = function () {
    alert(&quot;777&quot;);
}
let obj = {};
obj.say = function () {
    console.log(&quot;123&quot;);
}
obj.say = function () {
    console.log(&quot;456&quot;);
}
obj.say();
*/</span>

<span class="token comment">/*
方式二:
2.通过addEventListener方法添加
注意点:
1.事件名称不需要添加on
2.后添加的不会覆盖先添加的
3.只支持最新的浏览器IE9
*/</span>
<span class="token comment">/*
oBtn.addEventListener(&quot;click&quot;, function () {
    alert(&quot;666&quot;);
});
oBtn.addEventListener(&quot;click&quot;, function () {
    alert(&quot;777&quot;);
});
*/</span>

<span class="token comment">/*
方式三
3.通过attachEvent方法添加
注意点:
1.事件名称必须加上on
2.后添加的不会覆盖先添加的
3.只支持低版本的浏览器
*/</span>
<span class="token comment">/*
oBtn.attachEvent(&quot;onclick&quot;, function () {
    alert(&quot;666&quot;);
});
oBtn.attachEvent(&quot;onclick&quot;, function () {
    alert(&quot;777&quot;);
});
*/</span>

<span class="token comment">//封装兼容方法</span>
<span class="token function">addEvent</span><span class="token punctuation">(</span>oBtn<span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">addEvent</span><span class="token punctuation">(</span>oBtn<span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;777&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span><span class="token operator">+</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function l(o,u){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","10添加事件三种方式.html.vue"]]);export{d as default};
