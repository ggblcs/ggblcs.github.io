import{_ as i,p as e,q as l,a1 as d}from"./framework-96b046e1.js";const n={},s=d(`<h1 id="_02-单人使用" tabindex="-1"><a class="header-anchor" href="#_02-单人使用" aria-hidden="true">#</a> 02 单人使用</h1><h2 id="_01-本地使用" tabindex="-1"><a class="header-anchor" href="#_01-本地使用" aria-hidden="true">#</a> 01 本地使用</h2><ol><li>在工作区下打开git终端输入<code>git init</code>初始化，创建版本库（.git文件夹）。</li><li><code>git config -l</code>查看所有git的配置，这写配置我们不需要更改，但我们需要新增两项内容。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单人流程:
    一、准备工作(只做一次):
    1.创建一个工作区
   2.在工作区中的打开git终端
   3.通过git init指令, 初始化版本库
   4.通过git config user.name &quot;姓名&quot;
         git config user.email &quot;邮箱&quot;
         目的是知道哪些代码是谁提交的以及联系方式
     设置用户名和邮箱(不设置要挨骂)
   5.通过git config -l查看设置情况
   二、开发阶段(反复执行)
   1.编写代码
   2.通过&quot;git add 文件名称&quot; / &quot;git add .&quot; 添加到版本库的暂缓区中
   3.通过git commit -m&quot;说明&quot; 将暂缓区的文件添加到HEAD指针指向的分支中
   (默认只有一个分支, master分支, 也称之为主分支)
   注意点:
   1.不是写一句代码就add commit一次, 应该是完成一个功能后再add commit
   2.commit时-m注释一定要认真编写, 与当前提交内容保持一致, 否则要挨骂

单人使用Git管理项目好处:
    1.可以通过git status查看哪些文件没有被管理, 修改了哪些文件
      红色(没有被管理或者被修改了)、绿色(在暂缓区)
    2.可以通过 git diff 文件名 查看具体修改了哪些代码，得在提交到缓冲区之前看。
    3.可以通过git log / git reflog查看项目演变历史
   4.可以通过git reset --hard 版本号  在任意版本之间切换
   5.无需备份多个文件, 每次commit提交Git会自动备份
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>git status</code>查看那些文件被添加到了暂缓区（绿色），哪些文件没被添加（红色）。如果一个文件也没输出，说明所有文件已经被git管理了（可能已经提交到了master）。</li><li>通过&quot;git add 文件名称&quot; / &quot;git add .&quot; 添加到版本库的暂缓区中。</li><li>通过<code>git commit -m&quot;说明&quot; </code>将暂缓区的文件添加到HEAD指针指向的分支中，注意后面要写说明。 (默认只有一个分支, master分支, 也称之为主分支)</li><li>^可表示上个版本（版本号）。</li></ol><h2 id="_02-github公钥" tabindex="-1"><a class="header-anchor" href="#_02-github公钥" aria-hidden="true">#</a> 02 GitHub公钥</h2><p>注意：打开git bush here必须在工作区下打开。</p><ol><li>随便找个文件夹<code>git clone 地址 </code>就可以下载仓库代码，地址在仓库右上角。</li><li>上传<code>git push 地址</code>就可以上传到仓库，但是一般不用这种方法，需要输入用户名密码（权限管理），这是通过HTTPS的方式进行上传的。一般使用SSH方式。</li><li>SSH公钥的使用： <ol><li>随便找个文件夹git bush here</li><li><strong>码云同样适用</strong>输入命令<code>ssh-keygen -t rsa -C &quot;2625402133@qq.com&quot;</code>，最后是自己的邮箱地址。</li><li>输入命令后需要敲击三次回撤键。</li><li><code>C:\\Users\\26254\\.ssh</code>就下载好了，其中<code>id_rsa</code>是私钥，<code>id_rsa.pub</code>是公钥。</li><li>再在刚刚打开的终端工具输入指令<code>cat ~/.ssh/id_rsa.pub</code>会打印出公钥内容。</li><li>复制公钥内容，注意不能多复制空格。</li><li>在GitHub中找到setting，找到SSH and GPG keys。</li><li>点击new SSH key表示新建ssh key。</li><li>标题随便写</li><li>key复制过去，然后点击add。</li><li>再在终端中输入指令<code>ssh -T git@github.com</code>，如果是码云就是指令<code>ssh -T git@gitee.com</code>。</li><li>终端问yes or no</li><li>yes</li><li>显示XXX success XXX就成功了。</li></ol></li><li>克隆和上传依然像上面一样，只不过<code>git push 地址</code>中的地址需要在仓库右上角找SSH地址。</li><li>以后就可以提交，下载来去自如了。</li></ol>`,8),t=[s];function c(o,a){return e(),l("div",null,t)}const u=i(n,[["render",c],["__file","02单人使用.html.vue"]]);export{u as default};
