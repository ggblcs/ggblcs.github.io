import{_ as e,M as t,p as c,q as p,R as o,t as s,N as i,a1 as n}from"./framework-96b046e1.js";const l={},d=n(`<h1 id="_03-样式穿透" tabindex="-1"><a class="header-anchor" href="#_03-样式穿透" aria-hidden="true">#</a> 03 样式穿透</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">外层容器 &gt;&gt;&gt; 组件</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sass和less</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">外层容器 /deep/ 组件</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token selector">外层容器 ::v-deep 组件</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>带括号？？？？</p>`,5),u=n(`<p>一个vue页面，里面有组件，组件有唯一标识 <code>data=&quot;xxx&quot;</code>，外部页面的css属性上也有唯一标识 <code>.box .smallbox[data=&quot;npcsjke&quot;] { }</code> ，这就导致 怎么都选不中组件内的 东西的样式，除非把页面中的scope属性给去掉，这样公共样式属性就不带唯一标识了。但不推荐。</p><p>样式穿透就是，去掉深层的css属性的唯一标识，样式穿透写在哪，唯一标识就会出现在哪，不写就出现在最后.<code>.box[data=&quot;npcsjke&quot;] .smallbox { }</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 亲测可用示例 */</span>
<span class="token selector">.notice :deep(.uni-noticebar)</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 702rpx<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 56rpx<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">:deep(.selected-area&gt;span)</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function r(v,m){const a=t("inner-selector");return c(),p("div",null,[d,o("p",null,[s("[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep("),i(a),s(") instead.")]),u])}const b=e(l,[["render",r],["__file","03样式穿透.html.vue"]]);export{b as default};
