import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_13-手撕promise上" tabindex="-1"><a class="header-anchor" href="#_13-手撕promise上" aria-hidden="true">#</a> 13 手撕Promise上</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>32-手撕Promise上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 定义常量保存对象的状态</span>
    <span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">FULFILLED</span> <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">MyPromise</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">handle</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 0.初始化默认的状态</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span>
            <span class="token comment">// 定义变量保存传入的参数</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
            <span class="token comment">// 定义变量保存监听的函数</span>
            <span class="token comment">// this.onResolvedCallback = null;</span>
            <span class="token comment">// this.onRejectedCallback = null;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 1.判断是否传入了一个函数, 如果没有传入就抛出一个异常</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_isFunction</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;请传入一个函数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 2.给传入的函数传递形参(传递两个函数)</span>
            <span class="token comment">// handle();</span>
            <span class="token function">handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_resolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 1.判断有没有传入成功的回调</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_isFunction</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 2.判断当前的状态是否是成功状态</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">FULFILLED</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 1.判断有没有传入失败的回调</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_isFunction</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 2.判断当前的状态是否是失败状态</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 2.判断当前的状态是否是默认状态</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_isFunction</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">// this.onResolvedCallback = onResolved;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_isFunction</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">// this.onRejectedCallback = onRejected;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">_resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// console.log(&quot;_resolve&quot;);</span>
            <span class="token comment">// 这里是为了防止重复修改</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">FULFILLED</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
                <span class="token comment">// this.onResolvedCallback(this.value);</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">_reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// console.log(&quot;_reject&quot;);</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason<span class="token punctuation">;</span>
                <span class="token comment">// this.onRejectedCallback(this.reason);</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">_isFunction</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.Promise特点
    1.1创建时必须传入一个函数, 否则会报错
    1.2会给传入的函数设置两个回调函数
    1.3刚创建的Promise对象状态是pending
    1.4状态一旦发生改变就不可再次改变
    1.5可以通过then来监听状态的改变
    1.5.1如果添加监听时状态已经改变, 立即执行监听的回调
    1.5.2如果添加监听时状态还未改变, 那么状态改变时候再执行监听回到
    1.5.3同一个Promise对象可以添加多个then监听, 状态改变时所有的监听按照添加顺序执行
    */</span>
    <span class="token comment">/*
    let promise = new Promise(function (resolve, reject) {
        resolve();
        // reject();
        // setTimeout(function () {
        //     resolve();
        // }, 2000);
    });
    promise.then(function () {
        console.log(&quot;成功1&quot;);
    }, function () {
        console.log(&quot;失败1&quot;);
    });
    promise.then(function () {
        console.log(&quot;成功2&quot;);
    }, function () {
        console.log(&quot;失败2&quot;);
    });
    promise.then(function () {
        console.log(&quot;成功3&quot;);
    }, function () {
        console.log(&quot;失败3&quot;);
    });
    */</span>

    <span class="token comment">/* */</span>
    <span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(resolve);</span>
        <span class="token comment">// console.log(reject);</span>
        <span class="token comment">// resolve(&quot;111&quot;);</span>
        <span class="token comment">// reject(&quot;aaa&quot;);</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// resolve(&quot;111&quot;);</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;成功1&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;失败1&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;成功2&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;失败2&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;成功3&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;失败3&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","013手撕Promise上.html.vue"]]);export{k as default};
