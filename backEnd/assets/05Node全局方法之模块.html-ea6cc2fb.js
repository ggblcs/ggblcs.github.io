import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_05-node全局方法之模块" tabindex="-1"><a class="header-anchor" href="#_05-node全局方法之模块" aria-hidden="true">#</a> 05 Node全局方法之模块</h1><h2 id="_01-简单内容" tabindex="-1"><a class="header-anchor" href="#_01-简单内容" aria-hidden="true">#</a> 01 简单内容</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.和浏览器一样Node环境中的全局对象也提供了很多方法属性供我们使用
中文文档地址: http://nodejs.cn/api/

__dirname: 当前文件所在文件夹的绝对路径
__filename: 当前文件的绝对路径
setInterval / clearInterval : 和浏览器中window对象上的定时器一样
setTimeout /  clearTimeout : 和浏览器中window对象上的定时器一样
console :  和浏览器中window对象上的打印函数一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// console.log(__dirname); // C:\\Users\\Jonathan_Lee\\Desktop\\Git-Webpack\\Node//当前js文件路径</span>
<span class="token comment">// console.log(__filename); // C:\\Users\\Jonathan_Lee\\Desktop\\Git-Webpack\\Node\\05.js</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
setTimeout(function () {
    console.log(&quot;123&quot;);
}, 2000);
 */</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-模块" tabindex="-1"><a class="header-anchor" href="#_02-模块" aria-hidden="true">#</a> 02 模块</h2><p>exports require</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是模块?
1.1浏览器开发中的模块
   在浏览器开发中为了避免命名冲突, 方便维护等等
   我们采用类或者立即执行函数的方式来封装JS代码, 来避免命名冲突和提升代码的维护性
   其实这里的一个类或者一个立即执行函数就是浏览器开发中一个模块
   let obj = {
       模块中的业务逻辑代码
   };
   ;(function(){
      模块中的业务逻辑代码
      window.xxx = xxx;
   })();
存在的问题:
没有标准没有规范

1.2NodeJS开发中的模块
   NodeJS采用CommonJS规范实现了模块系统

1.3CommonJS规范
CommonJS规范规定了如何定义一个模块, 如何暴露(导出)模块中的变量函数, 以及如何使用定义好的模块

- 在CommonJS规范中一个文件就是一个模块
- 在CommonJS规范中每个文件中的变量函数都是私有的，对其他文件不可见的
- 在CommonJS规范中每个文件中的变量函数必须通过exports暴露(导出)之后其它文件才可以使用
- 在CommonJS规范中想要使用其它文件暴露的变量函数必须通过require()导入模块才可以使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>暴露</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;it666.com&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>str <span class="token operator">=</span> name<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>fn <span class="token operator">=</span> sum<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>导入</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> aModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./06-a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aModule<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> aModule<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-模块导出数据的三种方式" tabindex="-1"><a class="header-anchor" href="#_03-模块导出数据的三种方式" aria-hidden="true">#</a> 03 模块导出数据的三种方式</h2><ol><li><code>exports.str = name;</code>，使用时需要导入，xxx.属性名使用。</li><li><code>module.exports.str = name;</code>，与上面第一种方式等价。</li><li><code>global.str = name;</code>，使用时也需要导入，但不需要xxx.属性名，而是可以直接使用属性名。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.在NodeJS中想要导出模块中的变量函数有三种方式
1.1通过exports.xxx = xxx导出
1.2通过module.exports.xxx = xxx导出
1.3通过global.xxx = xxx导出
注意点:
无论通过哪种方式导出, 使用时都需要先导入(require)才能使用
通过global.xxx方式导出不符合CommonJS规范, 不推荐使用

let name = &quot;it666.com&quot;;

function sum(a, b) {
    return a + b;
}

// exports.str = name;
// exports.fn = sum;

// module.exports.str = name;
// module.exports.fn = sum;

global.str = name;//global虽然可用，但不建议使用
global.fn = sum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法一与方法二的区别：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.exports和module.exports区别
exports只能通过 exports.xxx方式导出数据, 不能直接赋值
module.exports既可以通过module.exports.xxx方式导出数据, 也可以直接赋值

注意点:
在企业开发中无论哪种方式都不要直接赋值, 这个问题只会在面试中出现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区别举例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// exports.str = name;</span>
<span class="token comment">// module.exports.str = name;</span>

<span class="token comment">// exports = name;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> aModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./08-a.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
exports = name;
{}
* */</span>
<span class="token comment">/*
module.exports = name;
lnj
* */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-require注意点" tabindex="-1"><a class="header-anchor" href="#_04-require注意点" aria-hidden="true">#</a> 04 require注意点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.require注意点
1.1require导入模块时可以不添加导入模块的类型（后缀名）
如果没有指定导入模块的类型, 那么会依次查找.js .json .node文件
无论是三种类型中的哪一种, 导入之后都会转换成JS对象返回给我们

1.2导入自定义模块时必须指定路径
require可以导入&quot;自定义模块(文件模块)&quot;、&quot;系统模块(核心模块)&quot;、&quot;第三方模块&quot;
导入&quot;自定义模块&quot;模块时前面必须加上路径（就是./）
导入&quot;系统模块&quot;和&quot;第三方模块&quot;是不用添加路径

1.3导入&quot;系统模块&quot;和&quot;第三方模块&quot;是不用添加路径的原因
如果是&quot;系统模块&quot;直接到环境变量配置的路径中查找
如果是&quot;第三方模块&quot;会按照module.paths数组中的路径依次查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[l];function o(d,c){return s(),a("div",null,t)}const p=n(i,[["render",o],["__file","05Node全局方法之模块.html.vue"]]);export{p as default};
