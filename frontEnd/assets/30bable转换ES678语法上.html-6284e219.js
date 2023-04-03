import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_30-bable转换es678语法上" tabindex="-1"><a class="header-anchor" href="#_30-bable转换es678语法上" aria-hidden="true">#</a> 30 bable转换ES678语法上</h1><p><code>bable-loader</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.webpack-ES6语法处理
在企业开发中为了兼容一些低级版本的浏览器, 我们需要将ES678高级语法转换为ES5低级语法
否则在低级版本浏览器中我们的程序无法正确执行
默认情况下webpack是不会将我们的代码转换成ES5低级语法的, 如果需要转换我们需要使用babel来转换

2.如何使用babel?
https://babeljs.io/
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
2.1安装转换到ES5的相关包
npm install --save-dev babel-loader @babel/core  @babel/preset-env
2.2配置babel-loader
{
    test: /\\.js$/,
    exclude: /node_modules/,  // 不做处理的目录
    loader: &quot;babel-loader&quot;,
    options: {
        presets: [&quot;@babel/preset-env&quot;],
    },
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置直接转ES5，就是基本的，默认的。</p><p>还可以根据要适配的浏览器版本号进行转换：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
3.presets优化:
在实际企业开发中默认情况下babel会将所有高于ES5版本的代码都转换为ES5代码
但是有时候可能我们需要兼容的浏览器已经实现了更高版本的代码, 那么这个时候我们就不需要转换
因为如果浏览器本身已经实现了, 我们再去转换就会增加代码的体积,就会影响到网页的性能
所以我们通过配置presets的方式来告诉webpack我们需要兼容哪些浏览器
然后babel就会根据我们的配置自动调整转换方案, 如果需要兼容的浏览器已经实现了, 就不转换了
https://babeljs.io/docs/en/babel-preset-env
presets: [[&quot;@babel/preset-env&quot;,{
            targets: {
                &quot;chrome&quot;: &quot;58&quot;,
                &quot;ie&quot;: &quot;10&quot;
            },
        }]],
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[a];function v(r,b){return n(),i("div",null,d)}const t=e(l,[["render",v],["__file","30bable转换ES678语法上.html.vue"]]);export{t as default};
