import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_40-sequelize-cli-创建数据库" tabindex="-1"><a class="header-anchor" href="#_40-sequelize-cli-创建数据库" aria-hidden="true">#</a> 40 -Sequelize-cli-创建数据库</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是Sequelize-CLI?
- 在编程开发中为了能够更好的管理代码, 我们可以使用Git来管理我们的代码,
  实现对代码变更的追踪, 实现在各个不同版本之间切换
- 在数据库开发中为了能够更好的管理数据库, 我们也可以使用数据库迁移工具来管理我们的数据库,
  实现对数据库变更的追踪, 实现在各个不同版本之间切换
- Sequelize-CLI就是一款数据库迁移工具, 能够让我们追踪数据库的变更, 在各个不同版本之间随意切换

2.如何使用Sequelize-CLI?
npm i sequelize sequelize-cli mysql2 -s
npx sequelize --help

3.初始化Sequelize-CLI
npx sequelize init
- config: 数据库配置文件, 用于告诉CLI如何连接数据库
- models: 数据库模型文件, 用于告诉CLI如何创建表
- migrations: 数据库迁移文件, 用于记录数据库不同版本变更
- seeders: 数据库种子文件, 用于编写测试数据

npx sequelize db:create

// 修改环境变量
set NODE_ENV=test
* */</span>

<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;development&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;it666_development&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dialect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;operatorsAliases&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;it666_test&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dialect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;operatorsAliases&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;it666_production&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dialect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;operatorsAliases&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> basename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">||</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../config/config.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> sequelize<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>use_env_variable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>config<span class="token punctuation">.</span>use_env_variable<span class="token punctuation">]</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>database<span class="token punctuation">,</span> config<span class="token punctuation">.</span>username<span class="token punctuation">,</span> config<span class="token punctuation">.</span>password<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

fs
  <span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>file <span class="token operator">!==</span> basename<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> model <span class="token operator">=</span> sequelize<span class="token punctuation">[</span><span class="token string">&#39;import&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">[</span>model<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">modelName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>db<span class="token punctuation">[</span>modelName<span class="token punctuation">]</span><span class="token punctuation">.</span>associate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    db<span class="token punctuation">[</span>modelName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">associate</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> sequelize<span class="token punctuation">;</span>
db<span class="token punctuation">.</span>Sequelize <span class="token operator">=</span> Sequelize<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","40-Sequelize-cli-创建数据库.html.vue"]]);export{r as default};
