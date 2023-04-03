import{_ as n,p as i,q as e,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_05-redis-list类型操作" tabindex="-1"><a class="header-anchor" href="#_05-redis-list类型操作" aria-hidden="true">#</a> 05 -Redis-List类型操作</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.Redis-List类型-增删改查
Redis的Value除了可以存储字符串和Hash类型以外, 还可以存储List类型
List类型就相当于JavaScript中的数组, 可以把整个数组当做一个Value存储起来
注意点: List是有序的

- 增加
+ 从第二个Value开始添加到前一个的左边
    + lpush key value1 value2 value3
    + lpush arr1 aa bb cc -&gt; cc bb aa
+ 从第二个Value开始添加到前一个的右边
    + rpush key value1 value2 value3
    + rpush arr2 aa bb cc -&gt; aa bb cc

- 查询
+ 查询指定范围数据
    * lrange key startIndex endIndex
    * 索引从0开始, endIndex等于-1表示取到最后
+ 查询指定索引数据
    * lindex key index
    * 从前往后索引从0开始, 从后往前索引从-1开始

- 修改
lset key index value
注意 index从0开始

- 删除
- lpop删除左边元素
lpop key
- rpop删除右边元素
rpop key

- lrem删除指定个数的指定元素
lrem key count value
+ count &gt; 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count
+ count &lt; 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值
+ count = 0 : 移除表中所有与 value 相等的值

- ltrim按照索引剪切列表
ltrim key start end
--&gt;</span>
<span class="token comment">&lt;!--
1.Redis-List类型-其它操作
- 追加数据
lpush key value1,value2,...
+ 22 11 aa bb
rpush key value1,value2,...
+ 22 11 aa bb 11 22

- 插入数据
linsert key before|after oldValue newValue

- 获取列表长度
llen key
--&gt;</span>
<span class="token comment">&lt;!--
1.列表实现简单数据结构
- 栈结构(水桶) - 先进后出
lpush + lpop

- 队列结构(水管) - 先进先出
lpush + rpop

- 所以在企业开发中, 如果需要需要&#39;先进后出&#39;或者&#39;先进先出&#39;的数据
  我们就可以将这些数据存储到Redis的列表中
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,u){return i(),e("div",null,v)}const m=n(s,[["render",a],["__file","05-Redis-List类型操作.html.vue"]]);export{m as default};
