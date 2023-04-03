import{_ as e,p as n,q as i,a1 as l}from"./framework-96b046e1.js";const s={},a=l(`<h1 id="_31-bable转换es678语法中" tabindex="-1"><a class="header-anchor" href="#_31-bable转换es678语法中" aria-hidden="true">#</a> 31 bable转换ES678语法中</h1><p>有些高级语法没有与ES5对应的语法，例如promise，这些就不会自动转化，解决方案如下。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
4.利用babel实现低版本语法
对于有对应关系的语法而言, 经过我们上节课的配置就已经能够实现自动转换了
但是对于没有对应关系的语法而言, 经过我们上节课的配置还不能实现自动转换
什么叫有对应关系, 什么叫做没有对应关系?
有对应关系就是指ES5中有对应的概念,  例如: 箭头函数对应普通函数, let对应var, 这个就叫做有对应关系
没有对应关系就是指E5中根本就没有对应的语法,  例如Promise, includes等方法是ES678新增的
ES5中根本就没有对应的实现, 这个时候就需要再增加一些额外配置, 让babel自己帮我们实现对应的语法
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
4.1安装不存在代码的实现包
npm install --save @babel/polyfill
4.2在用到不存在代码的文件中导入包(事实上，现在版本升级，已经不需要手动引入了，所以4.2可忽略)
import &quot;@babel/polyfill&quot;;
注意点:
如果导入了polyfill,那么无论我们有没有用到不存在的语法都会打包到文件中
但是这样会增加打包后文件的大小, 我们希望的是只将用到的不存在语法打包到文件中
那么就需要在webpack.config.js中再配置一下
presets: [[&quot;@babel/preset-env&quot;,{
            targets: {
                &quot;chrome&quot;: &quot;58&quot;,
                &quot;ie&quot;: &quot;10&quot;
            },
            useBuiltIns: &quot;usage&quot;
        }]]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[a];function v(t,r){return n(),i("div",null,d)}const u=e(s,[["render",v],["__file","31bable转换ES678语法中.html.vue"]]);export{u as default};
