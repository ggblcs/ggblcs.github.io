import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_12-事务" tabindex="-1"><a class="header-anchor" href="#_12-事务" aria-hidden="true">#</a> 12 -事务</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.事务基本概念
- MySQL中的事务主要用于处理容易出错的数据。
- 事务可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。
- 事务用来管理 insert,update,delete 语句
- MySQL中只有使用了 Innodb 数据库引擎的表才支持事务。
--&gt;</span>

<span class="token comment">&lt;!--
1.事物语法
开启事务: start transaction
提交事务: commit
回滚事务: rollback

示例一:
create table bank(
    id  int unsigned auto_increment primary key,
    cardid varchar(4),
    name   varchar(20),
    money int
);
insert into bank values (null, &#39;1001&#39;, &#39;zs&#39;, 1000), (null, &#39;1002&#39;, &#39;ls&#39;, 1000);
第一种: 先扣再增加
update bank set money=money-1000 where cardid=&#39;1002&#39;;
update bank set money=money+1000 where cardid=&#39;1001&#39;;
第二种: 先增加再扣
update bank set money=money+1000 where cardid=&#39;1001&#39;;
update bank set money=money-1000 where cardid=&#39;1002&#39;;

start transaction; // 开启事务
update bank set money=money-1000 where cardid=&#39;1002&#39;;
rollback; // 任务失败, 回滚到开启之前状态
update bank set money=money+1000 where cardid=&#39;1001&#39;;
commit; // 任务成功, 提交开启事务之后所有操作

注意点:
事务的本质是开启事务的时候拷贝一张一模一样的表
然后执行相关的操作都是在拷贝的这张表中做操作
如果失败了, 如果执行了rollback, 那么系统就会自动删除拷贝的这张表
所以失败了不会影响到原有的数据
如果成功了, 如果执行了commit, 那么系统就会自动利用拷贝表中最新的数据覆盖原有表中的数据
所以成功了会影响到原有的数据
--&gt;</span>

<span class="token comment">&lt;!--
1.事务回滚点
savepoint 回滚点名称
rollback to 回滚点名称

start transaction;
insert into bank values (null, &#39;1003&#39;, &#39;333&#39;, 33333);
savepoint abc;
insert into bank values (null, &#39;1003&#39;, &#39;444&#39;, 44444);
savepoint def;
insert into bank values (null, &#39;1003&#39;, &#39;555&#39;, 55555);
rollback to abc;
--&gt;</span>

<span class="token comment">&lt;!--
1.事务特点:
- 原子性(关注的是状态)：
事务开启后的所有操作，要么全部成功，要么全部失败，不可能出现部分成功的情况
事务执行过程中如果出错，哪怕我们不手动回滚, 系统也会自动帮我们回滚

- 一致性(关注数据可见性)：
事务开始前和结束后，数据库的完整性约束没有被破坏
例如 A向B转账，不可能A扣了钱，B却没收到

- 持久性：
事务完成后，事务对数据库的所有操作是永久的, 操作完成之后就不能再回滚

- 隔离性：
数据库允许多个并发事务同时对其数据进行读写和修改的能力，
隔离性可以防止多个事务并发时由于交叉执行而导致数据的不一致。
--&gt;</span>

<span class="token comment">&lt;!--
1.事务隔离级别
读未提交（read uncommitted）: 一个事务可以读取另一个未提交事务的数据
读提交（read committed）: 一个事务要等另一个事务提交后才能读取数据
可重复读（repeatable read）: 一个事务范围内多个相同的查询返回相同的结果
串行化（serializable）: 前面一个事务没有执行完后面一个事务不能执行
-------------------------------------------------------------------------------------------------
- 查看隔离级别:
    + 全局的: select @@global.transaction_isolation;
    + 当前会话的: select @@transaction_isolation;
- 设置隔离级别:
    + 全局的: set global transaction isolation level 级别名称;
    + 当前会话: set session transaction isolation level 级别名称;
-------------------------------------------------------------------------------------------------
--&gt;</span>
<span class="token comment">&lt;!--
- 脏读
能读取到其它事务没有提交的数据
示例:
A客户端:
set session transaction isolation level read uncommitted;
start transaction;
update bank set money=money-1000 where cardId=&#39;1002&#39;;
select * from bank;
B客户端:
set session transaction isolation level read uncommitted;
select * from bank;

- 解决办法(read committed)
A客户端:
set session transaction isolation level read committed;
start transaction;
update bank set money=money-1000 where cardId=&#39;1002&#39;;
select * from bank;
B客户端:
set session transaction isolation level read committed;
select * from bank;
-------------------------------------------------------------------------------------------------
--&gt;</span>
<span class="token comment">&lt;!--
- 不可重复读
一个事务范围内多次查询的结果不同
示例:
A客户端:
set session transaction isolation level read committed;
start transaction;
select * from bank;
B客户端:
set session transaction isolation level read committed;
start transaction;
update bank set money=money-1000 where cardId=&#39;1002&#39;;
commit;
A客户端:
select * from bank;
commit;
- 解决办法(repeatable read)
-------------------------------------------------------------------------------------------------
--&gt;</span>
<span class="token comment">&lt;!--
- 重复读
一个事务范围内多次查询的结果相同
A客户端:
set session transaction isolation level repeatable read;
start transaction;
select * from bank;
B客户端:
set session transaction isolation level repeatable read;
start transaction;
update bank set money=money-1000 where cardid=&#39;1002&#39;;
commit;
A客户端:
select * from bank;
commit;
- 解决办法(serializable)
-------------------------------------------------------------------------------------------------
--&gt;</span>
<span class="token comment">&lt;!--
- 幻读
读到到的结果并不是最终的结果
A客户端:
set session transaction isolation level serializable;
start transaction;
select * from bank;
B客户端:
set session transaction isolation level serializable;
start transaction;
update bank set money=money-1000 where cardid=&#39;1002&#39;;
commit;
A客户端:
select * from bank;
commit;
-------------------------------------------------------------------------------------------------
--&gt;</span>
<span class="token comment">&lt;!--
对应关系
事务隔离级别	                脏读   不可重复读	幻读
读未提交（read-uncommitted）	是	       是		是
不可重复读（read-committed）	否	 	   是		是
可重复读（repeatable-read）	    否		   否		是
串行化（serializable）        	否		   否		否
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(r,c){return i(),e("div",null,a)}const t=n(l,[["render",v],["__file","112-事务.html.vue"]]);export{t as default};
