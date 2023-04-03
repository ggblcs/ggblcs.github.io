import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_05-ajax之get基本使用" tabindex="-1"><a class="header-anchor" href="#_05-ajax之get基本使用" aria-hidden="true">#</a> 05 Ajax之get基本使用</h1><p>Ajax之重要5步</p><ol><li>创建异步对象。</li><li>设置请求方式和请求地址。</li><li>发送请求。</li><li>监听状态变化。</li><li>处理返回结果。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>发送请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.什么是Ajax?</span>
<span class="token comment">// AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。</span>
<span class="token comment">// 就是为了不重新加载整个页面。</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> oBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.创建一个异步对象</span>
        <span class="token keyword">var</span> xmlhttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.设置请求方式和请求地址</span>
        <span class="token comment">/*
        method：请求的类型；GET 或 POST
        url：文件在服务器上的位置
        async：true（异步）或 false（同步），Ajax存在的意义就是异步请求，所以永远选true
        */</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;04-ajax-get.php&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.发送请求</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.监听状态的变化</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/*
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪
            */</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 判断是否请求成功</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xmlhttp<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span>
                    xmlhttp<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">// 5.处理返回的结果</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;接收到服务器返回的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;没有接收到服务器返回的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>php</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//sleep(5);</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;ajax get page&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//echo $_GET[&quot;userName&quot;];</span>
<span class="token comment">//echo &quot;&lt;br&gt;&quot;;</span>
<span class="token comment">//echo $_GET[&quot;userPwd&quot;];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","05Ajax之get基本使用.html.vue"]]);export{d as default};
