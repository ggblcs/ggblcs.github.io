import{_ as e,p as i,q as n,a1 as d}from"./framework-96b046e1.js";const l={},s=d(`<h1 id="_49-面试题3个" tabindex="-1"><a class="header-anchor" href="#_49-面试题3个" aria-hidden="true">#</a> 49 面试题3个</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>v-for与v-if 不建议在一起使用，为什么？

v-for 优先级高于 v-if，先执行v-for ，会先循环出列表，在判断，造成性能浪费。

解决：使用computed 过滤数组，再使用v-for渲染列表，不用v-if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>vue中如何自定义指令：

参见lnj 自定义指令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>$nextTick

将函数延迟在下一次dom更新后再调用，
vue是异步渲染框架，当数据更新后，DOM不会立即渲染。

this.$nextTick(()=&gt; { 执行操作 })

使用场景：想要在created 中执行DOM操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[s];function r(v,c){return i(),n("div",null,a)}const m=e(l,[["render",r],["__file","49面试题3个.html.vue"]]);export{m as default};
