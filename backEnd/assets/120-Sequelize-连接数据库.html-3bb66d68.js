import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_20-sequelize-连接数据库" tabindex="-1"><a class="header-anchor" href="#_20-sequelize-连接数据库" aria-hidden="true">#</a> 20 -Sequelize-连接数据库</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Sequelize基本使用
https://sequelize.org/
*/</span>
<span class="token comment">/*
2.什么是数据库连接池?
默认情况下有一个人要使用数据库, 那么就必须创建一个连接
默认情况下有一个人不用数据库了, 为了不占用资源, 那么就必须销毁一个连接
但是频繁的创建和销毁连接是非常消耗服务器性能的, 所以为了提升服务器性能就有了连接池

数据库连接池是负责分配、管理和释放数据库连接，
它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个
* */</span>

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

<span class="token comment">// 3.测试配置是否正确</span>
sequelize<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","120-Sequelize-连接数据库.html.vue"]]);export{r as default};
