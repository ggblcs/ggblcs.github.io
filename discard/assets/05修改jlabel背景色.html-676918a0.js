import{_ as e,p as a,q as t,a1 as n}from"./framework-96b046e1.js";const s={},l=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JLabel name=new JLabel();
name.setBackground(Color.red);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>奇怪，为什么标签没有变成红色？</p><p>哼。天真！</p><p>透明的标签再怎么调色，还是透明的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>score.setOpaque(true);//加上这一句吧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),d=[l];function i(r,c){return a(),t("div",null,d)}const _=e(s,[["render",i],["__file","05修改jlabel背景色.html.vue"]]);export{_ as default};
