import{_ as a,p as n,q as s,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_02-文件上传调试接口" tabindex="-1"><a class="header-anchor" href="#_02-文件上传调试接口" aria-hidden="true">#</a> 02 文件上传调试接口</h1><p>这是首先应该做的事情，而不是写界面</p><h2 id="_1-看后端给的文档" tabindex="-1"><a class="header-anchor" href="#_1-看后端给的文档" aria-hidden="true">#</a> 1 看后端给的文档：</h2><p>单文件上传</p><p>请求路径：<code>/upload/single</code></p><p>请求方法：<code>POST</code></p><p>消息格式：<code>multipart/form-data</code></p><p>字段名称：<code>avatar</code></p><p>允许的后缀名：<code>[&#39;.jpg&#39;,&#39;.jpeg&#39;, &#39;.bmp&#39;, &#39;.webp&#39;, &#39;.gif&#39;, &#39;.png&#39;]</code></p><p>最大尺寸：<code>1M</code></p><p>相应格式：<code>JSON</code></p><p>响应结果示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 成功</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;文件访问的地址&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-vscode发送请求" tabindex="-1"><a class="header-anchor" href="#_2-vscode发送请求" aria-hidden="true">#</a> 2 vscode发送请求</h2><p>去插件市场找 REST Client 插件</p><p>新建文件 aaa.http 编写最原始的请求</p><p>请求方式GET 请求路径（根路径/或/upload） 请求版本HTTP/1.1</p><p>请求主机：Host:port</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/upload/single</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com:8080</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是POST请求，需要 Content-Type <strong>请求体</strong>类型，比如JSON类型</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> &#39;zs&#39;<span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">88</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如 multipart/form-data，bundary表示一个分隔符，示例一：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data;bundary=aaaa</span></span>

--aaaa
第一个字段xxxx
--aaaa
第二个字段xxxx
--aaaa--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例二：（form-data表示格式，name表示字段名）</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data;bundary=aaaa</span></span>

--aaaa
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;loginUsername&quot;</span></span>

2625402133zhy
--aaaa
第二个字段xxxx
--aaaa--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例三：（form-data表示格式，name表示字段名，由于是一个文件，还需 filename 表示文件名，自己可以随便写，只是让服务器参考一下，一般写本地文件名，由于是一个文件，还需<code>Content-Type</code>告诉服务器文件类型[image图片类型，jpeg格式]）</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data;bundary=aaaa</span></span>

--aaaa
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;avatar&quot;;filename=&quot;small.jpg&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">image/jpeg</span></span>

图片的二进制数据，由于直接输入0101会被识别为字符串，所以写为 &lt; ./small.jpg 让REST Client插件找这个图片，变为二进制数据
--aaaa--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终例子：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">www.baidu.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data;bundary=aaaa</span></span>

--aaaa
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;avatar&quot;;filename=&quot;small.jpg&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">image/jpeg</span></span>

&lt; ./img/001-1.jpg
--aaaa--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器是怎么知道上传的文件是否为jpg？</p><p>服务器是通过filename来判断的，所以可以注意一下。不是通过<code>&lt; ./small.jpg</code>判断的，因为这里是二进制，写这个文件名是让插件看到，让插件找到文件。</p>`,31),l=[t];function d(i,o){return n(),s("div",null,l)}const c=a(p,[["render",d],["__file","02文件上传调试接口.html.vue"]]);export{c as default};
