import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},o=p(`<h1 id="_05-jsonp封装" tabindex="-1"><a class="header-anchor" href="#_05-jsonp封装" aria-hidden="true">#</a> 05 JSONP封装</h1><p>本节要求理解</p><p>封装</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">obj2str</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生成随机因子</span>
    obj<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(str);</span>
    <span class="token keyword">return</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">myJSONP</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// http://127.0.0.1/jQuery/Ajax/22-jsonp.php?cb=lnj&amp;teacher=lnj&amp;age=34&amp;_=1559735634387</span>
    <span class="token comment">// http://127.0.0.1/jQuery/Ajax/22-jsonp.php?cb=lnj&amp;teacher=lnj&amp;age=34&amp;t=08520581619221432</span>
    <span class="token comment">// 1.生成URL地址</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> options<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>jsonp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        url <span class="token operator">+=</span> <span class="token string">&quot;?&quot;</span> <span class="token operator">+</span> options<span class="token punctuation">.</span>jsonp <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        url <span class="token operator">+=</span> <span class="token string">&quot;?callback=&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> callbackName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;jQuery&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>jsonpCallback<span class="token punctuation">)</span><span class="token punctuation">{</span>
        callbackName <span class="token operator">=</span> options<span class="token punctuation">.</span>jsonpCallback<span class="token punctuation">;</span>
        url <span class="token operator">+=</span> options<span class="token punctuation">.</span>jsonpCallback<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// console.log(callbackName);</span>
        url <span class="token operator">+=</span> callbackName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">obj2str</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        url <span class="token operator">+=</span> <span class="token string">&quot;&amp;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(url);</span>

    <span class="token comment">// 2.获取跨域的数据</span>
    <span class="token keyword">let</span> oScript <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oScript<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oScript<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.定义回调函数</span>
    window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除已经获取了数据的script标签</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oScript<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将获取到的数据返回给外界</span>
        options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">myJSONP</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:80/jQuery/Ajax/22-jsonp.php&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;teacher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">34</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">&quot;cb&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 告诉jQuery服务器在获取回调函数名称的时候需要用什么key来获取</span>
        <span class="token literal-property property">jsonpCallback</span><span class="token operator">:</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 告诉jQuery服务器在获取回调函数名称的时候回调函数的名称是什么</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ps：总感觉js这些东西花里胡哨的，但又说不出来花在哪，想了好久，命名url一行就写完的东西，非得整个对象，一条一条的写，然后封装个方法再给你加加减减处理一下再搞成url。这就是其中之一。</p>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","005JSONP封装.html.vue"]]);export{r as default};
