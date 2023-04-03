import{_ as i,p as e,q as n,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_03-常用全局函数" tabindex="-1"><a class="header-anchor" href="#_03-常用全局函数" aria-hidden="true">#</a> 03 常用全局函数</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//暂停5毫秒
sleep(5000);

//返回最近一次监测到的正在运行的应用的包名，一般可以认为就是当前正在运行的应用的包名。
currentPackage()

//返回最近一次监测到的正在运行的Activity的名称，一般可以认为就是当前正在运行的Activity的名称。
currentActivity()

//设置剪贴板内容。此剪贴板即系统剪贴板，在一般应用的输入框中&quot;粘贴&quot;既可使用。
setClip(text)

//返回系统剪贴板的内容。
getClip()
toast(&quot;剪贴板内容为:&quot; + getClip());

//等待指定的Activity出现，period为检查Activity的间隔。
waitForActivity(activity[, period = 200])

//等待指定的应用出现。例如waitForPackage(&quot;com.tencent.mm&quot;)为等待当前界面为微信。
waitForPackage(package[, period = 200])

exit()//立即停止脚本运行。

随机数

规定版本（了解）

获取权限（了解）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function v(c,t){return e(),n("div",null,a)}const u=i(d,[["render",v],["__file","03常用全局函数.html.vue"]]);export{u as default};
