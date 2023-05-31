import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_35-proxy代理" tabindex="-1"><a class="header-anchor" href="#_35-proxy代理" aria-hidden="true">#</a> 35 proxy代理</h1><p><code>vite.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 中转服务器，vite使用server，webpack使用devServer</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/path&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://xxx.com&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
            <span class="token function-variable function">reWrite</span><span class="token operator">:</span> <span class="token parameter">path</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/path</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token comment">// 一个函数，将/path替换为空串</span>
            <span class="token comment">// vite 使用 rewrite, webpack 使用 pathRewrite，是个对象</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function r(c,i){return s(),a("div",null,o)}const u=n(t,[["render",r],["__file","35proxy代理.html.vue"]]);export{u as default};
