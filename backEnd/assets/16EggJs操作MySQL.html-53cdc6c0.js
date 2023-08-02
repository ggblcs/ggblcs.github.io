import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_16-eggjs操作mysql" tabindex="-1"><a class="header-anchor" href="#_16-eggjs操作mysql" aria-hidden="true">#</a> 16 EggJs操作MySQL</h1><p>指南-&gt;教程-&gt;MySQL 自己看文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.EggJS如何操作MySQL
https://eggjs.org/zh-cn/tutorials/mysql.html
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装后开启插件<code>app/config/plugin.js</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// exports.ejs={</span>
<span class="token comment">//     enable:true,</span>
<span class="token comment">//     package:&#39;egg-view-ejs&#39;</span>
<span class="token comment">// };</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ejs</span> <span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">enable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token keyword">package</span><span class="token operator">:</span><span class="token string">&#39;egg-view-ejs&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mysql</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-mysql&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>app/config/config.default.js</code>中配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单数据库信息配置</span>
<span class="token literal-property property">mysql</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 单数据库信息配置</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// host</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 端口号</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 用户名</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 密码</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 数据库名</span>
        <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否加载到 app 上，默认开启</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否加载到 agent 上，默认关闭</span>
    <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[t];function o(i,c){return n(),a("div",null,l)}const d=s(p,[["render",o],["__file","16EggJs操作MySQL.html.vue"]]);export{d as default};
