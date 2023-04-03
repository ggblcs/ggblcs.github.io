import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const t={},l=s(`<h1 id="static之静态变量" tabindex="-1"><a class="header-anchor" href="#static之静态变量" aria-hidden="true">#</a> static之静态变量</h1><h4 id="java-中被-static修饰的成员称为静态成员或类成员。它属于整个类所有-而不是某个对象所有-即被类的所有对象所共享。" tabindex="-1"><a class="header-anchor" href="#java-中被-static修饰的成员称为静态成员或类成员。它属于整个类所有-而不是某个对象所有-即被类的所有对象所共享。" aria-hidden="true">#</a> Java 中被 static修饰的成员称为静态成员或类成员。它属于整个类所有，而不是某个对象所有，即被类的所有对象所共享。</h4><h5 id="可参考java程序设计基础-第四版-第109页" tabindex="-1"><a class="header-anchor" href="#可参考java程序设计基础-第四版-第109页" aria-hidden="true">#</a> 可参考Java程序设计基础（第四版）第109页</h5><p>1.对于类的任何一个具体对象而言，静态变量是一个公共的储存单元，任何一个类的对象访问他时，都是一个值，同样，任何一个类的对修改它时，也都是在同一个内存单元做操作。</p><p>2.静态成员可以使用类名直接访问，也可以使用对象名进行访问。当然，鉴于他作用的特殊性更推荐用类名访问~~</p><p>3.静态方法中可以直接调用同类中的静态成员，但不能直接调用非静态成员。</p><p>4.如果希望在静态方法中调用非静态变量，可以通过创建类的对象，然后通过对象来访问非静态变量 使用 static 可以修饰变量、方法和代码块。</p><h6 id="本小节-我们先认识一下静态变量。" tabindex="-1"><a class="header-anchor" href="#本小节-我们先认识一下静态变量。" aria-hidden="true">#</a> 本小节，我们先认识一下静态变量。</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> package draw_01;

 public class statics {

	static String hobby=&quot;imooc&quot;;
	String hobby2=&quot;imooc2&quot;;

	public static void main (String args[]){
	//静态变量可以直接使用类名来访问，无需创建对象
		System.out.println(&quot;通过类名访问hobby：&quot;+statics.hobby);//imooc
		         //System.out.println(&quot;通过类名访问hobby2：&quot;+statics.hobby2);被报错
		System.out.println(&quot;===================&quot;);
	//通过创建对象来访问
		statics hell = new statics();
		System.out.println(&quot;通过对象名来访问hobby：&quot;+hell.hobby);//imooc
		System.out.println(&quot;通过对象名来访问hobby2:&quot;+hell.hobby2);//imooc2
		System.out.println(&quot;====================&quot;);
	//适用对象名对变量的值进行修改，静态变量的值发生改变
		hell.hobby=&quot;你好&quot;;
		hell.hobby2=&quot;你好&quot;;
		System.out.println(&quot;通过类名来访问hobby：&quot;+statics.hobby);//你好
		System.out.println(&quot;直接访问输出hobby：&quot;+hobby);//你好
		System.out.println(&quot;===================&quot;);
		        //	System.out.println(&quot;直接访问输出hobby2：&quot;+hobby2);被报错，不能在静态方法中直接访问非静态变量
    //在新建一个对象，判断值的变化情况
        statics  hell2=new statics();
        System.out.println(hell2.hobby);//你好
        System.out.println(hell2.hobby2);//imooc2
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过类名访问hobby：imooc
===================
通过对象名来访问hobby：imooc
通过对象名来访问hobby2:imooc2
====================
通过类名来访问hobby：你好
直接访问输出hobby：你好
===================
你好
imooc2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="static之静态方法" tabindex="-1"><a class="header-anchor" href="#static之静态方法" aria-hidden="true">#</a> static之静态方法</h1><p>1.在普通成员方法中，则可以直接访问同类的非静态变量和静态变量。</p><p>2.静态方法中不能直接调用非静态方法，需要通过对象来访问非静态方法。</p><p>3.在静态方法中不能使用this或super。因为this是代表调用该方法的对象，但现在“静态方法”既然不需要对象来调用，this也自然不该存在于“静态方法”内部.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package draw_01;

public class statics {
	//创建一个普通方法
	public void show(){
		System.out.println(&quot;你好！&quot;);
	}
	//静态方法
	public static void sho(){
		System.out.println(&quot;你好！&quot;);
	}
	public static void main(String[] args) {
		//普通方法必须通过创建对象来调用
		statics m=new statics();
		m.show();
		//静态方法可以直接调用
		sho();
	}}
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你好！
你好！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="static之静态初始化块" tabindex="-1"><a class="header-anchor" href="#static之静态初始化块" aria-hidden="true">#</a> static之静态初始化块</h1><p>组成：static{}</p><p>作用：完成初始化工作，与构造方法有点像</p><p>与构造方法的区别：</p><ol><li>构造方法是对每个新创建对象进行初始化，而静态初始化器是对类自身进行初始化。</li><li>new一个对象，构造方法自动执行。静态初始化器一般不能被调用，自动执行。</li><li>new多少个对象，静态方法就会执行多少次；静态初始化器却只会执行一次，与创建多少个对象无关。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package draw_01;

public class statics {
    int num1;//声明变量num1
    int num2;//声明变量num2
    static int num3;//声明静态变量num3
    public statics (){//构造器
    	num1=1;
    	System.out.println(&quot;通过构造方法对变量num1赋值&quot;);
    }
    {//初始化块
    	num2=2;System.out.println(&quot;通过初始化块对num2赋值&quot;);
    }
    
    static {//静态初始化块
    	num3=3;System.out.println(&quot;通过静态初始化块为num3赋值&quot;);
    	}
	public static void main(String[] args) {
		statics name=new statics();//创建对象
		System.out.println(&quot;num1=&quot;+name.num1);
		System.out.println(&quot;num2=&quot;+name.num2);
		System.out.println(&quot;num3=&quot;+num3);
		statics name2 =new statics();//创建对象
	}
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过静态初始化块为num3赋值
通过初始化块对num2赋值
通过构造方法对变量num1赋值
num1=1
num2=2
num3=3
通过初始化块对num2赋值
通过构造方法对变量num1赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>能不用静态的尽量还是不要用静态啦，用得太多就太占内存啦。</p>`,28),a=[l];function d(u,v){return n(),e("div",null,a)}const r=i(t,[["render",d],["__file","03静态static.html.vue"]]);export{r as default};
