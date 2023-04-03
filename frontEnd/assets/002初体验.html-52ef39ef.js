import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_002-初体验" tabindex="-1"><a class="header-anchor" href="#_002-初体验" aria-hidden="true">#</a> 002 初体验</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> typescript <span class="token parameter variable">-g</span>
tsc xxx.ts
tsc xxx.ts <span class="token parameter variable">-w</span> <span class="token comment"># 监视模式，监听文件变化自动编译，缺点是不能监视一个目录下的所有文件</span>
tsc <span class="token comment"># 使用该命令的前提是目录下添加配置文件tsconfig.json，里面只写一个大括号即可，可编译目录下所有ts文件</span>
tec <span class="token parameter variable">-w</span> <span class="token comment"># 同理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[typescript@4.4.3] link C:\\Users\\THINKPAD\\AppData\\Roaming\\npm\\tsc@ -&gt; C:\\Users\\THINKPAD\\AppData\\Roaming\\npm\\node_modules\\typescript\\bin\\tsc
[typescript@4.4.3] link C:\\Users\\THINKPAD\\AppData\\Roaming\\npm\\tsserver@ -&gt; C:\\Users\\THINKPAD\\AppData\\Roaming\\npm\\node_modules\\typescript\\bin\\tsserver

tsc负责编译ts为js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意点: 由于TS并不是一门新的语言, 而是对JS的扩展, 所以我们可以在TS文件中直接编写JS代码</span>
<span class="token comment">//         TS支持类型注解, 我们可以通过类型注解来告诉系统, 变量中将来只能存储什么类型的数据</span>
<span class="token comment">/*
let val:number;
val = 123;
val = &quot;123&quot;;
val = true;
val = [1, 3, 5];
 */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>length <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// let res = test([1, 3, 5], 10);</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意点: 由于TS并不是一门新的语言, 而是对JS的扩展, 所以我们可以在TS文件中直接编写JS代码</span>
<span class="token comment">//         TS支持类型注解, 我们可以通过类型注解来告诉系统, 变量中将来只能存储什么类型的数据</span>
<span class="token comment">/*
let val:number;
val = 123;
val = &quot;123&quot;;
val = true;
val = [1, 3, 5];
 */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 期望a是一个数组, b是一个数值</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>length <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// let res = test([1, 3, 5], 10);</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> val<span class="token punctuation">;</span>
val <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
val <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
val <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
val <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">/*
注意点:
由于JS是弱类型的, 所以只要定义了一个变量, 就可以往这个变量中存储任意类型的数据
也正是因为如此, 所以会给我们带来一个问题
* */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 期望a是一个数组, b是一个数值</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>length <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// let res = test([1, 3, 5], 10);</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","002初体验.html.vue"]]);export{r as default};
