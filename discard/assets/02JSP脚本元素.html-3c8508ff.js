import{_ as e,p as l,q as i,a1 as n}from"./framework-96b046e1.js";const t={},a=n(`<h2 id="_01jsp脚本元素" tabindex="-1"><a class="header-anchor" href="#_01jsp脚本元素" aria-hidden="true">#</a> 01JSP脚本元素</h2><h3 id="_1-1jsp脚本元素及其组成" tabindex="-1"><a class="header-anchor" href="#_1-1jsp脚本元素及其组成" aria-hidden="true">#</a> 1.1JSP脚本元素及其组成</h3><p>在JSP中嵌入的服务端（即web后端）运行的小程序称为脚本，而JSP支持的服务端脚本语言是Java，所以<strong>这些脚本其实就是Java程序</strong>。通常把脚本元素分为“表达式、声明、scriptlet”。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
A[长方形] -- 链接 --&gt; B((圆))
A --&gt; C(圆角长方形)
B --&gt; D{菱形}
C --&gt; D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
A<span class="token text string">(JSP脚本元素)</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">(表达式)</span>
A <span class="token arrow operator">--&gt;</span> C<span class="token text string">(scriptlet)</span>
A <span class="token arrow operator">--&gt;</span> D<span class="token text string">(声明)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2表达式" tabindex="-1"><a class="header-anchor" href="#_1-2表达式" aria-hidden="true">#</a> 1.2表达式</h3><ol><li>作用：</li></ol><p>表达式是计算java表达式的值，得到的结果转化为字符串，并在jsp页面中表达式位置进行显示。Java表达式是指由操作数（变量、常量、方法）和运算符（算术运算符、比较运算符、位移运算符）组成的且符合Java语法规则的公式。</p><p>表达式的计算在运行时进行（即JSP页面被请求时），因此在表达式中可以访问与请求有关的全部信息，其中与请求有关的信息被封装在request隐式对象中。</p><ol><li><p>语法格式</p><blockquote><p>&lt;%= Java表达式 %&gt;</p></blockquote><ul><li>&quot;&lt;%=&quot; 和 &quot;%&gt;&quot;符号中间不能有空格。</li><li>不可以插入语句。</li><li>表达式必须能求值。</li></ul></li><li><p>实例：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;%=3+3%&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_1-3scriptlet" tabindex="-1"><a class="header-anchor" href="#_1-3scriptlet" aria-hidden="true">#</a> 1.3Scriptlet</h3><ol><li><p>作用</p><p>Scriptlet就是在JSP页面中嵌入一段有效的Java程序段，此程序段可以是变量的声明、方法的调用。</p></li><li><p>格式</p><blockquote><p>&lt;%= Java表达式 %&gt;</p></blockquote><ul><li>&quot;&lt;%&quot; 和 &quot;%&gt;&quot;符号中间不能有空格。</li><li>&quot;&lt;%&quot; 和 &quot;%&gt;&quot;中除了不能定义类和方法，不能用import引入类外，可以包含任何有效的Java代码、可以定义变量、调用方法和进行各种表达式运算。</li><li>Scriptlet中定义的变量在当前的整个页面内都有效，但不会被其他的线程共享。</li></ul></li><li><p>实例</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;数字逐层递加&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
  for(int i = 1;i&lt;10;i++){
    for(int j=1;j&lt;=i;j++){
%&gt;
&lt;%=j%&gt;
&lt;%
  }
%&gt;
&lt;%=&quot;&lt;/br&gt;&quot;%&gt;
&lt;%
  }
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;显示当前系统时间&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
  for(int i = 1;i&lt;10;i++){
    for(int j=1;j&lt;=i;j++){
%&gt;
&lt;%=j%&gt;
&lt;%
  }
%&gt;
&lt;%=&quot;&lt;/br&gt;&quot;%&gt;
&lt;%
  }
%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_1-4声明" tabindex="-1"><a class="header-anchor" href="#_1-4声明" aria-hidden="true">#</a> 1.4声明</h3><ol><li><p>作用</p><p>声明就是在JPS页中声明Java方法或变量等，用于定义JPS代表的Servlet类的成员变量和方法。</p></li><li><p>格式</p><blockquote><p>&lt;%! Java表达式 %&gt;</p></blockquote><ul><li>&quot;&lt;%&quot; 和 &quot;%&gt;&quot;符号中间不能有空格。</li><li>&quot;&lt;%&quot; 和 &quot;%&gt;&quot;中除了不能定义类和方法，不能用import引入类外，可以包含任何有效的Java代码、可以定义变量、调用方法和进行各种表达式运算。</li><li>在页面中声明的变量和方法在当前的整个页面内都有效，而且它们会被多个线程所共享。</li></ul></li><li><p>实例</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;%!
  int num = 3;
  public String sayHello(String name){
    return &quot;Hello&quot; + name + &quot;!&quot;;
  }
%&gt;
&lt;body&gt;
&lt;%=num%&gt;
&lt;%=sayHello(&quot;Tony&quot;)%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_1-5思考" tabindex="-1"><a class="header-anchor" href="#_1-5思考" aria-hidden="true">#</a> 1.5思考</h3><p>JSP声明和JSP Scriptlet的区别？</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%!
  int count1 = 1;
%&gt;
&lt;%
  int count2 = 2;
%&gt;
count1==&lt;%=count1++%&gt;&lt;br&gt;
count2==&lt;%=count2++%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据页面显示效果得知count1的值每次刷新进行累加，而count2的值始终为1。原因是count1是java类的成员变量，被多个线程所共享；count2是方法的局部变量，不能被线程共享。</p><h2 id="_02jsp指令" tabindex="-1"><a class="header-anchor" href="#_02jsp指令" aria-hidden="true">#</a> 02JSP指令</h2><p>2.1 概念和分类</p><ol><li><p>概念</p><p>JSP指令相当于在编译期间的命令，用来设置与整个JSP页面相关的属性，它并不产生任何可见的输出，用来设置全局变量、声明类、要实现的方法和输出内容的类型等。</p></li><li><p>分类</p><p>3种，page指令、include指令、taglib指令。</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
A<span class="token operator">:</span><span class="token text string">(JSP指令)</span> <span class="token arrow operator">--&gt;</span> B<span class="token operator">:</span><span class="token text string">(page指令)</span>
A<span class="token operator">:</span> <span class="token arrow operator">--&gt;</span> C<span class="token operator">:</span><span class="token text string">(include指令)</span>
A<span class="token operator">:</span> <span class="token arrow operator">--&gt;</span> D<span class="token operator">:</span><span class="token text string">(taglib指令)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>语法：</p><p>写法一：</p><blockquote><p>&lt;%@ 指令名称 属性1 = &quot;属性值1&quot; 属性2 = &quot;属性值2&quot; …… 属性n = &quot;属性值n&quot; %&gt;</p></blockquote><p>写法二：</p><blockquote><p>&lt;%@ 指令名称 属性1 = &quot;属性值1&quot; %&gt; &lt;%@ 指令名称 属性2 = &quot;属性值2&quot; %&gt; &lt;%@ 指令名称 属性n = &quot;属性值n&quot; %&gt;</p></blockquote></li><li><p>说明</p><p>属性值两边的双引号可以用单引号代替，但不能省略。如果要在属性值中使用引号，则在要在他们之前加反斜杠“\\”。</p></li></ol><h3 id="_2-2page指令" tabindex="-1"><a class="header-anchor" href="#_2-2page指令" aria-hidden="true">#</a> 2.2page指令</h3><ol><li><p>概念</p><p>page指令即页面指令，用来定义整个JSP页面的一些属性和这些属性的值。page指令可以定义MIME类型、定义需要导入的包、错误页的制定、页面编码、脚本语言等。</p><ul><li>格式一：</li><li>格式二：</li></ul><p><strong>page指令</strong>的作用对整个JSP页面有效，<strong>与其书写位置无关</strong>，可以放在文档中的任何地方，但通常把page指令放在JSP页面的最前面。</p></li><li><p>实例</p></li></ol><h3 id="_2-3include指令" tabindex="-1"><a class="header-anchor" href="#_2-3include指令" aria-hidden="true">#</a> 2.3include指令</h3><ol><li>概念</li><li>实例</li></ol><h3 id="_2-4taglib指令" tabindex="-1"><a class="header-anchor" href="#_2-4taglib指令" aria-hidden="true">#</a> 2.4taglib指令</h3><ol><li>概念</li><li>自定义</li><li>标准定义</li><li>实例</li></ol>`,27),s=[a];function d(r,u){return l(),i("div",null,s)}const v=e(t,[["render",d],["__file","02JSP脚本元素.html.vue"]]);export{v as default};
