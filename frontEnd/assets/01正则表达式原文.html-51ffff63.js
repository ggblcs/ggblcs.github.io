import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_01-正则表达式原文" tabindex="-1"><a class="header-anchor" href="#_01-正则表达式原文" aria-hidden="true">#</a> 01 正则表达式原文</h1><h2 id="_01-创建正则表达式" tabindex="-1"><a class="header-anchor" href="#_01-创建正则表达式" aria-hidden="true">#</a> 01 创建正则表达式</h2><p>正则表达式-RegExp</p><p>regular expression 规则的 表达。</p><p>用字面量创建<code>/am/</code> 用对象创建<code>new RegExp(&quot;am&quot;)</code> 用对象的好处在于能使用变量，而用字面量的方式在于简单方便，但是不能使用变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">&quot;jfdsiojgff5465ge484grjf456h4grt6e84he6rg4r5&quot;</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;jf&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> res <span class="token operator">=</span> hd<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span> <span class="token comment">// [ &#39;jf&#39;, &#39;jf&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;大家好，我是中国人，国国相邻，人人快乐&quot;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;国&#39;</span><span class="token punctuation">,</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;77&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-选择符" tabindex="-1"><a class="header-anchor" href="#_02-选择符" aria-hidden="true">#</a> 02 选择符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">&quot;010-2654215&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">010|020</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 选择符|是左边整体或右边整体，</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-原子表与原子组" tabindex="-1"><a class="header-anchor" href="#_03-原子表与原子组" aria-hidden="true">#</a> 03 原子表与原子组</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">&quot;010-2654215&quot;</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[2546]</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 原子表[]表示或的意思，[2546]表示2或5或4或6，中间就不用再加选择符|了。</span>

<span class="token comment">// /[-\\d:]/g表示从头到尾匹配-或数字或：</span>
<span class="token comment">// /[^-\\d:]/g表示除了-、数字、：，剩下的都匹配，原子表中^就是否定的意思</span>
<span class="token comment">// [a-z]原子表区间</span>
<span class="token comment">// [^au]原子表的排除匹配</span>
<span class="token comment">// 如果把()放在[]外边,()就是原子组 /[au]()/</span>
<span class="token comment">// 如果把()放在[]里边，()就是普通()，/[()]/</span>
<span class="token comment">// 如果把.+放在[]外边，就是匹配除了换行符的一切字符，匹配一个或多个，/.+/</span>
<span class="token comment">// 如果把.+放在[]里边，就是匹配普通的.+字符转不转义\\都一样，/[.+]/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tel <span class="token operator">=</span> <span class="token string">&quot;010-2654215&quot;</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(12|34)</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 原子组，中间加|，表示12这个整体，或34这个整体</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-转义" tabindex="-1"><a class="header-anchor" href="#_04-转义" aria-hidden="true">#</a> 04 转义</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token string">&#39;22.33&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+.\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token comment">// + 表示一个或多个</span>

<span class="token comment">// 匹配失败的原因：.表示除换行外的任何字符，所以需要转义。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+\\.\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 在对象中的转义方式</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;\\d+\\.\\d+&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 因为对象中是字符串，所以上面的正则相当于 d+.d+，匹配的是字母d而不是数字</span>
<span class="token comment">// 所以应该写成下面这样</span>
<span class="token keyword">let</span> reg2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\d+\\\\.\\\\d+&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配一个网址</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&quot;https://www.baidu.com&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">https?:\\/\\/\\w+\\.\\w+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// s?表示有没有s都行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-字符边界约束" tabindex="-1"><a class="header-anchor" href="#_05-字符边界约束" aria-hidden="true">#</a> 05 字符边界约束</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d$</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// ^表示必须以？开头，$表示必须以？结尾</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]{3,6}</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 表示字母a-z，3-6位。匹配3-6位字母，剩下不管还有没有字母都不管了。</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{3,6}$</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 表示从头到尾只能有3-6位字母。不能多也不能少。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;amd 2021&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token comment">// 没有g时表示匹配到一个数字就停下了，g表示匹配到了也不停，继续匹配。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-数值与空白元字符" tabindex="-1"><a class="header-anchor" href="#_06-数值与空白元字符" aria-hidden="true">#</a> 06 数值与空白元字符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
 张三：010-1234567，李四：020-2222222
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{3}-\\d{7,8}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// \\d表示匹配数字，大写表示反向，\\D表示除了数字</span>
<span class="token comment">// \\s表示匹配空白，空白包括空格 ，换行符\\n</span>
<span class="token comment">// \\S表示除了空白</span>
<span class="token comment">// \\w表示匹配字母，数字，下划线（不包括中划线）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-点元字符" tabindex="-1"><a class="header-anchor" href="#_07-点元字符" aria-hidden="true">#</a> 07 点元字符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .包括除了换行符之外的任何字符。</span>
<span class="token comment">// 也就是说.包括\\d \\w</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">&quot;hhej-_@#&amp;&amp;**&lt;(&quot;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
www.baidu.com
jfjggg
</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// 正常情况下，只能匹配一行，匹配到换行符就不能再匹配了</span>
<span class="token comment">// 但是s单行模式可以匹配多行</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">s</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-匹配所有字符" tabindex="-1"><a class="header-anchor" href="#_08-匹配所有字符" aria-hidden="true">#</a> 08 匹配所有字符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\s\\S]</span><span class="token regex-delimiter">/</span></span>
<span class="token comment">// \\s是匹配所有空白字符，\\S匹配所有非空白字符，[]表示或者</span>
<span class="token comment">// 组合在一起就表示匹配空白或非空白，就是匹配所有的呗</span>
<span class="token comment">// 类似还有[\\d\\D]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 如果想匹配整个字符串，连带换行符全部匹配，做法如下</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
www
baidu
</span><span class="token template-punctuation string">\`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;www&#39;, &#39;baidu&#39; ]</span>
<span class="token comment">// .是匹配除换行符以外的所有字符，所以最终的匹配结果是两个，以换行符为分割</span>
<span class="token comment">// 可以使用s模式，s忽略换行符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;\\nwww\\nbaidu\\n&#39; ]</span>
<span class="token comment">// 也可以使用[\\s\\S]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\s\\S]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;\\nwww\\nbaidu\\n&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-模式修正符" tabindex="-1"><a class="header-anchor" href="#_09-模式修正符" aria-hidden="true">#</a> 09 模式修正符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// i表示忽略大小写</span>
<span class="token comment">// g表示全局匹配，就是匹配到第一个后，不结束，继续匹配</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">aaa</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-多行匹配" tabindex="-1"><a class="header-anchor" href="#_10-多行匹配" aria-hidden="true">#</a> 10 多行匹配</h2><blockquote><p>m的意思是每一行单独处理。/aaa/gm</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
#1 js,200元 #
#2 php,300元 #
#9 www.baidu.com # 不合规范的数据
#3 node.js,180元 #
</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">/*
想要的结果：
[
  { name: &#39;js&#39;, price: &#39;200元&#39; },
  { name: &#39;php&#39;, price: &#39;300元&#39; },
  { name: &#39;node.js&#39;, price: &#39;180元&#39; }
]
*/</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*#\\d+\\s+.+#$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> lessons <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// console.log(v);</span>
    v <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*#\\d+\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*#</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> price<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> price<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lessons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  { name: &#39;js&#39;, price: &#39;200元&#39; },
  { name: &#39;php&#39;, price: &#39;300元&#39; },
  { name: &#39;node.js&#39;, price: &#39;180元&#39; }
]
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-汉字与字符属性" tabindex="-1"><a class="header-anchor" href="#_11-汉字与字符属性" aria-hidden="true">#</a> 11 汉字与字符属性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 汉字与字符属性</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot; www.baidu.com我很爱国!2022&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{L}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;w&#39;,  &#39;w&#39;,  &#39;w&#39;,  &#39;b&#39;, &#39;a&#39;,  &#39;i&#39;,  &#39;d&#39;,  &#39;u&#39;, &#39;c&#39;,  &#39;o&#39;, &#39;m&#39;,  &#39;我&#39;, &#39;很&#39;, &#39;爱&#39;, &#39;国&#39;]</span>
<span class="token comment">// \\p{L}匹配具有L属性的字符，其实就是字母和汉字，数字不具有L（字母）属性</span>
<span class="token comment">// 匹配属性需要结合u模式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{P}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gu</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;.&#39;, &#39;.&#39;, &#39;!&#39; ]</span>
<span class="token comment">// \\p{P} 大写P是匹配具有标点属性的，就是匹配标点。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\p{sc=Han}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ug</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;我&#39;, &#39;很&#39;, &#39;爱&#39;, &#39;国&#39; ]</span>
<span class="token comment">// \\p是匹配属性，需要结合u模式使用</span>
<span class="token comment">// sc=Han意思是匹配汉字【中国】</span>
<span class="token comment">/*
 有时候匹配宽字节的字母，
 比如xy但是不是两个字节的xy，我打不出来，
 正则表达式匹配出来是乱码
 此时也需要使用u模式，u模式可以正确匹配宽字节内容
 */</span>
<span class="token comment">// 还有特别多的属性可以查阅官网</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-lastindex属性" tabindex="-1"><a class="header-anchor" href="#_12-lastindex属性" aria-hidden="true">#</a> 12 lastIndex属性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// lastIndex属性</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;www.baidu.com_&quot;</span>
<span class="token keyword">let</span> reg_ <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> reg_g <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
<span class="token comment">// 匹配一个字符时，输出数组，里面有匹配到的的字符的属性比如index是在字符串的第几位</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, &#39;w&#39;, &#39;w&#39;, &#39;b&#39;, &#39;a&#39;, &#39;i&#39;, &#39;d&#39;, &#39;u&#39;, &#39;c&#39;, &#39;o&#39;, &#39;m&#39;, &#39;_&#39;]</span>
<span class="token comment">// 匹配两个或两个以上字符时，输出的数组就没有属性了</span>

<span class="token comment">// match是字符串的方法，我们可以使用正则对象的方法让每一个字符都输出属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, index: 0, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;b&#39;, index: 4, input: &#39;www.baidu.com_&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 5</span>
<span class="token comment">/*
从上面可以看到，exec方法每次只输出一个字母，每次执行都会往下进行
lastIndex记录了当前匹配到的字符的位置
注意点：需要结合g【全局匹配】模式使用，否则lastIndex总是输出0，只会匹配第一个
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-有效率的y模式" tabindex="-1"><a class="header-anchor" href="#_13-有效率的y模式" aria-hidden="true">#</a> 13 有效率的y模式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 有效率的y模式</span>
<span class="token comment">// 一、g模式全局匹配效果</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;wwaw&quot;</span>
<span class="token keyword">let</span> reg_g <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
<span class="token keyword">let</span> reg_y <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">y</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_g<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
[ &#39;w&#39;, index: 1, input: &#39;wwaw&#39;, groups: undefined ]
2
[ &#39;w&#39;, index: 3, input: &#39;wwaw&#39;, groups: undefined ]
4
null
0
*/</span>
<span class="token comment">// 显然g模式匹配w如果下一个字符不是w，则直接跳过，然后匹配下一个，从头匹配到尾部</span>

<span class="token comment">// 二、y模式匹配效果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
[ &#39;w&#39;, index: 1, input: &#39;wwaw&#39;, groups: undefined ]
2
null
0
[ &#39;w&#39;, index: 0, input: &#39;wwaw&#39;, groups: undefined ]
1
*/</span>
<span class="token comment">// 显然y模式是如果匹配到了非想要的元素，直接停止，不再匹配</span>

<span class="token comment">// 三、修改lastIndex</span>
<span class="token comment">// 如果刚开始就不是想要的内容，则直接停止，我们可以修改lastIndex来修改匹配的位置</span>
<span class="token keyword">let</span> str_1 <span class="token operator">=</span> <span class="token string">&quot;aaw&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----分割线11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
null
0
null
0
因为第一个字母是a，不是要找的w，所以y模式直接就罢工了，不再往下匹配
我们可以修改lastIndex，让正则直接从w开始匹配
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----分割线22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reg_y<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg_y<span class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;w&#39;, index: 2, input: &#39;aaw&#39;, groups: undefined ]
3
null
0
*/</span>

<span class="token comment">// 四、使用方法</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">&quot;你好我的QQ有三个：2625,8888,7777可以随便加一个&quot;</span>
<span class="token keyword">let</span> reg_qq <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d+),?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">y</span></span>
reg_qq<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> qq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>res <span class="token operator">=</span> reg_qq<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    qq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qq<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// [ &#39;2625&#39;, &#39;8888&#39;, &#39;7777&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-原子组与原子表" tabindex="-1"><a class="header-anchor" href="#_14-原子组与原子表" aria-hidden="true">#</a> 14 原子组与原子表</h2><p>原子表就是一个中括号[]，里面匹配是任意的某一个都行。值得注意的是，原子组只代表一个字符。剩下就不多说了。</p><p>原子组()小括号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配一个日期，要求日期格式是-或/连接都能正常匹配</span>
<span class="token keyword">let</span> date_1 <span class="token operator">=</span> <span class="token string">&quot;2022-12-26&quot;</span>
<span class="token keyword">let</span> date_2 <span class="token operator">=</span> <span class="token string">&quot;2022/12/26&quot;</span>
<span class="token keyword">let</span> date_err <span class="token operator">=</span> <span class="token string">&quot;2022-12/26&quot;</span> <span class="token comment">// 显然不符合规范的日期</span>

<span class="token keyword">let</span> reg_err <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{4}[\\/-]\\d{2}[\\/-]\\d{2}</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_err<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;2022-12-26&#39;, index: 0, input: &#39;2022-12-26&#39;, groups: undefined ]
[ &#39;2022/12/26&#39;, index: 0, input: &#39;2022/12/26&#39;, groups: undefined ]
[ &#39;2022-12/26&#39;, index: 0, input: &#39;2022-12/26&#39;, groups: undefined ]
虽然-或/连接的都能正常匹配，但是-/同时存在的不符合规范的也被匹配到了
*/</span>
<span class="token comment">// 我们使用原子表来解决这个问题</span>
<span class="token keyword">let</span> reg_ok <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{4}([\\/-])\\d{2}\\1\\d{2}</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date_err<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_ok<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;2022-12-26&#39;, &#39;-&#39;, index: 0, input: &#39;2022-12-26&#39;, groups: undefined ]
[ &#39;2022/12/26&#39;, &#39;/&#39;, index: 0, input: &#39;2022/12/26&#39;, groups: undefined ]
null

reg_ok中的原子组([\\/-])对应后边的\\1
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原子组，组就是分组的意思，意思就是一组了，比如要匹配一对标签，<code>&lt;h1&gt;&lt;/h1&gt;</code>，如果前面是数字1，后面也必须是数字1，这样才是一对h1标签，要想实现这个功能就是用原子组。 原子组()对应的内容用<code>\\1</code>依次往后依次用<code>\\2</code> <code>\\3</code>对应。对应的内容就是一组，对应的内容必须一样。</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>let h1 = \`&lt;h1&gt;哈罗单词&lt;/h1&gt;\`
let h2 = \`&lt;h2&gt;哈罗单&lt;/h2&gt;\`
let h_err = \`&lt;h1&gt;哈罗单&lt;/h2&gt;\`

console.log(h1.match(/&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;/));
console.log(h2.match(/&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;/));
console.log(h_err.match(/&lt;(h[1-6])&gt;[\\s\\S]+&lt;\\/\\1&gt;/));

/*
[
 &#39;&lt;h1&gt;哈罗单词&lt;/h1&gt;&#39;,
 &#39;h1&#39;,
 index: 0,
 input: &#39;&lt;h1&gt;哈罗单词&lt;/h1&gt;&#39;,
 groups: undefined
]
[
 &#39;&lt;h2&gt;哈罗单&lt;/h2&gt;&#39;,
 &#39;h2&#39;,
 index: 0,
 input: &#39;&lt;h2&gt;哈罗单&lt;/h2&gt;&#39;,
 groups: undefined
]
null
*/
// 值得注意的是，打印的数组内容arr[0]是匹配到的内容。
// arr[1]注意是原子组的内容。如果有多个原子组，就依次往下放arr[2] arr[3]
// 然后才是index等内容。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-邮箱验证重视原子组的使用" tabindex="-1"><a class="header-anchor" href="#_15-邮箱验证重视原子组的使用" aria-hidden="true">#</a> 15 邮箱验证重视原子组的使用</h2><p>只是举个例子说明原子组的使用，并不一定真的能验证邮箱！</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> email_1 <span class="token operator">=</span> <span class="token string">&quot;26254021@qq.com&quot;</span>
<span class="token keyword">let</span> email_2 <span class="token operator">=</span> <span class="token string">&quot;36254021@qq.com.cn&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>email_1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\w-]+@[\\w]+\\.(com|cn|org|cc)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以匹配成功</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>email_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\w-]+@[\\w]+\\.(com|cn|org|cc)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 匹配失败，.cn没有匹配上</span>
<span class="token comment">// 此时可以用原子组，让邮箱@后面的 [\\w-]+\\. 可以有一个或多个</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>email_2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\w-]+@([\\w]+\\.)+(com|cn|org|cc)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 匹配成功</span>

<span class="token comment">// (com|cn|org)是指 com或cn或org，括号不能去</span>
<span class="token comment">// 如果把括号去掉就成了 ^[\\w-]+@([\\w]+\\.)+com 这个整体或者 cn 或者org</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-replace替换结合原子组的使用" tabindex="-1"><a class="header-anchor" href="#_16-replace替换结合原子组的使用" aria-hidden="true">#</a> 16 replace替换结合原子组的使用</h2><ol><li>原子组可用$1, $2来对应。</li><li>replace回调，参数与匹配的带有index，group属性的数组一致，并且return啥就把匹配到的内容替换为啥。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;--我是中国人--&quot;</span>
<span class="token comment">// 把--后的第二个文字（是）保留下来，其余用-代替</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(--)(\\W(\\W))\\W+</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;--我是中国人--&#39;,
  &#39;--&#39;,
  &#39;我是&#39;,
  &#39;是&#39;,
  index: 0,
  input: &#39;--我是中国人--&#39;,
  groups: undefined
]

原子组中的内容：
arr[1] --
arr[2] 我是
arr[3] 是
显然，如果原子组里还有原子组，则会先列出最外层括号的，再列出内层括号的
*/</span>
<span class="token comment">// 修改方法一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;---$3-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是-----</span>
<span class="token comment">// $3就是第三处原子组</span>
<span class="token comment">// 修改方法二</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// --我是中国人-- -- 我是 是</span>
    <span class="token comment">// 输出的内容就是匹配的数组顺序，先是匹配的内容，再是原子组</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">---</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p3<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-----</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是-----</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;--我是中国人-- --他刚才管理--&quot;</span>
<span class="token comment">// 把--后的第二个文字（是）保留下来，其余用-代替</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(--)(\\W(\\W))[^-]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[ &#39;--我是中国人&#39;, &#39;--他刚才管理&#39; ] 

原子组中的内容：
arr[1] --
arr[2] 我是
arr[3] 是
显然，如果原子组里还有原子组，则会先列出最外层括号的，再列出内层括号的
*/</span>
<span class="token comment">// 修改方法一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;---$3-----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是------- ---刚-------</span>
<span class="token comment">// $3就是第三处原子组</span>
<span class="token comment">// 修改方法二</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    --我是中国人 -- 我是 是
    --他刚才管理 -- 他刚 刚
    */</span>
    <span class="token comment">// 输出的内容就是匹配的数组顺序，先是匹配的内容，再是原子组</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">---</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p3<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-----</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ---是------- ---刚-------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-不记录组" tabindex="-1"><a class="header-anchor" href="#_17-不记录组" aria-hidden="true">#</a> 17 不记录组</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 我想提取baidu</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;www.baidu.com&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.\\w+\\.(org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;com&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]

此时arr[1] 是第一个原子组com，而且并不含我想要的baidu
我们可以把baidu也添加到分组中
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.(\\w+)\\.(org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;baidu&#39;,
  &#39;com&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]
此时baidu是arr[1]
如果我不想让com出现在arr中，我可以使用?:让他不记录原子组
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+\\.(\\w+)\\.(?:org|com|cn)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  &#39;www.baidu.com&#39;,
  &#39;baidu&#39;,
  index: 0,
  input: &#39;www.baidu.com&#39;,
  groups: undefined
]
此时就不再记录?:标记的原子组了，
并且也不能使用?:所标记的对应原子组的 \\1  $1等便捷方法了。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-重复匹配" tabindex="-1"><a class="header-anchor" href="#_18-重复匹配" aria-hidden="true">#</a> 18 重复匹配</h2><p><code>+</code> 匹配一个或多个，如果有多个就匹配多个，贪婪。</p><p><code>*</code> 匹配零个或多个</p><p><code>?</code> 匹配 零个或一个</p><p><code>{2,}</code> 匹配至少两个，如果有多个就匹配多个，贪婪。</p><h2 id="_19-多个匹配验证密码" tabindex="-1"><a class="header-anchor" href="#_19-多个匹配验证密码" aria-hidden="true">#</a> 19 多个匹配验证密码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配多个正则</span>
<span class="token comment">// 我需要验证我的密码是否合法：5-8位，必须包含大小写字母和数字</span>

<span class="token keyword">let</span> regs <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z0-9]{5,8}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// 5-8位</span>
    <span class="token operator">/</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// 必须有数字 </span>
    <span class="token operator">/</span><span class="token punctuation">[</span><span class="token constant">A</span><span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span><span class="token operator">/</span> <span class="token comment">// 必须有大写字母</span>
<span class="token punctuation">]</span>

<span class="token keyword">let</span> str_err1 <span class="token operator">=</span> <span class="token string">&quot;132456&quot;</span>
<span class="token keyword">let</span> str_err2 <span class="token operator">=</span> <span class="token string">&quot;aaaeee&quot;</span>
<span class="token keyword">let</span> str_ok <span class="token operator">=</span> <span class="token string">&quot;aaa12A&quot;</span>

<span class="token keyword">let</span> state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_err1<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_err2<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_ok<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-禁止贪婪" tabindex="-1"><a class="header-anchor" href="#_20-禁止贪婪" aria-hidden="true">#</a> 20 禁止贪婪</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;bwwww&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bwwww&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>
<span class="token comment">// 由于贪婪会匹配多个w，加个问号?禁止贪婪</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw+?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bw&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bwwww&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw*?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;b&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw{2,}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bwwww&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw{2,}?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bww&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;bw&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bw??</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;b&#39;, index: 0, input: &#39;bwwww&#39;, groups: undefined ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁止贪婪的使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
--中国--
--日本--
--德国--

</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 使用正则取出各个国家放入数组中</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--\\W+--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;--中国--\\n--日本--\\n--德国--&#39; ]</span>
<span class="token comment">// 因为贪婪，\\W+ 尽可能多的包含了字符，导致各个国家没有分开</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--\\W+?--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;--中国--&#39;, &#39;--日本--&#39;, &#39;--德国--&#39; ]</span>
<span class="token comment">// 有了问号，禁止贪婪</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--(\\W+?)--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
中国
日本
德国
注意是字符串而不是数组
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-matchall完成全局匹配" tabindex="-1"><a class="header-anchor" href="#_21-matchall完成全局匹配" aria-hidden="true">#</a> 21 matchAll完成全局匹配</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
--中国--
--日本--
--德国--

</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 使用正则取出各个国家放入数组中</span>

<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--(\\W+?)--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;--中国--&#39;, &#39;--日本--&#39;, &#39;--德国--&#39; ]</span>
<span class="token comment">// 此时还是取不出中国，因为原子组没有在列表中</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Object [RegExp String Iterator] {}</span>
<span class="token comment">// 得到一个迭代对象</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;--中国--&#39;,
  &#39;中国&#39;,
  index: 1,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
[
  &#39;--日本--&#39;,
  &#39;日本&#39;,
  index: 8,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
[
  &#39;--德国--&#39;,
  &#39;德国&#39;,
  index: 15,
  input: &#39;\\n--中国--\\n--日本--\\n--德国--\\n\\n&#39;,
  groups: undefined
]
*/</span>
<span class="token comment">// 这次就可以取出想要的国家名称了。</span>

<span class="token comment">// 小技巧</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>matchAll是高级浏览器才支持，低端浏览器需要自己实现。实现过程看不懂，就不写了。</p><h2 id="_22-字符串常用方法与search" tabindex="-1"><a class="header-anchor" href="#_22-字符串常用方法与search" aria-hidden="true">#</a> 22 字符串常用方法与search</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串常用方法与search</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;http://www.baidu.com&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, &#39;w&#39;, &#39;w&#39; ]</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
[ &#39;w&#39;, index: 7, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
[ &#39;w&#39;, index: 8, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
[ &#39;w&#39;, index: 9, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
    */</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 返回第一个w所在位置，从0开始，找不到返回-1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 可以使用正则</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 返回第一个w所在位置</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -1</span>
<span class="token comment">// 不能使用正则</span>
<span class="token keyword">let</span> str_date <span class="token operator">=</span> <span class="token string">&quot;2022/12-03&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str_date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/-]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;2022&#39;, &#39;12&#39;, &#39;03&#39; ]</span>
<span class="token comment">// split支持正则表达式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-replace的-使用" tabindex="-1"><a class="header-anchor" href="#_23-replace的-使用" aria-hidden="true">#</a> 23 replace的$使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// $&amp; $1 $2 $\` $&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
(010)9999
(020)8888
</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 把电话改成010-8888的形式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\((\\d{3})\\)(\\d{4})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1-$2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
010-9999
020-8888
$1 $2就是第一个原子组，第二个原子组
$&amp;就是匹配到的内容
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;---分割符&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\((\\d{3})\\)(\\d{4})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
(010)9999
(020)8888
$&amp;就是匹配到的内容
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;---分割符&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">cde</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;--$\`--&quot;</span>  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ab--ab--fg</span>
<span class="token comment">/*
$\`[$加小撇]是匹配到的内容的前面的字符，比如上面匹配到的是ced，那么$\`就是前面的ab
所以上面的代码是把字符串的cde换成cde前面的字符
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;---分割符&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
str2 <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">cde</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;--$&#39;--&quot;</span>  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ab--fg--fg</span>
<span class="token comment">/*
$&#39;【$加引号】是匹配到的内容的后面的字符，比如上面匹配到的是ced，那么$&#39;就是后面的fg
所以上面的代码是把字符串的cde换成cde后面的字符
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-给原子组起别名" tabindex="-1"><a class="header-anchor" href="#_24-给原子组起别名" aria-hidden="true">#</a> 24 给原子组起别名</h2><p><code>(?&lt;name&gt;abc)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给原子组起别名</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;abcdefg&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(a)(b)(c)(d)(e)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1-$2-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-b-c-d-efg</span>
<span class="token comment">// 注意fg没被替换，因为fg没被匹配到也没在组内，上面被替换的内容只是replace的第一个参数，也就是reg匹配到的内容</span>
<span class="token comment">// 现在发现$num太多容易记混，想起别名</span>
<span class="token comment">// ?&lt;name&gt;</span>
reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;zhao&gt;a)(?&lt;qian&gt;b)(c)(d)(e)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1-$2-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-b-c-d-efg</span>
<span class="token comment">// 起别名后，原来的名字依然能用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$&lt;zhao&gt;-$&lt;zhao&gt;-$3-$4-$5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a-a-c-d-efg</span>
<span class="token comment">// 还可以用别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;js20元php90元ts30元&quot;</span>

<span class="token keyword">let</span> reg_origin <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+?)(\\d+?元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg_origin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;js20元&#39;, &#39;php90元&#39;, &#39;ts30元&#39; ]</span>
<span class="token keyword">let</span> reg_name <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;language&gt;[a-z]+?)(?&lt;price&gt;\\d+?元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

<span class="token keyword">let</span> res_origin <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg_origin<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res_origin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(val);</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;js20元&#39;,
  &#39;js&#39;,
  &#39;20元&#39;,
  index: 0,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
[
  &#39;php90元&#39;,
  &#39;php&#39;,
  &#39;90元&#39;,
  index: 5,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
[
  &#39;ts30元&#39;,
  &#39;ts&#39;,
  &#39;30元&#39;,
  index: 11,
  input: &#39;js20元php90元ts30元&#39;,
  groups: undefined
]
*/</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> res_name <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg_name<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res_name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>groups<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
[
  &#39;js20元&#39;,
  &#39;js&#39;,
  &#39;20元&#39;,
  index: 0,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;js&#39;, price: &#39;20元&#39; }
]
[
  &#39;php90元&#39;,
  &#39;php&#39;,
  &#39;90元&#39;,
  index: 5,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;php&#39;, price: &#39;90元&#39; }
]
[
  &#39;ts30元&#39;,
  &#39;ts&#39;,
  &#39;30元&#39;,
  index: 11,
  input: &#39;js20元php90元ts30元&#39;,
  groups: [Object: null prototype] { language: &#39;ts&#39;, price: &#39;30元&#39; }
]

*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
[
  [Object: null prototype] { language: &#39;js&#39;, price: &#39;20元&#39; },
  [Object: null prototype] { language: &#39;php&#39;, price: &#39;90元&#39; },
  [Object: null prototype] { language: &#39;ts&#39;, price: &#39;30元&#39; }
]
*/</span>

<span class="token comment">// 由此可见起别名后，对groups的影响，groups直接帮我们提取好信息了，里面对象形式，key:value</span>
<span class="token comment">// 使用更方便</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-正则方法" tabindex="-1"><a class="header-anchor" href="#_25-正则方法" aria-hidden="true">#</a> 25 正则方法</h2><p>上面介绍的很多都是字符串的方法，总结一下正则对象的方法</p><p>test()返回是否匹配成功，</p><p>exec()返回匹配的对象</p><h2 id="_26-零宽度正先行断言" tabindex="-1"><a class="header-anchor" href="#_26-零宽度正先行断言" aria-hidden="true">#</a> 26 零宽度正先行断言</h2><p>?=断言匹配</p><p>断言可以理解为正则的if判断语句</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;我是人，我是动物&quot;</span>
<span class="token comment">// 要求：我是动物改为它是动物</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">我是</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;他是&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 他是人，他是动物</span>
<span class="token comment">// 两个都改了，不符合要求</span>
<span class="token comment">// ?=断言匹配</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">我是(?=动物)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;它是&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 我是人，它是动物</span>
<span class="token comment">// (?=动物)表示”我是“后面是”动物“的那个”我是“改为”它是“</span>
<span class="token comment">// 虽然(?=动物)也在括号里，但它不是原子组。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小练习</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;js,10元,10次；php,13.10元,20次,ts,15元,2次&#39;</span>
<span class="token comment">// 要求：修改单价,该为带两位小数形式 如10.00元</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\w+),(\\d+)(.\\d+)?元,(\\d+)次</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;js,10元,10次&#39;, &#39;php,13.10元,20次&#39;, &#39;ts,15元,2次&#39; ]</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d+)(.\\d+)?(?=元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1.00&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// js,10.00元,10次；php,13.00元,20次,ts,15.00元,2次</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;分隔符---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d+)(.\\d+)?(?=元)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&quot;.00&quot;</span>
    <span class="token comment">// let ret = args.splice(0, 2).join(&#39;&#39;)</span>
    <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">/*
    args.splice(0, 2).join(&#39;&#39;)注意不能直接打印，因为splice会改变原数组，导致return的内容发生改变。然后找bug找半天
    */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// js,10.00元,10次；php,13.10元,20次,ts,15.00元,2次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-零宽度正后发断言" tabindex="-1"><a class="header-anchor" href="#_27-零宽度正后发断言" aria-hidden="true">#</a> 27 零宽度正后发断言</h2><p>?&lt;=断言</p><p>上面的<code>?=</code>是后面是什么，<code>/我是(?=动物)/</code>就是匹配&quot;我是&quot;，而且&quot;我是&quot;后面得是&quot;动物&quot;。</p><p><code>?&lt;=</code>是前面是什么，<code>/(?&lt;=你说)小狗/</code> 就是匹配”小狗“，而且”小狗“前面得是”你说“。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;啊，你说小狗为啥叫，再说小狗为啥跑&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=你说)小狗</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;小狗&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;哈哈&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 啊，你说哈哈为啥叫，再说小狗为啥跑</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次强调，断言虽然也用小括号包裹，但是，断言不是原子组。断言不是原子组，不会有原子组的属性，他只是一个条件。但是断言内可以放原子组。</p><p>断言练习</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;大山：15346008888 大海：13946887777&quot;</span>
<span class="token comment">// 要求把手机号后四位变为*，脱敏处理</span>
<span class="token comment">// 使用断言</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\\d{7})\\d{4}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;****&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 大山：1534600**** 大海：1394688****</span>

<span class="token comment">// 不使用断言</span>
<span class="token keyword">let</span> res2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d{7})(\\d{4})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1****&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 大山：1534600**** 大海：1394688****</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-零宽度负先行断言" tabindex="-1"><a class="header-anchor" href="#_28-零宽度负先行断言" aria-hidden="true">#</a> 28 零宽度负先行断言</h2><p>?!断言</p><p>就是后面不是什么</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;香蕉--菠萝，苹果--菠萝，香蕉--苹果&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">--(?!菠萝)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
<span class="token comment">// 选中后面不是“菠萝”的“--”，并替换为“++”</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 香蕉--菠萝，苹果--菠萝，香蕉++苹果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;node2022hello&quot;</span>
<span class="token comment">// 选中后面不是数字的字母，就是hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+(?!\\d)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;nod&#39;, &#39;hello&#39; ]</span>
<span class="token comment">// 如果没有全局匹配</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+(?!\\d)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;nod&#39;, index: 0, input: &#39;node2022hello&#39;, groups: undefined ]</span>
<span class="token comment">// 显然不是想要的，但nod确实是符合要求的</span>
<span class="token comment">// 这个时候加个条件：以字母结尾</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+(?!\\d+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;hello&#39;, index: 8, input: &#39;node2022hello&#39;, groups: undefined ]</span>
<span class="token comment">// 注意这个是以字母结尾，不是（不是数字）结尾</span>
<span class="token comment">// 想要验证很简单，hello后面加-，匹配结果是null</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">&quot;node2022hello-&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+(?!\\d+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>
<span class="token comment">// 断言只是条件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 要求以字母开始，以字母结束，且字符串任何位置不能有u</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;poup&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?!u)[a-z]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;poup&#39; ]</span>
<span class="token comment">// 这个后面不能有u直接没起作用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!u)[a-z]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;poup&#39; ]</span>
<span class="token comment">// 这个是刚开始（的后面）不能有u，就是必须以字母开始，且首字母不能是u</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!u)[a-z]+$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;poup&#39; ]</span>
<span class="token comment">// 这个是必须以字母开始，且首字母不能为u，必须以字母结束，但结束字母可以为u，中间字母可以为u</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!u)[a-z]+(?&lt;!u)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;poup&quot;]</span>
<span class="token comment">// 这个是开端后面不能为u，就是首字母必须是字母，且不能为u</span>
<span class="token comment">// 结尾的前面不能为u，就是末尾必须是字母，且不能为u</span>
<span class="token comment">// 中间可以为u</span>
<span class="token comment">// 仍然不符合要求</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!.*u.*)[a-z]$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>
<span class="token comment">// 这个才是想要的，字符串任何地方都不能有u</span>
<span class="token comment">// .*表示u前面和后面可以有0个或多个字符，但是取否就是不能有u，不能有被包裹的u，也不能有不被包裹的u，且必须以字母开头，以字母结尾。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_29-零宽度负后发断言" tabindex="-1"><a class="header-anchor" href="#_29-零宽度负后发断言" aria-hidden="true">#</a> 29 零宽度负后发断言</h2><p>?&lt;!断言</p><p>就是前面不是什么</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;香蕉--菠萝，苹果--菠萝，香蕉--苹果&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;!苹果)--</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
<span class="token comment">// 选中前面不是“苹果”的“--”，并替换为“++”</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 香蕉++菠萝，苹果--菠萝，香蕉++苹果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","01正则表达式原文.html.vue"]]);export{r as default};
