import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_080-eggjs定时任务" tabindex="-1"><a class="header-anchor" href="#_080-eggjs定时任务" aria-hidden="true">#</a> 080 EggJs定时任务</h1><p>官网--&gt;指南--&gt;基础功能--&gt;定时任务</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.EggJS定时任务(计划任务)?
虽然我们通过框架开发的Web服务器是请求响应模型的，
但是仍然还会有许多场景需要执行一些定时任务，
例如：
定时进行文件切割、临时文件删除。
定时上报应用状态。(例如监控系统, 时时监控系统有没有问题, 典型例子MongoDB/Redis集群选举)
定时从远程接口更新本地缓存。
框架提供了一套机制来让定时任务的编写和维护更加优雅
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/app</code>下新建<code>schedule</code>目录。下面的内容例如方法名之类的都是不可更改的，可更改的部分只有需要执行的业务内容。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Subscription <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Subscription<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UpdateCache</span> <span class="token keyword">extends</span> <span class="token class-name">Subscription</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 schedule 属性来设置定时任务的执行间隔等配置</span>
    <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&#39;3s&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 间隔3秒执行一次</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token comment">//  all表示当前服务器上所有相同的Node进程都执行</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// subscribe 是真正定时任务执行时被运行的函数</span>
    <span class="token keyword">async</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">curl</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:3000/getMsg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UpdateCache<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","080EggJs定时任务.html.vue"]]);export{d as default};
