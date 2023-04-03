import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_06-redis-set类型操作" tabindex="-1"><a class="header-anchor" href="#_06-redis-set类型操作" aria-hidden="true">#</a> 06 -Redis-Set类型操作</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.Redis-Set类型操作-增删改查
集合就是一堆无序的数据, Redis可以把一堆无序的数据当做Value存储起来
注意点: 集合中不能出现重复的数据

- 新增
sadd key value1, [value2, ...]

- 查询
    + 返回集合中所有元素
        * smembers key
        * 注意点:由于Redis是单线程的, 而以上操作都是非常耗时的, 所以当元素比较多时需要慎用
    + 返回集合中N个元素
        * srandmember key [count]

- 删除
    + 随机删除N个元素
        * spop key
    + 删除集合中的指定元素
        * srem key value1, [value2, ...]
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-Set类型操作-其它操作
- 追加元素
    + sadd: key不存在就新增, 存在就追加
    + sadd: 追加的元素不存在就追加, 追加的元素存在会自动忽略

- 统计集合中元素个数
    + scard key

- 判断集合中是否有指定元素
    + sismember key member

Redis中的集合是支持集合间的操作的, 也就是求交集,并集和差集
- 交集
    + sinter key [key, ...]
    * {1, 2, 3} ∩ {2, 3, 4} = {2, 3}
- 并集
    + sunion  key [key, ...]
    * {1, 2, 3} ∪ {2, 3, 4} = {1, 2, 3, 4}
- 差集
    + sdiff key [key, ...]
    * {1, 2, 3} - {2, 3, 4} = {1}
    * {2, 3, 4} - {1, 2, 3} = {4}
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-Set类型操作-应用场景
- 抽奖
    + srandmember key [count]
- 绑定标签
    + sadd key value1, [value2, ...]
- 社交关系
    +  sinter key [key, ...]
    +  sunion  key [key, ...]
    +  sdiff key [key, ...]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,c){return n(),i("div",null,v)}const u=e(d,[["render",a],["__file","06-Redis-Set类型操作.html.vue"]]);export{u as default};
