import{_ as e,p as n,q as i,a1 as a}from"./framework-96b046e1.js";const s={},d=a(`<h1 id="_16-happypack" tabindex="-1"><a class="header-anchor" href="#_16-happypack" aria-hidden="true">#</a> 16 happypack</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是HappyPack?
默认情况下webpack打包项目是单线程的, 为了提升打包速度, 充分发挥多核 CPU 电脑的威力
我们可以通过HappyPack让webpack实现多线程打包

2.HappyPack使用
https://www.npmjs.com/package/happypack
npm install --save-dev happypack
{
    test: /\\.js$/,
    exclude: /node_modules/,
    use: &#39;happypack/loader?id=js&#39;
},
new HappyPack({
        id: &#39;js&#39;,
        use: [{
            test: /\\.js$/,
            exclude: /node_modules/,
            loader: &#39;babel-loader&#39;,
            options: {
                ... ...
            }
        }]
    })
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function c(v,r){return n(),i("div",null,l)}const m=e(s,[["render",c],["__file","16happypack.html.vue"]]);export{m as default};
