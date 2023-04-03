import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const o={},p=t(`<h1 id="_03-package-lock" tabindex="-1"><a class="header-anchor" href="#_03-package-lock" aria-hidden="true">#</a> 03 package-lock</h1><p>此文件在<code>npm install</code>时生成**，这个文件自动生成，自行维护，了解就行。**</p><p>设有两个项目，在两个文件夹，A，B，如果A、B都用了相同的版本axios，那就没有必要从远程npm查找两次。直接在第一次安装时缓存一下。第二次安装时从缓存解压过来就行。</p><p>查找缓存之所以不会找错包，是因为用算法得到了某个包的唯一标识符，唯一标识符就放在<code>package-lock.json</code>中。</p><p>多人项目中·，不同的人用到的包版本可能不同，可能会造成一些问题，所以用<code>package-lock.json</code>确定下来一些版本，让大家用的都一样。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delete_note_edit&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 项目名</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 项目版本</span>
    <span class="token property">&quot;lockfileVersion&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">// lock文件版本</span>
    <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否启用require</span>
    <span class="token property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delete_note_edit&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 依赖</span>
          <span class="token property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.3&quot;</span> <span class="token comment">// 版本</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;axios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.2.4&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;node_modules/asynckit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 依赖的版本</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.4.0&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 该依赖的下载地址</span>
        <span class="token property">&quot;resolved&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://re/-/asynckit-0.4.0.tgz&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 唯一标识</span>
        <span class="token property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;node_modules/axios&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resolved&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.nos/-/axios-1.2.4.tgz&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha512-lIQuCfBJvL2uD8av/1FDJXj7n6c39w==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 记录当前模块的依赖，启用requires后也可以叫requires</span>
        <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;follow-redirects&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.15.0&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;form-data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;proxy-from-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.0&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;node_modules/combined-stream&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resolved&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.npmmirror.com/combined-stream/-/combined-stream-1.0.8.tgz&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delayed-stream&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.0.0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;= 0.8&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
     
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[p];function c(l,i){return s(),a("div",null,e)}const u=n(o,[["render",c],["__file","03package-lock.html.vue"]]);export{u as default};
