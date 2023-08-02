import{_ as i,p as n,q as e,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_08-内部类" tabindex="-1"><a class="header-anchor" href="#_08-内部类" aria-hidden="true">#</a> 08 内部类</h1><hr><h2 id="title-内部类" tabindex="-1"><a class="header-anchor" href="#title-内部类" aria-hidden="true">#</a> title: 内部类</h2><p>内部类的特点：</p><ol><li>可以直接访问外部类的所有数据，包括私有数据。</li><li>内部类提供了更好的封装，可以把内部类隐藏在外部类之内，不允许同一个包中的其他类访问该类。</li></ol><p>内部类有：</p><ul><li>成员内部类</li><li>方法内部类</li><li>静态内部类</li><li>匿名内部类</li></ul><h2 id="成员内部类" tabindex="-1"><a class="header-anchor" href="#成员内部类" aria-hidden="true">#</a> 成员内部类</h2><p>外部类不能直接访问内部类的成员和方法，就像一个普通类不能直接访问另一个普通类的成员和方法一样，如果想要访问可以先创建一个==内部类对象==，然后通过内部类对象来访问。 ==此处创建内部类对象有特别之处，请参考下面例子 内部类 对象名 = 外部类对象.new 内部类( );==</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//外部类HelloWorld
public class HelloWorld {
    
    // 内部类Inner，类Inner在类HelloWorld的内部
    public class Inner {
        
		// 内部类的方法
		public void show() {
			System.out.println(&quot;welcome to imooc!&quot;);
		}
	}
    
	public static void main(String[] args) {
	//show();//直接访问会报错
        
        // 创建外部类对象
		HelloWorld hello = new HelloWorld();
        // 创建内部类对象
		Inner i = hello.new Inner();
        // 调用内部类对象的方法
		i.show();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果外部类和内部类具有相同的成员变量或方法，内部类默认访问自己的成员变量或方法，如果要访问外部类的成员变量，可以使用 this 关键字。如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//外部类Outer
public class Outer {
    int b=1;//外部类中的成员属性b
    //内部类Inner
    public class Inner{
        int b=2;//内部类成员属性b
        public void test(){
            System.out.println(&quot;访问外部类中的b：&quot;+Outer.this.b);
            System.out.println(&quot;访问内部类中的b：&quot;+b);
     }
    }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>访问外部类中的b：1
访问内部类中的b：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h2><ol><li>静态内部类不能直接访问外部类的非静态成员，但可以通过<strong>new（）外部类.成员</strong>的方式访问</li><li>如果外部类的静态成员与内部类的成员名称相同，可通过<strong>类名.静态成员</strong>访问外部类的静态成员；如果外部类的静态成员与内部类的静态成员名称不相同，则可通过<strong>成员名</strong>直接调用外部类的静态成员。</li><li>创建静态内部类对象时，不需要外部类对象，可以直接创建<strong>内部类 对象名=new 内部类（）；</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类;

public class SOuter {
	private int a=99;//外部类的私有变量
	static int b=1;//外部类的静态变量
	//静态内部类
	public static class SInner{
		int b =2;//内部类变量
		public void test(){
			System.out.println(&quot;访问外部类中的b：&quot;+SOuter.b);
			System.out.println(&quot;访问内部类中的b：&quot;+b);
		}
	}
	//测试静态内部类
	public static void main (String[] args){
		SInner si = new SInner();//直接创建内部类对象
		si.test();//调用test方法
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>访问外部类中的b：1
访问内部类中的b：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法内部类" tabindex="-1"><a class="header-anchor" href="#方法内部类" aria-hidden="true">#</a> 方法内部类</h3><p>方法内部类就是内部类定义在外部类的方法中，方法内部类只在该方法的内部可见，即只在该方法内部可以使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类;
//外部类
public class MOuter {
	//外部类中的方法
	public void show(){
		final int a=25;//常量
		int b=13;//变量
		//方法内部类
		class MInner{
			int c=2;//内部类中的变量
			public void print(){
				System.out.println(&quot;访问内部类的方法常量a：&quot;+a);
				System.out.println(&quot;访问内部类中的变量c：&quot;+c);
			}
		}//内部类的后括号
		MInner mi =new MInner();//创建内部类对象
		mi.print();//调用内部类的方法
	}
	//测试方法内部类
	public static void main(String[] args) {
		MOuter mo = new MOuter();//创建外部类对象
		mo.show();//调用外部类方法
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>访问内部类的方法常量a：25
访问内部类中的变量c：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h5><p>由于方法内部类不能再外部类的方法以外的地方使用，因此方法内部类不能使用访问控制符和statc修饰。</p>`,25),t=[d];function a(r,v){return n(),e("div",null,t)}const u=i(s,[["render",a],["__file","08内部类.html.vue"]]);export{u as default};
