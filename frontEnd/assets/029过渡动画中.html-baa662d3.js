import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_29-过渡动画中" tabindex="-1"><a class="header-anchor" href="#_29-过渡动画中" aria-hidden="true">#</a> 29 过渡动画中</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>30-Vue-过渡动画<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.v-enter</span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.v-enter-to</span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.v-enter-active</span><span class="token punctuation">{</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all 3s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
1.当前过渡存在的问题
通过transition+类名的方式确实能够实现过渡效果
但是实现的过渡效果并不能保存动画之后的状态
因为Vue内部的实现是在过程中动态绑定类名, 过程完成之后删除类名
正式因为删除了类名, 所以不能保存最终的效果

2.在Vue中如何保存过渡最终的效果
通过Vue提供的JS钩子来实现过渡动画
v-on:before-enter=&quot;beforeEnter&quot;  进入动画之前
v-on:enter=&quot;enter&quot;  进入动画执行过程中
v-on:after-enter=&quot;afterEnter&quot;  进入动画完成之后
v-on:enter-cancelled=&quot;enterCancelled&quot;  进入动画被取消

v-on:before-leave=&quot;beforeLeave&quot; 离开动画之前
v-on:leave=&quot;leave&quot;  离开动画执行过程中
v-on:after-leave=&quot;afterLeave&quot; 离开动画完成之后
v-on:leave-cancelled=&quot;leaveCancelled&quot; 离开动画被取消

3.JS钩子实现过渡注意点
3.1在动画过程中必须写上el.offsetWidth或者el.offsetHeight
3.2在enter和leave方法中必须调用done方法, 否则after-enter和after-leave不会执行
3.3需要需要添加初始动画, 那么需要把done方法包裹到setTimeout方法中调用
--&gt;</span>

<span class="token comment">&lt;!--这里就是MVVM中的View--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
    注意点: 虽然我们是通过JS钩子函数来实现过渡动画
            但是默认Vue还是回去查找类名, 所以为了不让Vue去查找类名
            可以给transition添加v-bind:css=&quot;false&quot;
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">appear</span>
                <span class="token attr-name"><span class="token namespace">v-bind:</span>css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name"><span class="token namespace">v-on:</span>before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeEnter<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name"><span class="token namespace">v-on:</span>enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>enter<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name"><span class="token namespace">v-on:</span>after-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>afterEnter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 这里就是MVVM中的View Model</span>
    <span class="token keyword">let</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 这里就是MVVM中的Model</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 专门用于存储监听事件回调函数</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>isShow <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShow<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 进入动画开始之前</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeEnter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 进入动画执行过程中</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">/*
                注意点: 如果是通过JS钩子来实现过渡动画
                        那么必须在动画执行过程中的回调函数中写上
                        el.offsetWidth / el.offsetHeight
                * */</span>
                <span class="token comment">// el.offsetWidth;</span>
                el<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
                el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&quot;all 3s&quot;</span><span class="token punctuation">;</span>
                <span class="token comment">/*
                注意点: 动画执行完毕之后一定要调用done回调函数
                        否则后续的afterEnter钩子函数不会被执行
                * */</span>
                <span class="token comment">// done();</span>
                <span class="token comment">/*
                注意点: 如果想让元素一进来就有动画, 那么最好延迟以下再调用done方法
                * */</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">afterEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 进入动画执行完毕之后</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;afterEnter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
                el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginLeft <span class="token operator">=</span> <span class="token string">&quot;500px&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 专门用于定义计算属性的</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","029过渡动画中.html.vue"]]);export{k as default};
