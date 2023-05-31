import{_ as n,p as s,q as e,a1 as i}from"./framework-96b046e1.js";const a={},l=i(`<h1 id="_01-模块系统" tabindex="-1"><a class="header-anchor" href="#_01-模块系统" aria-hidden="true">#</a> 01 模块系统</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
TS中的模块几乎和ES6和Node中的模块一致
从零玩转NodeJS核心+原理⑩
27-NodeJS自定义模块(掌握)
28-Node模块导出数据几种方式(掌握)
29-exports和module.exports区别(掌握)
30-NodeJS-Require注意点(掌握)

从零玩转Webpack4+实现原理⑾
85-ES6-模块化上(掌握)
86-ES6-模块化中(掌握)
87-ES6-模块化下(掌握)
* */</span>
<span class="token comment">/*
1.ES6模块
1.1分开导入导出
export xxx;
import {xxx} from &quot;path&quot;;

1.2一次性导入导出
export {xxx, yyy, zzz};
import {xxx, yyy, zzz} from &quot;path&quot;;

1.3默认导入导出
export default xxx;
import xxx from &quot;path&quot;;
*/</span>
<span class="token comment">/*
2.Node模块
1.1通过exports.xxx = xxx导出
通过const xxx = require(&quot;path&quot;);导入
通过const {xx, xx} = require(&quot;path&quot;);导入

1.2通过module.exports.xxx = xxx导出
通过const xxx = require(&quot;path&quot;);导入
通过const {xx, xx} = require(&quot;path&quot;);导入
* */</span>
<span class="token comment">/*
ES6的模块和Node的模块是不兼容的, 所以TS为了兼容两者就推出了
export = xxx;
import xxx = require(&#39;path&#39;);
* */</span>
<span class="token keyword">import</span> obj <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./55/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">34</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function t(c,o){return s(),e("div",null,d)}const u=n(a,[["render",t],["__file","01模块系统.html.vue"]]);export{u as default};
