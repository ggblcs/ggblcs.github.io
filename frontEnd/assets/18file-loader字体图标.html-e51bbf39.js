import{_ as n,p as e,q as s,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_18-file-loader字体图标" tabindex="-1"><a class="header-anchor" href="#_18-file-loader字体图标" aria-hidden="true">#</a> 18 file-loader字体图标</h1><p style="color:#ff00ff;"> 唯一一个没成功的打包 </p><p><strong>首先下载file-loader</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.如何打包字体图标
字体图标中也用到了url用到了文件, 所以我们需要通过file-loader来处理字体图标文件
{
    test: /\\.(eot|svg|ttf|woff|woff2)$/,
    use:[{
        loader: &quot;file-loader&quot;,
        options: {
            name: &quot;[name].[ext]&quot;,
            outputPath: &quot;font/&quot;,
        }
    }]
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript文件引入使用图标</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;./font/iconfont.css&quot;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;i class=&#39;iconfont icon-icon&#39; style=&#39;font-size: 100px&#39;&gt;&lt;/i&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function o(d,r){return e(),s("div",null,t)}const u=n(i,[["render",o],["__file","18file-loader字体图标.html.vue"]]);export{u as default};
