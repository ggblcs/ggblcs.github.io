import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},t=a(`<h1 id="_09-导入其它sass文件" tabindex="-1"><a class="header-anchor" href="#_09-导入其它sass文件" aria-hidden="true">#</a> 09 导入其它SASS文件</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><blockquote><p>重点语句：而LESS和SASS中的@import是直接将导入的文件拷贝到当前文件中生成一份新CSS。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1..scss文件中导入其它.scss文件
和LESS一样SASS文件中也支持导入其它SASS文件

其实原生的CSS也支持通过@import导入其它的CSS文件, 只不过不常用

不常用的原因在于原生的@import导入其它的CSS文件,
只有执行到@import时浏觅器才会去下载对应 css文件，这导致请求次数变多,页面加载起来特别慢

而LESS和SASS中的@import是直接将导入的文件拷贝到当前文件中生成一份CSS, 所以只会请求一次, 速度更快
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><blockquote><p><code>@import &quot;03&quot;;</code></p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;03&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token comment">//使用导入的文件的混合</span>
  <span class="token keyword">@include</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function l(d,o){return s(),e("div",null,c)}const p=n(i,[["render",l],["__file","09导入其它SASS文件.html.vue"]]);export{p as default};
