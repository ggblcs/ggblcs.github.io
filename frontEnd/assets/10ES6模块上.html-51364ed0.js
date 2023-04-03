import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_10-es6模块上" tabindex="-1"><a class="header-anchor" href="#_10-es6模块上" aria-hidden="true">#</a> 10 ES6模块上</h1><blockquote><p>写前端项目更专业的写法--import取代require</p></blockquote><h2 id="_01-提炼-es6-export-import" tabindex="-1"><a class="header-anchor" href="#_01-提炼-es6-export-import" aria-hidden="true">#</a> 01 提炼 ES6 export import</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// export与import的用法大致分为两种。

// 【用法1】 export default mmm mmm是随意的，可以是对象，也可以不是。
// 【用法2】 export { aaa } 没有default时必需导出对象
// 【用法2】 export let aaa = 222; 虽然可以这样，但接受时与export { aaa } 一样，所以归为一类。

// 【对应用法1】import qqq from &quot;./b.js&quot;; qqq可以随意命名
// 【对应用法2】import {aaa as str} from &quot;./a.js&quot;; aaa必须与原名一样，且必须用{}接受
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>暴露与接收方法一</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./a.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">//导入和接收时变量名必须一致，都是name</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>name <span class="token keyword">as</span> str<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./a.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">//修改别名，原名失效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>暴露与接收方法二</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> name<span class="token punctuation">;</span>

<span class="token keyword">import</span> name <span class="token keyword">from</span> <span class="token string">&quot;./b.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> str <span class="token keyword">from</span> <span class="token string">&quot;./b.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">//仍然可以</span>
<span class="token comment">/*
注意点:
1.如果是通过export default xxx;导出数据, 那么在接收导出数据的时候变量名称可以和导出的明白不一致
2.如果是通过export default xxx;导出数据, 那么在模块中只能使用一次export default
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>混合使用</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> say<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//导出</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Person<span class="token punctuation">;</span> <span class="token comment">//导出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Person<span class="token punctuation">,</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> say<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./c.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">//引入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_02-js中使用es6模块报错" tabindex="-1"><a class="header-anchor" href="#_02-js中使用es6模块报错" aria-hidden="true">#</a> 02 js中使用ES6模块报错</h2><p><strong>报错是指不使用webpack的情况下直接import，使用webpack打包的话就不存在import了，就不会报错了。</strong></p><p>在node环境中可以使用node模块进行导出和导入并且能正常运行。</p><p>但是新建两个js文件，使用ES6模块进行导入就会报错。</p><p>处理方法：使用<code>npm init -y</code>命令创建<code>package.json</code>文件并在文件中使用下面配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**注意：**要使用webstrom打开</p><h2 id="_03-html中使用es6模块报错" tabindex="-1"><a class="header-anchor" href="#_03-html中使用es6模块报错" aria-hidden="true">#</a> 03 HTML中使用ES6模块报错</h2><p><strong>报错是指不使用webpack的情况下直接import，使用webpack打包的话就不存在import了，就不会报错了。</strong></p><p>除了上面的<code>1.1 js中使用ES6模块报错</code>配置外，还需要在 html 文件中引入 js 文件时进行额外配置：声明<code>type=&quot;module&quot;</code>，例子如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**注意：**要使用webstrom打开</p><h2 id="_04-原文" tabindex="-1"><a class="header-anchor" href="#_04-原文" aria-hidden="true">#</a> 04 原文</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.ES6模块化
在ES6出现之前，JS不像其他语言拥有“模块化”这一概念，于是为了支持JS模块化
我们使用类、立即执行函数或者第三方插件(RequireJS、seaJS)来实现模块化
但是在ES6出现之后, 上述解决方案都已经被废弃, 因为ES6中正式引入了模块化的概念

ES6模块化模块和NodeJS中一样, 一个文件就是一个模块, 模块中的数据都是私有的
ES6模块化模块和NodeJS中一样, 可以通过对应的关键字暴露模块中的数据,
                             可以通过对应的关键字导入模块, 使用模块中暴露的数据

2.ES6模块化使用
2.1常规导出
2.1.1分开导入导出
export xxx;
import {xxx} from &quot;path&quot;;

2.1.2一次性导入导出
export {xxx, yyy, zzz};
import {xxx, yyy, zzz} from &quot;path&quot;;

注意点:
接收导入变量名必须和导出变量名一致
如果想修改接收变量名可以通过 xxx as newName方式
变量名被修改后原有变量名自动失效

2.2默认导入导出
export default xxx;
import xxx from &quot;path&quot;;

注意点:
一个模块只能使用一次默认导出, 多次无效
默认导出时, 导入的名称可以和导出的名称不一致
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>a.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>b.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> name<span class="token punctuation">;</span>

<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>c.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> say<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>index.js</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
ES6模块化的第一种方式
导出数据: export {xxx};
导入数据: import {xxx} from &quot;path&quot;;
* */</span>
<span class="token comment">/*
注意点:
1.如果是通过export {xxx};方式导出数据, 那么在导入接收的时候接收的变量名称必须和导出的名称一致
  究其原因是因为在导入的时候本质上是ES6的解构赋值
2.如果是通过export {xxx};方式导出数据, 又想在导入数据的时候修改接收的变量名称, 那么可以使用as来修改
  但是如果通过as修改了接收的变量名称, 那么原有的变量名称就会失效
* */</span>
<span class="token comment">/*
// import {name} from &quot;./a.js&quot;;
import {str} from &quot;./a.js&quot;;

console.log(str);
 */</span>
<span class="token comment">/*
let obj = {
    name: &quot;lnj&quot;,
    age: 34
};
// let {name, age} = obj;
// console.log(name);
let {str, age} = obj;
console.log(str);
console.log(age);
 */</span>
<span class="token comment">/*
import {name as str} from &quot;./a.js&quot;;

console.log(name);
console.log(str);
 */</span>


<span class="token comment">/*
ES6模块化的第二种方式
导出数据: export default xxx;
导入数据: import xxx from &quot;path&quot;;
* */</span>
<span class="token comment">/*
注意点:
1.如果是通过export default xxx;导出数据, 那么在接收导出数据的时候变量名称可以和导出的明白不一致
2.如果是通过export default xxx;导出数据, 那么在模块中只能使用一次export default
* */</span>
<span class="token comment">/*
// import name from &quot;./b.js&quot;;
import str from &quot;./b.js&quot;;

console.log(str);
 */</span>
<span class="token comment">/*
import name from &quot;./b.js&quot;;
import age from &quot;./b.js&quot;;
console.log(name);
console.log(age);
 */</span>
<span class="token comment">/*
import {name, age} from &quot;./a.js&quot;;

console.log(name);
console.log(age);
 */</span>

<span class="token comment">/*
// 两种方式混合使用
import Person,{name, age, say} from &quot;./c.js&quot;;
let p = new Person();
console.log(p);

console.log(name);
console.log(age);
say();
 */</span>

<span class="token comment">// const icon = require(&quot;./lnj.jpg&quot;);</span>
<span class="token comment">// const _ = require(&quot;./index.css&quot;);</span>

<span class="token keyword">import</span> icon <span class="token keyword">from</span> <span class="token string">&quot;./lnj.jpg&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./index.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> oImg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oImg<span class="token punctuation">.</span>src <span class="token operator">=</span> icon<span class="token punctuation">;</span>
oImg<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[i];function l(p,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","10ES6模块上.html.vue"]]);export{d as default};
