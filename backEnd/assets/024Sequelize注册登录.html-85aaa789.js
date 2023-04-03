import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_024-sequelize注册登录" tabindex="-1"><a class="header-anchor" href="#_024-sequelize注册登录" aria-hidden="true">#</a> 024 Sequelize注册登录</h1><p>导入模型对象，模型对象.方法名即可操作数据库增删改查。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Sequelize处理注册登录

 */</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../db/model/user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// username = escape(username)</span>
    <span class="token comment">// password = escape(password)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// let result = await User.findOne({</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span> username<span class="token punctuation">,</span>
                <span class="token literal-property property">password</span><span class="token operator">:</span> password
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
        <span class="token comment">// let sql = \`select * from user where username = \${username} and password = \${password}\`</span>
        <span class="token comment">// let result = await exc(sql)</span>
        <span class="token comment">// return result</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span> username
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
        <span class="token comment">// let sql = \`select * from user where username = \${username}\`</span>
        <span class="token comment">// let result = await exc(sql)</span>
        <span class="token comment">// return result</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> sex<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// let sql = \`insert into user (username, password, sex) values(&#39;\${username}&#39;,&#39;\${password}&#39;,&#39;\${sex}&#39;)\`</span>
    <span class="token comment">// let result = await exc(sql)</span>
    <span class="token comment">// return result</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> username<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> password<span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> sex
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>  result<span class="token punctuation">[</span><span class="token string">&#39;dataValues&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    getUser<span class="token punctuation">,</span>
    createUser
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[p];function o(c,i){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","024Sequelize注册登录.html.vue"]]);export{u as default};
