import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_28-node-mysql" tabindex="-1"><a class="header-anchor" href="#_28-node-mysql" aria-hidden="true">#</a> 28 -node-mysql</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.如何在Node程序中操作MySQL数据库?
我们都知道操作MySQL数据库就是连接MySQL服务器, 给MySQL服务器发送指令
在NodeJS中我们可以借助第三方库来连接MySQL服务器, 给MySQL服务器发送指令
1.1 mysql驱动库
https://www.npmjs.com/package/mysql
npm install mysql
1.2 mysql2驱动库
https://www.npmjs.com/package/mysql2
npm install mysql


2.由于node第三方库还不支持最新的mysql加密, 所以我们需要修改为旧版本加密方式
2.1、更改加密方式：
mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;password&#39; PASSWORD EXPIRE NEVER;
2.2、更改密码
mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;root&#39;;
* */</span>
<span class="token comment">// 1.导入MySQL第三方驱动库</span>
<span class="token keyword">const</span> mysql      <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.进行连接配置</span>
<span class="token keyword">var</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span>     <span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// MySQL服务器地址</span>
    <span class="token literal-property property">port</span>     <span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span>     <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//  MySQL服务用户名</span>
    <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//  MySQL服务密码</span>
    <span class="token literal-property property">database</span> <span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span>  <span class="token comment">// 需要操作的那个数据库的名称</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.连接MySQL服务器</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4.给MySQL服务器发送指令</span>
connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;select * from stu where id=1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> results<span class="token punctuation">,</span> fields</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5.释放连接</span>
connection<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","28-node-mysql.html.vue"]]);export{r as default};
