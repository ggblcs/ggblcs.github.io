import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_05-ajax阶段高频面试题-1" tabindex="-1"><a class="header-anchor" href="#_05-ajax阶段高频面试题-1" aria-hidden="true">#</a> 05 -ajax阶段高频面试题(1)</h1><h2 id="前端面试题" tabindex="-1"><a class="header-anchor" href="#前端面试题" aria-hidden="true">#</a> 前端面试题</h2><h3 id="_1、http和https的区别" tabindex="-1"><a class="header-anchor" href="#_1、http和https的区别" aria-hidden="true">#</a> 1、http和https的区别</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span>
  <span class="token number">1</span><span class="token punctuation">.</span>https协议需要到<span class="token constant">CA</span>申请证书，一般免费证书较少，因而需要一定费用。
  <span class="token number">2</span><span class="token punctuation">.</span>http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl<span class="token operator">/</span>tls加密传输协议。
  <span class="token number">3</span><span class="token punctuation">.</span>http和https使用的是完全不同的连接方式，用的端口也不一样，前者是<span class="token number">80</span>，后者是<span class="token number">443</span>。
  <span class="token number">4</span><span class="token punctuation">.</span>http的连接很简单，是无状态的；<span class="token constant">HTTPS</span>协议是由<span class="token constant">SSL</span><span class="token operator">/</span><span class="token constant">TLS</span><span class="token operator">+</span><span class="token constant">HTTP</span>协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、get-和post的区别" tabindex="-1"><a class="header-anchor" href="#_2、get-和post的区别" aria-hidden="true">#</a> 2、get 和post的区别</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> <span class="token keyword">get</span>
			<span class="token number">1.</span> 在url后面拼接参数<span class="token punctuation">,</span>只能以文本的形式传递数据
			<span class="token number">2.</span> 传递的数据量小<span class="token punctuation">,</span>4KB左右
			<span class="token number">3.</span> 安全性低<span class="token punctuation">,</span> 会将数据显示在地址栏
			<span class="token number">4.</span> 速度快<span class="token punctuation">,</span>通常用于安全性要求不高的请求
			<span class="token number">5.</span> 会缓存数据
	post
		    <span class="token number">1.</span> 安全性比较高
			<span class="token number">2.</span> 传递数据量大<span class="token punctuation">,</span>请求对数据长度没有要求
			<span class="token number">3.</span> 请求不会被缓存<span class="token punctuation">,</span>也不会保留在浏览器历史记录里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、项目中常遇到的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#_3、项目中常遇到的状态码有哪些" aria-hidden="true">#</a> 3、项目中常遇到的状态码有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span>     <span class="token number">200</span>  请求成功<span class="token punctuation">,</span>  <span class="token number">2</span>开头的异步表示请求成功
		<span class="token number">304</span>  请求被允许<span class="token punctuation">,</span>但请求内容没有改变<span class="token punctuation">,</span> <span class="token number">3</span>开头的一般请求完成
		<span class="token number">400</span>  请求格式错误<span class="token punctuation">,</span>  <span class="token number">4</span>开头的一般表示请求错误
		<span class="token number">404</span>  <span class="token function">请求的资源</span><span class="token punctuation">(</span>网页<span class="token punctuation">)</span>不存在<span class="token punctuation">,</span>  
		<span class="token number">500</span>  内部服务器错误<span class="token punctuation">,</span>  <span class="token number">5</span>开头的一般都是指服务器错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、jsonp的原理-以及优缺点" tabindex="-1"><a class="header-anchor" href="#_4、jsonp的原理-以及优缺点" aria-hidden="true">#</a> 4、jsonp的原理？以及优缺点</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 原理<span class="token operator">:</span> 利用script标签的src属性具有天然可跨域的特性，由服务端返回一个预先定义好的Javascript函数的调用，并且将服务器数据以该函数参数的形式响应给浏览器<span class="token punctuation">.</span>
		<span class="token literal-property property">优点</span><span class="token operator">:</span> 完美解决在测试或者开发中获取不同域下的数据<span class="token punctuation">,</span>用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住<span class="token constant">JSON</span>数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。
		缺点：Jsonp只支持<span class="token keyword">get</span>请求而不支持post 请求<span class="token punctuation">,</span>也即是说如果想传给后台一个json 格式的数据<span class="token punctuation">,</span>此时问题就来了<span class="token punctuation">,</span> 浏览器会报一个http状态码<span class="token number">41</span>错误<span class="token punctuation">,</span>告诉你请求格式不正确<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、什么是同源策略-怎么解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_5、什么是同源策略-怎么解决跨域问题" aria-hidden="true">#</a> 5、什么是同源策略？怎么解决跨域问题</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 同源策略<span class="token operator">:</span> 同源策略是浏览器的一种安全策略<span class="token punctuation">,</span> 所谓同源是指域名、协议、端口完全相同，不同源则跨域。
   <span class="token literal-property property">解决跨域的方法</span><span class="token operator">:</span> 
			<span class="token number">1.</span> 通过jsonp跨域
			<span class="token number">2.</span> 跨域资源共享（<span class="token constant">CORS</span>  Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>bob<span class="token punctuation">.</span>com）
			<span class="token number">3.</span> nginx代理跨域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、你对websocket了解哪些" tabindex="-1"><a class="header-anchor" href="#_6、你对websocket了解哪些" aria-hidden="true">#</a> 6、你对WebSocket了解哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> WebSocket 是<span class="token constant">HTML5</span>一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯，它建立在<span class="token constant">TCP</span>之上，同<span class="token constant">HTTP</span>一样通过<span class="token constant">TCP</span>来传输数据，但是它和<span class="token constant">HTTP</span>最大不同是：
	<span class="token number">1.</span> WebSocket是一种双向通信协议，在建立连接后，WebSocket服务器和Browser<span class="token operator">/</span>Client Agent都能主动的向对方发送或接收数据，就像Socket一样；
	<span class="token number">2.</span> WebSocket需要类似<span class="token constant">TCP</span>的客户端和服务器端通过握手连接连接成功后才能相互通信。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、在地址栏输入网址-到数据返回的过程是什么" tabindex="-1"><a class="header-anchor" href="#_7、在地址栏输入网址-到数据返回的过程是什么" aria-hidden="true">#</a> 7、在地址栏输入网址，到数据返回的过程是什么？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span>  <span class="token number">1.</span> 输入url地址后，首先进行<span class="token constant">DNS</span>解析，将相应的域名解析为<span class="token constant">IP</span>地址。
     <span class="token number">2.</span> 根据<span class="token constant">IP</span>地址去寻找相应的服务器。
     <span class="token number">3.</span> 与服务器进行<span class="token constant">TCP</span>的三次握手，建立连接。
     <span class="token number">4.</span> 客户端发送请求，找到相应的资源库。
     <span class="token number">5.</span> 客户端拿到数据，进行相应的渲染。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、原生-ajax-请求的步骤" tabindex="-1"><a class="header-anchor" href="#_8、原生-ajax-请求的步骤" aria-hidden="true">#</a> 8、原生 ajax 请求的步骤</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：<span class="token number">1.</span>创建异步对象 <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token number">2.</span>设置请求行  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token number">3.</span>设置请求头  xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token keyword">get</span>请求没有请求头
    <span class="token number">4.</span>设置请求体  xhr<span class="token punctuation">.</span>send      <span class="token keyword">get</span>请求没有请求体<span class="token punctuation">,</span>参数为<span class="token keyword">null</span>
    <span class="token number">5.</span>监视异步对象的状态变化   xhr<span class="token punctuation">.</span><span class="token function">onreadystatechange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、怎么理解三次握手" tabindex="-1"><a class="header-anchor" href="#_9、怎么理解三次握手" aria-hidden="true">#</a> 9、怎么理解三次握手</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>字段	      含义
<span class="token constant">URG</span>	   紧急指针是否有效。为<span class="token number">1</span>，表示某一位需要被优先处理
<span class="token constant">ACK</span>	   确认号是否有效，一般置为<span class="token number">1</span>。
<span class="token constant">PSH</span>	   提示接收端应用程序立即从<span class="token constant">TCP</span>缓冲区把数据读走。
<span class="token constant">RST</span>	   对方要求重新建立连接，复位。
<span class="token constant">SYN</span>	   请求建立连接，并在其序列号的字段进行序列号的初始值设定。建立连接，设置为<span class="token number">1</span>
<span class="token constant">FIN</span>    希望断开连接。

<span class="token number">1</span>、三次握手
    第一次握手：建立连接时，客户端发送syn包到服务器，等待服务器确认。
    第二次握手：服务器收到syn包，必须确认客户的<span class="token constant">SYN</span>，同时自己也发送一个<span class="token constant">SYN</span>包（syn<span class="token operator">=</span>y）到客户端
    第三次握手：客户端收到服务器的<span class="token constant">SYN</span><span class="token operator">+</span><span class="token constant">ACK</span>包，向服务器发送确认包<span class="token constant">ACK</span>，此包发送完毕，客户端和服务器进入（<span class="token constant">TCP</span>连接成功）状态，完成三次握手
   （通俗：主机<span class="token number">1</span>告诉主机<span class="token number">2</span>，我可以向你请求数据吗。主机<span class="token number">2</span>告诉主机<span class="token number">1</span>，可以请求数据。主机<span class="token number">1</span>告诉主机<span class="token number">2</span>，那我来请求数据了，请求完成，实现三次握手）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、怎么理解四次挥手" tabindex="-1"><a class="header-anchor" href="#_10、怎么理解四次挥手" aria-hidden="true">#</a> 10、怎么理解四次挥手</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、四次挥手
    第一次分手：主机<span class="token number">1</span>（可以使客户端，也可以是服务器端）向主机<span class="token number">2</span>发送一个<span class="token constant">FIN</span>报文段；此时，主机<span class="token number">1</span>进入<span class="token constant">FIN_WAIT_1</span>状态；这表示主机<span class="token number">1</span>没有数据要发送给主机<span class="token number">2</span>了。
    第二次分手：主机<span class="token number">2</span>收到了主机<span class="token number">1</span>发送的<span class="token constant">FIN</span>报文段，向主机<span class="token number">1</span>回一个<span class="token constant">ACK</span>报文段，主机<span class="token number">1</span>进入<span class="token constant">FIN_WAIT_2</span>状态；主机<span class="token number">2</span>告诉主机<span class="token number">1</span>，我“同意”你的关闭请求。
    第三次分手：主机<span class="token number">2</span>向主机<span class="token number">1</span>发送<span class="token constant">FIN</span>报文段，请求关闭连接，同时主机<span class="token number">2</span>进入<span class="token constant">LAST_ACK</span>状态。
    第四次分手：主机<span class="token number">1</span>收到主机<span class="token number">2</span>发送的<span class="token constant">FIN</span>报文段，向主机<span class="token number">2</span>发送<span class="token constant">ACK</span>报文段，然后主机<span class="token number">1</span>进入<span class="token constant">TIME_WAIT</span>状态；主机<span class="token number">2</span>收到主机<span class="token number">1</span>的<span class="token constant">ACK</span>报文段以后，就关闭连接；此时，主机<span class="token number">1</span>等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机<span class="token number">1</span>也可以关闭连接了。
    （通俗：主机<span class="token number">1</span>告诉主机<span class="token number">2</span>，我没有数据要发送了，希望断开连接。主机<span class="token number">2</span>接到请求后说，同意断开。主机<span class="token number">2</span>告诉主机<span class="token number">1</span>可以关闭连接了。主机<span class="token number">1</span>接到可以关闭的指令后，关闭连接，四次挥手完成）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、axios的特点有哪些" tabindex="-1"><a class="header-anchor" href="#_11、axios的特点有哪些" aria-hidden="true">#</a> 11、axios的特点有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、Axios 是一个基于 promise 的 <span class="token constant">HTTP</span> 库，支持promise所有的<span class="token constant">API</span>
<span class="token number">2</span>、它可以拦截请求和响应
<span class="token number">3</span>、它可以转换请求数据和响应数据，并对响应回来的内容自动转换成 <span class="token constant">JSON</span>类型的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h3><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h3>`,28),c=[p];function o(l,r){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","05-ajax阶段高频面试题(1).html.vue"]]);export{d as default};
