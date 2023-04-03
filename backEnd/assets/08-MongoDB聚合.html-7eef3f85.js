import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_08-mongodb聚合" tabindex="-1"><a class="header-anchor" href="#_08-mongodb聚合" aria-hidden="true">#</a> 08 -MongoDB聚合</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是聚合操作?
- 聚合操作就是通过一个方法完成一系列的操作
- 在聚合操作中, 每一个操作我们称之为一个阶段,
  聚合操作会将上一个阶段处理结果传给下一个阶段继续处理,
  所有阶段都处理完毕会返回一个新的结果集给我们

2.聚合操作格式
db.&lt;collection&gt;.aggregate(&lt;pipeline&gt;, &lt;options&gt;)
&lt;pipeline&gt;: 定义每个阶段操作
&lt;options&gt; : 聚合操作额外配置

3.聚合管道阶段
$project: 对输入文档进行再次投影
作用    : 按照我们需要的格式生成结果集
格式    : {$project:{&lt;field&gt;:&lt;value&gt;}}

4.示例
db.person.insert([
    {name:{firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;}, age:18, book:{name:&#39;玩转HTML&#39;, price: 88}},
    {name:{firstName:&#39;Amelie&#39;, lastName:&#39;Jiang&#39;}, age:17, book:{name:&#39;玩转JavaScript&#39;, price: 99}}
])
db.person.aggregate([
    {
        $project:{
            _id:0,
            clientName: &#39;$name.firstName&#39;,
            clientAge: &#39;$age&#39;
        }
    }
])

5.聚合表达式
5.1字段路径表达式
$&lt;filed&gt;: 使用$来指示字段路径
$&lt;filed&gt;.&lt;sub-field&gt;: 使用$和.来指示内嵌文档字段路径
5.2字段路径表达式示例
$name
$book.name

6.注意点:
// 注意点: $project修改的是结果集而不是原有的集合
db.person.find()
// 注意点: 如果字段表达式使用了不存在的字段, 那么会自动用Null填充
db.person.aggregate([
    {
        $project:{
            _id:0,
            fullName: [&#39;$name.firstName&#39;, &#39;$name.middleName&#39;,&#39;$name.lastName&#39;],
            clientAge: &#39;$age&#39;
        }
    }
])
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$match: 和find方法中的第一个参数一样, 用于筛选符合条件的文档
格式  : {$match:{&lt;query&gt;}}

2.示例
db.person.aggregate([
    {
        $match:{
            &#39;name.firstName&#39;:&#39;Jonathan&#39;
        }
    }
])
db.person.aggregate([
    {
        $match:{
            &#39;name.firstName&#39;:&#39;Jonathan&#39;
        }
    },
    {
        $project:{
            _id:0,
            clientName: &#39;$name.firstName&#39;,
            clientAge: &#39;$age&#39;
        }
    }
])

3.使用技巧:
应该在聚合操作的最前面使用$match, 这样可以有效减少处理文档的数量, 大大提升处理的效率
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$limit: 和游标的limit方法一样, 用于指定获取几个文档
格式  : {$limit:&lt;number&gt;}
$skip : 和游标的skip方法一样, 用于指定跳过几个文档
格式  : {$skip:&lt;number&gt;}

2.示例
db.person.aggregate([
    {
        $skip:1
    },
    {
        $limit:1
    },
    {
        $project:{
            _id:0,
            clientName: &#39;$name.firstName&#39;,
            clientAge: &#39;$age&#39;
        }
    }
])

--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$unwind: 展开数组字段
格式   : {$unwind:{path:&lt;field&gt;}}

2.示例:
db.person.update({&#39;name.firstName&#39;:&#39;Jonathan&#39;}, {$set:{tags:[&#39;html&#39;, &#39;js&#39;]}})
db.person.update({&#39;name.firstName&#39;:&#39;Amelie&#39;}, {$set:{tags:&#39;vue&#39;}})
db.person.aggregate([
    {
        $unwind:{
            path:&#39;$tags&#39;
        }
    }
])

3.注意点:
3.1$unwind会为数组中的每个元素创建一个新的文档
3.2可以通过includeArrayIndex属性添加展开之后的元素在原数组中的位置
db.person.aggregate([
    {
        $unwind:{
            path:&#39;$tags&#39;,
            includeArrayIndex: &#39;index&#39;
        }
    }
])
3.3如果需要展开的字段不存在, 或者数组中没有元素, 或者为null, 会被unwind剔除
db.person.insert([
    {name:{firstName:&#39;san&#39;, lastName:&#39;zhang&#39;}, age:20},
    {name:{firstName:&#39;si&#39;, lastName:&#39;li&#39;}, age:21, tags:[]},
    {name:{firstName:&#39;wu&#39;, lastName:&#39;wang&#39;}, age:22, tags:null}
])
3.4如果想让unwind不剔除不存在/没有元素/为Null的文档, 那么可以添加preserveNullAndEmptyArrays属性
db.person.aggregate([
    {
        $unwind:{
            path:&#39;$tags&#39;,
            includeArrayIndex: &#39;index&#39;,
            preserveNullAndEmptyArrays: true
        }
    }
])
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$sort: 和文档游标sort方法一样, 对文档进行排序
格式   : {$sort:{&lt;field&gt;&gt;:1|-1}}

2.示例
db.person.aggregate([
    {
        $sort:{
            age: 1
        }
    }
])
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$lookup: 用来做关联查询
格式   :
{$lookup:{
    from: 关联集合名称,
    localField: 当前集合中的字段名称,
    foreignField:关联集合中的字段名称,
    as: 输出字段的名称
}}

2.示例:
db.person.insert([
    {name:{firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;}, age:18, books:[&#39;html&#39;, &#39;js&#39;]},
    {name:{firstName:&#39;Amelie&#39;, lastName:&#39;Jiang&#39;}, age:19, books:[&#39;vue&#39;]},
    {name:{firstName:&#39;si&#39;, lastName:&#39;Li&#39;}, age:20, books:[]}
])
db.books.insert([
    {name:&#39;html&#39;, price:88},
    {name:&#39;js&#39;, price:99},
    {name:&#39;vue&#39;, price:110},
])

db.person.aggregate([
    {
        $lookup:{
            from: &#39;books&#39;,
            localField: &#39;books&#39;,
            foreignField: &#39;name&#39;,
            as: &#39;booksData&#39;
        }
    }
])

3.和unwind阶段结合使用
可以有效的过滤掉无效数据
可以给每个匹配的结果生成一个新的文档
db.person.aggregate([
    {
        $unwind:{
            path:&#39;$books&#39;
        }
    },
    {
        $lookup:{
            from: &#39;books&#39;,
            localField: &#39;books&#39;,
            foreignField: &#39;name&#39;,
            as: &#39;booksData&#39;
        }
    }
])
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$lookup: 用来做关联查询
格式   :
{$lookup:{
    from: 关联集合名称,
    let: {定义给关联集合的聚合操作使用的当前集合的常量},
    pipeline: [关联集合的聚合操作]
    as: 输出字段的名称
}}

2.示例:
不相关查询
db.person.aggregate([
    {
        $lookup:{
            from: &#39;books&#39;,
            pipeline: [
                {
                    $match:{
                        price:{$gte:100}
                    }
                }
            ],
            as: &#39;booksData&#39;
        }
    }
])
相关查询
db.person.aggregate([
    {
        $lookup:{
            from: &#39;books&#39;,
            let: { bks: &#39;$books&#39;},
            pipeline: [
                {
                    $match:{
                        $expr:{
                            $and:[
                            {$gte: [&#39;$price&#39;, 100]},
                            {$in: [&#39;$name&#39;, &#39;$$bks&#39;]}
                            ]
                        }
                        //price:{$gte:100}
                    }
                }
            ],
            as: &#39;booksData&#39;
        }
    }
])

3系统变量表达式
$$&lt;variable&gt;: 使用$$来指示系统变量
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$group: 对文档进行分组
格式  :
{$group:{
    _id:&lt;expression&gt;,
    &lt;field1&gt;: {&lt;accumulator1&gt;: &lt;expression1&gt;}
    ... ...
}}
_id: 定义分组规则
&lt;field&gt;: 定义新字段

2.示例
db.person.insert([
{name:&#39;zs&#39;, age:10, city:&#39;北京&#39;},
{name:&#39;ls&#39;, age:20, city:&#39;上海&#39;},
{name:&#39;ww&#39;, age:30, city:&#39;北京&#39;},
{name:&#39;zl&#39;, age:40, city:&#39;上海&#39;},
{name:&#39;lnj&#39;, age:50, city:&#39;北京&#39;},
{name:&#39;jjj&#39;, age:60, city:&#39;广州&#39;},
])
db.person.aggregate([
    {$group:{
        _id:&#39;$city&#39;,
        totalAge:{$sum:&#39;$age&#39;},
        avgAge:{$avg:&#39;$age&#39;},
        minAge:{$min:&#39;$age&#39;},
        maxAge:{$max:&#39;$age&#39;},
        totalName:{$push:&#39;$name&#39;}
    }}
])
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合管道阶段
$out: 前面阶段处理完的文档写入一个新的集合
格式: {$out: &lt;new collection name&gt;}

2.示例:
db.person.aggregate([
    {
        $group:{
            _id: &#39;$city&#39;,
            totalAge: {$sum:&#39;$age&#39;},
            avgAge: {$avg: &#39;$age&#39;},
            minAge: {$min: &#39;$age&#39;},
            maxAge: {$max: &#39;$age&#39;},
            totalAges: {$push: &#39;$age&#39;}
        }
    },
    {
        $out:&#39;newPerson&#39;
    }
])
db.newPerson.find()

3.注意点:
如果利用$out写入一个已经存在的集合, 那么集合中的原有数据会被覆盖
--&gt;</span>
<span class="token comment">&lt;!--
1.聚合操作额外配置
db.&lt;collection&gt;.aggregate(&lt;pipeline&gt;, &lt;options&gt;)
格式: {allowDiskUse: &lt;boolean&gt;}
allowDiskUse默认取值是false, 默认情况下管道阶段占用的内存不能超过100M,如果超出100M就会报错
如果需要处理的数据比较多, 聚合操作使用的内存可能超过100M, 那么我们可以将allowDiskUse设置为true
如果allowDiskUse设置为true, 那么一旦超出100M就会将操作的数据写入到临时文件中, 然后再继续操作
--&gt;</span>
<span class="token comment">&lt;!--
1.字段路径表达式
$&lt;filed&gt;: 使用$来指示字段路径
$&lt;filed&gt;.&lt;sub-field&gt;: 使用$和.来指示内嵌文档字段路径
2.示例
$name
$book.name

3.系统变量表达式
$$CURRENT: 表示当前操作的文档
4.示例
$$CURRENT.name  等价于 $name

5.常量表达式
$literal:&lt;value&gt; : 表示常量&lt;value&gt;
6.示例
$literal:&#39;$name&#39; : 表示常量字符串$name


db.person.insert([
    {name:{firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;}, age:18},
    {name:{firstName:&#39;Amelie&#39;, lastName:&#39;Jiang&#39;}, age:19}
])
db.person.find()

db.person.aggregate([
    {$project:{
        _id:0,
        //myName:&#39;$name.firstName&#39;, // 字段路径表达式
        //myAge:&#39;$age&#39; // 字段路径表达式
        //myName:&#39;$$CURRENT.name.firstName&#39;, //系统变量表达式
        //myAge:&#39;$$CURRENT.age&#39; // 系统变量表达式
        myName:&#39;$name.firstName&#39;,
        myAge:{$literal:&#39;$age&#39;} // 常量表达式
    }}
])

--&gt;</span>
<span class="token comment">&lt;!--
1.数据类型转换操作符
- MongoDB对于文档的格式并没有强制性的要求, 同一个集合中存储的文档, 字段的个数和数据类型都可以不同
对与文档的格式没有强制性的要求是MongoDB的一大优势, 但是同时也增加了数据消费端的使用难度
因为我们在使用数据的时候, 有可能同一个字段取出来的数据类型是不同的, 这样非常不利于我们后续操作
所以也正是因为如此, MongoDB在4.0中推出了$convert数据类型转换操作符
- 通过$convert数据类型转换操作符, 我们可以将不同的数据类型转换成相同的数据类型,
以便于后续我们在使用数据的过程中能够统一对数据进行处理

2.$convert格式
{$convert:{
    input: &#39;需要转换的字段&#39;,
    to: &#39;转换之后的数据类型&#39;,
    onError: &#39;不支持的转换类型&#39;,
    onNull: &#39;没有需要转换的数据&#39;
}}

3.示例
db.person.insert([
{name:&#39;zs&#39;, timestamp:ISODate(&#39;2020-08-09T11:23:34.733Z&#39;)},
{name:&#39;ls&#39;, timestamp:&#39;2021-02-14 12:00:06 +0800  &#39;},
{name:&#39;ww&#39;, timestamp:&#39;  2023-04-01T12:00:00Z&#39;},
{name:&#39;zl&#39;, timestamp:&#39;1587009270000&#39;},
{name:&#39;it666&#39;, timestamp:&#39;Sunday&#39;},
{name:&#39;itzb&#39;},
])
db.person.aggregate([
    {$project:{
        _id:0,
        timestamp:{
            $convert:{
                input:&#39;$timestamp&#39;,
                to:&#39;date&#39;,
                onError: &#39;不支持的转换类型&#39;,
                onNull: &#39;没有需要转换的数据&#39;
            }
        }
    }}
])
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(m,r){return i(),e("div",null,v)}const u=n(l,[["render",a],["__file","08-MongoDB聚合.html.vue"]]);export{u as default};
