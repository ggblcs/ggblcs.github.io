import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_19-html-plugin" tabindex="-1"><a class="header-anchor" href="#_19-html-plugin" aria-hidden="true">#</a> 19 html-plugin</h1><blockquote><p>在dist/bundle目录自动生成index.html文件并且自动引入入口文件bundle.js</p></blockquote><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2 使用</h2><p>配置<code>webpack.config.js</code></p><p>在不传递任何参数情况下，</p><ol><li>插件会新生成空的<code>index.html</code>文件。</li><li>并且自动引入所有打包的js。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//引入</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// plugins: 告诉webpack需要新增一些什么样的功能</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3 配置</h2><p>如果原<code>index.html</code>文件里写的有内容，不想新生成一个空的html文件，可以配置template，此时会基于原文件生成新的文件，并且还会自动引入<code>bundle.js</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 下面的配置位于插件文档</span>
        <span class="token comment">// 指定打包的模板, 如果不指定会自动生成一个空的</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 告诉htmlplugin打包之后的html文件需要压缩</span>
            <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-说明与原文" tabindex="-1"><a class="header-anchor" href="#_4-说明与原文" aria-hidden="true">#</a> 4 说明与原文</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是插件(plugin)?
plugin 用于扩展webpack的功能
当然loader也是变相的扩展了webpack ，但是它只专注于转化文件这一个领域。
而plugin的功能更加的丰富，而不仅局限于资源的加载。
--&gt;</span>
<span class="token comment">&lt;!--
2.什么是HtmlWebpackPlugin?
HtmlWebpackPlugin会在打包结束之后自动创建一个index.html, 并将打包好的JS自动引入到这个文件中

3.HtmlWebpackPlugin使用
https://www.webpackjs.com/plugins/html-webpack-plugin/
3.1安装HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin
3.2配置HtmlWebpackPlugin
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
plugins: [new HtmlWebpackPlugin()]

4.HtmlWebpackPlugin高级使用
https://github.com/jantimon/html-webpack-plugin#configuration
默认情况下HtmlWebpackPlugin生成的html文件是一个空的文件,
如果想指定生成文件中的内容可以通过配置模板的方式来实现
 plugins: [new HtmlWebpackPlugin({
        template: &quot;index.html&quot;
    })]

默认情况下生成html文件并没有压缩,
如果想让html文件压缩可以设置
new HtmlWebpackPlugin({
    template: &quot;index.html&quot;,
    minify: {
        collapseWhitespace: true
    }
})]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function c(p,d){return s(),a("div",null,t)}const o=n(i,[["render",c],["__file","19html-plugin.html.vue"]]);export{o as default};
