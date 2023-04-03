import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_018-服务端保存登录状态" tabindex="-1"><a class="header-anchor" href="#_018-服务端保存登录状态" aria-hidden="true">#</a> 018 服务端保存登录状态</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.客户端存储登录状态的不足
- 存储的登录状态可能不仅仅是存储用户名, 存储什么内容是要根据我们的业务需求来定的
  既然存储的可能不仅仅是用户名, 所以cookie可能会出现存不下的情况(cookie有大小限制)
- 存储在客户端的数据可能会暴露, 所以我们需要对存储的数据进行加密
  但是如果所有数据都加密, 那么我们还需要在服务端存储加密后的映射关系
  否则将来根据加密的数据, 我们也无法得知这是什么内容
- 所以综上所述, 为了提升数据的安全性, 为了能够存储更多的内容
  我们可以在服务端存储登录状态, 我们可以通过Session来存储登录状态

2.如何通过Session来存储登录状态
2.1给每一个用户分配一个无关紧要的值作为为一个标识
2.2在服务端定义一个全局变量为了Session容器
2.3将用户的唯一标识作为key, 用户登录之后就给容器的这个key添加登录状态信息
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从客户端获取cookie并处理成对象--这里有点迷惑，可以不看，从<strong>黑体字</strong>下面开始看。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取</span>
 req<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> keyvalue <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
     req<span class="token punctuation">.</span>cookie<span class="token punctuation">[</span>keyvalue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> keyvalue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1<strong>启动项目时创建容器保存登录状态</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义变量作为session的容器</span>
<span class="token keyword">const</span> <span class="token constant">SESSION_CONTAINER</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2<strong>获取cookie里的userid，没有就创建，用userid作为key保存在容器中分配一个空对象（之前有对象的话就不分配），将这个对象赋值地址给自定义req.session。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">initCookieSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 处理cookie 自定义变量</span>
    req<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> keyvalue <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
            req<span class="token punctuation">.</span>cookie<span class="token punctuation">[</span>keyvalue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> keyvalue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 获取用户唯一标识</span>
    req<span class="token punctuation">.</span>userId <span class="token operator">=</span> req<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span>userId
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>req<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>userId <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_it666</span><span class="token template-punctuation string">\`</span></span>
        <span class="token comment">// 给当前用户分配容器</span>
        <span class="token constant">SESSION_CONTAINER</span><span class="token punctuation">[</span>req<span class="token punctuation">.</span>userId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Set-Cookie&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">userId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;path=/;httpOnly;expires=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">getCookieExpires</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">SESSION_CONTAINER</span><span class="token punctuation">[</span>req<span class="token punctuation">.</span>userId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 给当前用户分配容器</span>
        <span class="token constant">SESSION_CONTAINER</span><span class="token punctuation">[</span>req<span class="token punctuation">.</span>userId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    req<span class="token punctuation">.</span>session <span class="token operator">=</span> <span class="token constant">SESSION_CONTAINER</span><span class="token punctuation">[</span>req<span class="token punctuation">.</span>userId<span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(req.session);</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">SESSION_CONTAINER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3<strong>登陆页面登录时session中保存登录数据库获取的数据</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loginCheck</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>username <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>username
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>password <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>password
    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>sex <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>sex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此为止，我们并没有处理如果已经登录了，我们该做出怎样的判断。事实上，这确实是不完整的，但是我们又发现了新的问题需要解决一下， 见下篇。</p>`,11),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","018服务端保存登录状态.html.vue"]]);export{r as default};
