import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_107-预渲染适配移动端问题" tabindex="-1"><a class="header-anchor" href="#_107-预渲染适配移动端问题" aria-hidden="true">#</a> 107 预渲染适配移动端问题</h1><p>详见课时182，使用正则匹配标签并换成空串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 以下代码是安装了预渲染的插件之后自动添加的</span>
<span class="token literal-property property">pluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">prerenderSpa</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">registry</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token literal-property property">renderRoutes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/recommend&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/singer&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/rank&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/search&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/account&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;/detail&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useRenderEvent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onlyProduction</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">postProcess</span><span class="token operator">:</span> <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 预渲染内容写入之前的额外操作</span>
      <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;meta name=&quot;viewport&quot;.*user-scalable=no&quot;&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span>
      <span class="token keyword">let</span> res <span class="token operator">=</span> route<span class="token punctuation">.</span>html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
      route<span class="token punctuation">.</span>html <span class="token operator">=</span> route<span class="token punctuation">.</span>html<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

      <span class="token comment">// 1.根据字符串创建一个网页</span>
      <span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSDOM</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>html<span class="token punctuation">)</span>
      <span class="token comment">// 2.从创建好的网页中拿到document对象</span>
      <span class="token keyword">let</span> dom <span class="token operator">=</span> html<span class="token punctuation">.</span>window<span class="token punctuation">.</span>document
      <span class="token comment">// 3.找到对应的元素, 删除对应的元素</span>
      <span class="token keyword">let</span> loadingEle <span class="token operator">=</span> dom<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.container&#39;</span><span class="token punctuation">)</span>
      dom<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>loadingEle<span class="token punctuation">)</span>

      route<span class="token punctuation">.</span>html <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> route
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","107预渲染适配移动端问题.html.vue"]]);export{u as default};
