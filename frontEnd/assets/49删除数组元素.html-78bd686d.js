import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_49-删除数组元素" tabindex="-1"><a class="header-anchor" href="#_49-删除数组元素" aria-hidden="true">#</a> 49 删除数组元素</h1><p>需求：遍历数组的同时删除数组中所有元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 需求 遍历数组的同时删除数组中所有元素</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//方法一</span>
<span class="token comment">/*
错误方法：
for (let i=0;i&lt;arr.length;i++){
    arr.splice(i,1);
}
因为每删除一个，索引都会向前移1，删除arr[0]后，arr[1]就变成了arr[0],
就删不完了，所以应该倒着删。
 */</span>
<span class="token comment">// for(let i=arr.length-1;i&gt;=0;i--){</span>
<span class="token comment">//     arr.splice(i,1);</span>
<span class="token comment">// }</span>

<span class="token comment">//方法二</span>
<span class="token comment">/*
delete 是用来删除对象的，数组也是对象，也可以删
delete特点：每删除一个元素，数组的长度是不变的，删除前面的元素，后面元素的索引也不会前移
 */</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">delete</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//方法三</span>
<span class="token comment">/*
我觉得还可以用splice删除5次a[0]
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","49删除数组元素.html.vue"]]);export{u as default};
