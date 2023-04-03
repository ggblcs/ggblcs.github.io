import{_ as e,p as l,q as n,a1 as s}from"./framework-96b046e1.js";const d={},i=s(`<h1 id="_09-loader特点" tabindex="-1"><a class="header-anchor" href="#_09-loader特点" aria-hidden="true">#</a> 09 loader特点</h1><blockquote><p>提炼：</p><p>loader 执行顺序是从下之上，从右至左</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
4.loader特点:
4.1单一原则, 一个loader只做一件事情
4.2多个loader会按照从右至左, 从下至上的顺序执行
例如: 从右至左
      [ &#39;style-loader&#39;, &#39;css-loader&#39; ]
      先执行css-loader解析css文件关系拿到所有内容,
      再执行style-loader将内容插入到HTML的HEAD代码中
例如: 从下至上
    [{
        loader: &quot;style-loader&quot;
    },{
        loader: &quot;css-loader&quot;
    }]
    先执行css-loader解析css文件关系拿到所有内容,
    再执行style-loader将内容插入到HTML的HEAD代码中
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[i];function r(c,o){return l(),n("div",null,a)}const v=e(d,[["render",r],["__file","09loader特点.html.vue"]]);export{v as default};
