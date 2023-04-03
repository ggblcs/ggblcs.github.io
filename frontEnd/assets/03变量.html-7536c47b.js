import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_03-变量" tabindex="-1"><a class="header-anchor" href="#_03-变量" aria-hidden="true">#</a> 03 变量</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*
1.什么是变量?
和js中的概念基本一样
*/</span>
<span class="token comment">/*
2.less中定义变量的格式
@变量名称: 值;
3.less中使用变量的格式
@变量名称;
*/</span>
<span class="token variable">@w<span class="token punctuation">:</span></span> 400px<span class="token punctuation">;</span>
<span class="token comment">//@h: 200px;</span>
<span class="token comment">/*
4.和js一样可以将一个变量赋值给另外一个变量
@变量名称 : @变量名称;
*/</span>
<span class="token variable">@h<span class="token punctuation">:</span></span> <span class="token variable">@w</span><span class="token punctuation">;</span>
<span class="token comment">/*
5.和js一样less中的变量也有全局变量和局部变量
定义在{}外面的就是全局的变量, 什么地方都可以使用
定义在{}里面的就是局部变量, 只能在{}中使用

注意定: less中的变量是延迟加载的, 写到后面也能在前面使用
*/</span>
<span class="token comment">//@c: blue;</span>
<span class="token comment">/*
6.和js一样不同作用域的变量不会相互影响, 只有相同作用域的变量才会相互影响
  和js一样在访问变量时会采用就近原则
*/</span>
<span class="token variable">@c<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token variable">@c<span class="token punctuation">:</span></span> blue<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token variable">@c<span class="token punctuation">:</span></span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">@c<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","03变量.html.vue"]]);export{d as default};
