import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_03-redis-字符串类型操作" tabindex="-1"><a class="header-anchor" href="#_03-redis-字符串类型操作" aria-hidden="true">#</a> 03 -Redis-字符串类型操作</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.默认数据库
默认情况下Redis给我们创建了16个数据库(0~15),
如果使用的时候没有明确的选中使用哪个数据库, 那么默认使用第0个

2.切换数据库
select 1

3.字符串类型-增删改查
redisdoc.com   所有语法文档

- 新增
set key value
set name lnj

- 查询
get key
get name

- 修改
set key value
如果key已经存在就是修改

- 删除
del key
del name
--&gt;</span>
<span class="token comment">&lt;!--
1.字符串类型-高级设置
- set key value
    + 不管key是否存在都设置(不存在就新增, 存在就覆盖)
- setnx key value
    + 只有key不存在才设置(新增)
- set key value xx
    + 只有key存在才设置(更新)

2.字符串类型-批量处理
- 批量添加值
    mset key value key value
    mset name lnj age 98 score 100

- 批量查询值
    mget key key key
    mget name age score
--&gt;</span>
<span class="token comment">&lt;!--
1.字符串类型-其它操作
- 设置新值返回旧值
getset key newValue

- 给旧值追加数据
append key value

- 计算value字符串长度
strlen key
注意点: 中文问题

- 获取指定下标范围的值
getrange key start end

- 从指定下标开始设置字符串的值
setrange key offset value
--&gt;</span>
<span class="token comment">&lt;!--
1.字符串类型-自增自减操作
- incr
    + 作用: 给指定key的对应的Value自增1, 如果key不存在会自动新增, 并从0开始自增1
    + 格式: incr key
- decr
    + 作用: 给指定key的对应的Value自减1, 如果key不存在会自动新增, 并从0开始自减1
    + 格式: decr key
- incrby
    + 作用: 给指定key的对应的Value增加指定值, 如果key不存在会自动新增, 并从0开始增加
    + 格式: incrby key number
- decrby
    + 作用: 给指定key的对应的Value减少指定的值, 如果key不存在会自动新增, 并从0开始减少
    + 格式: decrby key number
- incrbyfloat
    + 作用: 给指定key的对应的Value增加指定值, 如果key不存在会自动新增, 并从0开始增加
    + 格式: incrbyfloat key float
--&gt;</span>
<span class="token comment">&lt;!--
4.通用命令
- 查询当前数据库中所有的key
keys *
- 清空当前数据库(开发操作)
flushdb
- 清空所有数据库(离职操作)
flushall
注意点:由于Redis是单线程的, 而以上操作都是非常耗时的, 所以不推荐在企业开发中使用

- 计算当前数据库key的总数
dbsize
注意点: dbsize并不是通过遍历统计得到当前数据库key的总数, 而是每次操作时内部会自动统计
        所以dbsize并不是一个耗时的操作, 我们可以在企业开发中大胆的使用

- 查看value数据类型
type key

- 判断指定key是否存在
exists key
注意点: 如果存在返回1, 如果不存在返回0

- 设置key过期时间
expire key seconds
注意点: 如果没有添加过期时间就是添加
        如果已经添加过了过期时间就是修改

- 查看key过期时间
ttl key

- 取消key过期时间
persist key
注意点: 如果key不存在或者已经被删除会返回-2
        如果key存在并且过期时间已经被删除会返回-1
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(c,r){return e(),i("div",null,v)}const u=n(l,[["render",a],["__file","03-Redis-字符串类型操作.html.vue"]]);export{u as default};
