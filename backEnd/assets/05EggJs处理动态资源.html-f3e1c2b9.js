import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_05-eggjs处理动态资源" tabindex="-1"><a class="header-anchor" href="#_05-eggjs处理动态资源" aria-hidden="true">#</a> 05 EggJs处理动态资源</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
    1.EggJS如何处理动态资源?
    1.1什么是插件?
    EggJS中的插件就是特殊的中间件
    用来处理那些和请求无关独立的业务逻辑
    https://eggjs.org/zh-cn/basics/plugin.html

    1.2插件的使用
    npm i egg-view-ejs --save
    在config目录下新建plugin.js
    exports.ejs={ enable:true, package:&#39;egg-view-ejs&#39;, };
    在config.default.js中新增如下配置
    view:{mapping:{&#39;.html&#39;:&#39;ejs&#39;}}
    在app目录中新建view目录, 将动态网页放到这个目录中
    在控制器中通过上下文render方法渲染
    * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;知播渔&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),c=[l];function t(d,r){return s(),e("div",null,c)}const o=n(i,[["render",t],["__file","05EggJs处理动态资源.html.vue"]]);export{o as default};
