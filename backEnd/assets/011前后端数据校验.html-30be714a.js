import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_011-前后端数据校验" tabindex="-1"><a class="header-anchor" href="#_011-前后端数据校验" aria-hidden="true">#</a> 011 前后端数据校验</h1><blockquote><p>ajv的使用</p></blockquote><h2 id="_01-前端数据校验" tabindex="-1"><a class="header-anchor" href="#_01-前端数据校验" aria-hidden="true">#</a> 01 前端数据校验</h2><p>js文件中在提交前校验发送的数据格式，无需多言。</p><h2 id="_02-后端数据校验" tabindex="-1"><a class="header-anchor" href="#_02-后端数据校验" aria-hidden="true">#</a> 02 后端数据校验</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是JSON Schema?
- JSON Schema定义了JSON格式的规范
- 在企业开发中通常都是多人团队开发, 所以为了提升开发效率
  我们就需要制定各种标准, 而JSON Schema就是专门用于制定JSON的标准的

2.什么是Ajv
- 虽然开发之前我们就制定了标准, 但是无论是前端开发人员还是后端开发人员
  都不能盲目的相信对方, 所以在开发过程中我们还需要对制定的规范进行校验
- 在NodeJS中我们可以通过Ajv来校验前端传递过来的JSON数据是否符合我们制定的JSON Schema规范
https://www.npmjs.com/package/ajv
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-json-schema" tabindex="-1"><a class="header-anchor" href="#_2-1-json-schema" aria-hidden="true">#</a> 2.1 JSON Schema</h3><p>新建validator目录，放<code>userValidator.js</code>文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&#39;^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\\\.[a-zA-Z0-9_-]+)+$&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&#39;^[A-Za-z0-9]{6,20}$&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">6</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token string">&#39;[1,2,3]&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> userSchema<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-ajv" tabindex="-1"><a class="header-anchor" href="#_2-2-ajv" aria-hidden="true">#</a> 2.2 Ajv</h3><p>ajv需要安装</p><p>在router / user.js中使用ajv校验传递过来的数据。</p><p><strong>代码提取后：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> valid <span class="token operator">=</span> ajv<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>userSchema<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true、false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ajv<span class="token punctuation">.</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出为什么不合法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当然也可以这么用，效果一样，也是官网给的例子</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 处理注册</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--------00-------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> valid <span class="token operator">=</span> ajv<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>userSchema<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ajv<span class="token punctuation">.</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valid<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--------11-------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> validate <span class="token operator">=</span> ajv<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>userSchema<span class="token punctuation">)</span>
<span class="token keyword">const</span> valid2 <span class="token operator">=</span> <span class="token function">validate</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valid2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valid<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validate<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--------33-------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源文件：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token constant">USER_LOGIN</span><span class="token punctuation">,</span>
    <span class="token constant">USER_REGISTER</span><span class="token punctuation">,</span>
    <span class="token constant">USER_INFO</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routerConst&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
    SuccessModel<span class="token punctuation">,</span>
    ErrorModel
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../model/ResultModel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> exc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../db/mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Ajv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ajv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ajv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ajv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> userSchema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../validator/userValidator&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">userRouterHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_LOGIN</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理登录</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuccessModel</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_REGISTER</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// let sql = \`insert into user (username, password) values (&#39;lnj&#39;, 123456)\`;</span>
        <span class="token comment">// exc(sql).then((results)=&gt;{</span>
        <span class="token comment">//     console.log(results);</span>
        <span class="token comment">// }).catch((err)=&gt;{</span>
        <span class="token comment">//     console.log(err);</span>
        <span class="token comment">// });</span>
        <span class="token keyword">let</span> valid <span class="token operator">=</span> ajv<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>userSchema<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>valid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ajv<span class="token punctuation">.</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 处理注册</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ErrorModel</span><span class="token punctuation">(</span><span class="token string">&#39;注册失败&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token constant">USER_INFO</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 处理获取用户信息</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuccessModel</span><span class="token punctuation">(</span><span class="token string">&#39;获取用户信息成功&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> userRouterHandle<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","011前后端数据校验.html.vue"]]);export{r as default};
