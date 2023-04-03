import{_ as n,p as e,q as s,a1 as i}from"./framework-96b046e1.js";const a={},l=i(`<h1 id="_062-cookie跨域问题" tabindex="-1"><a class="header-anchor" href="#_062-cookie跨域问题" aria-hidden="true">#</a> 062 Cookie跨域问题</h1><p>全局安装并使用http-server插件开启server服务（相当于服务器）网站。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要全局安装，否则我启动不了</span>
<span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> http-server
<span class="token comment"># 启动，进入需要启动的目录，3000是自己想要的端口号，-p就是端口号</span>
http-server <span class="token parameter variable">-p</span> <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cookie是不能跨域使用的，所以保存登录状态会有问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Cookie的跨域问题
Cookie是不能跨域使用的, 所以在前后端分离开发的时候, 我们当前的代码就会出现问题
例如:
前端地址: http://192.168.0.107:3001/login.html
后端地址: http://127.0.0.1:3000/api/user/test

2.什么是跨域?
https://www.it666.com:3000
http://www.it666.com:3000

协议/一级域名/二级域名/端口号 有一个不同就是跨域
由于3000端口和3001端口不同, 所以就是跨域
所以我们在3000端口设置的cookie3001是不能使用的
    我们在3001端口设置的cookie3000也是不能使用的

3.如何解决前后端分离Cookie的跨域问题?
通过Nginx反向代理
http://nginx.org/en/download.html
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function c(r,t){return e(),s("div",null,d)}const o=n(a,[["render",c],["__file","062Cookie跨域问题.html.vue"]]);export{o as default};
