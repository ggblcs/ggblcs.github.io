import{_ as a,p as n,q as s,a1 as e}from"./framework-96b046e1.js";const c={},t=e(`<h1 id="_27-vscode代码替提示canvas" tabindex="-1"><a class="header-anchor" href="#_27-vscode代码替提示canvas" aria-hidden="true">#</a> 27 vscode代码替提示canvas</h1><p>vscode设置canvas的代码提示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>网上提供的方法：在获取context之前加上
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>HTMLCanvasElement<span class="token punctuation">}</span></span> */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>问题：context仍然无法提示rotate等等方法
解决方法：

如果是2d上下文，则在获取上下文的前一句加上
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>CanvasRenderingContext2D<span class="token punctuation">}</span></span> */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>如果是3d上下文，则加上
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>WebGLRenderingContext<span class="token punctuation">}</span></span> */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[t];function d(o,l){return n(),s("div",null,i)}const r=a(c,[["render",d],["__file","27vscode代码替提示canvas.html.vue"]]);export{r as default};
