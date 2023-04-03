import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_16-练习补充知识" tabindex="-1"><a class="header-anchor" href="#_16-练习补充知识" aria-hidden="true">#</a> 16 练习补充知识</h1><h2 id="_01-普通方法和箭头函数区别" tabindex="-1"><a class="header-anchor" href="#_01-普通方法和箭头函数区别" aria-hidden="true">#</a> 01 普通方法和箭头函数区别</h2><ol><li><p>普通函数/方法中的this, 谁调用就是谁</p></li><li><p>箭头函数中的this, 是父作用域的this，不是调用者</p></li><li><p>箭头函数中的this永远都只看它所属的作用域的this，无法通过bind/call/apply来修改</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>       <span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Window</span>
        <span class="token punctuation">}</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// window.demo();</span>
        <span class="token operator">*</span><span class="token operator">/</span>
        <span class="token comment">/*
        let p = {
            name: &quot;lnj&quot;,
            say: function () {
                console.log(this); // {name: &quot;lnj&quot;, say: ƒ}
            },
            // 因为没有将箭头函数放到其它的函数中, 所以箭头函数属于全局作用域
            // 在JS中只有定义一个新的函数才会开启一个新的作用域
            hi: () =&gt; {
                console.log(this); // Window 
            }
        }
        p.say();
        p.hi();
        console.log(this); // Window
        */</span>
        <span class="token comment">/*
        function Person() {
            this.name = &quot;lnj&quot;;
            this.say = function () {
                console.log(this); // Person
            }
            // 因为将箭头函数放到其它的函数中, 所以箭头函数属于其它函数(当前的其它函数就是构造函数)
            // 既然箭头函数属于构造函数, 所以箭头函数中的this就是构造函数的this
            this.hi = () =&gt;{
                console.log(this); // Person
            }
        }
        let p = new Person();
        p.say();
        p.hi();
        */</span>

        <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lnj&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &quot;zs&quot;}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">hi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Person</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 注意点: 箭头函数中的this永远都只看它所属的作用域的this</span>
        <span class="token comment">//         无法通过bind/call/apply来修改</span>
        p<span class="token punctuation">.</span><span class="token function">hi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-将数字转为相应字母" tabindex="-1"><a class="header-anchor" href="#_02-将数字转为相应字母" aria-hidden="true">#</a> 02 将数字转为相应字母</h2><p>键码值</p><p><code>fromCharCode</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> char <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_03-事件" tabindex="-1"><a class="header-anchor" href="#_03-事件" aria-hidden="true">#</a> 03 事件</h2><p>搜索w3school中的DOM Event有很多，</p><p>onkeydown是键盘按下事件function(event),event有两个属性，keycode和key。</p><h2 id="_04-大小写转换" tabindex="-1"><a class="header-anchor" href="#_04-大小写转换" aria-hidden="true">#</a> 04 大小写转换</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[i];function o(c,l){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","16练习补充知识.html.vue"]]);export{d as default};
