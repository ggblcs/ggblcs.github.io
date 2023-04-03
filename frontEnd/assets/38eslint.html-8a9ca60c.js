import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_38-eslint" tabindex="-1"><a class="header-anchor" href="#_38-eslint" aria-hidden="true">#</a> 38 eslint</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是eslint?
ESLint 是一个插件化的 javascript 代码检测工具，
它可以用于检查常见的 JavaScript 代码错误，也可以进行&quot;代码规范&quot;检查，
在企业开发中项目负责人会定制一套 ESLint 规则，然后应用到所编写的项目上，
从而实现辅助编码规范的执行，有效控制项目代码的质量。
在编译打包时如果语法有错或者有不符合规范的语法就会报错, 并且会提示相关错误信息

2.如何使用eslint
2.1对应环境和loader
npm install eslint --save-dev
npm install eslint-loader --save-dev
2.2生成eslint配置文件
https://www.webpackjs.com/loaders/
http://eslint.cn/
{
    // 由于loader是从右至左从下至上执行
    // 而如果先执行了babel-loader就会对我们的代码进行转换
    // 而我们想检查代码规范的代码并不是转换之后的代码
    // 所以通过enforce: &#39;pre&#39;告诉webpack在所有loader执行之前执行
    enforce: &#39;pre&#39;,
    test: /\\.js$/,
    exclude: /node_modules/, // 排除不检查的文件夹
    include: path.resolve(__dirname, &#39;src&#39;), // 指定检查的文件夹
    loader: &#39;eslint-loader&#39;,
    options: {
        // eslint options (if necessary)
        // fix: true
    }
},

3.如何提升开发效率
通过阅读打包错误信息来修复不符合规范语法非常低效
所以我们可以通过webstrom插件来帮我们完成提示
webstrom--setting--eslint--autoxxx
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(r,c){return n(),i("div",null,a)}const m=e(l,[["render",v],["__file","38eslint.html.vue"]]);export{m as default};
