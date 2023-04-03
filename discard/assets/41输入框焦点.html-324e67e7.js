import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>焦点的获取<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//    1.onfocus是获得焦点</span>
    input<span class="token punctuation">.</span><span class="token function-variable function">onfocus</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;30px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize  <span class="token operator">=</span> <span class="token string">&#39;24px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color  <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//    2.onblur是失去焦点</span>
    input<span class="token punctuation">.</span><span class="token function-variable function">onblur</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;161px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;22px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize  <span class="token operator">=</span> <span class="token string">&#39;18px&#39;</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color  <span class="token operator">=</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","41输入框焦点.html.vue"]]);export{k as default};
