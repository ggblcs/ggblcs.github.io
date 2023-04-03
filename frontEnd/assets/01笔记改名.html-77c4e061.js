import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_01-笔记改名" tabindex="-1"><a class="header-anchor" href="#_01-笔记改名" aria-hidden="true">#</a> 01 笔记改名</h1><p>改革后，不用再配sidebar了，想直接通过输入文件夹，来格式化文件夹里的笔记标题（文件名和一级标题名）</p><p>以修改的方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 配置项</span>
<span class="token comment">// const oldFol = &quot;./docs/13Vue3p&quot;</span>
<span class="token keyword">const</span> oldFol <span class="token operator">=</span> <span class="token string">&quot;./docs/00guide/02script&quot;</span>
<span class="token keyword">const</span> startNum <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 以指定序号开始</span>

<span class="token comment">// 全局变量</span>
<span class="token comment">// 旧文件名数组</span>
<span class="token keyword">let</span> oldFileNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 最简文件名数组  例如：01概念.md 变为 概念</span>
<span class="token keyword">let</span> simpleNameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 新文件名数组</span>
<span class="token keyword">let</span> newFileNameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 一级标题数组</span>
<span class="token keyword">let</span> h1Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// 匹配以数字开头 以.md 结尾 的文件名</span>
oldFileNames <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>oldFol<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> ind</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+(_\\d)?(.+).md</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;目标文件个数为:&quot;</span> <span class="token operator">+</span> oldFileNames<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
simpleNameArr <span class="token operator">=</span> oldFileNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+(_\\d)?(.+).md</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件个数匹配成功的个数为：&quot;</span> <span class="token operator">+</span> simpleNameArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(simpleNameArr);</span>


<span class="token comment">// 准备新文件名、一级标题、siderbar</span>
simpleNameArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> orderNum <span class="token operator">=</span> index <span class="token operator">+</span> startNum
    <span class="token keyword">if</span> <span class="token punctuation">(</span>simpleNameArr<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderNum <span class="token operator">=</span> <span class="token punctuation">(</span>orderNum <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>simpleNameArr<span class="token punctuation">.</span>length<span class="token operator">&gt;=</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderNum <span class="token operator">=</span> <span class="token punctuation">(</span>orderNum <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1.1 新文件名获取</span>
    <span class="token keyword">const</span> newFileName <span class="token operator">=</span> orderNum<span class="token operator">+</span>val<span class="token operator">+</span><span class="token string">&quot;.md&quot;</span>
    newFileNameArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newFileName<span class="token punctuation">)</span>
    <span class="token comment">// 1.2 直接修改文件名</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始修改名字：&#39;</span><span class="token punctuation">,</span> oldFileNames<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">renameSync</span><span class="token punctuation">(</span>oldFol <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> oldFileNames<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> oldFol <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> newFileName<span class="token punctuation">)</span>
    <span class="token comment">// 2.1 一级标题</span>
    h1Arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;# &quot;</span> <span class="token operator">+</span> orderNum <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
    <span class="token comment">// 2.2 直接修改内容中的标题</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>oldFol <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> newFileName<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 正则含义：内容开端必须是(一级标题)或(换行符加一级标题)，一级标题#前面只能是换行符，将这样的一级标题换为空</span>
    <span class="token keyword">let</span> newFileContent <span class="token operator">=</span> fileContent<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?&lt;!\\S)\\s*# (.+)\\r?\\n?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    newFileContent <span class="token operator">=</span> h1Arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span> newFileContent
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始修改内容：&#39;</span><span class="token punctuation">,</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>oldFol <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> newFileName<span class="token punctuation">,</span> newFileContent<span class="token punctuation">)</span>

    <span class="token comment">// 3. siderbar</span>
    <span class="token comment">// siderbarArr.push(siderEg+newFileName)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01笔记改名.html.vue"]]);export{r as default};
