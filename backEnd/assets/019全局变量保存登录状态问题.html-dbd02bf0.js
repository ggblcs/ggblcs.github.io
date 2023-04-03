import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_019-全局变量保存登录状态问题" tabindex="-1"><a class="header-anchor" href="#_019-全局变量保存登录状态问题" aria-hidden="true">#</a> 019 全局变量保存登录状态问题</h1><p>存在问题，指出新方向--&gt;Redis</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.当前服务端存储存在的问题
- 操作系统会给每一个应用程序分配一块存储空间,
  在32位操作系统上,这块空间的大小是1.6G左右
  在64位操作系统上,这块空间的大小是3G左右
    + 当前的Session是一个全局变量, 全局变量使用的就是当前应用程序分配到的存储空间
      所以当前的这种服务端存储登录状态的方式也会出&#39;现存不下&#39;的情况
    + 当前的Session是一个全局变量, 全局变量的特点是应用程序启动时分配存储空间,
      应用程序关闭时释放存储空间, 所以全局变量中存储的数据会随着服务端应用程序的重启而消失
      而在企业开发中, 我们每次对项目进行更新都需要重启, 运维人员日常运维也可能会经常重启
      这样就会导致频繁的要求用户登录, 带来&#39;不好的用户体验&#39;
- 现在的服务器性能都比较优越, 内存比较大, CPU也是多核多任务的,
  所以如果一台机器上如果只运行一个NodeJS进程会对资源造成极大的浪费
  所以在企业开发中我们会在一台机器上跑多个NodeJS进程,来提升效率和使用率
  但是每个进程之间的内存是相互隔离的,所以就会导致在登录状态&#39;无法共享&#39;

2.如何解决当前Session的问题?
- 要想解决当前Session的问题, 首先我们要知道Session有哪些特点
    + 数据量不会太大, 存储的都是一些常用信息
    + 访问频率极高, 对性能要求极高, 每次操作都会验证Session
    + 不害怕丢失, 丢失之后再次登录即可
- 如何满足如上特点的同时解决存在的问题?
    + Redis可以搭建集群突破内存限制
    + 只要Redis不重启数据就不会消失
    + 存储在Redis中的数据, 无论哪个NodeJS进程都可以访问
    + Redis性能极好, 速度极快
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function v(c,r){return n(),e("div",null,a)}const u=i(d,[["render",v],["__file","019全局变量保存登录状态问题.html.vue"]]);export{u as default};
