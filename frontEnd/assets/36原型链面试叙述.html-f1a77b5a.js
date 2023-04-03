import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d="/frontEnd/assets/原型链A-528585d2.png",r="/frontEnd/assets/原型链B-ecda7241.png",l={},t=s(`<h1 id="_36-原型链面试叙述" tabindex="-1"><a class="header-anchor" href="#_36-原型链面试叙述" aria-hidden="true">#</a> 36 原型链面试叙述</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
对应名称
- prototype ：原型
- __proto__ : 原型链（连接点）

从属关系
prototype -&gt; 函数的一个属性：对象{}
__proto__ -&gt; 对象Object的一个属性：对象{}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
0 
假设有一个构造函数Person，通过这个构造函数new了一个实例对象obj。

每个对象都有__proto__属性，并且指向它的构造函数的prototype（原型对象）

1
实例对象obj是一个对象，他有自己的__proto__属性，指向它的构造函数（也就是Person）的prototype

Person的prototype是一个对象，他有自己的__proto__属性，指向它的构造函数（也就是Object）的prototype

Object的prototype是一个对象，有自己的__proto__属性，指向它的构造函数的prototype，但它是最顶层的，所以指向null。

2
构造函数Person是一个对象，有自己的__proto__属性，指向它的构造函数（也就是Function）的prototype。

Function的prototype是一个对象，有自己的__proto__属性，指向它的构造函数（也就是Object）的prototype。

刚刚说了，Object的prototype指向null

3
Function构造函数也是一个对象，有自己的__proto__属性，指向它的构造函数的prototype，但是他没有构造函数，他是从一开始就直接加载在内存中的，所以它的__proto__指向它自己的prototype。

4
Object构造函数是一个对象，有自己的__proto__属性，指向它的构造函数（也就是Function）的prototype。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="原型链A"></p><p><img src="'+r+'" alt="原型链B"></p>',5),a=[t];function o(c,v){return e(),i("div",null,a)}const p=n(l,[["render",o],["__file","36原型链面试叙述.html.vue"]]);export{p as default};
