import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_03-笔记md批量生成" tabindex="-1"><a class="header-anchor" href="#_03-笔记md批量生成" aria-hidden="true">#</a> 03 笔记md批量生成</h1><p>有时候需要批量创建一堆md文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 根据文件名生成含有一级标题的md文件</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token comment">//#region 配置项</span>
<span class="token comment">// 文件起始序号，默认为01</span>
<span class="token keyword">let</span> startNum <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 文件序号位数，默认为两位，例如01 02 03</span>
<span class="token keyword">let</span> orderLength <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment">// 文件名字符串，一行为一个文件</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> 
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
功能快捷键
合理创建标题
</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">//#endregion</span>

<span class="token comment">//#region 全局变量</span>
<span class="token comment">// 提取的文件名关键字数组</span>
<span class="token keyword">let</span> nameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 文件名数组</span>
<span class="token keyword">let</span> fileNameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 一级标题数组</span>
<span class="token keyword">let</span> h1Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">//#endregion</span>

nameArr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 去除空内容，空行</span>
nameArr <span class="token operator">=</span> nameArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;创建文件个数：&quot;</span> <span class="token operator">+</span> nameArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始创建文件名</span>
nameArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> orderNum <span class="token operator">=</span> startNum <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&quot;&quot;</span>
    orderNum <span class="token operator">=</span> orderNum<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>orderLength<span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    fileNameArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>orderNum <span class="token operator">+</span> val <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span><span class="token punctuation">)</span>
    h1Arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"># </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>orderNum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\r\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建文件名为MarkdownResult的文件夹</span>
fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token string">&quot;./MarkdownResul&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建文件</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fileNameArr<span class="token punctuation">.</span>length <span class="token operator">===</span> h1Arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fileNameArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./MarkdownResul/&quot;</span> <span class="token operator">+</span> val<span class="token punctuation">,</span> h1Arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","03笔记md批量生成.html.vue"]]);export{r as default};
