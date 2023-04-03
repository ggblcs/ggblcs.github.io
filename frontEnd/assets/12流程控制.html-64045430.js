import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_12-流程控制" tabindex="-1"><a class="header-anchor" href="#_12-流程控制" aria-hidden="true">#</a> 12 流程控制</h1><ol><li><p>顺序结构</p></li><li><p>选择结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
语句<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">{</span>
语句<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">{</span>
语句<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
语句<span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">case</span> 表达式<span class="token constant">A</span><span class="token operator">:</span>
	语句<span class="token punctuation">;</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">case</span> 表达式<span class="token constant">B</span><span class="token operator">:</span>
	语句<span class="token punctuation">;</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token operator">:</span>
	语句<span class="token punctuation">;</span>
	<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>循环结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span>条件语句<span class="token punctuation">)</span><span class="token punctuation">{</span>
语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">do</span><span class="token punctuation">{</span>
语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>条件语句<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始化语句<span class="token punctuation">;</span>条件语句<span class="token punctuation">;</span>增量<span class="token punctuation">)</span><span class="token punctuation">{</span>
语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>注意点if</strong></p><ol><li><p>if判断中，形如5==a的条件，要将常量写在前面，防止因疏忽写成a=5，再根据a的值进行if判断，不利于排错。</p></li><li><p>当if省略大括号时，elseif/else会自动与距离最近没有被使用的if匹配。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>注意点case</strong></p><ol><li>case中的条件与switch中的表达式，判断用的是“===”，既判断数据值，又判断数据类型。</li><li>如果没有break语句，第一个case匹配成功，其它case就会失效，但是其他case后的语句会被继续执行，直到break或者直到执行至最后一条语句。同样的default也会失效，default后的语句也会继续被执行。</li><li>default不一定放在最后，放在最前面，放在中间，运行的结果是一样的。</li><li>default可以省略。</li></ol><p><strong>注意点while和for</strong></p><ol><li>for循环中“初始化表达式”“条件表达式”“循环后增量表达式”都可以省略不写，同时都省略后相当于<code>while(1){}</code>,<code>for(;;){}</code>，但while循环中的条件不能省略不写。</li></ol><h2 id="_01-全局变量和局部变量" tabindex="-1"><a class="header-anchor" href="#_01-全局变量和局部变量" aria-hidden="true">#</a> 01 全局变量和局部变量</h2><p>全局变量：所有{}之外声明的变量。</p><p>局部变量：{}之内声明的变量。</p><p><strong>注意点</strong></p><ol><li>如果用var定义局部变量，它和全局变量一样，后续都可以被使用。</li><li>如果用let定义局部变量，那他真的就只能局部使用。</li></ol><h2 id="_02-break和continue" tabindex="-1"><a class="header-anchor" href="#_02-break和continue" aria-hidden="true">#</a> 02 break和continue</h2><p>break：结束当前循环</p><p>continue：只能在循环结构中使用，表示跳出本次循环，进行下次循环。</p><h2 id="_03-循环练习" tabindex="-1"><a class="header-anchor" href="#_03-循环练习" aria-hidden="true">#</a> 03 循环练习</h2><ol><li><p>上三角星星</p></li><li><p>下三角星星</p></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
12
123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
22
333
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-******
--***
---*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>乘法表</p></li></ol>`,18),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","12流程控制.html.vue"]]);export{d as default};
