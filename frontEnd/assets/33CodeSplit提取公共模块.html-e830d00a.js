import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},t=a(`<h1 id="_33-codesplit提取公共模块" tabindex="-1"><a class="header-anchor" href="#_33-codesplit提取公共模块" aria-hidden="true">#</a> 33 CodeSplit提取公共模块</h1><p>公共代码，如tool.js，或 node_modules 中的包的入口文件都被打包一次，十个就打包十次，浪费空间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 与entry 同级位置</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对所有模块进行分割</span>
        <span class="token comment">// 以下是默认配置</span>
        <span class="token comment">// minSize: 2000, // 分割代码的最小大小(公共代码最小20000才会分割)</span>
        <span class="token comment">// minRemainingSize: 0,// 类似于 miniSize ， 最后确保提取的文件大小不能为0</span>
        <span class="token comment">// miniChunks: 1, // 至少被不同入口文件引用1次，满足条件才会代码分割</span>
        <span class="token comment">// maxAsyncRequests: 30 // 按需加载时并行加载的文件最大数量</span>
        <span class="token comment">// maxznitialRequest: 30, //入口js文件最大并行请求数量</span>
        <span class="token comment">// enforceSizeThreshould: 5000, // 超过50kb 一定会单独打包，此时会忽略 minRemainingSize</span>
        <span class="token comment">// cacheGroups: { // 组，哪些模块打包到一个组</span>
        <span class="token comment">//     antd: { // 例如，antd 单独打包到一个组</span>
        <span class="token comment">//         test: /[\\\\/]node_modules[\\\\/]antd[\\\\/]/,</span>
        <span class="token comment">//         name: &quot;chunk-antd&quot;, // 命名</span>
        <span class="token comment">//         priority: 30,</span>
        <span class="token comment">//     }</span>
        <span class="token comment">//     defaultVendors: { // 组名</span>
        <span class="token comment">//         test: /[\\\\/]/node_modules[\\\\/]/, // 需要打包到一起的模块</span>
        <span class="token comment">//         priority: -10, // 权重，越大越高</span>
        <span class="token comment">//         reuseExistingChunk: true, // 如果当前chunk 包含已从bundle 中拆分出的模块</span>
        <span class="token comment">//     },</span>
        <span class="token comment">//     default: { // 其他没有写的配置会默认使用上面默认配置</span>
        <span class="token comment">//         minChunks: 2, // 这里的minChunks 权重更大（只对当前组生效）</span>
        <span class="token comment">//         priority: -20, </span>
        <span class="token comment">//         reuseExistingChunk: true</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你要打包进来的资源叫chunk。输出出去的资源叫bundle。</p><p>单入口：如果是单入口，仅需能够改 entry 为一个入口文件。</p><p>实测：很智能，体验很好，（包）和（自己的工具）都能提取到各自的文件</p>`,6),l=[t];function c(o,p){return s(),e("div",null,l)}const d=n(i,[["render",c],["__file","33CodeSplit提取公共模块.html.vue"]]);export{d as default};
