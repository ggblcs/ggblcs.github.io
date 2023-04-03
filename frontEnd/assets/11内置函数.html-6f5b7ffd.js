import{_ as n,p as s,q as i,a1 as e}from"./framework-96b046e1.js";const a={},l=e(`<h1 id="_11-内置函数" tabindex="-1"><a class="header-anchor" href="#_11-内置函数" aria-hidden="true">#</a> 11 内置函数</h1><p>去less官网找到内置函数，两个，英文官网和中文官网，下面是中文的，进入后找到函数。</p><blockquote><p>https://less.bootcss.com</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
由于less的底层就是用JavaScript实现的,
所以JavaScript中常用的一些函数在less中都支持
*/
// 混杂方法
/*
image-size(&quot;file.jpg&quot;); // =&gt; 100px 50px
image-width(&quot;file.jpg&quot;); // =&gt; 100px
image-height(&quot;file.jpg&quot;); // =&gt; 50px

// 单位转换
convert(9s, &quot;ms&quot;); // =&gt; 9000ms
convert(14cm, mm); // =&gt; 140mm
convert(8, mm); // =&gt; 8

// 列表
@list: &quot;A&quot;, &quot;B&quot;, C, &quot;D&quot;;
length(@list); // =&gt; 4
extract(@list, 3); // =&gt; C
*/
// 数学
/*
ceil(2.1); // =&gt; 3 向上取整
floor(2.1); // =&gt; 2 向下取整
percentage(.3); // =&gt; 30% 转百分比
round(1.67, 1); // =&gt; 1.7 四舍五入，保留一位小数点
sqrt(25cm); // =&gt; 5cm 取平方根
abs(-5cm); // =&gt; 5cm 取绝对值
pi(); // =&gt; 3.141592653589793 圆周率π
max(3px, 42px, 1px, 16px); // =&gt; 42px
min(3px, 42px, 1px, 16px); // =&gt; 1px
*/
// 字符串
/*
replace(&quot;Hi Tom?&quot;, &quot;Tom&quot;, &quot;Jack&quot;); // =&gt; &quot;Hi Jack&quot;
*/
// 判断类型
/*
isnumber(56px); // =&gt; true 是否含数字
isstring(&quot;string&quot;); // =&gt; true
iscolor(#ff0); // =&gt; true
iscolor(blue); // =&gt; true
iskeyword(keyword); // =&gt; true
isurl(url(...)); // =&gt; true
ispixel(56px); // =&gt; true
isem(7.8em); // =&gt; true
ispercentage(7.8%); // =&gt; true
isunit(4rem, rem); // =&gt; true 是否为指定单位
isruleset(@rules); // =&gt; true 是否为变量
*/
// 颜色操作
/*
增加饱和度
saturate(color, 20%)
减少饱和度
desaturate(color, 20%)
增加亮度
lighten(color, 20%)
减少亮度
darken(color, 20%)
降低透明度
fadein(color, 10%)
增加透明度
fadeout(color, 10%)
设置绝对不透明度(覆盖原透明度)
fade(color, 20%)
旋转色调角度
spin(color, 10)
将两种颜色混合，不透明度包括在计算中。
mix(#f00, #00f, 50%)
与白色混合
tint(#007fff, 50%)
与黑色混合
shade(#007fff, 50%)
灰度，移除饱和度
greyscale(color)
返回对比度最大的颜色
contrast(color1, color2)
*/
// 颜色混合
/*
每个RGB 通道相乘，然后除以255
multiply(color1, color2);
与 multiply 相反
screen(color1, color2);
使之更浅或更暗
overlay(color1, color2)
避免太亮或太暗
softlight(color1, color2)
与overlay相同，但颜色互换
hardlight(color1, color2)
计算每个通道(RGB)基础上的两种颜色的平均值
average(color1, color2)
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@str<span class="token punctuation">:</span></span> <span class="token string">&quot;./../images/1.jpg&quot;</span><span class="token punctuation">;</span>
<span class="token variable">@str2<span class="token punctuation">:</span></span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token variable">@str</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">//background: url(@str2);</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">desaturate</span><span class="token punctuation">(</span>yellow<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>yellow<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(d,u){return s(),i("div",null,t)}const r=n(a,[["render",c],["__file","11内置函数.html.vue"]]);export{r as default};
