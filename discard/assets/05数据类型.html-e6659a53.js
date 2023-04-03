import{_ as t,p as e,q as d,a1 as i}from"./framework-96b046e1.js";const l={},n=i(`<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><h2 id="_01整型" tabindex="-1"><a class="header-anchor" href="#_01整型" aria-hidden="true">#</a> 01整型</h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">字节</th><th>范围(有符号)</th><th>范围(无符号)</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TINYINT</code></td><td style="text-align:left;">1</td><td>-2^7^~2^7^-1</td><td>0~2^8^-1</td></tr><tr><td style="text-align:left;"><code>SMALLINT</code></td><td style="text-align:left;">2</td><td>-2^15^~2^15^-1</td><td>0~2^16^-1</td></tr><tr><td style="text-align:left;"><code>MEDIUMINT</code></td><td style="text-align:left;">3</td><td>-2^23^~2^23^-1</td><td>0~2^24^-1</td></tr><tr><td style="text-align:left;"><code>INT</code></td><td style="text-align:left;">4</td><td>-2^31^~2^31^-1</td><td>0~2^32^-1</td></tr><tr><td style="text-align:left;"><code>BIGINT</code></td><td style="text-align:left;">8</td><td>-2^63^~2^63^-1</td><td>0~2^64^-1</td></tr></tbody></table><p>关于范围的计算方法：比如tinyint，有1个字节，一个字节是8位。计算有符号的范围，8位有一个是符号位，剩下的7位每一位有0和1两种取值，代表2的7次方128个数，正数128，负数128个。但是为了取出一个0，正数就少了1。所以是127个正数和一个零。无符号计算，1字节有8位，代表2的8次方256个数，就是从0~255。其他同理。</p><h3 id="小知识" tabindex="-1"><a class="header-anchor" href="#小知识" aria-hidden="true">#</a> 小知识：</h3><ol><li><p>如果你定义一个字段的数据类型是int(3)那么是不是说，插入的数据最大不能超过三位数呢？</p><p>其实不是的，你仍然可以插入更大的数，最大范围仍是上表中int的范围没有变。int(3)中的3是显示位数，意思是查询时，显示3位数，不足三位补零，若想最前面的零也显示，要配合<strong>关键词zerofill</strong>的使用。</p><p>例如：定义score时 <code>score int(3) zerofill</code>。</p></li><li><p>无符号数据类型怎么定义？</p><p>比如声明score时 <code>score int unsigned</code></p></li></ol><h2 id="_02浮点型" tabindex="-1"><a class="header-anchor" href="#_02浮点型" aria-hidden="true">#</a> 02浮点型</h2><table><thead><tr><th>浮点型</th><th>占用字节</th><th>范围</th></tr></thead><tbody><tr><td>float（单精度）</td><td>4</td><td>-3.4E+38~3.4E+38</td></tr><tr><td>double（双精度）</td><td>8</td><td>-1.8E+308~1.8E+308</td></tr></tbody></table><p>浮点数声明：</p><blockquote><p>float(M,D)</p><p>double(M,D)</p></blockquote><p>​ M：总位数。插入的值总位数超过M会报错。</p><p>​ D：小数位数，插入的值小数位数超过D不会报错，四舍五入处理。</p><p>注意点：浮点型存的是近似值，精度有可能会丢失。例：</p><div class="language-MySQL line-numbers-mode" data-ext="MySQL"><pre class="language-MySQL"><code>create table nu(
num double(20,19)
);

insert into values (1.1234567890123456789);

select * from nu ;#你会发现数变了，最后几个变成了0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03定点数" tabindex="-1"><a class="header-anchor" href="#_03定点数" aria-hidden="true">#</a> 03定点数</h2><blockquote><p>decimal(M,D)</p></blockquote><p>说明：</p><ol><li>定点数用于保存你要严格保存的数据，精度不会丢失，例如存款。</li><li>定点数是变长的，大概每9个数字用4个字节来存储，定点之所以能保存精确的小数，是因为整数和小数是分开储存的，占用资源要比浮点数多。</li><li><strong>整型、定点数和浮点数都支持显示宽度(zerofill)和无符号数(unsigned)</strong>。</li></ol><h2 id="_04字符型" tabindex="-1"><a class="header-anchor" href="#_04字符型" aria-hidden="true">#</a> 04字符型</h2><p>数据库中，所有字符型只能用单引号。</p><table><thead><tr><th>数据类型</th><th>描述</th><th>长度</th></tr></thead><tbody><tr><td>char(长度)</td><td>定长</td><td>最大255</td></tr><tr><td>varchar(长度)</td><td>变长</td><td>最大65535</td></tr><tr><td>tintext</td><td>大段文本</td><td>2^8^-1=255</td></tr><tr><td>text</td><td>大段文本</td><td>2^16^-1=65535</td></tr><tr><td>mediumtext</td><td>大段文本</td><td>2^24^-1</td></tr><tr><td>longtext</td><td>大段文本</td><td>2^32^-1</td></tr></tbody></table><ol><li><p>char(10)和varchar(10)的区别？</p><p>答：相同点：他们最多只能保存10个字符。</p><p>​ 不同点：char不回收多余的长度（定长），效率高，浪费空间；</p><p>​ varchar回收对于的空间（变长），效率低，节省空间。</p></li><li><p>varchar理论最大长度是65535字节，实际却达不到，具体长度与字符编码有关。</p><p>例gbk编码 , 一个字符占用2字节 , 则varchar最大长度是32767.</p><p>utf8编码中 , 一个字符占用3字节 , 则varchar最大长度是21845</p></li><li><p><strong>一条完整数据</strong>（比如一个表有id，姓名，性别。三者合在一起算一条完整数据）<strong>总长度不能超过65535字节</strong>。验证：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table t7(
name varchar(21844), #utf8下最多能存21845字符，每个字符3字节
age tinyint 
) charset = utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子会报错，是因为utf8下，varchar最大存21845字符（65535字节），外加tinyint，字节总长度超过了65535，所以会报错。</p></li><li><p>保存大块文本用了text，总数据长度不就超过了65535字节了？为什么不报错？</p><p>答：事实上，大块文本（text）不计算在总长度中，一个大块文本只用10个字节保存文本地址，文本另存他处。</p></li></ol><h2 id="_05枚举" tabindex="-1"><a class="header-anchor" href="#_05枚举" aria-hidden="true">#</a> 05枚举</h2><blockquote><p>enum(&#39;A&#39;,&#39;B&#39;)</p><p>声明举例：sex enum(&#39;男 &#39;,&#39;女 &#39;)</p></blockquote><p>说明：</p><ol><li><p>枚举相当于一个集合，值只能从集合中选一个，值选非集合内的会报错。</p></li><li><p>枚举类型是通过整数来管理的，第一个值是1，第二个值是2，以此类推。验证与应用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table t8(
name varchar(10),
sex enum(&#39;男&#39;,&#39;女&#39;)
);
# --------------------
insert into t8 values 
(&#39;Tom&#39;,&#39;男&#39;)，
(&#39;Jerry&#39;,1)，   # 与第七行等效
(&#39;Rose&#39;,&#39;女&#39;)；
# --------------------
#再次表明枚举是数字，只有数字才能相加，结果也是数字。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>select sex+0 from t8; select sex from t8;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
3. 枚举的优点：

1. 运行速度快（数字比字符串运算速度快）。
2. 限制数据。
3. 节省空间（一个数字就够了，省空间）。

## 06集合

&gt; set 
&gt;
&gt; set(&#39;爬山 &#39;,&#39;游泳 &#39;,&#39;读书 &#39;)

集合相当于多项选择；**每一个集合都分配一个固定的数字，分配方式从左往右，按2^0^ , 2^1^ , 2^2^ , 2^3^**……例子中，爬山是2^0^=1；游泳是2^1^=2；读书是2^2^=4。如果你插入时，选择了爬山和读书，那么结果就是5（4+1）。

例子：

\`\`\`mysql
create table t9(
hobby set(&#39;爬山&#39;,&#39;游泳&#39;,&#39;读书&#39;)
);
# 证明是数字
insert into t9 values (&#39;爬山&#39;,&#39;读书&#39;);
select hobby+0 from t9;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>无论按照什么顺序插入，其显示结果都是按照建表时的固定顺序显示的</strong>，例如你插入时 <code>insert into t9 values (&#39;读书&#39;,&#39;爬山&#39;);</code>，但是显示结果仍然是你建表时的顺序，先显示“爬山”，再显示“读书”。</p><h2 id="_07日期类型" tabindex="-1"><a class="header-anchor" href="#_07日期类型" aria-hidden="true">#</a> 07日期类型</h2><table><thead><tr><th>数据类型</th><th>占用字节</th><th>描述</th></tr></thead><tbody><tr><td>datetime</td><td>8</td><td>日期时间</td></tr><tr><td>date</td><td>3</td><td>日期</td></tr><tr><td>time</td><td>3</td><td>时间</td></tr><tr><td>timestamp</td><td>4</td><td>时间戳</td></tr><tr><td>year</td><td>1</td><td>年份</td></tr></tbody></table><p>一般比较常用的也就前两个。</p><p>datetime的插入格式：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into uu values (&#39;2015-10-12 10:00:00&#39;);
# 日期与时间插入，在上面括号内的基础上取你所需。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><ol><li>timestamp类型和datetime类型的形式是一样的，区别是datetime的范围是1~9999年，而timestamp是从<code>1970-01-01 00:00:00</code> ~ <code>2038-1-19 11:14:07</code>。</li><li>year只占用一个字节，所以只能储存255个年份，范围是1901 ~ 2155。</li><li>time表示时间或时间间隔，范围是 -838:59:59 ~ 838:59:59。</li><li><strong>其他编程语言的时间戳与数据库的时间戳有区别</strong>，其他编程语言时间戳是从1970年1月1日0时0分0秒到现在的总秒数或总毫秒数，是整数。但是数据库时间戳不是秒数，形式与datatime差不多，有日期，时分秒。</li></ol><h2 id="_08布尔型" tabindex="-1"><a class="header-anchor" href="#_08布尔型" aria-hidden="true">#</a> 08布尔型</h2><p>boolean型中true和false对应0和1；以数字的方式储存。</p><h2 id="_09数据类型小测试" tabindex="-1"><a class="header-anchor" href="#_09数据类型小测试" aria-hidden="true">#</a> 09数据类型小测试</h2><ol><li>手机号：char</li><li>电话号：varchar</li><li>性别：char enum</li><li>学生年龄：tinyint unsigned</li><li>薪水：dicimal</li><li>照片：binary，但一般不把照片存数据库，如果照片几百兆，数据库才几百兆，数据库直接就满了。一般在数据库存照片地址。但出题这样出，还是要选binary。</li></ol>`,40),a=[n];function r(s,c){return e(),d("div",null,a)}const o=t(l,[["render",r],["__file","05数据类型.html.vue"]]);export{o as default};
