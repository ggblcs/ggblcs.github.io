import{_ as e,p as n,q as i,a1 as a}from"./framework-96b046e1.js";const d={},s=a(`<h1 id="_06-随机数" tabindex="-1"><a class="header-anchor" href="#_06-随机数" aria-hidden="true">#</a> 06 随机数</h1><p>随机数范围0~32767（最大值也可能是别的值，应该与系统有关）。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int num = rand()*100; //生成随机数，由于短时间内每次生成的随机数都一样，称伪随机数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include&lt;ctime&gt;

// 为了防止每次生成的随机数都一样，需要添加随机数种子
// 随机数种子根据当前系统时间声称随机数，防止每次随机数都一样
// time方法需要引入ctime头文件
srand ((unsigned int) time(NULL)); // 添加随机数种子
int num = rand();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[s];function r(c,t){return n(),i("div",null,l)}const m=e(d,[["render",r],["__file","06随机数.html.vue"]]);export{m as default};
