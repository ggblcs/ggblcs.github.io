import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_01-体验" tabindex="-1"><a class="header-anchor" href="#_01-体验" aria-hidden="true">#</a> 01 体验</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>

<span class="token comment">// 创建场景</span>

<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建相机</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">// 设置相机位置</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 添加物体</span>
<span class="token comment">// 创建几何体</span>
<span class="token keyword">const</span> cubeGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建材质</span>
<span class="token keyword">const</span> cubeMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xffff00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 根据几何体和材质创建物体</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>cubeGeometry<span class="token punctuation">,</span> cubeMaterial<span class="token punctuation">)</span>
<span class="token comment">// 将几何体添加到场景</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span>

<span class="token comment">// 初始化渲染器，</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置渲染的尺寸、大小</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
<span class="token comment">// console.log(renderer);</span>
<span class="token comment">// 将webgl渲染的canvas内容添加到body</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
<span class="token comment">// 使用渲染器，通过相机将场景渲染进来</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","01体验.html.vue"]]);export{r as default};
