import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_20-相机识别result" tabindex="-1"><a class="header-anchor" href="#_20-相机识别result" aria-hidden="true">#</a> 20 相机识别result</h1><p>result意思是最终成品</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv
<span class="token comment">#加载训练数据集文件</span>
recogizer<span class="token operator">=</span>cv<span class="token punctuation">.</span>face<span class="token punctuation">.</span>LBPHFaceRecognizer_create<span class="token punctuation">(</span><span class="token punctuation">)</span>
recogizer<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;trainer/zhy.yml&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">face_detect_demo</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#将图片灰度</span>
    gray<span class="token operator">=</span>cv<span class="token punctuation">.</span>cvtColor<span class="token punctuation">(</span>img<span class="token punctuation">,</span>cv<span class="token punctuation">.</span>COLOR_BGR2GRAY<span class="token punctuation">)</span>
    <span class="token comment">#加载特征数据</span>
    face_detector <span class="token operator">=</span> cv<span class="token punctuation">.</span>CascadeClassifier<span class="token punctuation">(</span><span class="token string">&#39;C:/Users/THINKPAD/Downloads/opencv/sources/data/haarcascades/haarcascade_frontalface_default.xml&#39;</span><span class="token punctuation">)</span>
    faces <span class="token operator">=</span> face_detector<span class="token punctuation">.</span>detectMultiScale<span class="token punctuation">(</span>gray<span class="token punctuation">)</span>
    <span class="token keyword">for</span> x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>w<span class="token punctuation">,</span>h <span class="token keyword">in</span> faces<span class="token punctuation">:</span>
        cv<span class="token punctuation">.</span>rectangle<span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>x<span class="token operator">+</span>w<span class="token punctuation">,</span>y<span class="token operator">+</span>h<span class="token punctuation">)</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>thickness<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
        cv<span class="token punctuation">.</span>circle<span class="token punctuation">(</span>img<span class="token punctuation">,</span>center<span class="token operator">=</span><span class="token punctuation">(</span>x<span class="token operator">+</span>w<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span>y<span class="token operator">+</span>h<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>radius<span class="token operator">=</span><span class="token punctuation">(</span>w<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>color<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>thickness<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token comment">#人脸识别</span>
        <span class="token builtin">id</span><span class="token punctuation">,</span>confidence<span class="token operator">=</span>recogizer<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>gray<span class="token punctuation">[</span>y<span class="token punctuation">:</span>y<span class="token operator">+</span>h<span class="token punctuation">,</span>x<span class="token punctuation">:</span>x<span class="token operator">+</span>w<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;label Id:&#39;</span><span class="token punctuation">,</span><span class="token builtin">id</span><span class="token punctuation">,</span><span class="token string">&#39;置信评分：&#39;</span><span class="token punctuation">,</span>confidence<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>confidence <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello， zhao&#39;</span><span class="token punctuation">)</span>
    cv<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span>img<span class="token punctuation">)</span>
<span class="token comment">#读取视频</span>
cap <span class="token operator">=</span> cv<span class="token punctuation">.</span>VideoCapture<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    flag<span class="token punctuation">,</span> frame <span class="token operator">=</span> cap<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 读取视频的一帧  frame是图片</span>
    <span class="token comment"># cv.imshow(&#39;Vedio Capture&#39;, frame)  # 显示图片 &#39;Vedio Capture&#39;是标题</span>
    face_detect_demo<span class="token punctuation">(</span>frame<span class="token punctuation">)</span>
    <span class="token keyword">if</span> cv<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span> <span class="token operator">==</span> <span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 等待时常1ms等待按键 如果按下q键，退出</span>
        <span class="token comment"># cv.imwrite(&#39;D:\\\\999.jpg&#39;, frame)  # 把照片写到磁盘</span>
        <span class="token keyword">break</span>
cap<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 释放摄像头</span>
<span class="token comment">#  关闭所有窗口</span>
cv<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># ========</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot; cap=cv.VideoCapture(&#39;video.mp4&#39;)
while True:
    flag,frame=cap.read()
    # print(&#39;flag:&#39;,flag,&#39;frame.shape:&#39;,frame.shape)
    if not flag:
        break
    face_detect_demo(frame)
    if ord(&#39;q&#39;) == cv.waitKey(10):
        break
cv.destroyAllWindows()
cap.release() &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","20相机识别result.html.vue"]]);export{r as default};
