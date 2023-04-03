import{_ as n,M as r,p as o,q as t,R as s,t as a,N as l,a1 as i}from"./framework-96b046e1.js";const p={},c=s("h1",{id:"_15-uml图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_15-uml图表","aria-hidden":"true"},"#"),a(" 15 UML图表")],-1),d={href:"https://mermaidjs.github.io/",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
张三 <span class="token arrow operator">-&gt;&gt;</span> 李四<span class="token operator">:</span> 你好！李四, 最近怎么样?
李四<span class="token arrow operator">--&gt;&gt;</span>王五<span class="token operator">:</span> 你最近怎么样，王五？
李四<span class="token arrow operator">--x</span> 张三<span class="token operator">:</span> 我很好，谢谢!
李四<span class="token arrow operator">-x</span> 王五<span class="token operator">:</span> 我很好，谢谢!
<span class="token keyword">Note right of</span> 王五<span class="token operator">:</span> 李四想了很长时间, 文字太长了&lt;br/&gt;不适合放在一行.

李四<span class="token arrow operator">--&gt;&gt;</span>张三<span class="token operator">:</span> 打量着王五...
张三<span class="token arrow operator">-&gt;&gt;</span>王五<span class="token operator">:</span> 很好... 王五, 你怎么样?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将产生一个流程图。:</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
A<span class="token text string">[长方形]</span> <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">链接</span> <span class="token arrow operator">--&gt;</span></span> B<span class="token text string">((圆))</span>
A <span class="token arrow operator">--&gt;</span> C<span class="token text string">(圆角长方形)</span>
B <span class="token arrow operator">--&gt;</span> D<span class="token text string">{菱形}</span>
C <span class="token arrow operator">--&gt;</span> D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关于 <strong>Mermaid</strong> 语法，参考 [这儿][3],</li></ul>`,4);function v(u,k){const e=r("ExternalLinkIcon");return o(),t("div",null,[c,s("p",null,[a("可以使用UML图表进行渲染。 "),s("a",d,[a("Mermaid"),l(e)]),a(". 例如下面产生的一个序列图：:")]),m])}const _=n(p,[["render",v],["__file","15UML图表.html.vue"]]);export{_ as default};
