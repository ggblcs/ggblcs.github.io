import{_ as e,p as n,q as i,a1 as l}from"./framework-96b046e1.js";const s={},a=l(`<h1 id="_19-bundle-analyzer" tabindex="-1"><a class="header-anchor" href="#_19-bundle-analyzer" aria-hidden="true">#</a> 19 bundle-analyzer</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是webpack-bundle-analyzer?
webpack-bundle-analyzer是一个可视化的打包优化插件
webpack-bundle-analyzer会将打包的结果以图形化界面的方式展示给我们
从webpack-bundle-analyzer生成的图形化界面中我们可以很清楚的知道
模块之间的依赖关系
模块大小
模块有没有重复打包, 重复引用等
从而针对性的对我们的代码进行优化
--&gt;</span>
<span class="token comment">&lt;!--
new BundleAnalyzerPlugin({
  //  可以是\`server\`，\`static\`或\`disabled\`。
  //  在\`server\`模式下，分析器将启动HTTP服务器来显示软件包报告。
  //  在“静态”模式下，会生成带有报告的单个HTML文件。
  //  在\`disabled\`模式下，你可以使用这个插件来将\`generateStatsFile\`设置为\`true\`来生成Webpack Stats JSON文件。
  analyzerMode: &#39;server&#39;,
  //  将在“服务器”模式下使用的主机启动HTTP服务器。
  analyzerHost: &#39;127.0.0.1&#39;,
  //  将在“服务器”模式下使用的端口启动HTTP服务器。
  analyzerPort: 8888,
  //  路径捆绑，将在\`static\`模式下生成的报告文件。
  //  相对于捆绑输出目录。
  reportFilename: &#39;report.html&#39;,
  //  模块大小默认显示在报告中。
  //  应该是\`stat\`，\`parsed\`或者\`gzip\`中的一个。
  //  有关更多信息，请参见“定义”一节。
  defaultSizes: &#39;parsed&#39;,
  //  在默认浏览器中自动打开报告
  openAnalyzer: true,
  //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
  generateStatsFile: false,
  //  如果\`generateStatsFile\`为\`true\`，将会生成Webpack Stats JSON文件的名字。
  //  相对于捆绑输出目录。
  statsFilename: &#39;stats.json&#39;,
  //  stats.toJson（）方法的选项。
  //  例如，您可以使用\`source：false\`选项排除统计文件中模块的来源。
  //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
  statsOptions: null,
  logLevel: &#39;info&#39; // 日志级别。可以是&#39;信息&#39;，&#39;警告&#39;，&#39;错误&#39;或&#39;沉默&#39;。
})
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function r(v,c){return n(),i("div",null,d)}const u=e(s,[["render",r],["__file","19bundle-analyzer.html.vue"]]);export{u as default};
