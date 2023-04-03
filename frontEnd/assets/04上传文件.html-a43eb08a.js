import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_04-上传文件" tabindex="-1"><a class="header-anchor" href="#_04-上传文件" aria-hidden="true">#</a> 04 上传文件</h1><ol><li>必须用post，不限制大小。</li><li>html表单标签中必须新添一条属性<code>enctype=&quot;multipart/form-data&quot;</code>。</li><li>php中使用$_Files接收。</li><li>php中需要立即将文件从临时文件夹移动到指定文件夹。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
注意:
1.上传文件一般使用POST提交
2.上传文件必须设置enctype=&quot;multipart/form-data&quot;

3.上传的文件在PHP中可以通过$_FILES获取
4.PHP中文件默认会上传到一个临时目录, 接收完毕之后会自动删除
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>03-post-file.php<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upFile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 1.获取上传文件对应的字典</span>
<span class="token variable">$fileInfo</span> <span class="token operator">=</span> <span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;upFile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//print_r($fileInfo);</span>
<span class="token comment">// 2.获取上传文件的名称</span>
<span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token variable">$fileInfo</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 3.获取上传文件保存的临时路径</span>
<span class="token variable">$filePath</span> <span class="token operator">=</span> <span class="token variable">$fileInfo</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;tmp_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//echo $fileName;</span>
<span class="token comment">//echo &quot;&lt;br&gt;&quot;;</span>
<span class="token comment">//echo $filePath;</span>

<span class="token comment">// 4.移动文件</span>
<span class="token comment">//接收两个参数</span>
<span class="token comment">//1.临时文件夹路径 </span>
<span class="token comment">//2.需要存到的路径+需要保存的文件名。php语言拼接字符串用.不用+</span>
<span class="token function">move_uploaded_file</span><span class="token punctuation">(</span><span class="token variable">$filePath</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;./source/&quot;</span><span class="token operator">.</span><span class="token variable">$fileName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：大文件上传需要配置wamp服务器，配置后重启。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
默认情况下服务器对上传文件的大小是有限制的, 如果想修改上传文件的限制可以修改php.ini文件
file_uploads = On   ; 是否允许上传文件 On/Off 默认是On
upload_max_filesize = 2048M       ; 上传文件的最大限制
post_max_size = 2048M             ; 通过Post提交的最多数据

max_execution_time = 30000      ; 脚本最长的执行时间 单位为秒
max_input_time = 30000          ; 接收提交的数据的时间限制 单位为秒
memory_limit = 2048M            ; 最大的内存消耗
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","04上传文件.html.vue"]]);export{d as default};
