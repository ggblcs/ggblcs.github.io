import{_ as n,p as a,q as s,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_03-webapi阶段高频面试题" tabindex="-1"><a class="header-anchor" href="#_03-webapi阶段高频面试题" aria-hidden="true">#</a> 03 -webapi阶段高频面试题</h1><h2 id="前端面试题" tabindex="-1"><a class="header-anchor" href="#前端面试题" aria-hidden="true">#</a> 前端面试题</h2><h4 id="_1、localstorage、sessionstorage和cookie的区别" tabindex="-1"><a class="header-anchor" href="#_1、localstorage、sessionstorage和cookie的区别" aria-hidden="true">#</a> 1、localStorage、sessionStorage和cookie的区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 共同点<span class="token operator">:</span> 都是可以用来存储数据
	<span class="token literal-property property">区别</span><span class="token operator">:</span> 
	<span class="token number">1.</span> <span class="token literal-property property">请求不同</span><span class="token operator">:</span> 
		cookie 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
				sessionStorage 和 localStorage不会自动把数据发给服务器，仅在本地保存。
	<span class="token number">2.</span> <span class="token literal-property property">存储大小限制也不同</span><span class="token operator">:</span> 
		cookie 数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
		sessionStorage 和 localStorage虽然也有存储大小的限制，但比cookie大得多，sessionStorage约5M、localStorage约5M 。
	<span class="token number">3.</span> <span class="token literal-property property">数据有效期不同</span><span class="token operator">:</span> 
		 sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持； 
		 localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
		 cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、什么是事件代理-事件委托" tabindex="-1"><a class="header-anchor" href="#_2、什么是事件代理-事件委托" aria-hidden="true">#</a> 2、什么是事件代理（事件委托）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、事件代理（事件委托），是JavaScript中绑定事件的常用技巧。顾名思义，“事件代理”，就是把原本需要绑定的事件委托给父元素，让父元素负责事件监听。事件代理的原理是<span class="token constant">DOM</span>元素的事件冒泡

事件委托的好处：
减少事件数量，提高性能

使用场景：
<span class="token number">1</span>、动态创建的元素
<span class="token number">2</span>、大量的子元素需要注册事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、什么是事件流" tabindex="-1"><a class="header-anchor" href="#_3、什么是事件流" aria-hidden="true">#</a> 3、什么是事件流</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>事件流是指从页面接收事件的顺序。也就是说，当一个事件发生时，这个事件的传播过程就是事件流。
事件流一般包含三个阶段：捕获  目标  冒泡
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、js的运行机制是什么" tabindex="-1"><a class="header-anchor" href="#_4、js的运行机制是什么" aria-hidden="true">#</a> 4、js的运行机制是什么</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>答：js是单线程执行的，页面加载时，会自上而下执行主线程上的同步任务，当主线程代码执行完毕时，才开始执行在任务队列中的异步任务。具体如下  
    1.所有同步任务都在主线程上执行，形成一个执行栈。
    2.主线程之外，还存在一个&quot;任务队列(eventloop队列或者消息队列)&quot;。只要异步任务有了运行结果，就在&quot;任务队列&quot;之中放置一个事件。
    3.一旦&quot;执行栈&quot;中的所有同步任务执行完毕，系统就会读取&quot;任务队列&quot;，看看里面有哪些事件。哪些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
    4.主线程不断重复上面的第三步。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、异步函数有哪些" tabindex="-1"><a class="header-anchor" href="#_5、异步函数有哪些" aria-hidden="true">#</a> 5、异步函数有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>JavaScript 中常见的异步函数有：定时器，事件函数和 ajax 等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、伪数组有哪些" tabindex="-1"><a class="header-anchor" href="#_6、伪数组有哪些" aria-hidden="true">#</a> 6、伪数组有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、参数 arguments，
<span class="token number">2</span>、<span class="token constant">DOM</span> 对象列表（比如通过 document<span class="token punctuation">.</span>getElementsByTags 得到的列表）、childNodes也是伪数组
<span class="token number">3</span>、jQuery 对象（比如 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、真数组和伪数组的区别" tabindex="-1"><a class="header-anchor" href="#_7、真数组和伪数组的区别" aria-hidden="true">#</a> 7、真数组和伪数组的区别</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>伪数组：
<span class="token number">1</span>、拥有length属性
<span class="token number">2</span>、不具有数组的方法
<span class="token number">3</span>、伪数组是一个Object，真数组是Array
<span class="token number">4</span>、伪数组的长度不可变，真数组的长度是可变的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、伪数组怎么转真数组" tabindex="-1"><a class="header-anchor" href="#_8、伪数组怎么转真数组" aria-hidden="true">#</a> 8、伪数组怎么转真数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、<span class="token keyword">let</span> newArr <span class="token operator">=</span> Array<span class="token punctuation">.</span>protype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>伪数组<span class="token punctuation">)</span>
<span class="token number">2</span>、<span class="token keyword">let</span> newArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>伪数组<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">ES6</span>的新语法
<span class="token number">3</span>、<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>伪数组<span class="token punctuation">]</span>，使用扩展运算符<span class="token punctuation">,</span>也是<span class="token constant">ES6</span>的语法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、dom操作常用的api有哪些" tabindex="-1"><a class="header-anchor" href="#_9、dom操作常用的api有哪些" aria-hidden="true">#</a> 9、DOM操作常用的API有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、创建节点
	createElement
	cloneNode
    
<span class="token number">2</span>、页面修改
	appendChild
	insertBefore
	removeChild
	replaceChild

<span class="token number">3</span>、节点查询
	document<span class="token punctuation">.</span>querySelector
	document<span class="token punctuation">.</span>querySelectorAll
	document<span class="token punctuation">.</span>getElementById
	document<span class="token punctuation">.</span>getElementsByTagName

<span class="token number">4</span>、节点关系
  父关系型：parentNode
  子关系型：children
  
<span class="token number">5</span>、元素属性
	设置：setAttribute
    获取：getAttribute

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、如何检测浏览器的类型" tabindex="-1"><a class="header-anchor" href="#_10、如何检测浏览器的类型" aria-hidden="true">#</a> 10、如何检测浏览器的类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>可以通过检测navigator<span class="token punctuation">.</span>userAgent  在通过不通浏览器的不同来检测
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11、javascript计时函数" tabindex="-1"><a class="header-anchor" href="#_11、javascript计时函数" aria-hidden="true">#</a> 11、JavaScript计时函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span><span class="token function">、setInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 周期执行函数。间隔指定的毫秒数不停地执行指定的代码。
  <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法用于停止 <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法执行的函数代码。
  
<span class="token number">2</span><span class="token function">、setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 延迟执行函数。延迟执行指定的函数，只能执行一次
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">方法用于停止执行setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法的函数代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12、如何阻止冒泡和默认行为" tabindex="-1"><a class="header-anchor" href="#_12、如何阻止冒泡和默认行为" aria-hidden="true">#</a> 12、如何阻止冒泡和默认行为</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 阻止冒泡和捕获  e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    阻止默认行为   e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token boolean">false</span>
    注意：addEventListener注册的事件，在高浏览器版本中，<span class="token keyword">return</span> <span class="token boolean">false</span>将没有效果，必须要用事件对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13、原生注册事件的方式有哪些-区别是什么" tabindex="-1"><a class="header-anchor" href="#_13、原生注册事件的方式有哪些-区别是什么" aria-hidden="true">#</a> 13、原生注册事件的方式有哪些？区别是什么</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 注册方式
		  <span class="token number">1.</span> on <span class="token operator">+</span> 事件名称
		  <span class="token number">2.</span> addEventListener
		<span class="token literal-property property">区别</span><span class="token operator">:</span> 
			<span class="token number">1.</span> 使用on注册事件<span class="token punctuation">,</span>同一个元素只能注册一个同类型事件<span class="token punctuation">,</span>否则会覆盖。
			<span class="token number">2.</span> addEventListener可以注册同一事件多次<span class="token punctuation">,</span>不会被覆盖。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h3>`,31),l=[t];function r(c,d){return a(),s("div",null,l)}const o=n(i,[["render",r],["__file","03-webapi阶段高频面试题.html.vue"]]);export{o as default};
