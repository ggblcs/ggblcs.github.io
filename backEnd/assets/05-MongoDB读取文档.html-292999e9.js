import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_05-mongodb读取文档" tabindex="-1"><a class="header-anchor" href="#_05-mongodb读取文档" aria-hidden="true">#</a> 05 -MongoDB读取文档</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.查询文档
db.&lt;collection&gt;.find(
    &lt;query&gt;,
    &lt;projection&gt;
)
query: 查询条件, 相当于MySQL中的where
projection: 投影条件, 规定了结果集中显示那些字段, 相当于MySQL中的 select 字段1, 字段2, .. from 表名;

2.查询所有文档
db.&lt;collection&gt;.find();
不传入条件, 默认就是查询所有

3.查询满足条件文档
db.person.insert([{name:&#39;zs&#39;, age:17},{name:&#39;ls&#39;, age:18},{name:&#39;ww&#39;, age:19}])
3.1单个字段条件
db.person.find() // 默认会返回指定集合中所有的数据和所以的字段
db.person.find({name:&#39;zs&#39;}) // 我们可以通过第一个参数指定查询条件, find方法会把所有满足条件的数据返回给我们
3.2多个字段条件
db.person.find({name:&#39;zs&#39;, age:17}) // 默认是And关系, 也就是默认要求同时满足所有指定的条件, 才会返回对应的数据
db.person.find({age:17, name:&#39;zs&#39;}) // 注意点: 没有顺序要求, 只要是同时满足多个条件即可
3.3文档中又是文档情况
db.person.insert(
[{name:&#39;zs&#39;, age:17, book:{name:&#39;HTML&#39;, price:66}},
{name:&#39;ls&#39;, age:18, book:{name:&#39;JavaScript&#39;, price:88}},
{name:&#39;ww&#39;, age:19, book:{name:&#39;Vue&#39;, price:199}}]
)
db.person.find({&#39;book.name&#39;:&#39;JavaScript&#39;}) // 如果某一个文档的某一个字段的取值又是一个文档, 那么在判断的时候我们可以通过&#39;字段.文档属性名称&#39;的方式来判断

4.查询指定字段
0表示不显示, 1表示显示
除主键以外, 其它字段不能同时出现0和1(要么不写,写了就必须全是1或者全是0)
db.person.find({},{_id:0}) // 如果不想查询某一个字段, 那么就可以指定这个字段的投影取值为0
db.person.find({},{_id:0, name:1, age:1, book:1}) // 如果想查询某一个字段, 那么就可以指定这个字段的投影取值为1
                                                  // 默认情况下如果不指定, 那么所有字段的投影取值都是1
db.person.find({},{_id:0, name:1, age:1, book:0}) // 除了_id字段以外, 其它的字段不能同时出现0和1
db.person.find({},{_id:0, book:0}) 
--&gt;</span>
<span class="token comment">&lt;!--
1.比较操作符
和MySQL一样, MongodDB中也支持很多比较操作符
$eq: 等于 / $ne: 不等于
$gt: 大于 / $gte: 大于等于
$lt: 小于 / $lte: 小于等于

2.使用格式
db.&lt;collection&gt;.find(
    {&lt;field&gt;: {$&lt;operator&gt;: &lt;value&gt;}},
    &lt;projection&gt;
)

3.示例
db.person.insert([{name:&#39;zs&#39;, age:17, gender:&#39;男&#39;},{name:&#39;ls&#39;, age:18},{name:&#39;ww&#39;, age:19}])
查询名称叫做zs的人
查询所有成年人
查询所有未成年人
查询所有不是18岁的人
db.person.find({name:&#39;zs&#39;}) //默认情况下就是按照相等来判断
db.person.find({name:{$eq:&#39;zs&#39;}}) //这里就是明确的告诉MongoDB需要按照相等来查询
db.person.find({age:{$gte: 18}})
db.person.find({age:{$lt: 18}})
db.person.find({age:{$ne: 18}})
注意点: 没有指定字段也算作不等于
db.person.find({gender:{$ne: &#39;女&#39;}}) // 注意点: 在做不等于判断的时候, 没有需要判断的字段, 也算作是不等于
--&gt;</span>
<span class="token comment">&lt;!--
1.其它比较操作符
$in: 匹配和任意指定值相等的文档
$nin:匹配和任意指定值都不相等的文档

2.使用格式
db.&lt;collection&gt;.find(
    {&lt;field&gt;: {$&lt;operator&gt;: [&lt;value1&gt;, &lt;value2&gt;, ...]}},
    &lt;projection&gt;
)

3.实例
查询名称叫做zs或者ls的人
查询名称不叫zs或者ls的人
查询性别不是男或女的人
db.person.find({name:{$in:[&#39;zs&#39;, &#39;ls&#39;]}}) // 匹配和任意指定值相等的文档
db.person.find({name:{$nin:[&#39;zs&#39;, &#39;ls&#39;]}}) // 匹配和任意指定值都不相等的文档
db.person.find({gender:{$nin:[&#39;男&#39;, &#39;女&#39;]}}) // 注意点: 和$ne一样, 如果没有需要判断的字段, 也算作满足条件
注意点: 没有指定字段也算作不包含
--&gt;</span>
<span class="token comment">&lt;!--
1.逻辑操作符
$not: 匹配条件不成立的文档
{&lt;field&gt;: {$not: {&lt;expression&gt;}}}
$and: 匹配条件全部成立的文档
{&lt;field&gt;: {$and: [{&lt;expression1&gt;}, {&lt;expression2&gt;}, ...}]}
$or : 匹配至少一个条件成立的文档
{&lt;field&gt;: {$or: [{&lt;expression1&gt;}, {&lt;expression2&gt;}, ...}]}
$nor: 匹配多个条件全部不成立的文档
{&lt;field&gt;: {$nor: [{&lt;expression1&gt;}, {&lt;expression2&gt;}, ...}]}

2.示例:
//2.1$not
//查询所有年龄不等于18岁的人
db.person.find({age:{$ne:18}})
db.person.find({age:{$not:{$eq:18}}})
//查询不是男人的人
db.person.find({gender:{$eq:&#39;男&#39;}})
// 注意点: $not运算符和$ne/$nin一样, 如果需要查询的字段不存在, 也会算作条件成立
db.person.find({gender:{$not:{$eq:&#39;男&#39;}}})

//2.2$and
//查询所有名称叫做zs的未成年人
db.person.find({$and:[{name:{$eq:&#39;zs&#39;}},{age:{$lt:18}}]})
db.person.find({$and:[{name:&#39;zs&#39;},{age:{$lt:18}}]})
db.person.find({name:&#39;zs&#39;, age:{$lt:18}})

//2.3$or
//查询所有名称叫做zs或者ls的人
db.person.find({name:{$in:[&#39;zs&#39;,&#39;ls&#39;]}})
db.person.find({$or:[{name:{$eq:&#39;zs&#39;}},{name:{$eq:&#39;ls&#39;}}]})
db.person.find({$or:[{name:&#39;zs&#39;},{name:&#39;ls&#39;}]})

//2.4$nor
//查询所有名称不叫zs或者ls的人
db.person.find({name:{$nin:[&#39;zs&#39;,&#39;ls&#39;]}})
db.person.find({$nor:[{name:&#39;zs&#39;},{name:&#39;ls&#39;}]})

//查询所有名称不叫zs或者性别不是男的人
// 注意点: $nor运算符和$ne/$nin/$not一样, 如果需要查询的字段不存在, 也会算作条件成立
db.person.find({$nor:[{gender:&#39;男&#39;}]})
--&gt;</span>
<span class="token comment">&lt;!--
1.字段操作符
$exists: 查询包含某个字段的文档
{&lt;field&gt;: {$exists: &lt;boolean&gt;}}
$type:   查询指定字段包含指定类型的文档
{&lt;field&gt;: {$type: &lt;BSON&gt; or [&lt;BSON1&gt;, &lt;BSON2&gt;]}}

2.查询包含字段gender的人
db.person.insert([
{name:&#39;zs&#39;, age:17, gender:&#39;男&#39;},
{name:&#39;ls&#39;, age:18},
{name:&#39;ww&#39;, age:19},
{name:&#39;it666&#39;, age:20, gender:&#39;女&#39;}
])
// 需求: 要求查询出所有拥有gender属性的文档
db.person.find({gender:{$exists: true}})

3.应用场景:
// 应用场景: 配合$ne/$nin/$nor/$not来清理数据
db.person.find({gender:{$ne:&#39;男&#39;}})
db.person.find({gender:{$ne:&#39;男&#39;, $exists:true}})

4.查询所有年龄是字符串类型的文档
db.person.insert([
{name:&#39;itzb&#39;, age:&#39;666&#39;},
{name:&#39;lnj&#39;, age:&#39;888&#39;},
])
// 需求: 要求查询出所有age属性的取值是字符串类型的文档
db.person.find({age:{$type:&#39;string&#39;}})
--&gt;</span>
<span class="token comment">&lt;!--
1.数组操作符
$all      : 匹配数组中包含所有指定查询值的文档
{&lt;field&gt;: {$all: [&lt;value1&gt;, &lt;value2&gt;, ...]}}
$elemMatch: 匹配数组中至少有一个能完全匹配所有的查询条件的文档
{&lt;field&gt;: {$elemMatch: {&lt;query1&gt;, &lt;query2&gt;, ...}}}

2.示例
查询tags中同时拥有html和js的文档
db.person.insert([
{name: &#39;zs&#39;, tags:[&#39;html&#39;, &#39;js&#39;, &#39;vue&#39;]},
{name: &#39;ls&#39;, tags:[&#39;html&#39;, &#39;react&#39;, &#39;vue&#39;]},
{name: &#39;ww&#39;, tags:[&#39;html&#39;, &#39;node&#39;, &#39;js&#39;]},
])
db.person.find({tags:{$all:[&#39;html&#39;, &#39;js&#39;]}})

查询所有名称叫做zs,年龄是18岁的文档
db.school.insert([
{class: &#39;one&#39;,
studnets: [
    {name:&#39;zs&#39;, age: 18},
    {name:&#39;ls&#39;, age: 19},
    {name:&#39;ww&#39;, age: 20},
]},
{class: &#39;two&#39;,
studnets: [
    {name:&#39;zs&#39;, age: 20},
    {name:&#39;ls&#39;, age: 19},
    {name:&#39;ww&#39;, age: 18},
]},
])

db.school.find({&#39;studnets.name&#39;:&#39;ww&#39;, &#39;studnets.age&#39;:18})
db.school.find({studnets:{$elemMatch:{name:&#39;ww&#39;,age:18}}})
--&gt;</span>
<span class="token comment">&lt;!--
1.运算操作符
{ &lt;field&gt;: { $regex: /pattern/, $options: &#39;&lt;options&gt;&#39; } }
{ &lt;field&gt;: { $regex: /pattern/&lt;options&gt; } }
查询满足正则的文档

2.示例
db.person.insert([
{name:&#39;zs&#39;, age:18},
{name:&#39;ls&#39;, age:19},
{name:&#39;ww&#39;, age:17},
{name:&#39;Zsf&#39;, age:18},
{name:&#39;Lnj&#39;, age:19},
{name:&#39;Wz&#39;, age:17}
])

// 需求: 要求查询出所有姓z的人(文档)
db.person.find({name:{$regex:/^z/, $options: &#39;i&#39;}})
// 需求: 要求查询出所有姓是z或者l的人(文档)
db.person.find({name:{$in:[/^z/i, /^l/i]}})
--&gt;</span>

<span class="token comment">&lt;!--
1.文档游标
1.1为什么学习前端都要学习MongoDB?
因为MongoDB原生就支持JavaScript, 也就是我们可以直接在MongoDB中混入JS代码
1.2什么是文档游标
我们执行find方法后, find方法其实是有返回值的, find方法会返回一个文档游标(相当于C语言指针)
1.3文档游标常用方法
hasNext(): 是否还有下一个文档
next():    取出下一个文档
forEach(): 依次取出所有文档
1.4文档游标注意点
默认情况下通过文档游标遍历完所有文档后, 系统会在10分钟后自动关闭当前游标
如果不想自动关闭, 我们可以通过noCursorTimeout函数来保持游标一直有效
如果想手动关闭游标, 我们也可以通过close函数来手动关闭游标

2.示例
// 需求: 往person集合中插入100个文档
var arr =[];
for(var i = 0; i &lt; 100; i++){
  arr.push({name:&#39;it&#39;+i, age:18+i});
}
db.person.insertMany(arr)


var cursor = db.person.find().noCursorTimeout()
//cursor[0]
//cursor[1]
while(cursor.hasNext()){
   printjson(cursor.next())
}

cursor.forEach(printjson)
cursor.close()
--&gt;</span>
<span class="token comment">&lt;!--
1.分页方法
cursor.limit(&lt;number&gt;): 取多少个文档
cursor.skip(&lt;offset&gt;) : 跳过多少个文档

2.示例
//var cursor = db.person.find()
// 需求: 要求取出前5个文档
//cursor.limit(5)
// 需求: 要求跳过前面的5个文档, 取出剩余的所有
//cursor.skip(5)
// 注意点: 我们可以直接在find方法后面调用limit方法或者skip方法
//db.person.find().limit(5)
//db.person.find().skip(5)

3.分页函数注意点
// 注意点: MongoDB是支持链式调用的
// 需求: 跳过前面5个文档, 取出后面的5个文档
//db.person.find().skip(5).limit(5)
// 注意点:在链式调用的时候, 无论skip写在前面还是后面, 都会在limit之前执行
db.person.find().limit(5).skip(10)
--&gt;</span>
<span class="token comment">&lt;!--
1.排序函数
cursor.sort({field: ordering, ...}): 按照指定规则排序
ordering为1表示升序排序
ordering为-1表示降序排序

2.示例
// 注意点: 默认情况下find方法只会返回100个文档
db.person.find()
db.person.insert({name:&#39;itzb&#39;, age:15})
db.person.find().limit(101)
db.person.find().sort({age:1})
db.person.find().sort({age:-1})

3.注意点
3.1find方法默认只会取出100个文档
3.2sort函数永远在分页函数之前执行
db.person.find().skip(5).limit(5)
db.person.find().skip(5).limit(5).sort({age:-1})
--&gt;</span>
<span class="token comment">&lt;!--
1.统计函数
cursor.count(&lt;applySkipLimit&gt;): 统计集合中文档的个数
applySkipLimit默认为false, 表示忽略skip和limit

2.示例
db.person.find().count()
// 注意点: count函数可以接收一个applySkipLimit参数, 通过这个参数可以告诉MongoDB在统计的时候是否需要忽略Skip和Limit
//      默认情况下applySkipLimit的取值是false, 表示忽略Skip和Limit
db.person.find().skip(6).count()
db.person.find().limit(5).count()
db.person.find().skip(6).count({applySkipLimit:true})
db.person.find().limit(5).count({applySkipLimit:true})

2.统计函数注意点
在find函数不提供筛选条件时, count函数会从集合的元数据中取得结果
在单台电脑上是这个结果是准确的,
但是如果数据库为分布式结构(多台电脑)时,
如果不给find函数提供筛选条件, 那么count函数返回的结果并不一定准确
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,m){return i(),e("div",null,v)}const b=n(d,[["render",a],["__file","05-MongoDB读取文档.html.vue"]]);export{b as default};
