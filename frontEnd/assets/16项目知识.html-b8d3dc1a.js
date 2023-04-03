import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},i=t(`<h1 id="_16-项目知识补充" tabindex="-1"><a class="header-anchor" href="#_16-项目知识补充" aria-hidden="true">#</a> 16 项目知识补充</h1><h2 id="_00-template特别篇" tabindex="-1"><a class="header-anchor" href="#_00-template特别篇" aria-hidden="true">#</a> 00 template特别篇</h2><p>https://segmentfault.com/a/1190000012135926 详细的很。</p><p>全局数据名为$data.</p><h2 id="_01-svg" tabindex="-1"><a class="header-anchor" href="#_01-svg" aria-hidden="true">#</a> 01 SVG</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. svg画方法的getTotalLength方法获取路径总长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_02-swiper" tabindex="-1"><a class="header-anchor" href="#_02-swiper" aria-hidden="true">#</a> 02 swiper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mySwiper = new Swiper (&#39;.swiper-container&#39;, {
    loop: true,
    // 如果内容是从服务器获取的, 请加上这三个配置
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    on: {
        slideChangeTransitionEnd: function(){
            /*
            Swiper.swipeDirection属性用于获取Swiper当前滚动的方向
            如果是第一次执行, 那么拿到的是: undefined
            如果是切换到下一屏: 返回的是next
            如果是切换到上一屏: 返回的是prev
            console.log(&quot;执行了&quot;, this.swipeDirection);
            * */
            index = this.realIndex; // 获取当前是第几屏
            initDefaultInfo(this.realIndex, this.swipeDirection);
        },
    },
});

1. 在html模板中创建swiper时需要改监视器3个，见课时33结束。

2. 解决轮播图交互后就停止自动轮播的问题。
	disableOnInteraction: false, //默认为true，表示交互后自动停止轮播。
	示例：
	autoplay:{
        delay: 1000,
        disableOnInteraction: false,
    },
	
3. 解决轮播到最后一个就不再循环轮播的问题。
	将创建轮播图放在加载数据后面，加载完数据才创建轮播！
	
4. 使用js删除指定页面，获取到那个slide的index删除
	mySwiper.removeSlide(delIndex);

5. 滚动到指定屏
	mySwiper.slideToLoop(index); //设置无限循环滚动时使用这个方法
	mySwiper.slideTo(index);  //没设置无限循环滚动时使用这个方法

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-iscoll" tabindex="-1"><a class="header-anchor" href="#_03-iscoll" aria-hidden="true">#</a> 03 iscoll</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决不能向上拖拽问题：见课时51.
	因为数据是网络上加载下来的。let maxOffsetY = myScroll.maxScrollY-bottomHeight;没有被修改。
	解决方案一：把滚动范围高度固定死。
	解决方案二：等图片加载完再刷新。//myScroll.refresh();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-css" tabindex="-1"><a class="header-anchor" href="#_04-css" aria-hidden="true">#</a> 04 CSS</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标题一：实现main-content占用main-header剩余的全部空间
标题二：实现main-in中main-header固定，但是main-content能滚动

方法一：js，但不顺滑，不想用
方法二：main-header浮动，main-content设置高度100%
方法三：main-header高度固定，main-content固定定位（同时设置bottom与header）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*1. 不换行*/</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

<span class="token comment">/*2. 水平方向能滚动*/</span>
<span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>

<span class="token comment">/*3. 隐藏滚动条，仅在谷歌浏览器和苹果浏览器有效*/</span>
<span class="token selector">&amp;::-webkit-scrollbar</span><span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 3.1 隐藏滚动条的奇淫技巧，
	父元素设置高度用overflow:hidden,
	子元素用padding-bottom挤出滚动条隐藏。*/</span>

<span class="token comment">/*4. a标签点击瞬间有蓝色背景：去除方法*/</span>
<span class="token selector">a</span><span class="token punctuation">{</span>
    <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*5. 超出部分省略号CSS仅限手机端或谷歌*/</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500/100rem<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
	<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*6. 动画的暂停与开始*/</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
	<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>//默认暂停，running运行

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-html" tabindex="-1"><a class="header-anchor" href="#_05-html" aria-hidden="true">#</a> 05 HTML</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>自定义属性
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-name-na</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>赵桓熠<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">queryselector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>nameNa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//如果自定义属性多次用-连接，那么在js中使用驼峰命名法。</span>
    <span class="token comment">//见视频 原生移动web开发（网易云项目） 课时87开端</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-html音频" tabindex="-1"><a class="header-anchor" href="#_06-html音频" aria-hidden="true">#</a> 06 HTML音频</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//详见课时100</span>
<span class="token comment">//加载好的事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;canplay&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//播放整个过程事件与回调，在mdn中才能查到，菜鸟教程查不到：视频：任务101</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;timeupdate&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//随着时间的变动，该函数一直被调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//音频播放完毕事件监听，播放完毕执行回调</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;ended&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//随着时间的变动，该函数一直被调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//播放</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//pause暂停，paused获取播放状态是否暂停</span>
<span class="token comment">//获取总时长</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>duration
<span class="token comment">//设置播放的时长位置</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>currentTime <span class="token operator">=</span> 时长（秒）

<span class="token comment">//设置音量</span>
oAudio<span class="token punctuation">.</span>volume <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token comment">// 注意点: 如果更换了需要播放歌曲的地址, 那么必须让audio重新加载才会播放更新之后的歌曲</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;source src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; type=&quot;audio/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//重新加载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[i];function c(l,o){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","16项目知识.html.vue"]]);export{d as default};
