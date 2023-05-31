import{_ as n,p as s,q as e,a1 as i}from"./framework-96b046e1.js";const a={},l=i(`<h1 id="_02-属性和属性节点" tabindex="-1"><a class="header-anchor" href="#_02-属性和属性节点" aria-hidden="true">#</a> 02 属性和属性节点</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>it666<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>$(function () {
    /*
    1.什么是属性?
    对象身上保存的变量就是属性
    2.如何操作属性?
    对象.属性名称 = 值;
    对象.属性名称;
    对象[&quot;属性名称&quot;] = 值;
    对象[&quot;属性名称&quot;];

    3.什么是属性节点?
    &lt;span name = &quot;it666&quot;&gt;&lt;/span&gt;
    在编写HTML代码时,在HTML标签中添加的属性就是属性节点
    在浏览器中找到span这个DOM元素之后, 展开看到的都是属性
    在attributes属性中保存的所有内容都是属性节点

    4.如何操作属性节点?（原生js）
    DOM元素.setAttribute(&quot;属性名称&quot;, &quot;值&quot;);
    DOM元素.getAttribute(&quot;属性名称&quot;);

    5.属性和属性节点有什么区别?
    任何对象都有属性, 但是只有DOM对象才有属性节点

    */

    /*
    function Person() {

    }
    var p = new Person();
    // p.name = &quot;lnj&quot;;
    p[&quot;name&quot;] = &quot;zs&quot;;
    // console.log(p.name);
    console.log(p[&quot;name&quot;]);
    */

    var span = document.getElementsByTagName(&quot;span&quot;)[0];
    span.setAttribute(&quot;name&quot;, &quot;lnj&quot;);
    console.log(span.getAttribute(&quot;name&quot;));
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function d(u,c){return s(),e("div",null,t)}const o=n(a,[["render",d],["__file","02属性和属性节点.html.vue"]]);export{o as default};
