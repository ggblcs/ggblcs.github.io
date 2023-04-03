import{_ as e,p as n,q as i,a1 as a}from"./framework-96b046e1.js";const d={},r=a(`<h1 id="jdbc连接数据库" tabindex="-1"><a class="header-anchor" href="#jdbc连接数据库" aria-hidden="true">#</a> JDBC连接数据库</h1><h2 id="_01-jdbc连接数据库步骤" tabindex="-1"><a class="header-anchor" href="#_01-jdbc连接数据库步骤" aria-hidden="true">#</a> 01 JDBC连接数据库步骤</h2><p>第一步：加载驱动；</p><p>第二步：连接数据库；</p><p>第三部：使用语句操作数据库；</p><p>第四部：关闭数据库连接，释放资源；</p><h2 id="_02-在项目里配置数据库驱动" tabindex="-1"><a class="header-anchor" href="#_02-在项目里配置数据库驱动" aria-hidden="true">#</a> 02 在项目里配置数据库驱动</h2><p>右击项目-&gt; Build Path -&gt; Configure Build Path -&gt; Add Exteranl JARs</p><h2 id="_03-加载数据库驱动" tabindex="-1"><a class="header-anchor" href="#_03-加载数据库驱动" aria-hidden="true">#</a> 03 加载数据库驱动</h2><p>MySQL驱动名：com.mysql.jdbc.Driver</p><p>加载方式：Class.forName(驱动名);</p><h2 id="_04-连接及关闭数据库" tabindex="-1"><a class="header-anchor" href="#_04-连接及关闭数据库" aria-hidden="true">#</a> 04 连接及关闭数据库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1，DriverManager 驱动管理类，主要负责获取一个数据库的连接；
static Connection getConnection(String url, String user, String password) 试图建立到给定数据库 URL 的连
接。
2，MySQL 数据库的连接地址格式
jdbc:mysql://IP 地址:端口号/数据库名称
jdbc 协议：JDBC URL 中的协议总是 jdbc ；
子协议：驱动程序名或数据库连接机制（这种机制可由一个或多个驱动程序支持）的名称，如 mysql；
子名称：一种标识数据库的方法。必须遵循“//主机名：端口/子协议”的标准 URL 命名约定，如
//localhost:3306/db_book
3，Connection 接口 与特定数据库的连接（会话）。
void close()
立即释放此 Connection 对象的数据库和 JDBC 资源，而不是等待它们被自动释放。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[r];function c(l,t){return n(),i("div",null,s)}const h=e(d,[["render",c],["__file","02JDBC连接数据库.html.vue"]]);export{h as default};
