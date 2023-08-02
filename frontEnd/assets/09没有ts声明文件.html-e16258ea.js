import{_ as s,p as e,q as n,a1 as a}from"./framework-96b046e1.js";const t={},c=a(`<h1 id="_09-没有ts声明文件" tabindex="-1"><a class="header-anchor" href="#_09-没有ts声明文件" aria-hidden="true">#</a> 09 没有ts声明文件</h1><p>有些引入的第三方文件，只有js，没有ts声明。引入时就会报错。</p><p>解决：在src目录下新建文件<code>shims-vue.d.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>declare module <span class="token string">&#39;vue3-scale-box&#39;</span><span class="token punctuation">;</span> <span class="token comment">// node_modules 里的</span>
declare module <span class="token string">&#39;*.js&#39;</span><span class="token punctuation">;</span> <span class="token comment">// src目录下的所有js</span>

<span class="token comment">/* declare module &#39;*.js&#39; {
    import TGApp from &#39;./components/streaming/TGApp.module.min.js&#39;
    export default TGApp
}
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[c];function d(l,o){return e(),n("div",null,i)}const p=s(t,[["render",d],["__file","09没有ts声明文件.html.vue"]]);export{p as default};
