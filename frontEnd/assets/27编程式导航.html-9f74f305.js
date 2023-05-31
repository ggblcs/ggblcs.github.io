import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_27-编程式导航" tabindex="-1"><a class="header-anchor" href="#_27-编程式导航" aria-hidden="true">#</a> 27 编程式导航</h1><p>编程式号航 通过router-link不会走路电守卫吗?</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 路由（管理员）</span>
<span class="token comment">// 扩展. $route 是当前活跃的路由对象（当前页）</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>&quot;路径”<span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;路径&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 有name的路径命名路由。</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;自定义的命名&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span> 参数 <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;edit&quot;</span> <span class="token punctuation">}</span> <span class="token comment">// 动态路由参数</span>
<span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">plan</span><span class="token operator">:</span> <span class="token string">&#39;relative&#39;</span><span class="token punctuation">}</span> <span class="token comment">// 查询参数，？后的</span>
<span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&quot;#text&quot;</span> <span class="token comment">// 哈希</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏觉器前进和后退会记录(push)</p><p>• 替换当到位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$router<span class="token punctuation">.</span><span class="token function">replace</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 与 push 基本一样，唯一的不同是，导航时不会 history 添加新记录（替换当前位置)</span>
<span class="token comment">// 也可以 </span>
$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;.....&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">replace</span><span class="token operator">:</span><span class="token boolean">true</span>）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>·横跨历史</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment">// 相当于 $router.forward()</span>
$router<span class="token punctuation">.</span> <span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 相当于$router.back()</span>
<span class="token comment">// $router.go(100) go(-100)都可以，没有那的多记录则跳转失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,r){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","27编程式导航.html.vue"]]);export{u as default};
