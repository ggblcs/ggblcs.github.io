import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_08-redis-发布订阅" tabindex="-1"><a class="header-anchor" href="#_08-redis-发布订阅" aria-hidden="true">#</a> 08 -Redis-发布订阅</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是发布订阅?
在发布订阅中有三个角色: 发布者(publisher)/订阅者(subscriber)/频道(channel)
只要发布者将消息发送到对应的频道中, 那么所有的订阅者都能收到这个消息, 这个就是Redis的发布订阅

现实生活中的发布订阅:

&#39;张三和李四&#39;去&#39;商店&#39;买鞋, 但是最近炒鞋的人比较多, 要买的鞋子已经卖完了
于是商店老板就让张三和李四先加粉丝群, 到货了会在群里通知

这里的商店老板就是发布者
这里的粉丝群就是频道
这里的张三李四就是订阅者

只要张三和李四加了粉丝群, 只要老板在粉丝群里发送消息, 那么张三和李四就能收到老板发送的消息
--&gt;</span>
<span class="token comment">&lt;!--
- 订阅频道
    + subscribe channel [channel …]
- 发布消息
    + publish channel message
- 退订频道
    + unsubscribe [channel [channel …]]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function c(r,v){return e(),i("div",null,a)}const u=n(l,[["render",c],["__file","08-Redis-发布订阅.html.vue"]]);export{u as default};
