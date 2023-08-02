import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_02-正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#_02-正向代理和反向代理" aria-hidden="true">#</a> 02 正向代理和反向代理</h1><h2 id="_1-nginx下载" tabindex="-1"><a class="header-anchor" href="#_1-nginx下载" aria-hidden="true">#</a> 1. nginx下载</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://nginx.org/en/download.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-nginx配置" tabindex="-1"><a class="header-anchor" href="#_2-nginx配置" aria-hidden="true">#</a> 2. nginx配置</h2><p>解压后找到 conf 文件夹---&gt;nginx.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment"># 告诉他我的电脑是几核的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重要的是需要找到内容部分的http---&gt;server部分，如下，共有3点，下面呢容会标记。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    server <span class="token punctuation">{</span>
    	<span class="token comment"># ---------------------------------------------</span>
        listen       <span class="token number">8080</span><span class="token punctuation">;</span>  <span class="token comment"># 第1点：监听的端口号</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment"># location / {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#    index  index.html index.htm;</span>
        <span class="token comment"># }</span>

        <span class="token comment"># location / {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#    index  index.html index.htm;</span>
        <span class="token comment"># }</span>
        <span class="token comment"># -----------------------------------------------</span>
        <span class="token comment"># 第二点：注视掉上面原来的，新写一段自己的。</span>
        <span class="token comment"># 第二点：/ 表示如果请求的是8080端口号根路径，则代理到http://192.168.0.100:3001</span>
        <span class="token comment"># 第二点：/api 表示如果请求的是8080端口号/api，则代理到http://127.0.0.1:3000</span>
		location / <span class="token punctuation">{</span>
            proxy_pass: http://192.168.0.100:3001
        <span class="token punctuation">}</span>
        location /api <span class="token punctuation">{</span>
            proxy_pass: http://127.0.0.1:3000
            <span class="token comment"># -----------------------------------------------</span>
            <span class="token comment"># 第三点：加上下面这句话是为了设置cookie</span>
            <span class="token comment"># 第三点接上一句：代表响应头的地址设置为了代理服务器8080端口的地址，也就是把cookie设置给了8080</span>
            proxy_set_header Host <span class="token variable">$host</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-启动nginx" tabindex="-1"><a class="header-anchor" href="#_3-启动nginx" aria-hidden="true">#</a> 3. 启动nginx</h2><p>双击根目录下<code>nginx.exe</code>.</p><h2 id="_4-teacher" tabindex="-1"><a class="header-anchor" href="#_4-teacher" aria-hidden="true">#</a> 4. teacher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.正向代理
代理服务器是为用户服务, 我们称之为正向代理
例如: 访问谷歌
用户访问不了谷歌, 但是我可以访问一台海外的服务器, 这台海外服务器又可以访问谷歌
那么&#39;用户&#39;就可以先访问&#39;海外的服务器&#39;, 再通过&#39;海外的服务器&#39;访问谷歌, 这就是正向代理

2.正向代理的用途
- 访问原来无法访问的资源，如google
- 对客户端访问授权，上网进行认证
- ... ...
* */</span>
<span class="token comment">/*
1.反向代理
反向代理服务器是为&#39;服务器&#39;服务,我们称之为反向代理

2.反向代理的用途
- 负载均衡，通过反向代理服务器来优化网站的负载
- 前后端分离, 统一请求地址
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function t(d,o){return s(),e("div",null,c)}const p=n(i,[["render",t],["__file","02正向代理和反向代理.html.vue"]]);export{p as default};
