import{_ as i,p as e,q as n,a1 as a}from"./framework-96b046e1.js";const d={},l=a(`<h1 id="_008-函数" tabindex="-1"><a class="header-anchor" href="#_008-函数" aria-hidden="true">#</a> 008 函数</h1><h2 id="_01-形参与实参" tabindex="-1"><a class="header-anchor" href="#_01-形参与实参" aria-hidden="true">#</a> 01 形参与实参</h2><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int add(int num1,int num2) //定义中的num1，2称为形式参数，形参
{
	int sum = num1 + num2;
	return sum;
}

int main(){
	int a = 2;
	int b = 3;
	int sum = add(a,b); //a,b称为实际参数，简称实参
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-值传递" tabindex="-1"><a class="header-anchor" href="#_02-值传递" aria-hidden="true">#</a> 02 值传递</h2><ul><li>值传递：函数调用时实参将数值传入给形参</li><li>值传递时，如果形参发生改变，并不会影响实参</li></ul><h2 id="_03-函数常见样式" tabindex="-1"><a class="header-anchor" href="#_03-函数常见样式" aria-hidden="true">#</a> 03 函数常见样式</h2><ol><li>无参无返</li><li>有参有返</li><li>无参有返</li><li>有参有返</li></ol><h2 id="_04-函数的声明" tabindex="-1"><a class="header-anchor" href="#_04-函数的声明" aria-hidden="true">#</a> 04 函数的声明</h2><p>作用：告诉编译器函数名称以及如何调用函数，函数的实际主体可以单独定义.</p><p>函数的声明可以多次，但函数的定义只能有一次。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int max(int a,int b); //声明

// 定义
int max(int a,int b){
	return 10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-函数的分文件编写" tabindex="-1"><a class="header-anchor" href="#_05-函数的分文件编写" aria-hidden="true">#</a> 05 函数的分文件编写</h2><ol><li>创建后缀名为.h的头文件</li><li>创建后缀名为.cpp的源文件</li><li>在头文件中写函数的声明</li><li>在源文件中写函数的定义</li></ol><p>示例</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 创建hello.h
#include &lt;iostream&gt;
using namespace std;

void say();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 创建hello.cpp
#include &quot;hello.h&quot; //必须引入以关联，双引号表示引入自定义头文件

void say(){
	cout &lt;&lt; &quot;找朋友&quot; &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 创建其它文件使用
#include &lt;iostream&gt;
#include &quot;hello.h&quot;
using namespace std;
int main(){

	say();
		
	system(&quot;pause&quot;);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-指针与函数" tabindex="-1"><a class="header-anchor" href="#_06-指针与函数" aria-hidden="true">#</a> 06 指针与函数</h2><h3 id="_6-1-地址传递" tabindex="-1"><a class="header-anchor" href="#_6-1-地址传递" aria-hidden="true">#</a> 6.1 地址传递</h3><p>除了03的值传递，还有地址传递，就是通过传递地址的方式传递参数，比较简单，内容略。</p><h3 id="_6-2-指针函数" tabindex="-1"><a class="header-anchor" href="#_6-2-指针函数" aria-hidden="true">#</a> 6.2 指针函数</h3><p>返回值是指针的函数，这个不难理解。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int* fun(int x,int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-3-函数指针" tabindex="-1"><a class="header-anchor" href="#_6-3-函数指针" aria-hidden="true">#</a> 6.3 函数指针</h3><p>本质上就是一个指针变量，该指针指向一个函数。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int (*fun)(int x,int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>赋值使用(两种写法)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 赋值
fun = &amp;Function;
fun = Function;
// 使用
(*fun)();  //更加直观看出就是通过指针调用函数
fun();	   //效果一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),s=[l];function r(c,u){return e(),n("div",null,s)}const t=i(d,[["render",r],["__file","008函数.html.vue"]]);export{t as default};
