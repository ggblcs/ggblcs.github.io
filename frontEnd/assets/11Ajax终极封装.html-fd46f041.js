import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_11-ajax终极封装" tabindex="-1"><a class="header-anchor" href="#_11-ajax终极封装" aria-hidden="true">#</a> 11 Ajax终极封装</h1><p>终极封装既能处理post请求，也能处理get请求，主要是仿照jQuery。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">obj2str</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    {
        &quot;userName&quot;:&quot;lnj&quot;,
        &quot;userPwd&quot;:&quot;123456&quot;,
        &quot;t&quot;:&quot;3712i9471329876498132&quot;
    }
    */</span>
    data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 如果没有传参, 为了添加随机因子,必须自己创建一个对象</span>
    data<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 在URL中是不可以出现中文的, 如果出现了中文需要转码</span>
        <span class="token comment">// 可以调用encodeURIComponent方法</span>
        <span class="token comment">// URL中只可以出现字母/数字/下划线/ASCII码</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;=&quot;</span><span class="token operator">+</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [userName=lnj, userPwd=123456];</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// userName=lnj&amp;userPwd=123456</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 0.将对象转换为字符串</span>
    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token function">obj2str</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// key=value&amp;key=value;</span>
    <span class="token comment">// 1.创建一个异步对象</span>
    <span class="token keyword">var</span> xmlhttp<span class="token punctuation">,</span> timer<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token comment">// code for IE7+, Firefox, Chrome, Opera, Safari</span>
        xmlhttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span><span class="token comment">// code for IE6, IE5</span>
        xmlhttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.设置请求方式和请求地址</span>
    <span class="token comment">/*
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    */</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>type<span class="token punctuation">,</span> option<span class="token punctuation">.</span>url<span class="token operator">+</span><span class="token string">&quot;?&quot;</span><span class="token operator">+</span>str<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.发送请求</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>type<span class="token punctuation">,</span> option<span class="token punctuation">.</span>url<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 注意点: 以下代码必须放到open和send之间</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-type&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xmlhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

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
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 判断是否请求成功</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xmlhttp<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span>
                xmlhttp<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 5.处理返回的结果</span>
                <span class="token comment">// console.log(&quot;接收到服务器返回的数据&quot;);</span>
                option<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>xmlhttp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// console.log(&quot;没有接收到服务器返回的数据&quot;);</span>
                option<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>xmlhttp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断外界是否传入了超时时间</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;中断请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xmlhttp<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> option<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何使用，请看模板：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>ajax({
    url:&quot;04-ajax-get.php&quot;,
    data:{
        &quot;userName&quot;:&quot;lnj&quot;,
        &quot;userPwd&quot;:&quot;123456&quot;
    },
    timeout: 3000,
    type:&quot;post&quot;,
    success: function (xhr) {
        alert(xhr.responseText);
    },
    error: function (xhr) {
        alert(&quot;请求失败&quot;);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","11Ajax终极封装.html.vue"]]);export{k as default};
