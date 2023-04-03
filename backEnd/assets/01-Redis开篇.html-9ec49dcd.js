import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_01-redis开篇" tabindex="-1"><a class="header-anchor" href="#_01-redis开篇" aria-hidden="true">#</a> 01 -Redis开篇</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Redis?
- Remote Dictionary Server(远程字典服务器)
- Redis是一个&#39;开源的&#39;使用&#39;C语言&#39;编写的数据库
- Redis和MongoDB一样是NoSQL类型的数据库
  不同的是MongoDB存储的是文档, 而Redis存储的是键值对(Key-Value)

2.Redis特点
- 速度快
    + Redis默认情况下将数据存储在内存中
    + 读取速度能达到10万次/s左右, 写入能到到8万次/秒左右
- 支持数据的持久化
    + Redis默认情况下将数据存储在内存中
    + 但是也可以将内存中的数据保存到磁盘中
- 支持多种数据结构
    + Redis是通过key-value形式存储数据的
    + value不仅支持常见的字符串类型,整型以外
    + 同时还提供了list, set ,zset, hash等数据结构的存储
- 定制性强
    + Redis虽然强大, 但是它是开源免费的
    + Redis第一个版本代码在23000行左右
    + Redis当前版本代码在50000行左右
- 支持分布式
    + 和MongoDB一样, Redis是支持主从复制, 支持分布式存储的
- ... ...

3.Redis场景应用场景
- 缓存系统
    + 由于Redis是将数据存储在内存中的, 所以我们可以使用Redis来实现内存缓存
    + 对于经常会被查询，但是不经常被修改或者删除的数据, 存储到Redis中
- 排行榜
    + 由于Redis支持集合（Set）和有序集合（Sorted Set）
      所以是的我们在实现排行榜的时候变的非常简单
- 计数器
    + 由于Redis提供了incr/decr指令, 使得我们在实现计数器时非常简单
    + 转发数/评论数/播放数/访问数/... ...
- 存储社交关系
    + 由于Redis支持存储集合类型数据, 由于社交关系不会经常发生改变
      所以很多社交网站会使用Redis来存储社交关系
- 消息队列系统
    + Redis天生支持发布订阅模式, 所以天生就是实现消息队列系统的材料
- ... ...
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis下载和安装
https://github.com/MicrosoftArchive/redis/releases
全程下一步

redis.windows.conf: 配置文件，将redis作为普通软件使用的配置，命令行关闭则redis关闭
redis.windows-service.conf：配置文件，将redis作为系统服务的配置，用以区别开两种不同的使用方式

1.配置文件修改
redis.windows-service.conf
- 绑定IP
bind 127.0.0.1
- 绑定端口号
port 6379
- 数据库文件
dbfilename dump.rdb
- 数据文件存储路径
dir ./
- 默认数据库
databases 16
- 日志文件
logfile &quot;server_log.txt&quot;
- 主从复制(类似于双机备份)
slaveof

http://www.runoob.com/redis/redis-conf.html
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function r(a,c){return n(),e("div",null,v)}const u=i(d,[["render",r],["__file","01-Redis开篇.html.vue"]]);export{u as default};
