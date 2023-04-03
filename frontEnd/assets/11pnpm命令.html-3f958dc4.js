import{_ as n,p as a,q as e,a1 as t}from"./framework-96b046e1.js";const s={},d=t(`<h1 id="_11-pnpm命令" tabindex="-1"><a class="header-anchor" href="#_11-pnpm命令" aria-hidden="true">#</a> 11 pnpm命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">pnpm</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>pnpm命令</th><th>npm命令</th></tr></thead><tbody><tr><td>pnpm install</td><td>npm install</td></tr><tr><td>pnpm add [package]</td><td>npm install [package]</td></tr><tr><td>pnpm remove [package]</td><td>npm uninstall [package]</td></tr><tr><td>pnpm (run) [cmd]</td><td>npm run [cmd]</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取pnpm的store位置</span>
<span class="token function">pnpm</span> store path
<span class="token comment"># 从store中删除未使用的包，释放存储空间（建议过一段时间用一次）</span>
<span class="token function">pnpm</span> store prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[d];function l(r,c){return a(),e("div",null,p)}const m=n(s,[["render",l],["__file","11pnpm命令.html.vue"]]);export{m as default};
