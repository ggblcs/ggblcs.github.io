import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_08-path路径模块" tabindex="-1"><a class="header-anchor" href="#_08-path路径模块" aria-hidden="true">#</a> 08 path路径模块</h1><p>Buffer模块已经添加到了globel中，所以不用导入，path模块没有，所以需要导入。</p><p>path模块时系统模块，导入时不需要加路径<code>./</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token function">路径模块</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
封装了各种路径相关的操作
和Buffer一样<span class="token punctuation">,</span>NodeJS中的路径也是一个特殊的模块
不同的是Buffer模块已经添加到Global上了<span class="token punctuation">,</span> 所以不需要手动导入
而Path模块没有添加到Global上<span class="token punctuation">,</span> 所以使用时需要手动导入

<span class="token number">2.</span>获取路径的最后一部分
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> ext<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token number">3.</span>获取路径
path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token number">4.</span>获取扩展名称
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token number">5.</span>判断是否是绝对路径
path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token number">6.</span>获取当前操作系统路径分隔符
path<span class="token punctuation">.</span>delimiter  （windows是\\ Linux是<span class="token operator">/</span>）

<span class="token number">7.</span>获取当前路径环境变量分隔符
path<span class="token punctuation">.</span><span class="token function">sep</span>  <span class="token punctuation">(</span>windows中使用<span class="token punctuation">;</span> linux中使用<span class="token operator">:</span><span class="token punctuation">)</span>
<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
<span class="token number">1.</span>路径的格式化处理
<span class="token comment">// path.parse()  string-&gt;obj 路径转对象</span>
<span class="token comment">// path.format() obj-&gt;string 对象转路径</span>

<span class="token number">2.</span>拼接路径
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token number">3.</span>规范化路径
path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token number">4.</span>计算相对路径
path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> to<span class="token punctuation">)</span>

<span class="token number">5.</span>解析路径
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
// basename用于获取路径的最后一个组成部分
// let res = path.basename(&#39;/a/b/c/d/index.html&#39;);
// let res = path.basename(&#39;/a/b/c/d&#39;);
// let res = path.basename(&#39;/a/b/c/d/index.html&#39;, &quot;.html&quot;);
// console.log(res);

// dirname用于获取路径中的目录, 也就是除了最后一个部分以外的内容
// let res = path.dirname(&#39;/a/b/c/d/index.html&#39;);
// let res = path.dirname(&#39;/a/b/c/d&#39;);
// console.log(res);

// extname用于获取路径中最后一个组成部分的扩展名
// let res = path.extname(&#39;/a/b/c/d/index.html&#39;);
// let res = path.extname(&#39;/a/b/c/d&#39;);
// console.log(res);
*/</span>
<span class="token comment">/*
isAbsolute用于判断路径是否是一个绝对路径
注意点:
区分操作系统
在Linux操作系统中/开头就是绝对路径
在Windows操作系统中盘符开头就是绝对路径

在Linux操作系统中路径的分隔符是左斜杠 /
在Windows操作系统中路径的分隔符是右斜杠 \\
* */</span>
<span class="token comment">/*
// let res = path.isAbsolute(&#39;/a/b/c/d/index.html&#39;); // true
// let res = path.isAbsolute(&#39;./a/b/c/d/index.html&#39;); // false
// let res = path.isAbsolute(&#39;c:\\\\a\\\\b\\\\c\\\\d\\\\index.html&#39;); // true
// let res = path.isAbsolute(&#39;a\\\\b\\\\c\\\\d\\\\index.html&#39;); // false
// console.log(res);

// path.sep用于获取当前操作系统中路径的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 左斜杠 /
// 如果是在Windows操作系统中运行那么获取到的是 右斜杠 \\
// console.log(path.sep);

// path.delimiter用于获取当前操作系统环境变量的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 :
// 如果是在Windows操作系统中运行那么获取到的是 ;
// console.log(path.delimiter);
*/</span>

<span class="token comment">/*
path.parse(path): 用于将路径转换成对象
{
  root: &#39;/&#39;,
  dir: &#39;/a/b/c/d&#39;,
  base: &#39;index.html&#39;,
  ext: &#39;.html&#39;,
  name: &#39;index&#39;
}
path.format(pathObject): 用于将对象转换成路径
* */</span>
<span class="token comment">/*
// let obj = path.parse(&quot;/a/b/c/d/index.html&quot;);
// console.log(obj);

let obj = {
    root: &#39;/&#39;,
    dir: &#39;/a/b/c/d&#39;,
    base: &#39;index.html&#39;,
    ext: &#39;.html&#39;,
    name: &#39;index&#39;
};
let str = path.format(obj);
console.log(str);
 */</span>

<span class="token comment">/*
path.join([...paths]): 用于拼接路径
注意点:
如果参数中没有添加/, 那么该方法会自动添加
如果参数中有.., 那么会自动根据前面的参数生成的路径, 去到上一级路径
* */</span>
<span class="token comment">/*
// let str = path.join(&quot;/a/b&quot;, &quot;c&quot;); // /a/b/c
// let str = path.join(&quot;/a/b&quot;, &quot;/c&quot;); // /a/b/c
// let str = path.join(&quot;/a/b&quot;, &quot;/c&quot;, &quot;../&quot;); // /a/b/c --&gt; /a/b
// let str = path.join(&quot;/a/b&quot;, &quot;/c&quot;, &quot;../../&quot;); // /a/b/c --&gt; /a
// console.log(str);
 */</span>

<span class="token comment">/*
path.normalize(path): 用于规范化路径
* */</span>
<span class="token comment">/*
let res = path.normalize(&quot;/a//b///c////d/////index.html&quot;);
console.log(res);
*/</span>

<span class="token comment">/*
path.relative(from, to): 用于计算相对路径
第一个参数: /data/orandea/test/aaa
第二个参数: /data/orandea/impl/bbb

/data/orandea/test/aaa --&gt; ../  --&gt; /data/orandea/test
/data/orandea/test --&gt; ../ --&gt; /data/orandea
..\\..\\impl\\bbb
* */</span>
<span class="token comment">/*
let res = path.relative(&#39;/data/orandea/test/aaa&#39;, &#39;/data/orandea/impl/bbb&#39;);
console.log(res);
 */</span>

<span class="token comment">/*
path.resolve([...paths]): 用于解析路径
注意点: 如果后面的参数是绝对路径, 那么前面的参数就会被忽略
* */</span>
<span class="token comment">// let res = path.resolve(&#39;/foo/bar&#39;, &#39;./baz&#39;); // /foo/bar/baz</span>
<span class="token comment">// let res = path.resolve(&#39;/foo/bar&#39;, &#39;../baz&#39;); // /foo/baz</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/baz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /baz</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些东西不用记，会看文档会用就行。</p>`,6),t=[l];function c(d,p){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","08path.html.vue"]]);export{u as default};
