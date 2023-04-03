import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_07-浏览器脚本" tabindex="-1"><a class="header-anchor" href="#_07-浏览器脚本" aria-hidden="true">#</a> 07 浏览器脚本</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//==UserScript==</span>
<span class="token comment">// @name         New Userscript</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net</span>
<span class="token comment">// @include		 *</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// Your code here...</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6677</span><span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@include</code>就是包括的网站，可以写多个<code>@include</code>，值可以写具体的网址。</p><p>同样的可以用<code>@match</code>匹配网址，可以多行多个<code>@match</code>，但一般match和include是二选一。</p><p><code>&quot;run_at&quot;: &quot;document_idle&quot;</code>应该是什么时候运行。</p><p><strong>别人的案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         Hi.图图来了</span>
<span class="token comment">// @namespace    photo_download</span>
<span class="token comment">// @version      2.0.0</span>
<span class="token comment">// @description  Hi.图图来了，是一个支持各大素材网站下载图片及视频的脚本。高清预览图片素材下载支持:千图网、包图网；视频素材下载支持:千图网、包图网；音乐素材下载支持：千图网、包图网</span>
<span class="token comment">// @author       lordship</span>
<span class="token comment">// @icon 		 data:image/png;base64,iVBORw...此处省略一万字。。。</span>
<span class="token comment">// @include		 *://www.58pic.com/*/*.html</span>
<span class="token comment">// @include		 *://ibaotu.com/*</span>
<span class="token comment">// @require      https://cdn.bootcdn.net/ajax/libs/jquery/2.2.0/jquery.min.js</span>
<span class="token comment">// @require      https://greasyfork.org/scripts/424364-tutulaile-plugins/code/TuTuLaiLe%20Plugins.js?version=918765</span>
<span class="token comment">// @compatible	 Chrome</span>
<span class="token comment">// @compatible	 Firefox</span>
<span class="token comment">// @compatible	 Edge</span>
<span class="token comment">// @compatible	 Safari</span>
<span class="token comment">// @compatible	 Opera</span>
<span class="token comment">// @compatible	 UC&#39;;/ </span>
<span class="token comment">// @license      GPL-3.0-only</span>
<span class="token comment">// @grant        GM_addStyle</span>
<span class="token comment">// ==/UserScript==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取图片：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> oImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>oImage<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> item <span class="token operator">=</span> oImage<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>src<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
        <span class="token comment">// console.log(item.src)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[c];function o(i,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","07浏览器脚本.html.vue"]]);export{d as default};
