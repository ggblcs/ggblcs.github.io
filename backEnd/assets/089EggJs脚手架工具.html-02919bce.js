import{_ as n,p as e,q as s,a1 as a}from"./framework-96b046e1.js";const i={},d=a(`<h1 id="_089-eggjs脚手架工具" tabindex="-1"><a class="header-anchor" href="#_089-eggjs脚手架工具" aria-hidden="true">#</a> 089 EggJs脚手架工具</h1><p>安装脚手架：在npmjs中搜索<code>egg-init</code>包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> egg-init <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init egg --type-simple 
<span class="token comment"># simple也可为typescript意思是使用ts语言</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装相关依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.如何通过EggJS的脚手架来创建Egg项目
1.1在全局安装脚手架工具  npm i egg-init -g
1.2新建一个项目文件夹, 在这个文件夹中执行 npm init egg --type=simple
1.3执行初始化指令之后全程回车(也可以输入内容  项目名称/项目描述/项目作者)
1.4进入项目文件夹, 执行 npm install 安装相关的依赖
1.5可以通过 npm run dev / npm run test / npm run start运行项目
run dev    在开发模式下运行
run test   在调试模式下运行
run start  在上线环境中运行
* */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[d];function c(r,t){return e(),s("div",null,l)}const p=n(i,[["render",c],["__file","089EggJs脚手架工具.html.vue"]]);export{p as default};
