import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},c=e(`<h1 id="_02-php基础" tabindex="-1"><a class="header-anchor" href="#_02-php基础" aria-hidden="true">#</a> 02 PHP基础</h1><h2 id="_01-注释" tabindex="-1"><a class="header-anchor" href="#_01-注释" aria-hidden="true">#</a> 01 注释</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 1.JS中有两种注释</span>
<span class="token comment">// 1.1单行注释</span>
<span class="token comment">// 1.2多行注释</span>
<span class="token comment">//</span>
<span class="token comment">/* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-定义变量" tabindex="-1"><a class="header-anchor" href="#_02-定义变量" aria-hidden="true">#</a> 02 定义变量</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 2.JS中如何定义变量?</span>
<span class="token comment">//var num = 10;</span>
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-打印内容" tabindex="-1"><a class="header-anchor" href="#_03-打印内容" aria-hidden="true">#</a> 03 打印内容</h2><p>WAMP这个软件服务器对应的文件夹在安装目录的www文件夹下。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 3.JS中如何打印内容?</span>
<span class="token comment">//console.log();</span>
<span class="token comment">// 注意点: 后端编写的代码不能直接运行, 只能放到服务器对应的文件夹下, 通过服务器运行</span>
<span class="token comment">// 如何通过服务器运行: 通过ip地址找到服务器对应的文件夹, 然后再找到对应的文件运行</span>
<span class="token keyword">echo</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-定义集合" tabindex="-1"><a class="header-anchor" href="#_04-定义集合" aria-hidden="true">#</a> 04 定义集合</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 4.JS中如何定义集合</span>
<span class="token comment">// 4.1数组</span>
<span class="token comment">// 4.2字典(对象)</span>
<span class="token comment">//var arr = [1, 3, 5];</span>
<span class="token comment">// arr[0];</span>
<span class="token comment">//$arr = array(1, 3, 5);</span>
<span class="token comment">//print_r($arr);</span>
<span class="token comment">//echo &quot;&lt;br&gt;&quot;;</span>
<span class="token comment">//echo $arr[1];</span>

<span class="token comment">//var dict = {&quot;name&quot;:&quot;lnj&quot;, &quot;age&quot;:&quot;33&quot;};</span>
<span class="token comment">// dict[&quot;name&quot;];</span>
<span class="token comment">//$dict = array(&quot;name&quot;=&gt;&quot;lnj&quot;, &quot;age&quot;=&gt;&quot;33&quot;);</span>
<span class="token comment">//print_r($dict);</span>
<span class="token comment">//echo  &quot;&lt;br&gt;&quot;;</span>
<span class="token comment">//echo $dict[&quot;name&quot;];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-循环" tabindex="-1"><a class="header-anchor" href="#_05-循环" aria-hidden="true">#</a> 05 循环</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 5.JS中的分支循环语句</span>
<span class="token comment">// if/switch/三目/for/while</span>
<span class="token comment">//$age = 16;</span>
<span class="token comment">//if($age &gt;= 18){</span>
<span class="token comment">//    echo &quot;成年人&quot;;</span>
<span class="token comment">//}else{</span>
<span class="token comment">//    echo &quot;未成年人&quot;;</span>
<span class="token comment">//}</span>

<span class="token comment">//$res = ($age &gt;= 18) ? &quot;成年人&quot; : &quot;未成年人&quot;;</span>
<span class="token comment">//echo $res;</span>

<span class="token comment">//switch ($age){</span>
<span class="token comment">//    case -1:</span>
<span class="token comment">//        echo &quot;非人类&quot;;</span>
<span class="token comment">//        break;</span>
<span class="token comment">//    case 18:</span>
<span class="token comment">//        echo &quot;成年人&quot;;</span>
<span class="token comment">//        break;</span>
<span class="token comment">//    default:</span>
<span class="token comment">//        echo &quot;未成年人&quot;;</span>
<span class="token comment">//        break;</span>
<span class="token comment">//}</span>

<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//for($i = 0; $i &lt; count($arr); $i++){</span>
<span class="token comment">//    echo $arr[$i];</span>
<span class="token comment">//    echo &quot;&lt;br&gt;&quot;;</span>
<span class="token comment">//}</span>
<span class="token variable">$index</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$index</span> <span class="token operator">&lt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token variable">$index</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token variable">$index</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[c];function l(o,p){return s(),a("div",null,t)}const r=n(i,[["render",l],["__file","02PHP基础.html.vue"]]);export{r as default};
