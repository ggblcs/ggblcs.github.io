import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const t={},l=s(`<h1 id="_09-总结三种获取css样式" tabindex="-1"><a class="header-anchor" href="#_09-总结三种获取css样式" aria-hidden="true">#</a> 09 总结三种获取CSS样式</h1><p>getComputedStyle只支持IE9以上浏览器</p><p>currentStyle只支持IE9以下浏览器</p><p>style只支持行内样式，且能获取，能设置，而前两者只能获取，不能设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.getComputedStyle/currentStyle/style
获取的宽高不包括 边框和内边距
2.offsetWidth/offsetHeight
获取的宽高包括 边框和内边距

3.getComputedStyle/currentStyle/offsetXXX
只支持获取, 不支持设置
4.style
可以获取, 也可以设置

5.getComputedStyle/currentStyle/offsetXXX
即可以获取行内,也可以获取外链和内联样式
6.style
只能获取行内样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function a(r,c){return n(),i("div",null,d)}const u=e(t,[["render",a],["__file","09总结三种获取CSS样式.html.vue"]]);export{u as default};
