import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_076-eggjs处理网络数据" tabindex="-1"><a class="header-anchor" href="#_076-eggjs处理网络数据" aria-hidden="true">#</a> 076 EggJs处理网络数据</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">/*
    EggJS处理数据
    在EggJS中无论是处理数据库中的数据还是处理网络数据, 都是在Service中处理的
    * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/app-&gt;service/-&gt;xxx.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Service <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span><span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">findNews</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 在Service定义的方法中处理数据库和网络的数据即可</span>
        <span class="token comment">/*
        和控制器一样, Service类的this上也挂载了很多属性
        this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
        this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
        this.config：应用运行时的配置项。
        this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置
        * */</span>
        <span class="token comment">/*
        -----------------------------------------
        Service的上下文属性上还挂载了一些其它的属性
        this.ctx.curl 发起网络调用。
        this.ctx.service.otherService 调用其他 Service。service是service目录。
        this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。
        * */</span>
        <span class="token comment">// 发送get不带参数的请求</span>
        <span class="token comment">// let response = await this.ctx.curl(&#39;http://127.0.0.1:3000/getUser&#39;);</span>
        <span class="token comment">// 发送get带参数的请求</span>
        <span class="token comment">// let response = await this.ctx.curl(&#39;http://127.0.0.1:3000/getUser2?name=it666&amp;age=66&#39;);</span>
        <span class="token comment">// 发送post不带参数的请求</span>
        <span class="token comment">// let response = await this.ctx.curl(&#39;http://127.0.0.1:3000/getNews&#39;, {</span>
        <span class="token comment">//     method: &#39;post&#39;</span>
        <span class="token comment">// });</span>
        <span class="token comment">// 发送post带参数的请求</span>
        <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">curl</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:3000/getNews2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;HomeService&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HomeService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中途，获取的数据成了buffer形式，本应该显示在浏览器的数据变为了下载。所以使用<code>let data = JSON.parse(response.data);</code>将buffer转为了字符串。</p>`,5),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","076EggJs处理网络数据.html.vue"]]);export{d as default};
