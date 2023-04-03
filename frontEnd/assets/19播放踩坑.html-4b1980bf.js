import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const a={},d=s(`<h1 id="_19-播放踩坑" tabindex="-1"><a class="header-anchor" href="#_19-播放踩坑" aria-hidden="true">#</a> 19 播放踩坑</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token comment">/*
   1. 修改player.playMusic(index);中的加载完自动播放，注释掉----停止自动播放
   2. 创建播放器后调用player.playMusic(index);----直接加载歌曲，而不是点击播放后加载
   3. 在initDefaultInfo方法中重复一下player.playMusic(index);----第二次是播放

   vivo浏览器踩坑：
   01 edge浏览器：设置点击，点击后获取歌曲并播放。可行。
   02 vivo浏览器：设置点击，点击后获取歌曲但是不能直接播放，必须再次点击（互动）才能播放。
   03 总结：vivo手机浏览器不能在互动后直接获取歌曲并且js操作播放。播放前必须有一次互动，或者说获取歌曲与播放歌曲之间必须有一次互动。
   04 例外：如果播放的歌曲是第一首，则是上面的，vivo浏览器必须互动才能播放。但是如果横滑切换歌曲（此时歌曲已经不是第一首了，不是第一次在此页面播放歌曲了），此时可以获取歌曲后直接js操作播放，中途可以不互动。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function c(r,v){return i(),n("div",null,l)}const o=e(a,[["render",c],["__file","19播放踩坑.html.vue"]]);export{o as default};
