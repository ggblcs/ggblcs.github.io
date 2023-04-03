import{_ as n,p as e,q as s,a1 as a}from"./framework-96b046e1.js";const i={},t=a(`<h1 id="_016-客户端保存登录状态" tabindex="-1"><a class="header-anchor" href="#_016-客户端保存登录状态" aria-hidden="true">#</a> 016 客户端保存登录状态</h1><p>客户端登陆后，发送账号密码到服务器，服务器设置cookie的username，并对username进行加密返回。（猜测这么做的目的就是每次浏览器发送请求就会携带cookie的username，这样服务器拿到username就可以判定该用户已经登录）只讲了这么多。并没有后续处理就开始了新的章节~~<code>018 服务端保存登录状态</code></p><h2 id="_01-服务端修改cookie" tabindex="-1"><a class="header-anchor" href="#_01-服务端修改cookie" aria-hidden="true">#</a> 01 服务端修改cookie</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Set-Cookie&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">username=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;path=/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token comment">/*
Cannot set headers after they are sent to the client
报错处理： setHeader之前不能进行writeHeader操作，否则会报错！！！
*/</span>
流程：登陆时数据库匹配字段成功，表示登录成功，setHeader设置cookie，再writeHeader，end返回数据！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-客户端修改cookie" tabindex="-1"><a class="header-anchor" href="#_02-客户端修改cookie" aria-hidden="true">#</a> 02 客户端修改cookie</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;username=xxx;path=/&#39;</span>
<span class="token comment">// 可以再浏览器输出窗口操作，所以存在安全问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.为什么要存储登录状态?
因为在企业开发中有一些操作是只有登录之后才能操作的
例如: 编辑用户信息, 查看用户订单等
所以我们在登录之后需要存储用户的登录状态,
以后在涉及到一些敏感操作的时候,
我们就可以通过这个状态来判断用户是否已经登录
来决定是否让用户进行相关敏感操作

2.如何存储用户登录状态?
2.1客户端存储 Cookie
2.2服务端存储 Session

3.Cookie特点
- 我们可以在客户端中对cookie进行增删改查, 我们也可以在服务端中对cookie进行增删改查
- 每次发送网络请求, 客户端都会自动将当前域名的cookie发送给服务端
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function d(o,l){return e(),s("div",null,c)}const p=n(i,[["render",d],["__file","016客户端保存登录状态.html.vue"]]);export{p as default};
