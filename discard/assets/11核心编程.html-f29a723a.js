import{_ as n,p as i,q as e,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_11-核心编程" tabindex="-1"><a class="header-anchor" href="#_11-核心编程" aria-hidden="true">#</a> 11 核心编程</h1><p>理解四区</p><p>new创建<strong>堆区</strong>变量</p><h2 id="_01-内存分区模型" tabindex="-1"><a class="header-anchor" href="#_01-内存分区模型" aria-hidden="true">#</a> 01 内存分区模型</h2><p>C++程序在执行时，将内存大方向分为4个区域</p><ul><li>代码区：存放函数体的二进制代码，由操作系统进行管理</li><li>全局区：存放全局变量和静态变量以及常量（但不包括局部的const修饰的常量） 。</li><li>栈区：由编译器自动分配释放，存放函数的参数值，局部变量等</li><li>堆区：由程序员分配和释放，若程序员不释放，程序结束时由操作系统释放。</li></ul><blockquote><p>栈区注意事项：不要返回局部变量的地址。示例如下：</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int * fun()
{
	int a = 10;
	return &amp;a;
}

int main()
{
	int * p = fun(); // fun的内容由于放在栈区，所以执行完全部自动释放
	cout &lt;&lt; *p &lt;&lt; endl; // 10    第一次能够打印正确的数字，是因为编译器做了保留
	cout &lt;&lt; *p &lt;&lt; endl; // 123464 第二次就不能正确打印了
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果真想返回局部变量，就使用new关键字，这样创建的变量就不是保存在栈区了，而是保存在堆区。</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &quot;hello.h&quot;
using namespace std;


int * fun()
{
	int * a = new int(3); // 在堆区保存变量3，返回地址。但指针存在于栈区。
	return a;
}

int main()
{
	int * p = fun();
	cout &lt;&lt; *p &lt;&lt; endl; // 3  第一次能够打印正确的数字
	cout &lt;&lt; *p &lt;&lt; endl; // 3  第二次能够打印正确的数字
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[d];function t(c,u){return i(),e("div",null,a)}const v=n(s,[["render",t],["__file","11核心编程.html.vue"]]);export{v as default};
