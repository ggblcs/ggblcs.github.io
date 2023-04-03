import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_063-类型兼容性" tabindex="-1"><a class="header-anchor" href="#_063-类型兼容性" aria-hidden="true">#</a> 063 类型兼容性</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 基本兼容性</span>
<span class="token comment">/*
interface TestInterface {
    name:string;
}

let p1 = {name:&#39;lnj&#39;};
let p2 = {age:18};
let p3 = {name:&#39;lnj&#39;, age:18};

let t:TestInterface;
t = p1;
t = p2;
t = p3; // 可多不可少
 */</span>
<span class="token comment">/*
interface TestInterface {
    name:string;
    children:{
        age:number
    };
}

let p1 = {name:&#39;lnj&#39;, children:{age:18}};
let p2 = {name:&#39;lnj&#39;,children:{age:&#39;abc&#39;}};

let t:TestInterface;
t = p1;
t = p2; // 会递归检查
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function c(r,v){return n(),i("div",null,d)}const m=e(l,[["render",c],["__file","063类型兼容性.html.vue"]]);export{m as default};
