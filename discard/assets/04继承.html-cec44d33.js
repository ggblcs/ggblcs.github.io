import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const d={},a=s(`<p>话不多说，先新建三个类：父类、子类、主类。</p><p>父类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 继承;

public class Animal {
public int age;
public String name;
public void eat(){
	System.out.println(&quot;动物具有吃东西的能力&quot;);
}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 继承;

public class Dog extends Animal{
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 继承;

public class Initail {
	public static void main(String[] args) {
		Dog dog=new Dog();
		dog.age=10;
		dog.name=&quot;小天&quot;;
		dog.eat();
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>动物具有吃东西的能力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong> 如果父类中的某些属性用<strong>private</strong>访问修饰符来修饰了，那么这个属性是不能被继承的。</p><h3 id="方法的重写" tabindex="-1"><a class="header-anchor" href="#方法的重写" aria-hidden="true">#</a> 方法的重写</h3><ol><li>什么是方法的重写？ 如果子类对继承父类的方法不满意，是可以重写父类继承的方法的，当调用方法时会优先调用子类的方法。</li><li>语法规则：</li></ol><blockquote><p>a.返回值类型</p></blockquote><p>b.方法名</p><p>c.参数类型及个数</p><p>都要与父类继承的方法相同，才叫方法的重写。</p><p>我把上面的Dog类中重写了eat（）的方法， 其他不变：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 继承;

public class Dog extends Animal{
	public void eat(){
		System.out.println(&quot;年龄：&quot;+age+&quot;狗是可以吃东西的&quot;);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>年龄：10狗是可以吃东西的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),l=[a];function t(c,v){return i(),n("div",null,l)}const u=e(d,[["render",t],["__file","04继承.html.vue"]]);export{u as default};
