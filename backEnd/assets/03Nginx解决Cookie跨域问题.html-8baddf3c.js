import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const a={},d=s(`<h1 id="_03-nginx解决cookie跨域问题" tabindex="-1"><a class="header-anchor" href="#_03-nginx解决cookie跨域问题" aria-hidden="true">#</a> 03 Nginx解决Cookie跨域问题</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.Nginx安装和使用
1.1安装
下载解压即可
http://nginx.org/en/download.html
1.2使用
修改配置文件
worker_processes 4; // CPU核数
location / {  // 请求根路径代理的地址
	proxy_pass http://192.168.0.107:3001;
}
location /api { // 请求/api代理的地址
	proxy_pass http://127.0.0.1:3000;
	proxy_set_header Host $host;
}
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置nginx文件4：15</p>`,3),l=[d];function r(c,o){return e(),i("div",null,l)}const v=n(a,[["render",r],["__file","03Nginx解决Cookie跨域问题.html.vue"]]);export{v as default};
