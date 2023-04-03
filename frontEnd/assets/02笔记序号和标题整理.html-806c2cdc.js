import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_02-笔记序号和标题整理" tabindex="-1"><a class="header-anchor" href="#_02-笔记序号和标题整理" aria-hidden="true">#</a> 02 笔记序号和标题整理</h1><p>readme</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 背景</span>

js笔记有很多冗余需要整理，比如数据类型.md不单单有数据类型的介绍，还写有部分数据类型的判断。导致不方便查找。还有一部分准确的数据类型的判断写在别的文件。

<span class="token title important"><span class="token punctuation">#</span> 作用</span>

根据文件名顺序，将文件旧序号删除，生成新文件名序号
并且修改文件一级标题# 为 新序号 + 文件名
同时生成siderbar文件内容以方便复制

<span class="token title important"><span class="token punctuation">#</span> 操作</span>

<span class="token list punctuation">1.</span> 整理文件自然排列
    只修改文件名即可，不用管里面的标题，最终统一以文件名作为一级标题
    1.1 把想要摘取成单独文件的部分摘出来，命名为 06_1xxxx.md 06_2xxx.md等
    1.2 把被摘取的文件命名为 06_0xxx.md
    1.3 删除不需要的文件，比如有的文件合并了，变成空文件了，不想要了，直接删掉。
    1.4 这样，文件排序就是自然排列的，到时候使用脚本重新命名01 02 03即可。（原理与目的）
    1.5 重要：检查文件命名01 02后面是否有数字，如果有数字，因为是使用正则匹配的，非常有可能改坏文件，所以要注意。
    1.6 重要：检查文件名是否与一级标题是否一致，执行脚本后，统一以文件名为一级标题名，直接复制过去。

<span class="token list punctuation">2.</span> 脚本目录
    newnote 存放修改好的文件
    note 存放待修改的文件
    note copy 直接把note复制一份，存放备份，以免把note改坏了，导致心血没了
    a.js 执行文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 配置项</span>
<span class="token comment">// sidebar示例，方便直接拼接</span>
<span class="token comment">// let siderEg = &#39;/typora/02frontEnd/03JavaScript/&#39;</span>
<span class="token keyword">let</span> siderEg <span class="token operator">=</span> <span class="token string">&#39;/typora/02frontEnd/03JavaScript/&#39;</span>

<span class="token comment">// 全局变量</span>
<span class="token comment">// 旧文件名数组</span>
<span class="token keyword">let</span> oldFileNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 最简文件名数组  例如：01概念.md 变为 概念</span>
<span class="token keyword">let</span> simpleNameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 新文件名数组</span>
<span class="token keyword">let</span> newFileNameArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 一级标题数组</span>
<span class="token keyword">let</span> h1Arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// siderbar数组</span>
<span class="token keyword">let</span> siderbarArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


<span class="token comment">// 匹配文件名</span>
oldFileNames <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token string">&#39;./note&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件个数为:&quot;</span> <span class="token operator">+</span> oldFileNames<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
simpleNameArr <span class="token operator">=</span> oldFileNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+(_\\d)?(.+).md</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件个数匹配成功的个数为：&quot;</span> <span class="token operator">+</span> simpleNameArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(simpleNameArr);</span>

<span class="token comment">// 准备新文件名、一级标题、siderbar</span>
simpleNameArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> orderNum <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>simpleNameArr<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderNum <span class="token operator">=</span> <span class="token punctuation">(</span>orderNum <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>simpleNameArr<span class="token punctuation">.</span>length<span class="token operator">&gt;=</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderNum <span class="token operator">=</span> <span class="token punctuation">(</span>orderNum <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1. 新文件名</span>
    <span class="token keyword">const</span> newFileName <span class="token operator">=</span> orderNum<span class="token operator">+</span>val<span class="token operator">+</span><span class="token string">&quot;.md&quot;</span>
    newFileNameArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newFileName<span class="token punctuation">)</span>
    <span class="token comment">// 2. 一级标题</span>
    h1Arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;# &quot;</span> <span class="token operator">+</span> orderNum <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
    <span class="token comment">// 3. siderbar</span>
    siderbarArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>siderEg<span class="token operator">+</span>newFileName<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 将siderbar写入txt文件</span>
fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./siderbar.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;siderbar内容条数为:&quot;</span> <span class="token operator">+</span> siderbarArr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
siderbarArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">appendFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./siderbar.txt&quot;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\r\\n&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;,</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 清空newnote目录</span>
<span class="token keyword">let</span> newnoteFiles <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token string">&quot;./newnote&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>newnoteFiles<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要清空newnote目录</span>
    newnoteFiles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span><span class="token string">&quot;./newnote/&quot;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建新.md文件</span>
oldFileNames<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./note/&quot;</span> <span class="token operator">+</span> val<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 正则含义：内容开端必须是(一级标题)或(换行符加一级标题)，一级标题#前面只能是换行符，将这样的一级标题换为空</span>
    <span class="token keyword">let</span> newFileContent <span class="token operator">=</span> fileContent<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?&lt;!\\S)\\s*# (.+)\\r?\\n?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    newFileContent <span class="token operator">=</span> h1Arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span> newFileContent
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./newnote/&quot;</span> <span class="token operator">+</span> newFileNameArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> newFileContent<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","02笔记序号和标题整理.html.vue"]]);export{r as default};
