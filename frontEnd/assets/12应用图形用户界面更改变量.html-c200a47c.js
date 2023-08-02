import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_12-应用图形用户界面更改变量" tabindex="-1"><a class="header-anchor" href="#_12-应用图形用户界面更改变量" aria-hidden="true">#</a> 12 应用图形用户界面更改变量</h1><p><strong>经过验证不生效！！！！！</strong></p><p>如果自己写一套内容，让用户能够拖拽进图条改变参数以控制3D图形，就太麻烦了，有没有相应的库？</p><p>dat.gui</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -S dat.gui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dat <span class="token keyword">from</span> <span class="token string">&#39;dat.gui&#39;</span>

<span class="token keyword">const</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 修改物体的尺寸</span>
gui<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">step</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;移动X轴&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;值修改：&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">onFinishChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;修改完成&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 修改物体的颜色</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ffff00&quot;</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;让立方体运动起来&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">yoyo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>
gui<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;颜色被修改&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cube<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 设置按钮触发某个事件</span>
gui<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token string">&quot;fn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;立方体运动&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 设置选项框</span>
gui<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">,</span> <span class="token string">&quot;visible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;是否显示&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> folder <span class="token operator">=</span> gui<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&quot;设置立方体&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 添加文件夹</span>
folder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>material<span class="token punctuation">,</span> <span class="token string">&quot;wireframe&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","12应用图形用户界面更改变量.html.vue"]]);export{k as default};
