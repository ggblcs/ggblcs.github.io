import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_10-函数" tabindex="-1"><a class="header-anchor" href="#_10-函数" aria-hidden="true">#</a> 10 函数</h1><blockquote><p>写在前面：</p><p>由于css的本职工作就是设置样式，所以<strong>不建议</strong>使用大量的逻辑代码。</p></blockquote><h2 id="_01-函数" tabindex="-1"><a class="header-anchor" href="#_01-函数" aria-hidden="true">#</a> 01 函数</h2><blockquote><p>更多函数：</p><p>如果想了解更多函数，去官网找中文文档中的函数栏</p><p>https://www.sass.hk/</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的内置函数
和LESS一样, SASS中也提供了很多内置函数方便我们使用
*/

// 字符串函数
/*
unquote（$string）：删除字符串中的引号；
quote（$string）：给字符串添加引号；
To-upper-case（$string）：将字符串小写字母转换为大写字母
To-lower-case（$string）：将字符串大写字母转换为小写字母
*/
// 数值函数
/*
percentage($value)：将不带单位的数转换成百分比值；
round($value)：将数值四舍五入，转换成一个最接近的整数；
ceil($value)：向上取整；
floor($value)：向下取整；
abs($value)：取数的绝对值；
min($numbers…)：找出几个数值之间的最小值；
max($numbers…)：找出几个数值之间的最大值；
random(): 获取随机数
*/
// 颜色函数
/*
rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
red($color)：从一个颜色中获取其中红色值；
green($color)：从一个颜色中获取其中绿色值；
blue($color)：从一个颜色中获取其中蓝色值；
mix($color-1,$color-2,[$weight])：把两种颜色混合在一起。
*/
// 列表函数
/*
length($list)：返回一个列表的长度值;
nth($list, $n)：返回一个列表中指定的某个标签值;
join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；
append($list1, $val, [$separator])：将某个值放在列表的最后；
zip($lists…)：将几个列表结合成一个多维的列表；
index($list, $value)：返回一个值在列表中的位置值。
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><h3 id="_2-1-内置函数举例" tabindex="-1"><a class="header-anchor" href="#_2-1-内置函数举例" aria-hidden="true">#</a> 2.1 内置函数举例</h3><p>使用了函数混合，混合两种颜色<code>background: mix(red,blue);</code>。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译之后，红色+蓝色=紫色</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-自定义函数举例" tabindex="-1"><a class="header-anchor" href="#_2-2-自定义函数举例" aria-hidden="true">#</a> 2.2 自定义函数举例</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//定义一个求平方的函数</span>
<span class="token keyword">@function</span> <span class="token function">qu</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$num</span> <span class="token operator">*</span> <span class="token variable">$num</span> <span class="token operator">+</span> px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">qu</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">qu</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[l];function c(p,d){return s(),a("div",null,t)}const o=n(i,[["render",c],["__file","10函数.html.vue"]]);export{o as default};
