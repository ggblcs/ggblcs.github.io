import{_ as e,p as s,q as i,a1 as n}from"./framework-96b046e1.js";const t={},a=n(`<h1 id="_009-连接数据库报错解决" tabindex="-1"><a class="header-anchor" href="#_009-连接数据库报错解决" aria-hidden="true">#</a> 009 连接数据库报错解决</h1><blockquote><p>标题：NODE连接MySQL报错：Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication .......</p></blockquote><p><strong>报错提示：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol request
ed by server; consider upgrading MySQL client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**报错原因：**mysql8.0以上加密方式，Node还不支持。</p><p><strong>解决方案</strong>：</p><p>打开MySql命令行终端输入;【1234是我本地登录MySql的账号，root和host也是】</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter user &#39;root&#39;@&#39;localhost&#39; identified with mysql_native_password by &#39;1234&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>补充【补充内容看看即可】：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flush privileges 命令本质上的作用是将当前user和privilige表中的用户信息/权限设置从mysql库(MySQL数据库的内置库)中提取到内存里。经常用在改密码和授权超用户。

ALTER USER ‘root’@‘localhost’ IDENTIFIED BY ‘password’ PASSWORD EXPIRE NEVER; //修改mysql密码规则

ALTER USER ‘root’@‘localhost’ IDENTIFIED WITH mysql_native_password BY ‘password’; //更改新的密码，可以将密码设置为简单类型

FLUSH PRIVILEGES;//刷新权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[a];function r(l,o){return s(),i("div",null,d)}const u=e(t,[["render",r],["__file","009连接数据库报错解决.html.vue"]]);export{u as default};
