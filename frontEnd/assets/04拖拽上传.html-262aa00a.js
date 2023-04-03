import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_04-拖拽上传" tabindex="-1"><a class="header-anchor" href="#_04-拖拽上传" aria-hidden="true">#</a> 04 拖拽上传</h1><p>显然拖拽属于界面交互</p><p><code>input type=&quot;file&quot;</code> 本身就是支持拖拽的，ok</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>
    <span class="token comment">/* display: none; */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果由于种种原因不想使用input 拖拽，仅需加入下面代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>oSelect<span class="token punctuation">.</span><span class="token function-variable function">ondragenter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    oSelect<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;draging&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 拖拽进入时，高亮边框</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为，否则会打开图片</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
oSelect<span class="token punctuation">.</span><span class="token function-variable function">ondragleave</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    oSelect<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;draging&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 拖拽离开时，不再高亮边框</span>
    
<span class="token punctuation">}</span>
oSelect<span class="token punctuation">.</span><span class="token function-variable function">ondragover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为，否则会打开图片</span>
<span class="token punctuation">}</span>
oSelect<span class="token punctuation">.</span><span class="token function-variable function">ondrop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为，否则会打开图片</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Files&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 网页上的图片也能拖拽，但我们要拒绝这种行为</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;仅支持上传文件&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;不支持上传多个文件&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    oSelect<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;draging&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 拖拽离开时，不再高亮边框</span>
    oInput<span class="token punctuation">.</span>files <span class="token operator">=</span> e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files
    oInput<span class="token punctuation">.</span><span class="token function">onchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","04拖拽上传.html.vue"]]);export{k as default};
