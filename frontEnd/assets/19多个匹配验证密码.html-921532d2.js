import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_19-多个匹配验证密码" tabindex="-1"><a class="header-anchor" href="#_19-多个匹配验证密码" aria-hidden="true">#</a> 19 多个匹配验证密码</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配多个正则</span>
<span class="token comment">// 我需要验证我的密码是否合法：5-8位，必须包含大小写字母和数字</span>

<span class="token keyword">let</span> regs <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z0-9]{5,8}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// 5-8位</span>
    <span class="token operator">/</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">,</span> <span class="token comment">// 必须有数字 </span>
    <span class="token operator">/</span><span class="token punctuation">[</span><span class="token constant">A</span><span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span><span class="token operator">/</span> <span class="token comment">// 必须有大写字母</span>
<span class="token punctuation">]</span>

<span class="token keyword">let</span> str_err1 <span class="token operator">=</span> <span class="token string">&quot;132456&quot;</span>
<span class="token keyword">let</span> str_err2 <span class="token operator">=</span> <span class="token string">&quot;aaaeee&quot;</span>
<span class="token keyword">let</span> str_ok <span class="token operator">=</span> <span class="token string">&quot;aaa12A&quot;</span>

<span class="token keyword">let</span> state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_err1<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_err2<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

state <span class="token operator">=</span> regs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str_ok<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","19多个匹配验证密码.html.vue"]]);export{r as default};
