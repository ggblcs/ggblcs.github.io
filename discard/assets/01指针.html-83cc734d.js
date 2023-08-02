import{_ as e,M as t,p,q as i,R as n,t as c,N as o,a1 as s}from"./framework-96b046e1.js";const l={},d=s('<h1 id="_01-指针" tabindex="-1"><a class="header-anchor" href="#_01-指针" aria-hidden="true">#</a> 01 指针</h1><hr><h2 id="title-01-指针" tabindex="-1"><a class="header-anchor" href="#title-01-指针" aria-hidden="true">#</a> title: 01 指针</h2><h2 id="_00-安装win环境下的编译器" tabindex="-1"><a class="header-anchor" href="#_00-安装win环境下的编译器" aria-hidden="true">#</a> 00 安装win环境下的编译器</h2>',4),r={href:"https://sourceforge.net/projects/mingw-w64/files/",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>下载较慢，或者阿里云盘安装包323</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下载 x86_64-posix-seh

下载完成得到的是7z格式压缩包，解压文件，把含有g++.exe的文件夹路径，添加到计算机的环境变量中(可以是用户环境变量的Path)。

注意修改完环境变量后要重新打开vscode，否则会有报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先来复习一下各种占位符。</p><h2 id="_01-占位符" tabindex="-1"><a class="header-anchor" href="#_01-占位符" aria-hidden="true">#</a> 01 占位符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//比如你想打印一个int型数字</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;需要打印的数是a=d%\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
	%d	整型占位符
	%s	字符串
	%f	浮点型
	%x 十六进制
	%p	指针类型
	如果想以字符形式输入1，赋值给char c
	scanf(&quot;%c&quot;,&amp;c);
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-指针存放地址" tabindex="-1"><a class="header-anchor" href="#_02-指针存放地址" aria-hidden="true">#</a> 02 指针存放地址</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token comment">/* &amp;a是a的地址 */</span>
	<span class="token keyword">int</span> <span class="token operator">*</span> prt_a <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token operator">*</span>prt_a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token comment">//printf(&quot;十进制%d\\n&quot;,*prt_a);</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;十进制%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//printf(&quot;十六进制%p\\n&quot;,&amp;b);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span> prt_a <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token operator">*</span> prt_b <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
	<span class="token comment">/*a=1 , b=2 , prt_a=1703724 , prt_b=1703720 , *prt_a=1 , *prt_b=2*/</span>
	<span class="token comment">//printf(&quot;a=%d , b=%d , prt_a=%d , prt_b=%d , *prt_a=%d , *prt_b=%d &quot;,a,b,prt_a,prt_b,*prt_a,*prt_b);</span>
	<span class="token comment">/**
	说明：
	1. prt_a是地址，不能随便写一串数将值赋给他。只能是&amp;变量，地址改变，则指向的空间改变。
	2. *prt_a是一个数，可以赋值，赋值后则所指空间的数据也发生变化。
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-字节占用sizeof" tabindex="-1"><a class="header-anchor" href="#_03-字节占用sizeof" aria-hidden="true">#</a> 03 字节占用sizeof</h2><p>sizeof告诉我们一个类型占用多少字节。</p><p>比如你想知道int型占用多少字节</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	a <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
	<span class="token comment">/*告诉你int类型占用四个字节*/</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof(int)=%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sizeof(a)=%ld\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个输出语句的输出结果是一样的，都是4.</p><h2 id="_04-指针初步" tabindex="-1"><a class="header-anchor" href="#_04-指针初步" aria-hidden="true">#</a> 04 指针初步</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;i=%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//f(i);//方法中的第二个输出语句会报错。</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; p=%p\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p=%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
注意点：
1. 传参时，只能将&amp;a传值赋给*p，此时p为地址，*p为整形，为a的值。
2. 如果将a传给*p，则p为a的值，*p输出会报错。
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在函数f中对*p进行更改，则main函数中的相应值也会发生变化。</p>`,16);function k(v,m){const a=t("ExternalLinkIcon");return p(),i("div",null,[d,n("p",null,[n("a",r,[c("MinGW-w64 - for 32 and 64 bit Windows - Browse Files at SourceForge.net"),o(a)])]),u])}const h=e(l,[["render",k],["__file","01指针.html.vue"]]);export{h as default};
