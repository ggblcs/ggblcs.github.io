import{_ as e,M as i,p as l,q as t,R as n,t as s,N as c,a1 as o}from"./framework-96b046e1.js";const u={},d=n("h1",{id:"_01-入口函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01-入口函数","aria-hidden":"true"},"#"),s(" 01 入口函数")],-1),p={href:"https://jquery.com",target:"_blank",rel:"noopener noreferrer"},r=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.alicdn.com/tfs/TB1P_MofwmTBuNjy1XbXXaMrVXa-190-140.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_01-与js入口函数的区别" tabindex="-1"><a class="header-anchor" href="#_01-与js入口函数的区别" aria-hidden="true">#</a> 01 与js入口函数的区别</h2><ol><li>js如果写多个入口函数，后面的会覆盖前面的。<code>window.onload = function(){}</code>。</li><li>jQuery如果写多个会依次执行。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
window.onload = function (ev) {
    // 1.通过原生的JS入口函数可以拿到DOM元素
    var images = document.getElementsByTagName(&quot;images&quot;)[0];
    console.log(images);
    // 2.通过原生的JS入口函数可以拿到DOM元素的宽高
    var width = window.getComputedStyle(images).width;
    console.log(&quot;onload&quot;, width);
}
*/</span>

<span class="token comment">/*
* 1.原生JS和jQuery入口函数的加载模式不同
* 原生JS会等到DOM元素加载完毕,并且图片也加载完毕才会执行
* jQuery会等到DOM元素加载完毕,但不会等到图片也加载完毕就会执行
* */</span>
<span class="token comment">/*
$(document).ready(function () {
    // 1.通过jQuery入口函数可以拿到DOM元素
    var $images = $(&quot;images&quot;);
    console.log($images);
    // 2.通过jQuery入口函数不可以拿到DOM元素的宽高
    var $width = $images.width();
    console.log(&quot;ready&quot;, $width);
});
*/</span>

<span class="token comment">/*
1.原生的JS如果编写了多个入口函数,后面编写的会覆盖前面编写的
2.jQuery中编写多个入口函数,后面的不会覆盖前面的
*/</span>
<span class="token comment">// window.onload = function (ev) {</span>
<span class="token comment">//     alert(&quot;hello lnj1&quot;);</span>
<span class="token comment">// }</span>
<span class="token comment">// window.onload = function (ev) {</span>
<span class="token comment">//     alert(&quot;hello lnj2&quot;);</span>
<span class="token comment">// }</span>

<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello lnj1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello lnj2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-入口函数的其它写法" tabindex="-1"><a class="header-anchor" href="#_02-入口函数的其它写法" aria-hidden="true">#</a> 02 入口函数的其它写法</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 1.第一种写法
$(document).ready(function () {
    // alert(&quot;hello lnj&quot;);
});

// 2.第二种写法
jQuery(document).ready(function () {
    // alert(&quot;hello lnj&quot;);
});

// 3.第三种写法(推荐)
$(function () {
    // alert(&quot;hello lnj&quot;);
});

// 4.第四种写法
jQuery(function () {
    alert(&quot;hello lnj&quot;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const a=i("ExternalLinkIcon");return l(),t("div",null,[d,n("p",null,[s("jQuery下载地址："),n("a",p,[s("链接"),c(a)])]),r])}const h=e(u,[["render",v],["__file","01入口函数.html.vue"]]);export{h as default};
