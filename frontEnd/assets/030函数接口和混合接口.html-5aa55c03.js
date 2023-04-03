import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_030-函数接口和混合接口" tabindex="-1"><a class="header-anchor" href="#_030-函数接口和混合接口" aria-hidden="true">#</a> 030 函数接口和混合接口</h1><p>lnj</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 函数接口</span>
<span class="token comment">// 我们除了可以通过接口来限定对象以外, 我们还可以使用接口来限定函数</span>
<span class="token comment">/*
interface SumInterface {
    (a:number, b:number):number
}
let sum:SumInterface = function (x:number, y:number):number {
    return x + y;
}
let res = sum(10, 20);
console.log(res);
 */</span>

<span class="token comment">// 混合类型接口</span>
<span class="token comment">// 约定的内容中既有对象属性, 又有函数</span>
<span class="token comment">// 要求定义一个函数实现变量累加</span>
<span class="token comment">/*
let count = 0; // 会污染全局空间
function demo() {
    count++;
    console.log(count);
}
demo();
demo();
demo();
 */</span>
<span class="token comment">/*
let demo = (()=&gt;{ // 使用闭包确实可以解决污染全局空间的问题, 但是对于初学者来说不太友好
    let count = 0;
    return ()=&gt;{
        count++;
        console.log(count);
    }
})();
demo();
demo();
demo();
 */</span>
<span class="token comment">// 在JS中函数的本质是什么? 就是一个对象</span>
<span class="token comment">// let demo = function () {</span>
<span class="token comment">//     demo.count++;</span>
<span class="token comment">// }</span>
<span class="token comment">// demo.count = 0;</span>
<span class="token comment">// demo();</span>
<span class="token comment">// demo();</span>
<span class="token comment">// demo();</span>
<span class="token keyword">interface</span> <span class="token class-name">CountInterface</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
    count<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> getCounter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>CountInterface <span class="token punctuation">{</span>
    <span class="token comment">/*
    CountInterface接口要求数据既要是一个没有参数没有返回值的函数
                              又要是一个拥有count属性的对象
    fn作为函数的时候符合接口中函数接口的限定 ():void
    fn作为对象的时候符合接口中对象属性的限定  count:number
    * */</span>
    <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token operator">&lt;</span>CountInterface<span class="token operator">&gt;</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fn<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fn<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function l(o,p){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","030函数接口和混合接口.html.vue"]]);export{d as default};
