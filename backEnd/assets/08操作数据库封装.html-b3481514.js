import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_08-操作数据库封装" tabindex="-1"><a class="header-anchor" href="#_08-操作数据库封装" aria-hidden="true">#</a> 08 操作数据库封装</h1><p>转接上文 006项目结构下</p><blockquote><p>首先安装驱动 mysql</p></blockquote><p><code>user.js</code> if 语句下新增</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> exc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../db/mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 


<span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">insert into user (username, password) values (&#39;lnj&#39;, 123456)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token function">exc</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 处理注册</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ErrorModel</span><span class="token punctuation">(</span><span class="token string">&#39;注册失败&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>根
├─ bin
│  └─ www.js
├─ config
│  └─ db.js
├─ db
│  └─ mysql.js
├─ model
│  └─ ReslutModel.js
├─ router
│  ├─ goods.js
│  ├─ routerConst.js
│  └─ user.js
└─ app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>db.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token constant">MYSQL_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span>     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">database</span> <span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;pro&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token constant">MYSQL_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span>     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">database</span> <span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>mysql.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入mysql驱动</span>
<span class="token keyword">const</span> mysql      <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;08-操作MySQL封装/db/mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">MYSQL_CONFIG</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/db&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.创建连接对象</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token constant">MYSQL_CONFIG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.连接MySQL数据库</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4.操作MySQL数据库</span>

<span class="token keyword">const</span> <span class="token function-variable function">exc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sql</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> exc<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","08操作数据库封装.html.vue"]]);export{r as default};
