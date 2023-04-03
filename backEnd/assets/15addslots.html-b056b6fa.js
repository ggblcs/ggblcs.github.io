import{_ as e,p as s,q as a,a1 as d}from"./framework-96b046e1.js";const i={},n=d(`<h1 id="_15-addslots" tabindex="-1"><a class="header-anchor" href="#_15-addslots" aria-hidden="true">#</a> 15 addslots</h1><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
for /l %%i in (0,1,5461) do (
	redis-cli -h 127.0.0.1 -p 7000 cluster addslots %%i
)
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[n];function t(c,r){return s(),a("div",null,l)}const _=e(i,[["render",t],["__file","15addslots.html.vue"]]);export{_ as default};
