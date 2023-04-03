import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_072-eggjs基本使用" tabindex="-1"><a class="header-anchor" href="#_072-eggjs基本使用" aria-hidden="true">#</a> 072 EggJs基本使用</h1><h2 id="_1-eggjs基本使用提炼" tabindex="-1"><a class="header-anchor" href="#_1-eggjs基本使用提炼" aria-hidden="true">#</a> 1.EggJs基本使用提炼</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2</span>.手动安装手动配置
<span class="token number">1.1</span>创建Egg项目
<span class="token function">npm</span> init <span class="token parameter variable">--y</span>
<span class="token function">npm</span> i egg <span class="token parameter variable">--save</span>  <span class="token comment">#egg模块就是egg.js的核心模块</span>
<span class="token function">npm</span> i egg-bin --save-dev    <span class="token comment">#egg-bin模块, 这个模块是用于快速启动项目, 用于本地开发调试的模块</span>
<span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;egg-bin dev&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最简单的基本目录结构下载</p><p>蓝奏云：https://wwa.lanzoui.com/iyXmwu9t7di</p><p>teacher部分的内容也是很值得看一看的。</p><ol><li><p>搭建一个必须的目录结构。</p></li><li><p>路由中<code>router.js</code>暴露时需要传递app参数。</p></li><li><p>controller下的类需要暴露并且继承<code>egg.Controller</code>。</p></li><li><p>controller中的方法必须是异步的。</p></li></ol><h2 id="_2-teacher" tabindex="-1"><a class="header-anchor" href="#_2-teacher" aria-hidden="true">#</a> 2.teacher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Egg.js使用
1.1手动安装手动配置
1.2利用egg脚手架工具安装使用(egg-init)

2.手动安装手动配置
1.1创建Egg项目
npm init --y
npm i egg --save  #egg模块就是egg.js的核心模块
npm i egg-bin --save-dev    #egg-bin模块, 这个模块是用于快速启动项目, 用于本地开发调试的模块
&quot;dev&quot;: &quot;egg-bin dev&quot;

相关参考文档:
https://eggjs.org/zh-cn/intro/quickstart.html
https://eggjs.org/zh-cn/core/development.html

1.2编写Egg项目
egg-example
   ├ app
       ├── controller
       └── router.js
   ├ config
        ├──config.default.js
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/app/router.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在router.js中必须暴露出去一个方法, 这个方法接收一个参数, 这个参数就是服务端的实例对象</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    {
      env: &#39;local&#39;,
      name: &#39;egg-example&#39;,
      baseDir: &#39;C:\\\\Users\\\\Jonathan_Lee\\\\Desktop\\\\Node_Common\\\\egg-example&#39;,
      subdomainOffset: 2,
      config: &#39;&lt;egg config&gt;&#39;,
      controller: &#39;&lt;egg controller&gt;&#39;,
      httpclient: &#39;&lt;egg httpclient&gt;&#39;,
      loggers: &#39;&lt;egg loggers&gt;&#39;,
      middlewares: &#39;&lt;egg middlewares&gt;&#39;,
      router: &#39;&lt;egg router&gt;&#39;,
      serviceClasses: &#39;&lt;egg serviceClasses&gt;&#39;
    }
    * */</span>
    <span class="token comment">// console.log(app);</span>
    <span class="token comment">// 1.从服务端的实例对象中解构出处理路由的对象和处理控制器的对象</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>router<span class="token punctuation">,</span> controller<span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">;</span>
    <span class="token comment">// 2.利用处理路由的对象监听路由的请求</span>
    <span class="token comment">//   由于EggJS是基于KOA的, 所以监听方式和KOA一样</span>
    <span class="token comment">/*
    在EggJS中不用导入控制器, 只要拿到了从服务器实例中解构出来的控制器对象
    就相当于拿到了controller目录, 我们就可以通过点语法拿到这个目录中的文件
    只要拿到了controller目录中的文件, 我们就可以通过点语法拿到这个文件中的方法
    * */</span>
    router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>home<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/app/controller/home.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span><span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">/*
        egg官网：基础--&gt;控制器
        在EggJS中, EggJS会自动给控制器的this挂载一些属性
        this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
        this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
        this.config：应用运行时的配置项。
        this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。
        * */</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;www.it666.com&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HomeController<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-目录结构" tabindex="-1"><a class="header-anchor" href="#_3-目录结构" aria-hidden="true">#</a> 3.目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[l];function d(t,r){return s(),e("div",null,c)}const v=n(i,[["render",d],["__file","072EggJs基本使用.html.vue"]]);export{v as default};
