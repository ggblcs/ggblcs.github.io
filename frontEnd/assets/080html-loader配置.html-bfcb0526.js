import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const l={},t=e(`<h1 id="_80-html-loader配置" tabindex="-1"><a class="header-anchor" href="#_80-html-loader配置" aria-hidden="true">#</a> 80 html-loader配置</h1><p>配置原因如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.初始化HTML中的代码
2.利用rem+视口释放的方式来适配移动端
注意点: 如果在HTML文件中用到了字符串模板\`&lt;p&gt;&lt;/p&gt;\`, 字符串模板中用到了变量, 那么html-plugin是无法处理的, 所以会报错
        如果想解决这个问题, 那么我们需要再借助一个loader, html-loader
3.借助postcss-pxtorem实现自动将px转换成rem-----见篇81
4.借助webpack实现CSS3/ES678语法的兼容（不用管，cli已实现）
5.借助fastclick解决移动端100~300ms的点击事件延迟问题---见篇83
6.初始化默认的全局样式
注意点: 在移动端开发中, 一般情况下我们不需要让字体大小随着屏幕尺寸的变化而变化
        由于我们是通过视口缩放来适配移动端的, 所以我们不能直接设置字体大小, 否则字体大小就会随着屏幕尺寸的变化而变化
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 安装</h2><p>方法：百度搜索npm官网----&gt;官网搜索html-loader查看下载方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装html-loader</span>
cnpm <span class="token function">install</span> <span class="token parameter variable">-D</span> html-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：报错</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>getOptions is not a <span class="token keyword">function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决：安装低版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> <span class="token parameter variable">-D</span> html-loader@0.5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_02-配置" tabindex="-1"><a class="header-anchor" href="#_02-配置" aria-hidden="true">#</a> 02 配置</h2><p>新建vue.config.js进行配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 部署应用包的基本URL, 不设置可能会出现打包后项目找不到资源问题 */</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[t];function i(r,o){return s(),a("div",null,p)}const d=n(l,[["render",i],["__file","080html-loader配置.html.vue"]]);export{d as default};
