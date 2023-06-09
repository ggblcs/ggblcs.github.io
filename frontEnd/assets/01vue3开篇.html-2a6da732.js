import{_ as n,p as e,q as i,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_01-vue3开篇" tabindex="-1"><a class="header-anchor" href="#_01-vue3开篇" aria-hidden="true">#</a> 01 vue3开篇</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.Vue3.0六大亮点
- Performance：性能比Vue 2.x快1.2~2倍
- Tree shaking support：按需编译,体积比Vue2.x更小
- Composition API: 组合API(类似React Hooks)
- Better TypeScript support：更好的 Ts 支持
- Custom Renderer API：暴露了自定义渲染API
- Fragment, Teleport(Protal), Suspense：更先进的组件

2.Vue3.0是如何变快的?
- diff算法优化: https://vue-next-template-explorer.netlify.app/
    + Vue2中的虚拟dom是进行全量的对比
    + Vue3新增了静态标记(PatchFlag),
      在与上次虚拟节点进行对比时候，只对比带有patch flag的节点
      并且可以通过flag的信息得知当前节点要对比的具体内容
- hoistStatic 静态提升
    + Vue2中无论元素是否参与更新, 每次都会重新创建, 然后再渲染
    + Vue3中对于不参与更新的元素, 会做静态提升, 只会被创建一次, 在渲染时直接复用即可
- cacheHandlers 事件侦听器缓存
    + 默认情况下onClick会被视为动态绑定, 所以每次都会去追踪它的变化
      但是因为是同一个函数，所以没有追踪变化, 直接缓存起来复用即可
- ssr渲染
    + 当有大量静态的内容时候，这些内容会被当做纯字符串推进一个buffer里面，
      即使存在动态的绑定，会通过模板插值嵌入进去。这样会比通过虚拟dmo来渲染的快上很多很多。
    + 当静态内容大到一定量级时候，会用_createStaticVNode方法在客户端去生成一个static node，
      这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染。
--&gt;</span>

<span class="token comment">&lt;!--
1.Vue3.0-快速上手
- 创建Vue3的3种方式
    + Vue-CLI
    + Webpack
    + Vite
2.什么是Vite?
- Vite是Vue作者开发的一款意图取代webpack的工具
- 其实现原理是利用ES6的import会发送请求去加载文件的特性,
  拦截这些请求, 做一些预编译, 省去webpack冗长的打包时间

- 安装Vite
    npm install -g create-vite-app
- 利用Vite创建Vue3项目
    create-vite-app projectName
- 安装依赖运行项目
    cd projectName
    npm install
    npm run dev
2.Vue3.0兼容Vue2.x

3.Vue3.0-Custom Renderer API
--&gt;</span>
<span class="token comment">&lt;!--
- Webpack
git clone https://github.com/vuejs/vue-next-webpack-preview.git projectName
cd projectName
npm install
npm run dev

- Vue-CLI
npm install -g @vue/cli
vue create projectName
cd projectName
vue add vue-next
npm run serve
--&gt;</span>
<span class="token comment">&lt;!--
事件监听缓存
&lt;div&gt;
  &lt;button @click=&quot;onClick&quot;&gt;按钮&lt;/button&gt;
&lt;/div&gt;

开启事件监听缓存之前:
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, null, [
    _createVNode(&quot;button&quot;, { onClick: _ctx.onClick }, &quot;按钮&quot;, 8 /* PROPS */, [&quot;onClick&quot;])
  ]))
}
开启事件监听缓存之后:
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, null, [
    _createVNode(&quot;button&quot;, {
      onClick: _cache[1] || (_cache[1] = (...args) =&gt; (_ctx.onClick(...args)))
    }, &quot;按钮&quot;)
  ]))
}
注意点: 转换之后的代码, 大家可能还看不懂, 但是不要紧
        我们只需要观察有没有静态标记即可
        因为我们知道在Vue3的diff算法中, 只有有静态标记的才会进行比较, 才会进行追踪
--&gt;</span>
<span class="token comment">&lt;!--
&lt;div&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;{{msg}}}&lt;/p&gt;
&lt;/div&gt;
静态提升之前:
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, null, [
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, _toDisplayString(_ctx.msg) + &quot;}&quot;, 1 /* TEXT */)
  ]))
}
静态提升之后:
const _hoisted_1 = /*#__PURE__*/_createVNode(&quot;p&quot;, null, &quot;知播渔&quot;, -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createVNode(&quot;p&quot;, null, &quot;知播渔&quot;, -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createVNode(&quot;p&quot;, null, &quot;知播渔&quot;, -1 /* HOISTED */)

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _createVNode(&quot;p&quot;, null, _toDisplayString(_ctx.msg) + &quot;}&quot;, 1 /* TEXT */)
  ]))
}
--&gt;</span>
<span class="token comment">&lt;!--
&lt;div&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;知播渔&lt;/p&gt;
    &lt;p&gt;{{msg}}}&lt;/p&gt;
&lt;/div&gt;

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, null, [
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, &quot;知播渔&quot;),
    _createVNode(&quot;p&quot;, null, _toDisplayString(_ctx.msg) + &quot;}&quot;, 1 /* TEXT */)
  ]))
}
--&gt;</span>
<span class="token comment">&lt;!--
附录: PatchFlags
export const enum PatchFlags {
  TEXT = 1,// 动态文本节点
  CLASS = 1 &lt;&lt; 1, // 2  // 动态 class
  STYLE = 1 &lt;&lt; 2, // 4 // 动态 style
  PROPS = 1 &lt;&lt; 3, // 8 // 动态属性，但不包含类名和样式
  FULL_PROPS = 1 &lt;&lt; 4, // 16 // 具有动态 key 属性，当 key 改变时，需要进行完整的 diff 比较。
  HYDRATE_EVENTS = 1 &lt;&lt; 5, // 32 // 带有监听事件的节点
  STABLE_FRAGMENT = 1 &lt;&lt; 6, // 64 // 一个不会改变子节点顺序的 fragment
  KEYED_FRAGMENT = 1 &lt;&lt; 7, // 128 // 带有 key 属性的 fragment 或部分子字节有 key
  UNKEYED_FRAGMENT = 1 &lt;&lt; 8, // 256 // 子节点没有 key 的 fragment
  NEED_PATCH = 1 &lt;&lt; 9, // 512 // 一个节点只会进行非 props 比较
  DYNAMIC_SLOTS = 1 &lt;&lt; 10, // 1024 // 动态 slot
  HOISTED = -1, // 静态节点
  // 指示在 diff 过程应该要退出优化模式
  BAIL = -2
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function t(u,c){return e(),i("div",null,v)}const r=n(s,[["render",t],["__file","01vue3开篇.html.vue"]]);export{r as default};
