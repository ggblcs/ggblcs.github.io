import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_26-cors跨域上" tabindex="-1"><a class="header-anchor" href="#_26-cors跨域上" aria-hidden="true">#</a> 26 CORS跨域上</h1><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.前端跨域问题?
同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能
所谓同源是指: 协议，域名，端口都相同,就是同源, 否则就是跨域
http://127.0.0.1:8080
http://127.0.0.1:8080  // 同源

http://127.0.0.1:8080
http://127.0.0.1:9090  // 跨域

2.利用webpack-dev-server代理解决跨域问题
devServer: {
        contentBase: &quot;./dist&quot;,
        open: true,
        port: 9090,
        proxy: {
            // 所有API开头的请求都会被代理到target
            // 例如: 我们发送请求地址: http://127.0.0.1:9090/api
            //       实际发送请求地址: http://127.0.0.1:3000/api
            &quot;/api&quot;: {
                target: &quot;http://127.0.0.1:3000&quot;, // 代理地址
                changeOrigin: true,     // 域名跨域
                secure: false,          // https跨域
            }
        }
    }

devServer: {
    contentBase: &quot;./dist&quot;,
    open: true,
    port: 9090,
    proxy: [{
            context:[&quot;/api&quot;, &quot;/login&quot;],
            target: &quot;http://127.0.0.1:3000&quot;, // 代理地址
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
    }]
}

3.利用webpack-dev-server重写请求路径
proxy: [{
        context:[&quot;/api&quot;, &quot;/login&quot;],
        target: &quot;http://127.0.0.1:3000&quot;, // 代理地址
        changeOrigin: true,     // 域名跨域
        secure: false,          // https跨域
        pathRewrite:{&quot;^/api&quot;: &quot;&quot;} // 路径重写, 将路径中的api替换为空
}]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-启动node服务器" tabindex="-1"><a class="header-anchor" href="#_02-启动node服务器" aria-hidden="true">#</a> 02 启动node服务器</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/api/user&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;知播渔666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/api/login&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;指趣学院666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-前端打包启动serve" tabindex="-1"><a class="header-anchor" href="#_03-前端打包启动serve" aria-hidden="true">#</a> 03 前端打包启动serve</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> jquery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/*
当前发送请求的地址: http://127.0.0.1:9090/user
服务端的地址:       http://127.0.0.1:3000/user
* */</span>
$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-配置" tabindex="-1"><a class="header-anchor" href="#_04-配置" aria-hidden="true">#</a> 04 配置</h2><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;./bundle&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9090</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    proxy: {
        // 以下配置的含义:
        // 当我们在代码中发送请求到/user的时候, devServer就会自动将我们请求的地址替换为
        // http://127.0.0.1:3000/user
        &quot;/user&quot;: {
            target: &quot;http://127.0.0.1:3000&quot;,
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨域
        },
        &quot;/login&quot;: {
            target: &quot;http://127.0.0.1:3000&quot;,
            changeOrigin: true,     // 域名跨域
            secure: false,          // https跨
        },
        &#39;/api&#39;: {
            target: &#39;https://dev-health.csih.cn/api&#39;, // 测试环境
            changeOrigin: true,
            pathRewrite: {			// 路径重写--来自番茄树
                &#39;^/api&#39;: &#39;&#39;
            }
        }
    }
        */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[i];function c(o,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","26CORS跨域上.html.vue"]]);export{r as default};
