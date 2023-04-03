import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_14-预处理" tabindex="-1"><a class="header-anchor" href="#_14-预处理" aria-hidden="true">#</a> 14 -预处理</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.预处理:
所谓的预处理技术，最初也是由MySQL提出的一种减轻服务器压力的一种技术！
- 传统mysql处理流程
1，  在客户端准备sql语句
select * from stu where id=1;
select * from stu where id=2;
2，  发送sql语句到MySQL服务器
3，  MySQL服务器对sql语句进行解析(词法,语法), 然后编译, 然后执行该sql语句
4，  服务器将执行结果返回给客户端
弊端:
- 哪怕多次传递的语句大部分内容都是相同的, 每次还是要重复传递
- 哪怕语句是相同的, 每次执行之前还是要先解析、编译之后才能执行

- 预处理的处理流程：
1，  在客户端准备预处理sql语句
prepare 预处理名称 from &#39;sql语句&#39;;
prepare stmt from &#39;select * from stu where id=?;&#39;;
2，  发送预处理sql语句到MySQL服务器
3.   MySQL服务器对预处理sql语句进行解析(词法,语法), 但不会执行
4.   在客户端准备相关数据
set @id=1;
5.   MySQL服务器对数据和预处理sql编译, 然后执行该sql语句
execute stmt using @id;
6.   服务器将执行结果返回给客户端
优点:
- 只对sql语句进行了一次解析
- 重复内容大大减少(网络传输更快)
--&gt;</span>
<span class="token comment">&lt;!--
预处理演示:
prepare stmt from &#39;select * from stu where id=?;&#39;;
set @id=1;
execute stmt using @id;
set @id=2;
execute stmt using @id;

如何在MySQL中定义变量
全局变量: @变量名称
局部变量:
给变量赋值: set @变量名称=值;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return n(),i("div",null,v)}const u=e(l,[["render",a],["__file","114-预处理.html.vue"]]);export{u as default};
