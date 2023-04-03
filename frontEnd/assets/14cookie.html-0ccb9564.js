import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},c=a(`<h1 id="_14-cookie" tabindex="-1"><a class="header-anchor" href="#_14-cookie" aria-hidden="true">#</a> 14 cookie</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    cookie: 会话跟踪技术 客户端
    session:  会话跟踪技术  服务端

    cookie作用:
    将网页中的数据保存到浏览器中

    cookie生命周期:
    默认情况下生命周期是一次会话(浏览器被关闭)
    如果通过expires=设置了过期时间, 并且过期时间没有过期, 那么下次打开浏览器还是存在
    如果通过expires=设置了过期时间, 并且过期时间已经过期了,那么会立即删除保存的数据

    cookie注意点:
    cookie默认不会保存任何的数据
    cookie不能一次性保存多条数据, 要想保存多条数据,只能一条一条的设置
    cookie有大小和个数的限制
    个数限制: 20~50
    大小限制: 4KB左右

    cookie作用范围:
    同一个浏览器的同一个路径下访问
    如果在同一个浏览器中, 默认情况下下一级路径就可以访问
    如果在同一个浏览器中, 想让上一级目录也能访问保存的cookie, 那么需要添加一个path属性才可以;
    /代表根目录，根目录下所有子目录都能访问
    document.cookie = &quot;name=zs;path=/;&quot;;

    例如:
    保存到了www.it666.com/jQuery/Ajax/路径下,
    我们想在 www.it666.com/jQuery/Ajax/13-weibo/,
    和 www.it666.com/jQuery/ 路径下也能访问

    例如:
    我们在www.it666.com下面保存了一个cookie,
    那么我们在edu.it666.com中是无法访问的
    如果想在edu.it666.com中也能访问, 那么我们需要再添加一个domain属性才可以;
    document.cookie = &quot;name=zs;path=/;domain=it666.com;&quot;;
    */</span>
    <span class="token comment">// alert(document.cookie);</span>
    <span class="token comment">// var date = new Date();</span>
    <span class="token comment">// date.setDate(date.getDate() - 1);</span>
    <span class="token comment">// document.cookie = &quot;age=33;expires=&quot;+date.toGMTString()+&quot;;&quot;;</span>
    <span class="token comment">// alert(document.cookie);</span>

    <span class="token comment">// document.cookie = &quot;name=lnj;&quot;;</span>
    <span class="token comment">// document.cookie = &quot;age=33;&quot;;</span>
    <span class="token comment">// alert(document.cookie);</span>
    <span class="token comment">// document.cookie = &quot;name=lnj;age=33;gender=male;&quot;;</span>

    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;name=zs;path=/;domain=127.0.0.1;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[c];function l(t,d){return s(),e("div",null,o)}const v=n(i,[["render",l],["__file","14cookie.html.vue"]]);export{v as default};
