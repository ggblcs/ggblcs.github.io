import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_09-if语句" tabindex="-1"><a class="header-anchor" href="#_09-if语句" aria-hidden="true">#</a> 09 if语句</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> item <span class="token operator">==</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item <span class="token operator">+</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span> <span class="token comment"># b9</span>
    <span class="token keyword">elif</span> item <span class="token operator">==</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item <span class="token operator">+</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span> <span class="token comment"># ao</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment"># c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
==
!=
&lt;=
&gt;=

and
or
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查特定值是否包含在列表中（ in 和 not in）：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断列表是否为空</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> list1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;list1中有值&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> list2<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;list2中有值&#39;</span><span class="token punctuation">)</span> <span class="token comment"># list2中有值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function o(l,c){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","09if语句.html.vue"]]);export{r as default};
