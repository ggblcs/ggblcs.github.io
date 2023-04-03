import{_ as n,p as e,q as s,a1 as a}from"./framework-96b046e1.js";const l={},t=a(`<h1 id="_06-file-loader的其它配置" tabindex="-1"><a class="header-anchor" href="#_06-file-loader的其它配置" aria-hidden="true">#</a> 06 file-loader的其它配置</h1><p>配置<code>option</code>，例如：</p><ol><li>配置打包后的<strong>文件名</strong>，如果默认就是<code>&#39;[hash].[ext]&#39;</code>，默认会将文件名转对应的hash值。 <ol><li>如果想文件名不变就写为<code>name: &#39;[name].[ext]&#39;</code>。</li><li>其中<code>[name] [ext] [hash]</code>叫 placeholder（占位符），可以找placehoder，还有很多。</li></ol></li><li>配置打包后的<strong>输出路径</strong>，<code>outputPath: &quot;images&quot;</code>就会放在images文件夹中。 <ol><li>关于<code>images</code>文件夹的路径是基于<code>webpack</code>的配置<code>output:{path: path.resolve(__dirname, &quot;bundle&quot;)}</code>的。如果在<code>file-loader</code>中的<code>option</code>配置的<code>outputPath</code>是相对路径则会基于<code>bundle</code>发生相对变化。</li></ol></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
注意点（name）:
默认情况下fileloader生成的图片名就是文件内容的 MD5 哈希值
如何想打包后不修改图片的名称, 那么可以新增配置  name: &quot;[name].[ext]&quot;
其它命名规则详见: placeholders

注意点（outputPath）:
默认情况下fileloader会将生成的图片直接放到dist根目录下面
如果想打包之后放到指定目录下面, 那么可以新增配置 outputPath: &quot;images/&quot;

注意点（publicPath）:
如果需要将图片托管到其它服务器, 那么只需在打包之前配置 publicPath: &quot;托管服务器地址&quot;即可，这样require文件输出的文件路径会自动变为服务器地址。例如let img = require(&#39;./a.png&#39;), console.log(img)此时输出的就是服务器文件地址（值得注意的是只是改了文件路径，并没有上传文件的功能）。但是打包时依然会将图片拷贝到该拷贝的位置，例如拷贝到images文件夹中。
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 指定打包后文件名称</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 指定打包后文件存放目录</span>
                    <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images/&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 指定托管服务器地址(统一替换图片地址)</span>
                    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://www.it666.com/images/&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[t];function o(p,r){return e(),s("div",null,i)}const d=n(l,[["render",o],["__file","06file-loader的其它配置.html.vue"]]);export{d as default};
