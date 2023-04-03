import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_11-mongoose增删改查" tabindex="-1"><a class="header-anchor" href="#_11-mongoose增删改查" aria-hidden="true">#</a> 11 -Mongoose增删改查</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入mongoose</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.利用mongoose链接MongoDB服务器</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://127.0.0.1:27017/it666&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.监听链接成功还是失败</span>
<span class="token keyword">let</span> db <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;连接失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;断开连接&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.定义集合中存储数据规则</span>
<span class="token keyword">let</span> userSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Number
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2.利用规则创建集合</span>
<span class="token keyword">let</span> User <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> userSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 增加</span>
<span class="token comment">/*
User.create({name:&#39;zs&#39;, age:666}, (err, result)=&gt;{
    if(!err){
        console.log(&#39;插入成功&#39;);
        console.log(result);
    }
});
*/</span>
<span class="token comment">/*
User.create([
        {name:&#39;ls&#39;, age:18},
        {name:&#39;ls&#39;, age:22},
        {name:&#39;ww&#39;, age:21},
        {name:&#39;zl&#39;, age:23},
        {name:&#39;lnj&#39;, age:33},
    ],
    (err, result)=&gt;{
    if(!err){
        console.log(&#39;插入成功&#39;);
        console.log(result);
    }
});
 */</span>
<span class="token comment">/*
(async ()=&gt;{
    let result = await User.create([
            {name:&#39;ls&#39;, age:18},
            {name:&#39;ls&#39;, age:22},
            {name:&#39;ww&#39;, age:21},
            {name:&#39;zl&#39;, age:23},
            {name:&#39;lnj&#39;, age:33},
        ]);
    console.log(result);
})();
 */</span>

<span class="token comment">// 查询</span>
<span class="token comment">/*
User.find({},{},(err, docs)=&gt;{
    if(!err){
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
User.find({},{_id:0, name:1, age:1},(err, docs)=&gt;{
    if(!err){
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
User.find({name:&#39;ls&#39;},{_id:0, name:1, age:1},(err, docs)=&gt;{
    if(!err){
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
User.find({},{_id:0, name:1, age:1},{ skip: 5, limit: 5},(err, docs)=&gt;{
    if(!err){
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
(async ()=&gt;{
    let result = await User.find({},{_id:0, name:1, age:1},{ skip: 5, limit: 5});
    console.log(result);
})();
*/</span>

<span class="token comment">// 修改</span>
<span class="token comment">/*
User.update({name:&#39;ls&#39;},{$set:{age:888}},(err, docs)=&gt;{
    if(!err){
        console.log(&#39;更新成功&#39;);
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
User.update({name:&#39;ls&#39;},{$set:{age:888}}, {multi: true},(err, docs)=&gt;{
    if(!err){
        console.log(&#39;更新成功&#39;);
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
(async ()=&gt;{
   let result = await User.update({name:&#39;ls&#39;},{$set:{age:123}}, {multi: true});
   console.log(result);
})();
 */</span>

<span class="token comment">// 删除</span>
<span class="token comment">/*
User.remove({name:&#39;ww&#39;}, {}, (err, docs)=&gt;{
    if(!err){
        console.log(&#39;删除成功&#39;);
        console.log(docs);
    }
});
 */</span>
<span class="token comment">/*
User.deleteOne({name:&#39;lnj&#39;}, (err, docs)=&gt;{
    if(!err){
        console.log(&#39;删除成功&#39;);
        console.log(docs);
    }
});
 */</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(o,p){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","11-Mongoose增删改查.html.vue"]]);export{u as default};
