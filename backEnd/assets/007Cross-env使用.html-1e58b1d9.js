import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_007-cross-env使用" tabindex="-1"><a class="header-anchor" href="#_007-cross-env使用" aria-hidden="true">#</a> 007 Cross-env使用</h1><p>补充</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set NODE_ENV 基于会话，关闭窗口失效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>安装</li><li>复制脚本到package.json</li></ol><p><code>app.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*服务端业务逻辑的核心文件*/</span>
<span class="token comment">/*处理各种请求*/</span>
<span class="token comment">/*
1.不同平台设置环境变量方式
例如：windows下配置NODE_ENV
#首先查看NODE_ENV是否存在
set NODE_ENV
#如果不存在则添加环境变量
set NODE_ENV=production
#某些时候需要删除环境变量
set NODE_ENV=

例如：Linux下配置NODE_ENV
#首先查看NODE_ENV是否存在
echo $NODE_ENV
#如果不存在则添加环境变量
export NODE_ENV=production
#某些时候需要删除环境变量
unset NODE_ENV

2.什么是cross-env?
cross-env是一款运行跨平台的设置和使用环境变量的脚本。

3.为什么要使用cross-env
因为我们在自定义配置环境变量的时候，
由于在不同的环境下，配置的方式也是不同
所以我们需要使用cross-env来统一配置方式

4.cross-env使用
npm install --save-dev cross-env
&quot;scripts&quot;: {
  &quot;dev&quot;: &quot;cross-env NODE_ENV=dev nodemon ./bin/www.js&quot;,
  &quot;build&quot;: &quot;cross-env NODE_ENV=pro nodemon ./bin/www.js&quot;,
}
npm run dev
* */</span>
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

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">serverHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;application/json; charset=utf-8;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.准备各种请求参数</span>
    <span class="token function">initParams</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 2.处理各种路由</span>
        <span class="token comment">// 2.1处理商品相关路由</span>
        <span class="token keyword">let</span> goodsData <span class="token operator">=</span> <span class="token function">goodsRouterHandle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>goodsData<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>goodsData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2.2处理用户相关路由</span>
        <span class="token keyword">let</span> userData <span class="token operator">=</span> <span class="token function">userRouterHandle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2.3没有匹配到任何路由</span>
        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;text/plain; charset=utf-8;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404 Not Found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> serverHandle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","007Cross-env使用.html.vue"]]);export{r as default};
