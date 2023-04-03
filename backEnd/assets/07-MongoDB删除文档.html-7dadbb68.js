import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_07-mongodb删除文档" tabindex="-1"><a class="header-anchor" href="#_07-mongodb删除文档" aria-hidden="true">#</a> 07 -MongoDB删除文档</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.删除文档
db.&lt;collection&gt;.remove(&lt;query&gt;, &lt;options&gt;)
&lt;query&gt;: 删除筛选条件
&lt;options&gt;: 删除额外配置

2.示例
db.person.insert([
{name:&#39;zs&#39;, age:18},
{name:&#39;zs&#39;, age:19},
{name:&#39;ls&#39;, age:20},
{name:&#39;ls&#39;, age:21},
{name:&#39;ww&#39;, age:22},
{name:&#39;zl&#39;, age:23},
])

2.示例
//2.1删除所有满足条件
// 注意点: 和update方法不同, remove方法默认就会删除所有满足条件的数据
db.person.remove({name:&#39;zs&#39;})
//2.2删除第一个满足条件
db.person.remove({name:&#39;ls&#39;},{justOne:true})
//2.3删除所有文档
db.person.remove({})
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(v,m){return n(),i("div",null,a)}const t=e(l,[["render",r],["__file","07-MongoDB删除文档.html.vue"]]);export{t as default};
