import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_75-vue-elementui优化" tabindex="-1"><a class="header-anchor" href="#_75-vue-elementui优化" aria-hidden="true">#</a> 75 vue-ElementUI优化</h1><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.elementUI优化
默认情况下无论我们有没有使用到某个组件, 在打包的时候都会将elementUI中所有的组件打包到我们的项目中
这样就导致了我们的项目体积比较大, 用户访问比较慢

2.如何优化
为了解决这个问题, elementUI推出了按需导入, 按需打包. 也就是只会将我们用到的组件打包了我们的项目中
没有用到的组件不会被打包
https://element.eleme.cn/#/zh-CN/component/quickstart
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-安装" tabindex="-1"><a class="header-anchor" href="#_02-安装" aria-hidden="true">#</a> 02 安装</h2><p>安装 babel-plugin-component：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-component <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_03-配置" tabindex="-1"><a class="header-anchor" href="#_03-配置" aria-hidden="true">#</a> 03 配置</h2><p>然后，将 .babelrc 修改为：</p><p style="color:red;">坑:&quot;es2015&quot;不要写，而是修改为这个文件之前的那个，否则报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// presets: [</span>
  <span class="token comment">//   [&#39;@vue/cli-plugin-babel/preset&#39;, { &#39;modules&#39;: false }]</span>
  <span class="token comment">// ],</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;styleLibraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;theme-chalk&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-按需引入" tabindex="-1"><a class="header-anchor" href="#_04-按需引入" aria-hidden="true">#</a> 04 按需引入</h2><p>在main.js中用什么组件引入什么组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入elementUI和elementUI的CSS文件</span>
<span class="token comment">// import ElementUI from &#39;element-ui&#39;</span>
<span class="token comment">// import &#39;element-ui/lib/theme-chalk/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>

<span class="token comment">// 2.告诉Vue, 我们需要在项目中使用elementUI</span>
<span class="token comment">// Vue.use(ElementUI)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Row<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Switch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","75vue-ElementUI优化.html.vue"]]);export{r as default};
