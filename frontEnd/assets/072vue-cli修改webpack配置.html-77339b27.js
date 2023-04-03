import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},c=e(`<h1 id="_72-vue-cli修改webpack配置" tabindex="-1"><a class="header-anchor" href="#_72-vue-cli修改webpack配置" aria-hidden="true">#</a> 72 vue-cli修改webpack配置</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.如何配置Vue-CLI创建项目的webpack配置?
默认情况下通过Vue-CLI创建的项目已经自动给我们配置好了webpack
但是有时候默认的配置可能不能满足我们的需求, 例如我们想修改输出目录名称, 想增加一些插件等
但是Vue-CLI创建的项目里又没有webpack配置文件, 那么我们应该如何修改或增加webpack配置呢?

我们可以通过新建vue.config.js的方式来修改配置
我们可以通过在vue.config.js中的configureWebpack属性来新增webpack配置
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建<code>vue.config.js</code>文件，配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// output: {</span>
  <span class="token comment">//   path: path.resolve(__dirname, &#39;bundle&#39;)</span>
  <span class="token comment">// }</span>
  <span class="token comment">/*
  Vue-CLI为了方便起见对webpack原有的属性进行了一层封装, 如果我们需要修改webpack的配置
  那么我们可以在项目中新建一个vue.config.js的文件, 然后去查询Vue-CLI的封装是否能够满足我们的需求
  如果可以满足我们的需求, 那么就使用Vue-CLI封装的属性来修改webpack的配置
  如果不可以满足我们的需求, 那么我们可以通过configureWebpack的属性来编写原生的webpack配置
  * */</span>
  <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">&#39;bundle&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 就可以在这个对象中编写原生的webpack配置</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">&#39;知播渔教育-www.it666.com&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[c];function t(l,o){return s(),a("div",null,i)}const u=n(p,[["render",t],["__file","072vue-cli修改webpack配置.html.vue"]]);export{u as default};
