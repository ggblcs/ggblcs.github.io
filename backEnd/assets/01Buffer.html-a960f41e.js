import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_01-buffer" tabindex="-1"><a class="header-anchor" href="#_01-buffer" aria-hidden="true">#</a> 01 Buffer</h1><h2 id="_01-buffer类" tabindex="-1"><a class="header-anchor" href="#_01-buffer类" aria-hidden="true">#</a> 01 Buffer类</h2><p>用法写的并不全面，想要全面得搜node api。</p><ol><li>Buffer.from(来自)</li><li>Buffer.alloc</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.准备知识
0.1计算机只能识别0和1(因为计算机只认识通电和断电两种状态),
0.2所有存储在计算机上的数据都是0和1组成的(数据越大0和1就越多)
0.3计算机中的度量单位
1 B(Byte字节) = 8 bit(位)
// 00000000  就是一个字节
// 111111111 也是一个字节
// 10101010  也是一个字节
// 任意8个 0或1的组合都是一个字节
1 KB = 1024 B
1 MB = 1024KB
1 GB = 1024MB

1.什么是Buffer?
Buffer是NodeJS全局对象上的一个类, 是一个专门用于存储字节数据的类
NodeJS提供了操作计算机底层API, 而计算机底层只能识别0和1,
所以就提供了一个专门用于存储字节数据的类

2.如何创建一个Buffer对象
2.1创建一个指定大小的Buffer
Buffer.alloc(size[, fill[, encoding]])

2.2根据数组/字符串创建一个Buffer对象
Buffer.from(string[, encoding])

3.Buffer对象本质
本质就是一个数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// let buf = Buffer.alloc(5);</span>
<span class="token comment">// console.log(buf); // &lt;Buffer 00 00 00 00 00&gt;</span>
<span class="token comment">// 注意点: 通过console.log();输出Buffer. 会自动将存储的内容转换成16进制再输出</span>

<span class="token comment">// let buf = Buffer.alloc(5, 17);</span>
<span class="token comment">// console.log(buf);</span>

<span class="token comment">// let buf = Buffer.from(&quot;abc&quot;);</span>
<span class="token comment">// console.log(buf); // &lt;Buffer 61 62 63&gt;</span>

<span class="token keyword">let</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.dir(buf);</span>
buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-buffer实例方法" tabindex="-1"><a class="header-anchor" href="#_02-buffer实例方法" aria-hidden="true">#</a> 02 Buffer实例方法</h2><ol><li>buf.toString</li><li>buf.write</li><li>buf.slice</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.将二进制数据转换成字符串
返回: &lt;string&gt; 转换后的字符串数据。
buf.toString();

2.往Buffer中写入数据
string &lt;string&gt; 要写入 buf 的字符串。
offset &lt;integer&gt; 开始写入 string 之前要跳过的字节数。默认值: 0。
length &lt;integer&gt; 要写入的字节数。默认值: buf.length - offset。
encoding &lt;string&gt; string 的字符编码。默认值: &#39;utf8&#39;。
返回: &lt;integer&gt; 已写入的字节数。
buf.write(string[, offset[, length]][, encoding])

3.从指定位置截取新Buffer
start &lt;integer&gt; 新 Buffer 开始的位置。默认值: 0。
end &lt;integer&gt; 新 Buffer 结束的位置（不包含）
buf.slice([start[, end]])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// let buf = Buffer.from([97, 98, 99]);</span>
<span class="token comment">// console.log(buf);</span>
<span class="token comment">// console.log(buf.toString());</span>

<span class="token comment">// let buf = Buffer.alloc(5); // &lt;Buffer 00 00 00 00 00&gt;</span>
<span class="token comment">// console.log(buf);</span>
<span class="token comment">// // buf.write(&quot;abcdefg&quot;);</span>
<span class="token comment">// // buf.write(&quot;abcdefg&quot;, 2);</span>
<span class="token comment">// buf.write(&quot;abcdefg&quot;, 2, 2);</span>
<span class="token comment">// console.log(buf);</span>
<span class="token comment">// console.log(buf.toString());</span>

<span class="token keyword">let</span> buf1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// let buf2 = buf1.slice();</span>
<span class="token comment">// let buf2 = buf1.slice(2);</span>
<span class="token keyword">let</span> buf2 <span class="token operator">=</span> buf1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-buffer静态方法" tabindex="-1"><a class="header-anchor" href="#_03-buffer静态方法" aria-hidden="true">#</a> 03 Buffer静态方法</h2><ol><li>Buffer.isEncoding</li><li>Buffer.isBuffer</li><li>Buffer.byteLength</li><li>Buffer.concat</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.检查是否支持某种编码格式
Buffer.isEncoding(encoding)

2.检查是否是Buffer类型对象
Buffer.isBuffer(obj)

3.获取Buffer实际字节长度
Buffer.byteLength(string[, encoding])
注意点: 一个汉字占用三个字节

4.合并Buffer中的数据
Buffer.concat(list[, totalLength])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// let res = Buffer.isEncoding(&quot;gbk&quot;);</span>
<span class="token comment">// console.log(res);</span>

<span class="token comment">// let obj = {};</span>
<span class="token comment">// let obj = Buffer.alloc(5);</span>
<span class="token comment">// let res = Buffer.isBuffer(obj);</span>
<span class="token comment">// console.log(res);</span>

<span class="token comment">// let buf = Buffer.from(&quot;123&quot;);</span>
<span class="token comment">// let buf = Buffer.from(&quot;知播渔&quot;);</span>
<span class="token comment">// let res = Buffer.byteLength(buf);</span>
<span class="token comment">// console.log(res);</span>
<span class="token comment">// console.log(buf.length);</span>

<span class="token keyword">let</span> buf1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> buf2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> buf3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>buf1<span class="token punctuation">,</span> buf2<span class="token punctuation">,</span> buf3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function c(o,u){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","01Buffer.html.vue"]]);export{d as default};
