import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const l={},t=e(`<h1 id="_13-less-loader" tabindex="-1"><a class="header-anchor" href="#_13-less-loader" aria-hidden="true">#</a> 13 Less-loader</h1><p>欲使用<code>less-loade</code>r需安装<code>less-loader</code>，此时运行会报错告诉找不到<code>less</code>模块，所以还要安装<code>less</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> less-loader --save-dev
cnpm <span class="token function">install</span> <span class="token function">less</span> --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-踩坑" tabindex="-1"><a class="header-anchor" href="#_01-踩坑" aria-hidden="true">#</a> 01 踩坑</h2><h3 id="_1-1-配置踩坑" tabindex="-1"><a class="header-anchor" href="#_1-1-配置踩坑" aria-hidden="true">#</a> 1.1 配置踩坑</h3><p><strong>时隔一年的今天2021-10-28，再次按官网配，不会报错</strong></p><p>在webpack官网配置这个Less会报错，必须复制<code>标题02 正确配置里的东西</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
   <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// compiles Less to CSS</span>
      <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-结果踩坑" tabindex="-1"><a class="header-anchor" href="#_1-2-结果踩坑" aria-hidden="true">#</a> 1.2 结果踩坑</h3><p>遇到20/100px不能转化为0.2px是正常的（Less4.0版本后和Sass中的运算必须加括号）</p><h2 id="_02-正确配置" tabindex="-1"><a class="header-anchor" href="#_02-正确配置" aria-hidden="true">#</a> 02 正确配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">strictMath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-介绍" tabindex="-1"><a class="header-anchor" href="#_03-介绍" aria-hidden="true">#</a> 03 介绍</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.less-loader
自动将less转换为CSS

2.less-loader使用:
2.0安装less
npm install --save-dev less
2.1安装less-loader
npm install --save-dev less-loader
2.2配置less-loader
{
    test: /\\.less$/,
    use: [{
        loader: &quot;style-loader&quot;
    }, {
        loader: &quot;css-loader&quot;
    }, {
        loader: &quot;less-loader&quot;
    }]
}

注意点:
因为loader是从右至左从下至上,所以必须先由less-loader处理往后才能交给其他loader处理
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[t];function p(o,r){return n(),a("div",null,i)}const d=s(l,[["render",p],["__file","13Less-loader.html.vue"]]);export{d as default};
