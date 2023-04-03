import{_ as e,p as i,q as n,a1 as d}from"./framework-96b046e1.js";const o={},a=d(`<h1 id="_15-cookie封装" tabindex="-1"><a class="header-anchor" href="#_15-cookie封装" aria-hidden="true">#</a> 15 cookie封装</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>window.onload = function (ev) {
    // document.cookie = &quot;age=88;&quot;;

    // addCookie(&quot;gender&quot;, &quot;male&quot;);
    // addCookie(&quot;score&quot;, &quot;998&quot;, 1, &quot;/&quot;, &quot;127.0.0.1&quot;);
    function addCookie(key, value, day, path, domain) {
        // 1.处理默认保存的路径
        // if(!path){
        //     var index = window.location.pathname.lastIndexOf(&quot;/&quot;)
        //     var currentPath = window.location.pathname.slice(0, index);
        //     path = currentPath;
        // }
        var index = window.location.pathname.lastIndexOf(&quot;/&quot;)
        var currentPath = window.location.pathname.slice(0, index);
        path = path || currentPath;
        // 2.处理默认保存的domain
        domain = domain || document.domain;
        // 3.处理默认的过期时间
        if(!day){
            document.cookie = key+&quot;=&quot;+value+&quot;;path=&quot;+path+&quot;;domain=&quot;+domain+&quot;;&quot;;
        }else{
            var date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = key+&quot;=&quot;+value+&quot;;expires=&quot;+date.toGMTString()+&quot;;path=&quot;+path+&quot;;domain=&quot;+domain+&quot;;&quot;;
        }
    }

    function getCookie(key) {
        // console.log(document.cookie);
        var res = document.cookie.split(&quot;;&quot;);
        // console.log(res);
        for(var i = 0; i &lt; res.length; i++){
            // console.log(res[i]);
            var temp = res[i].split(&quot;=&quot;);
            // console.log(temp);
            if(temp[0].trim() === key){
                return temp[1];
            }
        }
    }
    console.log(getCookie(&quot;name&quot;));

    // 默认情况下只能删除默认路径中保存的cookie, 如果想删除指定路径保存的cookie, 那么必须在删除的时候指定路径才可以
    function delCookie(key, path) {
        addCookie(key, getCookie(key), -1, path);
    }
    delCookie(&quot;name&quot;, &quot;/&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function s(t,u){return i(),n("div",null,l)}const c=e(o,[["render",s],["__file","15cookie封装.html.vue"]]);export{c as default};
