import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_11-事件对象" tabindex="-1"><a class="header-anchor" href="#_11-事件对象" aria-hidden="true">#</a> 11 事件对象</h1><p>梗概：</p><ol><li>事件对象event。</li><li>阻止默认行为，如a标签的链接。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.it666.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>知播渔教育<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是事件对象?
事件对象就是一个系统自动创建的一个对象
当注册的事件被触发的时候, 系统就会自动创建事件对象
*/</span>
<span class="token comment">/*
2.事件对象的注意点:
在高级版本的浏览器中, 会自动将事件对象传递给回到函数
在低级版本的浏览器中, 不会自动将事件对象传递给回调函数
在低级版本的浏览器中, 需要通过window.event来获取事件对象
    */</span>
<span class="token comment">/*
var oBtn = document.getElementById(&quot;btn&quot;);
oBtn.onclick = function (event) {
    // 兼容性的写法
    event = event || window.event;
    // alert(&quot;666&quot;);
    console.log(event);
    console.log(typeof event);
}
*/</span>
<span class="token keyword">let</span> oA <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oA<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 兼容性的写法</span>
    event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>

    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 阻止默认行为</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 企业开发推荐 方式1</span>

    <span class="token comment">// 注意点: preventDefault方法只支持高级版本的浏览器</span>
    <span class="token comment">// event.preventDefault();//方式2</span>
    <span class="token comment">// event.returnValue = false; // IE9以下的浏览器</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[l];function c(o,p){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","11事件对象.html.vue"]]);export{d as default};
