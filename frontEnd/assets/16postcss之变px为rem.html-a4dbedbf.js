import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_16-postcss之变px为rem" tabindex="-1"><a class="header-anchor" href="#_16-postcss之变px为rem" aria-hidden="true">#</a> 16 postcss之变px为rem</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> postcss-loader

<span class="token function">npm</span> <span class="token function">install</span> postcss-pxtorem <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 安装</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
3.使用PostCSS自动将px转换成rem
https://www.npmjs.com/package/postcss-pxtorem

3.1安装postcss-pxtorem
npm install postcss-pxtorem -D
3.2在配置文件中配置postcss-pxtorem
&quot;postcss-pxtorem&quot;: {
            rootValue: 100, // 根元素字体大小
            // propList: [&#39;*&#39;] // 可以从px更改到rem的属性
            propList: [&quot;height&quot;]
        }

rootValue (Number) root 元素的字体大小。
unitPrecision (Number) 允许REM单位增长到的十进制数。
propList ( array ) 可以从px更改到rem的属性。
    值需要精确匹配。
    使用通配符 * 启用所有属性。 示例：[&#39;*&#39;]
    在单词的开头或者结尾使用 *。 ( [&#39;*position*&#39;] 将匹配 background-position-y )
    使用 与属性不匹配。! 示例：[&#39;*&#39;,&#39;letter-spacing&#39;]!
    将&quot;非&quot;前缀与其他前缀合并。 示例：[&#39;*&#39;,&#39;font*&#39;]!
selectorBlackList ( array ) 要忽略和离开的选择器。
    如果值为字符串，它将检查选择器是否包含字符串。
    [&#39;body&#39;] 将匹配 .body-class
    如果值为 regexp，它将检查选择器是否匹配正则表达式。
    [/^body$/] 将匹配 body，但不匹配 .body
replace (Boolean) 替代包含rems的规则，而不是添加回退。
mediaQuery (Boolean) 允许在媒体查询中转换 px。
minPixelValue (Number) 设置要替换的最小像素值。

突然感觉淡淡不忧伤了, 过去麻烦的事webpack都帮我们做完了
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-配置postcss-config-js" tabindex="-1"><a class="header-anchor" href="#_02-配置postcss-config-js" aria-hidden="true">#</a> 02 配置postcss.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token comment">// 自动加前缀</span>
        <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;overrideBrowserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;ie &gt;= 8&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 兼容IE7以上浏览器</span>
                <span class="token string">&quot;Firefox &gt;= 3.5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 兼容火狐版本号大于3.5浏览器</span>
                <span class="token string">&quot;chrome  &gt;= 35&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 兼容谷歌版本号大于35浏览器,</span>
                <span class="token string">&quot;opera &gt;= 11.5&quot;</span> <span class="token comment">// 兼容欧朋版本号大于11.5浏览器,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;postcss-pxtorem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 根元素字体大小(其实是除数例如20/100rem中的100)</span>
            <span class="token comment">// propList: [&#39;*&#39;] // 可以从px更改到rem的属性</span>
            <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[t];function o(l,r){return n(),a("div",null,p)}const d=s(i,[["render",o],["__file","16postcss之变px为rem.html.vue"]]);export{d as default};
