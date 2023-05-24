import{_ as n,p as s,q as a,a1 as i}from"./framework-96b046e1.js";const e={},t=i(`<h1 id="_03-git办公常用命令" tabindex="-1"><a class="header-anchor" href="#_03-git办公常用命令" aria-hidden="true">#</a> 03 git办公常用命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>基本用法
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;新增用户页面&#39;</span>
<span class="token function">git</span> pull origin master （从远程pull）
<span class="token function">git</span> push origin zhao （push到远程，指向建立好可以直接git push）
<span class="token function">git</span> merge master（从本地merge）
<span class="token function">git</span> merge origin/dev猜测更稳（从远程merge）

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> branch //查看当前使用的分支，标有*
<span class="token function">git</span> branch <span class="token parameter variable">-a</span> // 查看所有分支
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> 分支名 // 删除本地分支
<span class="token function">git</span> push origin :分支名 // 删除本地分支后删除远程分支
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span> // 分支关系
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> zhao //新建分支
<span class="token function">git</span> checkout 分支名    //切换分支


（1）新建分支
<span class="token function">git</span> branch xxx <span class="token punctuation">(</span>xxx填写你的分支名称<span class="token punctuation">)</span>

----------------
<span class="token function">git</span> push --set-upstream origin zhao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function l(r,p){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","03git办公常用命令.html.vue"]]);export{d as default};
