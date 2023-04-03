import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const l={},t=e(`<h1 id="_05-file-loader" tabindex="-1"><a class="header-anchor" href="#_05-file-loader" aria-hidden="true">#</a> 05 file-loader</h1><p>版本 webpack@4.41.0 webpack-cli@3.3.9</p><p><code>file-loader</code>只学了打包图片和字体（格式为eot|svg|ttf|woff|woff2）。</p><h2 id="_0-关于loader的补充说明" tabindex="-1"><a class="header-anchor" href="#_0-关于loader的补充说明" aria-hidden="true">#</a> 0 关于loader的补充说明</h2><p>loader使用时不需要require引入，但plugin需要。并且loader只能打包文件，处理文件，但plugin不只打包文件，更能在webpack不同生命周期广播出来的事件对文件各种操作。</p><p>tip: 对于loader，打包前只要require的路径（写代码的路径，而不是打包后的路径）是正确的，那么无论打包文件路径在webpack怎么配置，你都不必担心文件路径找不到的问题。webpack会帮你处理好一切。</p><h2 id="_1-提炼" tabindex="-1"><a class="header-anchor" href="#_1-提炼" aria-hidden="true">#</a> 1 提炼</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//3.1安装file-loader</span>
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev file<span class="token operator">-</span>loader
<span class="token comment">//3.2在webpack.config.js中配置file-loader</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          <span class="token comment">// 定义正则表达式</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// 使用哪些loader</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-踩坑" tabindex="-1"><a class="header-anchor" href="#_2-踩坑" aria-hidden="true">#</a> 2 踩坑</h2><p>事实上，配置后图片不显示，并且浏览器会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[object%20Module]:1 GET file:///C:/Users/THINKPAD/Desktop/webpack-studay/webpack03/[object%20Module] net::ERR_FILE_NOT_FOUND
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方案一：</strong></p><p>解决方案是<code>esModule:false</code>关闭ES模块语法。关闭后<code>let img = require(&#39;./xx.png&#39;)</code>输出的<code>console.log(img)</code>才与老师一样，输出的是图片路径。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">10240</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;[name].[ext]&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决方案二：</strong></p><p>默认输出的<code>console.log(img)</code>是一个对象，对象中有<code>default</code>属性，<code>default</code>属性中是一个路径。那就使用default属性就可以了。<code>oImg.src = img.default</code>(<code>oImg</code>是document的img元素)。</p><h2 id="_3-老师的原文" tabindex="-1"><a class="header-anchor" href="#_3-老师的原文" aria-hidden="true">#</a> 3 老师的原文</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>05-webpack-file-loader<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
1.什么是loader?
webapck的本质是一个模块打包工具, 所以webpack默认只能处理JS文件,不能处理其他文件,
因为其他文件中没有模块的概念, 但是在企业开发中我们除了需要对JS进行打包以外,
还有可能需要对图片/CSS等进行打包, 所以为了能够让webpack能够对其它的文件类型进行打包,
在打包之前就必须将其它类型文件转换为webpack能够识别处理的模块,
用于将其它类型文件转换为webpack能够识别处理模块的工具我们就称之为loader

2.如何使用loader
webpack中的loader都是用NodeJS编写的, 但是在企业开发中我们完全没有必要自己编写,
因为已经有众多大神帮我们编写好了企业中常用的loader, 我们只需要安装、配置、使用即可

2.1通过npm安装对应的loader
2.2按照loader作者的要求在webpack进行相关配置
2.3使用配置好的loader

3.fileloader使用
https://www.webpackjs.com/loaders/file-loader/
3.1安装file-loader
npm install --save-dev file-loader
3.2在webpack.config.js中配置file-loader
module: {
    rules: [
      {
        test: /\\.(png|jpg|gif)$/,
        use: [
          {
            loader: &#39;file-loader&#39;,
            options: {}
          }
        ]
      }
    ]
  }
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[t];function i(o,c){return s(),a("div",null,p)}const d=n(l,[["render",i],["__file","05file-loader.html.vue"]]);export{d as default};
