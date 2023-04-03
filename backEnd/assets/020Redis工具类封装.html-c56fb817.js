import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_020-redis工具类封装" tabindex="-1"><a class="header-anchor" href="#_020-redis工具类封装" aria-hidden="true">#</a> 020 Redis工具类封装</h1><p>redis下载安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/MicrosoftArchive/redis/releases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> redis <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新增关于redis的连接配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token constant">MYSQL_CONFIG</span>
<span class="token keyword">let</span> <span class="token constant">REDIS_CONFIG</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token constant">MYSQL_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span>     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">database</span> <span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token constant">REDIS_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;6379&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token constant">MYSQL_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span>     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">database</span> <span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token constant">REDIS_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;6379&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装工具类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入Redis模块</span>
<span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;redis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.建立Redis连接</span>
client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.封装保存和获取数据的方法</span>
<span class="token keyword">function</span> <span class="token function">redisSet</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> redis<span class="token punctuation">.</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">redisGet</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// client.get(key, redis.print);</span>
        client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    redisSet<span class="token punctuation">,</span> redisGet
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","020Redis工具类封装.html.vue"]]);export{r as default};
