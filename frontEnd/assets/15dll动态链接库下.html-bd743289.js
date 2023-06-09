import{_ as e,p as n,q as i,a1 as l}from"./framework-96b046e1.js";const d={},s=l(`<h1 id="_15-dll动态链接库下" tabindex="-1"><a class="header-anchor" href="#_15-dll动态链接库下" aria-hidden="true">#</a> 15 dll动态链接库下</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.dll动态链接库使用步骤?
1.1新建一个配置文件, 专门用于打包不会变化的第三方库
1.2在打包项目的配置文件中, 通过add-asset-html-webpack-plugin将提前打包好的库插入到html中
1.3在专门打包第三方的配置文件中添加生成清单配置
1.4在打包项目的配置文件中, 告诉webpack打包第三方库的时候先从哪个清单文件中查询,
如果清单包含当前用到的第三方库就不打包了. 因为已经在html中手动引入了

2.动态链接库的优势
2.1不用手动插入
2.2所有第三方库只会被打包一次

3.当前动态链接库存在的问题
如果我们提前打包生成了多个文件和清单, 那么需要手动增加插入的文件和查询的清单

4.如何解决
通过NodeJS代码动态添加
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[s];function c(v,r){return n(),i("div",null,a)}const m=e(d,[["render",c],["__file","15dll动态链接库下.html.vue"]]);export{m as default};
