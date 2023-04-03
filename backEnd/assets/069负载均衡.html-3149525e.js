import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_069-负载均衡" tabindex="-1"><a class="header-anchor" href="#_069-负载均衡" aria-hidden="true">#</a> 069 负载均衡</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.PM2多进程
在配置文件中增加 instances 配置, 想启动几个Node进程就写几
注意点: 不能超过服务器CPU的核数
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
    <span class="token property">&quot;log_date_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;instances&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function i(l,c){return n(),a("div",null,p)}const u=s(t,[["render",i],["__file","069负载均衡.html.vue"]]);export{u as default};
