import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_08-其它静态方法" tabindex="-1"><a class="header-anchor" href="#_08-其它静态方法" aria-hidden="true">#</a> 08 其它静态方法</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
$.trim();
作用: 去除字符串两端的空格
参数: 需要去除空格的字符串
返回值: 去除空格之后的字符串
*/</span>
<span class="token comment">/*
var str = &quot;    lnj    &quot;;
var res = $.trim(str);
console.log(&quot;---&quot;+str+&quot;---&quot;);
console.log(&quot;---&quot;+res+&quot;---&quot;);
*/</span>

<span class="token comment">// 真数组</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 伪数组</span>
<span class="token keyword">var</span> arrlike <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 对象</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&quot;33&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// window对象</span>
<span class="token keyword">var</span> w <span class="token operator">=</span> window<span class="token punctuation">;</span>

<span class="token comment">/*
$.isWindow();
作用: 判断传入的对象是否是window对象
返回值: true/false
*/</span>
<span class="token comment">/*
var res = $.isWindow(w);
console.log(res);
*/</span>

<span class="token comment">/*
$.isArray();
作用: 判断传入的对象是否是真数组
返回值: true/false
*/</span>
<span class="token comment">/*
var res = $.isArray(w);
console.log(res);
*/</span>
<span class="token comment">/*
$.isFunction();
作用: 判断传入的对象是否是一个函数
返回值: true/false
注意点:
jQuery框架本质上是一个函数
(function( window, undefined ) {
 })( window );
*/</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function o(l,c){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","08其它静态方法.html.vue"]]);export{u as default};
