import{_ as s,p as e,q as n,a1 as a}from"./framework-96b046e1.js";const t={},c=a(`<h1 id="_104-tsconfig总结" tabindex="-1"><a class="header-anchor" href="#_104-tsconfig总结" aria-hidden="true">#</a> 104 tsconfig总结</h1><ol><li><p>命令带<code>-w</code>监听文件变化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc xxx.ts
tsc xxx.ts <span class="token parameter variable">-w</span> <span class="token comment"># 监视模式，监听文件变化自动编译，缺点是不能监视一个目录下的所有文件</span>
tsc <span class="token comment"># 使用该命令的前提是目录下添加配置文件tsconfig.json，里面只写一个大括号即可，可编译目录下所有ts文件</span>
tec <span class="token parameter variable">-w</span> <span class="token comment"># 同理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>里面可以写注释</p></li><li><p>配置中<code>**</code>表示任意目录，<code>*</code>表示任意文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,2),o=[c];function i(l,d){return e(),n("div",null,o)}const p=s(t,[["render",i],["__file","104tsconfig总结.html.vue"]]);export{p as default};
