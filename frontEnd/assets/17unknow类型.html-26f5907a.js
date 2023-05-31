import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const l={},i=a(`<h1 id="_17-unknow类型" tabindex="-1"><a class="header-anchor" href="#_17-unknow类型" aria-hidden="true">#</a> 17 unknow类型</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
 1.什么是unknown类型?
 unknown类型是TS3.0中新增的一个顶级类型, 被称作安全的any
* */</span>
<span class="token comment">// 1.任何类型都可以赋值给unknown类型</span>
<span class="token comment">// let value:unknown;</span>
<span class="token comment">// value = 123;</span>
<span class="token comment">// value = &quot;abc&quot;;</span>
<span class="token comment">// value = false;</span>

<span class="token comment">// 2.如果没有类型断言或基于控制流的类型细化, 那么不能将unknown类型赋值给其它类型</span>
<span class="token comment">// let value1:unknown = 123;</span>
<span class="token comment">// let value2:number;</span>
<span class="token comment">// value2 = value1;</span>
<span class="token comment">// value2 = value1 as number;</span>
<span class="token comment">// if(typeof value1 === &#39;number&#39;){</span>
<span class="token comment">//     value2 = value1;</span>
<span class="token comment">// }</span>

<span class="token comment">// 3.如果没有类型断言或基于控制流的类型细化, 那么不能在unknown类型上进行任何操作</span>
<span class="token comment">// let value1:unknown = 123;</span>
<span class="token comment">// value1++;</span>
<span class="token comment">// (value1 as number)++;</span>
<span class="token comment">// if(typeof value1 === &#39;number&#39;){</span>
<span class="token comment">//      value1++;</span>
<span class="token comment">// }</span>

<span class="token comment">// 4.只能对unknown类型进行 相等或不等操作, 不能进行其它操作(因为其他操作没有意义)</span>
<span class="token comment">// let value1:unknown = 123;</span>
<span class="token comment">// let value2:unknown = 123;</span>
<span class="token comment">// console.log(value1 === value2);</span>
<span class="token comment">// console.log(value1 !== value2);</span>
<span class="token comment">// console.log(value1 &gt;= value2); // 虽然没有报错, 但是不推荐, 如果想报错提示, 可以打开严格模式</span>

<span class="token comment">// 5.unknown与其它任何类型组成的交叉类型最后都是其它类型</span>
<span class="token comment">// type MyType = number &amp; unknown;</span>
<span class="token comment">// type MyType = unknown &amp; string;</span>

<span class="token comment">// 6.unknown除了与any以外, 与其它任何类型组成的联合类型最后都是unknown类型</span>
<span class="token comment">// type MyType = unknown | any;</span>
<span class="token comment">// type MyType = unknown | number;</span>
<span class="token comment">// type MyType = unknown | string | boolean;</span>

<span class="token comment">// 7.never类型是unknown类型的子类型</span>
<span class="token comment">// type MyType = never extends unknown ? true : false;</span>

<span class="token comment">// 8.keyof unknown等于never</span>
<span class="token comment">// type MyType = keyof unknown;</span>

<span class="token comment">// 9.unknown类型的值不能访问其属性,方法,创建实例</span>
<span class="token comment">// class Person {</span>
<span class="token comment">//     name:string = &#39;lnj&#39;;</span>
<span class="token comment">//     say():void{</span>
<span class="token comment">//         console.log(\`name = \${this.name}\`);</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// let p:unknown = new Person();</span>
<span class="token comment">// p.say();</span>
<span class="token comment">// console.log(p.name);</span>


<span class="token comment">// 10.使用映射类型时, 如果遍历的是unknown类型, 那么不会映射任何属性</span>
<span class="token comment">// type MyType&lt;T&gt; = {</span>
<span class="token comment">//     [P in keyof T]:any</span>
<span class="token comment">// }</span>
<span class="token comment">// type res = MyType&lt;unknown&gt;</span>






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function m(o,v){return s(),e("div",null,c)}const t=n(l,[["render",m],["__file","17unknow类型.html.vue"]]);export{t as default};
