import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_02-同源策略" tabindex="-1"><a class="header-anchor" href="#_02-同源策略" aria-hidden="true">#</a> 02 同源策略</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>19-同源策略<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/jquery-1.12.4.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>send<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发送请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
    1.什么是同源策略?
    同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能
    所谓同源是指: 协议，域名，端口都相同,就是同源, 否则就是跨域

    http://www.it666.com:80/index.html
    协议: http/https/...
    一级域名: it666.com/itzb.com
    二级域名: www/study/edu/...
    端口号: 80/3306/...

    // 协议+一级域名+二级域名+端口号都相同, 所以同源
    http://www.it666.com:80/index.html
    http://www.it666.com:80/detail.html

    // 协议不同, 所以不同源, 是跨域
    http://www.it666.com:80/index.html
    https://www.it666.com:80/index.html

    // 一级域名不同, 所以不同源, 是跨域
    http://www.it666.com:80/index.html
    http://www.itzb.com:80/index.html

    // 二级域名不同, 所以不同源, 是跨域
    http://www.it666.com:80/index.html
    http://edu.it666.com:80/index.html

    // 端口号不同, 所以不同源, 是跨域
    http://www.it666.com:80/index.html
    http://www.it666.com:8090/index.html

    2.同源策略带来的影响
    在同源策略下, 浏览器只允许Ajax请求同源的数据, 不允许请求不同源的数据
    但在企业开发中, 一般情况下为了提升网页的性能, 网页和数据都是单独存储在不同服务器上的
    这时如果再通过Ajax请求数据就会拿不到跨域数据

    3.跨域解决方案
    后面的都不怎么用了，只学jsonp
    jsonp
    document.domain+iframe
    location.hash + iframe
    window.name + iframe
    window.postMessage
    flash等第三方插件
    * */</span>

    <span class="token comment">/*
    当前的网页地址: http://127.0.0.1:80/jQuery/Ajax/19-%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5.html
    请求的资源地址: http://127.0.0.1:80/jQuery/Ajax/19-SameOriginPolicy.php

    当前的网页地址: http://127.0.0.1:63342/jQuery/Ajax/19-%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5.html
    请求的资源地址: http://127.0.0.1:80/jQuery/Ajax/19-SameOriginPolicy.php
    */</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.send&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;http://127.0.0.1:80/jQuery/Ajax/19-SameOriginPolicy.php&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;请求失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[e];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","002同源策略.html.vue"]]);export{d as default};
