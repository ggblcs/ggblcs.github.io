import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_17-css-loader模块化" tabindex="-1"><a class="header-anchor" href="#_17-css-loader模块化" aria-hidden="true">#</a> 17 css-loader模块化</h1><p>让CSS类名样式只能在导入的模块用</p><p>实质：使用模块化后，类名会被改为凌乱的字符串，只有设置类名才能设置相应的样式。举例如下：</p><p>使用案例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> font <span class="token keyword">from</span> <span class="token string">&quot;../css/font.css&quot;</span><span class="token punctuation">;</span>
oHeader<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span>font<span class="token punctuation">.</span>fontt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//fontt是css中的类名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>开启模块化方法：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.默认情况下通过import &quot;./xxx.css&quot;导入的样式是全局样式
也就是只要被导入, 在其它文件中也可以使用
如果想要导入的CSS文件只在导入的文件中有效, 那么就需要开启CSS模块化
{
    loader: &quot;css-loader&quot;,
    options: {
        modules: true // 开启CSS模块化
    }
}
然后在导入的地方通过 import xxx from &quot;./xxx.css&quot;导入
然后在使用的地方通过 xxx.className方式使用即可
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[i];function l(c,p){return n(),a("div",null,o)}const d=s(t,[["render",l],["__file","17css-loader模块化.html.vue"]]);export{d as default};
