import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_09-gsap动画库的基本使用" tabindex="-1"><a class="header-anchor" href="#_09-gsap动画库的基本使用" aria-hidden="true">#</a> 09 Gsap动画库的基本使用</h1><p>能不能我们设置个时间，让动画自己执行，而不是通过计算时间速度来设置物体位置。</p><p>补间动画</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install gsap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> gsap <span class="token keyword">from</span> <span class="token string">&#39;gsap&#39;</span>


gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 让cube的position 移动到x为5的位置， 用时3秒</span>
gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>rotation<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;power1.inOut&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 旋转 并设置速度</span>
<span class="token keyword">var</span> anim1 <span class="token operator">=</span> gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 动画重复2次  -1 为无限次</span>
    <span class="token literal-property property">yoyo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 往返运动</span>
    <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 延迟时间 延迟2秒</span>
    <span class="token function">onComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画执行完毕&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onStart</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画开始&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 缩放 并设置动画回调  设置重复</span>
<span class="token comment">// 双击屏幕动画暂停</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>anim1<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果动画正在运行</span>
        anim1<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 动画暂停</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        anim1<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 动画回复</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 设置时钟</span>
<span class="token keyword">const</span> clock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// // 获取时钟运行总时长</span>
    <span class="token comment">// let time = clock.getElapsedTime()</span>
    <span class="token comment">// // let deltaTime = clock.getDelta()</span>
    <span class="token comment">// console.log(&#39;始终运行的总时长&#39;, time)</span>
    <span class="token comment">// // console.log(&#39;两次获取时间爱的间隔&#39;, deltaTime)</span>
    <span class="token comment">//</span>
    <span class="token comment">// let t = time % 5</span>
    <span class="token comment">// cube.position.x = t*1 // 位置等于时间乘以速度</span>
    <span class="token comment">// if (cube.position.x &gt; 5) {</span>
    <span class="token comment">//     cube.position.x = 0</span>
    <span class="token comment">// }</span>

    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
    <span class="token comment">// animate()</span>
    renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","09Gsap动画库的基本使用.html.vue"]]);export{r as default};
