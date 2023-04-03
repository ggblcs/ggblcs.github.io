import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_21-sequelize-创建表" tabindex="-1"><a class="header-anchor" href="#_21-sequelize-创建表" aria-hidden="true">#</a> 21 -Sequelize-创建表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 1.导入Sequelize</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.配置连接信息</span>
<span class="token comment">/*
第一个参数: 要操作的数据库名称
第二个参数: 数据库用户名
第三个参数: 数据库密码
第四个参数: 其它的配置信息
* */</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// MySQL服务器地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment">// MySQL服务器端口号</span>
    <span class="token comment">// 注意点: Sequelize不仅仅能操作MySQL还能够操作其它类型的数据库</span>
    <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 告诉Sequelize当前要操作的数据库类型</span>
    <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最多有多少个连接</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 最少有多少个连接</span>
        <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 当前连接多久没有操作就断开</span>
        <span class="token literal-property property">acquire</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token comment">// 多久没有获取到连接就断开</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
1.字段说明常用属性
type:  字段类型
primaryKey: 是否是主键
autoIncrement: 是否自动增长
allowNull: 是否允许为空
unique: 是否必须唯一
defaultValue:  默认值
* */</span>
<span class="token comment">/*
2.额外配置常用属性
timestamps: 是否自动添加createdAt/updateAt字段
freezeTableName: 是否禁止自动将表名修改为复用
tableName:  是否自定义表名
indexes: [ // 指定索引
    {
        name: &#39;&#39;, // 索引名称
        fields: [&#39;&#39;], // 索引字段名称
    }
]
* */</span>

<span class="token comment">/*
第一个参数: 用于指定表的名称
第二个参数: 用于指定表中有哪些字段
第三个参数: 用于配置表的一些额外信息
* */</span>
<span class="token comment">/*
注意点:
1.sequelize在根据模型创建表的时候, 会自动将我们指定的表的名称变成复数
2.sequelize在根据模型创建表的时候, 会自动增加两个字段 createAt/updateAt
* */</span>
<span class="token keyword">let</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token comment">// varchar(255)</span>
        <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">TINYINT</span><span class="token punctuation">,</span>
        <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">66</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">ENUM</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;妖&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&#39;妖&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 告诉sequelize不需要自动将表名变成复数</span>
    <span class="token comment">// tableName: &#39;student&#39;, // 自定义表名</span>
    <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不需要自动创建createAt/updateAt这两个字段</span>
    <span class="token literal-property property">indexes</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指定索引</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;idx_age&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 索引名称</span>
            <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 索引字段名称</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注意点: 默认定义好一个模型之后并不会自动创建对应的表</span>
<span class="token comment">//         我们需要通过调用连接对象的sync方法来执行同步</span>
<span class="token comment">//         只有同步之后才会自动根据模型创建对应的表</span>
sequelize<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function o(i,c){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","121-Sequelize-创建表.html.vue"]]);export{u as default};
