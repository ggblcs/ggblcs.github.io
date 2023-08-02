import{_ as e,p as a,q as i,a1 as d}from"./framework-96b046e1.js";const n={},s=d(`<h1 id="_01-选择器大全" tabindex="-1"><a class="header-anchor" href="#_01-选择器大全" aria-hidden="true">#</a> 01 选择器大全</h1><hr><h2 id="title-选择器大全" tabindex="-1"><a class="header-anchor" href="#title-选择器大全" aria-hidden="true">#</a> title: 选择器大全</h2><h1 id="选择器大全" tabindex="-1"><a class="header-anchor" href="#选择器大全" aria-hidden="true">#</a> 选择器大全</h1><h3 id="_1-标签选择器" tabindex="-1"><a class="header-anchor" href="#_1-标签选择器" aria-hidden="true">#</a> 1.标签选择器</h3><p>作用：根据指定的标签名称，在当前界面中找到所有该名称的标签，然后设置属性。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标签名称:{

属性：值

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-id选择器" tabindex="-1"><a class="header-anchor" href="#_2-id选择器" aria-hidden="true">#</a> 2.id选择器</h3><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#id名{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>1.同一个界面之中id名像身份证一样，不可重复设置。</p><p>2.id名只能由字母、数字（但不能用数字开头）、下划线组成。</p><p>3.企业开发中，如果仅仅是为了设置样式，<strong>一般不</strong>使用id选择器，一般留给js。</p><h3 id="_3-类选择器" tabindex="-1"><a class="header-anchor" href="#_3-类选择器" aria-hidden="true">#</a> 3.类选择器</h3><p>每个标签都有class（类）属性。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.class名{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>1.命名同id属性。</p><p>2.同一个界面之中，不同标签可以使用同一类名。</p><p>3.同一标签可以同时写两个以上类名，类名之间用空格隔开。</p><blockquote><p>注意点3演示：<p class="类名1 类名2">我是段落</p></p></blockquote><h3 id="_4-后代选择器" tabindex="-1"><a class="header-anchor" href="#_4-后代选择器" aria-hidden="true">#</a> 4.后代选择器</h3><p>作用：找到指定标签的所有后代标签，设置属性。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标签名称1 标签名称2{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>1.后代选择器必须用空格隔开。</p><p>2.后代选择器中的后代不仅仅指儿子辈的，还有孙子重孙子。</p><h3 id="_5-子元素选择器" tabindex="-1"><a class="header-anchor" href="#_5-子元素选择器" aria-hidden="true">#</a> 5.子元素选择器</h3><p>作用：找到所有指定标签中所有特定的直接子元素，然后进行属性设置。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标签1&gt;标签2{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如格式中的内容，这个选择器会首先找到“标签1”，再找到标签1的所有子元素“标签2”。无论是否能找到，都不会往下一级找了。</p><blockquote><p>后代选择器和子元素选择器之间的区别？？</p><p>1.后代选择器使用空格作为连接符</p><p>​ 子元素选择器用 &gt; 作为连接符</p><p>2.后代选择器会选中所有指定标签周，所有后代标签（包括子代、孙子、重孙子）。</p><p>​ 子元素选择器会选中所有后代的特定标签，不包括孙子、重孙子。</p></blockquote><h3 id="_6-交集选择器" tabindex="-1"><a class="header-anchor" href="#_6-交集选择器" aria-hidden="true">#</a> 6.交集选择器</h3><p>作用：给所有选择器选择的标签中，相交的那部分标签设置属性。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器1选择器2{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：连个选择器之间没有任何的连接符。</p><h3 id="_7-并集选择器" tabindex="-1"><a class="header-anchor" href="#_7-并集选择器" aria-hidden="true">#</a> 7.并集选择器</h3><p>作用：给所有选择器选中的标签设置属性</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器1，选择器2{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_8-兄弟选择器" aria-hidden="true">#</a> 8.兄弟选择器</h3><h4 id="_8-1相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_8-1相邻兄弟选择器" aria-hidden="true">#</a> 8.1相邻兄弟选择器</h4><p>作用：给指定选择器后面紧跟的那个选择器选中的标签设置属性（选中同级的兄弟）。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择器1+选择器2{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：选中同级标签h1标签后的p标签（仅选中紧跟h1的哪一个p标签）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h1+p{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>1.相邻兄弟选择器只能选中紧跟其后的那个标签，不能选中被隔开的那个标签。</p><h4 id="_8-2通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_8-2通用兄弟选择器" aria-hidden="true">#</a> 8.2通用兄弟选择器</h4><p>作用：给指定选择器后面的所有选择器选中的所有标签设置属性。</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h1~p{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：选中同级标签h1标签后的所有p标签（不是紧跟h1的那一个p标签也能被选中）。</p><h3 id="_9-序选择器" tabindex="-1"><a class="header-anchor" href="#_9-序选择器" aria-hidden="true">#</a> 9.序选择器</h3><h4 id="_1-同级别的第几个" tabindex="-1"><a class="header-anchor" href="#_1-同级别的第几个" aria-hidden="true">#</a> 1.同级别的第几个</h4><blockquote><p>first-child 选中同级别的第一个标签</p><p>:last-child 选中同级别的最后一个</p><p>:nth-child(n) 选中同级别中的第N个标签</p><p>注意：以上都不区分类型。</p></blockquote><h4 id="_2-同类型的第几个" tabindex="-1"><a class="header-anchor" href="#_2-同类型的第几个" aria-hidden="true">#</a> 2.同类型的第几个</h4><blockquote><p>:first-of-type 选中同级别中同类型的第一个标签</p><p>:last-of-type 选中同级别中同类型的最后一个标签</p><p>:nth-of-type(n) 选中同级别中同类型的第n个标签</p><p>:nth-last-of-type(n) 选中同级别中同类型的倒数第n个标签</p><p>:only-of-type 选中父元素中唯一类型的某个标签</p></blockquote><blockquote><p>:nth-chlid(odd) 选中同级别中的所有奇数</p><p>:nth-child(even) 选中同级别中所有偶数</p></blockquote><blockquote><p>:nth-child(xn+y) x与y是用户自定义的，n是一个计数器，从0开始递增</p></blockquote><h3 id="_10-属性选择器" tabindex="-1"><a class="header-anchor" href="#_10-属性选择器" aria-hidden="true">#</a> 10.属性选择器</h3><p>作用：根据属性名称找到对应标签，然后设其属性</p><h4 id="_10-1给具有某特定值的某属性的标签设置样式" tabindex="-1"><a class="header-anchor" href="#_10-1给具有某特定值的某属性的标签设置样式" aria-hidden="true">#</a> 10.1给具有某特定值的某属性的标签设置样式</h4><p>格式举例1：给type=password的input标签设置属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input[type=password]{
    属性：值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####10.2给具有特定属性的标签设置样式</p><p>格式举例2：给具有attribute属性的标签设置样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input[attribute]{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-3属性取值是以什么开头的" tabindex="-1"><a class="header-anchor" href="#_10-3属性取值是以什么开头的" aria-hidden="true">#</a> 10.3属性取值是以什么开头的</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[attribute|=value]		CSS2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[attribute^=value]		CSS3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_10-4属性取值是以什么结尾的" tabindex="-1"><a class="header-anchor" href="#_10-4属性取值是以什么结尾的" aria-hidden="true">#</a> 10.4属性取值是以什么结尾的</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[attribute$=value]		CSS3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_10-5属性是否包含某特定值" tabindex="-1"><a class="header-anchor" href="#_10-5属性是否包含某特定值" aria-hidden="true">#</a> 10.5属性是否包含某特定值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[attribute~=value]		CSS2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[attribute*=value]		CSS3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_11-通配符选择器" tabindex="-1"><a class="header-anchor" href="#_11-通配符选择器" aria-hidden="true">#</a> 11.通配符选择器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*{
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,85),t=[s];function r(l,c){return a(),i("div",null,t)}const h=e(n,[["render",r],["__file","01选择器大全.html.vue"]]);export{h as default};
