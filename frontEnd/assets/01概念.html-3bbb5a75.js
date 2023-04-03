import{_ as e,p as s,q as i,a1 as n}from"./framework-96b046e1.js";const l={},d=n(`<h1 id="_01-概念" tabindex="-1"><a class="header-anchor" href="#_01-概念" aria-hidden="true">#</a> 01 概念</h1><ol><li><p>什么是CSS预处理器? CSS 预处理器就是用某一种语言用来为 CSS 增加一些动态语言的的特性(变量、函数、继承等)， CSS预处理器可以让你的 CSS 更见简洁，适应性更强，代码更直观等诸多好处 简而言之: CSS预处理器就是升级版CSS</p></li><li><p>常见的CSS预处理器 Less、 Sass 、Stylus</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.为什么需要less?
1.1CSS的语法虽然简单, 但它同时也带来一些问题
1.2CSS需要书写大量看似没有逻辑的代码, 不方便维护及扩展, 也不利于复用,
1.3造成这些原因的本质源于CSS是一门非程序式的语言, 没有变量/函数/作用域等概念

2.什么是less(Leaner Style Sheets)?
2.1Less 是一门 CSS 预处理语言，为CSS赋予了动态语言的特征。
2.2它扩展了 CSS 语言，增加了变量、Mixin(混合)、嵌套、函数和运算等特性，使 CSS 更易维护和扩展
2.3一句话：用类似JS的语法去写CSS
*/
 /*
4.less基本使用:
4.1在浏览器中直接运行
编写less文件--&gt;引入less文件--&gt;引入less.js--&gt;运行
注意点:
一定要先引入less.css再引入less.js
如果less代码是写到单独的文件中, 一定要在服务端环境运行才能生效

写法：
直接在html中写&lt;style type=&quot;text/less&quot;&gt;&lt;/style&gt;
或引入&lt;link rel=&quot;stylesheet/less&quot; href=&quot;css/index.less&quot;&gt;

4.2提前预编译
编写less文件--&gt;利用工具转换为css文件--&gt;引入css文件
考拉客户端: http://koala-app.com/index-zh.html
开源中国  : https://tool.oschina.net/less
构建工具配置loader自动编译: 后续课程内容
注意点:
无需引入less.js, 无需在服务端运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function t(v,c){return s(),i("div",null,a)}const u=e(l,[["render",t],["__file","01概念.html.vue"]]);export{u as default};
