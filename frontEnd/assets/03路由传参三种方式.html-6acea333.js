import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_03-路由传参三种方式" tabindex="-1"><a class="header-anchor" href="#_03-路由传参三种方式" aria-hidden="true">#</a> 03 路由传参三种方式</h1><p>Vue路由传参三种方式 params传参 路由属性配置传参 query传参</p><h2 id="一、params传参" tabindex="-1"><a class="header-anchor" href="#一、params传参" aria-hidden="true">#</a> 一、params传参</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>　　　　
	<span class="token comment">//这里的params是一个对象，id是属性名，item.id是值(可以从当前组件或者Vue实例上直接取) </span>
	<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span> 

<span class="token comment">//这个组件对应的路由配置 </span>
<span class="token punctuation">{</span>　　
	<span class="token comment">//组件路径 </span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/admin&#39;</span><span class="token punctuation">,</span>　　
	<span class="token comment">//组件别名 </span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>　　
	<span class="token comment">//组件名 </span>
	<span class="token literal-property property">component</span><span class="token operator">:</span> Admin<span class="token punctuation">,</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过params传递参数，如果我们想获取 id 的参数值，可以通过this.$route.params.id这种方式来打印出来就可以得到了；</p><p>注意：获取参数的时候是 $route，跳转和传参的时候是 $router</p><h2 id="二、路由属性配置传参" tabindex="-1"><a class="header-anchor" href="#二、路由属性配置传参" aria-hidden="true">#</a> 二、路由属性配置传参：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;/admin/\${item.id}&quot;</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span> 


<span class="token comment">//这个组件对应的路由配置 </span>
<span class="token punctuation">{</span> 　　
	<span class="token comment">//组件路径 </span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/admin:id&#39;</span><span class="token punctuation">,</span> 　　
	<span class="token comment">//组件别名 </span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> 　　
	<span class="token comment">//组件名 </span>
	<span class="token literal-property property">component</span><span class="token operator">:</span> Admin<span class="token punctuation">,</span> 
<span class="token punctuation">}</span>

通过路由属性配置传参我们可以用<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id来获取到 id 的值，

注意 <span class="token keyword">this</span><span class="token punctuation">.</span> $router<span class="token punctuation">.</span>push <span class="token function">方法里面路径带的是值，路由配置项那里带的是变量名</span><span class="token punctuation">(</span>属性名<span class="token punctuation">)</span>来实现的对应；

以上两种传参方式基本上可以理解为 ajax 中的 post 请求方式，参数都是不可见的，但是上面两种方法都有一个弊端，就是当页面刷新了是获取不到参数值的，那么有没有一种方法是页面刷新之后参数依然存在呢？

三、query传参
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;/admin&quot;</span><span class="token punctuation">,</span>　　　　 
	<span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>id：item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span> 


<span class="token comment">//这个组件对应的路由配置 </span>
<span class="token punctuation">{</span> 　　
	<span class="token comment">//组件路径 </span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/admin&#39;</span><span class="token punctuation">,</span> 　　
	<span class="token comment">//组件别名 </span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> 　　
	<span class="token comment">//组件名 </span>
	<span class="token literal-property property">component</span><span class="token operator">:</span> Admin<span class="token punctuation">,</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种方式是用 query 来传参，这种方式是可以解决页面刷新参数消失问题的，这种方式可以理解为是 ajax 中的 get 方法，参数是直接在 url 后面添加的，参数是可见的，所以解决页面刷新参数消失问题建议使用此方法来解决；</p><p>区别 （1）params传参</p><p>只能用 name，不能用 path。</p><p>地址栏不显示参数名称 id，但是有参数的值。</p><p>（2）query传参</p><p>name 和 path 都能用。用 path 的时候，提供的 path 值必须是相对于根路径的相对路径，而不是相对于父路由的相对路径，否则无法成功访问。</p><p>地址栏显示参数格式为?id=0&amp;code=1</p><p>原文地址：https://blog.csdn.net/Senora/article/details/125875751</p>`,16),i=[t];function o(l,c){return s(),a("div",null,i)}const u=n(e,[["render",o],["__file","03路由传参三种方式.html.vue"]]);export{u as default};
