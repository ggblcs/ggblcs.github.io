import{_ as e,p as i,q as l,a1 as d}from"./framework-96b046e1.js";const n={},a=d(`<h1 id="_34-html-withimg-loader" tabindex="-1"><a class="header-anchor" href="#_34-html-withimg-loader" aria-hidden="true">#</a> 34 html-withimg-loader</h1><p>搭配html-plugin</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是html-withimg-loader?
我们通过file-loader或者url-loader已经可以将JS或者CSS中用到的图片打包到指定目录中了(既能打包js引入的图片，也能打包css背景引入的图片)
但是file-loader或者url-loader并不能将HTML中用到的图片打包到指定目录中
所以此时我们就需要再借助一个名称叫做&quot;html-withimg-loader&quot;的加载器来实现HTML中图片的打包

2.html-withimg-loader使用
https://www.npmjs.com/package/html-withimg-loader
2.1安装html-withimg-loader
npm install html-withimg-loader --save
2.2配置html-withimg-loader
{
    test: /\\.(htm|html)$/i,
    loader: &#39;html-withimg-loader&#39;
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错：路径变为一个对象<code>{default: &#39;xxx&#39;}</code></p><p>解决：<code>file-loader</code>修改<code>esModule: false</code></p>`,5),s=[a];function t(m,r){return i(),l("div",null,s)}const o=e(n,[["render",t],["__file","34html-withimg-loader.html.vue"]]);export{o as default};
