import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_109-项目中使用vuex" tabindex="-1"><a class="header-anchor" href="#_109-项目中使用vuex" aria-hidden="true">#</a> 109 项目中使用vuex</h1><blockquote><p>目的：便于快捷复制</p></blockquote><p>写小程序时创建</p><p>store目录下创建<code>index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">/*import state from &#39;./state&#39;
import mutations from &#39;./mutations&#39;
import actions from &#39;./actions&#39;
import getters from &#39;./getters&#39;*/</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token comment">/* state: state,
    mutations: mutations,
    actions: actions,
    getters: getters*/</span>
    <span class="token comment">// state: 用于保存全局共享的数据</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isFullScreen</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// mutations: 用于保存修改全局共享的数据的方法</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">changeFullScreen</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>isFullScreen <span class="token operator">=</span> flag
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// actions: 用于保存触发mutations中保存的方法的方法</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">setFullScreen</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeFullScreen&#39;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// getters: 专门用于保存获取全局共享的数据的方法</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">isFullScreen</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">.</span>isFullScreen
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    store<span class="token punctuation">,</span>
    <span class="token operator">...</span>App
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用文件中 直接调用即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string">&#39;currentSong&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;isPlaying&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;currentIndex&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;curTime&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;modeType&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;songs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;favoriteList&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;historyList&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>      
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string">&#39;setCurrentIndex&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;setFavoriteList&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;setHistorySong&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;setHistoryList&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","109项目中使用vuex.html.vue"]]);export{r as default};
