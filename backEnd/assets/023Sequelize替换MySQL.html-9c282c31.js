import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_023-sequelize替换mysql" tabindex="-1"><a class="header-anchor" href="#_023-sequelize替换mysql" aria-hidden="true">#</a> 023 Sequelize替换MySQL</h1><p>以字符串方式在node中写sql语句，写错不报错。</p><p>sequelize以对象方式操作数据库。</p><h2 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i sequelize <span class="token comment"># This will install v6</span>
<span class="token function">npm</span> i mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装mysql2，是因为sequelize支持多种数据库操作，需要操作什么数据库就需要再安装相应依赖。</p><h2 id="_02-上次使用" tabindex="-1"><a class="header-anchor" href="#_02-上次使用" aria-hidden="true">#</a> 02 上次使用</h2><p>上次使用就是基本使用，由于没有学，特列出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
什么是数据库连接池？
默认情况下有一个人要使用数据库，那么就必须创建一个连接
默认情况下有一个人不用数据库了，为了不占用资源，那么就必须销毁一个连接
但是频繁的创建和销毁连接是非常消耗服务器性能的，所以为了提升服务器性能就有了连接池

数据库连接池是负责分配、管理和释放数据库连接，
它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个
 */</span>

<span class="token comment">// 1. 导入Sequelize</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 配置连接信息</span>
<span class="token comment">/*
第一个参数：要操作的数据库名
第二个参数：数据库用户名
第三个参数：数据库密码
第四个参数：其他的配置信息
 */</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 要操作的数据库类型</span>
    <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最多有多少个连接</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 最少有多少个连接</span>
        <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 当前连接多久没有操作就断开</span>
        <span class="token literal-property property">acquire</span><span class="token operator">:</span> <span class="token number">10000</span> <span class="token comment">// 多久没有获取到连接就断开</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 3. 测试配置是否正确</span>
sequelize<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义模型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../seq&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/*
第一个参数：用于指定表的名称
第二个参数：用于指定表中有哪些字段
第三个参数：用于配置表的一些额外信息
 */</span>
<span class="token comment">/*
注意点：
1. sequelize在根据模型创建表的时候，会自动将我们指定的表的名称变成复数
2. sequelize在根据模型创建表的时候，会自动增加两个字段 createAt/updateAt
 */</span>
<span class="token keyword">let</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token comment">// varchar(255)</span>
        <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
    <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不需要自动创建 createAt/updateAt 这两个字段</span>
    <span class="token literal-property property">indexes</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指定索引</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;idx_age&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 索引名称</span>
            <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 索引字段名称</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-本次使用" tabindex="-1"><a class="header-anchor" href="#_03-本次使用" aria-hidden="true">#</a> 03 本次使用</h2><p>在数据库demo存在的情况下运行sync.js可以创建出一张表user。（老师用的npm run dev ，但尝试多次在不引入这些新文件的情况下是无法执行这些代码的。未解之谜。。。）</p><p><code>seq.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
什么是数据库连接池？
默认情况下有一个人要使用数据库，那么就必须创建一个连接
默认情况下有一个人不用数据库了，为了不占用资源，那么就必须销毁一个连接
但是频繁的创建和销毁连接是非常消耗服务器性能的，所以为了提升服务器性能就有了连接池

数据库连接池是负责分配、管理和释放数据库连接，
它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">MYSQL_CONFIG</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/db&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 1. 导入Sequelize</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 配置连接信息</span>
<span class="token comment">/*
第一个参数：要操作的数据库名
第二个参数：数据库用户名
第三个参数：数据库密码
第四个参数：其他的配置信息
 */</span>
<span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">.</span>databaseName<span class="token punctuation">,</span>
    <span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">.</span>databaseUserName<span class="token punctuation">,</span>
    <span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">.</span>databasePassword<span class="token punctuation">,</span>
    <span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">.</span>conf<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> seq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>配置</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MYSQL_CONFIG = {
    databaseName: &#39;demo&#39;,
    databaseUserName: &#39;root&#39;,
    databasePassword : &#39;root&#39;,
    conf: {
        host: &#39;127.0.0.1&#39;,
        port: 3306,
        dialect: &#39;mysql&#39;, // 要操作的数据库类型
        pool: {
            max: 5, // 最多有多少个连接
            min: 0, // 最少有多少个连接
            idle: 10000, // 当前连接多久没有操作就断开
            acquire: 10000 // 多久没有获取到连接就断开
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>model/user.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../seq&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/*
第一个参数：用于指定表的名称
第二个参数：用于指定表中有哪些字段
第三个参数：用于配置表的一些额外信息
 */</span>
<span class="token comment">/*
注意点：
1. sequelize在根据模型创建表的时候，会自动将我们指定的表的名称变成复数
2. sequelize在根据模型创建表的时候，会自动增加两个字段 createAt/updateAt
 */</span>
<span class="token keyword">let</span> User <span class="token operator">=</span> seq<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token comment">// varchar(255)</span>
        <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token comment">// varchar(255)</span>
        <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">ENUM</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;妖&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&#39;妖&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 告诉sequelize不需要自动将表名变成复数</span>
    <span class="token comment">// tableName: &#39;student&#39;, // 自定义表名</span>
    <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不需要自动创建 createAt/updateAt 这两个字段</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sync.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./seq&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 0. 导入模型</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./model/user&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 测试配置是否正确</span>
seq<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 执行同步方法，创建表</span>
seq<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sync ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","023Sequelize替换MySQL.html.vue"]]);export{u as default};
