import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_026-日志分析" tabindex="-1"><a class="header-anchor" href="#_026-日志分析" aria-hidden="true">#</a> 026 日志分析</h1><p>想看访问人数中用谷歌浏览器的多还是火狐浏览器的多就需要分析记录的日志了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;readline&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fullPath <span class="token operator">=</span> <span class="token function">createDirPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> fullFileName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">,</span> <span class="token string">&#39;access.log&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>fullFileName<span class="token punctuation">)</span>
    <span class="token keyword">return</span> readStream
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createDirPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> dirName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">const</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../log&#39;</span><span class="token punctuation">,</span> dirName<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fullPath
<span class="token punctuation">}</span>
<span class="token keyword">const</span> readStream <span class="token operator">=</span> <span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> readObject <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> readStream <span class="token comment">// 通过 readStream 读取</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> totalCount <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> chromeCount <span class="token operator">=</span> <span class="token number">0</span>
readObject<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">lineData</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 每读取一行就触发一次</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>lineData<span class="token punctuation">)</span> <span class="token keyword">return</span>
    totalCount <span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lineData<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Chrome&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        chromeCount <span class="token operator">++</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

readObject<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 读完了，触发close事件</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chromeCount <span class="token operator">/</span> totalCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","026日志分析.html.vue"]]);export{r as default};
