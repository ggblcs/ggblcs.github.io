import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_06-项目结构下" tabindex="-1"><a class="header-anchor" href="#_06-项目结构下" aria-hidden="true">#</a> 06 项目结构下</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>根
├─ bin
│  └─ www.js
├─ model
│  └─ ReslutModel.js
├─ router
│  ├─ goods.js
│  ├─ routerConst.js
│  └─ user.js
└─ app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺序：</p><blockquote><p>01 www.js</p><p>02 app.js</p><p>03 user.js</p><p>04 good.js</p><p>05 routerConst.js</p><p>06 ResultModel.js</p></blockquote><p>01 <code>www.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*服务端配置文件*/</span>
<span class="token comment">/*在这个文件中提供一个最简单的服务端服务即可*/</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> serverHandle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> serverHandle<span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>02 <code>app.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*服务端业务逻辑的核心文件*/</span>
<span class="token comment">/*处理各种请求*/</span>
<span class="token keyword">const</span> queryString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> goodsRouterHandle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/goods&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> userRouterHandle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">initParams</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 准备 请求方式 / 请求路径 / 请求参数</span>
    <span class="token comment">// 1.处理请求方式</span>
    req<span class="token punctuation">.</span>method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.处理请求路径</span>
    req<span class="token punctuation">.</span>path <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.处理请求参数</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> params <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            req<span class="token punctuation">.</span>query <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                params <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                req<span class="token punctuation">.</span>body <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">serverHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;application/json; charset=utf-8;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.准备各种请求参数</span>
    <span class="token function">initParams</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 2.处理各种路由</span>
        <span class="token keyword">let</span> goodsData <span class="token operator">=</span> <span class="token function">goodsRouterHandle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>goodsData<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>goodsData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> userData <span class="token operator">=</span> <span class="token function">userRouterHandle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;text/plain; charset=utf-8;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404 Not Found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> serverHandle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>03 <code>user.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token constant">USER_LOGIN</span><span class="token punctuation">,</span>
    <span class="token constant">USER_REGISTER</span><span class="token punctuation">,</span>
    <span class="token constant">USER_INFO</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routerConst&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
    SuccessModel<span class="token punctuation">,</span>
    ErrorModel
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../model/ResultModel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">userRouterHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_LOGIN</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理登录</span>
        <span class="token comment">// return {</span>
        <span class="token comment">//     code: 200,</span>
        <span class="token comment">//     msg: &#39;登录成功&#39;</span>
        <span class="token comment">// }</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuccessModel</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_REGISTER</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理注册</span>
        <span class="token comment">// return {</span>
        <span class="token comment">//     code: 200,</span>
        <span class="token comment">//     msg: &#39;注册成功&#39;</span>
        <span class="token comment">// }</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ErrorModel</span><span class="token punctuation">(</span><span class="token string">&#39;注册失败&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_INFO</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理获取用户信息</span>
        <span class="token comment">// return {</span>
        <span class="token comment">//     code: 200,</span>
        <span class="token comment">//     msg: &#39;获取用户信息成功&#39;,</span>
        <span class="token comment">//     data: {</span>
        <span class="token comment">//         name:&#39;lnj&#39;,</span>
        <span class="token comment">//         age: 33</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuccessModel</span><span class="token punctuation">(</span><span class="token string">&#39;获取用户信息成功&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> userRouterHandle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>04 <code>good.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token constant">GOODS_LIST</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_DETAIL</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_EDIT</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_NEW</span><span class="token punctuation">,</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routerConst&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">goodsRouterHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">GOODS_LIST</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理商品列表</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">GOODS_DETAIL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理商品详情</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">GOODS_EDIT</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理编辑商品</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">GOODS_NEW</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理新建商品</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> goodsRouterHandle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>05 <code>routerConst.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">GOODS_LIST</span> <span class="token operator">=</span> <span class="token string">&#39;/api/goods/list&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">GOODS_DETAIL</span> <span class="token operator">=</span> <span class="token string">&#39;/api/goods/detail&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">GOODS_EDIT</span> <span class="token operator">=</span> <span class="token string">&#39;/api/goods/edit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">GOODS_NEW</span> <span class="token operator">=</span> <span class="token string">&#39;/api/goods/new&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">USER_LOGIN</span> <span class="token operator">=</span> <span class="token string">&#39;/api/user/login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">USER_REGISTER</span> <span class="token operator">=</span> <span class="token string">&#39;/api/user/register&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">USER_INFO</span> <span class="token operator">=</span> <span class="token string">&#39;/api/user/info&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">GOODS_LIST</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_DETAIL</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_EDIT</span><span class="token punctuation">,</span>
    <span class="token constant">GOODS_NEW</span><span class="token punctuation">,</span>
    <span class="token constant">USER_LOGIN</span><span class="token punctuation">,</span>
    <span class="token constant">USER_REGISTER</span><span class="token punctuation">,</span>
    <span class="token constant">USER_INFO</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
各种路由地址
操作商品接口
/api/goods/list
/api/goods/detail
/api/goods/edit
/api/goods/new
操作用户接口
/api/user/login
/api/user/register
/api/user/info
... ...
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>06 <code>ResultModel.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BaseModel</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SuccessModel</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">ErrorModel</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    SuccessModel<span class="token punctuation">,</span>
    ErrorModel
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","06项目结构下.html.vue"]]);export{r as default};
