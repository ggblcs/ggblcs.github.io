import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},o=p(`<h1 id="_13-mongoose开篇" tabindex="-1"><a class="header-anchor" href="#_13-mongoose开篇" aria-hidden="true">#</a> 13 -Mongoose开篇</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入mongoose</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
mongodb://MongoDB服务器IP地址:MongoDB服务器端口号/需要打开的数据库名称
* */</span>
<span class="token comment">// 2.利用mongoose链接MongoDB服务器</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://127.0.0.1:27017/it666&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.监听链接成功还是失败</span>
<span class="token keyword">let</span> db <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;连接失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;断开连接&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.定义集合中存储数据规则</span>
<span class="token keyword">let</span> userSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Number
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.利用规则创建集合</span>
<span class="token comment">// 注意点: 只要创建好了模型, 那么以后就可以使用模型来操作这个集合</span>
<span class="token comment">// 注意点: mongoose会自动将我们指定的集合名称变成复数</span>
<span class="token keyword">let</span> User <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> userSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.利用集合创建文档</span>
<span class="token comment">// 注意点: 只要创建好了对象, 那么以后就可以使用对象来操作文档</span>
<span class="token keyword">let</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4.操作文档</span>
u<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> product</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文档保存成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","13-Mongoose开篇.html.vue"]]);export{k as default};
