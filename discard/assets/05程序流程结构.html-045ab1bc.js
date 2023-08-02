import{_ as e,p as i,q as l,a1 as n}from"./framework-96b046e1.js";const t={},a=n(`<h1 id="_05-程序流程结构" tabindex="-1"><a class="header-anchor" href="#_05-程序流程结构" aria-hidden="true">#</a> 05 程序流程结构</h1><blockquote><p>重点：02 循环结构do while</p><p>03 跳转语句 goto</p></blockquote><p>C/C++支持最基本的三种程序运行结构：<strong>顺序结构、选择结构、循环结构</strong></p><h2 id="_01-选择结构" tabindex="-1"><a class="header-anchor" href="#_01-选择结构" aria-hidden="true">#</a> 01 选择结构</h2><ol><li><code>if (){} else if(){} else</code></li><li><code>switch(表达式) {case 结果1: break; ... default: break;}</code></li></ol><h2 id="_02-循环结构" tabindex="-1"><a class="header-anchor" href="#_02-循环结构" aria-hidden="true">#</a> 02 循环结构</h2><ol><li>while</li><li><code>do{ num++; } while(num&lt;10);</code></li><li>for</li></ol><h2 id="_03-跳转语句" tabindex="-1"><a class="header-anchor" href="#_03-跳转语句" aria-hidden="true">#</a> 03 跳转语句</h2><p>break</p><p>return</p><p>continue</p><p>goto 不建议用，不便阅读代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 作用：无条件跳转语句
// 语法：goto标记
int main(){
	goto FLAG;
	cout &lt;&lt; 1 &lt;&lt; endl;
	cout &lt;&lt; 2 &lt;&lt; endl;
	FLAG:
	cout &lt;&lt; 3 &lt;&lt; endl;
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[a];function r(s,c){return i(),l("div",null,d)}const u=e(t,[["render",r],["__file","05程序流程结构.html.vue"]]);export{u as default};
