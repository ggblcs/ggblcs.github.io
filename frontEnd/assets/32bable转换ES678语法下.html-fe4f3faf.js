import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_32-bable转换es678语法下" tabindex="-1"><a class="header-anchor" href="#_32-bable转换es678语法下" aria-hidden="true">#</a> 32 bable转换ES678语法下</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.直接在文件中导入polyfill模块的弊端
直接导入polyfill的方式只适用于一般项目开发, 但是如果是在编写一些第三方模块的时候这种方式会出现一些问题
因为这种方式是通过全局变量的方式来注入代码, 会污染全局环境. 所以我们再来看一下polyfill的第二种配置方式

2.第二种配置方式
2.1安装相关模块
npm install --save @babel/polyfill
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

2.2配置相关信息
plugins: [
    [&quot;@babel/plugin-transform-runtime&quot;,
        {
            &quot;absoluteRuntime&quot;: false,
            &quot;corejs&quot;: 2,
            &quot;helpers&quot;: true,
            &quot;regenerator&quot;: true,
            &quot;useESModules&quot;: false
        }
    ]
]

注意点:
&quot;corejs&quot;: false, 还是全局注入,还是会污染全局环境
&quot;corejs&quot;: 2, 则不会污染全局环境
npm install --save @babel/runtime-corejs2
--&gt;</span>

<span class="token comment">&lt;!--
// 转换前
function sleep(ms) {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve()
    }, ms)
  })
}
// &quot;corejs&quot;: false转换后
require(&quot;core-js/modules/es6.promise&quot;);  // 全局引入

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

// &quot;corejs&quot;: 2转换后
var _interopRequireDefault = require(&quot;@babel/runtime-corejs2/helpers/interopRequireDefault&quot;);
var _promise = _interopRequireDefault(require(&quot;@babel/runtime-corejs2/core-js/promise&quot;)); // 独立变量, 局部引入
function sleep(ms) {
  return new _promise.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(u,a){return n(),i("div",null,r)}const t=e(l,[["render",v],["__file","32bable转换ES678语法下.html.vue"]]);export{t as default};
