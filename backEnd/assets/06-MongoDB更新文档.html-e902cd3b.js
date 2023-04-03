import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_06-mongodb更新文档" tabindex="-1"><a class="header-anchor" href="#_06-mongodb更新文档" aria-hidden="true">#</a> 06 -MongoDB更新文档</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.更新文档
MongoDB中有三个常用的更新方法: save()/update()/findAndmodify()

2.save方法
save用于往集合里添加一个新文档或者覆盖文档
当没有指定文档_id的时候就是新增
当指定了集合中已经存在的_id的时候就是覆盖

3.示例
db.person.insert([
{name:&#39;zs&#39;, age:18},
{name:&#39;ls&#39;, age:19},
{name:&#39;ww&#39;, age:20},
{name:&#39;zs&#39;, age:21},
])
--&gt;</span>
<span class="token comment">&lt;!--
1.update方法
db.collection.update(&lt;filter&gt;, &lt;update&gt;, &lt;options&gt;)
&lt;filter&gt;: 筛选条件
&lt;update&gt;: 新的内容
&lt;options&gt;: 额外配置

2.通过update覆盖满足条件数据
默认情况下如果&lt;update&gt;没有使用更新操作符, 那么就会使用指定的内容覆盖符合条件的内容

3.示例:
db.person.update({name:&#39;lnj&#39;}, {name:&#39;zs&#39;})

4.注意点:
// 注意点: update方法默认情况下就是覆盖
//      如果不想覆盖, 而是想单纯的更新, 那么就必须在第二个参数中使用&#39;更新操作符&#39;
db.person.update({name:&#39;ww&#39;},{score: 99.9},{})
// 注意点: update方法默认只会更新满足条件的第一个文档
//      如果想更新所有满足条件的文档, 那么就必须指定第三个参数
db.person.update({name:&#39;zs&#39;}, {name:&#39;zs&#39;, age:55}, {})
// 注意点: 如果在使用update方法的时候, 在第二个参数中指定了_id, 那么就必须保证指定的_id和被更新的文档的_id的取值一致
//      否则就无法更新, 否则就会报错
// 开发技巧: 在企业开发中如果需要使用update方法, 那么就不要指定_id
db.person.update({name:&#39;zs&#39;}, {_id:1, name:&#39;zs&#39;, age:55}, {})
db.person.update({name:&#39;zs&#39;}, {_id:ObjectId(&quot;5e9007350718cb6e37ab4515&quot;), name:&#39;zs&#39;, age:88}, {})

// 注意点: 如果想更新所有满足条件的文档, 我们可以指定第三个参数的取值multi:true
// 注意点: 如果指定了multi:true, 那么就必须在第二个参数中使用&#39;更新操作符&#39;
db.person.update({name:&#39;zs&#39;}, {name:&#39;zs&#39;, age:55}, {multi:true})
--&gt;</span>
<span class="token comment">&lt;!--
1.更新操作符
默认情况下update会使用新文档覆盖旧文档
如果不想覆盖而是仅仅想更新其中的某些字段
那么我们就需要使用update的更新操作符

2.$set更新操作符
$set: 更新或者新增字段, 字段存在就是更新, 字段不存在就是新增
格式: {$set:&lt;value1&gt;, ...}

3.示例:
db.person.update({name:&#39;zs&#39;}, {$set:{name:&#39;itzb&#39;}})
db.person.update({name:&#39;itzb&#39;}, {$set:{age:&#39;888&#39;}})

4.更新内嵌文档和数组
db.person.insert([
{name:&#39;zs&#39;, age:18},
{name:&#39;ls&#39;, age:19},
{name:&#39;ww&#39;, age:20},
{name:&#39;zs&#39;, age:21},
])
db.person.update({name:&#39;ww&#39;}, {age:55})
// 更新普通字段
db.person.update({name:&#39;ls&#39;}, {$set:{age:55}})
db.person.update({name:&#39;zs&#39;}, {$set:{age:88}}, {multi:true})

db.person.insert(
{
name:&#39;ww&#39;,
age:18,
book:{name:&#39;跟着江哥学编程&#39;, price:2888},
tags:[&#39;html&#39;, &#39;JavaScript&#39;]}
)
// 更新文档字段
db.person.update({name:&#39;ww&#39;}, {$set:{&#39;book.name&#39;: &#39;it666.com&#39;}})
// 更新数组字段
db.person.update({name:&#39;ww&#39;}, {$set: {&#39;tags.0&#39;: &#39;vue&#39;}})

5.注意点:
// 注意点: 如果操作的字段存在, 那么就是更新, 如果操作的字段不存在, 那么就是新增
db.person.update({name:&#39;ls&#39;}, {$set:{score: 59.5}})
// 注意点: 如果操作的是数组字段, 如果操作索引不存在, 那么也会自动新增
//      如果被操作的索引前面没有数据, 那么会自动用null来填充
db.person.update({name:&#39;ww&#39;}, {$set: {&#39;tags.2&#39;: &#39;react&#39;}})
db.person.update({name:&#39;ww&#39;}, {$set: {&#39;tags.5&#39;: &#39;node&#39;}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$unset更新操作符
$unset: 删除字段
格式  :{$unset:{&lt;field&gt;:&#39;&#39;, ...}}

2.示例:
// 删除普通字段
db.person.update({name:&#39;ls&#39;}, {$unset:{score:&#39;&#39;}})
// 注意点: 如果使用$unset删除某一个字段, 那么后面赋值为任何的内容都不重要
db.person.update({name:&#39;ls&#39;}, {$unset:{age:&#39;www.it666.com&#39;}})

// 删除文档字段中的字段
db.person.update({name:&#39;ww&#39;}, {$unset:{&#39;book.price&#39;: &#39;&#39;}})
// 删除数组字段中的元素
// 注意点: 如果删除的是数组字段中的元素, 那么并不会修改数组的长度, 而是用null来填充删除的内容
db.person.update({name:&#39;ww&#39;}, {$unset:{&#39;tags.1&#39;: &#39;&#39;}})

3.注意点:
3.1删除数组元素并不会影响数组的长度, 而是设置为Null
3.2如果删除的字段不存在, 不会做任何操作
--&gt;</span>
<span class="token comment">&lt;!--
1.$rename更新操作符
$rename: 重命名字段
格式  :{$rename:{&lt;field&gt;:&lt;newName&gt;, ...}}

2.示例
db.person.update({name:&#39;zs&#39;}, {$rename:{name:&#39;MyName&#39;}})
// 注意点: 如果修改的是文档字段中的字段, 那么取值必须写上层级关系
db.person.update({name:&#39;ww&#39;}, {$rename:{&#39;book.name&#39;:&#39;book.BookName&#39;}})
// 注意点: 如果要操作的字段不存在, 那么不会做任何的操作
db.person.update({name:&#39;ls&#39;}, {$rename:{age:&#39;MyAge&#39;}})
// 注意点: 如果重命名之后的名称已经存在了, 那么已经存在的字段就会被删除
// 底层的本质: 先调用了$unset删除了原有的book字段, 然后再调用$set修改字段的名称
db.person.update({name:&#39;ww&#39;}, {$rename:{name:&#39;book&#39;}})
// 注意点: 不能通过$rename更新操作符来操作数组
db.person.insert(
{
name:&#39;it666&#39;,
age:666,
book:{name:&#39;知播渔&#39;, price:999},
tags:[{name:&#39;html&#39;, price:&#39;123&#39;}, {name:&#39;js&#39;, price:456}]
}
)
db.person.update({name:&#39;it666&#39;}, {$rename:{&#39;tags.0.name&#39;:&#39;tags.0.TagName&#39;}})

4.乾坤大挪移
// 可以将外层的字段转移到内层的文档中
db.person.update({name:&#39;it666&#39;}, {$rename:{age:&#39;book.age&#39;}})
db.person.find()
// 可以将内存文档中的字段, 转移到外层文档中
db.person.update({name:&#39;it666&#39;}, {$rename:{&#39;book.age&#39;:&#39;age&#39;}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$inc和$mul更新操作符
$inc:更新字段值(增加或者减少字段保存的值)
格式: {$inc:{&lt;field&gt;: &lt;number&gt;}}
$mul:更新字段值(乘以或者除以字段保存的值)
格式: {$mul:{&lt;field&gt;: &lt;number&gt;}}

2.示例
db.person.update({name:&#39;lnj&#39;}, {$inc:{age:2}})
db.person.update({name:&#39;lnj&#39;}, {$inc:{age:-5}})

db.person.update({name:&#39;lnj&#39;}, {$mul:{age:0.5}})
db.person.update({name:&#39;lnj&#39;}, {$mul:{age:2}})

3.注意点:
3.1只能操作数字类型字段
3.2如果操作的字段不存在, 会自动新增这个字段
   不同的是$inc会把操作的值赋值给新增的字段, 而$mul会自动赋值为0
db.person.update({name:&#39;lnj&#39;}, {$inc:{weight:2}})
db.person.update({name:&#39;lnj&#39;}, {$mul:{height:2}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$min和$max更新操作符
$min:比较保留更小字段值
格式: {$min:{&lt;field&gt;: &lt;value&gt;}}
$max:比较保留更大字段值
格式: {$max:{&lt;field&gt;: &lt;value&gt;}}

2.示例
db.person.insert({name:&#39;lnj&#39;, age:33})
db.person.update({name:&#39;lnj&#39;}, {$min:{age:50}})
db.person.update({name:&#39;lnj&#39;}, {$min:{age:18}})

db.person.update({name:&#39;lnj&#39;}, {$max:{age:5}})
db.person.update({name:&#39;lnj&#39;}, {$max:{age:55}})

3.注意点:
// 注意点: 如果操作的字段不存在, 那么会自动增加, 并且会将操作的值赋值给新增的字段
db.person.update({name:&#39;lnj&#39;}, {$min:{weight:120}})
db.person.update({name:&#39;lnj&#39;}, {$max:{height:175}})
// 注意点: 和$inc/$mul不同, $min/$max不仅仅能操作数值类型的字段, 只要是可以比较的字段都可以操作
db.person.insert({name:&#39;def&#39;, age:666})
db.person.update({name:&#39;def&#39;}, {$min:{name:&#39;efg&#39;}})
db.person.update({name:&#39;def&#39;}, {$min:{name:&#39;cde&#39;}})
// 注意点: 不是相同的数据类型也可以进行比较
db.person.update({name:&#39;lnj&#39;}, {$min:{age:null}})

MongoDB对BSON的数据类型有一个潜在的排序规则
Null
Numbers(ints, longs, doubles, decimals)
Symbol, String
Object
Array
BinData
ObjectId
Boolean
Date
Timestamp
Regular Expression
--&gt;</span>

<span class="token comment">&lt;!--
1.$addToSet数组更新操作符
$addToSet: 向数组字段中添加元素
格式     : {$addToSet: {&lt;field&gt;:&lt;values&gt;, ...}}

2.示例
db.person.insert([
{name:&#39;zs&#39;, books:[{name:&#39;html&#39;, price:66}, {name:&#39;js&#39;, price:88}], tags:[&#39;html&#39;, &#39;js&#39;]},
{name:&#39;ls&#39;, books:[{name:&#39;vue&#39;, price:99}, {name:&#39;node&#39;, price:199}], tags:[&#39;vue&#39;, &#39;node&#39;]}
])
db.person.update({name:&#39;zs&#39;}, {$addToSet:{tags:&#39;react&#39;}})

3.注意点
// 注意点:如果操作的元素不存在, 那么会自动新增, 并且将操作的值赋值给新增的数组字段
db.person.update({name:&#39;zs&#39;}, {$addToSet:{other:&#39;123&#39;}})
// 注意点: $addToSet会自动去重, 如果添加的元素已经存在了, 那么就不会添加了
db.person.update({name:&#39;zs&#39;}, {$addToSet:{other:&#39;123&#39;}})
// 注意点: 如果往数组字段中添加的是文档类型, 那么必须一模一样才会去重
db.person.update({name:&#39;zs&#39;}, {$addToSet:{books:{name:&#39;html&#39;, price:66}}})
db.person.update({name:&#39;zs&#39;}, {$addToSet:{books:{price:66, name:&#39;html&#39;}}})
// 注意点: 如果往数组字段中添加的是数组, 那么也必须一模一样才会去重
db.person.update({name:&#39;ls&#39;}, {$addToSet:{tags:[&#39;1&#39;, &#39;2&#39;]}})
db.person.update({name:&#39;ls&#39;}, {$addToSet:{tags:[&#39;1&#39;, &#39;2&#39;]}})
db.person.update({name:&#39;ls&#39;}, {$addToSet:{tags:[&#39;2&#39;, &#39;1&#39;]}})
// 注意点: 如果往往数组字段中添加的是数组, 那么默认情况下会将整个数组作为一个元素添加进去
//      如果不想诶一个整体添加进去,那么必须使用$each来添加
db.person.update({name:&#39;ls&#39;}, {$addToSet:{tags:{$each: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]}}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$push数组更新操作符
$push: 向数组字段中添加元素(不去重)
格式     : {$push: {&lt;field&gt;:&lt;value1&gt;, ...}}
--&gt;</span>
<span class="token comment">&lt;!--
1.$pop数组更新操作符
$pop: 从数组字段中删除元素
格式: {$pop: {&lt;field&gt;:&lt;1|-1&gt;, ...}}

2.示例
db.person.update({name:&#39;zs&#39;}, {$pop:{tags:1}}) #删除最后一个
db.person.update({name:&#39;zs&#39;}, {$pop:{tags:-1}})#删除第一个

3.注意点
数组中的元素都被删除以后, 仍然会保留空的数组
--&gt;</span>
<span class="token comment">&lt;!--
1.$pull数组更新操作符
$pull: 从数组字段中删除特定元素
格式: {$pull: {&lt;field&gt;:&lt;value|condition&gt;, ...}}

2.示例
db.person.insert([
{name:&#39;zs&#39;, books:[{name:&#39;html&#39;, price:66}, {name:&#39;js&#39;, price:88}], tags:[&#39;html&#39;, &#39;js&#39;, [&#39;1&#39;, &#39;2&#39;]]},
{name:&#39;ls&#39;, books:[{name:&#39;vue&#39;, price:99}, {name:&#39;node&#39;, price:199}], tags:[&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;ac&#39;]}
])
删除特定元素
根据条件删除元素
db.person.update({name:&#39;zs&#39;}, {$pull:{tags:&#39;js&#39;}})
db.person.update({name:&#39;ls&#39;}, {$pull:{tags:/^a/}})

3.注意点
// 注意点: 如果要删除的元素是一个数组, 那么必须一模一样才能删除
db.person.update({name:&#39;zs&#39;}, {$pull:{tags:[&#39;2&#39;, &#39;1&#39;]}})
db.person.update({name:&#39;zs&#39;}, {$pull:{tags:[&#39;1&#39;, &#39;2&#39;]}})
// 注意点: 如果要删除的元素是一个文档, 那么不用一模一样也可以删除
db.person.update({name:&#39;zs&#39;}, {$pull:{books:{price:66, name:&#39;html&#39;}}})
db.person.update({name:&#39;zs&#39;}, {$pull:{books:{name:&#39;js&#39;}}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$pullAll数组更新操作符
$pullAll: 从数组字段中批量删除特定元素
格式: {$pullAll: {&lt;field&gt;: [&lt;value1&gt;, &lt;value2&gt;, ...], ...}}

2.示例
db.person.insert([
{name:&#39;zs&#39;, books:[{name:&#39;html&#39;, price:66}, {name:&#39;js&#39;, price:88}], tags:[&#39;html&#39;, &#39;js&#39;, [&#39;1&#39;, &#39;2&#39;]]},
{name:&#39;ls&#39;, books:[{name:&#39;vue&#39;, price:99}, {name:&#39;node&#39;, price:199}], tags:[&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;ac&#39;]}
])
db.person.update({name:&#39;zs&#39;}, {$pullAll:{tags:[&#39;html&#39;, &#39;js&#39;]}})

3.注意点
// 注意点: 和$pull一样, 如果删除的是数字字段中的数组元素, 那么必须一模一样才能删除
db.person.update({name:&#39;zs&#39;}, {$pullAll:{tags:[[&#39;2&#39;,&#39;1&#39;]]}})
db.person.update({name:&#39;zs&#39;}, {$pullAll:{tags:[[&#39;1&#39;,&#39;2&#39;]]}})
// 注意点: 和$pull不一样, 如果删除的是数组字段中的文档元素, 那么也必须一模一样才能删除
db.person.update({name:&#39;zs&#39;}, {$pullAll:{books:[{price:66,name:&#39;html&#39;}]}})
db.person.update({name:&#39;zs&#39;}, {$pullAll:{books:[{name:&#39;html&#39;,price:66}]}})
--&gt;</span>
<span class="token comment">&lt;!--
1.$和$[]数组更新操作符
$   : 更新数组中满足条件的特定元素
格式:
db.&lt;collection&gt;.update(
{ &lt;array field&gt;:&lt;query selector&gt; }
{ &lt;update operator&gt;: {&#39;&lt;array field&gt;.$&#39;:value}}
)
$[]: 更新数组中所有元素
db.&lt;collection&gt;.update(
{ &lt;update operator&gt;: {&#39;&lt;array field&gt;.$[]&#39;:value}}
)

2.示例
db.person.insert([
{name:&#39;zs&#39;, books:[{name:&#39;html&#39;, price:66}, {name:&#39;js&#39;, price:88}], tags:[&#39;html&#39;, &#39;js&#39;, [&#39;1&#39;, &#39;2&#39;]]},
{name:&#39;ls&#39;, books:[{name:&#39;vue&#39;, price:99}, {name:&#39;node&#39;, price:199}], tags:[&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;ac&#39;]}
])
db.person.find()

db.person.update(
{name:&#39;zs&#39;, tags:&#39;js&#39;},
{$set:{&#39;tags.$&#39;:&#39;JavaScript&#39;}}
)

db.person.update(
{name:&#39;zs&#39;},
{$set:{&#39;tags.$[]&#39;: &#39;it666&#39;}}
)
--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function v(m,r){return e(),i("div",null,a)}const b=n(d,[["render",v],["__file","06-MongoDB更新文档.html.vue"]]);export{b as default};
