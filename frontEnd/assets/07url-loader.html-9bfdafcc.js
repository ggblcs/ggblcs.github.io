import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const l={},i=a(`<h1 id="_07-url-loader" tabindex="-1"><a class="header-anchor" href="#_07-url-loader" aria-hidden="true">#</a> 07 url-loader</h1><p><code>url-loader</code>也是打包图片的。</p><p>不同于file-loader的是能将图片压缩为base64。压缩后就不会再拷贝图片到打包目录了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> url-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.urlloader
url-loader 功能类似于 file-loader，
但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL

2.urlloader使用
https://www.webpackjs.com/loaders/url-loader/
2.1安装urlloader
npm install --save-dev url-loader
2.2配置urlloader
{
    test: /\\.(png|jpg|gif)$/,
    use: [
        {
            loader: &#39;url-loader&#39;,
            options: {
                name: &quot;[name].[ext]&quot;,
                outputPath: &quot;/images&quot;,
                limit: 1024
            }
        }
    ]
}

优势:
图片比较小的时候直接转换成base64字符串图片, 减少请求次数
图片比较大的时候由于生成的base64字符串图片也比较大, 就保持原有的图片
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
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
                    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 100Kb</span>
                    <span class="token comment">// 指定打包后文件名称</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 指定打包后文件存放目录</span>
                    <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images/&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[i];function t(d,p){return s(),e("div",null,r)}const o=n(l,[["render",t],["__file","07url-loader.html.vue"]]);export{o as default};
