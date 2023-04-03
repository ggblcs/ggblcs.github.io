import{_ as e,M as t,p as c,q as o,R as n,t as s,N as p,a1 as i}from"./framework-96b046e1.js";const l={},r=n("h1",{id:"_11-读取图片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_11-读取图片","aria-hidden":"true"},"#"),s(" 11 读取图片")],-1),d={href:"https://wwa.lanzouy.com/iOhnf01hqlsj",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导入模块</span>
<span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv
<span class="token comment">#读取图片</span>
img<span class="token operator">=</span>cv<span class="token punctuation">.</span>imread<span class="token punctuation">(</span><span class="token string">&#39;lena.jpg&#39;</span><span class="token punctuation">)</span> <span class="token comment">#路径中不能有中文，否则加载图片失败</span>
<span class="token comment">#显示图片</span>
cv<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;read_img&#39;</span><span class="token punctuation">,</span>img<span class="token punctuation">)</span>
<span class="token comment">#等待键盘输入 单位毫秒  传入0 则就是无限等待</span>
cv<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
<span class="token comment">#释放内存  由于OpenCV底层是C++编写的</span>
cv<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,k){const a=t("ExternalLinkIcon");return c(),o("div",null,[r,n("p",null,[s("关于基于openCV的人脸识别基础代码包，"),n("a",d,[s("点此下载-蓝奏云"),p(a)])]),u])}const h=e(l,[["render",m],["__file","11读取图片.html.vue"]]);export{h as default};
