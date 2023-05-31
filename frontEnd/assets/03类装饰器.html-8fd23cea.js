import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_03-类装饰器" tabindex="-1"><a class="header-anchor" href="#_03-类装饰器" aria-hidden="true">#</a> 03 类装饰器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.类装饰器
- 类装饰器在类声明之前绑定（紧靠着类声明）。
- 类装饰器可以用来监视，修改或替换类定义
- 在执行类装饰器函数的时候, 会把绑定的类作为其唯一的参数传递给装饰器
- 如果类装饰器返回一个新的类，它会新的类来替换原有类的定义

2.装饰器和装饰器工厂区别
时候可以传递自定义参数
* */</span>
<span class="token comment">/*
function test(target:any) {
    // console.log(target);
    target.prototype.personName = &#39;lnj&#39;;
    target.prototype.say = ():void=&gt;{
        console.log(\`my name is \${target.prototype.personName}\`);
    }
}
*/</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> target <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
@test
class Person {

}
interface Person{
    say():void;
}
let p = new Person();
p.say();
 */</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","03类装饰器.html.vue"]]);export{d as default};
