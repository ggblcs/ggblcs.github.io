import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},i=t(`<h1 id="_09-fs文件模块" tabindex="-1"><a class="header-anchor" href="#_09-fs文件模块" aria-hidden="true">#</a> 09 fs文件模块</h1><blockquote><p>常用小节：05分批读取和写入。</p></blockquote><h2 id="_01-查看文件状态" tabindex="-1"><a class="header-anchor" href="#_01-查看文件状态" aria-hidden="true">#</a> 01 查看文件状态</h2><ol><li>fs.stat</li><li>fs.statSync</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.文件模块(fs)
封装了各种文件相关的操作

2.查看文件状态
fs.stat(path[, options], callback) //异步
fs.statSync(path[, options])        //同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
console.log(&quot;1&quot;);
fs.stat(__dirname, function (err, stats) {
    // console.log(&quot;3&quot;);
    // console.log(err);
    // birthtime: 文件的创建时间
    // mtime: 文件中内容发生变化, 文件的修改时间
    // console.log(stats);

    if(stats.isFile()){
        console.log(&quot;当前路径对应的是一个文件&quot;);
    }else if(stats.isDirectory()){
        console.log(&quot;当前路径对应的是一个文件夹&quot;);
    }
});
console.log(&quot;2&quot;);
 */</span>

<span class="token keyword">let</span> stats <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-文件读取" tabindex="-1"><a class="header-anchor" href="#_02-文件读取" aria-hidden="true">#</a> 02 文件读取</h2><ol><li>fs.readFile</li><li>fs.readFileSync</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.文件读取
fs.readFile(path[, options], callback)
fs.readFileSync(path[, options])

注意点:
没有指定第二个参数, 默认会将读取到的数据放到Buffer中
第二个参数指定为utf8, 返回的数据就是字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个参数utf8是可选参数，如果不传，读取到的默认是buffer，可以通过toString()转为文字。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.拿到需要读取的文件路径</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.读取文件</span>
<span class="token comment">/*
fs.readFile(str,&quot;utf8&quot;, function (err, data) {
    if(err){
        throw new Error(&quot;读取文件失败&quot;);
    }
    console.log(data);
    // console.log(data.toString());
});
 */</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-文件写入" tabindex="-1"><a class="header-anchor" href="#_03-文件写入" aria-hidden="true">#</a> 03 文件写入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.文件写入
fs.writeFile(file, data[, options], callback)
fs.writeFileSync(file, data[, options])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.拼接写入的路径</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;lnj.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.写入数据</span>
<span class="token comment">/*
// fs.writeFile(str, &quot;知播渔 www.it666.com&quot;, &quot;utf-8&quot;, function (err) {
 */</span>
<span class="token keyword">let</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;www.itzb.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;写入数据失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;写入数据成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// let res = fs.writeFileSync(str, &quot;知播渔 www.it666.com&quot;, &quot;utf-8&quot;);</span>
<span class="token comment">// console.log(res);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-追加写入" tabindex="-1"><a class="header-anchor" href="#_04-追加写入" aria-hidden="true">#</a> 04 追加写入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.追加写入
fs.appendFile(path, data[, options], callback)
fs.appendFileSync(path, data[, options])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.拼接写入的路径</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;lnj.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.开始追加数据</span>
fs<span class="token punctuation">.</span><span class="token function">appendFile</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;知播渔&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;追加数据失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;追加数据成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-分批读取和写入" tabindex="-1"><a class="header-anchor" href="#_05-分批读取和写入" aria-hidden="true">#</a> 05 分批读取和写入</h2><p>写入流需要手动断开连接end(); 【在菜鸟教程叫<strong>标记文件末尾</strong>，更容易理解，也更准确】，读取没有end方法，会自动断开。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.大文件操作
前面讲解的关于文件写入和读取操作都是一次性将数据读入内存或者一次性写入到文件中
但是如果数据比较大, 直接将所有数据都读到内存中会导致计算机内存爆炸,卡顿,死机等
所以对于比较大的文件我们需要分批读取和写入

fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>读取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
// 1.拼接读取的路径
let str = path.join(__dirname, &quot;lnj.txt&quot;);
// 2.创建一个读取流
let readStream = fs.createReadStream(str, {encoding : &quot;utf8&quot;, highWaterMark : 1});
// 3.添加事件监听
readStream.on(&quot;open&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系成功&quot;);
});
readStream.on(&quot;error&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系失败&quot;);
});
readStream.on(&quot;data&quot;, function (data) {
    console.log(&quot;表示通过读取流从文件中读取到了数据&quot;, data);
});
readStream.on(&quot;close&quot;, function () {
    console.log(&quot;表示数据流断开了和文件的关系, 并且数据已经读取完毕了&quot;);
});
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
// 1.拼接写入的路径
let str = path.join(__dirname, &quot;it666.txt&quot;);
// 2.创建一个写入流
let writeStream = fs.createWriteStream(str, {encoding : &quot;utf8&quot;});
// 3.监听写入流的事件
writeStream.on(&quot;open&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系成功&quot;);
});
writeStream.on(&quot;error&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系失败&quot;);
});
writeStream.on(&quot;close&quot;, function () {
    console.log(&quot;表示数据流断开了和文件的关系&quot;);
});
let data = &quot;www.it666.com&quot;;
let index = 0;
let timerId = setInterval(function () {
    let ch = data[index];
    index++;
    writeStream.write(ch);
    console.log(&quot;本次写入了&quot;, ch);
    if(index === data.length){
        clearInterval(timerId);
        // 标记文件末尾
        writeStream.end();
    }
}, 1000);
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习--利用读取流和写入流拷贝mp4文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
// 1.生成读取和写入的路径
let readPath = path.join(__dirname, &quot;test.mp4&quot;);
let writePath = path.join(__dirname, &quot;abc.mp4&quot;);
// 2.创建一个读取流
let readStream = fs.createReadStream(readPath);
// 3.创建一个写入流
let writeStream = fs.createWriteStream(writePath);
// 4.监听读取流事件
readStream.on(&quot;open&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系成功&quot;);
});
readStream.on(&quot;error&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系失败&quot;);
});
readStream.on(&quot;data&quot;, function (data) {
    // console.log(&quot;表示通过读取流从文件中读取到了数据&quot;, data);
    writeStream.write(data);
});
readStream.on(&quot;close&quot;, function () {
    console.log(&quot;表示数据流断开了和文件的关系, 并且数据已经读取完毕了&quot;);
    writeStream.end();
});
// 5.监听写入流的事件
writeStream.on(&quot;open&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系成功&quot;);
});
writeStream.on(&quot;error&quot;, function () {
    console.log(&quot;表示数据流和文件建立关系失败&quot;);
});
writeStream.on(&quot;close&quot;, function () {
    console.log(&quot;表示数据流断开了和文件的关系&quot;);
});
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-文件拷贝" tabindex="-1"><a class="header-anchor" href="#_06-文件拷贝" aria-hidden="true">#</a> 06 文件拷贝</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.生成读取和写入的路径</span>
<span class="token keyword">let</span> readPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;test.mp4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> writePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;abc.mp4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.创建一个读取流</span>
<span class="token keyword">let</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>readPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.创建一个写入流</span>
<span class="token keyword">let</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>writePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 利用读取流的管道方法来快速的实现文件拷贝</span>
readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-目录操作" tabindex="-1"><a class="header-anchor" href="#_07-目录操作" aria-hidden="true">#</a> 07 目录操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、创建目录
fs.mkdir(path[, mode], callback)
fs.mkdirSync(path[, mode])

2、读取目录
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options])

3、删除目录
fs.rmdir(path, callback)
fs.rmdirSync(path)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
fs.mkdir(str, function (err) {
    if(err){
        throw new Error(&quot;创建目录失败&quot;);
    }else{
        console.log(&quot;创建目录成功&quot;);
    }
});
 */</span>
<span class="token comment">/*
fs.rmdir(str, function (err) {
    if(err){
        throw new Error(&quot;删除目录失败&quot;);
    }else{
        console.log(&quot;删除目录成功&quot;);
    }
});
 */</span>
fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;读取目录失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// console.log(files);</span>
        files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// console.log(obj);</span>
            <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// console.log(filePath);</span>
            <span class="token keyword">let</span> stats <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;是一个文件&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;是一个目录&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-练习" tabindex="-1"><a class="header-anchor" href="#_08-练习" aria-hidden="true">#</a> 08 练习</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>利用NodeJS生成项目模板
projectName
   |---images
   |---css
   |---js
   |---index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CreateProject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">rootPath<span class="token punctuation">,</span> projectName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rootPath <span class="token operator">=</span> rootPath<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>projectName <span class="token operator">=</span> projectName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subFiles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;images&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">initProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 1.创建站点文件夹</span>
        <span class="token keyword">let</span> projectPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>projectName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.创建子文件和子目录</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subFiles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> dirPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>projectPath<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> cp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateProject</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;taobao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cp<span class="token punctuation">.</span><span class="token function">initProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[i];function p(c,l){return s(),a("div",null,o)}const d=n(e,[["render",p],["__file","09fs文件模块.html.vue"]]);export{d as default};
