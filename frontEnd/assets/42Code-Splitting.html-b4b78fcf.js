import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_42-code-splitting" tabindex="-1"><a class="header-anchor" href="#_42-code-splitting" aria-hidden="true">#</a> 42 Code-Splitting</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Code-Splitting(代码分割)?
默认情况下webpack会将所有引入的模块都打包到一个文件中,
这样就导致了打包后的文件比较大, 以及修改文件后用户需要重新下载所有打包内容问题
例如: 在a.js中引入了b.js, 那么a.js和b.js都会被打包到bundle.js中
      如果a.js有1MB, b.js也有1MB, 那么打包之后的文件就有2MB
      那么用户第一次打开网页的时候就需要下载2MB的文件
      问题的关键在于, 如果我们修改了a.js, 但没有修改b.js
      重新打包后用户需要重新下载新打包的文件(因为用户本地缓存的是a和b的合体)
      这样就导致了每次修改了其中一个文件用户都要重新下载所有内容
解决方案: 将不经常修改的内容打包到另一个文件中, 这样每次修改后用户就只用下载修改后的文件
          没有被修改的文件由于用户上一次打开已经缓存在了本地就不用下载了, 这样性能也提升了
Code-Splitting就是将不经常修改的模块打包到单独的文件中, 避免每次修改用户都需要重新下载所有内容

2.如何开启Code-Splitting
2.1手动分割(了解)
- 在单独文件中引入模块, 将模块中的内容添加到window上
- 修改配置文件同时打包多个文件
entry: {
    calculate: &quot;./src/js/calculate.js&quot;, // 先打包会被先引入
    main: &quot;./src/js/index.js&quot;,
},
output: {
    filename: &quot;js/[name].js&quot;,
    path: path.resolve(__dirname, &quot;bundle&quot;)
},

2.2自动分割
webpack会自动判断是否需要分割, 如果需要会自动帮助我们风格
optimization: {
    splitChunks: {
        chunks: &quot;all&quot;
    }
},
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(c,t){return i(),e("div",null,a)}const r=n(l,[["render",v],["__file","42Code-Splitting.html.vue"]]);export{r as default};
