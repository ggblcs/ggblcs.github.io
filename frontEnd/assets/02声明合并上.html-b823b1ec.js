import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_02-声明合并上" tabindex="-1"><a class="header-anchor" href="#_02-声明合并上" aria-hidden="true">#</a> 02 声明合并上</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
在ts当中接口和命名空间是可以重名的, ts会将多个同名的合并为一个
* */</span>
<span class="token comment">// 1.接口</span>
<span class="token comment">/*
interface TestInterface {
    name:string;
}
interface TestInterface {
    age:number;
}
// interface TestInterface {
//     name:string;
//     age:number;
// }
class Person implements TestInterface{
    name:string;
    age:number;
}
 */</span>

<span class="token comment">// 1.1同名接口如果属性名相同, 那么属性类型必须一致</span>
<span class="token comment">/*
interface TestInterface {
    name:string;
}
interface TestInterface {
    name:number;
}
 */</span>
<span class="token comment">// 1.2同名接口如果出现同名函数, 那么就会成为一个函数的重载</span>
<span class="token comment">/*
interface TestInterface {
    getValue(value:number):number;
}
interface TestInterface {
    getValue(value:string):number;
}
let obj:TestInterface = {
    getValue(value:any):number{
        if(typeof value === &#39;string&#39;){
            return value.length;
        }else{
            return value.toFixed();
        }
    }
}
console.log(obj.getValue(&quot;abcdef&quot;));
console.log(obj.getValue(3.14));
*/</span>

<span class="token comment">// 2.命名空间</span>
<span class="token comment">/*
namespace Validation{
    export let name:string = &#39;lnj&#39;;
}
namespace Validation{
    export let age:number = 18;
}
console.log(Validation.name);
console.log(Validation.age);
*/</span>

<span class="token comment">// 1.1同名的命名空间中不能出现同名的变量,方法等</span>
<span class="token comment">/*
namespace Validation{
    export let name:string = &#39;lnj&#39;;
    export let say = ()=&gt; &quot;abc&quot;;
}
namespace Validation{
    export let name:string = &#39;zs&#39;;
    export let say = ()=&gt; &quot;abc&quot;;
}
 */</span>
<span class="token comment">// 1.2同名的命名空间中其它命名空间没有通过export导出的内容是获取不到的</span>
<span class="token keyword">namespace</span> Validation<span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">namespace</span> Validation<span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Validation<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(d,v){return s(),e("div",null,t)}const u=n(i,[["render",c],["__file","02声明合并上.html.vue"]]);export{u as default};
