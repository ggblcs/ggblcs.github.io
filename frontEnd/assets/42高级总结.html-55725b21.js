import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const a={},l=s(`<h1 id="_42-高级总结" tabindex="-1"><a class="header-anchor" href="#_42-高级总结" aria-hidden="true">#</a> 42 高级总结</h1><p>面试</p><p>四个角度对webpack和代码进行了优化</p><ol><li>开发体验</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
使用sourceMap 让开发或上线时代码报错有更加准确的错误提示。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>打包速度</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
a. HotModuleReplacement 增量更新，让开发时，只重新编译打包更新了的代码，不变的代码使用缓存，从而使更新的速度更快。

b. OneOf 让资源一旦被某个 loader 处理了，就不会继续便利了，打包速度更快。

c. 使用Exclude/Include 排除或只检测某些文件，处理的文件更少，速度更快。

d. 使用cache 对eslint 和babel 处理的结果进行缓存，第二次打包速度更快。

e. 使用Thread 多线程处理 ESLint 和 babel 任务，速度更快。注意：Thread 开启线程通信都是需要花销的。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>减少代码体积</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
a. 使用TreeShaking ，提出没用的多余的代码，让代码体积更小。

b. 使用@babel/plugin-transform-runtime 插件对babe 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，体积更小。

c. 使用ImageMinimizer 对项目中图片进行压缩，体积更小。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>代码运行性能</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
a. 使用code-split 对代码分割成多个js，使单个文件体积更小，并行加载速度更快。并通过import 动态导入按需加载，达到使用时加载，不用时不加载。

b. 使用Preload/prefetch 对代码进行前加载。

c. NetworkCache，对输出资源文件做好命名，将来做好缓存，用户体验更好。

d. 使用core-js 对js 进行兼容性处理，让代码能够运行到 低版本浏览器。

e. 使用PWA 让代码离线也能访问，提升用户体验。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(r,v){return i(),n("div",null,d)}const m=e(a,[["render",c],["__file","42高级总结.html.vue"]]);export{m as default};
