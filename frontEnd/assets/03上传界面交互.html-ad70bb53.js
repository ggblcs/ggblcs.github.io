import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_03-上传界面交互" tabindex="-1"><a class="header-anchor" href="#_03-上传界面交互" aria-hidden="true">#</a> 03 上传界面交互</h1><ol><li>上传前，一个区域，显示一个 +</li><li>上传时，一个预览，上面有个进度条，取消按钮</li><li>上传后，一个预览，一个删除</li></ol><p>样式之间的切换可以用类名。</p><p>进度条可以用css变量--xxx</p><p>点击+号，调用<code>input type=file</code> 的点击<code>doms.xxxx.click()</code></p><p>打印<code>this.files[0]</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// name：文件名，可以验证 jpeg 后缀</span>
<span class="token comment">// size：验证文件大小是否超过 1 M等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2 显示预览图：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> file <span class="token operator">=</span> xxx<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 此时就拿到了二进制文件，虽然log是一个文件信息对象</span>
<span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 文件读取器</span>
reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token comment">// 读取二进制文件，异步，所以需要onload监听</span>
<span class="token comment">//  readAsText()</span>
<span class="token comment">// readAsBinaryString(): 读取任意类型的文件，返回二进制字符串</span>
reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// base 64</span>
    xxxx<span class="token punctuation">.</span>src <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.upimg-wraper</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #ddd<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/* 上传前 + */</span>
        <span class="token selector">.upimg-select</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">input</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.upimg-wraper.select&gt;.upimg-select</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/* 上传时 进度条 */</span>
        <span class="token selector">.upimg-progress</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.progress-bar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.progress-center</span> <span class="token punctuation">{</span>
            <span class="token property">--num</span><span class="token punctuation">:</span> 20<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--num<span class="token punctuation">)</span> * 1%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.upimg-wraper.progress&gt;.upimg-progress</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/* 上传后 删除 */</span>
        <span class="token selector">.upimg-result</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.upimg-wraper.result&gt;.upimg-result</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/* 预览图 */</span>
        <span class="token selector">img</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upimg-wraper select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upimg-select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upimg-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress-bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress-center<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--num</span><span class="token punctuation">:</span>20</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-cancel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upimg-result<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> $ <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span>

        <span class="token keyword">const</span> oInput <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> oSelect <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.upimg-select&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> oWraper <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.upimg-wraper&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> oProgress <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.progress-center&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> oImg <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> cancelUpload <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cancelUpload <span class="token operator">&amp;&amp;</span> <span class="token function">cancelUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取消网络传输</span>
            <span class="token function">showArea</span><span class="token punctuation">(</span><span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span>
            oImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
            oInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span>oSelect<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        oSelect<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> oInput<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        oInput<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">999999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token comment">// 切换界面</span>
            <span class="token function">showArea</span><span class="token punctuation">(</span><span class="token string">&quot;progress&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// 显示预览图</span>
            <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
            reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                oImg<span class="token punctuation">.</span>src <span class="token operator">=</span> res<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result
            <span class="token punctuation">}</span>
            <span class="token comment">// 上传</span>
            cancelUpload <span class="token operator">=</span> <span class="token function">upload</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">setProgress</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
                <span class="token comment">// 进度变化了</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">showArea</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">)</span>
                <span class="token comment">// 上传完成了</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.button-cancel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.upimg-result&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> cancel

        <span class="token comment">// 模拟</span>
        <span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> onProgress<span class="token punctuation">,</span> onFinish</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token function">onProgress</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                p<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token function">onProgress</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
                    <span class="token function">onFinish</span><span class="token punctuation">(</span><span class="token string">&#39;{ data: &quot;服务器返回 上传完成&quot;}&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 取消</span>
                <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 真实</span>
        <span class="token comment">/*         function upload666(file, onProgress, onFinish) {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        const res = xhr.responseText // 返回的内容
                        console.log(res);
                        onFinish(res)
                    }
                    xhr.onprogress = function(e) {
                        // 每上传一点就会触发一次
                        const percent = e.loaded / e.total * 100
                        onProgress(percent)
                    }
                    xhr.open(&quot;POST&quot;, &quot;http://xxxxx/xxx&quot;)
                    const form = new FormData() // multipart/form-data
                    form.append(&quot;file&quot;, file, &#39;aaa.jpg&#39;) // 三个字段，name value filename(不传默认取本地的名字)
                    xhr.send(form) // 请求体
                    return function() {
                        xhr.abort()
                    }
                }
         */</span>
        <span class="token keyword">function</span> <span class="token function">validateFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> sizeLimit <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> legalExts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.png&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>seze <span class="token operator">&gt;</span> sizeLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;文件太大&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> name <span class="token operator">=</span> file<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>legalExts<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> name<span class="token punctuation">.</span><span class="token function">endWith</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;文件类型不正确&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">showArea</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oWraper<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">upimg-wraper </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">setProgress</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oProgress<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;--num&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","03上传界面交互.html.vue"]]);export{k as default};
