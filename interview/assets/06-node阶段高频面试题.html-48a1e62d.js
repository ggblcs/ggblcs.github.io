import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},d=a(`<h1 id="_06-node阶段高频面试题" tabindex="-1"><a class="header-anchor" href="#_06-node阶段高频面试题" aria-hidden="true">#</a> 06 -node阶段高频面试题</h1><h2 id="前端面试题" tabindex="-1"><a class="header-anchor" href="#前端面试题" aria-hidden="true">#</a> 前端面试题</h2><h3 id="_1、对this的理解" tabindex="-1"><a class="header-anchor" href="#_1、对this的理解" aria-hidden="true">#</a> 1、对this的理解</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>答: this是个关键字,它的指向和函数的调用方式有关
1. 函数调用模式, this指向window
2. 构造函数调用模式, this指向新创建的实例对象
3. 方法调用模式, this指向调用方法的对象
4. 上下文调用模式, call和apply方法中, this指向方法内的第一个参数
                  bind方法中, bind创建的新函数的this绑定为bind方法中新的函数
5. 在事件处理函数中,this指向触发事件的当前元素
6. 定时器中,this指向window
7. 箭头函数中没有this指向问题,它的this和外层作用域的this保持一致
8. 匿名函数中的this总是指向window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、new操作符做了什么" tabindex="-1"><a class="header-anchor" href="#_2、new操作符做了什么" aria-hidden="true">#</a> 2、new操作符做了什么</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>答:  1. 创建一个新对象
	2. 函数内部的this指向这个对象
	3. 执行函数体
	4. 自动返回这个函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、git如何管理一个项目" tabindex="-1"><a class="header-anchor" href="#_3、git如何管理一个项目" aria-hidden="true">#</a> 3、git如何管理一个项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、git管理项目流程
答: 1、git init初始化git仓库（新项目才有这一步）
    2、git clone将远程仓库的项目资料下载下来
    3、git checkout -b dev (dev 为本地分支名）
    4、git add .将工作区文件存在暂存区
    4、git commit -m  &quot;&quot;从暂存区存到仓储区
    5、git checkout master切到master分支
    6、git merge dev 合并分支,合并后要将分支删除
    7、使用git push将其上传到远程仓库
    8、第二上班，先pull一下，更新最新代码
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、git如何解决合并冲突" tabindex="-1"><a class="header-anchor" href="#_4、git如何解决合并冲突" aria-hidden="true">#</a> 4、git如何解决合并冲突</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git解决合并冲突
答：冲突的原因：代码提交的时候，在当前行有新的代码要加入，就会出现冲突。例如：<span class="token number">20</span>行已经有代码了，但是合并的的代码<span class="token number">20</span>行也是有代码，这样就会出现冲突。
	解决办法：如果是双方的代码是不同的业务，那就保留双方双方更改（vscode有提示）。如果是重复的业务逻辑，那就选择采用当前更改（vscode有提示）。
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、什么是promise-特点是什么" tabindex="-1"><a class="header-anchor" href="#_5、什么是promise-特点是什么" aria-hidden="true">#</a> 5、什么是promise，特点是什么</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	首先，它是一个对象，也就是说与其他JavaScript对象的用法，没有什么两样；它使得异步操作具备同步操作的效果，使得程序具备正常的同步运行的流程，回调函数不必再一层层嵌套。
	简单说，它的思想是，每一个异步任务立刻返回一个Promise对象，由于是立刻返回，所以可以采用同步操作的流程。这个Promises对象有一个then方法，允许指定回调函数，在异步任务完成后调用。
    
 特点：
    <span class="token number">1</span>、Promise对象只有三种状态。
        异步操作“未完成”（pending）
        异步操作“已完成”（resolved，又称fulfilled）
        异步操作“失败”（rejected）
        异步操作成功，Promise对象传回一个值，状态变为resolved。
        异步操作失败，Promise对象抛出一个错误，状态变为rejected。
    <span class="token number">2</span>、promise的回调是同步的，then是异步的
    <span class="token number">3</span>、可以链式调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、promise的方法有哪些-能说明其作用" tabindex="-1"><a class="header-anchor" href="#_6、promise的方法有哪些-能说明其作用" aria-hidden="true">#</a> 6、promise的方法有哪些，能说明其作用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>原型上的方法：
<span class="token number">1</span>、Promise<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span>）作用是为 Promise 实例添加状态改变时的回调函数。接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。
    <span class="token number">2</span>）返回的是另一个Promise对象，后面还可以接着调用then方法。
<span class="token number">2</span>、Promise<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span>）用于指定发生错误时的回调函数。
    <span class="token number">2</span>）返回的也是一个 Promise 对象，因此还可以接着调用then方法
<span class="token number">3</span>、Promise<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span>）finally方法用于指定不管 Promise 对象最后状态如何，都会执行的回调函数。
    <span class="token number">2</span>）finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。

自身<span class="token constant">API</span><span class="token operator">:</span>
<span class="token number">1</span>、Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span>）不带参数传递 — 返回一个新的状态为resolve的promise对象
    <span class="token number">2</span>）参数是一个 Promise 实例— 返回 当前的promise实例
<span class="token number">2</span>、Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span><span class="token punctuation">)</span>返回的是一个值
    <span class="token number">2</span>）返回的值会传递到下一个then的resolve方法参数中
<span class="token number">3</span>、Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	<span class="token number">1</span>）并行执行异步操作的能力
    <span class="token number">2</span>）所有异步操作执行完后才执行回调
<span class="token number">4</span>、Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token number">1</span>）那个结果返回来的快就是，那个结果，不管结果是成功还是失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、async和await是干什么的" tabindex="-1"><a class="header-anchor" href="#_7、async和await是干什么的" aria-hidden="true">#</a> 7、async和await是干什么的</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、<span class="token keyword">async</span> 用于申明一个 <span class="token keyword">function</span> 是异步的，而 <span class="token keyword">await</span> 用于等待一个异步方法执行完成。
<span class="token number">2</span>、<span class="token keyword">await</span> 只能出现在 <span class="token keyword">async</span> 函数中。
<span class="token number">3</span>、<span class="token keyword">async</span> 函数返回的是一个 Promise 对象，后面可以用then方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、怎么理解事件循环机制-event-loop" tabindex="-1"><a class="header-anchor" href="#_8、怎么理解事件循环机制-event-loop" aria-hidden="true">#</a> 8、怎么理解事件循环机制(Event Loop)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token number">1</span>、JavaScript 是一门单线程语言<span class="token punctuation">.</span>单线程可能会出现阻塞的情况，所以js分了同步任务和异步任务。
    <span class="token number">2</span>、同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入 Event Queue（事件队列） 。主线程内的任务执行完毕为空，会去 Event Queue 读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event <span class="token function">Loop</span> <span class="token punctuation">(</span>事件循环<span class="token punctuation">)</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、token无感刷新" tabindex="-1"><a class="header-anchor" href="#_9、token无感刷新" aria-hidden="true">#</a> 9、token无感刷新</h3><p>!---<a href="C:%5CUsers%5C%E9%98%BF%E6%9C%B1%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230109162900551.png">image-20230109162900551</a></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>【1】发送请求获取个人资料数据

【2】接口返回 401，即 token 失效了

【3】在响应拦截器中，统一处理 401 错误，进行 token 换新操作

【4】将获取的新 token 存入本地缓存

【5】重新发送获取个人资料的请求，完成数据获取【关键操作】

【6】如整个过程中出现了什么异常，一般情况就是连 refresh_token 也过期了，换新 token 失败，此时也要进行错误处理：清除 token 并跳转到登录页面即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[d];function t(c,r){return s(),e("div",null,l)}const u=n(i,[["render",t],["__file","06-node阶段高频面试题.html.vue"]]);export{u as default};
