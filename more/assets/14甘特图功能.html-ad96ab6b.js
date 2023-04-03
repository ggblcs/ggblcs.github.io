import{_ as e,p as a,q as n,a1 as s}from"./framework-96b046e1.js";const d={},i=s(`<h1 id="_14-甘特图功能" tabindex="-1"><a class="header-anchor" href="#_14-甘特图功能" aria-hidden="true">#</a> 14 甘特图功能</h1><p>新的甘特图功能，丰富你的文章</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section 现有任务
        已完成               <span class="token operator">:</span>done,    des1, 2014-01-06,2014-01-08
        进行中               <span class="token operator">:</span>active,  des2, 2014-01-09, 3d
        计划一               <span class="token operator">:</span>         des3, after des2, 5d
        计划二               <span class="token operator">:</span>         des4, after des3, 5d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关于 <strong>甘特图</strong> 语法，参考 [这儿][2],</li></ul>`,4),r=[i];function t(l,o){return a(),n("div",null,r)}const m=e(d,[["render",t],["__file","14甘特图功能.html.vue"]]);export{m as default};
