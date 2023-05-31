import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_06-清除默认样式" tabindex="-1"><a class="header-anchor" href="#_06-清除默认样式" aria-hidden="true">#</a> 06 清除默认样式</h1><p>在main.js导入reset.css即可。<strong>懂了就不用看了</strong></p><p>新加：px的p改成大写P就不会被转为rem了。</p><p>在assets中新建css目录放入以下scss文件(4个)，然后在main.js只导入base即可。</p><p>base.scss</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;./reset.scss&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;./variable.scss&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;./mixin.scss&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">html, body</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  // 解决IScroll拖拽卡顿问题
  <span class="token property">touch-action</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> font_<span class="token function">size</span><span class="token punctuation">(</span>$font_medium<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  //<span class="token atrule"><span class="token rule">@include</span> font_<span class="token function">size</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  //<span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span>sans-serif<span class="token punctuation">,</span>STHeiTi<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mixin.scss 详细解释见（86初始配置下）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;./variable.scss&quot;</span><span class="token punctuation">;</span></span>
<span class="token comment">/*根据dpr计算font-size*/</span>
<span class="token atrule"><span class="token rule">@mixin</span> font_<span class="token function">dpr</span><span class="token punctuation">(</span>$font-size<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size<span class="token punctuation">;</span>
  <span class="token selector">[data-dpr=&quot;2&quot;] &amp;</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size * 2<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">[data-dpr=&quot;3&quot;] &amp;</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> $font-size * 3<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*通过该函数设置字体大小，后期方便统一管理；*/</span>
<span class="token atrule"><span class="token rule">@mixin</span> font_<span class="token function">size</span><span class="token punctuation">(</span>$size<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> font_<span class="token function">dpr</span><span class="token punctuation">(</span>$size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
// 不换行
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">no-wrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// 限制行数
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">clamp</span><span class="token punctuation">(</span>$row<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>$row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// 根据属性选择器来设置背景颜色
<span class="token atrule"><span class="token rule">@mixin</span> bg_<span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> $background-color-theme<span class="token punctuation">;</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> $background-color-theme1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> $background-color-theme2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@mixin</span> bg_sub_<span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> $background-color-sub-theme<span class="token punctuation">;</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> $background-color-sub-theme1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> $background-color-sub-theme2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@mixin</span> font_<span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $font-color-theme<span class="token punctuation">;</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $font-color-theme1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $font-color-theme2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@mixin</span> font_active_<span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $font-active-color-theme<span class="token punctuation">;</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $font-active-color-theme1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $font-active-color-theme2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@mixin</span> border_<span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> $border-color-theme<span class="token punctuation">;</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> $border-color-theme1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> $border-color-theme2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@mixin</span> bg_<span class="token function">img</span><span class="token punctuation">(</span>$url<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token selector">[data-theme=theme] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_163.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme1] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_qq.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_it666.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>

  <span class="token selector">[data-theme=theme][data-dpr=&#39;2&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_163@2x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme][data-dpr=&#39;3&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_163@3x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme1][data-dpr=&#39;2&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_qq@2x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme1][data-dpr=&#39;3&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_qq@3x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2][data-dpr=&#39;2&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_it666@2x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">[data-theme=theme2][data-dpr=&#39;3&#39;] &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>$url + <span class="token string">&#39;_it666@3x.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reset.scss</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/</span>

<span class="token selector">html</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#000<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span>#FFF<span class="token punctuation">}</span>
<span class="token selector">body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">}</span>
<span class="token selector">table</span><span class="token punctuation">{</span><span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse<span class="token punctuation">;</span><span class="token property">border-spacing</span><span class="token punctuation">:</span>0<span class="token punctuation">}</span>
<span class="token selector">fieldset,img</span><span class="token punctuation">{</span><span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">}</span>
<span class="token selector">address,caption,cite,code,dfn,em,strong,th,var</span><span class="token punctuation">{</span><span class="token property">font-style</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>normal<span class="token punctuation">}</span>
<span class="token selector">ol,ul</span><span class="token punctuation">{</span><span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">}</span>
<span class="token selector">caption,th</span><span class="token punctuation">{</span><span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">}</span>
<span class="token selector">h1,h2,h3,h4,h5,h6</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>normal<span class="token punctuation">}</span>
<span class="token selector">q:before,q:after</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>
<span class="token selector">abbr,acronym</span><span class="token punctuation">{</span><span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">font-variant</span><span class="token punctuation">:</span>normal<span class="token punctuation">}</span>
<span class="token selector">sup</span><span class="token punctuation">{</span><span class="token property">vertical-align</span><span class="token punctuation">:</span>text-top<span class="token punctuation">}</span>
<span class="token selector">sub</span><span class="token punctuation">{</span><span class="token property">vertical-align</span><span class="token punctuation">:</span>text-bottom<span class="token punctuation">}</span>
<span class="token selector">input,textarea,select</span><span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span>*<span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">}</span>
<span class="token selector">legend</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#000<span class="token punctuation">}</span>
<span class="token selector">a</span><span class="token punctuation">{</span><span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">}</span>
<span class="token selector">#yui3-css-stamp.cssreset</span><span class="token punctuation">{</span><span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>variable.scss</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//字体定义规范</span>
<span class="token property"><span class="token variable">$font_samll</span></span><span class="token punctuation">:</span>12Px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font_medium_s</span></span><span class="token punctuation">:</span>13Px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font_medium</span></span><span class="token punctuation">:</span>15Px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font_large</span></span><span class="token punctuation">:</span>17Px<span class="token punctuation">;</span>

<span class="token comment">// 背景颜色规范(主要)</span>
<span class="token property"><span class="token variable">$background-color-theme</span></span><span class="token punctuation">:</span> #d43c33<span class="token punctuation">;</span><span class="token comment">//背景主题颜色默认(网易红)</span>
<span class="token property"><span class="token variable">$background-color-theme1</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span>213<span class="token punctuation">,</span>156<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//背景主题颜色1(QQ绿)</span>
<span class="token property"><span class="token variable">$background-color-theme2</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span><span class="token comment">//背景主题颜色2(夜间模式)</span>

<span class="token comment">// 背景颜色规范(次要)</span>
<span class="token property"><span class="token variable">$background-color-sub-theme</span></span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span><span class="token comment">//背景主题颜色默认(网易红)</span>
<span class="token property"><span class="token variable">$background-color-sub-theme1</span></span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span><span class="token comment">//背景主题颜色1(QQ绿)</span>
<span class="token property"><span class="token variable">$background-color-sub-theme2</span></span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span><span class="token comment">//背景主题颜色2(夜间模式)</span>

<span class="token comment">// 字体颜色规范(默认)</span>
<span class="token property"><span class="token variable">$font-color-theme</span></span> <span class="token punctuation">:</span> #666<span class="token punctuation">;</span><span class="token comment">//字体主题颜色默认(网易)</span>
<span class="token property"><span class="token variable">$font-color-theme1</span></span> <span class="token punctuation">:</span> #666<span class="token punctuation">;</span><span class="token comment">//字体主题颜色1(QQ)</span>
<span class="token property"><span class="token variable">$font-color-theme2</span></span> <span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span><span class="token comment">//字体主题颜色2(夜间模式)</span>

<span class="token comment">// 字体颜色规范(激活)</span>
<span class="token property"><span class="token variable">$font-active-color-theme</span></span> <span class="token punctuation">:</span> #d43c33<span class="token punctuation">;</span><span class="token comment">//字体主题颜色默认(网易红)</span>
<span class="token property"><span class="token variable">$font-active-color-theme1</span></span> <span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span>213<span class="token punctuation">,</span>156<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字体主题颜色1(QQ绿)</span>
<span class="token property"><span class="token variable">$font-active-color-theme2</span></span> <span class="token punctuation">:</span> #ffcc33<span class="token punctuation">;</span><span class="token comment">//字体主题颜色2(夜间模式)</span>

<span class="token comment">// 边框颜色</span>
<span class="token property"><span class="token variable">$border-color-theme</span></span> <span class="token punctuation">:</span> #d43c33<span class="token punctuation">;</span><span class="token comment">//边框主题颜色默认(网易)</span>
<span class="token property"><span class="token variable">$border-color-theme1</span></span> <span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span>213<span class="token punctuation">,</span>156<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//边框主题颜色1(QQ)</span>
<span class="token property"><span class="token variable">$border-color-theme2</span></span> <span class="token punctuation">:</span> #ffcc33<span class="token punctuation">;</span><span class="token comment">//边框主题颜色2(夜间模式)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","06清除默认样式.html.vue"]]);export{r as default};
