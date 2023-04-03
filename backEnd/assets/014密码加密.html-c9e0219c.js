import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const c={},t=e(`<h1 id="_014-密码加密" tabindex="-1"><a class="header-anchor" href="#_014-密码加密" aria-hidden="true">#</a> 014 密码加密</h1><p>搜索node，点加密，往下滑即可见使用方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入加密模块</span>
<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;14-用户注册-加密/utils/crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;com.it666&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 2.创建加密方法</span>
<span class="token keyword">function</span> <span class="token function">_md5</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    MD5加密（加密不可逆）
    MD5的全称是Message-Digest Algorithm 5（信息-摘要算法）。 128位长度。
    目前MD5是一种不可逆算法。具有很高的安全性
    什么叫做不可逆?
    不可以通过加密之后的内容还原加密之前的内容, 我们就称之为不可逆
    * */</span>
    <span class="token comment">// 1.指定加密方式</span>
    <span class="token keyword">const</span> md5 <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.指定需要加密的内容和加密之后输出的格式</span>
    <span class="token keyword">const</span> hash <span class="token operator">=</span> md5<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token comment">// 指定需要加密的内容</span>
                    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定加密之后输出的格式</span>
    <span class="token comment">/*
    注意点:
    MD5加密, 只要加密的内容没有发生变化, 那么加密之后的内容就不会发生变化
    所以正式因为如此, 虽然MD5是不可逆的, 但是可以暴力破解
    正式因为如此, 所以仅仅通过MD5加密也不安全
    所以我们在加密之前应该对原始数据进行加盐操作
    什么叫做加盐?
    给原始数据混入一些其它数据
    * */</span>
    <span class="token comment">// console.log(hash); // e80b5017098950fc58aad83c8c14978e</span>
                       <span class="token comment">// e80b5017098950fc58aad83c8c14978e</span>
    <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">generatePwd</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    password <span class="token operator">=</span> password <span class="token operator">+</span> secret<span class="token punctuation">;</span>
    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token function">_md5</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(hash); // 4167228cfbe1daa78e88c41bf357618e --&gt; abcdefcom.it666</span>
    <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> generatePwd<span class="token punctuation">;</span>
<span class="token comment">// _md5(&#39;abcdef&#39;);</span>
<span class="token comment">// generatePwd(&#39;abcdef&#39;);</span>
<span class="token comment">/*
数据库:
source(原始值)   target(加密之后值)
abcdef           e80b5017098950fc58aad83c8c14978e
* */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[t];function i(o,l){return s(),a("div",null,p)}const u=n(c,[["render",i],["__file","014密码加密.html.vue"]]);export{u as default};
