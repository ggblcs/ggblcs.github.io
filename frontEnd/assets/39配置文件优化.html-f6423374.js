import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_39-配置文件优化" tabindex="-1"><a class="header-anchor" href="#_39-配置文件优化" aria-hidden="true">#</a> 39 配置文件优化</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.区分开发环境和线上环境
1.1在开发阶段我们为了提升运行效率以及调试效率, 一般会通过dev-server来打包
   在开发阶段我们为了提升打包效率,不会对打包的内容进行压缩
   ... ...
1.2在上线阶段我们需要拿到真实的打包文件, 所以不会通过dev-server来打包
   在上线阶段我们为了提升访问的效率, 所以在打包时需要对打包的内容进行压缩
   ... ...
1.3但是当前我们将&quot;开发环境和线上环境&quot;的配置都写到了一个文件中, 这样非常不利于我们去维护配置文件
   所以我们需要针对不同的环境将不同的配置写到不同的文件中

2.区分开发环境和线上环境优化
区分完不同环境配置文件之后发现两个文件之间存在大量重复配置
这我们可以利用webpack-merge模块来实现冗余代码的抽离和合并进一步优化配置文件
2.1将冗余代码抽取到 webpack.config.common.js中
2.2在dev.js和prod.js中导入common.js, 利用merge合并即可
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function c(r,v){return n(),i("div",null,a)}const t=e(d,[["render",c],["__file","39配置文件优化.html.vue"]]);export{t as default};
