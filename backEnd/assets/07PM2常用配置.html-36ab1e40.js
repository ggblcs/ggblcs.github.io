import{_ as s,p as n,q as a,a1 as t}from"./framework-96b046e1.js";const o={},e=t(`<h1 id="_07-pm2常用配置" tabindex="-1"><a class="header-anchor" href="#_07-pm2常用配置" aria-hidden="true">#</a> 07 PM2常用配置</h1><h2 id="_1-pm2配置说明" tabindex="-1"><a class="header-anchor" href="#_1-pm2配置说明" aria-hidden="true">#</a> 1.PM2配置说明</h2><p>在项目根目录下新建配置文件<code>pm2.config.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;应用程序名称&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;入口文件名称&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 应用程序文件被修改后是否需要自动重启，自动更新
    <span class="token property">&quot;ignore_watch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 哪些文件被修改后需要忽略，忽略时不自动重启
      <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;logs&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logs/错误日志文件名称&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;out_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logs/自定义日志文件名称&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;log_date_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span> 记录日志时是否缀上输出时间，并且指定时间输出格式
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后不再通过入口文件<code>app.js</code>启动项目，而是通过<code>pm2.config.json</code>作为入口文件启动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start pm2.conf.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-一份配置好的pm2文件" tabindex="-1"><a class="header-anchor" href="#_2-一份配置好的pm2文件" aria-hidden="true">#</a> 2.一份配置好的PM2文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;nj-node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore_watch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;logs&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logs/error.log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;out_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;logs/custom.log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;log_date_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[e];function l(c,i){return n(),a("div",null,p)}const r=s(o,[["render",l],["__file","07PM2常用配置.html.vue"]]);export{r as default};
