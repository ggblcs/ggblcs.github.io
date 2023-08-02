import{_ as e,p as s,q as i,a1 as n}from"./framework-96b046e1.js";const a={},c=n(`<h1 id="_07-eggjs中service注意点" tabindex="-1"><a class="header-anchor" href="#_07-eggjs中service注意点" aria-hidden="true">#</a> 07 EggJs中Service注意点</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
注意点:
1.service目录必须放在app目录中
2.service目录支持多级目录, 如果是多级目录, 那么在调用的时候可以使用链式调用
  this.ctx.service.abc.def.text.xxx();
3.service中的js文件, 如果是以_或者首字母都是大写, 那么在调用的时候必须转换成驼峰命名
  get_user.js --- getUser
  GetUser.js --- getUser  
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[c];function d(t,l){return s(),i("div",null,r)}const _=e(a,[["render",d],["__file","07EggJs中Service注意点.html.vue"]]);export{_ as default};
