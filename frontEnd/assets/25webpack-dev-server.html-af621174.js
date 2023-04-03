import{_ as e,p as n,q as a,a1 as s}from"./framework-96b046e1.js";const i={},r=s(`<h1 id="_25-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#_25-webpack-dev-server" aria-hidden="true">#</a> 25 webpack-dev-server</h1><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是webpack-dev-server?
webpack-dev-server和watch一样可以监听文件变化
webpack-dev-server可以将我们打包好的程序运行在一个服务器环境下
webpack-dev-server可以解决企业开发中&quot;开发阶段&quot;的跨域问题

2.webpack-dev-server使用
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
2.1安装webpack-dev-server，不安装貌似程序会自己用npm慢速安装
https://www.npmjs.com/package/webpack-dev-server
npm install webpack-dev-server --save-dev

2.2配置webpack-dev-server
devServer: {
        contentBase: &quot;./bundle&quot;, // 告诉devServer把服务器运行在哪个目录下
        open: true,//更新后自动浏览器打开
        port: 9090
    }

2.3 运行命令需要修改，加上-dev-server
&quot;start&quot;: &quot;npx webpack-dev-server --config webpack.config.js&quot;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-运行报错" tabindex="-1"><a class="header-anchor" href="#_02-运行报错" aria-hidden="true">#</a> 02 运行报错</h2><blockquote><p>Error: Cannot find module &#39;webpack-cli/bin/config-yargs&#39;</p></blockquote><p>解决：</p><ol start="0"><li><p>原因webpack-cli与dev-server版本不兼容。</p></li><li><p>卸载当前的 webpack-cli <code>npm uninstall webpack-cli</code></p></li><li><p>安装 webpack-cli 3.* 版本 <code>npm install webpack-cli@3.3.12 --save-dev</code></p></li></ol><h2 id="_03-版本更新" tabindex="-1"><a class="header-anchor" href="#_03-版本更新" aria-hidden="true">#</a> 03 版本更新</h2><p>新版本4.0配置变化很大。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9090</span>
    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;static&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[r];function c(t,d){return n(),a("div",null,l)}const o=e(i,[["render",c],["__file","25webpack-dev-server.html.vue"]]);export{o as default};
