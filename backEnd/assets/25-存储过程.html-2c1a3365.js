import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_25-存储过程" tabindex="-1"><a class="header-anchor" href="#_25-存储过程" aria-hidden="true">#</a> 25 -存储过程</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是存储过程?
存储过程和其它编程语言的函数很像, 可以用于封装一组特定功能的SQL语句集
用户通过&#39;call 存储过程的名称()&#39; 来调用执行它。

2.存储过程基本语法
2.1定义
create procedure 存储过程名称(形参列表)
begin
    // sql语句
    // ... ...
end;

示例:
create procedure show_stu()
begin
    select * from stu;
end;

示例:
create procedure show_stu_by_id(stuId int)
begin
    select * from stu where id=stuId;
end;

2.2调用
call 存储过程名称(参数);

3.查看存储过程
3.1查看MySQL中所有存储过程
show procedure status;
3.2查看指定数据库中的存储过程
show procedure status where db=&#39;db_name&#39;;
3.3查看指定存储过程的源代码
show create procedure show_stu;

4.删除存储过程
drop procedure show_stu;
--&gt;</span>
<span class="token comment">&lt;!--
1.如何在MySQL中定义变量
- 全局变量:
定义: @变量名称;
赋值: set @全局变量名称=值;
      select 字段名称 into @全局变量名称 from 表名;
- 局部变量:
定义: declare 变量名称 数据类型;
赋值: set 局部变量名称=值;
      select 字段名称 into 局部变量名称 from 表名;

2.全局变量
set @stuId = 2;
set @stuName = &#39;&#39;;
select name into @stuName from stu where id=@stuId;
select @stuName from dual;

3.局部变量
局部变量只能在存储过程和函数中定义, 所以也称之为存储过程变量
create procedure show_stu3()
begin
    declare stuId int default 1;
    declare stuName varchar(255);
    # set stuId = 2;
    select name into stuName from stu where id = stuId;
    select stuName from dual;
end;
--&gt;</span>
<span class="token comment">&lt;!--
1.存储过程参数:
- MySQL存储过程中的参数分为:
    + in    输入参数[默认]
    + out   输出参数
    + inout 输入输出参数

示例一: 输入参数
外界传递给我们的参数
create procedure show_stu_by_id(in stuId int)
begin
    select * from stu where id=stuId;
end;

示例二: 输出参数
存储过程中返回给外界的参数
MySQL存储过程中不能使用return返回值, 需要通过参数来向外返回值
create procedure show_stu_by_id(in stuId int)
begin
    set stuName = &#39;&#39;;
    select name into stuName from stu where id=stuId;
    return stuName; # 报错
end;

create procedure show_stu_by_id2(in stuId int, out stuName varchar(255))
begin
    select name into stuName from stu where id=stuId;
end;

set @stuName = &#39;&#39;;
call show_stu_by_id2(1, @stuName);
select @stuName from dual;

示例三: 输入输出参数
同时具备了输入参数和输出参数所有功能
create procedure show_stu_by_id3(inout data int)
begin
    select age into data from stu where id=data;
end;

set @data = 1;
call show_stu_by_id3(@data);
select @data from dual;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(r,u){return e(),i("div",null,v)}const m=n(d,[["render",a],["__file","25-存储过程.html.vue"]]);export{m as default};
