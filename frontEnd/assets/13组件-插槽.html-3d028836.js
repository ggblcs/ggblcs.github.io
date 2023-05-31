import{_ as a,p as s,q as n,a1 as t}from"./framework-96b046e1.js";const e={},l=t(`<h1 id="_13-组件-插槽" tabindex="-1"><a class="header-anchor" href="#_13-组件-插槽" aria-hidden="true">#</a> 13 组件-插槽</h1><p>子组件留孔--插槽</p><p>使用<code>&lt;slot name=&quot;aaa&quot;&gt;</code></p><p>父组件：使用template标签包裹，并用<code>v-slot:name</code>指明</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>默认内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>xxx默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>子给父传值（作用域插槽）
子 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aaa<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>list2/</span><span class="token punctuation">&gt;</span></span>
父 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hello</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>a</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>data</span><span class="token punctuation">&gt;</span></span> {{ data.list }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hello</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function c(o,i){return s(),n("div",null,p)}const d=a(e,[["render",c],["__file","13组件-插槽.html.vue"]]);export{d as default};
