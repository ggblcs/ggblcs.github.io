import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_12-xml" tabindex="-1"><a class="header-anchor" href="#_12-xml" aria-hidden="true">#</a> 12 XML</h1><ol><li>js中接收xml文件需要用<code>xhr.responseXML;</code>。</li><li>下面代码文件名是<code>11-ajax-xml.html</code>。</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>window.onload = function (ev) {

    var oBtn = document.querySelector(&quot;button&quot;);
    oBtn.onclick = function (ev1) {
        ajax({
            type:&quot;get&quot;,
            url:&quot;11-ajax-xml.php&quot;,
            success: function (xhr) {
                // console.log(xhr.responseXML);
                // console.log(document);
                var res = xhr.responseXML;
                console.log(res.querySelector(&quot;name&quot;).innerHTML);
                console.log(res.querySelector(&quot;age&quot;).innerHTML);
            },
            error: function (xhr) {
                console.log(xhr.status);
            }
        })
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>php中header需要写下面代码防止乱码，因为传递的数据xml中有中文就可能乱码。</li><li>最后是返回一个文件需要用到file_get_contents方法。</li><li>文件名是<code>11-ajax-xml.php</code>。</li></ol><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// 执行结果中有中文, 必须在php文件顶部设置</span>
<span class="token comment">//header(&quot;content-type:text/html; charset=utf-8&quot;);</span>
<span class="token comment">// 如果PHP中需要返回XML数据, 也必须在PHP文件顶部设置</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;content-type:text/xml; charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;info.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//xml路径</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>xml第一行必须这么写。</li><li>xml必须有一个根标签，命名自己命，下面的根标签名是person。</li><li>xml所有标签都自己命名。</li><li>文件名是<code>info.xml</code>。</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>李南江<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>33<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[l];function o(c,p){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","12XML.html.vue"]]);export{d as default};
