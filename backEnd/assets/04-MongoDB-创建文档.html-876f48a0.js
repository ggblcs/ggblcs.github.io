import{_ as n,p as e,q as i,a1 as d}from"./framework-96b046e1.js";const s={},l=d(`<h1 id="_04-mongodb-创建文档" tabindex="-1"><a class="header-anchor" href="#_04-mongodb-创建文档" aria-hidden="true">#</a> 04 -MongoDB-创建文档</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.主键
- MongoDB的主键和MySQL一样, 也是用于保证每一条数据唯一性的
- 和MySQL不同的是, MongoDB中的主键无需明确指定
    + 每一个文档被添加到集合之后, MongoDB都会自动添加主键
    + MongoDB中文档主键的名称叫做 _id

- 默认情况下文档主键是一个ObjectId类型的数据
    + ObjectId类型是一个12个字节字符串(5e8c5ae9-c9d35e-759b-d6847d)
        + 4字节是存储这条数据的时间戳
        + 3字节的存储这条数据的那台电脑的标识符
        + 2字节的存储这条数据的MongoDB进程id
        + 3字节是计数器

2.为什么要使用ObjectId类型数据作为主键?
因为MongoDB是支持&#39;横向扩展&#39;的数据库
- 横向扩展是指&#39;增加数据库服务器的台数&#39;
- 纵向扩展是指&#39;增加数据库库服务器的配置&#39;

- 过去一个数据库只能安装在一台电脑上, 但是每台电脑的性能是有峰值的
  一旦达到峰值就会导致服务器卡顿、宕机、重启等问题.
  所以过去为了防止如上问题的出现,我们只能不断的&#39;纵向扩展&#39;
  也就是不断的提升服务器的配置, 让服务器能处理更多的请求
  但是纵向扩展也是有峰值的, 一台电脑的配置不可能无限提升
  所以为了解决这个问题就有了分布式数据库
- 分布式数据库是指可以在多台电脑上安装数据库, 然后把多台电脑组合成一个完整的数据库,
  在分布式数据库中,我们可以通过不断同步的方式, 让多台电脑都保存相同的内容
  当用户请求数据时, 我们可以把请求派发给不同的数据库服务器处理
  当某一台服务器宕机后, 我们还可以继续使用其它服务器处理请求
  从而有效的解决了单台电脑性能峰值和单台电脑宕机后服务器不能使用的问题

2.2为什么要使用ObjectId类型数据作为主键?
正是因为MongoDB是一个分布式数据库, 正是因为分布式数据库可以把请求派发给不同的服务器
所以第一次插入数据时, 我们可能派发给了A服务器, 插入到了A服务器的数据库中
但是第二次插入数据时, 我们又可能派发给了B服务器, 插入到了B服务器的数据库中
但是B服务器此时并不知道A服务器当前的主键值是多少, 如果通过MySQL中简单的递增来保证数据的唯一性
那么将来在多台服务器同步数据的时候就会出现重复的情况, 所以MongoDB的主键并没有使用简单的递增
而是使用了ObjectId类型数据作为主键

3.是否支持其它类型数据作为主键?
3.1在MongoDB中支持除了&#39;数组类型&#39;以外的其它类型数据作为主键
3.2在MongoDB中甚至还支持将一个文档作为另一个文档的主键(复合主键)

db.person.insert({name: &#39;lnj&#39;, age: 33});
db.person.insert({_id: 1, name: &#39;lnj&#39;, age: 33});
#db.person.insert({_id: 1, name: &#39;lnj&#39;, age: 33}); #报错
db.person.insert({_id: &#39;1&#39;, name: &#39;lnj&#39;, age: 33});
db.person.insert({_id: {name:&#39;it66&#39;, gender: &#39;男&#39;}, name: &#39;lnj&#39;, age: 33});
#db.person.insert({_id: {name:&#39;it66&#39;, gender: &#39;男&#39;}, name: &#39;lnj&#39;, age: 33}); #报错
db.person.insert({_id: {gender: &#39;男&#39;, name:&#39;it66&#39;}, name: &#39;lnj&#39;, age: 33});
--&gt;</span>

<span class="token comment">&lt;!--
1.写入一个文档
db.&lt;collection&gt;.insertOne(
    &lt;document&gt;,
    {
        writeConcern: &lt;document&gt;
    }
);
document: 需要写入的文档
writeConcern: 写入安全级别

2.安全级别
用于判断数据是否写入成功,
安全级别越高, 丢失数据风险越小, 但是性能消耗(操作延迟)也就越大
默认情况下MongoDB会开启默认的安全些级别,先不用关心

3.注意点
在使用insertXXX写入文档时, 如果调用insertOne的集合不存在会自动创建

db.person.insertOne({name:&#39;zs&#39;, age:18})
db.person.find()
db.student.insertOne({name:&#39;zs&#39;, age:18}) #集合不存在会自动创建
db.student.find()


4.其它方式
db.&lt;collection&gt;.save(
    &lt;document&gt;,
    {
        writeConcern: &lt;document&gt;
    }
);

db.person.save({name:&#39;ls&#39;, age:19})
db.person.find()
db.teacher.save({name:&#39;ls&#39;, age:19}) #集合不存在会自动创建
db.teacher.find()

5.insertOne和save不同
主键冲突时insertOne会报错,而save会直接用新值覆盖久值
db.person.insertOne({_id:1, name:&#39;ww&#39;, age:22})
db.person.find()
db.person.insertOne({_id:1, name:&#39;ww&#39;, age:22}) #报错
db.person.save({_id:1, name:&#39;it666&#39;, age:66}) #用新数据替换久数据
db.person.find()
--&gt;</span>
<span class="token comment">&lt;!--
1.写入多个文档
db.&lt;collection&gt;.insertMany(
    [&lt;document&gt;, ...],
    {
        writeConcern: &lt;document&gt;,
        ordered: &lt;boolean&gt;
    }
);
ordered: 是否按顺序写入
ordered默认取值是true, 也就是会严格按照顺序写入
如果ordered是false, 则不会按照顺序写入, 但写入效率更高(系统会自动优化)

db.person.insertMany(
[{name:&#39;zs&#39;, age:18},{name:&#39;ls&#39;, age:19},{name:&#39;ww&#39;, age:20}],
{}
)
db.person.find()
2.注意点:
如果ordered是true, 前面的文档出错, 后面的所有文档都不会被写入
如果ordered是false, 前面的文档出错, 后面的所有文档也会被写入

db.person.insertMany(
[{_id:1, name:&#39;zs&#39;, age:18},{_id:1, name:&#39;ls&#39;, age:19},{_id:2, name:&#39;ww&#39;, age:20}],
{ ordered: true }
)
db.person.find()

db.person.remove({})
db.person.insertMany(
[{_id:1, name:&#39;zs&#39;, age:18},{_id:1, name:&#39;ls&#39;, age:19},{_id:2, name:&#39;ww&#39;, age:20}],
{ ordered: false }
)
db.person.find()
--&gt;</span>
<span class="token comment">&lt;!--
1.写入一个或多个文档
db.&lt;collection&gt;.insert(
    &lt;document&gt; or ,[&lt;document&gt;, ...]
    {
        writeConcern: &lt;document&gt;,
        ordered: &lt;boolean&gt;
    }
);
insertOne和insertMany结合体

2.注意点:
和insertOne/insertMany一样,  集合不存在会自动创建
和insertOne/insertMany一样,  主键冲突会报错
和insertMany一样, 默认都是按顺序插入, 前面的文档出错, 后续所有文档不会被插入
--&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,c){return e(),i("div",null,v)}const b=n(s,[["render",a],["__file","04-MongoDB-创建文档.html.vue"]]);export{b as default};
