import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_04-枚举兼容性" tabindex="-1"><a class="header-anchor" href="#_04-枚举兼容性" aria-hidden="true">#</a> 04 枚举兼容性</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 数字枚举与数值兼容</span>
<span class="token comment">/*
enum Gender{
    Male,
    Female
}
let value:Gender;
value = Gender.Male;
value = 1
 */</span>

<span class="token comment">// 数字枚举与数字枚举不兼容</span>
<span class="token comment">/*
enum Gender{
    Male, // 0
    Female // 1
}
enum Animal{
    Dog, // 0
    Cat // 1
}
let value:Gender;
value = Gender.Male;
value = Animal.Dog; // 报错
*/</span>

<span class="token comment">// 字符串枚举与字符串不兼容</span>
<span class="token comment">/*
enum Gender{
    Male = &#39;abc&#39;,
    Female  = &#39;def&#39;
}
let value:Gender;
value = Gender.Male;
value = &#39;abc&#39;;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function v(c,r){return n(),i("div",null,d)}const u=e(l,[["render",v],["__file","04枚举兼容性.html.vue"]]);export{u as default};
