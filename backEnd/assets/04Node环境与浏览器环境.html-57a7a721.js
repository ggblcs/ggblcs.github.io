import{_ as e,p as n,q as i,a1 as d}from"./framework-96b046e1.js";const s={},l=d(`<h1 id="_04-node环境与浏览器环境" tabindex="-1"><a class="header-anchor" href="#_04-node环境与浏览器环境" aria-hidden="true">#</a> 04 Node环境与浏览器环境</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.Node环境和浏览器环境区别
NodeJS环境和浏览器环境一样都是一个JS的运行环境, 都可以执行JS代码.
但是由于宿主不同所以特点也有所不同

1.1内置对象不同
- 浏览器环境中提供了window全局对象
- NodeJS环境中的全局对象不叫window, 叫global

1.2this默认指向不同
- 浏览器环境中全局this默认指向window
- NodeJS环境中全局this默认指向空对象{}

1.3API不同
- 浏览器环境中提供了操作节点的DOM相关API和操作浏览器的BOM相关API
- NodeJS环境中没有HTML节点也没有浏览器, 所以NodeJS环境中没有DOM/BOM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function c(r,v){return n(),i("div",null,a)}const t=e(s,[["render",c],["__file","04Node环境与浏览器环境.html.vue"]]);export{t as default};
