import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_07-redis-zset类型操作" tabindex="-1"><a class="header-anchor" href="#_07-redis-zset类型操作" aria-hidden="true">#</a> 07 -Redis-ZSet类型操作</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是ZSet?
ZSet是有序集合, Redis可以把一堆通过权重排序的数据当做一个Value存储起来

2.Redis-ZSet类型操作-增删改查
- 新增
zadd key 权重 value 权重 value

- 查询
+ 查询指定排名范围内的数据
zrange key start end

+ 查询指定权重范围内的数据
zrangebyscore key 权重 权重

+ 查询指定元素权重
zscore key element

+ 查询指定权重范围内元素个数
zcount key minscore maxscore

+ 查询集合中元素个数
zcard key

- 删除
+ 删除指定元素
zrem key value

+ 删除指定排名范围元素
zremrangbyrank key start end

+ 删除指定权重范围元素
zremrangbyscore key minscore maxscore
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-ZSet类型-其它操作
- 增加或减少元素权重
    + zincrby key score element

- 从高到低的操作
- zrevrange
- zrev...

2.Redis-ZSet类型-应用场景
- 存储排行榜数据
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,c){return n(),i("div",null,v)}const u=e(d,[["render",a],["__file","07-Redis-ZSet类型操作.html.vue"]]);export{u as default};
