import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_10-http" tabindex="-1"><a class="header-anchor" href="#_10-http" aria-hidden="true">#</a> 10 http</h1><p>http模块，服务器模块。</p><h2 id="_01-http模块" tabindex="-1"><a class="header-anchor" href="#_01-http模块" aria-hidden="true">#</a> 01 http模块</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是HTTP模块
通过Nodejs提供的http模块，我们可以快速的构建一个web服务器,
也就是快速实现过去PHP服务器的功能(接收浏览器请求、响应浏览器请求等)

2.通过HTTP模块实现服务器功能步骤
2.1导入HTTP模块
2.2创建服务器实例对象
2.3绑定请求事件
2.4监听指定端口请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on(&quot;request&quot;, function (req, res) {
    // end方法的作用: 结束本次请求并且返回数据
    // res.end(&quot;www.it666.com&quot;);
    // writeHead方法的作用: 告诉浏览器返回的数据是什么类型的, 返回的数据需要用什么字符集来解析，200是返回的状态码
    res.writeHead(200, {
        &quot;Content-Type&quot;: &quot;text/plain; charset=utf-8&quot;
    });
    res.end(&quot;知播渔&quot;);
});
// 3.指定监听的端口
server.listen(3000);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-搭建服务器简写" tabindex="-1"><a class="header-anchor" href="#_02-搭建服务器简写" aria-hidden="true">#</a> 02 搭建服务器简写</h2><p>利用链式编程方式搭建服务器。疑问：链式编程什么意思？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;知播渔www666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-路径分发" tabindex="-1"><a class="header-anchor" href="#_03-路径分发" aria-hidden="true">#</a> 03 路径分发</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是路径分发?
路径分发也称之为路由, 就是根据不同的请求路径返回不同的数据

2.如何根据不同的请求路径返回不同的数据?
通过请求监听方法中的request对象, 我们可以获取到当前请求的路径
通过判断请求路径的地址就可以实现不同的请求路径返回不同的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>req.url判断路径</li><li>res.end结束请求，同时也返回数据，写多个end之返回第一个，因为结束了</li><li>res.write只返回数据，不结束请求</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.注册请求监听</span>
<span class="token comment">/*
request对象其实是http.IncomingMessage 类的实例
response对象其实是http.ServerResponse 类的实例
* */</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(req.url);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 注意点: 如果通过end方法来返回数据, 那么只会返回一次</span>
        <span class="token comment">// res.end(&quot;首页1&quot;);</span>
        <span class="token comment">// res.end(&quot;首页2&quot;);</span>
        <span class="token comment">// 注意点: 如果通过write方法来返回数据, 那么可以返回多次</span>
        <span class="token comment">//         write方法不具备结束本次请求的功能, 所以还需要手动的调用end方法来结束本次请求</span>
        res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;首页1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;首页2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;没有数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-响应完整网页" tabindex="-1"><a class="header-anchor" href="#_04-响应完整网页" aria-hidden="true">#</a> 04 响应完整网页</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.响应完整页面
拿到用户请求路径之后, 只需要利用fs模块将对应的网页返回即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉的代码没必要看了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.注册请求监听</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    if(req.url.startsWith(&quot;/index&quot;)){
        // let filePath = path.join(__dirname, &quot;www&quot;, &quot;index.html&quot;);
        // let filePath = path.join(__dirname, &quot;www&quot;, req.url);
        // fs.readFile(filePath, &quot;utf8&quot;, function (err, content) {
        //     if(err){
        //         res.end(&quot;Server Error&quot;);
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else if(req.url.startsWith(&quot;/login&quot;)){
        // let filePath = path.join(__dirname, &quot;www&quot;, req.url);
        // fs.readFile(filePath, &quot;utf8&quot;, function (err, content) {
        //     if(err){
        //         res.end(&quot;Server Error&quot;);
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else{
        res.writeHead(200, {
            &quot;Content-Type&quot;: &quot;text/plain; charset=utf-8&quot;
        });
        res.end(&quot;没有数据&quot;);
    }
    */</span>
    <span class="token function">readFile</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;www&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Server Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-响应静态资源" tabindex="-1"><a class="header-anchor" href="#_05-响应静态资源" aria-hidden="true">#</a> 05 响应静态资源</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.响应静态资源
在给浏览器返回数据的时候,
如果没有指定响应头的信息,
如果没有设置返回数据的类型,
那么浏览器不一定能正确的解析

所以无论返回什么类型的静态资源都需要添加对应的响应头信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>加载其它的资源不能写utf8。</li><li>如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示。</li><li><code>./mime.json</code>。设置响应头。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// let fs = require(&quot;fs&quot;);</span>
<span class="token comment">// let mime = require(&quot;./mime.json&quot;);</span>
<span class="token keyword">let</span> ss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./15-StaticServer.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.注册请求监听</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// readFile(req, res);</span>
    <span class="token comment">// let rootPath = path.join(__dirname, &quot;www&quot;);</span>
    <span class="token keyword">let</span> rootPath <span class="token operator">=</span> <span class="token string">&quot;C:\\\\Users\\\\Jonathan_Lee\\\\Desktop\\\\abc&quot;</span><span class="token punctuation">;</span>
    ss<span class="token punctuation">.</span><span class="token function">StaticServer</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> rootPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
function readFile(req, res) {
    let filePath = path.join(__dirname, &quot;www&quot;, req.url);
    // console.log(filePath);
    // 注意点:
    // 1.加载其它的资源不能写utf8
    // 2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    let extName = path.extname(filePath);
    let type = mime[extName];
    if(type.startsWith(&quot;text&quot;)){
        type += &quot;; charset=utf-8;&quot;;
    }
    res.writeHead(200, {
        &quot;Content-Type&quot;: type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end(&quot;Server Error&quot;);
        }
        res.end(content);
    });
}
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-响应静态资源封装" tabindex="-1"><a class="header-anchor" href="#_06-响应静态资源封装" aria-hidden="true">#</a> 06 响应静态资源封装</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// let path = require(&quot;path&quot;);</span>
<span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> mime <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./mime.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> rootPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>rootPath<span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(filePath);</span>
    <span class="token comment">/*
    注意点:
    1.加载其它的资源不能写utf8
    2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    * */</span>
    <span class="token keyword">let</span> extName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> type <span class="token operator">=</span> mime<span class="token punctuation">[</span>extName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        type <span class="token operator">+=</span> <span class="token string">&quot;; charset=utf-8;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> type
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Server Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>StaticServer <span class="token operator">=</span> readFile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我的总结</strong></p><p>服务器构建共两部：</p><ol><li>告诉浏览器，我一会而要给你发送个文件，这个文件要 “ 用什么方式 ” 读取。就是writeHead。</li><li>读取并返回文件。</li></ol><h2 id="_07-get参数处理" tabindex="-1"><a class="header-anchor" href="#_07-get参数处理" aria-hidden="true">#</a> 07 Get参数处理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.如何拿到Get请求传递过来的参数
使用URL模块

url.format(urlObject)  将对象转换为路径
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])  将路径转换为对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// let str = &quot;http://root:123456@www.it666.com:80/index.html?name=lnj&amp;age=68#banner&quot;;</span>
<span class="token comment">// let obj = url.parse(str, true);</span>
<span class="token comment">// console.log(obj);</span>
<span class="token comment">// console.log(obj.query.name);</span>
<span class="token comment">// console.log(obj.query.age);</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(req.url);</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>query<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>query<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-post参数处理" tabindex="-1"><a class="header-anchor" href="#_08-post参数处理" aria-hidden="true">#</a> 08 Post参数处理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.req绑定data，end
1.如何拿到POST请求传递过来的参数
使用querystring模块

querystring.parse(str[, sep[, eq[, options]]])  将参数转换为对象
querystring.stringify(obj[, sep[, eq[, options]]]) 将对象转换为参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> queryString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;querystring&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.定义变量保存传递过来的参数</span>
    <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 注意点: 在NODEJS中 ,POST请求的参数我们不能一次性拿到, 必须分批获取</span>
    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 每次只能拿到一部分数据</span>
        params <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里才能拿到完整的数据</span>
        <span class="token comment">// console.log(params);</span>
        <span class="token keyword">let</span> obj <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// console.log(obj.userName);</span>
        <span class="token comment">// console.log(obj.password);</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>userName <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>踩坑：<code> req.on(&quot;end&quot;, function () {xxx})</code>执行到这，后面的代码不会执行了，所以需要把你要执行的代码全全全写在xxx处。</p><h2 id="_09-区分get与post" tabindex="-1"><a class="header-anchor" href="#_09-区分get与post" aria-hidden="true">#</a> 09 区分Get与Post</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.在服务端如何区分用户发送的是GET请求和POST请求?
通过HTTP模块http.IncomingMessage 类的.method属性

req.method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(req.method);</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;利用GET请求的方式处理参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;利用POST请求的方式处理参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-练习" tabindex="-1"><a class="header-anchor" href="#_10-练习" aria-hidden="true">#</a> 10 练习</h2><p>写一个动态页面，能返回查询的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> queryString <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;querystring&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> template <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;art-template&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> persons <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lisi&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;33&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;zhangsan&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 1.创建一个服务器实例对象</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.注册请求监听</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">let</span> obj <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> obj<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
       fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
               res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                   <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain; charset=utf-8&quot;</span>
               <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Page Not Found&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
               <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html; charset=utf-8&quot;</span>
           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/info&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
       req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           params <span class="token operator">+=</span> chunk<span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">let</span> obj <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">let</span> per <span class="token operator">=</span> persons<span class="token punctuation">[</span>obj<span class="token punctuation">.</span>userName<span class="token punctuation">]</span><span class="token punctuation">;</span>
           <span class="token comment">// console.log(per);</span>
           <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token comment">/*
           fs.readFile(filePath, &quot;utf8&quot;, function (err, content) {
               if(err){
                   res.writeHead(404, {
                       &quot;Content-Type&quot;: &quot;text/plain; charset=utf-8&quot;
                   });
                   res.end(&quot;Page Not Found&quot;);
               }
               content = content.replace(&quot;!!!name!!!&quot;, per.name);
               content = content.replace(&quot;!!!gender!!!&quot;, per.gender);
               content = content.replace(&quot;!!!age!!!&quot;, per.age);
               res.end(content);
           });
            */</span>
           <span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> per<span class="token punctuation">)</span><span class="token punctuation">;</span>
           res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
               <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/html; charset=utf-8&quot;</span>
           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.指定监听的端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./info.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>查询<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>info.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    &lt;li&gt;姓名: !!!name!!!&lt;/li&gt;--&gt;</span>
<span class="token comment">&lt;!--    &lt;li&gt;性别: !!!gender!!!&lt;/li&gt;--&gt;</span>
<span class="token comment">&lt;!--    &lt;li&gt;年龄: !!!age!!!&lt;/li&gt;--&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>姓名: &lt;%=name%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>性别: &lt;%=gender%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>年龄: &lt;%=age%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","10http.html.vue"]]);export{r as default};
