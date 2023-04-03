import{_ as e,p as a,q as n,a1 as i}from"./framework-96b046e1.js";const r={},s=i(`<h1 id="_10-ajax之jquery封装" tabindex="-1"><a class="header-anchor" href="#_10-ajax之jquery封装" aria-hidden="true">#</a> 10 Ajax之jQuery封装</h1><p>jQuery内部已经封装好了，只要引入jQuery库，按照下面的格式写就OK了。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>$.ajax({
    url: &quot;09-ajax-jquery.php&quot;,
    type: &quot;get&quot;,
    data: &quot;userName=lnj&amp;userPwd=654321&quot;,
    success: function(msg){
        alert(msg );
    },
    error: function (xhr) {
        alert(xhr.status);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[s];function l(t,u){return a(),n("div",null,d)}const v=e(r,[["render",l],["__file","10Ajax之jQuery封装.html.vue"]]);export{v as default};
