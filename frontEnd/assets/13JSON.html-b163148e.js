import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const o={},t=e(`<h1 id="_13-json" tabindex="-1"><a class="header-anchor" href="#_13-json" aria-hidden="true">#</a> 13 JSON</h1><h2 id="_01-json" tabindex="-1"><a class="header-anchor" href="#_01-json" aria-hidden="true">#</a> 01 JSON</h2><ol><li>文件名<code>12-ajax-json.txt</code>。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;lnj&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token string">&quot;33&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这是一个js对象，键名可以用引号引起来，也是对象。</span>
<span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token string">&#39;{&quot;a&quot;:&quot;hello&quot;, &quot;b&quot;:&quot;world&quot;}&#39;</span><span class="token punctuation">;</span><span class="token comment">//这是一个JSON，本质就是字符串。</span>
<span class="token comment">//对象转json使用JSON.stringify();方法</span>
<span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//json转对象用JSON.parse()方法</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;a&quot;:&quot;hello&quot;, &quot;b&quot;:&quot;world&quot;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>php发送json文件不用像xml一样得写header。</li><li>文件名<code>12-ajax-json.php</code>。</li></ol><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">echo</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;12-ajax-json.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>注意看接收数据用什么方法。</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>window.onload = function (ev) {

    var oBtn = document.querySelector(&quot;button&quot;);
    oBtn.onclick = function (ev1) {
        ajax({
            type:&quot;get&quot;,
            url:&quot;12-ajax-json.php&quot;,
            success: function (xhr) {
                // console.log(xhr.responseText);
                var str = xhr.responseText;
                /*
                在低版本的IE中, 不可以使用原生的JSON.parse方法, 但是可以使用json2.js这个框架来兼容
                */
                var obj = JSON.parse(str);
                // console.log(obj);
                console.log(obj.name);
                console.log(obj.age);
            },
            error: function (xhr) {
                console.log(xhr.status);
            }
        })
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_02-可能遇到的问题" aria-hidden="true">#</a> 02 可能遇到的问题</h2><ol><li><p>从后台接收到的数据是标准JSON（key和value都带引号，所有内容也被引号引起来，组成字符串），直接用JSON.parse转JSON为对象。</p></li><li><p>从后台接收到json数据，json有可能是非标准的json，如果是非标准的（比如json标准要求key，value带引号，但是非标准的没带），怎么把数据转为js对象？使用eval方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;:&quot;zs&quot;, &quot;age&quot;:&quot;3&quot;}&#39;</span><span class="token punctuation">;</span><span class="token comment">//标准JSON, 3是数字，可以不被引号括起来，也是标准的</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//成功转为对象</span>

<span class="token comment">//--------</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;:zs, &quot;age&quot;:3}&#39;</span><span class="token punctuation">;</span><span class="token comment">//值zs没被括起来，是非标准，JSON.parse报错</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;{name:&quot;zs&quot;, age:3}&#39;</span><span class="token punctuation">;</span><span class="token comment">//键没被引号括起来，非标准，JSON.parse报错</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token operator">+</span>str<span class="token operator">+</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//eval方法成功转为对象，注意括号里有括号&#39;(&#39;+str+&#39;)&#39;</span>
<span class="token comment">//提示：eval方法还能转化标准的json为对象</span>
<span class="token comment">//eval还能将多个对象组成的数组JSON转为对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),p=[t];function l(i,c){return s(),a("div",null,p)}const u=n(o,[["render",l],["__file","13JSON.html.vue"]]);export{u as default};
