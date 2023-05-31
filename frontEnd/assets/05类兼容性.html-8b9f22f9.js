import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_05-类兼容性" tabindex="-1"><a class="header-anchor" href="#_05-类兼容性" aria-hidden="true">#</a> 05 类兼容性</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 只比较实例成员, 不比较类的构造函数和静态成员</span>
<span class="token comment">/*
class Person {
    public name:string;
    // public age:number;
    public static age:number;
    constructor(name:string, age:number){}
}
class Animal {
    public name:string;
    constructor(name:string){}
}
let p: Person;
let a: Animal;
p = a;
a = p; // 可多不少
 */</span>

<span class="token comment">// 类的私有属性和受保护属性会响应兼容性</span>
<span class="token comment">/*
class Person {
    protected name:string;
}
class Animal {
    protected name:string;
}
let p: Person;
let a: Animal;
p = a;
a = p; // 可多不少
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function c(r,v){return e(),i("div",null,d)}const t=n(l,[["render",c],["__file","05类兼容性.html.vue"]]);export{t as default};
