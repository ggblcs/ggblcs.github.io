import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_04-redis-哈希类型操作" tabindex="-1"><a class="header-anchor" href="#_04-redis-哈希类型操作" aria-hidden="true">#</a> 04 -Redis-哈希类型操作</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.Redis-Hash类型-增删改查
Redis的Value除了可以存储普通的字符串类型以外, 还可以存储Hash类型
Hash类型就相当于在JS中的对象, 可以把整个对象当做一个Value存储起来

- 增加
hset key field value
hset user name it666
hset user age 34

- 查询
hget key field
hget user name

- 修改
如果字段不存在就是新增, 如果字段存在就是修改
hset key field value
hset user name it666

- 删除
    + 删除指定的字段
hdel key field
hdel user name
    + 删除对应key所有的数据
del key
del user
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-Hash类型-高级操作
- 批量新增
hmset key field1 value1 field2 value2
hmset user name lnj age 34 score 100
- 批量查询
hmget key field1 field2 field3
hmget user name age score

- 工具指令
hlen key    返回key存储的hash表中有多少条数据
hlen user

hexists key field    判断指定的key存储的Hash中是否有指定的字段
hexists user name    返回1表示存在
hexists user gender  返回0表示不存在
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-Hash类型-其它操作
- 查询所有field
hkeys key
hkeys user

- 查询所有value
hvals key
hvals user

- 查询所有的field和value
hgetall key
hgetall user
注意点:由于Redis是单线程的, 而以上操作都是非常耗时的, 所以不推荐在企业开发中使用
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,u){return i(),n("div",null,v)}const m=e(l,[["render",a],["__file","04-Redis-哈希类型操作.html.vue"]]);export{m as default};
