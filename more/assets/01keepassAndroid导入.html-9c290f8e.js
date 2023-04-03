import{_ as n,p as s,q as t,a1 as a}from"./framework-96b046e1.js";const e={},l=a(`<h1 id="_01-keepassandroid导入" tabindex="-1"><a class="header-anchor" href="#_01-keepassandroid导入" aria-hidden="true">#</a> 01 keepassAndroid导入</h1><p>先导出一份有分组的xml，作为模板。</p><p>再根据模板新增每一项记录。</p><p>此处主要是为了强调：<strong>需要删除每一项记录中的UUID</strong>，写为 <code>&lt;UUID&gt;&lt;/UUID&gt;</code></p><p>因为自己生成的uuid格式不正确（特殊格式），会导入失败，所以直接去掉不要了，</p><p>他就会在导入成功后自己生成新的。</p><p>**生成为xml后，需要格式化一下。**vscode可以用xml tools插件格式化。才能导入成功！</p><p><code>从csv文件生成keepass数据脚本</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
将csv中的密码保存为json，以方便导入到密码软件
csv格式：
0标题,1用户名,2密码,3文本(文本类型主要内容),4类型(password|text),键,值,键,值,键,值,
*/</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 最终的完整密码列表</span>
<span class="token keyword">const</span> resultArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 总列表</span>
<span class="token keyword">let</span> myPassword <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 分列表-我的密码</span>
<span class="token keyword">let</span> myText <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 分列表-我的文本</span>
<span class="token comment">// csv文件名</span>
<span class="token keyword">const</span> readFileName <span class="token operator">=</span> <span class="token string">&#39;./b.csv&#39;</span>
<span class="token comment">// txt文件名</span>
<span class="token keyword">const</span> writeFileName <span class="token operator">=</span> <span class="token string">&#39;./8huan.xml&#39;</span>
<span class="token comment">// 最初的文本内容</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>readFileName<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 文本内容按行分割</span>
<span class="token keyword">const</span> contentArr <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\\r\\n&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// 对应key value 生成json对象</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> contentArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cellArr <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// obj.title = cellArr[0]</span>
    <span class="token comment">// obj.username = cellArr[1]</span>
    <span class="token comment">// obj.password = cellArr[2]</span>
    <span class="token comment">// obj.text = cellArr[3]</span>
    obj<span class="token punctuation">.</span>type <span class="token operator">=</span> cellArr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
    obj<span class="token punctuation">.</span>dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    obj<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;UserName&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> cellArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;Title&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> cellArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;Password&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> cellArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;Notes&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> cellArr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cellArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        obj2<span class="token punctuation">.</span>key <span class="token operator">=</span> cellArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        obj2<span class="token punctuation">.</span>value <span class="token operator">=</span> cellArr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>obj2<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj2<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
        obj<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    resultArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;密码和文本的总条数：&#39;</span><span class="token punctuation">,</span> resultArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 分装 我的密码</span>
myPassword <span class="token operator">=</span> resultArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;password&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 分装 我的文本</span>
myText <span class="token operator">=</span> resultArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;text&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;密码的条数：&#39;</span><span class="token punctuation">,</span> myPassword<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文本的条数：&#39;</span><span class="token punctuation">,</span> myText<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 将获取的结果写入新文件</span>
<span class="token comment">// 需要写入的内容</span>
<span class="token keyword">let</span> needWriteStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">writeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">writeOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据库开头</span>
    needWriteStr <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; standalone=&quot;yes&quot;?&gt;
&lt;KeePassFile&gt;
	&lt;Meta&gt;
		&lt;Generator /&gt;
		&lt;DatabaseName&gt;KeePassDX Database&lt;/DatabaseName&gt;
		&lt;DatabaseNameChanged&gt;2023-02-11T03:32:33Z&lt;/DatabaseNameChanged&gt;
		&lt;DatabaseDescription /&gt;
		&lt;DatabaseDescriptionChanged&gt;2023-02-11T03:32:33Z&lt;/DatabaseDescriptionChanged&gt;
		&lt;DefaultUserName /&gt;
		&lt;DefaultUserNameChanged&gt;2023-02-11T03:32:33Z&lt;/DefaultUserNameChanged&gt;
		&lt;MaintenanceHistoryDays&gt;365&lt;/MaintenanceHistoryDays&gt;
		&lt;Color /&gt;
		&lt;MasterKeyChanged&gt;2023-02-11T03:32:33Z&lt;/MasterKeyChanged&gt;
		&lt;MasterKeyChangeRec&gt;-1&lt;/MasterKeyChangeRec&gt;
		&lt;MasterKeyChangeForce&gt;1&lt;/MasterKeyChangeForce&gt;
		&lt;MemoryProtection&gt;
			&lt;ProtectTitle&gt;False&lt;/ProtectTitle&gt;
			&lt;ProtectUserName&gt;False&lt;/ProtectUserName&gt;
			&lt;ProtectPassword&gt;True&lt;/ProtectPassword&gt;
			&lt;ProtectURL&gt;False&lt;/ProtectURL&gt;
			&lt;ProtectNotes&gt;False&lt;/ProtectNotes&gt;
		&lt;/MemoryProtection&gt;
		&lt;RecycleBinEnabled&gt;True&lt;/RecycleBinEnabled&gt;
		&lt;RecycleBinUUID&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/RecycleBinUUID&gt;
		&lt;RecycleBinChanged&gt;2023-02-11T03:32:33Z&lt;/RecycleBinChanged&gt;
		&lt;EntryTemplatesGroup&gt;fEE4xfijeVQ6IBMO2HCKtA==&lt;/EntryTemplatesGroup&gt;
		&lt;EntryTemplatesGroupChanged&gt;2023-02-11T03:32:33Z&lt;/EntryTemplatesGroupChanged&gt;
		&lt;HistoryMaxItems&gt;10&lt;/HistoryMaxItems&gt;
		&lt;HistoryMaxSize&gt;6291456&lt;/HistoryMaxSize&gt;
		&lt;LastSelectedGroup&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/LastSelectedGroup&gt;
		&lt;LastTopVisibleGroup&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/LastTopVisibleGroup&gt;
		&lt;Binaries /&gt;
		&lt;CustomData /&gt;
	&lt;/Meta&gt;
	&lt;Root&gt;
		&lt;Group&gt;
			&lt;UUID&gt;CkOP+P/3ukhZCiI6r5mEhw==&lt;/UUID&gt;
			&lt;Name&gt;数据库&lt;/Name&gt;
			&lt;Notes /&gt;
			&lt;IconID&gt;48&lt;/IconID&gt;
			&lt;Times&gt;
				&lt;CreationTime&gt;2023-02-11T03:32:33Z&lt;/CreationTime&gt;
				&lt;LastModificationTime&gt;2023-02-11T11:43:18Z&lt;/LastModificationTime&gt;
				&lt;LastAccessTime&gt;2023-02-11T11:47:16Z&lt;/LastAccessTime&gt;
				&lt;ExpiryTime&gt;2999-12-28T15:59:59Z&lt;/ExpiryTime&gt;
				&lt;Expires&gt;False&lt;/Expires&gt;
				&lt;UsageCount&gt;7&lt;/UsageCount&gt;
				&lt;LocationChanged&gt;2023-02-11T03:32:33Z&lt;/LocationChanged&gt;
			&lt;/Times&gt;
			&lt;IsExpanded&gt;True&lt;/IsExpanded&gt;
			&lt;DefaultAutoTypeSequence /&gt;
			&lt;EnableAutoType&gt;null&lt;/EnableAutoType&gt;
			&lt;EnableSearching&gt;null&lt;/EnableSearching&gt;
			&lt;LastTopVisibleEntry&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/LastTopVisibleEntry&gt;
    </span><span class="token template-punctuation string">\`</span></span>

    <span class="token comment">// 我的密码开头</span>
    needWriteStr <span class="token operator">+=</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;Group&gt;
    &lt;UUID&gt;INH7eTomGE6v9haVBjP7Zw==&lt;/UUID&gt;
    &lt;Name&gt;我的密码&lt;/Name&gt;
    &lt;Notes /&gt;
    &lt;IconID&gt;0&lt;/IconID&gt;
    &lt;Times&gt;
        &lt;CreationTime&gt;2023-02-11T11:42:51Z&lt;/CreationTime&gt;
        &lt;LastModificationTime&gt;2023-02-11T11:43:18Z&lt;/LastModificationTime&gt;
        &lt;LastAccessTime&gt;2023-02-11T11:47:16Z&lt;/LastAccessTime&gt;
        &lt;ExpiryTime&gt;2023-02-11T11:42:10Z&lt;/ExpiryTime&gt;
        &lt;Expires&gt;False&lt;/Expires&gt;
        &lt;UsageCount&gt;3&lt;/UsageCount&gt;
        &lt;LocationChanged&gt;2023-02-11T11:42:51Z&lt;/LocationChanged&gt;
    &lt;/Times&gt;
    &lt;IsExpanded&gt;True&lt;/IsExpanded&gt;
    &lt;DefaultAutoTypeSequence /&gt;
    &lt;EnableAutoType&gt;null&lt;/EnableAutoType&gt;
    &lt;EnableSearching&gt;null&lt;/EnableSearching&gt;
    &lt;LastTopVisibleEntry&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/LastTopVisibleEntry&gt;
    </span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">// 我的密码一条数据</span>
    myPassword<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">passwordItem<span class="token punctuation">,</span> passwordIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        needWriteStr <span class="token operator">+=</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;Entry&gt;
    &lt;UUID&gt;&lt;/UUID&gt;
    &lt;IconID&gt;0&lt;/IconID&gt;
    &lt;ForegroundColor /&gt;
    &lt;BackgroundColor /&gt;
    &lt;OverrideURL /&gt;
    &lt;Tags /&gt;
    &lt;Times&gt;
        &lt;CreationTime&gt;2023-02-11T11:43:25Z&lt;/CreationTime&gt;
        &lt;LastModificationTime&gt;2023-02-11T11:44:42Z&lt;/LastModificationTime&gt;
        &lt;LastAccessTime&gt;2023-02-11T11:47:16Z&lt;/LastAccessTime&gt;
        &lt;ExpiryTime&gt;2023-02-11T11:42:10Z&lt;/ExpiryTime&gt;
        &lt;Expires&gt;False&lt;/Expires&gt;
        &lt;UsageCount&gt;2&lt;/UsageCount&gt;
        &lt;LocationChanged&gt;2023-02-11T11:43:25Z&lt;/LocationChanged&gt;
    &lt;/Times&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token comment">// 我的密码新增字段</span>
        passwordItem<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dataListItem<span class="token punctuation">,</span> dataListIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            needWriteStr <span class="token operator">+=</span>
                <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;String&gt;
        &lt;Key&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataListItem<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/Key&gt;
        &lt;Value&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataListItem<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/Value&gt;
    &lt;/String&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 我的密码一项数据结束</span>
        needWriteStr <span class="token operator">+=</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;AutoType&gt;
        &lt;Enabled&gt;True&lt;/Enabled&gt;
        &lt;DataTransferObfuscation&gt;0&lt;/DataTransferObfuscation&gt;
    &lt;/AutoType&gt;
    &lt;History /&gt;
    &lt;/Entry&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 我的密码结尾</span>
    needWriteStr <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;/Group&gt;
    </span><span class="token template-punctuation string">\`</span></span>

    <span class="token comment">// 我的文本开头</span>
    needWriteStr <span class="token operator">+=</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;Group&gt;
    &lt;UUID&gt;7ahAxnZl90GJQzwGgrUpMg==&lt;/UUID&gt;
    &lt;Name&gt;我的链接&lt;/Name&gt;
    &lt;Notes /&gt;
    &lt;IconID&gt;49&lt;/IconID&gt;
    &lt;Times&gt;
        &lt;CreationTime&gt;2023-02-11T11:47:03Z&lt;/CreationTime&gt;
        &lt;LastModificationTime&gt;2023-02-11T11:47:03Z&lt;/LastModificationTime&gt;
        &lt;LastAccessTime&gt;2023-02-11T11:47:03Z&lt;/LastAccessTime&gt;
        &lt;ExpiryTime&gt;2023-02-11T11:42:10Z&lt;/ExpiryTime&gt;
        &lt;Expires&gt;False&lt;/Expires&gt;
        &lt;UsageCount&gt;0&lt;/UsageCount&gt;
        &lt;LocationChanged&gt;2023-02-11T11:47:03Z&lt;/LocationChanged&gt;
    &lt;/Times&gt;
    &lt;IsExpanded&gt;True&lt;/IsExpanded&gt;
    &lt;DefaultAutoTypeSequence /&gt;
    &lt;EnableAutoType&gt;null&lt;/EnableAutoType&gt;
    &lt;EnableSearching&gt;null&lt;/EnableSearching&gt;
    &lt;LastTopVisibleEntry&gt;AAAAAAAAAAAAAAAAAAAAAA==&lt;/LastTopVisibleEntry&gt;
    </span><span class="token template-punctuation string">\`</span></span>

    <span class="token comment">// 我的文本一条数据</span>
    myText<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">textItem<span class="token punctuation">,</span> textIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        needWriteStr <span class="token operator">+=</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;Entry&gt;
    &lt;UUID&gt;&lt;/UUID&gt;
    &lt;IconID&gt;0&lt;/IconID&gt;
    &lt;ForegroundColor /&gt;
    &lt;BackgroundColor /&gt;
    &lt;OverrideURL /&gt;
    &lt;Tags /&gt;
    &lt;Times&gt;
        &lt;CreationTime&gt;2023-02-11T11:43:25Z&lt;/CreationTime&gt;
        &lt;LastModificationTime&gt;2023-02-11T11:44:42Z&lt;/LastModificationTime&gt;
        &lt;LastAccessTime&gt;2023-02-11T11:47:16Z&lt;/LastAccessTime&gt;
        &lt;ExpiryTime&gt;2023-02-11T11:42:10Z&lt;/ExpiryTime&gt;
        &lt;Expires&gt;False&lt;/Expires&gt;
        &lt;UsageCount&gt;2&lt;/UsageCount&gt;
        &lt;LocationChanged&gt;2023-02-11T11:43:25Z&lt;/LocationChanged&gt;
    &lt;/Times&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token comment">// 我的文本新增字段</span>
        textItem<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dataListItem<span class="token punctuation">,</span> dataListIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            needWriteStr <span class="token operator">+=</span>
                <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;String&gt;
        &lt;Key&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataListItem<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/Key&gt;
        &lt;Value&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataListItem<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/Value&gt;
    &lt;/String&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 我的文本一项数据结束</span>
        needWriteStr <span class="token operator">+=</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;AutoType&gt;
        &lt;Enabled&gt;True&lt;/Enabled&gt;
        &lt;DataTransferObfuscation&gt;0&lt;/DataTransferObfuscation&gt;
    &lt;/AutoType&gt;
    &lt;History /&gt;
    &lt;/Entry&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 我的文本结尾</span>
    needWriteStr <span class="token operator">+=</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;/Group&gt;
    </span><span class="token template-punctuation string">\`</span></span>

    <span class="token comment">// 数据库结尾</span>
    needWriteStr <span class="token operator">+=</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;/Group&gt;
		&lt;DeletedObjects&gt;
			&lt;DeletedObject&gt;
				&lt;UUID&gt;UWpEKISnlk+JUqG6rc/b9Q==&lt;/UUID&gt;
				&lt;DeletionTime&gt;2023-02-11T11:43:03Z&lt;/DeletionTime&gt;
			&lt;/DeletedObject&gt;
			&lt;DeletedObject&gt;
				&lt;UUID&gt;MESqPqkuX8u0rWfAo1//iw==&lt;/UUID&gt;
				&lt;DeletionTime&gt;2023-02-11T11:43:03Z&lt;/DeletionTime&gt;
			&lt;/DeletedObject&gt;
			&lt;DeletedObject&gt;
				&lt;UUID&gt;RIsAS+GIo0+4SOHHoytv7w==&lt;/UUID&gt;
				&lt;DeletionTime&gt;2023-02-11T11:43:03Z&lt;/DeletionTime&gt;
			&lt;/DeletedObject&gt;
		&lt;/DeletedObjects&gt;
	&lt;/Root&gt;
&lt;/KeePassFile&gt;
</span><span class="token template-punctuation string">\`</span></span>


    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>writeFileName<span class="token punctuation">,</span> needWriteStr<span class="token punctuation">)</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[l];function p(c,o){return s(),t("div",null,i)}const r=n(e,[["render",p],["__file","01keepassAndroid导入.html.vue"]]);export{r as default};
