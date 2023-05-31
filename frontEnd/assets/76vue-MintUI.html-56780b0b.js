import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_76-vue-mintui" tabindex="-1"><a class="header-anchor" href="#_76-vue-mintui" aria-hidden="true">#</a> 76 vue-MintUI</h1><p>坑太多，不推荐使用！！！</p><h2 id="_01-重点" tabindex="-1"><a class="header-anchor" href="#_01-重点" aria-hidden="true">#</a> 01 重点</h2><p>使用方式与篇74 vue-ElementUI一样，优化也一样。</p><p>**但有几点不同需注意：**具体请看下面两个注意点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import MintUI from &#39;mint-ui&#39;</span>
<span class="token comment">// import &#39;mint-ui/lib/style.css&#39;</span>
<span class="token comment">// Vue.use(MintUI)</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mint-ui&#39;</span>
<span class="token comment">// 注意点: 在MintUI中哪怕是按需引入也必须导入CSS文件</span>
<span class="token keyword">import</span> <span class="token string">&#39;mint-ui/lib/style.css&#39;</span>
<span class="token comment">// 注意点: MintUI和ElementUI的第一个不同, 就是在MintUI中需要通过Vue.component来告诉Vue我们需要使用哪个组件</span>
<span class="token comment">// Vue.use(Button)</span>
<span class="token comment">// Vue.use(Switch)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Switch<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Switch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-无关说明" tabindex="-1"><a class="header-anchor" href="#_02-无关说明" aria-hidden="true">#</a> 02 无关说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是MintUI?
MintUI是饿了么前端团队推出的一款基于Vue的移动端UI框架
大白话: 和Bootstrap一样对原生的HTML标签进行了封装, 进行了美化, 让我们能够专注于业务逻辑而不是UI界面

2.MintUI使用
http://mint-ui.github.io/#!/zh-cn
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[t];function l(o,p){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","76vue-MintUI.html.vue"]]);export{d as default};
