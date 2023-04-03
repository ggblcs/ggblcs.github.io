import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_14-mongodb-复制集" tabindex="-1"><a class="header-anchor" href="#_14-mongodb-复制集" aria-hidden="true">#</a> 14 -MongoDB-复制集</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.MongoDB高可用性
- 如果所有用户都从同一台MongoDB服务器上读写数据
  那么如果这台MongoDB服务器宕机了, 用户就不能进行读写了
- 如果我们有多台MongoDB服务器, 并且每台服务器中存储的内容都相同
  那么即使有一台服务器宕机了, 用户依然可以进行读写数据, 因为用户还可以继续使用其它保存了相同内容的服务器
- 以上这种特点, 我们就称之为&#39;高可用性&#39;

2.MongoDB数据安全性
- 如果所有数据都保存在同一台MongoDB服务器上
  那么如果这台MongoDB服务器坏了, 那么很有可能会导致数据丢失
- 如果我们有多台MongoDB服务器, 并且每台服务器中存储的内容都相同
  那么即使有一台服务器坏了, 那么依然不会导致数据丢失, 因为我们还有其它保存了相同内容的服务器
- 以上这种特点, 我们就称之为&#39;数据的安全性&#39;

3.MongoDB数据分流
- 如果所有用户都从同一台MongoDB服务器上读写数据
  那么由于服务器的性能限制和网络传输速度的限制
  会导致同一时刻用户量较多时, 服务器负荷增大, 数据处理速度变慢的问题
  会导致由于用户距离服务器较远, 网络传输时间变长, 响应速度变慢的问题
- 如果我们有多台MongoDB服务器, 并且每台服务器中存储的内容都相同, 并且安放到了不同的地区
  那么我们可以采用就近原则返回数据, 提升网络的传输速度
  那么我们可以采用请求分流, 降低每台服务器负荷, 提升数据处理速度
- 以上这种特点, 我们就称之为&#39;数据分流&#39;

4.MongoDB复制集
- 在MongoDB中我们可以通过复制集来实现如上的功能
- 复制集就是使用多台保存了相同内容的MongoDB服务器来组成一个数据库集群
  这个数据库集群中的每一台MongoDB服务我们称之为一个节点
--&gt;</span>
<span class="token comment">&lt;!--
1.MongoDB复制集特点
- 复制集中必须有一个主节点
    + 主节点主要负责写入数据和读取
- 复制集中除了主节点以外的节点我们称之为&#39;副节点&#39;
    + 副节点默认情况下只能读取数据, 不能写入数据
    + 副节点主要负责从主节点不断复制数据
- 复制集中所有的节点都会不断的相互发送心跳请求
    + 心跳请求的目的是相互检查节点的健康程度(是否发生故障)
    + 默认情况下每个2秒发送一次心跳请求
    + 默认情况下如果10秒没有收到某一个节点心跳请求, 系统就会认定为超时
- 复制集中节点的个数是有限制的
    + 每个复制集中最多只能有50个节点
    + 由于节点会发送心跳请求(消耗性能), 所以并不是节点越多越好

2.复制集选举
- 复制集最大的特点之一就是高可用性,
  但是在复制集中只有一个主节点, 只有主节点可以读写
  那么如果主节点宕机了, 也就意味着用户只能读取数据, 不能写入数据了
- 复制集中的主节点是通过选举出来的, 也就是一旦当前主节点宕机了
  MongoDB会通过自动选举的方式, 将其它的副节点设置为主节点
- 正式因为复制集的这个特点, 大大的保证了数据库的高可用性
--&gt;</span>
<span class="token comment">&lt;!--
1.选举规则
- 一旦发现主节点没有响应/发送心跳请求, 那么副节点就会认为主节点挂了
- 一旦发现主节点挂了, 任意一个副节点都可以发起选举
- (发起选举的节点我们称之为候选节点, 每一个节点内部都有一个选举计数器)
- 发起选举的节点会给自己先投一票, 然后将自己的票数依次发送给其它节点
- 其它节点收到投票请求后,会先利用发送过来的票数同步自己计数器的票数
  然后再对比自己的数据和候选节点的数据哪个更完整
  如果自己的更完整, 那么会投出反对票
  如果候选节点的更完整, 那么会投出赞同票
- 最后如果超过半数的节点投出赞同票, 那么候选节点就会变成主节点
- 最后如果没有超过半数节点投出赞同票, 那么其它节点会重新发起选举, 重复上述过程

2.选举注意点
- 一个复制集中最多只能有7个投票节点
- 如果某个节点没有返回投票结果, 那么默认就是不赞同
    + 挂掉的节点不会返回结果
- 因为选举需要超过半数节点同意,才会将副节点变成主节点
  所以在企业开发中一个复制集至少需要3个节点
  否则一旦主节点挂了, 永远无法完成投票
- 因为选举需要超过半数节点同意,才会将副节点变成主节点
  所以在企业开发中节点的个数最好是奇数

3.触发选举的其它条件
- 初始化复制集时, 会自动触发选举
- 有新节点加入时, 会自动触发选举
- 当前主节点挂掉时, 会自动触发选举
--&gt;</span>
<span class="token comment">&lt;!--
1.初始化同步
- 将一个新的节点加入到复制集中时, 就需要进行初始化同步
- 初始化同步会先情况自己所有的内容, 保证将来自己和主节点一模一样
- 初始化同步会将主节点中现有所有的&#39;数据库&#39;,&#39;集合&#39;,&#39;文档&#39;,&#39;索引&#39;全部拷贝过来
- 但是在拷贝的过程中主节点仍然可能会做一些其它操作, 新增一些其它的数据等
  所以仅仅做一次大型的拷贝是不能保证副节点和主节点一模一样的

2.同步写库记录
- 每个节点中都有一个local数据库, 这个数据库中有一个oplog的集合
  这个集合就是专门用来保存数据库的操作记录的(写库记录)
- 做完初始化同步之后, 副节点就会定期从主节点中拷贝写库记录
  将写库记录保存到自己的local数据库中, 然后执行写库记录中的操作
  从而使得自己的内容和主节点的内容保持高度一致

3.写库记录注意点
- 写库记录是可以被多次应用的, 但是多次应用和一次应用的效果是一样的
  也就是有效的防止了多次应用造成的主节点和副节点内容不一致问题
- 应用写库记录的时候是通过多线程分批次应用的, 这样大大提高了引用的效率和性能
--&gt;</span>
<span class="token comment">&lt;!--
1.投票节点
- 投票节点就是不保存任何数据, 只参与投票的节点
- 无论是初始化同步, 还是同步写库记录, 其实都会消耗服务器性能
  所以在企业开发中并不是副节点越多越好
  所以在保证高可用性、数据库安全性的同时, 为了提升服务器的性能
  我们还可以添加投票节点
- 投票节点不保存任何数据, 所以就不存在同步数据带来的性能消耗问题
- 投票节点可以投票, 就保证了不会出现副节点过少无法完成投票问题
--&gt;</span>
<span class="token comment">&lt;!--
1.MongoDB复制集搭建
https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.6.zip
1.1解压MongoDB安装包
1.2在安装目录下新建data/conf/log文件夹
1.3在conf文件夹下新建mongo.config
1.4在mongo.config中配置如下内容
# Where and how to store data.
storage:
  dbPath: D:\\Developer\\MongoDB666\\mongodb27020\\data
  journal:
    enabled: true
# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path:  D:\\Developer\\MongoDB666\\mongodb27020\\log\\mongo.log
# network interfaces
net:
  port: 27020
  bindIp: 127.0.0.1
1.5注册配置MongoDB
1.5.1注册服务
mongod --config D:\\Developer\\MongoDB666\\mongodb27018\\bin\\mongo.config --serviceName &quot;MongoDB27018&quot; --serviceDisplayName &quot;MongoDB27018&quot; --replSet &quot;it666&quot; --install
mongod --config D:\\Developer\\MongoDB666\\mongodb27019\\bin\\mongo.config --serviceName &quot;MongoDB27019&quot; --serviceDisplayName &quot;MongoDB27019&quot; --replSet &quot;it666&quot; --install
mongod --config D:\\Developer\\MongoDB666\\mongodb27020\\bin\\mongo.config --serviceName &quot;MongoDB27020&quot; --serviceDisplayName &quot;MongoDB27020&quot; --replSet &quot;it666&quot; --install
1.5.2手动启动服务
1.5.3测试连接
mongo --host 127.0.0.1 --port 27018
mongo --host 127.0.0.1 --port 27019
mongo --host 127.0.0.1 --port 27020
1.6初始化复制集
rs.initiate({
_id: &#39;it666&#39;,
members: [
{_id: 0, host: &#39;127.0.0.1:27018&#39;},
{_id: 1, host: &#39;127.0.0.1:27019&#39;},
{_id: 2, host: &#39;127.0.0.1:27020&#39;}]
})
1.7在主节点写入读取
1.8在副节点读取rs.slaveOk()
--&gt;</span>
<span class="token comment">&lt;!--
_id	        整数	节点的唯一标识。
host	    字符串	节点的IP地址，包含端口号。
arbiterOnly	布尔值	是否为投票节点，默认是false。是设置投票(选举)节点有关的参数
priority	整数	选举为主节点的权值，默认是1，范围0-1000。
hidden	    布尔值	是否隐藏，默认false，是设置隐藏节点有关的参数。
votes	    整数	投票数，默认为1，取值是0或1，是设置”投票“节点有关的参数。
slaveDelay	整数	延时复制，是设置延时节点有关的参数。单位秒(s)
--&gt;</span>







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return i(),e("div",null,v)}const o=n(l,[["render",a],["__file","14-MongoDB-复制集.html.vue"]]);export{o as default};
