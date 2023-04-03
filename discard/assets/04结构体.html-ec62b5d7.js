import{_ as t,M as p,p as e,q as c,R as n,t as s,N as o,a1 as i}from"./framework-96b046e1.js";const l={},u=n("h1",{id:"_04-结构体",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-结构体","aria-hidden":"true"},"#"),s(" 04 结构体")],-1),d=n("p",null,"#define是宏定义",-1),k=n("p",null,"typedef是给类型取别名",-1),r=n("p",null,"C语言结构体前后命名不一致问题_低调霸气有内涵的博客-CSDN博客_结构体后面的名字 https://blog.csdn.net/qq_38523172/article/details/88251112",-1),v={href:"https://blog.csdn.net/WWX2LN/article/details/102238083",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> sid<span class="token punctuation">;</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//分号不能省</span>

<span class="token comment">//两种结构体赋值的方式</span>
<span class="token keyword">void</span> <span class="token function">zhishidian1</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span> st <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s %d\\n&quot;</span><span class="token punctuation">,</span>st<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>st<span class="token punctuation">.</span>name<span class="token punctuation">,</span>st<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    st<span class="token punctuation">.</span>sid <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
    <span class="token comment">// st.name = &quot;list&quot;;//error</span>
    <span class="token function">strcpy</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    st<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s %d\\n&quot;</span><span class="token punctuation">,</span>st<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>st<span class="token punctuation">.</span>name<span class="token punctuation">,</span>st<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过指针修改结构体</span>
<span class="token keyword">void</span> <span class="token function">zhishidian2</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span> st2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&quot;兆华一&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span> pst2<span class="token punctuation">;</span>
    pst2 <span class="token operator">=</span> <span class="token operator">&amp;</span>st2<span class="token punctuation">;</span>
    pst2<span class="token operator">-&gt;</span>sid <span class="token operator">=</span> <span class="token number">1102</span><span class="token punctuation">;</span><span class="token comment">// pst2-&gt;sid 等价于 (*pst2).sid 等价于 st2.sid</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s %d\\n&quot;</span><span class="token punctuation">,</span>st2<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>st2<span class="token punctuation">.</span>name<span class="token punctuation">,</span>st2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">zhishidian1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">zhishidian2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
//多读读记记，有助于以后理解的内容
//st.sid

pst-&gt;sid
  表示pst所指向的结构体变量中的sid这个成员

*/</span>

<span class="token comment">//   结构体不能加减乘除但可以相互复制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(_,h){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,d,k,r,n("p",null,[n("a",v,[s("(1条消息) 定义结构体时加typedef和不加typedef的区别_IT_kiki的博客-CSDN博客_加typedef"),o(a)])]),m])}const g=t(l,[["render",b],["__file","04结构体.html.vue"]]);export{g as default};
