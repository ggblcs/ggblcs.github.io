import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_08-人脸识别简版" tabindex="-1"><a class="header-anchor" href="#_08-人脸识别简版" aria-hidden="true">#</a> 08 人脸识别简版</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding: utf-8</span>
<span class="token keyword">from</span> aip <span class="token keyword">import</span> AipFace
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> cv2

cap <span class="token operator">=</span> cv2<span class="token punctuation">.</span>VideoCapture<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    flag<span class="token punctuation">,</span> frame <span class="token operator">=</span> cap<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 读取视频的一帧  frame是图片</span>

    cv2<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;Vedio Capture&#39;</span><span class="token punctuation">,</span> frame<span class="token punctuation">)</span>  <span class="token comment"># 显示图片 &#39;Vedio Capture&#39;是标题</span>

    <span class="token keyword">if</span> cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span> <span class="token operator">==</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 等待时常1ms等待按键 如果按下q键，退出</span>
        cv2<span class="token punctuation">.</span>imwrite<span class="token punctuation">(</span><span class="token string">&#39;D:\\\\999.jpg&#39;</span><span class="token punctuation">,</span> frame<span class="token punctuation">)</span>   <span class="token comment"># 把照片写到磁盘</span>
        <span class="token keyword">break</span>

cap<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 释放摄像头</span>
<span class="token comment">#  关闭所有窗口</span>
cv2<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>




APP_ID <span class="token operator">=</span> <span class="token string">&#39;25750753&#39;</span>
API_KEY <span class="token operator">=</span> <span class="token string">&#39;heSFngmNEx8XOsKEz3GQTFIn&#39;</span>
SECRET_KEY <span class="token operator">=</span> <span class="token string">&#39;7dxuKUfa9QTc2ipb4Yc3fxZhWoA6oYMy&#39;</span>

client <span class="token operator">=</span> AipFace<span class="token punctuation">(</span>APP_ID<span class="token punctuation">,</span> API_KEY<span class="token punctuation">,</span> SECRET_KEY<span class="token punctuation">)</span>

<span class="token comment"># 读取照片</span>
imgFile <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">u&#39;D:\\\\999.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># r - read  b-binary  rb指用二进制方式读</span>

image <span class="token operator">=</span> imgFile<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
imgFile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

image64 <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>

options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
options<span class="token punctuation">[</span><span class="token string">&#39;face_field&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;age,beauty,gender,expression&quot;</span>  <span class="token comment"># age-年龄，beauty-颜值，gender-性别</span>

rs <span class="token operator">=</span> client<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>image64<span class="token punctuation">,</span> <span class="token string">&quot;BASE64&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>
face_list <span class="token operator">=</span> rs<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;face_list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;检测结果&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;年龄：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;性别：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;颜值：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;beauty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;表情：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;expression&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;年龄：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;性别：&#39;</span><span class="token punctuation">,</span> face_list<span class="token punctuation">[</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","08人脸识别简版.html.vue"]]);export{r as default};
