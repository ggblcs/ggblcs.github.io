import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_027-可选属性与方法" tabindex="-1"><a class="header-anchor" href="#_027-可选属性与方法" aria-hidden="true">#</a> 027 可选属性与方法</h1><p>加？表示可选属性，表示可有可无。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">FullName</span><span class="token punctuation">{</span>
    firstName<span class="token operator">:</span><span class="token builtin">string</span>
    lastName<span class="token operator">:</span><span class="token builtin">string</span>
    middleName<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span>
    fun<span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">// 需求: 如果传递了middleName就输出完整名称, 如果没有传递middleName, 那么就输出firstName和lastName</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> middleName<span class="token punctuation">}</span><span class="token operator">:</span>FullName<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(\`我的姓名是:\${firstName}_\${lastName}\`);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>middleName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的姓名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>middleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的姓名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,</span>
<span class="token comment">// 赋予的值就必须和接口限定的一模一样才可以, 多一个或者少一个都不行</span>

<span class="token comment">// say({firstName:&#39;Jonathan&#39;});</span>
<span class="token comment">// say({firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;, middleName:&quot;666&quot;});</span>

<span class="token comment">// 注意点: 但是在企业开发中可以多一个也可能少一个</span>
<span class="token comment">// 少一个或多个怎么做? 可选属性[可选属性的符号表示就是?]</span>
<span class="token comment">// say({firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;, middleName:&quot;666&quot;});</span>
<span class="token comment">// say({firstName:&#39;Jonathan&#39;, lastName:&#39;Lee&#39;});</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果接口中定义了重载方法，那么所有重载方法签名必须同时为必选的或者可选的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 正确</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A1</span></span> <span class="token punctuation">{</span>
    <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">f1</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

    f2<span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    f2<span class="token operator">?</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 错误</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A2</span></span><span class="token punctuation">{</span>
    <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">// f1?(x:number):number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","027可选属性与方法.html.vue"]]);export{r as default};
