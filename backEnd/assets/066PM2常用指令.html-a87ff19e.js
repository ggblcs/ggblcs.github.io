import{_ as e,p as a,q as n,a1 as i}from"./framework-96b046e1.js";const d={},p=i(`<h1 id="_066-pm2常用指令" tabindex="-1"><a class="header-anchor" href="#_066-pm2常用指令" aria-hidden="true">#</a> 066 PM2常用指令</h1><p>特点：PM2启动服务不占用终端，启动服务后，终端窗口还能继续输入执行其他命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.常用命令
pm2 start app.js|config     // 启动应用程序
pm2 list                    // 列出启动的所有的应用程序
pm2 restart appName|appId   // 重启应用程序
pm2 info appName|appId      // 查看应用程序详细信息
pm2 log appName|appId       // 显示指定应用程序的日志
pm2 monit appName|appId     // 监控应用程序
pm2 stop appName|appId      // 停止应用程序
pm2 delete appName|appId    // 关闭并删除所有应用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是通过pm2启动的应用，则<code>console.log</code>输出的内容会被记录为自定义日志。</p>`,4),s=[p];function l(t,c){return a(),n("div",null,s)}const r=e(d,[["render",l],["__file","066PM2常用指令.html.vue"]]);export{r as default};
