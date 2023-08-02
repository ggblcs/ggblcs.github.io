import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_12-数据库链接和断开" tabindex="-1"><a class="header-anchor" href="#_12-数据库链接和断开" aria-hidden="true">#</a> 12 -数据库链接和断开</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.链接mysql服务器
mysql -h127.0.0.1 -P3306 -uroot -proot
-h 主机地址
-P 端口号
-u 用户名
-p 用户密码
注意点:
1.1如果MySQL服务器在本地, 主机地址可以省略
1.2如果服务器使用默认3306端口, 端口号可以省略

mysql -h127.0.0.1 -P3306 -uroot -proot   链接远程MySQL服务器
mysql -h127.0.0.1  -uroot -proot  链接远程MySQL服务器, 使用默认端口3306
mysql -uroot -proot 链接本地的MySQL服务器, 使用默认端口3306
mysql -uroot -p  密码采用暗文形式

最常用的方式:
mysql -h127.0.0.1  -uroot -p  链接远程MySQL服务器, 使用默认端口3306

2.退出链接
exit;
quit
\\q

3.显示数据库
show databases;
注意: 后面有s

3.1 information_schema
保存着关于MySQL服务器所维护的所有其他数据库的信息。
如数据库名，数据库的表，表栏的数据类型与访问权限等
3.2 mysql
MySQL系统数据库, 保存了登录用户名,密码,以及每个用户的权限等等
3.3 performance_schema
用来保存数据库服务器性能的参数
3.4 sys
这个库是通过视图的形式把information_schema和performance_schema结合起来，查询出更加令人容易理解的数据
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(r,c){return i(),e("div",null,a)}const u=n(l,[["render",v],["__file","12-数据库链接和断开.html.vue"]]);export{u as default};
