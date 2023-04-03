import{_ as e,p as n,q as s,a1 as a}from"./framework-96b046e1.js";const i={},t=a(`<h1 id="_083-infer关键字" tabindex="-1"><a class="header-anchor" href="#_083-infer关键字" aria-hidden="true">#</a> 083 infer关键字</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.infer关键字
条件类型提供了一个infer关键字, 可以让我们在条件类型中定义新的类型
* */</span>
<span class="token comment">// 需求: 定义一个类型, 如果传入的是数组, 就返回数组的元素类型,</span>
<span class="token comment">//                     如果传入的是普通类型, 则直接返回这个类型</span>
<span class="token comment">// type MyType&lt;T&gt; = T extends any[] ? T[number] : T;</span>
<span class="token comment">// type res = MyType&lt;string[]&gt;;</span>
<span class="token comment">// type res = MyType&lt;number&gt;;</span>

<span class="token comment">// type MyType&lt;T&gt; = T extends Array&lt;infer U&gt; ? U : T;</span>
<span class="token comment">// type res = MyType&lt;string[]&gt;;</span>
<span class="token comment">// type res = MyType&lt;number&gt;;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function r(c,d){return n(),s("div",null,l)}const p=e(i,[["render",r],["__file","083infer关键字.html.vue"]]);export{p as default};
