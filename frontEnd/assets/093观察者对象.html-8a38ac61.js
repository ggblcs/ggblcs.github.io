import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_93-观察者对象" tabindex="-1"><a class="header-anchor" href="#_93-观察者对象" aria-hidden="true">#</a> 93 观察者对象</h1><p>搜索MutationObserver mdn</p><p>作用：监听子节点、属性、内容的变化，以便刷新iscroll</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.创建一个观察者对象</span>
<span class="token comment">/*
MutationObserver构造函数只要监听到了指定内容发生了变化, 就会执行传入的回调函数
mutationList: 发生变化的数组
observer: 观察者对象
* */</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutationList<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(mutationList)</span>
  <span class="token comment">// console.log(this.iscroll.maxScrollY)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>iscroll<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// console.log(this.iscroll.maxScrollY)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.告诉观察者对象我们需要观察什么内容</span>
    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 观察目标子节点的变化，添加或者删除</span>
      <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 false，设置为 true 可以观察后代节点</span>
      <span class="token literal-property property">attributeFilter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;offsetHeight&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 观察特定属性</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.告诉观察者对象, 我们需要观察谁, 需要观察什么内容</span>
    <span class="token comment">/*
    第一个参数: 告诉观察者对象我们需要观察谁
    第二个参数: 告诉观察者对象我们需要观察什么内容
    * */</span>
    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>wrapper<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","093观察者对象.html.vue"]]);export{u as default};
