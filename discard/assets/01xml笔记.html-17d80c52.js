import{_ as n,p as t,q as s,a1 as a}from"./framework-96b046e1.js";const e={},p=a(`<pre><code>1. XML
	1. 概念
	2. 语法
	3. 解析
</code></pre><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&#39;1.0&#39; ?&gt;</span>
文档声明：
1.尖括号与问号之间不能有空格。
2.xml与问号之间不能有空格。
3.必须写在第一行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-xml介绍" tabindex="-1"><a class="header-anchor" href="#_01-xml介绍" aria-hidden="true">#</a> 01 XML介绍：</h2><pre><code>1. 概念：Extensible Markup Language 可扩展标记语言
	* 可扩展：标签都是自定义的。 &lt;user&gt;  &lt;student&gt;

	* 功能
		* 存储数据
			1. 配置文件
			2. 在网络中传输
	* xml与html的区别
		1. xml标签都是自定义的，html标签是预定义。
		2. xml的语法严格，html语法松散
		3. xml是存储数据的，html是展示数据

	* w3c:万维网联盟

2. 语法：
	* 基本语法：
		1. xml文档的后缀名 .xml
		2. xml第一行必须定义为文档声明
		3. xml文档中有且仅有一个根标签
		4. 属性值必须使用引号(单双都可)引起来
		5. 标签必须正确关闭
		6. xml标签名称区分大小写
	* 快速入门：
		&lt;?xml version=&#39;1.0&#39; ?&gt;
		&lt;users&gt;
			&lt;user id=&#39;1&#39;&gt;
				&lt;name&gt;zhangsan&lt;/name&gt;
				&lt;age&gt;23&lt;/age&gt;
				&lt;gender&gt;male&lt;/gender&gt;
				&lt;br/&gt;
			&lt;/user&gt;
			
			&lt;user id=&#39;2&#39;&gt;
				&lt;name&gt;lisi&lt;/name&gt;
				&lt;age&gt;24&lt;/age&gt;
				&lt;gender&gt;female&lt;/gender&gt;
			&lt;/user&gt;
		&lt;/users&gt;
		
	* 组成部分：
		1. 文档声明
			1. 格式：&lt;?xml 属性列表 ?&gt;
			2. 属性列表：
				* version：版本号，必须的属性
				* encoding：编码方式。告知解析引擎当前文档使用的字符集，默认值：ISO-8859-1
				* standalone：是否独立
					* 取值：
						* yes：不依赖其他文件
						* no：依赖其他文件
		2. 指令(了解)：结合css的
			* &lt;?xml-stylesheet type=&quot;text/css&quot; href=&quot;a.css&quot; ?&gt;
		3. 标签：标签名称自定义的
			* 规则：
				* 名称可以包含字母、数字以及其他的字符 
				* 名称不能以数字或者标点符号开始 
				* 名称不能以字母 xml（或者 XML、Xml 等等）开始 
				* 名称不能包含空格 

		4. 属性：
			id属性值唯一
		5. 文本：
			* CDATA区：在该区域中的数据会被原样展示
				* 格式：  &lt;![CDATA[ 数据 ]]&gt;
</code></pre><h2 id="_02-两种约束" tabindex="-1"><a class="header-anchor" href="#_02-两种约束" aria-hidden="true">#</a> 02 两种约束</h2><ul><li>约束：规定xml文档的书写规则 ​ * 作为框架的使用者(程序员)： ​ 1. 能够在xml中引入约束文档 ​ 2. 能够简单的读懂约束文档 ​ ​ * 分类： ​ 1. DTD:一种简单的约束技术 ​ 2. Schema:一种复杂的约束技术</li></ul><h3 id="dtd" tabindex="-1"><a class="header-anchor" href="#dtd" aria-hidden="true">#</a> DTD</h3><pre><code>		* DTD：
			* 引入dtd文档到xml文档中
				* 内部dtd：将约束规则定义在xml文档中
				* 外部dtd：将约束的规则定义在外部的dtd文件中
					* 本地：&lt;!DOCTYPE 根标签名 SYSTEM &quot;dtd文件的位置&quot;&gt;
					* 网络：&lt;!DOCTYPE 根标签名 PUBLIC &quot;dtd文件名字&quot; &quot;dtd文件的位置URL&quot;&gt;
</code></pre><p>DTD案例（student.dtd）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">students</span> <span class="token attr-name">(student*)</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">student</span> <span class="token attr-name">(name,age,sex)</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">name</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">age</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">sex</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ATTLIST</span> <span class="token attr-name">student</span> <span class="token attr-name">number</span> <span class="token attr-name">ID</span> <span class="token attr-name">#REQUIRED</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ol><li>第一行ELEMENT表示定义一个元素（标签）。</li><li>第一行students是标签名。</li><li>第一行student写在括号内，表示students标签内只能放什么标签。</li><li>第一行*表示能写的个数，也可写加号+表示必须写一个或两个以上。</li><li>第二行在student内定义了多个标签。</li><li>第三行<code>(#PCDATA)</code>表示name标签内放的是字符串类型。</li><li>第六行ATTLIST定义的是属性，为student标签定义。</li><li>第六行number是为student标签定义了一个number属性，属性类型是ID（唯一）。</li><li>第六行<code>#REQUIRED</code>表示number属性值必须写。 DTD案例(student.xml)</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">students</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;student.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itcast_0001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>tom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ol><li>第二行是引入外部dtd文件。上述有详解。</li><li>三四五行标签必须按照顺序写，不然会报错。</li></ol><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> schema</h3><p>由于dtd不能限定标签内的内容，这是一个缺陷，比如年龄可以填1000岁，而schema可以约束。</p><pre><code>		* Schema:
			* 引入：
				1.填写xml文档的根元素
				2.引入xsi前缀.  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
				3.引入xsd文件命名空间.  xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;
				4.为每一个xsd约束声明一个前缀,作为标识  xmlns=&quot;http://www.itcast.cn/xml&quot; 

			&lt;students   xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
				xmlns=&quot;http://www.itcast.cn/xml&quot;
				xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;&gt;
</code></pre><p>schema案例（student.xsd）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>schema</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">targetNamespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">elementFormDefault</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qualified<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 定义了一个标签，students，并且说明类型type是studentsType，是自定义类型 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>students<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentsType<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 定义什么是studentsType，里面包含什么标签，complex表示复合与之相对的是简单 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>complexType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentsType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token comment">&lt;!-- sequence表示下面的标签按顺序出现 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
        	<span class="token comment">&lt;!-- 定义了一个student标签，并且是自定义类型studentType --&gt;</span>
        	<span class="token comment">&lt;!-- minOccurs表示此标签最少出现0次，maxOccurs表示最多出现次数无上限 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>student<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">minOccurs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">maxOccurs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>unbounded<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>complexType</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 定义了studenType是什么样的 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>complexType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token comment">&lt;!-- 定义里面的三个标签必须按顺序出现 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
        	<span class="token comment">&lt;!-- 定义name是string类型 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!-- 定义age是ageType类型，自定义类型 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ageType<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sexType<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 定义了student标签的属性number，类型是自定义类型numberType，required表示必须 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>attribute</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numberType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>complexType</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 定义sexType是简单类型 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sexType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token comment">&lt;!-- 定义基本类型是string --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        	<span class="token comment">&lt;!-- 定义字符串也只能枚举enumeration，只能有male和female两种值 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>enumeration</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>enumeration</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ageType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token comment">&lt;!-- 定义基本类型是数字 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        	<span class="token comment">&lt;!-- 定义最小值是0 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>minInclusive</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token comment">&lt;!-- 定义最大值是256 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>maxInclusive</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>256<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numberType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        	<span class="token comment">&lt;!-- 规定取值必须是heima_开头，\\d表示数字,{4}表示4个数字 --&gt;</span>
        	<span class="token comment">&lt;!-- 也就是说取值必须为heima_****,且*必须为数字 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>pattern</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heima_\\d{4}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>schema</span><span class="token punctuation">&gt;</span></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>schema案例（student.xml）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token comment">&lt;!-- 
	1.填写xml文档的根元素
	2.引入xsi前缀.  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	//规定的，由w3c提供

	3.引入xsd文件命名空间.  xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;
	//前面的网址相当于起了一个名称空间，后面是文件路径

	4.为每一个xsd约束声明一个前缀,作为标识  xmlns=&quot;http://www.itcast.cn/xml&quot; ，不写表示空前缀
	//给名称空间起的别名  xmlns:a=&quot;http://www.itcast.cn/xml&quot;,则起名为a 
	
 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span>   <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
 			 <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml<span class="token punctuation">&quot;</span></span> 
 		   <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml  student.xsd<span class="token punctuation">&quot;</span></span>
 		    <span class="token punctuation">&gt;</span></span>
 		    
 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heima_0001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>tom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
 		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
 		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
		 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-解析" tabindex="-1"><a class="header-anchor" href="#_03-解析" aria-hidden="true">#</a> 03 解析</h2><pre><code>3. 解析：操作xml文档，将文档中的数据读取到内存中
	* 操作xml文档
		1. 解析(读取)：将文档中的数据读取到内存中
		2. 写入：将内存中的数据保存到xml文档中。持久化的存储

	* 解析xml的方式：
		1. DOM：将标记语言文档一次性加载进内存，在内存中形成一颗dom树
			* 优点：操作方便，可以对文档进行CRUD的所有操作
			* 缺点：占内存
			* 适用于服务器
		2. SAX：逐行读取，基于事件驱动的。
			* 优点：读一行直接释放掉了，不占内存。
			* 缺点：只能读取，不能增删改
			* 适用于手机
	* xml常见的解析器：
			1. JAXP：sun公司提供的解析器，支持dom和sax两种思想，官方提供，性能低，不使用。
			2. DOM4J：一款非常优秀的解析器
			3. Jsoup：jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。
			4. PULL：Android操作系统内置的解析器，sax方式的。

	* Jsoup：jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。
		* 快速入门：
			* 步骤：
				1. 导入jar包
				2. 获取Document对象
				3. 获取对应的标签Element对象
				4. 获取数据
</code></pre><h1 id="p11" tabindex="-1"><a class="header-anchor" href="#p11" aria-hidden="true">#</a> P11</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>========================================
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>		* 代码：
			 //2.1获取student.xml的path
	        String path = JsoupDemo1.class.getClassLoader().getResource(&quot;student.xml&quot;).getPath();
	        //2.2解析xml文档，加载文档进内存，获取dom树---&gt;Document
	        Document document = Jsoup.parse(new File(path), &quot;utf-8&quot;);
	        //3.获取元素对象 Element
	        Elements elements = document.getElementsByTag(&quot;name&quot;);
	
	        System.out.println(elements.size());
	        //3.1获取第一个name的Element对象
	        Element element = elements.get(0);
	        //3.2获取数据
	        String name = element.text();
	        System.out.println(name);

	* 对象的使用：
		1. Jsoup：工具类，可以解析html或xml文档，返回Document
			* parse：解析html或xml文档，返回Document
				* parse​(File in, String charsetName)：解析xml或html文件的。
				* parse​(String html)：解析xml或html字符串
				* parse​(URL url, int timeoutMillis)：通过网络路径获取指定的html或xml的文档对象
		2. Document：文档对象。代表内存中的dom树
			* 获取Element对象
				* getElementById​(String id)：根据id属性值获取唯一的element对象
				* getElementsByTag​(String tagName)：根据标签名称获取元素对象集合
				* getElementsByAttribute​(String key)：根据属性名称获取元素对象集合
				* getElementsByAttributeValue​(String key, String value)：根据对应的属性名和属性值获取元素对象集合
		3. Elements：元素Element对象的集合。可以当做 ArrayList&lt;Element&gt;来使用
		4. Element：元素对象
			1. 获取子元素对象
				* getElementById​(String id)：根据id属性值获取唯一的element对象
				* getElementsByTag​(String tagName)：根据标签名称获取元素对象集合
				* getElementsByAttribute​(String key)：根据属性名称获取元素对象集合
				* getElementsByAttributeValue​(String key, String value)：根据对应的属性名和属性值获取元素对象集合

			2. 获取属性值
				* String attr(String key)：根据属性名称获取属性值
			3. 获取文本内容
				* String text():获取文本内容
				* String html():获取标签体的所有内容(包括字标签的字符串内容)
		5. Node：节点对象
			* 是Document和Element的父类
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
* 快捷查询方式：
	1. selector:选择器
		* 使用的方法：Elements	select​(String cssQuery)
			* 语法：参考Selector类中定义的语法
	2. XPath：XPath即为XML路径语言，它是一种用来确定XML（标准通用标记语言的子集）文档中某部分位置的语言
		* 使用Jsoup的Xpath需要额外导入jar包。
		* 查询w3cshool参考手册，使用xpath的语法完成查询
		* 代码：
			//1.获取student.xml的path
	        String path = JsoupDemo6.class.getClassLoader().getResource(&quot;student.xml&quot;).getPath();
	        //2.获取Document对象
	        Document document = Jsoup.parse(new File(path), &quot;utf-8&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>		        //3.根据document对象，创建JXDocument对象
		        JXDocument jxDocument = new JXDocument(document);
		
		        //4.结合xpath语法查询
		        //4.1查询所有student标签
		        List&lt;JXNode&gt; jxNodes = jxDocument.selN(&quot;//student&quot;);
		        for (JXNode jxNode : jxNodes) {
		            System.out.println(jxNode);
		        }
		
		        System.out.println(&quot;--------------------&quot;);
		
		        //4.2查询所有student标签下的name标签
		        List&lt;JXNode&gt; jxNodes2 = jxDocument.selN(&quot;//student/name&quot;);
		        for (JXNode jxNode : jxNodes2) {
		            System.out.println(jxNode);
		        }
		
		        System.out.println(&quot;--------------------&quot;);
		
		        //4.3查询student标签下带有id属性的name标签
		        List&lt;JXNode&gt; jxNodes3 = jxDocument.selN(&quot;//student/name[@id]&quot;);
		        for (JXNode jxNode : jxNodes3) {
		            System.out.println(jxNode);
		        }
		        System.out.println(&quot;--------------------&quot;);
		        //4.4查询student标签下带有id属性的name标签 并且id属性值为itcast
		
		        List&lt;JXNode&gt; jxNodes4 = jxDocument.selN(&quot;//student/name[@id=&#39;itcast&#39;]&quot;);
		        for (JXNode jxNode : jxNodes4) {
		            System.out.println(jxNode);
		        }
</code></pre>`,29),l=[p];function c(o,u){return t(),s("div",null,l)}const d=n(e,[["render",c],["__file","01xml笔记.html.vue"]]);export{d as default};
