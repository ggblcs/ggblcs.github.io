import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_10-mongodb数据模型" tabindex="-1"><a class="header-anchor" href="#_10-mongodb数据模型" aria-hidden="true">#</a> 10 -MongoDB数据模型</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.文档之间关系
MongoDB对于文档的格式并没有强制性的要求, 但不等于我们不能在文档中表达数据的关系
在MongoDB中我们可以通过&#39;内嵌式结构&#39;和&#39;规范式结构&#39;来表达文档之间的关系

2.内嵌式结构
在一个文档中又包含了另一个文档, 我们就称之为内嵌式结构
例如:
{
    name:&#39;zs&#39;,
    age:&#39;18&#39;,
    card:{
        num:&#39;420626200002023556&#39;,
        date: 88
    }
}

3.规范式结构
将文档存储在不同的集合中, 然后通过某一个字段来建立文档之间的关系, 我们就称之为规范式
{
    _id: 1,
    num:&#39;420626200002023556&#39;,
    date: 88
}
{
    name:&#39;zs&#39;,
    age:&#39;18&#39;,
    cardId: 1
}
--&gt;</span>
<span class="token comment">&lt;!--
1.文档一对一关系
一个人有一张身份证
1.1内嵌式结构
db.person.insert({
    name:&#39;zs&#39;,
    age:&#39;18&#39;,
    card:{
        num:&#39;420626200002023556&#39;,
        date: 88
    }
})
db.person.find({name:&#39;zs&#39;})
优势: 一次查询就能得到所有数据
劣势: 如果数据比较复杂, 不方便管理和更新
应用场景: 数据不复杂/查询频率较高数据

1.2规范式结构
db.card.insert({
    _id: 123,
    num:&#39;420626200002023556&#39;,
    date: &#39;2022-12-08&#39;,
    userId: 456
})
db.person.insert({
    _id: 456,
    name:&#39;zs&#39;,
    age:&#39;18&#39;,
    cardId: 123
})
db.person.aggregate([
    {$lookup:{
        from: &#39;card&#39;,
        localField: &#39;cardId&#39;,
        foreignField: &#39;_id&#39;,
        as: &#39;card&#39;
    }}
])
优势: 如果数据比较复杂, 也方便管理和更新
劣势: 查询数据相对内嵌结果稍微有点复杂
应用场景: 数据比较复杂/更新频率较高数据
--&gt;</span>
<span class="token comment">&lt;!--
1.文档一对多关系
一个人有多本书
1.1内嵌式结构
db.person.insert({
    name:&#39;zs&#39;,
    age:&#39;18&#39;,
    books:[{
        name:&#39;玩转HTML&#39;,
        price: 88
    },
    {
        name:&#39;玩转CSS&#39;,
        price: 88
    }]
})
db.person.find({name:&#39;zs&#39;})
优势: 一次查询就能得到所有数据
劣势: 冗余数据较多, 不方便管理和更新
应用场景: 数据不复杂/查询频率较高数据

1.2规范式结构
db.books.insert([{
    _id: 1,
    name:&#39;玩转HTML&#39;,
    price: 88,
    userId:123
},
{
    _id: 2,
    name:&#39;玩转CSS&#39;,
    price: 88,
    userId:123
}])
db.person.insert({
    _id: 123,
    name:&#39;ls&#39;,
    age:&#39;20&#39;,
    booksId:[1, 2]
})
db.person.aggregate([
    {$lookup:{
        from: &#39;books&#39;,
        localField: &#39;booksId&#39;,
        foreignField: &#39;_id&#39;,
        as: &#39;books&#39;
    }}
])
优势: 冗余数据较少, 更新较为方便
劣势: 查询数据相对内嵌结果稍微有点复杂
应用场景: 数据比较复杂/更新频率较高数据
--&gt;</span>
<span class="token comment">&lt;!--
1.文档多对多关系
一个学生有多个老师
一个老师有多个学生
1.1内嵌式结构
db.students.insert([{name:&#39;zs&#39;, teachers:[{name:&#39;it666&#39;}, {name:&#39;itzb&#39;}]},
{name:&#39;ls&#39;, teachers:[{name:&#39;it666&#39;}, {name:&#39;itzb&#39;}]}])

db.teachers.insert([{name:&#39;it666&#39;, students:[{name:&#39;zs&#39;}, {name:&#39;ls&#39;}]},
{name:&#39;itzb&#39;, students:[{name:&#39;zs&#39;}, {name:&#39;ls&#39;}]}])
db.students.find({name:&#39;zs&#39;})
db.teachers.find({name:&#39;itzb&#39;})
优势: 一次查询就能得到所有数据
劣势: 冗余数据较多, 更新和管理较为复杂
应用场景: 数据比较简单/查询频率较高数据

1.2规范式结构
db.students.insert([{_id:1, name:&#39;zs&#39;},{_id:2, name:&#39;ls&#39;}])
db.teachers.insert([{_id:3, name:&#39;it6666&#39;},{_id:4, name:&#39;itzb&#39;}])
db.relation.insert([{stuId:1, teacherId:3},{stuId:1, teacherId:4},{stuId:2, teacherId:3},{stuId:2, teacherId:4}])

db.students.aggregate([
    {$lookup:{
        from: &#39;relation&#39;,
        localField: &#39;_id&#39;,
        foreignField:&#39;stuId&#39;,
        as: &#39;relation&#39;
    }},
    {$lookup:{
        from: &#39;teachers&#39;,
        localField: &#39;relation.teacherId&#39;,
        foreignField:&#39;_id&#39;,
        as: &#39;teachers&#39;
    }},
    {$project:{_id:0, name:1, teachers:1}}
])

优势: 冗余数据较少, 更新较为方便
劣势: 查询数据相对内嵌结果稍微有点复杂
应用场景: 数据比较复杂/更新频率较高数据
--&gt;</span>
<span class="token comment">&lt;!--
1.树形结构
在MongoDB中我们除了可以使用&#39;内嵌式结构&#39;和&#39;规范式结构&#39;来表示数据的关系以外
由于MongoDB数据的灵活性, 我们还可以使用&#39;树形结构&#39;来表示数据之间的关系

2.什么是树形结构
            Database
               |
     |--------------------|
 Relational           No-Relational
     |          |-----------|-------------|
   MySQL      Key-Value                Document
                |                         |
              Redis                    MongoDB

3.对于经常需要查询子节点的数据
{name:&#39;Database&#39;, parent:null}
{name:&#39;No-Relational&#39;, parent:&#39;Database&#39;}
{name:&#39;Document&#39;, parent:&#39;No-Relational&#39;}
{name:&#39;MongoDB&#39;, parent:&#39;Document&#39;}
{name:&#39;Key-Value&#39;, parent:&#39;No-Relational&#39;}
{name:&#39;Redis&#39;, parent:&#39;Key-Value&#39;}
例如:我们要查询非关系型数据库有几种类型, 我们可以使用find({parent:&#39;No-Relational&#39;})

4.对于经常需要查询父节点的数据
{name:&#39;Database&#39;, children:[&#39;Relational&#39;, &#39;No-Relational&#39;]}
{name:&#39;No-Relational&#39;, children:[&#39;Key-Value&#39;, &#39;Document&#39;]}
{name:&#39;Document&#39;, children:[&#39;MongoDB&#39;]}
{name:&#39;MongoDB&#39;, children:[]}
例如:我们要查询MongoDB是什么类型的的数据, 我们可以使用find({children:{$in:[&#39;MongoDB&#39;]}})

5.对于经常查询祖先或者后代节点的数据
{name:&#39;Database&#39;, ancestors:[]}
{name:&#39;No-Relational&#39;, ancestors:[&#39;Database&#39;]}
{name:&#39;Document&#39;, ancestors:[&#39;Database&#39;, &#39;No-Relational&#39;]}
{name:&#39;MongoDB&#39;, ancestors:[&#39;Database&#39;, &#39;No-Relational&#39;, &#39;Document&#39;]}
例如: 我们要查询MongoDB的祖先有哪些, 我们可以使用find({name:&#39;MongoDB&#39;})
例如: 我们要查询Database的后代有哪些, 我们可以使用find({ancestors:{$in:[&#39;Database&#39;]}}})

6.结合深度优先或者广度优先算法来实现树形结构
不在本科课程范围内
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,m){return i(),e("div",null,v)}const u=n(d,[["render",a],["__file","10-MongoDB数据模型.html.vue"]]);export{u as default};
