import{_ as a,p as e,q as n,a1 as s}from"./framework-96b046e1.js";const i={},d=s(`<h1 id="_05-常用命令" tabindex="-1"><a class="header-anchor" href="#_05-常用命令" aria-hidden="true">#</a> 05 常用命令</h1><p>卸载某个包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> uninstall package
<span class="token function">npm</span> uninstall package --save-dev
<span class="token function">npm</span> uninstall package <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清除缓存(时间长了，缓存会越来越大)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> cache clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取缓存存放路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get cache
<span class="token comment"># 从congif配置得到cache信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看全局安装的模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> list <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看某个模块信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> list vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制重新构建</p><p>移动项目位置后，连同node_modules一起，需要rebuild</p><p>不要使用，尚不明确，不常用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),l=[d];function c(r,p){return e(),n("div",null,l)}const u=a(i,[["render",c],["__file","05常用命令.html.vue"]]);export{u as default};
