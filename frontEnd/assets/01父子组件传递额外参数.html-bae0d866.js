import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_01-父子组件传递额外参数" tabindex="-1"><a class="header-anchor" href="#_01-父子组件传递额外参数" aria-hidden="true">#</a> 01 父子组件传递额外参数</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 1. 需求还原 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@uploadSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadSuccess<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 子组件上传图片成功后，会调用uploadSuccess事件，并会传递 上传成功的reslist 上传成功的filename参数  --&gt;</span>
<span class="token comment">&lt;!-- 但是，我怎样知道，是哪个child调用了这个函数，需要传递额外的参数 item --&gt;</span>

<span class="token comment">&lt;!-- 2. 错误示例 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@uploadSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadSuccess(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 这样只能拿到item，就拿不到子组件传递的参数了 --&gt;</span>

<span class="token comment">&lt;!-- 3.1 实现方案一 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@uploadSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadSuccess($event, item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 如果子组件默认只传了一个参数，就用$event 接收 --&gt;</span>

<span class="token comment">&lt;!-- 3.2 实现方案二： --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@uploadSuccess</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadSuccess(arguments, item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 如果子组件传递了多个参数，就用 arguments数组接收 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function c(o,u){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","01父子组件传递额外参数.html.vue"]]);export{r as default};
