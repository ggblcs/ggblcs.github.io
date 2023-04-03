import{_ as t,M as e,p as o,q as c,R as n,t as a,N as p,a1 as l}from"./framework-96b046e1.js";const i={},u=n("h1",{id:"_04-字体图标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-字体图标","aria-hidden":"true"},"#"),a(" 04 字体图标")],-1),r=n("h2",{id:"_0-uniapp打包为app图标不显示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0-uniapp打包为app图标不显示","aria-hidden":"true"},"#"),a(" 0 Uniapp打包为App图标不显示")],-1),d=n("p",null,"如果是Uniapp打包为App，则不显示的情况会有提示",-1),h=n("blockquote",null,[n("p",null,"App平台 v3 模式暂不支持在 js 文件中引用“./static/iconfont/iconfont.css“ 请改在 style 内引用")],-1),_=n("p",null,"解决方案",-1),f={href:"https://so.csdn.net/so/search?from=pc_blog_highlight&q=vue",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[a("步骤二（修改iconfont.css）"),n("code",null,"url('@/static/iconfont/iconfont.woff2?t=1639642439463') format('woff2'),"),a("，重点在"),n("code",null,"@/static/iconfont/i")],-1),m=l(`<p>转载链接：https://blog.csdn.net/j123450/article/details/119570259</p><p>阿里云图标库</p><h2 id="_1-font-class方式使用" tabindex="-1"><a class="header-anchor" href="#_1-font-class方式使用" aria-hidden="true">#</a> 1 font-class方式使用</h2><p>这是最常用的方式。</p><p>找好图标添加到项目，下载后把那一堆文件都拷贝到font目录中</p><p>（番茄树拷贝了<code>iconfont.css</code>和<code>iconfont.ttf</code>两个文件，并改名wxss）。</p><p>使用时仅需引入css文件</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./iconfont.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后添加类名</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconfont icon-xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在小程序中就不能把下载的js文件拷贝到font目录中了，否则报错，里面有语句<code>getElementByTagName</code>。</p>`,11);function g(v,x){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,r,d,h,_,n("ol",null,[n("li",null,[a("步骤一（在app."),n("a",f,[a("vue"),p(s)]),a(" 的style里面引用，不要在main.js）")]),k]),m])}const q=t(i,[["render",g],["__file","04字体图标.html.vue"]]);export{q as default};
