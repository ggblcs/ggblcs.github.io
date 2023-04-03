import{_ as n,p as a,q as s,a1 as e}from"./framework-96b046e1.js";const l="/frontEnd/assets/npminstall过程-500d1adf.jpg",i={},c=e(`<h1 id="_04-npm-install" tabindex="-1"><a class="header-anchor" href="#_04-npm-install" aria-hidden="true">#</a> 04 npm-Install</h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> <span class="token comment"># 简写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> xxx // 局部安装
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-g</span> // 全局安装并配置环境变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认安装开发和生产依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> xxx
<span class="token function">npm</span> i axios 
<span class="token comment"># 开发依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> xxx --save-dev
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-D</span>
<span class="token function">npm</span> i xxx <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>全局安装一般安装一个工具包否则没有意义，比如全局安装axios，配置一下环境变量有什么意义。</p></blockquote><blockquote><p>指定版本用@</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
有时安装有警告
npm warn config global \`--global\`, \`--local\` are depredaced Use \`--location=global\`
意思是快过期了，建议用
npm install xxx --location=global 替代
npm install xxx -g
但没事，直接忽略
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-原理" tabindex="-1"><a class="header-anchor" href="#_2-原理" aria-hidden="true">#</a> 2 原理</h2><p><img src="`+l+'" alt="npminstall过程"></p>',10),t=[c];function d(o,p){return a(),s("div",null,t)}const m=n(i,[["render",d],["__file","04npm-Install.html.vue"]]);export{m as default};
