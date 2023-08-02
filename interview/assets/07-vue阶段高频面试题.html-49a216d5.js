import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_07-vue阶段高频面试题" tabindex="-1"><a class="header-anchor" href="#_07-vue阶段高频面试题" aria-hidden="true">#</a> 07 -vue阶段高频面试题</h1><h5 id="_1、怎么理解mvvm这种设计模式" tabindex="-1"><a class="header-anchor" href="#_1、怎么理解mvvm这种设计模式" aria-hidden="true">#</a> 1、怎么理解mvvm这种设计模式</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> Model–View–ViewModel （<span class="token constant">MVVM</span>） 是一个软件架构设计模式，是一种简化用户界面的事件驱动编程方式。
<span class="token constant">MVVM</span>
    <span class="token constant">M</span> Model 模型 指的是数据层
    <span class="token constant">V</span> View  视图 指的是用户页面
    <span class="token constant">VM</span> ViewModel 视图模型
    视图模型是<span class="token constant">MVVM</span>模式的核心，它是连接view和model的桥梁，<span class="token constant">MVVM</span>实现了view和model的自动同步，当model的属性改变时，我们不用自己手动操作<span class="token constant">DOM</span>元素，来改变view的显示，反之亦然，我们称之为数据的双向绑定。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、v-if和v-show的区别-使用场景区别" tabindex="-1"><a class="header-anchor" href="#_2、v-if和v-show的区别-使用场景区别" aria-hidden="true">#</a> 2、v-if和v-show的区别，使用场景区别</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> v<span class="token operator">-</span><span class="token keyword">if</span>和v<span class="token operator">-</span>show看起来似乎差不多，当条件不成立时，其所对应的标签元素都不可见，但是这两个选项是有区别的<span class="token operator">:</span>
<span class="token number">1</span>、v<span class="token operator">-</span><span class="token keyword">if</span>在条件切换时，会对标签进行适当的创建和销毁，而v<span class="token operator">-</span>show则仅在初始化时加载一次，因此v<span class="token operator">-</span><span class="token keyword">if</span>的开销相对来说会比v<span class="token operator">-</span>show大。
<span class="token number">2</span>、v<span class="token operator">-</span><span class="token keyword">if</span>是惰性的，只有当条件为真时才会真正渲染标签；如果初始条件不为真，则v<span class="token operator">-</span><span class="token keyword">if</span>不会去渲染标签。v<span class="token operator">-</span>show则无论初始条件是否成立，都会渲染标签，它仅仅做的只是简单的<span class="token constant">CSS</span>（display）切换。

<span class="token number">3</span>、 v<span class="token operator">-</span><span class="token keyword">if</span>适用于不需要频繁切换元素显示和隐藏的情况
    v<span class="token operator">-</span>show适用于需要频繁切换元素的显示和隐藏的场景。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、事件修饰符和按键修饰符有哪些" tabindex="-1"><a class="header-anchor" href="#_3、事件修饰符和按键修饰符有哪些" aria-hidden="true">#</a> 3、事件修饰符和按键修饰符有哪些</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>事件修饰符：
	<span class="token punctuation">.</span>prevent  阻止事件默认行为
    <span class="token punctuation">.</span>stop     阻止事件冒泡
    <span class="token punctuation">.</span>capture  设置事件捕获机制
    <span class="token punctuation">.</span>self     只有点击元素自身才能触发事件
    <span class="token punctuation">.</span>once     事件只触发一次
 按键修饰符：
    tab enter esc  space <span class="token keyword">delete</span><span class="token punctuation">(</span>捕获<span class="token string">&quot;删除&quot;</span>和<span class="token string">&quot;空格&quot;</span>键<span class="token punctuation">)</span> up down left right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、v-model修饰符有哪些" tabindex="-1"><a class="header-anchor" href="#_4、v-model修饰符有哪些" aria-hidden="true">#</a> 4、v-model修饰符有哪些</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token punctuation">.</span>trim   去除首尾空格
    <span class="token punctuation">.</span>lazy   只在输入框失去焦点或按回车键时更新内容，不是实时更新
    <span class="token punctuation">.</span>number <span class="token function">将数据转换成number类型</span><span class="token punctuation">(</span>原本是字符串类型<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、v-for中为什么要加key" tabindex="-1"><a class="header-anchor" href="#_5、v-for中为什么要加key" aria-hidden="true">#</a> 5、v-for中为什么要加key</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>作用：
      <span class="token number">1</span><span class="token punctuation">.</span>key的作用主要是为了高效的更新虚拟<span class="token constant">DOM</span>，提高渲染性能。
      <span class="token number">2</span><span class="token punctuation">.</span>key属性可以避免数据混乱的情况出现。
 原理：
      <span class="token number">1</span><span class="token punctuation">.</span>vue实现了一套虚拟<span class="token constant">DOM</span>，使我们可以不直接操作<span class="token constant">DOM</span>元素只操作数据，就可以重新渲染页面，而隐藏在背后的原理是高效的Diff算法   如果根元素不一样 则会删除重建
      <span class="token number">2.</span>当页面数据发生变化时，Diff算法只会比较同一层级的节点；
      <span class="token number">3.</span>如果节点类型不同，直接干掉前面的节点，再创建并插入新的节点，不会再比较这个节点后面的子节点；
        如果节点类型相同，则会重新设置该节点属性，从而实现节点更新
      <span class="token number">4.</span>使用key给每个节点做一个唯一标识，Diff算法就可以正确失败此节点，<span class="token string">&quot;就地更新&quot;</span>找到正确的位置插入新的节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、v-for和v-if的优先级" tabindex="-1"><a class="header-anchor" href="#_6、v-for和v-if的优先级" aria-hidden="true">#</a> ####6、v-for和v-if的优先级</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> v<span class="token operator">-</span><span class="token keyword">for</span>优先级高于v<span class="token operator">-</span><span class="token keyword">if</span>
 如果同时出现v<span class="token operator">-</span><span class="token keyword">for</span>和v<span class="token operator">-</span><span class="token keyword">if</span>，无论判断条件是否成立，都会执行一遍v<span class="token operator">-</span><span class="token keyword">for</span>循环，这样浪费性能，所以要尽可能的避免两者一起使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、组件中的data为什么是函数-new-vue-实例里-data-可以直接是一个对象" tabindex="-1"><a class="header-anchor" href="#_7、组件中的data为什么是函数-new-vue-实例里-data-可以直接是一个对象" aria-hidden="true">#</a> 7、组件中的data为什么是函数,new Vue 实例里，data 可以直接是一个对象</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、组件是用来复用的，组件中的data写成一个函数<span class="token punctuation">,</span>数据以函数返回值形式定义<span class="token punctuation">,</span>函数有独立的作用域，这样每复用一次组件<span class="token punctuation">,</span>就会返回一份新的data<span class="token punctuation">,</span>类似于给每个组件实例创建一个私有的数据空间<span class="token punctuation">,</span>让各个组件实例维护各自的数据。
<span class="token number">2</span>、而单纯的写成对象形式<span class="token punctuation">,</span>由于对象是引用类型，就使得所有组件实例共用了一份data<span class="token punctuation">,</span>就会造成一个变了全都会变的结果。
<span class="token number">3</span>、因为<span class="token keyword">new</span> <span class="token class-name">vue</span>里面的代码是不存在复用的情况，所以可以写成对象形式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、computed和watch的区别是什么" tabindex="-1"><a class="header-anchor" href="#_8、computed和watch的区别是什么" aria-hidden="true">#</a> 8、computed和watch的区别是什么</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>计算属性computed：

<span class="token number">1</span>、支持缓存，只有依赖数据发生改变，才会重新进行计算
<span class="token number">2</span>、不支持异步，当computed内有异步操作时无效，无法监听数据的变化
<span class="token number">3</span>、如果computed需要对数据修改，需要写<span class="token keyword">get</span>和<span class="token keyword">set</span>两个方法，当数据变化时，调用<span class="token keyword">set</span>方法。
<span class="token number">4</span>、computed擅长处理的场景：一个数据受多个数据影响，例如购物车计算总价

侦听属性watch：

<span class="token number">1</span>、不支持缓存，数据变，直接会触发相应的操作；
<span class="token number">2</span>、watch支持异步；监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
<span class="token number">3</span>、immediate：组件加载立即触发回调函数执行
<span class="token number">4</span><span class="token literal-property property">、deep</span><span class="token operator">:</span><span class="token boolean">true</span>的意思就是深入监听，任何修改obj里面任何一个属性都会触发这个监听器里的 handler方法来处理逻辑
<span class="token number">5</span>、watch擅长处理的场景：一个数据影响多个数据，例如搜索框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、组件化和模块化的区别" tabindex="-1"><a class="header-anchor" href="#_9、组件化和模块化的区别" aria-hidden="true">#</a> 9、组件化和模块化的区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、组件相当于库，把一些能在项目里或者不同类型项目中可复用的代码进行工具性的封装。
<span class="token number">2</span>、模块相应于业务逻辑模块，把同一类型项目里的功能逻辑进行进行需求性的封装。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、怎么理解vue中的虚拟dom" tabindex="-1"><a class="header-anchor" href="#_10、怎么理解vue中的虚拟dom" aria-hidden="true">#</a> 10、怎么理解vue中的虚拟DOM</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>原理：	
  用 JavaScript 对象模拟真实 <span class="token constant">DOM</span> 树，对真实 <span class="token constant">DOM</span> 进行抽象；
	diff 算法 — 比较两棵虚拟 <span class="token constant">DOM</span> 树的差异；
	pach 算法 — 将两个虚拟 <span class="token constant">DOM</span> 对象的差异应用到真正的 <span class="token constant">DOM</span> 树。

好处：
	<span class="token number">1</span>、性能优化
    <span class="token number">2</span>、无需手动操作<span class="token constant">DOM</span>
    <span class="token number">3</span>、可以跨平台，服务端渲染等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、怎么理解vue的生命周期" tabindex="-1"><a class="header-anchor" href="#_11、怎么理解vue的生命周期" aria-hidden="true">#</a> 11、怎么理解vue的生命周期</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> vue的生命周期：vue实例从创建到销毁的全过程，这个过程可以分为<span class="token number">3</span>个阶段
    第一阶段：初始化阶段   创建vue实例<span class="token punctuation">,</span>准备数据<span class="token punctuation">,</span>准备模板<span class="token punctuation">,</span>渲染视图
    第二阶段：数据更新阶段 当数据变化时，会进行新旧<span class="token constant">DOM</span>的对比，对比出差异的部分，进行差异化更新。
    第三阶段：实例销毁阶段 当vm<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>被调用，vue实例就会被销毁，释放相关资源，此时再更新数据，视图不会再变化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、vue-钩子函数有哪些-有哪些使用的场景" tabindex="-1"><a class="header-anchor" href="#_12、vue-钩子函数有哪些-有哪些使用的场景" aria-hidden="true">#</a> 12、vue 钩子函数有哪些，有哪些使用的场景</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、各阶段包含钩子： 
    beforeCreate  在data数据注入到vm实例之前，此时vm身上没有数据
    created       在data数据注入到vm实例之前，此时vm身上有数据

    beforeMount   生成的结构替换视图之前，此时<span class="token constant">DOM</span>还没更新
    mounted       生成的结构替换视图之前，此时<span class="token constant">DOM</span>已经更新完成

    beforeUpdate  数据变化了，dom更新之前
    updated       数据变化了，dom更新之后
    
    activated     被keep<span class="token operator">-</span>alive缓存的组件激活时调用
    deactivated   被keep<span class="token operator">-</span>alive缓存的组件停用时调用

    beforeDestroy 实例销毁，是否资源之前
    destroyed     实例销毁，是否资源之后

    这些钩子函数会在vue的生命周期的不同阶段，自动被vue调用

<span class="token number">2</span>、常用的钩子函数使用场景：
    beforeCreate  做loading的一些渲染
    created       结束loading， 发送数据的请求，拿数据
    mounted       可以对dom进行操作
    updated       监视数据的更新
    beforeDestroy 销毁非vue资源，防止内存泄漏，例如清除定时器
    activated     当我们运用了组件缓存时，如果想每次切换都发送一次请求的话，需要把请求函数写在activated中，而写在created或mounted中其只会在首次加载该组件的时候起作用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13、vue-的父组件和子组件生命周期钩子函数执行顺序" tabindex="-1"><a class="header-anchor" href="#_13、vue-的父组件和子组件生命周期钩子函数执行顺序" aria-hidden="true">#</a> 13、Vue 的父组件和子组件生命周期钩子函数执行顺序</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 <span class="token number">4</span> 部分：
  <span class="token number">1</span>）加载渲染过程
     父 beforeCreate <span class="token operator">-</span><span class="token operator">&gt;</span> 父 created <span class="token operator">-</span><span class="token operator">&gt;</span> 父 beforeMount <span class="token operator">-</span><span class="token operator">&gt;</span> 子 beforeCreate <span class="token operator">-</span><span class="token operator">&gt;</span> 子 created <span class="token operator">-</span><span class="token operator">&gt;</span> 子 beforeMount <span class="token operator">-</span><span class="token operator">&gt;</span> 子 mounted <span class="token operator">-</span><span class="token operator">&gt;</span> 父 mounted
  <span class="token number">2</span>）子组件更新过程
     父 beforeUpdate <span class="token operator">-</span><span class="token operator">&gt;</span> 子 beforeUpdate <span class="token operator">-</span><span class="token operator">&gt;</span> 子 updated <span class="token operator">-</span><span class="token operator">&gt;</span> 父 updated
  <span class="token number">3</span>）父组件更新过程
     父 beforeUpdate <span class="token operator">-</span><span class="token operator">&gt;</span> 父 updated
  <span class="token number">4</span>）销毁过程
  父 beforeDestroy <span class="token operator">-</span><span class="token operator">&gt;</span> 子 beforeDestroy <span class="token operator">-</span><span class="token operator">&gt;</span> 子 destroyed <span class="token operator">-</span><span class="token operator">&gt;</span> 父 destroyed 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14、vue组件传值的方式" tabindex="-1"><a class="header-anchor" href="#_14、vue组件传值的方式" aria-hidden="true">#</a> 14、vue组件传值的方式</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、父传子
    通过props传递
    父组件： <span class="token operator">&lt;</span>child <span class="token operator">:</span>list <span class="token operator">=</span> <span class="token string">&#39;list&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token literal-property property">子组件</span><span class="token operator">:</span> props<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>接收数据<span class="token punctuation">,</span>接受之后使用和data中定义数据使用方式一样

<span class="token number">2</span>、子传父
	<span class="token function">在父组件中给子组件绑定一个自定义的事件，子组件通过$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>触发该事件并传值。
    父组件： <span class="token operator">&lt;</span>child @receive <span class="token operator">=</span> <span class="token string">&#39;getData&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>value就是接收的值<span class="token punctuation">}</span>
    <span class="token literal-property property">子组件</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;receive&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>

<span class="token number">3</span>、兄弟组件传值
	通过中央通信 <span class="token keyword">let</span> bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token constant">A</span><span class="token literal-property property">组件：methods</span> <span class="token operator">:</span><span class="token punctuation">{</span> 
    	    <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;getData&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
              <span class="token punctuation">}</span> 发送
    <span class="token constant">B</span><span class="token function">组件：created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>‘getData’<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>value就是接收的数据<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> 进行数据接收

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15、-nexttick是什么-原理是什么" tabindex="-1"><a class="header-anchor" href="#_15、-nexttick是什么-原理是什么" aria-hidden="true">#</a> 15、$nextTick是什么？原理是什么</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>背景：
	<span class="token number">1</span>、简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
    
定义：
	<span class="token number">2</span>、在下次 <span class="token constant">DOM</span> 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 <span class="token constant">DOM</span><span class="token function">。nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，是将回调函数延迟在下一次dom更新数据后调用，简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数。
    
原理
	<span class="token number">3</span>、vue用异步队列的方式来控制<span class="token constant">DOM</span>更新和nextTick回调先后执行。
	简单来说，nextTick是做了promise加上setTimeout的封装<span class="token punctuation">,</span>利用事件换行机制，来确保当nextTick出现时，都是在我们所有操作<span class="token constant">DOM</span>更新之后的。

场景：
	<span class="token number">4.1</span> 点击获取元素宽度
    <span class="token number">4.2</span> 使用swiper插件通过 ajax 请求图片后的滑动问题
    <span class="token number">4.3</span> 点击按钮显示原本以 v<span class="token operator">-</span>show <span class="token operator">=</span> <span class="token boolean">false</span> 隐藏起来的输入框，并获取焦点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_16、vue是如何获取dom" tabindex="-1"><a class="header-anchor" href="#_16、vue是如何获取dom" aria-hidden="true">#</a> ####16、vue是如何获取DOM</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、先给标签设置一个ref值，再通过<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>domName获取，这个操作要在mounted阶段进行。
<span class="token number">2</span>、例如：
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">const</span> dom <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>test 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17、v-on可以监听多个方法吗" tabindex="-1"><a class="header-anchor" href="#_17、v-on可以监听多个方法吗" aria-hidden="true">#</a> 17、v-on可以监听多个方法吗</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>可以
例如：
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&quot;{ input:onInput,focus:onFocus }&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18、谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#_18、谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 18、谈谈你对 keep-alive 的了解</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、keep<span class="token operator">-</span>alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染
<span class="token number">2</span>、一般结合路由和动态组件一起使用，用于缓存组件
<span class="token number">3</span>、对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated
<span class="token number">4</span>、提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
例如：
<span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive include<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>component<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> name 为 a 的组件将被缓存！ <span class="token operator">--</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive exclude<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>component<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 除了 name 为 a 的组件都将被缓存！ <span class="token operator">--</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_19、谈谈你对slot的了解" tabindex="-1"><a class="header-anchor" href="#_19、谈谈你对slot的了解" aria-hidden="true">#</a> ####19、谈谈你对slot的了解</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、什么是插槽
	<span class="token number">1.1</span> 插槽（Slot）是Vue提出来的一个概念，正如名字一样，插槽用于决定将所携带的内容，插入到指定的某个位置，从而使模板分块，具有模块化的特质和更大的重用性。
	<span class="token number">1.2</span> 插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制
    
<span class="token number">2</span>、插槽使用
	<span class="token number">2.1</span> 默认插槽  在子组件中写入slot，slot所在的位置就是父组件要显示的内容
    <span class="token number">2.2</span> 具名插槽  在子组件中定义了三个slot标签，其中有两个分别添加了name属性header和footer
    			 在父组件中使用template并写入对应的slot名字来指定该内容在子组件中现实的位置
    <span class="token number">2.3</span> 作用域插槽  在子组件的slot标签上绑定需要的值<span class="token operator">&lt;</span>slot <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
    	          在父组件上使用slot<span class="token operator">-</span>scope<span class="token operator">=</span>“user”来接收子组件传过来的值 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####20、vue中动态组件如何使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、在某个中使用 is 特性来切换不同的组件：
	<span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;TabComponent&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>   TabComponent<span class="token operator">:</span>已注册组件的名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>####21、v-model的原理是什么</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、v<span class="token operator">-</span>model主要提供了两个功能，view层输入值影响data的属性值，属性值发生改变会更新层的数值变化<span class="token punctuation">.</span>
<span class="token number">2</span>、v<span class="token operator">-</span>model指令的实现：
	<span class="token number">3.1</span> v<span class="token operator">-</span>bind<span class="token operator">:</span>绑定响应式数据
	<span class="token number">3.2</span> <span class="token function">触发input事件并传递数据</span> <span class="token punctuation">(</span>核心和重点<span class="token punctuation">)</span>
<span class="token number">3</span><span class="token function">、其底层原理就是</span><span class="token punctuation">(</span>双向数据绑定原理<span class="token punctuation">)</span>：
	<span class="token number">3.1</span> 一方面modal层通过defineProperty来劫持每个属性，一旦监听到变化通过相关的页面元素更新。
    <span class="token number">3.2</span> 另一方面通过编译模板文件，为控件的v<span class="token operator">-</span>model绑定input事件，从而页面输入能实时更新相关data属性值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_22、vue响应式的原理" tabindex="-1"><a class="header-anchor" href="#_22、vue响应式的原理" aria-hidden="true">#</a> 22、vue响应式的原理</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、原理：
	Vue 的响应式原理是核心是通过 <span class="token constant">ES5</span> 的 Object<span class="token punctuation">.</span>defindeProperty 进行数据劫持，然后利用 <span class="token keyword">get</span> 和 <span class="token keyword">set</span> 方法进行获取和设置，data 中声明的属性都被添加到了<span class="token keyword">get</span>和<span class="token keyword">set</span>中，当读取 data 中的数据时自动调用 <span class="token keyword">get</span> 方法，当修改 data 中的数据时，自动调用 <span class="token keyword">set</span> 方法，检测到数据的变化，会通知观察者 Wacher，观察者 Wacher自动触发重新render 当前组件（子组件不会重新渲染）<span class="token punctuation">,</span>生成新的虚拟 <span class="token constant">DOM</span> 树，Vue 框架会遍历并对比新虚拟 <span class="token constant">DOM</span> 树和旧虚拟 <span class="token constant">DOM</span> 树中每个节点的差别，并记录下来，最后，加载操作，将所有记录的不同点，局部修改到真实 <span class="token constant">DOM</span> 树上。

<span class="token number">2</span>、底层代码实现：
	   <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;lis&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&quot;男&quot;</span>
    <span class="token punctuation">}</span>
<span class="token comment">//  vue2.0实现  使用Object.defineProperty进行数据劫持</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> temp
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
                temp <span class="token operator">=</span> value
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token comment">// vue3.0实现 使用Proxy 进行数据的代理</span>
    <span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_23、vue2-0和vue3-0响应式的区别" tabindex="-1"><a class="header-anchor" href="#_23、vue2-0和vue3-0响应式的区别" aria-hidden="true">#</a> 23、vue2.0和vue3.0响应式的区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、Object<span class="token punctuation">.</span>defineProperty 
  <span class="token number">1</span><span class="token punctuation">)</span> 用于监听对象的数据变化
  <span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">无法监听数组变化</span><span class="token punctuation">(</span>下标，长度<span class="token punctuation">)</span>
  <span class="token number">3</span><span class="token punctuation">)</span> 只能劫持对象的自身属性，动态添加的劫持不到
<span class="token number">2</span>、Proxy
  <span class="token number">1</span><span class="token punctuation">)</span> proxy返回的是一个新对象， 可以通过操作返回的新的对象达到目的
  <span class="token number">2</span>）可以监听到数组变化，也可以监听到动态添加的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_24、router和route的区别" tabindex="-1"><a class="header-anchor" href="#_24、router和route的区别" aria-hidden="true">#</a> 24、router和route的区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、$router对象
    <span class="token number">1</span>）$router对象是全局路由的实例，是router构造方法的实例
    <span class="token number">2</span><span class="token function">）$router对象上的方法有：push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">、go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">、replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">2</span>、$route对象
    <span class="token number">1</span>）$route对象表示当前的路由信息，包含了当前 <span class="token constant">URL</span> 解析得到的信息。包含当前的路径，参数，query对象等
    <span class="token number">2</span>）$route对象上的属性有：path、params、query、hash等等
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_25、路由传参的方式和区别" tabindex="-1"><a class="header-anchor" href="#_25、路由传参的方式和区别" aria-hidden="true">#</a> 25、路由传参的方式和区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">答</span><span class="token operator">:</span> 
<span class="token number">1</span>、方式：params 和 query
<span class="token number">2</span>、区别：<span class="token number">1</span>）params用的是name，传递的参数在地址栏不会显示，类似于post
        <span class="token number">2</span>）query用的是path<span class="token punctuation">,</span>传递的参数会在地址栏显示出来，类似于<span class="token keyword">get</span>      
<span class="token number">3</span>、举例说明：
   <span class="token number">1</span>）params 传参
    传： <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;particulars&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> id
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
     接：<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
     
   <span class="token number">2</span>）query传参
     传：<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/particulars&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> id
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      接：<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_26、vue模版编译原理知道吗-能简单说一下吗" tabindex="-1"><a class="header-anchor" href="#_26、vue模版编译原理知道吗-能简单说一下吗" aria-hidden="true">#</a> 26、Vue模版编译原理知道吗，能简单说一下吗</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、简单说，Vue的编译过程就是将template转化为render函数的过程。
<span class="token number">2</span>、首先解析模版，生成<span class="token constant">AST</span><span class="token function">语法树</span><span class="token punctuation">(</span>一种用JavaScript对象的形式来描述整个模板<span class="token punctuation">)</span>。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。
<span class="token number">3</span>、Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的<span class="token constant">DOM</span>也不会变化。那么优化过程就是深度遍历<span class="token constant">AST</span><span class="token function">树，按照相关条件对树节点进行标记。这些被标记的节点</span><span class="token punctuation">(</span>静态节点<span class="token punctuation">)</span>我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。
<span class="token number">4</span>、编译的最后一步是将优化后的<span class="token constant">AST</span>树转换为可执行的代码。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_27、ssr了解吗" tabindex="-1"><a class="header-anchor" href="#_27、ssr了解吗" aria-hidden="true">#</a> 27、SSR了解吗</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、<span class="token constant">SSR</span>也就是服务端渲染，也就是将Vue在客户端把标签渲染成<span class="token constant">HTML</span>的工作放在服务端完成，然后再把html直接返回给客户端。
<span class="token number">2</span>、<span class="token constant">SSR</span>有着更好的<span class="token constant">SEO</span>、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node<span class="token punctuation">.</span>js的运行环境。还有就是服务器的压力比较大。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_28、你都做过哪些vue的性能优化" tabindex="-1"><a class="header-anchor" href="#_28、你都做过哪些vue的性能优化" aria-hidden="true">#</a> 28、你都做过哪些Vue的性能优化</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、v<span class="token operator">-</span><span class="token keyword">if</span>和v<span class="token operator">-</span><span class="token keyword">for</span>不能连用
<span class="token number">2</span>、页面采用keep<span class="token operator">-</span>alive缓存组件
<span class="token number">3</span>、合理使用v<span class="token operator">-</span><span class="token keyword">if</span>和v<span class="token operator">-</span>show
<span class="token number">4</span>、key保证唯一
<span class="token number">5</span>、使用路由懒加载、异步组件、组件封装
<span class="token number">6</span>、防抖、节流
<span class="token number">7</span>、第三方模块按需导入
<span class="token number">8</span>、图片懒加载
<span class="token number">9</span>、精灵图的使用
<span class="token number">10</span>、代码压缩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####29、Vue-router 路由有哪些模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>一般有两种模式：
        <span class="token number">1</span>、hash 模式：后面的 hash 值的变化，浏览器既不会向服务器发出请求，浏览器也不会刷新，每次 hash 值的变化会触发 hashchange 事件。
        <span class="token number">2</span>、history 模式：利用了 <span class="token constant">HTML5</span> 中新增的 <span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 和 <span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法。这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 <span class="token constant">URL</span>，但浏览器不会立即向后端发送请求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_30、vuex-是什么-有哪几种属性" tabindex="-1"><a class="header-anchor" href="#_30、vuex-是什么-有哪几种属性" aria-hidden="true">#</a> 30、Vuex 是什么？有哪几种属性？</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token number">1</span>、Vuex 是专为Vue设计的状态管理工具，采用集中式储存管理 Vue 中所有组件的状态。
  <span class="token number">2</span>、属性
  （<span class="token number">1</span>）state属性：基本数据
  （<span class="token number">2</span>）getters属性：从 state 中派生出的数据
  （<span class="token number">3</span>）mutation属性：更新 store 中数据的唯一途径，其接收一个以 state 为第一参数的回调函数
  （<span class="token number">4</span>）action 属性：提交 mutation 以更改 state，其中可以包含异步操作，数据请求
  （<span class="token number">5</span>）module 属性：用于将 store分割成不同的模块。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_31、axios封装请求拦截器和响应拦截器" tabindex="-1"><a class="header-anchor" href="#_31、axios封装请求拦截器和响应拦截器" aria-hidden="true">#</a> 31、axios封装请求拦截器和响应拦截器</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>interceptors：【ɪntərˈsɛptərz】
<span class="token number">1</span>、项目中会在utils文件中，封装一个request<span class="token punctuation">.</span>js文件
<span class="token number">2</span>、通过axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>配置baseURL，并得到一个request实例
<span class="token number">3</span>、通过request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span>use来配置请求拦截
<span class="token number">4</span>、通过request<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span>use来配置响应拦截
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_32、webpack在项目中的常见配置" tabindex="-1"><a class="header-anchor" href="#_32、webpack在项目中的常见配置" aria-hidden="true">#</a> 32、webpack在项目中的常见配置</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、 配置兼容编译<span class="token constant">ES6</span>转成<span class="token constant">ES5</span>
	用babel来编译，npm i babel<span class="token operator">-</span>core babel<span class="token operator">-</span>loader babel<span class="token operator">-</span>preset<span class="token operator">-</span>env babel<span class="token operator">-</span>polyfill babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>runtime <span class="token operator">--</span>save<span class="token operator">-</span>dev
<span class="token number">2</span>、配置跨域代理服务
	<span class="token literal-property property">用proxy进行代理，在devServer里面配置，proxy</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">target</span><span class="token operator">:</span>代理的地址<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token number">3</span>、配置打包路径
	<span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span>
<span class="token number">4</span>、配置打包出去文件
	<span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span>
<span class="token number">5</span>、配置执行环境变量
	启动的端口  <span class="token keyword">const</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>port <span class="token operator">||</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_config_port <span class="token operator">||</span> <span class="token number">9528</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_33、vue怎么实现强制刷新组件" tabindex="-1"><a class="header-anchor" href="#_33、vue怎么实现强制刷新组件" aria-hidden="true">#</a> 33、vue怎么实现强制刷新组件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>第一<span class="token punctuation">.</span>使用<span class="token keyword">this</span><span class="token punctuation">.</span>$forceUpdate强制重新渲染
    <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;reload()&quot;</span><span class="token operator">&gt;</span>刷新当前组件<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;comp&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

第二<span class="token punctuation">.</span>使用v<span class="token operator">-</span><span class="token keyword">if</span>指令
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>comp v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;update&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>comp<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;reload()&quot;</span><span class="token operator">&gt;</span>刷新comp组件<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> comp <span class="token keyword">from</span> <span class="token string">&#39;@/views/comp.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parentComp&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 移除组件</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>update <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token comment">// 在组件移除后，重新渲染组件</span>
            <span class="token comment">// this.$nextTick可实现在DOM 状态更新后，执行传入的方法。</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>update <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_34、在使用计算属性的时-函数名和data数据源中的数据可以同名吗" tabindex="-1"><a class="header-anchor" href="#_34、在使用计算属性的时-函数名和data数据源中的数据可以同名吗" aria-hidden="true">#</a> 34、在使用计算属性的时,函数名和data数据源中的数据可以同名吗?</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>不可以
	在初始化vm的过程，因为不管是计算属性还是data还是props 都会被挂载在vm实例上，会把data覆盖了<span class="token punctuation">,</span>因此 这三个都不能同名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_35、vue中data的属性可以和methods中的方法同名吗" tabindex="-1"><a class="header-anchor" href="#_35、vue中data的属性可以和methods中的方法同名吗" aria-hidden="true">#</a> 35、vue中data的属性可以和methods中的方法同名吗?</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>不可以
	vue源码中的 <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法会取出 methods 中的方法进行判断，如果有重复的就会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_36、你知道style加scoped属性的用途和原理吗" tabindex="-1"><a class="header-anchor" href="#_36、你知道style加scoped属性的用途和原理吗" aria-hidden="true">#</a> 36、你知道style加scoped属性的用途和原理吗</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>用途：防止全局同名<span class="token constant">CSS</span>污染
原理：在标签加上v<span class="token operator">-</span>data<span class="token operator">-</span>something属性，再在选择器时加上对应<span class="token punctuation">[</span>v<span class="token operator">-</span>data<span class="token operator">-</span>something<span class="token punctuation">]</span>，即<span class="token constant">CSS</span>带属性选择器，以此完成类似作用域的选择方式<span class="token punctuation">.</span>
	scoped会在元素上添加唯一的属性（data<span class="token operator">-</span>v<span class="token operator">-</span>x形式），css编译后也会加上属性选择器，从而达到限制作用域的目的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_37、如何在子组件中访问父组件的实例" tabindex="-1"><a class="header-anchor" href="#_37、如何在子组件中访问父组件的实例" aria-hidden="true">#</a> 37、如何在子组件中访问父组件的实例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue中子组件调用父组件的方法，这里有三种方法提供参考：
    <span class="token number">1</span>：直接在子组件中通过<span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>event来调用父组件的方法
    <span class="token number">2</span>：在子组件里用$emit向父组件触发一个事件，父组件监听这个事件
    <span class="token number">3</span>：父组件把方法传入子组件中，在子组件里直接调用这个方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_38、watch的属性用箭头函数定义结果会怎么样" tabindex="-1"><a class="header-anchor" href="#_38、watch的属性用箭头函数定义结果会怎么样" aria-hidden="true">#</a> 38、watch的属性用箭头函数定义结果会怎么样</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>不应该使用箭头函数来定义 watch <span class="token operator">:</span>
例如：
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">//  这里不应该用箭头函数</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>。
理由是箭头函数绑定了父级作用域的上下文，所以 <span class="token keyword">this</span> 将不会按照期望指向 Vue 实例，
<span class="token keyword">this</span><span class="token punctuation">.</span>a 将是 <span class="token keyword">undefined</span>。

注意：methods里面定义的方法也不要用箭头函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_40、怎么解决vue打包后静态资源图片失效的问题" tabindex="-1"><a class="header-anchor" href="#_40、怎么解决vue打包后静态资源图片失效的问题" aria-hidden="true">#</a> 40、怎么解决vue打包后静态资源图片失效的问题</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在vue<span class="token operator">-</span>cli 需要在根目录下建一个vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js 在里面配置publicPath即可
默认值为<span class="token operator">/</span>，更改为<span class="token punctuation">.</span><span class="token operator">/</span>就好了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_41、怎么解决vue动态设置img的src不生效的问题" tabindex="-1"><a class="header-anchor" href="#_41、怎么解决vue动态设置img的src不生效的问题" aria-hidden="true">#</a> 41、怎么解决vue动态设置img的src不生效的问题</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>因为动态添加src被当做静态资源处理了，没有进行编译，所以要加上require。
<span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;require(&#39;@/assets/images/xxx.png&#39;)&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_42、eventbus注册在全局上时-路由切换时会重复触发事件-如何解决呢" tabindex="-1"><a class="header-anchor" href="#_42、eventbus注册在全局上时-路由切换时会重复触发事件-如何解决呢" aria-hidden="true">#</a> 42、EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>原因：因为我们的事件是全局的，它并不会随着组件的销毁而自动注销，需要我们手动调用注销方法来注销。
解决：我们可以在组件的 beforeDestroy <span class="token punctuation">,</span>或 destroy 生命周期中执行注销方法，手动注销事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_43、你认为vue的核心是什么" tabindex="-1"><a class="header-anchor" href="#_43、你认为vue的核心是什么" aria-hidden="true">#</a> 43、你认为vue的核心是什么</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>组件化
双向数据绑定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_44、在-vue文件中style是必须的吗-那script是必须的吗" tabindex="-1"><a class="header-anchor" href="#_44、在-vue文件中style是必须的吗-那script是必须的吗" aria-hidden="true">#</a> 44、在.vue文件中style是必须的吗？那script是必须的吗</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在<span class="token punctuation">.</span>vue 文件中，template是必须的，而script与style都不是必须的。都没有的话那就是一个静态网页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_45、说说vue的优缺点" tabindex="-1"><a class="header-anchor" href="#_45、说说vue的优缺点" aria-hidden="true">#</a> 45、说说vue的优缺点</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>优点：
    <span class="token number">1.</span>数据驱动
    <span class="token number">2.</span>组件化
    <span class="token number">3.</span>轻量级
    <span class="token number">4.</span><span class="token constant">SPA</span><span class="token punctuation">(</span>单页面<span class="token punctuation">)</span>
    <span class="token number">5.</span>版本<span class="token number">3.0</span>的界面化管理工具比较好使
    <span class="token number">6</span><span class="token punctuation">.</span>vue易入门
    <span class="token number">7.</span>中文社区强大，入门简单，提升也有很多的参考资料。
缺点：
    <span class="token number">1.</span>不支持<span class="token constant">IE8</span>及以下浏览器
    <span class="token number">2.</span>吃内存（每个组件都会实例化一个Vue实例，实例的属性和方法很多）
    <span class="token number">3.</span>定义在data里面的对象，实例化时，都会递归的遍历转成响应式数据，然而有的响应式数据我们并不会用到，造成性能上的浪费

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,89),o=[p];function i(l,c){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","07-vue阶段高频面试题.html.vue"]]);export{d as default};
