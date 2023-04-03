import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const a={},l=s(`<h1 id="_04-sourcemap" tabindex="-1"><a class="header-anchor" href="#_04-sourcemap" aria-hidden="true">#</a> 04 sourceMap</h1><p>我的提炼：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置中写入</span>
<span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;eval&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 没有模块映射，而是命名模块。以牺牲细节达到最快。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打包后运行浏览器报错，错在哪一行？sourceMap（存储代码映射关系）告诉你映射关系。

常用配置:
1. 开发阶段
development: cheap-module-eval-source-map
只需要行错误信息, 并且包含第三方模块错误信息, 并且不会生成单独sourcemap文件

2. 上线阶段
production: cheap-module-source-map
只需要行错误信息, 并且包含第三方模块错误信息, 并且会生成单独sourcemap文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>老师原文</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是sourcemap?
webpack打包后的文件会自动添加很多代码, 在开发过程中非常不利于我们去调试
因为如果运行webpack打包后的代码,错误提示的内容也是打包后文件的内容
所以为了降低调试的难度, 提高错误代码的阅读性, 我们就需要知道打包后代码和打包之前代码的映射关系
只要有了这个映射关系我们就能很好的显示错误提示的内容, 存储这个映射关系的文件我们就称之为sourcemap

2.如何开启sourcemap
https://www.webpackjs.com/configuration/devtool/
2.1在webpack.config.js中添加
devtool: &quot;xxx&quot;,
2.2各配置项说明:
eval:
不会单独生成sourcemap文件, 会将映射关系存储到打包的文件中, 并且通过eval存储
优势: 性能最好
缺点: 业务逻辑比较复杂时候提示信息可能不全面不正确

source-map(不含eval):
会单独生成sourcemap文件, 通过单独文件来存储映射关系
优势: 提示信息全面,可以直接定位到错误代码的行和列
缺点: 打包速度慢

inline:
不会单独生成sourcemap文件, 会将映射关系存储到打包的文件中, 并且通过base64字符串形式存储

cheap:
生成的映射信息只能定位到错误行不能定位到错误列

module:
不仅希望存储我们代码的映射关系, 还希望存储第三方模块映射关系, 以便于第三方模块出错时也能更好的排错

2.3企业开发配置:
development: cheap-module-eval-source-map
只需要行错误信息, 并且包含第三方模块错误信息, 并且不会生成单独sourcemap文件

production: cheap-module-source-map
只需要行错误信息, 并且包含第三方模块错误信息, 并且会生成单独sourcemap文件
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[l];function c(v,r){return n(),i("div",null,d)}const m=e(a,[["render",c],["__file","04sourceMap.html.vue"]]);export{m as default};
