import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_07-ajax之get封装" tabindex="-1"><a class="header-anchor" href="#_07-ajax之get封装" aria-hidden="true">#</a> 07 Ajax之get封装</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function obj2str(obj) {
    /*
    {
        &quot;userName&quot;:&quot;lnj&quot;,
        &quot;userPwd&quot;:&quot;123456&quot;,
        &quot;t&quot;:&quot;3712i9471329876498132&quot;
    }
    */
    obj = obj || {}; // 如果没有传参, 为了添加随机因子,必须自己创建一个对象
    obj.t = new Date().getTime();
    var res = [];
    for(var key in obj){
        // 在URL中是不可以出现中文的, 如果出现了中文需要转码
        // 可以调用encodeURIComponent方法
        // URL中只可以出现字母/数字/下划线/ASCII码
        res.push(encodeURIComponent(key)+&quot;=&quot;+encodeURIComponent(obj[key])); // [userName=lnj, userPwd=123456];
    }
    return res.join(&quot;&amp;&quot;); // userName=lnj&amp;userPwd=123456
}
/**
 * 请求地址
 * 发送请求数据，对象
 * 最大请求时间
 * 请求成功执行函数体
 * 请求失败执行函数体
 * @param url
 * @param obj
 * @param timeout
 * @param success
 * @param error
 */
function ajax(url, obj, timeout, success, error) {
    // 0.将对象转换为字符串
    var str = obj2str(obj); // key=value&amp;key=value;
    // 1.创建一个异步对象
    var xmlhttp, timer;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
    }
    // 2.设置请求方式和请求地址
    /*
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    */
    xmlhttp.open(&quot;GET&quot;, url+&quot;?&quot;+str, true);
    // 3.发送请求
    xmlhttp.send();
    // 4.监听状态的变化
    xmlhttp.onreadystatechange = function (ev2) {
        /*
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
        */
        if(xmlhttp.readyState === 4){
            clearInterval(timer);
            // 判断是否请求成功
            if(xmlhttp.status &gt;= 200 &amp;&amp; xmlhttp.status &lt; 300 ||
                xmlhttp.status === 304){
                // 5.处理返回的结果
                // console.log(&quot;接收到服务器返回的数据&quot;);
                success(xmlhttp);
            }else{
                // console.log(&quot;没有接收到服务器返回的数据&quot;);
                error(xmlhttp);
            }
        }
    }
    // 判断外界是否传入了超时时间
    if(timeout){
        timer = setInterval(function () {
            console.log(&quot;中断请求&quot;);
            xmlhttp.abort();
            clearInterval(timer);
        }, timeout);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,u){return i(),e("div",null,v)}const c=n(l,[["render",a],["__file","07Ajax之get封装.html.vue"]]);export{c as default};
