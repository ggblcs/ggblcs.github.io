import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},c=e(`<h1 id="_05-map方法" tabindex="-1"><a class="header-anchor" href="#_05-map方法" aria-hidden="true">#</a> 05 map方法</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">//==================原生的js的map方法与jQuery中的map方法比较=================================</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 1.利用原生JS的map方法遍历</span>
<span class="token comment">/*
第一个参数: 当前遍历到的元素
第二个参数: 当前遍历到的索引
第三个参数: 当前被遍历的数组
注意点:
和原生的forEach一样,不能遍历的伪数组
*/</span>
<span class="token comment">// arr.map(function (value, index, array) {</span>
<span class="token comment">//     console.log(index, value, array);</span>
<span class="token comment">// });</span>
<span class="token comment">// obj.map(function (value, index, array) {</span>
<span class="token comment">//     console.log(index, value, array);</span>
<span class="token comment">// });</span>
<span class="token comment">/*
第一个参数: 要遍历的数组
第二个参数: 每遍历一个元素之后执行的回调函数
回调函数的参数:
第一个参数: 遍历到的元素
第二个参数: 遍历到的索引
注意点:
和jQuery中的each静态方法一样, map静态方法也可以遍历伪数组
*/</span>
<span class="token comment">// $.map(arr, function (value, index) {</span>
<span class="token comment">//     console.log(index, value);</span>
<span class="token comment">// });</span>
<span class="token comment">/*
//=======================jQuery中的map方法与Each方法比较==================================
var res = $.map(obj, function (value, index) {
    console.log(index, value);
});

var res2 = $.each(obj, function (index, value) {
    console.log(index, value);
});
console.log(res);//[]
console.log(res2);//{0: 1, 1: 3, 2: 5, 3: 7, 4: 9, length: 5}
*/</span>

<span class="token keyword">var</span> res <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> index<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> res2 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> index<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1, 4, 7, 10, 13]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{0: 1, 1: 3, 2: 5, 3: 7, 4: 9, length: 5}</span>
<span class="token comment">/*
jQuery中的each静态方法和map静态方法的区别:
each静态方法默认的返回值就是, 遍历谁就返回谁
map静态方法默认的返回值是一个空数组

each静态方法不支持在回调函数中对遍历的数组进行处理
map静态方法可以在回调函数中通过return对遍历的数组进行处理, 然后生成一个新的数组返回
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[c];function l(o,i){return s(),a("div",null,t)}const r=n(p,[["render",l],["__file","05map方法.html.vue"]]);export{r as default};
