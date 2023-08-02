import{_ as t,M as l,p as o,q as r,R as n,t as e,N as a,a1 as i}from"./framework-96b046e1.js";const c={},p=i(`<h1 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 安装</h1><blockquote><p>安装包</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 关于web自动化
pip install selenium
# 安装完后记下安装路径
# 下载谷歌驱动
# 将谷歌驱动放在selenium下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://registry.npmmirror.com/binary.html?path=chromedriver/",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 运行python代码</span>
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Chrome 浏览器</span>
<span class="token comment"># 或者</span>
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
chrome_driver<span class="token operator">=</span><span class="token string">r&quot;C:\\\\Users\\\\THINKPAD\\\\anaconda3\\\\Lib\\site-packages\\\\selenium\\webdriver\\\\chrome\\\\chromedriver.exe&quot;</span>
driver<span class="token operator">=</span>webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span>chrome_driver<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://www.cnblogs.com/liangmei/p/14984871.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/zhangkaiyazky/article/details/102708667",target:"_blank",rel:"noopener noreferrer"},b=i(`<blockquote><p>Demo：打开百度搜索 少艾</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
chrome_driver<span class="token operator">=</span><span class="token string">r&quot;C:\\\\Users\\\\THINKPAD\\\\anaconda3\\\\Lib\\site-packages\\\\selenium\\webdriver\\\\chrome\\\\chromedriver.exe&quot;</span>
driver<span class="token operator">=</span>webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span>chrome_driver<span class="token punctuation">)</span>

wb <span class="token operator">=</span> driver
wb<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
idNme <span class="token operator">=</span> wb<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span>
idNme<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;少艾&quot;</span><span class="token punctuation">)</span>
wb<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;su&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>软件：按键精灵、UiBot</p><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 关于百度人脸识别
pip install opencv-python
pip install baidu_aip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本地人脸识别报错</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在使用 Python 3 &amp;OpenCV 3.0.0 进行人脸识别训练时发现异常： AttributeError: ‘module’ object has no attribute ‘LBPHFaceRecognizer_create’OpenCV 需要安装 opencv-contrib-python 模块，直接使用 pip 就可以进行安装，命令如下： 

pip install opencv-contrib-python
或者
pip --default-timeout=1000 install -U opencv-contrib-python

安装openCV的xml文件
https://wwa.lanzouy.com/b01da9tng
密码:2cdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更快速的安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>【问题解决】module &#39;cv2.cv2&#39; has no attribute &#39;face&#39;
 出错的原因：
1、可能cv2相关包没有安装完；
2、可能缺少相关包。
针对第一种情况：
可以先卸载相关包，卸载语句如下：
pip uninstall opencv-contrib-python
pip uninstall opencv-python
针对第二种情况：
可以安装相关包：
pip install opencv-python
pip install opencv-contrib-python
但是如果直接用这两句的话下载速度太慢了，可以换一个语句（此时安装快得飞起！！！）：
pip install Pyinstaller -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
（其中的Pyinstaller是你需要下载的库或包名，根据自己需求自行更改即可）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),k={href:"https://www.cnblogs.com/wydxry/p/12452371.html",target:"_blank",rel:"noopener noreferrer"};function h(_,g){const s=l("ExternalLinkIcon");return o(),r("div",null,[p,n("p",null,[n("a",d,[e("下载响应版本的谷歌驱动"),a(s)])]),u,n("p",null,[n("a",v,[e("常用方法文档"),a(s)])]),n("p",null,[n("a",m,[e("常用方法举例"),a(s)])]),b,n("p",null,[e("转载："),n("a",k,[e("博客园"),a(s)])])])}const w=t(c,[["render",h],["__file","01安装.html.vue"]]);export{w as default};
