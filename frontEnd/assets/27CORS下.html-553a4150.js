import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_27-cors跨域下" tabindex="-1"><a class="header-anchor" href="#_27-cors跨域下" aria-hidden="true">#</a> 27 CORS跨域下</h1><p>注意点: devServer只能解决开发阶段的跨域问题, 并不能解决项目上线之后的跨域问题 原因非常简单, 因为项目上线之后是将打包好的文件上传到服务器, 而打包好的文件中并没有devServer 所以项目上线之后要想解决跨域问题还是需要依赖后端开发人员</p><h2 id="_01-简化冗余" tabindex="-1"><a class="header-anchor" href="#_01-简化冗余" aria-hidden="true">#</a> 01 简化冗余</h2><p>无非就是<code>webpack.config.js</code>中写法一改为写法二</p><p><strong>写法一：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
            secure: false,          // https跨域
        },
    }
     */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写法二：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9090</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">context</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 代理地址</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 域名跨域</span>
            <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// https跨域</span>
        	<span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">}</span> <span class="token comment">// 路径重写, 将路径中的/user /login前加上/api</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function r(l,i){return s(),a("div",null,o)}const u=n(t,[["render",r],["__file","27CORS下.html.vue"]]);export{u as default};
