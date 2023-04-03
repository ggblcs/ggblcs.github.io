import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_07-人脸识别图片" tabindex="-1"><a class="header-anchor" href="#_07-人脸识别图片" aria-hidden="true">#</a> 07 人脸识别图片</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># coding: utf-8</span>
<span class="token keyword">from</span> aip <span class="token keyword">import</span> AipFace
<span class="token keyword">import</span> base64

APP_ID <span class="token operator">=</span> <span class="token string">&#39;17958031&#39;</span>
API_KEY <span class="token operator">=</span> <span class="token string">&#39;VDBFn5AwDuaAXgiTSvXxObol&#39;</span>
SECRET_KEY <span class="token operator">=</span> <span class="token string">&#39;wdsiKTeYuGDlVBvc6fvOdpZiWvoWOhUo&#39;</span>

client <span class="token operator">=</span> AipFace<span class="token punctuation">(</span>APP_ID<span class="token punctuation">,</span> API_KEY<span class="token punctuation">,</span> SECRET_KEY<span class="token punctuation">)</span>

<span class="token comment"># 读取照片</span>
imgFile <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">u&#39;E:\\\\image\\\\301.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># r - read  b-binary  rb指用二进制方式读</span>

image <span class="token operator">=</span> imgFile<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
imgFile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

image64 <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>

options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
options<span class="token punctuation">[</span><span class="token string">&#39;face_field&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;age,beauty,gender,expression&quot;</span>  <span class="token comment"># age-年龄，beauty-颜值，gender-性别</span>

<span class="token comment"># rs = client.detect(&quot;https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1575948011208&amp;di=9ff179bbacad667a257bcbee81051e9b&amp;imgtype=0&amp;src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F7%2F66%2F3081513633.jpg&quot;, &#39;URL&#39;, options)</span>

rs <span class="token operator">=</span> client<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>image64<span class="token punctuation">,</span> <span class="token string">&quot;BASE64&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>

<span class="token comment"># for r in rs[&#39;result&#39;]:</span>
<span class="token comment">#     for s in r[&#39;face_list&#39;]:</span>
<span class="token comment">#         print(s)</span>
face_list <span class="token operator">=</span> rs<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;face_list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;检测结果&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;年龄：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;性别：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;颜值：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;beauty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;表情：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;expression&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[e];function c(o,l){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","07人脸识别图片.html.vue"]]);export{r as default};
