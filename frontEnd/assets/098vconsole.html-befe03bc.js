import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const o={},l=a(`<h1 id="_98-vconsole" tabindex="-1"><a class="header-anchor" href="#_98-vconsole" aria-hidden="true">#</a> 98 vconsole</h1><p>手机端的调试工具，移动端打开控制台，调试工具。</p><p>**搜索：**搜索npmjs-----搜索vconsole</p><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm install vconsole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VConsole <span class="token keyword">from</span> <span class="token string">&#39;vconsole&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vConsole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or init with options</span>
<span class="token comment">// const vConsole = new VConsole({ maxLogNumber: 1000 });</span>

<span class="token comment">// call \`console\` methods as usual</span>
<span class="token comment">// console.log(&#39;Hello world&#39;);</span>

<span class="token comment">// remove it when you finish debugging</span>
<span class="token comment">// vConsole.destroy();</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vconsole<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function i(t,p){return s(),e("div",null,c)}const r=n(o,[["render",i],["__file","098vconsole.html.vue"]]);export{r as default};
