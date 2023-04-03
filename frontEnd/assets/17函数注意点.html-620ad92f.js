import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_17-函数注意点" tabindex="-1"><a class="header-anchor" href="#_17-函数注意点" aria-hidden="true">#</a> 17 函数注意点</h1><p><strong>大部分很简单，只需看加粗重点</strong></p><ol><li><p>一个函数可以有形参，也可以没有形参。（零个或多个）</p><ol><li>形参：定义函数函数()中的变量我们就称之为形参。形参的目的是接收实参，形参变量只有在被调用时才分配内存单元，调用结束时释放内存。</li><li>实参：调用函数时传入的数据我们就称之为实参。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//没有形参的函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//有形参的函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> he <span class="token operator">=</span> <span class="token string">&#39;xiaoming&#39;</span><span class="token punctuation">;</span>
<span class="token function">say</span><span class="token punctuation">(</span>he<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//he是实参</span>
<span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&#39;libai&#39;</span><span class="token punctuation">)</span><span class="token comment">//&#39;libai&#39;也是实参</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一个函数可以有返回值也可以没有返回值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function say(a,b){
//有返回值的函数
return a+b;
}

function say(a,b){
//无返回值的函数
console.log(a+b);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数<strong>没有通过return明确返回值</strong>（没写return或只写了return，return后没写别的），<strong>默认返回undefined</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function say(a,b){
console.log(a+b);
return;//undefined
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>return的作用和break相似，所以return后面不能编写任何语句（永远执行不到）。</p><ol><li>break：立即结束switch语句或循环语句。</li><li>return：立即结束当前所在函数。</li></ol></li><li><p>调用函数时，<strong>实参的个数可以和形参的个数不相同</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getSum(a, b){
	return a+b;
}

let res = getSum(1, 2);//实参形参个数相同
let res = getSum(1);//实参形参个数不同，b=undefined，不报错
let res = getSum(1, 2, 3)//实形参个数不同，a=1,b=2, 不报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>js中的<strong>函数</strong>和数组一样，都是引用数据类型（对象类型）</p><p><strong>既然是一种数据类型，所以一也可以保存到一个变量中</strong></p><p>可以通过变量名找到并执行函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let say = function(){
	console.log(&quot;hello!&quot;);
}

say();//通过变量名找到并执行函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),t=[l];function c(o,d){return s(),a("div",null,t)}const p=n(i,[["render",c],["__file","17函数注意点.html.vue"]]);export{p as default};
