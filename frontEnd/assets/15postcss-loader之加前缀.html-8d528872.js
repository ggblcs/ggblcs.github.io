import{_ as s,p as n,q as e,a1 as i}from"./framework-96b046e1.js";const a={},t=i(`<h1 id="_15-postcss-loader之加前缀" tabindex="-1"><a class="header-anchor" href="#_15-postcss-loader之加前缀" aria-hidden="true">#</a> 15 postcss-loader之加前缀</h1><blockquote><p>遇到20/100px不能转化为0.2px是正常的（Less4.0版本后和Sass中的运算必须加括号）</p></blockquote><p>postcss是一个工具，里面有很多插件可供使用（也需要额外安装）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D postcss-loader

# 自动补全前缀，适配浏览器的插件
npm i -D autoprefixer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完在<code>postcss.config.js</code>中配置autoprefixer</p><h2 id="_01-postcss的介绍" tabindex="-1"><a class="header-anchor" href="#_01-postcss的介绍" aria-hidden="true">#</a> 01 postcss的介绍</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是PostCSS?
https://www.postcss.com.cn/
PostCSS和sass/less不同, 它不是CSS预处理器
PostCSS是一款使用插件去转换CSS的工具，
PostCSS有许多非常好用的插件
例如
autoprefixer(自动补全浏览器前缀)
postcss-pxtorem(自动把px代为转换成rem)
... ...
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-安装插件" tabindex="-1"><a class="header-anchor" href="#_02-安装插件" aria-hidden="true">#</a> 02 安装插件</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
2.使用PostCSS自动补全浏览器前缀
2.1安装postcss-loader
npm i -D postcss-loader
2.2安装需要的插件（自动补充浏览器前缀）
npm i -D autoprefixer
2.3配置postcss-loader
在[css-loader or less-loader or sass-loader]之前添加postcss-loader
 * 务必把loader: &quot;postcss-loader&quot;,添加到所有 有关cssloader 的最后（添加到最后的会被先处理）
2.4创建postcss-loader配置文件
postcss.config.js
https://github.com/browserslist/browserslist#queries
2.5在配置文件postcss.config.js中配置autoprefixer
module.exports = {
    plugins: {
        &quot;autoprefixer&quot;: {
            &quot;overrideBrowserslist&quot;: [
                // &quot;ie &gt;= 8&quot;, // 兼容IE7以上浏览器
                // &quot;Firefox &gt;= 3.5&quot;, // 兼容火狐版本号大于3.5浏览器
                // &quot;chrome  &gt;= 35&quot;, // 兼容谷歌版本号大于35浏览器,
                // &quot;opera &gt;= 11.5&quot; // 兼容欧朋版本号大于11.5浏览器,
                &quot;chrome  &gt;= 36&quot;, // 如果需要适配的浏览器完全兼容则不会添加前缀
            ]
        }
    }
};
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-配置postcss-config-js" tabindex="-1"><a class="header-anchor" href="#_03-配置postcss-config-js" aria-hidden="true">#</a> 03 配置postcss.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;overrideBrowserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// &quot;ie &gt;= 8&quot;, // 兼容IE7以上浏览器</span>
                <span class="token comment">// &quot;Firefox &gt;= 3.5&quot;, // 兼容火狐版本号大于3.5浏览器</span>
                <span class="token comment">// &quot;chrome  &gt;= 35&quot;, // 兼容谷歌版本号大于35浏览器,</span>
                <span class="token comment">// &quot;opera &gt;= 11.5&quot; // 兼容欧朋版本号大于11.5浏览器,</span>
                <span class="token string">&quot;chrome  &gt;= 36&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function o(d,r){return n(),e("div",null,l)}const u=s(a,[["render",o],["__file","15postcss-loader之加前缀.html.vue"]]);export{u as default};
