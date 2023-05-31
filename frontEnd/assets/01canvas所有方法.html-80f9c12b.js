import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_01-canvas所有方法" tabindex="-1"><a class="header-anchor" href="#_01-canvas所有方法" aria-hidden="true">#</a> 01 canvas所有方法</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> oCanvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.从canvas标签中获取绘图工具。</span>
oCtx <span class="token operator">=</span> oCanvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1. 修改线条宽度</span>
oCtx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
<span class="token comment">//2. 修改线条颜色</span>
oCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//3. 修改线条两端样式 （butt默认）、round变圆、square加方块</span>
oCtx<span class="token punctuation">.</span>lineCap <span class="token operator">=</span> <span class="token string">&quot;round&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//1.设置路径的起点</span>
oCtx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2. 设置路径的终点</span>
oCtx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3. 告诉canvas将这些点连接起来</span>
oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4. 重新开启一个路径</span>
oCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//5. 闭合</span>
oCtx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//6. 转角样式 （miter默认尖角）、round圆角、bevel斜角</span>
oCtx<span class="token punctuation">.</span>lineJoin <span class="token operator">=</span> <span class="token string">&quot;round&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//7. 填充闭合图形，默认黑色</span>
oCtx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//8. 填充颜色</span>
oCtx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//9. 绘制虚线---接收数组，虚线长度</span>
oCtx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//10. 获取虚线样式---获取数组</span>
oCtx<span class="token punctuation">.</span><span class="token function">getLineDash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//11. 设置虚线偏移位</span>
oCtx<span class="token punctuation">.</span>lineDashOffset <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
<span class="token comment">//12. 获取画布尺寸，不带单位</span>
oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span><span class="token comment">//建议，可获取也可设置</span>
oCtx<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>htight<span class="token punctuation">;</span><span class="token comment">//建议</span>
oCanvas<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span>
oCanvas<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
oCanvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
oCanvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

<span class="token comment">//13. 绘制矩形  x，y，宽，高</span>
oCtx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//14. 绘制矩形2  区别是下面直接就画好了，也不用开启新路径，默认就开了</span>
oCtx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//15. 清空矩形区域</span>
oCtx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//16. 绘制带填充色的矩形</span>
oCtx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//17. 线性渐变</span>
<span class="token comment">//17.1 得到线性渐变方案--x，y，x，y是两点表示线段的坐标</span>
<span class="token keyword">let</span> linearGradient <span class="token operator">=</span> oCtx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//17.2 设置颜色--百分比0~1 颜色</span>
linearGradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linearGradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//18 径向渐变</span>
<span class="token comment">//18.1 得到径向渐变解决方案</span>
<span class="token keyword">let</span> radialGradient <span class="token operator">=</span> oCtx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//19 绘制圆形--x圆心，y圆心，开始弧度位置，结束弧度位置，false和true可选表顺逆时针绘制</span>
oCtx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>radius<span class="token punctuation">,</span>startAngle<span class="token punctuation">,</span>endAngle <span class="token punctuation">[</span><span class="token punctuation">,</span> anticlockwise<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//20. 绘制文字</span>
<span class="token comment">//20.1 只有边框那种绘制</span>
oCtx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//20.2 完美绘制</span>
oCtx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//21 文字样式</span>
oCtx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;50px 微软雅黑&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//22 垂直方向对齐方式 bottom/top/middle</span>
oCtx<span class="token punctuation">.</span>textBaseLine <span class="token operator">=</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//23 水平方向上的对齐方式</span>
oCtx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//24. 绘制图片--图片，绘制在屏幕上的位置x，绘制在屏幕上的位置y</span>
oCtx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>oImage<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">//24.1 --图片，绘制在屏幕上的位置x，绘制在屏幕上的位置y，绘制图片的宽度，绘制图片的高度（就是拉伸和压缩）</span>
oCtx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>oImage<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span>，<span class="token number">100</span>，<span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">//24.2 ----图片，从图片的哪个位置开始绘制x，y，绘制宽度w，绘制高度y,</span>
<span class="token comment">//         绘制在屏幕上的位置x，绘制在屏幕上的位置y，绘制图片的宽度，绘制图片的高度（就是拉伸和压缩）</span>
oCtx<span class="token punctuation">.</span><span class="token function">darwImage</span><span class="token punctuation">(</span>oImage<span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token comment">//25 形变之平移--x平移多少，y平移多少</span>
oCtx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//26 形变之旋转</span>
oCtx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//27 缩放</span>
oCtx<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">//28 交互</span>
<span class="token comment">//28.1 老式的手撸位置</span>
<span class="token comment">//28.2 判断的是当前路径--鼠标x坐标，鼠标y坐标</span>
oCtx<span class="token punctuation">.</span><span class="token function">isPointInPath</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true/false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加载图片知识补充</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> oImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*为啥要把加载完成的监听事件写在设置路径src的前面？
	如果图片加载太快，还没执行到onload事件（还没开始注册加载完成的监听事件，图片就加载完成了），就不会执行函数了。
	为了防止以上事件发生。
*/</span>
oImage<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
oImage<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","01canvas所有方法.html.vue"]]);export{k as default};
