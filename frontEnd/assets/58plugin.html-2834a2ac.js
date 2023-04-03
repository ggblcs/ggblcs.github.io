import{_ as i,p as e,q as l,a1 as n}from"./framework-96b046e1.js";const a={},o=n(`<h1 id="_58-plugin" tabindex="-1"><a class="header-anchor" href="#_58-plugin" aria-hidden="true">#</a> 58 plugin</h1><h2 id="_1-webpack-plugin-钩子" tabindex="-1"><a class="header-anchor" href="#_1-webpack-plugin-钩子" aria-hidden="true">#</a> 1 webpack plugin 钩子</h2><p>几十多个钩子，Tapable为 webpack 提供了统一的插件接口（钩子）类型定义，他是webpack 的核心功能库。webpack 中目前有十种 hooks ，在Tapable 源码中可以看到。</p><p>Tapable 还统一暴露了三个方法给了插件，用于注入不同类型的自定义构建行为。</p><ol><li>top 用于注册 同步和 异步钩子，</li><li>topAsync回调方式注册异步钩子。</li><li>tapPromise：promise方式注册异步钩子。</li></ol><h2 id="_2-plugin构建对象" tabindex="-1"><a class="header-anchor" href="#_2-plugin构建对象" aria-hidden="true">#</a> 2 plugin构建对象</h2><p>compiler 对象中保存着完整的webpack 环境配置，每次启动webpack 时构建它都是一个独一无二，仅仅会创建一次的对象。这个对象会在首次启动webpack时创建，我们可以通过，compiler对象上访问到 webpack 的主环境配置。比如loader，plugin等配置信息。</p><p>主要属性：</p><ol><li>compiler.options: 可以访问本次启动webpack时所有的配置文件，包括但不仅限于loaders、entry、output、plugin等配置信息</li><li>compiler.inputFileSystem 和 Compiler.outputFileSystem 可以对文件进行操作，相当于 node.js 的fs</li><li>compiler.hooks 可以注册 tapable 的不同种类Hook， 从而可以在compiler 生命周期中植入不同的逻辑。</li></ol><p>compilation 对象代表一次构建的资源，compilation 实例能够访问所有的模块和他们的依赖。</p><p>一个compilation 对象会对构建图中所有模块进行编译，在编译阶段，模块会被加载（load），封存（seal），优化（optimize），分块（chunk），哈希（hash）和重新构建（restore）</p><p>主要属性：</p><ol><li>compilation.modules 可以访问所有模块，打包的每一个文件都是一个模块。</li><li>compilation.chunks chunks即是多个modules组成而来的一个代码块。入口文件引入的资源组成一个chunk，通过代码分割的模块又是另外的chunk</li><li>comilation.assets 可以访问本次打包生成所有文件的结果。</li><li>comilation.hooks 可以注册tapable 的不同种类 hook，用于在 compilation 编译模块阶段进行逻辑添加及修改。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>流程图：
webpack // 创建compiler对象，里面有完整webpack配置。
compiler
compiler.run()
compiler.compilation() 创建compilation 对象，包含一次资源完整构建过程。
compiler.make() --------&gt; compilation
|                           |  (分支)
|                         compilation.buildModule()
|                         compilation.seal()
|                         compilation.optimize()
|                         compilation.reviveChunks()
|     &lt;---------------    compilation.seal()
compiler.afterCompile()
compiler.emit()
compiler.emitAssets() 最后资源输出出去
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[o];function c(s,t){return e(),l("div",null,p)}const d=i(a,[["render",c],["__file","58plugin.html.vue"]]);export{d as default};
