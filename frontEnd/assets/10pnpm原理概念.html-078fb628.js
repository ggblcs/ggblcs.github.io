import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i="/frontEnd/assets/链接-61e25f1b.jpg",d="/frontEnd/assets/扁平化-5b8b5de8.jpg",l={},c=e('<h1 id="_10-pnpm原理概念" tabindex="-1"><a class="header-anchor" href="#_10-pnpm原理概念" aria-hidden="true">#</a> 10 pnpm原理概念</h1><blockquote><p>硬连接：电脑文件系统中的多个文件，平等地共享同一个存储单元。</p></blockquote><blockquote><p>软连接(符号连接)：是一类特殊的文件，包含有一条以绝对路径或相对路径的形式指向其他文件或者目录的引用。</p></blockquote><p><img src="'+i+`" alt="链接"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件硬链接命令</span>
mklink /H aaa_hard.js aaa.js <span class="token punctuation">(</span>window<span class="token punctuation">)</span>
<span class="token function">ln</span> foo.js foo_hard.js <span class="token punctuation">(</span>macos<span class="token punctuation">)</span>
<span class="token comment"># 文件软链接命令</span>
mkkink aaa_soft.js aaa.js <span class="token punctuation">(</span>window<span class="token punctuation">)</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> aaa_soft.js aaa.js <span class="token punctuation">(</span>macos<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
pnpm使用硬链接

使用npm或者yarn时，多个项目使用了一个包，就会保存n多份该包。
比如多个项目都要用到axios，每一个项目都被拷贝一份axios占内存。

而pnpm会将依赖包放在一个统一的位置，哪个项目需要该依赖就向哪个项目发送一份硬链接

如果同一依赖包需要使用不同的版本，则仅版本之间的不同文件会被存储起来，相同文件不存储
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
pnpm 创建非扁平的 node_modules

早期的npm在同一项目安装依赖，依赖下又有node_modules依赖，多层嵌套且重复。

后期npm及yarn会将依赖的依赖都放在node_modules中，与项目的依赖同级。会造成幽灵依赖问题（你的项目使用了【你的依赖的】【依赖】，有一天【你的依赖】【不再依赖】【那个依赖】，你的项目就会报错）。

pnpm使用非扁平化方式，把你的依赖及你的依赖的依赖，全部硬链接在项目node_modules的.pnpm文件夹下[1]。如果.pnpm文件夹有你的依赖，pnpm再将它软链接在node_modules下。如果其中有你的依赖的依赖，会将它软链接在你的依赖的node_modules下。

[1]:再准确一点，其实是硬链接在.pnpm下xxx的node_modules下xxx，这个node_modules下不仅有xxx，还有xxx的依赖，xxx的依赖使用的是软连接。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一句话：同一项目中使用的：硬链接。同一项目中重复使用的：软连接。</p><p><img src="`+d+'" alt="扁平化"></p>',9),p=[c];function o(t,m){return s(),a("div",null,p)}const u=n(l,[["render",o],["__file","10pnpm原理概念.html.vue"]]);export{u as default};
