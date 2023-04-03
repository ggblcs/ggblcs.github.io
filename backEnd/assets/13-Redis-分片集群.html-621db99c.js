import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_13-redis-分片集群" tabindex="-1"><a class="header-anchor" href="#_13-redis-分片集群" aria-hidden="true">#</a> 13 -Redis-分片集群</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.已经解决的问题
主从复制+Redis-Sentinel解决了&#39;高可用性&#39;、&#39;数据安全性&#39;、&#39;数据分流&#39;的问题
但是由于在主从复制中每台服务器保存的都是相同的内容, 所以还没有解决服务器的容量问题

2.如何解决服务器容量问题?
通过Redis Cluster来解决

3.什么是Redis Cluster?
- Redis Cluster可以将数据库中的数据拆分成多份, 分布式的保存到多台电脑上
- 分布式存储就是将一份完整的数据拆分成多份小的数据存储到不同的服务器上
- 既然需要将一份完整的数据拆分成多份小的数据, 那么首先我们需要关注如何拆分
--&gt;</span>
<span class="token comment">&lt;!--
1.分布式存储中常见的分片规则
2.顺序分片
                 |--------------|
                 |     1~100    |
                 |--------------|

|--------------| |--------------| |--------------|
|      1~33    | |     34~66    | |    67~100    |
|--------------| |--------------| |--------------|
特点:
1.支持顺序访问
2.键值和业务相关
3.可能会出现数据倾斜

3.哈希分片
                 |--------------|
                 |     1~100    |
                 |--------------|
                   hash(key)%3
|--------------| |--------------| |--------------|
|  3,6,9...99  | |  1,4,7...100 | |  2,5,8...98  |
|--------------| |--------------| |--------------|
特点:
1.数据分散度高
2.支持批量操作
1.不支持顺序访问
2.键值和业务无关
--&gt;</span>
<span class="token comment">&lt;!--
1.三种常见的哈希分片
- 节点取余
- 一致性哈希
- 虚拟槽哈希

2.节点取余
- hash(key)%N
                 |--------------|
                 |     1~100    |
                 |--------------|
                   hash(key)%3
|--------------| |--------------| |--------------|
|  3,6,9...99  | |  1,4,7...100 | |  2,5,8...98  |
|--------------| |--------------| |--------------|

                         |--------------|
                         |     1~100    |
                         |--------------|
                           hash(key)%4
|--------------| |--------------| |--------------| |--------------|
|  4,8,...100  | |   1,5...97   | |   2,6...98   | |   3,7...99   |
|--------------| |--------------| |--------------| |--------------|

- 节点取余存在的问题
数据迁移量较大
例如: 1~10, 3个节点
第0个节点: 3, 6, 9
第1个节点: 1, 4, 7, 10
第2个节点: 2, 5, 8

第0个节点: 4, 8
第1个节点: 1, 5, 9
第2个节点: 2, 6, 10
第3个节点: 3, 7

- 节点取余推荐扩容方式
翻倍扩容
例如: 1~10, 3个节点
第0个节点: 3, 6, 9
第1个节点: 1, 4, 7, 10
第2个节点: 2, 5, 8

第0个节点: 6
第1个节点: 1 7
第2个节点: 2 8
第3个节点: 3 9
第4个节点: 4 10
第5个节点: 5
--&gt;</span>
<span class="token comment">&lt;!--
1.一致性哈希
- 一致性Hash算法将整个哈希值的空间组织成一个0~2(32)次方的虚拟的圆环
- 然后再求出分片服务器的Hash值, 根据分片服务器的Hash值将服务器配置到虚拟的圆环对应的位置
- 然后再求出需要保存数据键的Hash值, 根据求出的值在虚拟的圆环顺时针方向上存入对应的分片服务器中
- 如果保存数据键的Hash值超过2(32)次方，就会保存到第一台分片服务器上

上图
--&gt;</span>
<span class="token comment">&lt;!--
1.虚拟槽哈希
- Redis Cluster采用的是&#39;虚拟槽哈希&#39;的方式来分片
- 在Redis Cluster中一共有0~16383个虚拟槽, 我们可以把这些槽分配给对应的分片服务器
- 在存储数据的时候通过 slot = CRC16(key) &amp; 16383 计算出对应数据键的槽值,
  然后将该值保存到对应槽的分片服务器上

上图
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis Cluster完整结构
- 在Redis Cluster必须至少有6台服务器
- 在Redis Cluster每一台分片服务器都必须是一个主从结构
- 在Redis Cluster中每一台主分片服务器都是可读可写的
- 由于每个分片都是主从复制结构, 所以就保证了数据的&#39;安全性&#39;和&#39;可分流性&#39;
- 但是Redis Cluster的&#39;高可用性&#39;并不依赖于Redis Sentinel,
  在Redis Cluster中它自己实现了Redis Sentinel高可用相关功能
- 由于每一台主分片服务器都是可读可写的，
  所以为了保证数据能够正确的写入到对应槽值的服务器中
  为了保证能够正确的从对应的服务器中取出对应槽的数据
  所有主分片服务器之间都是互通的（也就是知道其它分片服务器的存储，和保存槽的范围）
- 在设置或获取数据时
  + 如果当前访问的分片服务器中保存了对应的数据, 就直接返回对应的数据
  + 如果当前访问的分片服务器中没有保存对应的数据, 由于分片服务器之间是相互通讯了
    那么就会返回保存对应数据的那台分片服务器的地址给用户,
    用户可以根据返回的地址到对应的分片服务器上获取对应的数据
--&gt;</span>
<span class="token comment">&lt;!--
https://redis.io/topics/cluster-tutorial
1.为Cluster启动6台Redis服务器
1.1准备6台Redis服务器
1.2修改服务器配置
port 7000
daemonize yes                        #以守护进程方式运行
cluster-enabled yes                  #表示这是一个Cluster节点
cluster-config-file nodes-7000.conf  #Cluster信息配置文件, 内容会自动生成
cluster-require-full-coverage no     #是否集群中所有节点都能提供服务, 才对外提供服务
cluster-node-timeout 15000           #故障转移或者节点超时时间
2.3注册服务器进程
redis-server.exe --service-install redis.windows-service.conf  --service-name Redis7000
1.4启动相关Redis服务器
1.5测试读写
--&gt;</span>
<span class="token comment">&lt;!--
1.让6台Redis服务器相互握手
redis-cli -h 127.0.0.1 -p 7000 cluster nodes
redis-cli -h 127.0.0.1 -p 7000 cluster meet 127.0.0.1 7001
redis-cli -h 127.0.0.1 -p 7000 cluster meet 127.0.0.1 7002
redis-cli -h 127.0.0.1 -p 7000 cluster meet 127.0.0.1 7003
redis-cli -h 127.0.0.1 -p 7000 cluster meet 127.0.0.1 7004
redis-cli -h 127.0.0.1 -p 7000 cluster meet 127.0.0.1 7005

2.测试读写

- 认识新朋友原理
    + 赵六认识张三, 张三认识李四和王五, 那么通过张三就可以让赵六、李四、王五相互认识
--&gt;</span>
<span class="token comment">&lt;!--
1.给分片服务器分配槽
redis-cli -h 127.0.0.1 -p 7000 cluster addslots 0
... ...
redis-cli -h 127.0.0.1 -p 7001 cluster addslots 5462
... ...
redis-cli -h 127.0.0.1 -p 7002 cluster addslots 16383


redis-cli -h 127.0.0.1 -p 7000 cluster slots

2.分配主从关系
redis-cli -h 127.0.0.1 -p 7000 cluster nodes
redis-cli -h 127.0.0.1 -p 7003 cluster replicate  7000node-id
redis-cli -h 127.0.0.1 -p 7004 cluster replicate  7001node-id
redis-cli -h 127.0.0.1 -p 7005 cluster replicate  7002node-id

3.测试读写
4.测试自动保证高可用性
--&gt;</span>
<span class="token comment">&lt;!--
1.利用Redis官方提供的Ruby脚本安装Redis cluster
1.0配置并启动6台服务器
1.1下载Ruby: http://railsinstaller.org/en
1.2安装Ruby
1.3下载RubyGems: https://rubygems.org/pages/download
1.3在RubyGems: ruby setup.rb
1.5通过RubyGems安装Redis: gem install redis
1.6下载redis-trib.rb文件：https://github.com/MicrosoftArchive/redis/releases
1.7在终端执行redis-trib.rb创建Redis Cluster
ruby redis-trib.rb create --replicas 1 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(c,a){return n(),e("div",null,v)}const m=i(l,[["render",r],["__file","13-Redis-分片集群.html.vue"]]);export{m as default};
