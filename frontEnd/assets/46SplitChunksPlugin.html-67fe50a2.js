import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_46-splitchunksplugin" tabindex="-1"><a class="header-anchor" href="#_46-splitchunksplugin" aria-hidden="true">#</a> 46 SplitChunksPlugin</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Split-Chunks-Plugin?
webpack在代码分割的时候底层使用的其实是Split-Chunks-Plugin来实现代码分割的
所以这个插件的作用就是进行代码分割

2.Split-Chunks-Plugin相关配置
https://www.webpackjs.com/plugins/split-chunks-plugin/
{
    chunks: &quot;async&quot;, // 对那些代码进行分割 async(只分割异步加载模块)、all(所有导入模块)
    minSize: 30000, // 表示被分割的代码体积至少有多大才分割(单位是字节)
    minChunks: 1,  //  表示至少被引用多少次数才分割，默认为1
    maxAsyncRequests: 5, // 异步加载并发最大请求数(保持默认即可)
    maxInitialRequests: 3, // 最大的初始请求数(保持默认即可)
    automaticNameDelimiter: &#39;~&#39;, // 命名连接符
    name: true, // 拆分出来块的名字使用0/1/2... 还是指定名称
    cacheGroups: { // 缓存组, 将当前文件中导入的所有模块缓存起来统一处理
        vendors: { // 分割从node_modules目录中导入的模块
            test: /[\\\\/]node_modules[\\\\/]/,
            priority: -10 // 优先级, 值越小越优先
        },
        default: { // 分割从其它地方导入的模块
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true // 如果当前代码块包含的模块已经有了，就不在产生一个新的代码块
        }
    }
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function u(c,v){return i(),e("div",null,a)}const t=n(l,[["render",u],["__file","46SplitChunksPlugin.html.vue"]]);export{t as default};
