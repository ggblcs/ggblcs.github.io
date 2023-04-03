import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_24-配置watch" tabindex="-1"><a class="header-anchor" href="#_24-配置watch" aria-hidden="true">#</a> 24 配置watch</h1><p>虽然好用，<strong>一般不用</strong>，用什么？见篇25 dev-server</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是watch?
webpack 可以监听打包文件变化，当它们修改后会重新编译打包
那么如何监听打包文件变化呢?  使用 watch

2.watch相关配置watchOptions
poll: 1000 // 每隔多少时间检查一次变动
aggregateTimeout:  // 防抖, 和函数防抖一样, 改变过程中不重新打包, 只有改变完成指定时间后才打包
ignored: 排除一些巨大的文件夹, 不需要监控的文件夹, 例如 node_modules
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// 防抖, 和函数防抖一样, 改变过程中不重新打包, 只有改变完成指定时间后才打包</span>
        <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 每隔多少时间检查一次变动ms</span>
        <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span> <span class="token comment">// 排除一些巨大的文件夹, 不需要监控的文件夹</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[l];function i(o,r){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","24配置watch.html.vue"]]);export{d as default};
