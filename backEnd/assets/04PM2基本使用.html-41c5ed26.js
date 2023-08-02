import{_ as e,p as n,q as a,a1 as i}from"./framework-96b046e1.js";const s={},d=i(`<h1 id="_04-pm2基本使用" tabindex="-1"><a class="header-anchor" href="#_04-pm2基本使用" aria-hidden="true">#</a> 04 PM2基本使用</h1><h2 id="_1-pm2安装" tabindex="-1"><a class="header-anchor" href="#_1-pm2安装" aria-hidden="true">#</a> 1. PM2安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-启动" tabindex="-1"><a class="header-anchor" href="#_2-启动" aria-hidden="true">#</a> 2. 启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pm2 start app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，可以指定package.json文件命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-teacher" tabindex="-1"><a class="header-anchor" href="#_3-teacher" aria-hidden="true">#</a> 3. teacher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.如何上线Node编写的项目?
上线项目需要考虑的几个问题
1.1 服务稳定性, 不会因为程序的某个错误或异常导致项目停止服务
1.2 线上日志记录, 除了记录访问日志以外, 我们还需要记录错误日志和自定义日志
1.3 充分利用服务器资源, Node是单线程的, 服务器是多核的, 一台服务器只运行一个Node程序太浪费资源

2.如何解决上述问题?
通过PM2
2.1 PM2的进程守护可以在程序崩溃后自动重启
2.2 PM2自带日志记录的功能, 可以很方便的记录错误日志和自定义日志
2.3 PM2能够启动多个Node进程, 充分利用服务器资源

3.PM2使用
npm install pm2 -g
pm2 --version
pm2 start app.js
* */</span>
<span class="token comment">/*
1.常用命令
pm2 start app.js|config     // 启动应用程序
pm2 list                    // 列出启动的所有的应用程序
pm2 restart appName|appId   // 重启应用程序
pm2 info appName|appId      // 查看应用程序详细信息
pm2 log appName|appId       // 显示指定应用程序的日志
pm2 monit appName|appId     // 监控应用程序
pm2 stop appName|appId      // 停止应用程序
pm2 delete appName|appId    // 关闭并删除所有应用
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[d];function r(c,v){return n(),a("div",null,l)}const t=e(s,[["render",r],["__file","04PM2基本使用.html.vue"]]);export{t as default};
