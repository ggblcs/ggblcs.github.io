import{_ as t,M as o,p,q as c,R as n,t as s,N as i,a1 as a}from"./framework-96b046e1.js";const l={},r=a(`<h1 id="_02-qq音乐练习" tabindex="-1"><a class="header-anchor" href="#_02-qq音乐练习" aria-hidden="true">#</a> 02 QQ音乐练习</h1><h2 id="_01-知识补充" tabindex="-1"><a class="header-anchor" href="#_01-知识补充" aria-hidden="true">#</a> 01 知识补充</h2><h3 id="_1-1-jquery中find" tabindex="-1"><a class="header-anchor" href="#_1-1-jquery中find" aria-hidden="true">#</a> 1.1 jQuery中find</h3><blockquote><p>找到子元素用 children，</p><p>但 find 比 children 更常用，更好用，可以找到特定子元素，孙..元素。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.list_time a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-css禁止选中文字" tabindex="-1"><a class="header-anchor" href="#_1-2-css禁止选中文字" aria-hidden="true">#</a> 1.2 CSS禁止选中文字</h3><blockquote><p>禁止选中文字就禁止了复制文字。</p><p><code>user-text</code></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-基于jquery滚动条插件" tabindex="-1"><a class="header-anchor" href="#_1-3-基于jquery滚动条插件" aria-hidden="true">#</a> 1.3 基于jQuery滚动条插件</h3>`,9),u={href:"http://manos.malihu.gr/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[s("设置优美的滚动条。默认设置"),n("code",null,"overflow:auto;"),s("会有丑的滚动条。")],-1),k=a(`<p>视频位置：QQ音乐课时69。教你下载安装，引入文件。</p><h3 id="_1-4-编程思想js" tabindex="-1"><a class="header-anchor" href="#_1-4-编程思想js" aria-hidden="true">#</a> 1.4 编程思想js</h3><blockquote><p>先把这个功能实现，再直接调用下个功能。</p></blockquote><h3 id="_1-5-编程思想css" tabindex="-1"><a class="header-anchor" href="#_1-5-编程思想css" aria-hidden="true">#</a> 1.5 编程思想CSS</h3><blockquote><p>这个样式怎么设置，不知道，但我知道里面的子元素想要什么样式，就先设置里面的。</p></blockquote><h3 id="_1-6-css高斯模糊" tabindex="-1"><a class="header-anchor" href="#_1-6-css高斯模糊" aria-hidden="true">#</a> 1.6 CSS高斯模糊</h3><blockquote><p>如何让背景图片模糊就像QQ音乐背景。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7-js判断音乐是否处于暂停" tabindex="-1"><a class="header-anchor" href="#_1-7-js判断音乐是否处于暂停" aria-hidden="true">#</a> 1.7 JS判断音乐是否处于暂停</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">.</span>paused
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7-js构造函数" tabindex="-1"><a class="header-anchor" href="#_1-7-js构造函数" aria-hidden="true">#</a> 1.7 Js构造函数</h3><p>下面在<code>Person.prototype</code>中写了两种 <code>init</code> 方法，我再来重新解读一下这两种写法：</p><ol><li>带function的写法是构造方法经典写法。</li><li>不带function的写法是ES6中class的经典写法。</li></ol><p>在构造方法中，注意这是前提：</p><ol><li>在构造方法中这两种写法都没在我的浏览器报错。</li><li>在构造方法中，<strong>如果创建的是Person对象，两个方法都能被调用，没有什么区别</strong>。</li><li>在构造方法中，<strong>如果创建的是<code>Person.prototype.init</code>对象，是有区别的，只有带function的写法才能成功创建init对象，不带function的写法会报错，提示init 不是一个constructor（构造方法）</strong>。</li><li>创建的是Person对象，还是创建的<code>Person.prototype.init</code>对象，取决于return的内容。</li><li>以上内容与创建实例对象时有没有用new关键字没有关系。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>init</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
    <span class="token comment">//写法一：带function</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//写法二：不带function</span>
    <span class="token comment">// init: function(name){</span>
    <span class="token comment">//     // this.name = name;</span>
    <span class="token comment">//     alert(&quot;xxxx&quot;)</span>
    <span class="token comment">// },</span>
    <span class="token literal-property property">cur</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>init<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function m(v,h){const e=o("ExternalLinkIcon");return p(),c("div",null,[r,n("blockquote",null,[n("p",null,[s("链接地址"),n("a",u,[s("点此进入"),i(e)]),s("：http://manos.malihu.gr/ 国外网站有点慢")]),d]),k])}const _=t(l,[["render",m],["__file","02QQ音乐练习.html.vue"]]);export{_ as default};
