import{_ as e,p as s,q as n,a1 as i}from"./framework-96b046e1.js";const l={},d=i(`<h1 id="_10-resolve" tabindex="-1"><a class="header-anchor" href="#_10-resolve" aria-hidden="true">#</a> 10 resolve</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
3.什么是resolve?
https://www.webpackjs.com/configuration/resolve/
resolve用于配置导入模块的解析规则

4.resolve常用配置
4.1映射导入路径, 简化导入代码
import &#39;bootstrap/dist/css/bootstrap.css&#39;;
   但是这种写法每次都要写很长的一串路径, 有没有办法可以简化呢?
import $ from &#39;bootstrap&#39;;
   那就是通过resolve的alias
resolve: {
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
        bootstrap: path.resolve(__dirname, &quot;bootstrap/dist/css/bootstrap.css&quot;)
    },
}

4.2修改入口查找顺序, 简化导入代码
resolve: {
    // 指定模块入口的查找顺序
    mainFields: [&quot;style&quot;, &quot;main&quot;],
}

4.4修改查找顺序, 简化导入代码
resolve: {
    // 指定导入模块查找顺序
    extensions: [&quot;.css&quot;, &quot;.js&quot;]
}

4.2通过import导入模块的时候会先在node_modules中查找, 找不到再逐级向上查找
   这样在打包的时候非常消耗性能, 能不能在打包的时候让webpack只去指定的目录查找
   那就是通过resolve的modules
resolve: {
    // 指定查找范围, 告诉webpack只在node_modules中查找
    modules: [&quot;node_modules&quot;],
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(a,o){return s(),n("div",null,v)}const t=e(l,[["render",r],["__file","10resolve.html.vue"]]);export{t as default};
