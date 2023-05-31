import{_ as n,p as e,q as s,a1 as i}from"./framework-96b046e1.js";const l={},a=i(`<h1 id="_03-声明合并下" tabindex="-1"><a class="header-anchor" href="#_03-声明合并下" aria-hidden="true">#</a> 03 声明合并下</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 除了同名的接口和命名空间可以合并以外</span>
<span class="token comment">// 命名空间还可以和同名的类/函数/枚举合并</span>
<span class="token comment">// 命名空间和类合并</span>
<span class="token comment">// 注意点: 类必须定义在命名空间的前面</span>
<span class="token comment">// 会将命名空间中导出的方法作为一个静态方法合并到类中</span>
<span class="token comment">/*
class Person {
    say():void{
        console.log(&#39;hello world&#39;);
    }
}
namespace Person{
    export const hi = ():void=&gt;{
        console.log(&#39;hi&#39;);
    }
}
console.dir(Person);
 */</span>

<span class="token comment">// 命名空间和函数合并</span>
<span class="token comment">// 注意点: 函数必须定义在命名空间的前面</span>
<span class="token comment">/*
function getCounter() {
    getCounter.count++;
    console.log(getCounter.count);
}
namespace getCounter{
    export let count:number = 0;
}
 */</span>

<span class="token comment">// 命名空间和枚举合并</span>
<span class="token comment">// 注意点: 没有先后顺序的要求</span>
<span class="token comment">/*
enum Gender {
    Male,
    Female
}
namespace Gender{
    export const Yao:number = 666;
}
console.log(Gender);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function c(v,r){return e(),s("div",null,d)}const o=n(l,[["render",c],["__file","03声明合并下.html.vue"]]);export{o as default};
