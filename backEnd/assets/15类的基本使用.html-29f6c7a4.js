import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_15-类的基本使用" tabindex="-1"><a class="header-anchor" href="#_15-类的基本使用" aria-hidden="true">#</a> 15 类的基本使用</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 构造方法，self必传</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name <span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
    
    <span class="token keyword">def</span> <span class="token function">sit</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is now sitting&#39;</span></span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> is now call&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 创建实例</span>
dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 修改属性值</span>
dog<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;ls&#39;</span>
dog<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 也可通过get，set方法修改</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","15类的基本使用.html.vue"]]);export{d as default};
