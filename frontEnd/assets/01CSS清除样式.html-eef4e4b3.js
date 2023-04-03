import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_01-css清除样式" tabindex="-1"><a class="header-anchor" href="#_01-css清除样式" aria-hidden="true">#</a> 01 CSS清除样式</h1><p>清除默认样式<code>reset.css</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css*/</span>

<span class="token comment">/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #FFF
<span class="token punctuation">}</span>

<span class="token selector">body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">table</span> <span class="token punctuation">{</span>
	<span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
	<span class="token property">border-spacing</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">fieldset,img</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">address,caption,cite,code,dfn,em,strong,th,var</span> <span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> normal
<span class="token punctuation">}</span>

<span class="token selector">ol,ul</span> <span class="token punctuation">{</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">caption,th</span> <span class="token punctuation">{</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> left
<span class="token punctuation">}</span>

<span class="token selector">h1,h2,h3,h4,h5,h6</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> normal
<span class="token punctuation">}</span>

<span class="token selector">q:before,q:after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token selector">abbr,acronym</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">font-variant</span><span class="token punctuation">:</span> normal
<span class="token punctuation">}</span>

<span class="token selector">sup</span> <span class="token punctuation">{</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> text-top
<span class="token punctuation">}</span>

<span class="token selector">sub</span> <span class="token punctuation">{</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> text-bottom
<span class="token punctuation">}</span>

<span class="token selector">input,textarea,select</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	*<span class="token property">font-size</span><span class="token punctuation">:</span> 100%
<span class="token punctuation">}</span>

<span class="token selector">legend</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #000
<span class="token punctuation">}</span>

<span class="token selector">#yui3-css-stamp.cssreset</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","01CSS清除样式.html.vue"]]);export{r as default};
