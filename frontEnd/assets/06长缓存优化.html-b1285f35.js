import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_06-长缓存优化" tabindex="-1"><a class="header-anchor" href="#_06-长缓存优化" aria-hidden="true">#</a> 06 长缓存优化</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.浏览器缓存问题
浏览器会自动缓存网页上的资源, 以便于提升下次访问的速度
但正式因为浏览器的缓存机制,  导致文件内容被修改之后只要文件名称没有发生变化
就不会重新去加载修改之后的资源, 所以刷新网页后显示的还是修改之前的内容
为了解决这个问题, 我们就需要在打包文件的时候给&quot;文件名称加上内容的hash值&quot;
一旦内容发生了变化, 内容的hash值就会发生变化, 文件的名称也会发生变化
一旦文件的名称发生了变化, 浏览器就会自动去加载新打包的文件

2.hash/chunkhash/contenthash
hash:
根据每次编译打包的内容生成的哈希值, 每次打包都不一样, 不能很好利用缓存, 不推荐
chunkhash:
根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。
在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，
接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
注意点: 只支持css和js, 不支持img等其它资源
contenthash(推荐):
根据某个文件内容生成的哈希值, 只要某个文件内容发生改变,该文件的contenthash就会发生变化

注意点: 在webpack4中contenthash和热更新有冲突, 所以在开发模式想使用contenthash需要关闭热更新
        但是一般情况下我们需要通过hash解决的是线上代码的内容更新问题, 所以开发模式无关紧要

3.manifest
webpack在打包时，会把库和业务代码之间的关系做manifest，
它既存在于业务代码(main.js)，也存在于库中(vendor.js)，
在旧版webpack中(webpack4之前)，mainfest在每次打包的时候的时候可能会变化，
所以contenthash值也会跟着变化。配置runtimeChunk后，会把manifest提取到runtime中，
这样打包就不会影响到其他js了。
optimization: {
    runtimeChunk: &quot;single&quot;,
    splitChunks: {
        chunks: &quot;all&quot;,
    },
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function v(c,r){return i(),e("div",null,d)}const t=n(l,[["render",v],["__file","06长缓存优化.html.vue"]]);export{t as default};
