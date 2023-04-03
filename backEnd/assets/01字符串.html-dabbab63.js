import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},o=t(`<h1 id="_01-字符串" tabindex="-1"><a class="header-anchor" href="#_01-字符串" aria-hidden="true">#</a> 01 字符串</h1><blockquote><p>用双引号或单引号括起来的就是字符串，例如：&quot;an apple&quot;、&#39;my zw!&#39;</p></blockquote><h2 id="_1-改变大小写" tabindex="-1"><a class="header-anchor" href="#_1-改变大小写" aria-hidden="true">#</a> 1 改变大小写</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 首字母大写</span>
name<span class="token operator">=</span><span class="token string">&quot;china sciense regulart of universty&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># China Sciense Regulart Of Universty</span>
<span class="token comment"># 让字符串里的所有字母都大写</span>
name<span class="token operator">=</span><span class="token string">&quot;china sciense regulart of universty&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># CHINA SCIENSE REGULART OF UNIVERSTY</span>
<span class="token comment"># 让字符串里的字母全部小写</span>
name<span class="token operator">=</span><span class="token string">&quot;china sciense regulart of universty&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-连接字符串" tabindex="-1"><a class="header-anchor" href="#_2-连接字符串" aria-hidden="true">#</a> 2 连接字符串</h2><blockquote><p>要用到字符f和&quot;&quot;，引号里的字符串名字用花括号括起来，可以用空格，逗号，扩折号等字符连接。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 3.6版本后方法，方法一</span>
str1<span class="token operator">=</span><span class="token string">&quot;赵&quot;</span>
str2<span class="token operator">=</span><span class="token string">&quot;艺&quot;</span>
name<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>str1<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>str2<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Hello,</span><span class="token interpolation"><span class="token punctuation">{</span>str1<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># Hello,赵艺!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 3.6版本前方法，方法二</span>
str1 <span class="token operator">=</span> <span class="token string">&quot;this&quot;</span>
str2 <span class="token operator">=</span> <span class="token string">&quot;is&quot;</span>
str3 <span class="token operator">=</span> <span class="token string">&quot;thing&quot;</span>
full <span class="token operator">=</span> <span class="token string">&quot;{} {} {}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span>str2<span class="token punctuation">,</span>str3<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span> <span class="token comment"># this is thing.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>说明：f是从python3.6引入的，更早的版本应该用format（），format使用方法：
（）里面写变量的名字，并且用逗号连接
具体形式是    “{}+连接符+{}+连接符+{}”.format(变量名字变量名字，变量名字)
ps：引号里有几个花括号就是有几个变量，format括号里的变量就有几个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用制表符或者换行符" tabindex="-1"><a class="header-anchor" href="#_3-使用制表符或者换行符" aria-hidden="true">#</a> 3 使用制表符或者换行符</h2><table><thead><tr><th>名称</th><th>代码表示</th></tr></thead><tbody><tr><td>制表符</td><td><code>\\t</code></td></tr><tr><td>换行符</td><td><code>\\n</code></td></tr></tbody></table><h2 id="_4-删除字符串中的空白" tabindex="-1"><a class="header-anchor" href="#_4-删除字符串中的空白" aria-hidden="true">#</a> 4 删除字符串中的空白</h2><table><thead><tr><th>方法</th><th>作用</th><th>是否改变原字符串</th></tr></thead><tbody><tr><td>str.rstrip()</td><td>去掉末尾的空格</td><td>否</td></tr><tr><td>str.lstrip()</td><td>剔除开头的空格</td><td>否</td></tr><tr><td>str.strip()</td><td>剔除两边的空格</td><td>否</td></tr></tbody></table>`,13),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","01字符串.html.vue"]]);export{d as default};
