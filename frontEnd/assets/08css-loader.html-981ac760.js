import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const l={},i=e(`<h1 id="_08-css-loader" tabindex="-1"><a class="header-anchor" href="#_08-css-loader" aria-hidden="true">#</a> 08 css-loader</h1><blockquote><p>新知识：CSS中引入CSS：<code>@import index.css</code>。</p></blockquote><p>使用这个需要同时use<code>css-loader</code>和<code>style-loader</code>，也需要同时安装这两个。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev css-loader
<span class="token function">npm</span> <span class="token function">install</span> style-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>css-loader:   解析css文件中的@import依赖关系
style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>即便是css代码，也是通过js引入，打包后的js在html中引入，js会自动将css插入到html头部。</p><p><strong>原文：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.css-loader
和图片一样webpack默认能不能处理CSS文件, 所以也需要借助loader将CSS文件转换为webpack能够处理的类型

2.css-loader使用:
2.1安装cssloader
npm install --save-dev css-loader
2.2安装styleloader
npm install style-loader --save-dev
2.3配置css-loader
{
    test: /\\.css$/,
    use: [ &#39;style-loader&#39;, &#39;css-loader&#39; ]
}

3.css-loader和style-loader作用
css-loader:   解析css文件中的@import依赖关系
style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    配置sourcemap
    development: cheap-module-eval-source-map
    production: cheap-module-source-map
    * */</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;cheap-module-eval-source-map&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    mode: 指定打包的模式, 模式有两种
    一种是开发模式(development): 不会对打包的JS代码进行压缩
    还有一种就是上线(生产)模式(production): 会对打包的JS代码进行压缩
    * */</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;production&quot; | &quot;development&quot;</span>
    <span class="token comment">/*
    entry: 指定需要打包的文件
    * */</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        filename: 指定打包之后的JS文件的名称
        * */</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/*
        path: 指定打包之后的文件存储到什么地方
        * */</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;bundle&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 打包图片规则</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token comment">/*
                            limit: 指定图片限制的大小
                            如果被打包的图片超过了限制的大小, 就会将图片保存为一个文件
                            如果被打包的图片没有超过限制的大小, 就会将图片转换成base64的字符串
                            注意点:
                            对于比较小的图片, 我们将图片转换成base64的字符串之后, 可以提升网页的性能(因为减少了请求的次数)
                            对于比较大的图片, 哪怕我们将图片转换成了base64的字符串之后, 也不会提升网页的性能, 还有可能降低网页的性能
                            (因为图片如果比较大, 那么转换之后的字符串也会比较多, 那么网页的体积就会表达, 那么访问的速度就会变慢)
                            * */</span>
                            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span>
                            <span class="token comment">// 指定打包后文件名称</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
                            <span class="token comment">// 指定打包后文件存放目录</span>
                            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images/&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 打包CSS规则</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">/*
                css-loader:   解析css文件中的@import依赖关系
                style-loader: 将webpack处理之后的内容插入到HTML的HEAD代码中
                * */</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function t(o,c){return s(),a("div",null,p)}const d=n(l,[["render",t],["__file","08css-loader.html.vue"]]);export{d as default};
