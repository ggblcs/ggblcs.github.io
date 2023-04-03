import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},l=t(`<h1 id="_12-v-bind绑定类名" tabindex="-1"><a class="header-anchor" href="#_12-v-bind绑定类名" aria-hidden="true">#</a> 12 v-bind绑定类名</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>12-常用指令-绑定类名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.size</span><span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.color</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.active</span><span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
1.v-bind指令的作用
v-bind指令给&quot;任意标签&quot;的&quot;任意属性&quot;绑定数据
对于大部分的属性而言我们只需要直接赋值即可, 例如:value=&quot;name&quot;
但是对于class和style属性而言, 它的格式比较特殊

2.通过v-bind绑定类名格式
:class=&quot;[&#39;需要绑定类名&#39;, ...]&quot;

3.注意点:
3.1直接赋值一个类名(没有放到数组中)默认回去Model中查找
:class=&quot;需要绑定类名&quot;
2.2数组中的类名没有用引号括起来也会去Model中查找
:class=&quot;[需要绑定类名]&quot;
2.3数组的每一个元素都可以是一个三目运算符按需导入
:class=&quot;[flag?&#39;active&#39;:&#39;&#39;]&quot;
2.4可以使用对象来替代数组中的三目运算符按需导入
:class=&quot;[{&#39;active&#39;: true}]&quot;
2.5绑定的类名太多可以将类名封装到Model中
obj: {
    &#39;color&#39;: true,
    &#39;size&#39;: true,
    &#39;active&#39;: false,
}

4.绑定类名企业应用场景
从服务器动态获取样式后通过v-bind动态绑定类名
这样就可以让服务端来控制前端样式
常见场景: 618 双11等
--&gt;</span>

<span class="token comment">&lt;!--这里就是MVVM中的View--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--    &lt;p class=&quot;size color active&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    如果需要通过v-bind给class绑定类名, 那么不能直接赋值
    默认情况下v-bind会去Model中查找数据, 但是Model中没有对应的类名, 所以无效, 所以不能直接赋值
    --&gt;</span>
<span class="token comment">&lt;!--    &lt;p :class=&quot;size&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    如果想让v-bind去style中查找类名, 那么就必须把类名放到数组中
    但是放到数组中之后默认还是回去Model中查找
    --&gt;</span>
<span class="token comment">&lt;!--    &lt;p :class=&quot;[size]&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    将类名放到数组中之后, 还需要利用引号将类名括起来才会去style中查找
    --&gt;</span>
<span class="token comment">&lt;!--    &lt;p :class=&quot;[&#39;size&#39;, &#39;color&#39;, &#39;active&#39;]&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    如果是通过v-bind类绑定类名, 那么在绑定的时候可以编写一个三目运算符来实现按需绑定
    格式: 条件表达式 ? &#39;需要绑定的类名&#39; : &#39;&#39;
    --&gt;</span>
<span class="token comment">&lt;!--    &lt;p :class=&quot;[&#39;size&#39;, &#39;color&#39;, flag ? &#39;active&#39; : &#39;&#39;]&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    如果是通过v-bind类绑定类名, 那么在绑定的时候可以通过对象来决定是否需要绑定
    格式: {&#39;需要绑定的类名&#39; : 是否绑定}
    --&gt;</span>
<span class="token comment">&lt;!--    &lt;p :class=&quot;[&#39;size&#39;, &#39;color&#39;,{&#39;active&#39; : false}]&quot;&gt;我是段落&lt;/p&gt;--&gt;</span>
    <span class="token comment">&lt;!--
    注意点:
    如果是通过v-bind类绑定类名, 那么还可以使用Model中的对象来替换数组
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>obj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 这里就是MVVM中的View Model</span>
    <span class="token keyword">let</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 这里就是MVVM中的Model</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;size&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;color&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","012v-bind绑定类名.html.vue"]]);export{d as default};
