import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_02-redis-数据类型" tabindex="-1"><a class="header-anchor" href="#_02-redis-数据类型" aria-hidden="true">#</a> 02 -Redis-数据类型</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.Redis数据类型
- Redis是以key-value的形式存储数据的
- key无论如何都是字符串类型
- Value支持如下的五种数据类型
    + 字符串(String)
    + 哈希(Hash)
    + 列表(list)
    + 无序集合(sets)
    + 有序集合(sorted sets)

---
2.String（字符串）
格式: key value
示例: name lnj

---
3. Hash（哈希）
格式: key field value
示例:
user name lnj
user age  33
user gender man
user ...  ...
hash就相当于编程开发中的Map或者对象
注意点: Hash是无序的

---
4.List（列表）
list就相当于编程开发中的链表或者数组
格式: key value1 value2 value3
示例: names lnj zs ls ww
注意点: list是有序的

---
5.Set（集合）
键是String, 值set
一堆无序的数据
注意点: 存储的数据不能重复

---
6.Zset(有序集合)。
一堆有序的数据, 通过权重和实现排序
注意点: 存储的数据不能重复

--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return i(),e("div",null,v)}const m=n(l,[["render",a],["__file","02-Redis-数据类型.html.vue"]]);export{m as default};
