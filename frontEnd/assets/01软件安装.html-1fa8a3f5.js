import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_01-软件安装" tabindex="-1"><a class="header-anchor" href="#_01-软件安装" aria-hidden="true">#</a> 01 软件安装</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--基本概念
1..什么是服务器?
&gt;服务器也是电脑，只不过是一台24小时不断电，不关机的电脑
&gt;根据提供的服务功能不同: 文件服务器、邮件服务器、Web 服务器等等；
&gt;简而言之: 服务器其实就是一台&quot;提供了某种服务功能&quot;的超级电脑

2.如何让电脑能够提供某种服务?
&gt;如何让电脑可以聊天?听歌?浏览网页?
&gt;想让电脑提供聊天服务,可以安装相应的聊天软件, 例如:QQ/旺旺...
&gt;想让电脑可以提供听歌服务,可以安装相应音乐软件, 例如:酷我/酷狗...
&gt;想让电脑可以提供浏览网页服务,可以安装相应浏览网页软件, 例如:谷歌/欧朋..

3.如何让电脑提供管理网站的服务?
&gt;安装Web服务相关软件, 例如: Apache、IIS、Tomcat、Nginx、NodeJS等；
&gt;安装了Web服务软件的电脑, 我们称之为&quot;Web服务器&quot;
&gt;Web服务器软件：Apache、IIS、Tomcat、Nginx、NodeJS等；
--&gt;</span>

<span class="token comment">&lt;!--Web服务器搭建
1.什么是WAMPServer软件?
W: Windows操作系统
A: Apache 世界排名第一的服务器软件,特点是简单,速度快,性能稳定
M: MySQL 开源免费的数据库软件，特点是体积小、速度快、使用成本低
P: PHP 超文本预处理器,直接将代码嵌入HTML文档中执行, 特点是简单易学,容易上手

2.如何搭建Apache服务器?
&gt;1.双击提供的安装包
&gt;2.点击Next
&gt;3.选择安装路径(注意:路径中不要出现中文)
&gt;4.勾选两个方框,点击next继续安装
&gt;5.点击install开始安装
&gt;6.安装完毕以后点击finish即可启动wamp

3.测试访问
打开浏览器输入127.0.0.1查看显示的内容

4.如何修改默认端口号?
&gt;4.1在httpd.conf文件中搜索Listen , 改为你想要的数字即可
&gt;4.2重启WAMP
--&gt;</span>

<span class="token comment">&lt;!--P(pai)H(huang)P(pian)基础
1.PHP基础语法大部分和JS差不多(切菜)

2.如何运行编写好的PHP文件?
因为PHP是服务端编程语言, 所以要在服务端运行
&gt;php文件名称不能有中文
&gt;php文件必须放到服务器文件夹下
&gt;通过ip找到服务器文件夹, 选中php文件访问

3.服务端返回浏览器的是什么?
&gt;php程序的执行结果
&gt;注意: 执行结果中有中文, 必须在php文件顶部设置
header(&quot;content-type:text/html; charset=utf-8&quot;);
浏览器访问http服务器,接收到响应时,会根据响应报文头的内容进行一些具体的操作,在php中,我们能够使用 header来设置这些内容
--&gt;</span>

<span class="token comment">&lt;!--
什么是C/S架构(Client/Server)
&gt;对于C/S架构,最为常见的例子就是网络游戏,例如&quot;魔兽世界&quot;如果不联网无法使用,你在软件内所做的所有操作通过互联网能够传递到其他玩家身上
&gt;优点:性能较高/界面酷炫/用户体验好
&gt;缺点:更新软件/重量级

什么是B/S架构(Browser/Server)
&gt;对于B/S架构, 现在所有的网站都是B/S架构,较为常见的例子有百度,淘宝,网易云音乐等等,所有只需要通过浏览器即可使用
&gt;优点:更新软件/轻量级/用户体验稍差
&gt;缺点:性能较低/兼容问题
--&gt;</span>

<span class="token comment">&lt;!--HTTP请求头
User-Agent：浏览器的具体类型　　如：User-Agent：Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0
Accept：浏览器支持哪些数据类型　　如：Accept: text/html,application/xhtml+xml,application/xml;q=0.9;
Accept-Charset：浏览器采用的是哪种编码　　如：Accept-Charset: ISO-8859-1
Accept-Encoding：浏览器支持解码的数据压缩格式　　如：Accept-Encoding: gzip, deflate
Accept-Language：浏览器的语言环境　　如：Accept-Language zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3
Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。Host:www.baidu.com
Connection：表示是否需要持久连接。Keep-Alive/close，HTTP1.1默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。要实现这一点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。如：Connection: Keep-Alive
Content-Length：表示请求消息正文的长度。对于POST请求来说Content-Length必须出现。
Content-Type：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html; charset=&#39;gb2312&#39;
Content-Encoding：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip
Content-Language：WEB服务器告诉浏览器自己响应的对象的语言。
Cookie：最常用的请求头，浏览器每次都会将cookie发送到服务器上，允许服务器在客户端存储少量数据。
Referer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。Referer: http://www.baidu.com/
--&gt;</span>

<span class="token comment">&lt;!--HTTP响应头
Server:WEB 服务器表明自己是什么软件及版本等信息。例如：Server：Apache/2.0.61 (Unix)
Accept-Ranges:WEB服务器表明自己是否接受获取其某个实体的一部分（比如文件的一部分）的请求。bytes：表示接受，none：表示不接受
Content-Type:WEB 服务器告诉浏览器自己响应的对象的类型。例如：Content-Type：application/xml
Etag:就是一个对象（比如URL）的标志值，就一个对象而言，比如一个html文件，如果被修改了，其Etag也会别修改，所以，ETag的作用跟Last-Modified的作用差不多，主要供WEB服务器判断一个对象是否改变了。比如前一次请求某个html文件时，获得了其 ETag，当这次又请求这个文件时，浏览器就会把先前获得ETag值发送给WEB服务器，然后WEB服务器会把这个ETag跟该文件的当前ETag进行对比，然后就知道这个文件有没有改变了。
Allow:服务器支持哪些请求方法（如GET、POST等）
Location:表示客户应当到哪里去提取文档，用于将接收端定位到资源的位置（URL）上。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。
Content-Base:解析主体中的相对URL时使用的基础URL。
Content-Encoding:WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip
Content-Language:WEB 服务器告诉浏览器理解主体时最适宜使用的自然语言。
Content-Length:WEB服务器告诉浏览器自己响应的对象的长度或尺寸，例如：Content-Length: 26012
Content-Location:资源实际所处的位置。
Content-MD5:主体的MD5校验和。
Content-Range:实体头用于指定整个实体中的一部分的插入位置，他也指示了整个实体的长度。在服务器向客户返回一个部分响应，它必须描述响应覆盖的范围和整个实体长度。一般格式： Content-Range:bytes-unitSPfirst-byte-pos-last-byte-pos/entity-legth。例如，传送头500个字节次字段的形式：Content-Range:bytes0- 499/1234如果一个http消息包含此节（例如，对范围请求的响应或对一系列范围的重叠请求），Content-Range表示传送的范围，Content-Length表示实际传送的字节数。
Expires:WEB服务器表明该实体将在什么时候过期，对于过期了的对象，只有在跟WEB服务器验证了其有效性后，才能用来响应客户请求。是 HTTP/1.0 的头部。例如：Expires：Sat, 23 May 2009 10:02:12 GMT
Last-Modified:WEB服务器认为对象的最后修改时间，比如文件的最后修改时间，动态页面的最后产生时间等等。例如：Last-Modified：Tue, 06 May 2008 02:42:43 GMT
--&gt;</span>

<span class="token comment">&lt;!--状态码相关解释
http://baike.baidu.com/link?url=LarF3FUBzX-IU1BMZbwbxaC8oJPUSGOj3seQRNVSVbZ2F9A6BiE-Je0sxFwsQK8dFJkKH6VP_ghpK66p8C2Zvkdl9nABXBR8mIqZGJj_D59q6NJQwmw3GqjIx2bzAsEG
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function v(a,c){return e(),i("div",null,t)}const m=n(l,[["render",v],["__file","01软件安装.html.vue"]]);export{m as default};
