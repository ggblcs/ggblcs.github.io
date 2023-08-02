import{_ as n,p as e,q as i,a1 as d}from"./framework-96b046e1.js";const l={},s=d(`<h1 id="_12-new操作符" tabindex="-1"><a class="header-anchor" href="#_12-new操作符" aria-hidden="true">#</a> 12 new操作符</h1><p>c++new操作符在堆区开辟空间</p><p>堆区开辟的空间，由程序员手动开启，手动释放。<strong>释放用操作符delete</strong>。</p><p>语法：<code>new数据类型</code></p><p>利用new创建的数据，会返回指针。</p><h2 id="_01-new的基本语法" tabindex="-1"><a class="header-anchor" href="#_01-new的基本语法" aria-hidden="true">#</a> 01 new的基本语法</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
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
    delet p; //释放，释放后再使用就会报错
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-new创建数组" tabindex="-1"><a class="header-anchor" href="#_02-new创建数组" aria-hidden="true">#</a> 02 new创建数组</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int * fun()
{
	int * arr = new int[10]; // 10代表数组长度为10
	for(int i=0;i&lt;10;i++)
	{
		arr[i] = i+10;
		cout &lt;&lt; arr[i];
	}
    
    delete []arr; // 释放数组空间
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[s];function r(t,c){return e(),i("div",null,a)}const u=n(l,[["render",r],["__file","12new操作符.html.vue"]]);export{u as default};
