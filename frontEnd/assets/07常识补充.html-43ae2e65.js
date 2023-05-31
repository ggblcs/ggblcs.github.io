import{_ as n,p as s,q as a,a1 as i}from"./framework-96b046e1.js";const e={},l=i(`<h1 id="_07-常识补充" tabindex="-1"><a class="header-anchor" href="#_07-常识补充" aria-hidden="true">#</a> 07 常识补充</h1><ol><li>静态数据和动态数据分别指在磁盘和内存中的数据。</li><li>程序：编译成的可执行的二进制文件，如QQ。</li><li>进程：程序在操作系统中的一次执行过程，如打开一个记事本，会多一个记事本进程，再打开一个记事本，又会多一个记事本进程，所以程序与进程是一对多关系。</li><li>线程：进程中的一个执行实例，一个进程至少有一个线程，称之为主线程。一个进程可以有多个线程。</li><li>串行：按顺序执行，排队进入窗口。例如一个线程中有多个指令，则必须一个一个的让CPU执行。</li><li>并行：同时执行。同一时刻有多条指令（每条指令来自不同的线程）在多个CPU上执行。</li></ol><hr><p>JS是单线程的，所以JS代码都是串行的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.JS是单线程的
所以JS中的代码都是串行的, 前面没有执行完毕后面不能执行
*/</span>
<span class="token comment">/*
2.同步代码和异步代码
除了&quot;事件绑定的函数&quot;和&quot;回调函数&quot;以外的都是同步代码

2.1程序运行会从上至下依次执行所有的同步代码
2.2在执行的过程中如果遇到异步代码会将异步代码放到事件循环中
2.3当所有同步代码都执行完毕后, JS会不断检测 事件循环中的异步代码是否满足条件
2.4一旦满足条件就执行满足条件的异步代码
* */</span>
<span class="token comment">/*
2.为什么JS是单线程的?
avaScript的单线程，与它的用途有关。
作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。
这决定了它只能是单线程，否则会带来很复杂的同步问题。

例如: 如果JS是多线程的
现在有一个线程要修改元素中的内容, 一个线程要删除该元素, 这时浏览器应该以哪个线程为准？
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 同步代码</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 异步代码</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 同步代码</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 同步代码</span>
<span class="token comment">// 1 / 3 / 2</span>
<span class="token comment">/*
// 系统添加代码模拟
let arr = [setTimeout(function () { // 异步代码
    console.log(&quot;2&quot;);
}, 500)];
事件循环
let index = 0;
let length = arr.length;
while(true){
    let item = arr[index];
    if(item.time === 500){
        执行异步代码
    }
    index++;
    if(index === length){
        index = 0;
    }
}
*/</span>
<span class="token comment">/*
扩展阅读: https://segmentfault.com/a/1190000015042127
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function c(o,u){return s(),a("div",null,t)}const p=n(e,[["render",c],["__file","07常识补充.html.vue"]]);export{p as default};
