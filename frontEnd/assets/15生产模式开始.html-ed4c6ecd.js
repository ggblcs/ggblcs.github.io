import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const d={},a=s(`<h1 id="_15-生产模式开始" tabindex="-1"><a class="header-anchor" href="#_15-生产模式开始" aria-hidden="true">#</a> 15 生产模式开始</h1><p>优化代码运行性能，代码打包性能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>文件目录：
cmd命令，
tree 
tree /f（查看所有） 
tree<span class="token operator">&gt;</span>file.txt 生成目录并保存文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>└─project 
    │  babel.config.js
    │  eslintrc.js
    │  package.json
    │  
    ├─config (webpack配置文件目录)
    │      webpack.dev.js  (开发模式配置文件)
    │      webpack.prod.js  (生产模式配置文件)
    │      
    ├─node_modules
    ├─public  (项目html文件)
    │      index.html
    │      
    └─src  (项目源码目录，处了html都在src)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[a];function c(r,v){return n(),i("div",null,l)}const u=e(d,[["render",c],["__file","15生产模式开始.html.vue"]]);export{u as default};
