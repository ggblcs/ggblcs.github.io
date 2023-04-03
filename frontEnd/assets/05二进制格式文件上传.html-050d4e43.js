import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_05-二进制格式文件上传" tabindex="-1"><a class="header-anchor" href="#_05-二进制格式文件上传" aria-hidden="true">#</a> 05 二进制格式文件上传</h1><p>最简单的，没有花里胡哨的东西</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/octet-stream</span></span>
<span class="token header"><span class="token header-name keyword">x-ext</span><span class="token punctuation">:</span> <span class="token header-value">.jpg # 文件后缀，因为二进制不知道你是啥文件</span></span>

&lt; ./img/001-1.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">upload666</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> onProgress<span class="token punctuation">,</span> onFinish</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText <span class="token comment">// 返回的内容</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">onFinish</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 每上传一点就会触发一次</span>
        <span class="token keyword">const</span> percent <span class="token operator">=</span> e<span class="token punctuation">.</span>loaded <span class="token operator">/</span> e<span class="token punctuation">.</span>total <span class="token operator">*</span> <span class="token number">100</span>
        <span class="token function">onProgress</span><span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://xxxxx/xxx&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// const form = new FormData() // multipart/form-data</span>
    <span class="token comment">// form.append(&quot;file&quot;, file, &#39;aaa.jpg&#39;) // 三个字段，name value filename(不传默认取本地的名字)</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// xhr.setReauestHeader(&quot;x-ext&quot;, file.name.split(&quot;.&quot;).pop()) // 后缀名，看情况</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token comment">// 请求体，直接发文件</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","05二进制格式文件上传.html.vue"]]);export{r as default};
