import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_37-图片路径问题" tabindex="-1"><a class="header-anchor" href="#_37-图片路径问题" aria-hidden="true">#</a> 37 图片路径问题</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.webpack打包图片路径问题
webpack打包之后给我们的都是相对路径
但是正是因为是相对路径, 所以会导致在html中使用的图片能够正常运行, 在css中的图片不能正常运行
例如: 打包之后的路径是 images/lnj.jpg
      那么在html中, 会去html文件所在路径下找images,正好能找到所以不报错
      但是在css中,  会去css文件所在路径下找images, 找不到所以报错

|---bundle
       |---css
            |---index.css
       |---js
            |---index.js
       |---images
            |---lnj.jpg
       |---index.html

2.解决方案
在开发阶段将publicPath设置为dev-server服务器地址
在上线阶段将publicPath设置为线上服务器地址
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function c(v,r){return n(),i("div",null,a)}const t=e(l,[["render",c],["__file","37图片路径问题.html.vue"]]);export{t as default};
