import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_09-mongodb索引" tabindex="-1"><a class="header-anchor" href="#_09-mongodb索引" aria-hidden="true">#</a> 09 -MongoDB索引</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是索引?
- 索引就相当于字典中的目录(拼音/偏旁部首手)
  有了目录我们就能通过目录快速的找到想要的结果.
- 但是如果没有目录(拼音/偏旁部首手), 没有索引
  那么如果想要查找某条数据就必须从前往后一条一条的查找
- 所以索引就是用于提升数据的查询速度的

2.如何获取索引
db.&lt;collection&gt;.getIndexes()

db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17},
]);

3.如何创建索引
db.&lt;collection&gt;.createIndex({&lt;field&gt;:&lt;1 or -1&gt;, ...}, &lt;options&gt;)
&lt;keys&gt;   : 指定创建索引的字段
&lt;options&gt;: 索引的额外配置

4.创建单键索引
db.person.createIndex({name:1})
db.person.explain().find({age:17})
db.person.explain().find({name:&#39;cs&#39;})
db.person.explain().find({name:&#39;cs&#39;}, {_id: 0, name:1})

5.查看是否使用索引
和MySQL一样, 我们可以通过explain来查看索引效果
db.&lt;collection&gt;.explain().&lt;method()&gt;
winningPlan-&gt;stage-&gt;COLLSCAN-&gt;遍历整个集合查询
winningPlan-&gt;stage-&gt;IXSCAN-&gt;  通过索引查询
winningPlan-&gt;stage-&gt;FETCH-&gt;   根据索引存储的地址取出对应文档

6.索引格式
as -&gt; {name:&#39;as&#39;, age:18, tags:[&#39;ahtml&#39;, &#39;bcss&#39;]}
bs:-&gt; {name:&#39;bs&#39;, age:17, tags:[&#39;cjs&#39;, &#39;dvue&#39;]}
cs:-&gt; {name:&#39;cs&#39;, age:19, tags:[&#39;enode&#39;, &#39;freact&#39;]}

7.注意点:
- 和MySQL一样, MongoDB默认也会为主键自动创建索引
- 如果查询条件中只需要查询出索引字段, 那么就不会再取出完整文档, 这样效率更高
--&gt;</span>
<span class="token comment">&lt;!--
1.复合索引
和MySQL一样, MongoDB也支持复合索引, 也就是将多个字段的值作为索引

2.示例
db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17},
{name:&#39;bs&#39;, age:20},
])
db.person.createIndex({name:1, age:-1})
db.person.explain().find({name:&#39;bs&#39;, age:17})
db.person.explain().find({name:&#39;bs&#39;})
db.person.explain().find({age:17})

3.索引格式
(as, 18)-&gt;{name:&#39;as&#39;, age:18}
(bs, 20)-&gt;{name:&#39;bs&#39;, age:20}
(bs, 17)-&gt;{name:&#39;bs&#39;, age:17}
(cs, 19)-&gt;{name:&#39;cs&#39;, age:19}

4.注意点:
复合件索引只支持前缀子查询, 也就是A,B,C复合索引. A,B,C会使用索引, A,B会使用索引, A会使用索引
                            但是B不会使用索引, C也不会使用索引, B,C也不会使用索引
--&gt;</span>
<span class="token comment">&lt;!--
1.多键索引
多键索引是专门针对数组字段的, 会为数组字段的每一个元素都创建一个索引

2.示例
db.person.insert([
{name:&#39;as&#39;, age:18, tags:[&#39;ahtml&#39;, &#39;bcss&#39;]},
{name:&#39;bs&#39;, age:17, tags:[&#39;cjs&#39;, &#39;enode&#39;]},
{name:&#39;cs&#39;, age:19, tags:[ &#39;dvue&#39;, &#39;freact&#39;]},
])
db.person.explain().find({&#39;tags&#39;:{$in:[&#39;ahtml&#39;]}})
db.person.createIndex({tags:1})
db.person.explain().find({&#39;tags&#39;:{$in:[&#39;ahtml&#39;]}})

3.格式
&#39;ahtml&#39;-&gt;{name:&#39;as&#39;, age:18, tags:[&#39;ahtml&#39;, &#39;bcss&#39;]}
&#39;bcss&#39;-&gt;{name:&#39;as&#39;, age:18, tags:[&#39;ahtml&#39;, &#39;bcss&#39;]}
&#39;cjs&#39;-&gt;{name:&#39;bs&#39;, age:17, tags:[&#39;cjs&#39;, &#39;enode&#39;]}
&#39;dvue&#39;-&gt;{name:&#39;cs&#39;, age:19, tags:[ &#39;dvue&#39;, &#39;freact&#39;]}
&#39;enode&#39;-&gt;{name:&#39;bs&#39;, age:17, tags:[&#39;cjs&#39;, &#39;enode&#39;]}
&#39;freact&#39;-&gt;{name:&#39;cs&#39;, age:19, tags:[ &#39;dvue&#39;, &#39;freact&#39;]}
--&gt;</span>
<span class="token comment">&lt;!--
1.索引对排序的影响
如果排序的字段, 正好是索引的字段, 那么会大大提升排序效率

2.示例
db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17}
])
db.person.explain().find().sort({name:1})
db.person.createIndex({name:1})
db.person.explain().find().sort({name:1})
db.person.explain().find().sort({name:1, age:-1})
db.person.createIndex({name:1, age:-1})
db.person.explain().find().sort({name:1, age:-1})

3.注意点
如果是复合索引, 那么只有排序条件是前缀查询的形式才会使用索引来排序
例如:
复合件索引只支持前缀子查询, 也就是A,B,C复合索引. A,B,C会使用索引, A,B会使用索引, A会使用索引
                            但是B不会使用索引, C也不会使用索引, B,C也不会使用索引
--&gt;</span>
<span class="token comment">&lt;!--
1.唯一索引
默认情况下MongoDB和MySQL一样, 都会自动为主键创建索引, 这个索引就是一个唯一索引
除了主键可以作为唯一索引以外, 只要某个字段的取值是唯一的, 我们也可以手动给这个字段添加唯一索引
格式: db.&lt;collection&gt;.createIndex({&lt;field&gt;:&lt;1 or -1&gt;, ...}, {unique:true}})

2.示例
db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17}
])
db.person.getIndexes()
db.person.createIndex({age:1}, {unique:true})
db.person.insert({name:&#39;zs&#39;, age:20})
db.person.insert({name:&#39;ls&#39;})
db.person.find()
db.person.insert({name:&#39;ls&#39;})
db.person.createIndex({name:1,age:1}, {unique:true})
db.person.insert({name:&#39;ww&#39;, age:22})
db.person.insert({name:&#39;ww&#39;, age:22})
db.person.insert({name:&#39;ww&#39;, age:23})

3.注意点
3.1如果为某个字段添加了唯一索引, 那么就不能再给这个字段添加重复的值
3.2如果插入的数据中没有包含唯一索引的字段, 那么第一次会自动用null填充, 第二次会报错
3.3如果是复合唯一索引, 那么复合字段的组合不能重复
--&gt;</span>
<span class="token comment">&lt;!--
1.索引的稀疏性
默认情况下MongoDB会给每一个文档都创建索引, 哪怕这个文档中没有指定索引的字段或者字段的取值是Null
但是这样大大增加了索引的体积, 所以为了进一步优化索引占用的存储空间, 我们可以创建稀疏索引
也就是只会为存在索引字段,并且索引字段取值不是null的文档创建索引
格式: db.&lt;collection&gt;.createIndex({&lt;field&gt;:&lt;1 or -1&gt;, ...}, {sparse:true}})

2.示例
db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17}
])
db.person.find()
db.person.getIndexes()
db.person.createIndex({age:1}, {unique:true})
db.person.insert({name:&#39;lnj&#39;}) // lnj null
db.person.insert({name:&#39;lnj&#39;}) // lnj null
// 注意点: 如果索引具备了唯一性又具备了稀疏性, 那么就可以多次添加缺失了索引字段的文档了
// 原因 : 如果索引具备了稀疏性, 那么就不会为缺失了索引字段或者索引字段取值是null的文档创建索引了, 所以就不会冲突了
db.person.createIndex({age:1}, {unique:true, sparse: true})
db.person.insert({name:&#39;lnj&#39;}) // lnj null
db.person.insert({name:&#39;lnj&#39;}) // lnj null

3.注意点
3.1如果索引字段既具备唯一性又具备稀疏性, 那么就可以在集合中保存多个缺失唯一索引字段的文档
--&gt;</span>
<span class="token comment">&lt;!--
1.索引生存时间
针对日期字段或者包含日期的数组字段, 我们可以在创建索引的时候, 指定索引的生存时间,
一旦索引超过了指定的生存时间, 那么MongoDB会自动删除超过生存时间的文档
格式: db.&lt;collection&gt;.createIndex({&lt;field&gt;:&lt;1 or -1&gt;, ...}, {expireAfterSeconds:second}})

2.示例
db.person.createIndex({addTime:1}, {expireAfterSeconds: 5})
db.person.insert({name:&#39;zs&#39;, addTime:new Date()})
db.person.insert({name:&#39;ls&#39;, addTime:new Date()})
db.person.insert({name:&#39;ww&#39;, addTime:new Date()})

3.注意点
3.0MongoDB会定期清理超过时间的文档, 但是无法保证即时性(也就是设置的过期时间是1秒, 但是可能3秒后才会清除)
3.1复合索引字段是不具备生存时间特性的, 也就是不能在复合索引中指定生存时间
3.2当数组字段中包含多个日期, 我们给数组字段设置生存时间时, 系统会按照数组中最小的时间来计算生存时间
例如: {name:&#39;it666&#39;, times:[&#39;2022-04-16 09:13:33&#39;,&#39;2022-04-16 07:13:33&#39;,&#39;2022-04-16 08:13:33&#39;]}
       会按照&#39;2022-04-16 07:13:33&#39;来计算生存时间
--&gt;</span>
<span class="token comment">&lt;!--
1.删除索引
db.&lt;collection&gt;.dropIndex(&lt;IndexName | IndexDefine&gt;)

2.示例
db.person.insert([
{name:&#39;cs&#39;, age:19},
{name:&#39;as&#39;, age:18},
{name:&#39;bs&#39;, age:17}
])
db.person.find()
db.person.getIndexes()
db.person.createIndex({name:1})
db.person.dropIndex(&#39;name_1&#39;) // 通过索引的名称来删除
db.person.dropIndex({name:1}) // 通过索引的定义来删除
// 注意点: 如果是复合索引, 如果需要通过索引的定义来删除, 那么就必须一模一样才能正确的删除
db.person.createIndex({name:1, age:-1})
db.person.dropIndex({name:1}) // 报错
db.person.dropIndex({age:-1}) // 报错
db.person.dropIndex({age:-1, name:1}) // 报错
db.person.dropIndex({name:1, age:-1}) // 不会报错

3.注意点
3.1在MongoDB中没有修改索引的方法, 所以如果想修改索引就必须先删除再重新创建
3.2如果删除的索引是多个字段, 如果是通过索引定义来删除, 那么传入的参数必须和定义一模一样才可以
--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function v(r,m){return e(),i("div",null,a)}const b=n(d,[["render",v],["__file","09-MongoDB索引.html.vue"]]);export{b as default};
