import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},i=t(`<h1 id="_09-适配方案二" tabindex="-1"><a class="header-anchor" href="#_09-适配方案二" aria-hidden="true">#</a> 09 适配方案二</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>09-移动端常用适配方案二<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.通过媒体查询 + rem
    虽然我们将移动端独立到一套代码中了, 但是由于移动端也有很多的屏幕尺寸, 所以也需要进行适配
    例如:
    iPhone3/4/5:  320px
    iPhone678:    375px
    iPhoneX/plus: 414px

    当下在企业开发中设计师提供给我们的移动端设计图片是750*xxx的或者1125*xxx的
    所以我们需要对设计师提供的图片进行等比缩放, 这样才能1:1还原设计图片

    2.如何等比缩放?
    2.1将设计图片等分为指定份数,求出每一份的大小
       例如: 750设计图片分为7.5份, 那么每一份的大小就是100px
    2.2将目标屏幕也等分为指定份数,求出每一份的大小
       例如: 375屏幕也分为7.5份, 那么每一份的大小就是50px

    2.3用 原始元素尺寸 / 原始图片每一份大小 * 目标屏幕每一份大小 = 等比缩放后的尺寸
       例如: 设计图片上有一个150*150的图片, 我想等比缩放显示到375屏幕上
       那么: 150 / 100 * 50 = 1.5*50 = 75px

    3.如何在前端开发中应用这个计算公式?
    3.1目标屏幕每一份的大小就是html的font-size: 50px
    3.2使用时只需要用 &quot;原始元素尺寸 / 原始图片每一份大小rem&quot; 即可
                      150 / 100 = 1.5 / 1.5rem
                      1rem = 50px  / 1.5rem === 1.5*50 = 75px

    4.大公司应用实例
    4.1网易新闻
        750/100=7.5
        375/7.5=50;
        320/7.5=42.7;
    4.2苏宁易购
        750/50=15
        375/15=25
        320/15=21.33
    * */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function p(c,u){return s(),a("div",null,l)}const d=n(e,[["render",p],["__file","09适配方案二.html.vue"]]);export{d as default};
