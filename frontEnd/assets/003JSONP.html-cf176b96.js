import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_03-jsonp" tabindex="-1"><a class="header-anchor" href="#_03-jsonp" aria-hidden="true">#</a> 03 JSONP</h1><h2 id="_01-jsonp原理" tabindex="-1"><a class="header-anchor" href="#_01-jsonp原理" aria-hidden="true">#</a> 01 JSONP原理</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>20-jsonp原理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.什么是JSONP?
    JSONP让网页从别的地址（跨域的地址）那获取资料，即跨域读取数据

    2.JSONP实现跨域访问的原理
    2.1在同一界面中可以定义多个script标签
    2.2同一个界面中多个script标签中的数据可以相互访问
    2.3可以通过script的src属性导入其它资源
    2.4通过src属性导入其它资源的本质就是将资源拷贝到script标签中
    2.5script的src属性不仅能导入本地资源, 还能导入远程资源
    2.6由于script的src属性没有同源限制, 所以可以通过script的src属性来请求跨域数据
    * */</span>
    <span class="token comment">// let num = 666;</span>
    <span class="token comment">// function demo() {</span>
    <span class="token comment">//     console.log(&quot;demo&quot;);</span>
    <span class="token comment">// }</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
&lt;script src=&quot;20-jsonp.js&quot;&gt;
    // let num = 777;
    // function test() {
    //     console.log(&quot;test777&quot;);
    // }
&lt;/script&gt;
--&gt;</span>
<span class="token comment">&lt;!--&lt;script src=&quot;http://libs.baidu.com/jquery/2.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// console.log(num);</span>
    <span class="token comment">// demo();</span>

    <span class="token comment">// console.log(num);</span>
    <span class="token comment">// test();</span>

    <span class="token comment">// $(&quot;button&quot;).click(function () {</span>
    <span class="token comment">//     alert(&quot;按钮被点击了&quot;);</span>
    <span class="token comment">// });</span>

    <span class="token comment">/*
    当前网页的地址: http://127.0.0.1:63342/jQuery/Ajax/20-jsonp%E5%8E%9F%E7%90%86.html
    远程资源的地址: http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php
    */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20-jsonp.php</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//echo &quot;let num = 789;&quot;;</span>
<span class="token comment">//echo &quot;demo(666);&quot;;</span>

<span class="token variable">$cb</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cb&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// test</span>
<span class="token keyword">echo</span> <span class="token variable">$cb</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;(666);&quot;</span><span class="token punctuation">;</span> <span class="token comment">// test(666);</span>

<span class="token comment">//$arr = array(&quot;userName&quot;=&gt;&quot;lnj&quot;, &quot;password&quot;=&gt;&quot;it666&quot;);</span>
<span class="token comment">//$data = json_encode($arr);</span>
<span class="token comment">//echo &quot;demo(&quot;.$data.&quot;)&quot;;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20-jsonp.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">777</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test777&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-jsonp优化" tabindex="-1"><a class="header-anchor" href="#_02-jsonp优化" aria-hidden="true">#</a> 02 JSONP优化</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>21-JSONP优化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--&lt;script src=&quot;http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test&quot;&gt;&lt;/script&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    优化一
    1.在企业开发中通过JSONP来获取跨域的数据,
    一般情况下服务器返回的都不会是一个变量, 而是一个函数的调用
    */</span>

    <span class="token comment">/*
    优化二
    2.当前服务器返回的函数调用名称写死了
    服务器返回函数叫什么名称, 我们本地就必须定义一个叫什么名称的函数
    */</span>
    <span class="token comment">/*
    解决方案:
    通过URL参数的方式来动态指定函数名称
    */</span>

    <span class="token comment">/*
    优化三
    3.由于script标签默认是同步, 前面的script标签没有加载完数据, 后面的script标签就不会被执行
    所以请求数据的script标签必须放到后面
    */</span>
    <span class="token comment">/*
    解决方案:
    通过JS动态创建script标签, 因为JS动态创建的script标签默认就是异步的,
    不用等到前面的标签加载完就可以执行后面的script标签
    */</span>

    <span class="token keyword">let</span> oScript <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oScript<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test&quot;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oScript<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
&lt;script src=&quot;http://127.0.0.1:80/jQuery/Ajax/20-jsonp.php?cb=test&quot;&gt;
    // demo(666);
    // test(666);
&lt;/script&gt;
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","003JSONP.html.vue"]]);export{d as default};
