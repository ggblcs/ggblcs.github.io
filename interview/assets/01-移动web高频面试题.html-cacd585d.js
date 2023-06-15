import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_01-移动web高频面试题" tabindex="-1"><a class="header-anchor" href="#_01-移动web高频面试题" aria-hidden="true">#</a> 01 -移动web高频面试题</h1><p>####1、前端页面有哪三层构成，分别是什么？作用是什么？</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>1、结构层：由 HTML 标记语言负责创建，仅负责语义的表达。解决了页面“内容是什么”的问题。
2、表示层：由CSS负责创建，解决了页面“如何显示内容”的问题。
3、行为层：由脚本（js）负责。解决了页面上“内容应该如何对事件作出反应”的问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####2、主流的浏览器分别是什么内核？</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>Trident[ˈtraɪdnt]内核：（国产的绝大部分浏览器）IE，360，搜狗
Gecko[ˈɡekoʊ]内核：火狐
Presto[ˈprestoʊ]内核：Opera7[ˈɑːprə]
及以上（欧朋）
Webkit内核：（国产大部分双核浏览器其中一核）Safari[səˈfɑːri]
（苹果），Chrome[kroʊm]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、如何居中一个浮动元素" tabindex="-1"><a class="header-anchor" href="#_3、如何居中一个浮动元素" aria-hidden="true">#</a> 3、如何居中一个浮动元素?</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">父元素和子元素同时左浮动，然后父元素相对左移动50%，再然后子元素相对右移动50%，或者子元素相对左移动-50%也就可以了。
 &lt;style&gt;
        .p</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.c</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;p&quot;</span>&gt;
        &lt;h1 class=<span class="token string">&quot;c&quot;</span>&gt;Test Float Element Center&lt;/h1&gt;
    &lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、行内元素有哪些-块级元素有哪些-空元素-void-有哪些" tabindex="-1"><a class="header-anchor" href="#_4、行内元素有哪些-块级元素有哪些-空元素-void-有哪些" aria-hidden="true">#</a> 4、行内元素有哪些？块级元素有哪些？空元素（void）有哪些？</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、行内元素：a，b，span，strong，label，button，select，textarea，em

2、块级元素：div，ul（无序列表），ol，li，dl（自定义列表），dt（自定义列表项），dd（自定义列表项的定义），p，h1-h6

3、行内块元素：img，input

4、空元素（void）：即没有内容的HTML元素。br（换行），hr（水平分割线），meta，link，input，img

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、bfc-block-formatting-context-块级格式化上下文" tabindex="-1"><a class="header-anchor" href="#_5、bfc-block-formatting-context-块级格式化上下文" aria-hidden="true">#</a> 5、BFC（Block Formatting Context，块级格式化上下文）</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、是什么：决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。简言之，就是一个特殊的块，内部的元素和外部的元素不会相互影响。BFC内的盒子会在垂直方向上一个接一个地放置，垂直方向上也会发生外边距重叠。

2、应用场景：自适应布局（BFC不与float box重叠）、清除浮动（计算BFC的高度时，内部的浮动元素也被计算在内）、防止外边距重叠

3、如何触发BFC：float属性（不为none）、overflow属性（不为visible）、position属性（absolute，fixed）、display属性（inline-block，table-cell，table-caption，flex，inline-flex）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、css选择器的优先级" tabindex="-1"><a class="header-anchor" href="#_6、css选择器的优先级" aria-hidden="true">#</a> 6、CSS选择器的优先级</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token important">!important</span> &gt; 行内样式&gt;ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7、初始化css样式的意义" tabindex="-1"><a class="header-anchor" href="#_7、初始化css样式的意义" aria-hidden="true">#</a> 7、初始化CSS样式的意义</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、为什么要初始化CSS样式：因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没有对CSS初始化往往会出现浏览器之间的页面显示差异。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8、html5新特性" tabindex="-1"><a class="header-anchor" href="#_8、html5新特性" aria-hidden="true">#</a> 8、HTML5新特性</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1. <span class="token property">语义化标签</span><span class="token punctuation">:</span> header nav section article aside footer
2. <span class="token property">多媒体标签</span><span class="token punctuation">:</span> video audio
3. <span class="token property">input类型</span><span class="token punctuation">:</span> number search email tel date file time  url
4. 本地离线存储 localStorage 长期存储数据<span class="token punctuation">,</span>改变浏览器数据不会丢失
			  sessionStorage 浏览器关闭数据会丢失
5. 自定义属性 data-*
6. 画布 Canvas
7. webscoket 双向通信协议
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、css3新特性" tabindex="-1"><a class="header-anchor" href="#_9、css3新特性" aria-hidden="true">#</a> 9、CSS3新特性</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1. 圆角 border-radius
2. 盒子模型 box-sizing
3. 阴影 box-shadow 盒子阴影  text-shadow 文字阴影
4. 过渡 transition
5. 2D转换transform  <span class="token function">translate</span><span class="token punctuation">(</span>平移<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>缩放<span class="token punctuation">)</span>  <span class="token function">skew</span><span class="token punctuation">(</span>斜切<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>旋转<span class="token punctuation">)</span> transform-origin 控制转换中心点
6. 3D转换 <span class="token function">perspective</span><span class="token punctuation">(</span>透视距<span class="token punctuation">)</span>  <span class="token function">transform-style</span><span class="token punctuation">(</span>3D控件效果<span class="token punctuation">)</span>
7. 渐变 linear-gradient radial-gradient
8. 弹性布局 flex
9. 媒体查询 <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
10. 边框图片 border-image
11. 自定义动画 @keyframes    animation
12. 颜色 新增RGBA HSLA模式
13. 背景 background-size   background-origin   background-clip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、对html语义化的理解" tabindex="-1"><a class="header-anchor" href="#_10、对html语义化的理解" aria-hidden="true">#</a> 10、<strong>对HTML语义化的理解</strong></h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、用正确的标签做正确的事情

2、HTML语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析

3、即使在没有样式CSS情况下也以一种文档格式显示，并且是易于阅读的

4、搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO

5、使阅读源代码的人更容易将网站分块，便于阅读维护理解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、css的盒子模型" tabindex="-1"><a class="header-anchor" href="#_11、css的盒子模型" aria-hidden="true">#</a> 11、CSS的盒子模型</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、有两种， IE 盒子模型、W3C 盒子模型；
2、盒模型： 内容<span class="token punctuation">(</span>content<span class="token punctuation">)</span>、填充<span class="token punctuation">(</span>padding<span class="token punctuation">)</span>、边界<span class="token punctuation">(</span>margin<span class="token punctuation">)</span>、 边框<span class="token punctuation">(</span>border<span class="token punctuation">)</span>；
3、区 别： IE的content部分把 border 和 padding计算了进去<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、如何居中div" tabindex="-1"><a class="header-anchor" href="#_12、如何居中div" aria-hidden="true">#</a> 12、如何居中div</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">1、 水平居中：给div设置一个宽度，然后添加margin:0 auto属性
 
        div</span> <span class="token punctuation">{</span>
             <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
             <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
 <span class="token selector">2、让绝对定位的div居中
 
        div</span> <span class="token punctuation">{</span>
             <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
             <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
             <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
             <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
             <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span> 
			<span class="token punctuation">}</span> 
 <span class="token selector">3、水平垂直居中一
 
        确定容器的宽高 宽500 高 300 的层
        设置层的外边距
 
        div</span> <span class="token punctuation">{</span>
             <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>        <span class="token comment">/* 相对定位或绝对定位均可 */</span>
             <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
             <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
             <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">margin</span><span class="token punctuation">:</span> -150px 0 0 -250px<span class="token punctuation">;</span>         <span class="token comment">/* 外边距为自身宽高的一半 */</span>
             <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>         <span class="token comment">/* 方便看效果 */</span>
          <span class="token punctuation">}</span>
 <span class="token selector">4、水平垂直居中二

        未知容器的宽高，利用 \`transform\` 属性
        div</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>        <span class="token comment">/* 相对定位或绝对定位均可 */</span>
            <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>         <span class="token comment">/* 方便看效果 */</span>
        <span class="token punctuation">}</span>

 <span class="token selector">5、水平垂直居中三
        利用 flex 布局
        实际使用时应考虑兼容性
        .container</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>         <span class="token comment">/* 垂直居中 */</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>    <span class="token comment">/* 水平居中 */</span>
             <span class="token punctuation">}</span>
        <span class="token selector">.container div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>        <span class="token comment">/* 方便看效果 */</span>
        <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13、什么是重排和重绘" tabindex="-1"><a class="header-anchor" href="#_13、什么是重排和重绘" aria-hidden="true">#</a> 13、什么是重排和重绘</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、重排<span class="token punctuation">:</span> 当DOM元素影响了元素的几何属性（例如宽和高），浏览器需要重新计算元素的几何属性，同样其它元素的几何属性也会和位置也会因此受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程称为“重排”。
2、重绘<span class="token punctuation">:</span> 完成重排后，浏览器会重新绘制受影响的部分到屏幕上中，该过程称为“重绘”。
	
	当我们改变DOM的大小，增加删除都会导致重排，当给DOM元素改变颜色的时候，会导致重绘，重排一定会重绘，重绘不会重排。重排会影响性能，所以我们尽快能的减少重排的操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14、px-em-rem有什么区别" tabindex="-1"><a class="header-anchor" href="#_14、px-em-rem有什么区别" aria-hidden="true">#</a> 14、<strong>px/em/rem有什么区别</strong></h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、px 是固定的像素，一旦设置了就无法因为适应页面大小而改变
2、em 和rem相对于px更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局
3、em 相对自身font-size，没有则相对于父元素，rem相对于根元素的font-size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15、rem布局的原理" tabindex="-1"><a class="header-anchor" href="#_15、rem布局的原理" aria-hidden="true">#</a> 15、rem布局的原理</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、rem 是css的相对单位，rem缩放是相对根元素字体大小.
2、rem 布局的本质是等比缩放，一般是基于宽度。
3、rem 会配合媒体查询（或js动态获取屏幕宽度）来一起使用，来实现屏幕的适配。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16、怎么用css画一个三角形" tabindex="-1"><a class="header-anchor" href="#_16、怎么用css画一个三角形" aria-hidden="true">#</a> 16、怎么用CSS画一个三角形</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span> //透明
    <span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17、使元素消失的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_17、使元素消失的方法有哪些" aria-hidden="true">#</a> 17、使元素消失的方法有哪些</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、opacity：0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定 一些事件，如 click 事件，那么点击该区域，也能触发点击事件的
2、visibility：hidden，该元素隐藏起来了，但不会改变页面布局，还占据位置
3、display：none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉，不占位置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18、多行元素的文本省略号" tabindex="-1"><a class="header-anchor" href="#_18、多行元素的文本省略号" aria-hidden="true">#</a> 18、多行元素的文本省略号</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
   <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>  
   <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
   <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19、rgba-和-opacity-的透明效果有什么不同" tabindex="-1"><a class="header-anchor" href="#_19、rgba-和-opacity-的透明效果有什么不同" aria-hidden="true">#</a> 19、rgba() 和 opacity 的透明效果有什么不同？</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1、opacity 作用于元素，以及元素内的所有内容的透明度，<span class="token function">rgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span>只作用于元素的颜色或其背景色
2、设置rgba透明的元素的子元素不会继承透明效果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_20、如何设置比12px还要小的字体" tabindex="-1"><a class="header-anchor" href="#_20、如何设置比12px还要小的字体" aria-hidden="true">#</a> 20、如何设置比12px还要小的字体</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span>
   <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_21、z-index" tabindex="-1"><a class="header-anchor" href="#_21、z-index" aria-hidden="true">#</a> 21、z-index</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> z-index就是堆叠上下文，它规定一个元素的堆叠顺序。一般来说，拥有更高堆叠顺序的元素会处于较低堆叠元素的前面。
1 z-index堆叠上下文只有在postion:relative/absolute/fixed脱离文档流控制时才生效，static时无效。
2 当父元素和子元素都处于堆叠上下文时，子元素继承父元素的优先级，故父元素大的就大，如果父元素没有处于堆叠上3 3 下文时，即z-index:auto;或者position:static;时，子元素不会继承父元素的优先级。
4 z-index为0时依然处于堆叠上下文中，比负值高，比正值低。
5 z-index为负值时不仅会处于z-index为0和正值元素的后面，还会处于非堆叠元素的后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4>`,44),c=[t];function l(p,d){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","01-移动web高频面试题.html.vue"]]);export{r as default};
