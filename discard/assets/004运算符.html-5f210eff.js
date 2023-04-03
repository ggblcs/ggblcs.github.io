import{_ as e,p as a,q as i,a1 as d}from"./framework-96b046e1.js";const n={},t=d(`<h1 id="_004-运算符" tabindex="-1"><a class="header-anchor" href="#_004-运算符" aria-hidden="true">#</a> 004 运算符</h1><h2 id="_01-算数运算符" tabindex="-1"><a class="header-anchor" href="#_01-算数运算符" aria-hidden="true">#</a> 01 算数运算符</h2><p>+、-、*、/、%（取模/取余）、++、--</p><blockquote><ol><li>两个int型的整数相除（/），即使结果是小数，也会输出int型整数（规定）。</li><li>两个小数不能进行取模运算，但可以进行除法运算。</li></ol></blockquote><p>在JavaScript中1/3*3 = 0.9999</p><p>但在C++语言中，结果却等于1</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>	double a = 1;
	double b = 3;
	double c = a/b;
	double res = c*3;
	cout &lt;&lt; res &lt;&lt; endl; // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_02-赋值运算符" aria-hidden="true">#</a> 02 赋值运算符</h2><p>=、+=、-=、*=、/=、%=</p><h2 id="_03-比较运算符" tabindex="-1"><a class="header-anchor" href="#_03-比较运算符" aria-hidden="true">#</a> 03 比较运算符</h2><p>==、！=、&lt;、&gt;、&lt;=、&gt;=</p><h2 id="_04-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_04-逻辑运算符" aria-hidden="true">#</a> 04 逻辑运算符</h2><p>！、&amp;&amp;、||</p>`,13),r=[t];function l(s,c){return a(),i("div",null,r)}const o=e(n,[["render",l],["__file","004运算符.html.vue"]]);export{o as default};
