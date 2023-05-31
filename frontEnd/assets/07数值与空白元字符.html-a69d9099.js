import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_07-数值与空白元字符" tabindex="-1"><a class="header-anchor" href="#_07-数值与空白元字符" aria-hidden="true">#</a> 07 数值与空白元字符</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
 张三：010-1234567，李四：020-2222222
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{3}-\\d{7,8}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// \\d表示匹配数字，大写表示反向，\\D表示除了数字</span>
<span class="token comment">// \\s表示匹配空白，空白包括空格 ，换行符\\n</span>
<span class="token comment">// \\S表示除了空白</span>
<span class="token comment">// \\w表示匹配字母，数字，下划线（不包括中划线）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[c];function l(p,o){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","07数值与空白元字符.html.vue"]]);export{d as default};
