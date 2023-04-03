import{_ as t,M as e,p,q as o,R as n,t as s,N as c,a1 as l}from"./framework-96b046e1.js";const i={},u=n("h1",{id:"_29-正则表达式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_29-正则表达式","aria-hidden":"true"},"#"),s(" 29 正则表达式")],-1),r=n("p",null,"学习",-1),d={href:"https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="_01-背景介绍" tabindex="-1"><a class="header-anchor" href="#_01-背景介绍" aria-hidden="true">#</a> 01 背景介绍</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.什么是正则表达式?
正则表达式就是对字符串操作的一种逻辑公式

2.正则表达式的作用?
1.在字符串&quot;查找&quot;是否包含指定子串
2.从字符串中&quot;提取&quot;指定子串
3.对字符串中指定的内容进行&quot;替换&quot;
 */</span>
<span class="token comment">// 1.字符串查找</span>
<span class="token comment">/*
let str = &quot;123abc456&quot;;
let index = str.indexOf(&quot;abc&quot;);
let index = str.lastIndexOf(&quot;abc&quot;);
let flag = str.includes(&quot;abc&quot;);
 */</span>
<span class="token comment">// 2.字符串提取</span>
<span class="token comment">/*
let str = &quot;123abc456&quot;;
let startIndex = str.indexOf(&quot;a&quot;);
console.log(str.substr(startIndex, &quot;abc&quot;.length));
 */</span>
<span class="token comment">// 3.字符串替换</span>
<span class="token comment">/*
let str = &quot;123abc456&quot;;
str.replace(&quot;abc&quot;, &quot;it666&quot;);
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-基础介绍" tabindex="-1"><a class="header-anchor" href="#_02-基础介绍" aria-hidden="true">#</a> 02 基础介绍</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 1.利用正则表达式匹配(查找)</span>
<span class="token comment">/*
let str = &quot;123abc456&quot;;
// 1.创建一个正则表达式对象
// 2.指定匹配的规则
// 注意点: 默认情况下在正则表达式中是区分大小写的
let reg = new RegExp(&quot;A&quot;, &quot;i&quot;);
let res = reg.test(str);
console.log(res);
 */</span>
<span class="token comment">/*
let str = &quot;abc2020-1-11def&quot;;
// 通过构造函数创建正则表达式对象
// let reg = new RegExp(&quot;\\\\d{4}-\\\\d{1,2}-\\\\d{1,2}&quot;);
// 通过字面量来创建正则表达式对象
let reg = /\\d{4}-\\d{1,2}-\\d{1,2}/;
let res = reg.test(str);
console.log(res);
 */</span>

<span class="token comment">// 2.通过正则表达式提取符合规则的字符串</span>
<span class="token comment">/*
let str = &quot;abc2020-1-11def2019-11-11fdjsklf&quot;;
// 注意点: 默认情况下在正则表达式中一旦匹配就会停止查找
let reg = /\\d{4}-\\d{1,2}-\\d{1,2}/g;
let res = str.match(reg);
console.log(res);
console.log(res[0]);
console.log(res[1]);
 */</span>

<span class="token comment">// 3.通过正则表达式替换符合规则的字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;abc2020-1-11def2019-11-11fdjsklf&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{4}-\\d{1,2}-\\d{1,2}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;it666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. test方法</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;abc123456adfj&#39;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span>
reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// true 判断字符串是否包含a </span>

<span class="token comment">// 2. i不区分大小写</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>

<span class="token comment">// 3. g全局，从上到下匹配所有的，而非匹配到第一个就停止</span>

<span class="token comment">// 4. 元字符，例如\\d匹配任意一个数字，</span>
<span class="token comment">// 4.1 但使用正则对象创建正则表达式时要写为\\\\d</span>
<span class="token comment">// 4.2 使用字面量创建正则表达式时写为\\d，例如/\\d/</span>

<span class="token comment">// 5. 量词，</span>
<span class="token comment">// 5.1   例如\\d{4}，表示查找像2010这样的四个数字</span>
<span class="token comment">// 5.2   例如\\d{1,2}，表示查找一个05或5的数字，最少查找1个，最多查找2个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-test方法返回结果不一致" tabindex="-1"><a class="header-anchor" href="#_03-test方法返回结果不一致" aria-hidden="true">#</a> 03 test方法返回结果不一致</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例如：第一次打印true，第二次就是false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原因：第一次调用的时候是从第0位开始匹配，第二次调用是接着上一次匹配结束位置开始查找。</p></blockquote><blockquote><p>解决方法一：每次调用的时候都将陪陪的位置置为0</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>reg<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span class="token number">0</span>
reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决方法二：不是必须使用全局匹配模式（g）时，将g去掉就可以了。</p></blockquote><h2 id="_04-常用正则表达式" tabindex="-1"><a class="header-anchor" href="#_04-常用正则表达式" aria-hidden="true">#</a> 04 常用正则表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--
常用正则表达式合集:
验证数字：^[0-9]*$
验证n位的数字：^\\d{n}$
验证至少n位数字：^\\d{n,}$
验证m-n位的数字：^\\d{m,n}$
验证零和非零开头的数字：^(0|[1-9][0-9]*)$
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
验证非零的正整数：^\\+?[1-9][0-9]*$
验证非零的负整数：^\\-[1-9][0-9]*$
验证非负整数（正整数 + 0）  ^\\d+$
验证非正整数（负整数 + 0）  ^((-\\d+)|(0+))$
验证长度为3的字符：^.{3}$
验证由26个英文字母组成的字符串：^[A-Za-z]+$
验证由26个大写英文字母组成的字符串：^[A-Z]+$
验证由26个小写英文字母组成的字符串：^[a-z]+$
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
验证由数字、26个英文字母或者下划线组成的字符串：^\\w+$

验证用户密码:^[a-zA-Z]\\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
验证是否含有 ^%&amp;&#39;,;=?$\\&quot; 等字符：[^%&amp;&#39;,;=?$\\x22]+
验证汉字：^[\\u4e00-\\u9fa5],{0,}$
验证Email地址：^\\w+[-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$
验证InternetURL：^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
验证电话号码：^(\\d3,4|\\d{3,4}-)?\\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
验证身份证号（15位或18位数字）：^\\d{15}|\\d{}18$
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$    正确格式为：01、09和1、31。
整数：^-?\\d+$
非负浮点数（正浮点数 + 0）：^\\d+(\\.\\d+)?$
正浮点数   ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$
非正浮点数（负浮点数 + 0） ^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$
负浮点数  ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数  ^(-?\\d+)(\\.\\d+)?$
--&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-正则表达式格式化日期" tabindex="-1"><a class="header-anchor" href="#_05-正则表达式格式化日期" aria-hidden="true">#</a> 05 正则表达式格式化日期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> crtTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 *  y  年， M  月，d  天，h 小时， m 分钟，s 秒钟
 *  示例1：dateFormat(&quot;yyyy-MM-dd hh:mm:ss&quot;, new Date());
 *  示例2：dateFormat(&quot;hh:mm:ss&quot;, new Date());
 * <span class="token keyword">@param</span> fmt:格式yyyy-MM-dd hh:mm:ss
 * <span class="token keyword">@param</span> date:日期对象
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">let</span> res1 <span class="token operator">=</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd hh:mm:ss&quot;</span><span class="token punctuation">,</span> crtTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res2 <span class="token operator">=</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">,</span> crtTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res3 <span class="token operator">=</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;hh:mm:ss&quot;</span><span class="token punctuation">,</span> crtTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token parameter">fmt<span class="token punctuation">,</span> date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.处理年</span>
    <span class="token comment">// 1.1找到yyyy</span>
    <span class="token comment">// +在正则表达式中表示匹配1个或多个连续的指定字符</span>
    <span class="token comment">// let reg = /y+/;</span>
    <span class="token keyword">let</span> yearStr <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">y+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>yearStr<span class="token punctuation">)</span><span class="token punctuation">{</span>
        yearStr <span class="token operator">=</span> yearStr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.2获取到当前的年</span>
        <span class="token keyword">let</span> yearNum <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 2019</span>
        yearNum <span class="token operator">=</span> yearNum<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> yearStr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token comment">// 1.3利用当前的年替换掉yyyy</span>
        fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>yearStr<span class="token punctuation">,</span> yearNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.处理其他的时间</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;M+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;d+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;h+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;m+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;s+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.1遍历取出所有的时间</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// let reg = new RegExp(&quot;M+&quot;);</span>
        <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 取出格式化字符串中对应的格式字符 MM dd hh mm ss</span>
        <span class="token keyword">let</span> fmtStr <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>fmtStr<span class="token punctuation">)</span><span class="token punctuation">{</span>
            fmtStr <span class="token operator">=</span> fmtStr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 单独处理一位或者两位的时间</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>fmtStr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 一位</span>
                fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>fmtStr<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// 两位</span>
                <span class="token keyword">let</span> numStr <span class="token operator">=</span> <span class="token string">&quot;00&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//&quot;00&quot; + 4 = &quot;004&quot;</span>
                <span class="token comment">//&quot;00&quot; + 23 = &quot;0023&quot;</span>
                numStr <span class="token operator">=</span> numStr<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>fmtStr<span class="token punctuation">,</span> numStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.将格式化之后的字符串返回</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**************************************时间格式化处理************************************/</span>
<span class="token keyword">function</span> <span class="token function">dateFmt</span><span class="token punctuation">(</span><span class="token parameter">fmt<span class="token punctuation">,</span>date</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;M+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment">//月份</span>
        <span class="token string-property property">&quot;d+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                    <span class="token comment">//日</span>
        <span class="token string-property property">&quot;h+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                   <span class="token comment">//小时</span>
        <span class="token string-property property">&quot;m+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                 <span class="token comment">//分</span>
        <span class="token string-property property">&quot;s+&quot;</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                 <span class="token comment">//秒</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(y+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span>
        fmt<span class="token operator">=</span>fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>fmt<span class="token punctuation">)</span><span class="token punctuation">)</span>
            fmt <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">,</span> <span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;00&quot;</span><span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(m,b){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[n("a",d,[s("JavaScript RegExp 参考手册 (w3school.com.cn)"),c(a)])]),k])}const f=t(i,[["render",v],["__file","29正则表达式.html.vue"]]);export{f as default};
