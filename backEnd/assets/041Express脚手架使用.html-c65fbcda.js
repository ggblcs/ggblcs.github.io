import{_ as e,p as s,q as n,a1 as a}from"./framework-96b046e1.js";const i={},d=a(`<h1 id="_041-express脚手架使用" tabindex="-1"><a class="header-anchor" href="#_041-express脚手架使用" aria-hidden="true">#</a> 041 Express脚手架使用</h1><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express-generator <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>express 项目名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 项目名
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> start <span class="token comment"># 启动项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【可选】安装自己的插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nodemon
cross-env
这两个安装好后需要配置，与之前node一样的配置，主要再package.json的启动命令。
    &quot;dev&quot;: &quot;cross-env NODE_ENV=dev nodemon bin/www.js&quot;,
    &quot;build&quot;: &quot;cross-env NODE_ENV=pro nodemon bin/www.js&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚手架的方便在于自动创建文件目录。</p>`,10),l=[d];function t(c,r){return s(),n("div",null,l)}const p=e(i,[["render",t],["__file","041Express脚手架使用.html.vue"]]);export{p as default};
