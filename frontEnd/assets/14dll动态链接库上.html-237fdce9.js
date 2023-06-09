import{_ as n,p as e,q as i,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_14-dll动态链接库上" tabindex="-1"><a class="header-anchor" href="#_14-dll动态链接库上" aria-hidden="true">#</a> 14 dll动态链接库上</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是dll动态链接库?
dll动态链接库和externals功能其实是一样的,
都是用于防止重复打包不会发生变化的第三方模块,
都是用于提升webpack打包效率的
只不过externals不太符合前端的模块化思想, 所以就有了dll动态链接库


2.如何实现让第三方模块只打包一次
2.1单独配置一个config.js文件打包不会发生变化的第三方库
module.exports = {
    mode: &#39;production&#39;,
    entry: {
        vendors: &#39;jquery&#39;
    },
    output: {
        filename: &#39;[name].[contenthash:8].js&#39;,
        path: path.resolve(__dirname, &#39;dll&#39;),
        library: &#39;[name]&#39; // 表示打包的是一个库, 表示将打包的内容通过全局变量暴露出去
    }
};
2.2通过插件将打包好的库引入到界面上
npm install --save-d add-asset-html-webpack-plugin
new AddAssetHtmlWebpackPlugin({
    filepath: path.resolve(__dirname, &#39;dll/vendors.js&#39;)
})
注意点: 该插件需要配合HtmlWebpackPlugin使用, 并且需要在HtmlWebpackPlugin后创建

2.3生成动态库的映射关系
因为我们有可能将几个库打包到一个文件中, 所以需要生成一个映射文件方便webpack能够从中找到对应的库
plugins: [
    new Webpack.DllPlugin({
        name: &#39;[name]&#39;,
        path: path.resolve(__dirname, &#39;dll/[name].manifest.json&#39;)
    })
]
注意点: 这里的name必须和library一致

2.4告诉webpack去哪里查找动态库
在打包的时候如何webpack回到指定的映射文件中查找对应的动态库,
找打了那么就不会重新打包动态库中的内容了, 如果找不到才会重新打包
new Webpack.DllReferencePlugin({
    manifest: path.resolve(__dirname, &#39;dll/vendors.manifest.json&#39;)
})
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(r,c){return e(),i("div",null,a)}const u=n(s,[["render",v],["__file","14dll动态链接库上.html.vue"]]);export{u as default};
