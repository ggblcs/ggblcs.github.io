import{_ as e,p as n,q as i,a1 as d}from"./framework-96b046e1.js";const l={},s=d(`<h1 id="_44-prefetching-preloading" tabindex="-1"><a class="header-anchor" href="#_44-prefetching-preloading" aria-hidden="true">#</a> 44 Prefetching-Preloading</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Prefetching and Preloading
通过异步加载(懒加载)的方式确实可以优化我们的代码
但是也存在一定的弊端, 弊端就是用到的时候再加载, 那么用户需要等待加载完成后才能使用
例如: 弹出登录框的时候有一些业务逻辑, 如果这些业务逻辑使用懒加载的话, 那么只有加载完用户才能操作登录框

解决方案:
加载完当前需要使用的所有模块之后, 在空闲的时间提前把异步加载的模块也加载进来
这样既不会影响到第一次的访问速度, 还可以提升异步加载的速度较少用户等待的时间

所以就有了Prefetching和Preloading
Prefetching: 空闲的时候加载
也就是等当前被使用的模块都加载完空闲下来的时候就去加载, 不用等到用户用到时再加载
Preloading: 和其它模块一起加载(不推荐, 了解即可)
也就是和当前被使用的模块一起加载

3.使用方式
https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
异步加载时写上魔法注释即可
/* webpackPrefetch: true */
/* webpackPreload: true */

4.利用魔法注释修改分割代码的名称
- 异步加载时在加载模块前面写上魔法注释
import(/* webpackChunkName: &quot;jquery&quot; */&quot;jquery&quot;).then();
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[s];function r(c,v){return n(),i("div",null,a)}const u=e(l,[["render",r],["__file","44Prefetching-Preloading.html.vue"]]);export{u as default};
