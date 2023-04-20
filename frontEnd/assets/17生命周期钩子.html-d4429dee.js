import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},t=a(`<h1 id="_17-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_17-生命周期钩子" aria-hidden="true">#</a> 17 生命周期钩子</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

beforeCreate <span class="token comment">// 拿不到data methods（实例初始化完成，date() computed()等选项xx前调用）</span>

created <span class="token comment">// vue实例已创建完毕，能拿到data methods，DOM还未生成，拿不到dom</span>

beforeMounted <span class="token comment">// 虚拟DOM已经存在</span>

Mounted <span class="token comment">// 真实DOM已经存在</span>

<span class="token comment">// 数据改变</span>
beforeUpdate <span class="token comment">// DOM更新前</span>

update <span class="token comment">// 真实DOM已更新</span>

<span class="token comment">// 销毁前，所有功能还能用</span>
beforeUnmount（之前是beforeDestroy）

<span class="token comment">// 销毁后</span>
unmounted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function d(l,o){return s(),e("div",null,c)}const r=n(i,[["render",d],["__file","17生命周期钩子.html.vue"]]);export{r as default};
