import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_01-概念" tabindex="-1"><a class="header-anchor" href="#_01-概念" aria-hidden="true">#</a> 01 概念</h1><p>模块打包工具，当然是通过模块将不同js文件联系到一起的。</p><p>我的提炼：安装webpack</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4.1安装webpack
cnpm init -y
cnpm install webpack webpack-cli --save-dev

# npm install --save-dev webpack
# npm install --save-dev webpack-cli

4.2在终端中输入打包的指令
npx webpack index.js（高版本会报错，需要加./）npx webpack ./index.js
注意点:
index.js就是需要打包的文件
打包之后的文件会放到dist目录中, 名称叫做main.js

4.3 自我总结的---坑
如果使用ES6模块语法语法，必须再package.json中加入 &quot;type&quot;: &quot;module&quot;,
如果使用node模块语法，必须去掉 &quot;type&quot;: &quot;module&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原文：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是webpack?
webpack是一套基于NodeJS的&quot;模块打包工具&quot;,
在webpack刚推出的时候就是一个单纯的JS模块打包工具,可以将多个模块的JS文件合并打包到一个文件中
但是随着时间的推移、众多开发者的追捧和众多开发者的贡献
现在webpack不仅仅能够打包JS模块, 还可以打包CSS/LESS/SCSS/图片等其它文件

2.为什么要分模块?
如果将所有的JS代码都写到一个文件中, 十分不利于代码的维护和复用
所以我们可以将不同的功能写到不同的模块中, 这样就提升了代码的维护性和复用性
但是当将代码写到不同模块时新的问题又出现了,
例如: 导入资源变多了, 请求次数变多了, 网页性能也就差了
例如: 不同功能都放到了不同模块中了, 那么如何维护模块之间的关系也变成一个难题了
    &lt;script src=&quot;./header.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;./content.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;./footer.js&quot;&gt;&lt;/script&gt; // 如果index.js中用到了footer,就会报错
例如: ... ...

3.如何解决上述问题
3.1项目上线时将用到的所有模块都合并到一个文件中
3.2在index.html中只导入主文件, 再主文件中再导入依赖模块

4.如何通过webpack来打包JS模块
4.1安装webpack
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli
4.2在终端中输入打包的指令
npx webpack index.js
注意点:
index.js就是需要打包的文件
打包之后的文件会放到dist目录中, 名称叫做main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function v(c,t){return e(),i("div",null,a)}const u=n(d,[["render",v],["__file","01概念.html.vue"]]);export{u as default};
