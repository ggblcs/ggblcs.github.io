import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_079-eggjs处理日志" tabindex="-1"><a class="header-anchor" href="#_079-eggjs处理日志" aria-hidden="true">#</a> 079 EggJs处理日志</h1><p><code>指南--&gt;核心功能--&gt;日志</code></p><h2 id="_1-eggjs日志分类" tabindex="-1"><a class="header-anchor" href="#_1-eggjs日志分类" aria-hidden="true">#</a> 1.EggJs日志分类</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">/*
    EggJS如何处理日志?
    https://eggjs.org/zh-cn/core/logger.html

    1.日志分类
    \${appInfo.name}-web.log - 应用相关日志，供应用开发者使用的日志。我们在绝大数情况下都在使用它
    egg-web.log             - 框架内核、插件日志
    common-error.log        - ctx.logger.error输出的 错误日志
    egg-agent.log           - 进程日志，框架和使用到 agent 进程执行任务的插件会打印一些日志到这里
    egg-schedule.log        - 定时任务的日志
    */</span>
    <span class="token comment">/*
    2.日志级别
    NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别
    3.如何输出日志
    ctx.logger.xxx
    4.如何切割日志
    默认自动按照天切割, 也可以手动配置按照大小,按照小时切割
    * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-eggjs输出日志" tabindex="-1"><a class="header-anchor" href="#_2-eggjs输出日志" aria-hidden="true">#</a> 2.EggJs输出日志</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token comment">/*
        注意点:
        默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到文件中。
        如果需要输出debug日志, 那么就必须修改config.default.js配置文件
        logger : {
        	level: &#39;DEBUG&#39;,
    	}
        https://eggjs.org/zh-cn/core/logger.html#%E6%97%A5%E5%BF%97%E7%BA%A7%E5%88%AB
        * */</span>
        <span class="token comment">/*
        EggJS中如何切割日志?
        在EggJS中不用我们手动的去切割, 默认情况下EggJS就会自动帮我们切割
        默认情况下每一天就是一个新的日志文件
        例如: common-error.log
              common-error.log.2022-12-12
        * */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;我是debug日志&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;我是info日志&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;我是warn日志&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;我是error日志&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[l];function t(o,d){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","079EggJs处理日志.html.vue"]]);export{r as default};
