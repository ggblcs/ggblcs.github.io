import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_33-sequelize-操作数据" tabindex="-1"><a class="header-anchor" href="#_33-sequelize-操作数据" aria-hidden="true">#</a> 33 -Sequelize-操作数据</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 1.导入Sequelize</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
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

    <span class="token comment">// 3.创建模型</span>
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
    <span class="token comment">// sequelize.sync();</span>

    <span class="token comment">// 4.创建一条数据(一条记录)</span>
    <span class="token comment">/*
    // let u = new User();
    // u.name = &#39;zs&#39;;
    // u.age = 33;
    // u.gender = &#39;男&#39;;
    // await u.save();

    // 下面这段代码 = 创建对象 + save();
    let u = await User.create({
        name: &#39;ww&#39;,
        age: 18,
        gender: &#39;女&#39;
    });
    console.log(u.dataValues);
     */</span>

    <span class="token comment">// 5.查询数据</span>
    <span class="token comment">// let u = await User.findByPk(2);</span>
    <span class="token comment">// console.log(u);</span>

    <span class="token comment">// 6.修改数据</span>
    <span class="token comment">// u.name = &#39;it666&#39;;</span>
    <span class="token comment">// await u.save();</span>

    <span class="token comment">// User.update({</span>
    <span class="token comment">//     name: &#39;zs&#39;</span>
    <span class="token comment">// },{</span>
    <span class="token comment">//     where: {</span>
    <span class="token comment">//         id: 2</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// })</span>

    <span class="token comment">// 7.删除数据</span>
    <span class="token comment">// await u.destroy();</span>
    User<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function o(i,c){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","33-Sequelize-操作数据.html.vue"]]);export{u as default};
