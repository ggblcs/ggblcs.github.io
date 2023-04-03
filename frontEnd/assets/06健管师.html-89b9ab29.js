import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_06-健管师" tabindex="-1"><a class="header-anchor" href="#_06-健管师" aria-hidden="true">#</a> 06 健管师</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
挑战：
包太大
echarts图表--自定义tooltip
im
订阅
-------------------------------------

==============================
演示版
聊天
sdkAppId: ---
skdKey: ---

================================
1. 创建UNiapp
2. 打开uView文档--
	2.1 安装uview
	2.2 main。js配置
	2.3 在引入uView的全局SCSS主题文件
	2.4 引入uView基础样式
	2.5 配置easycom组件模式
	2.7 注意点：
		a. 通过npm和下载方式的配置之后，在某个页面可以直接使用组件，无需通过import引入组件。
		b. 只能通过npm下载uview

3. 配置&quot;navigationStyle&quot;: &quot;custom&quot;后引入头部组件
4. 写首页试运行uview组件

5. app.vue中加载字体
		onLaunch: function() {
			wx.loadFontFace({
				global: true,
				family: &#39;Oswald-Medium&#39;,
				// source: \`url(&quot;https://dev-health.csih.cn/font/Oswald-Medium.ttf&quot;)\`,
				source: \`url(&quot;https://dev-health.csih.cn/csihfont/Oswald-Medium.ttf&quot;)\`,
				success: function(res) {
					console.log(res, &#39;Oswald-Medium&#39;)
				},
				fail: function(err) {
					console.log(err, &#39;Oswald-Medium&#39;)
				}
			});
			uni.loadFontFace({
				global: true, // 版本 2.10.0 后 全局app.js 使用
				family: &#39;Oswald-Regular&#39;,
				// source: &#39;url(&quot;https://dev-health.csih.cn/font/Oswald-Regular.ttf&quot;)&#39;,
				source: &#39;url(&quot;https://dev-health.csih.cn/csihfont/Oswald-Regular.ttf&quot;)&#39;,
				success: function(res) {
					console.log(res, &#39;Oswald-Regular&#39;)
				}
			})
		},

6. 设置page样式
	page {
		// font-family: PingFangSC-Regular, sans-serif;
		// 	color: #2D3142;K
		// 	font-size: 36rpx;
		// 	font-weight: 400;

		background-color: #F6F7FB !important;
		height: 100% !important;
		font-family: PingFangSC-Regular, PingFang SC;
	}

7. 在components中自定义组件后使用时不用导入，导入反而报错，都是直接使用
8. 导入使用import addBluetoothDevice from &#39;../../components/home/j-empty.vue&#39;
	不带vue会报错

9. 组件tabbar会闪动，体验不好，配置自带tabBar，

10. 给page设置背景色，style中不能有scope

11.设置组件样式 注意页面或组件的style中写了scoped时，需要在类名前写/deep/或者::v-deep



12. 调试登录
// /common/http.api.js

const install = (Vue, vm) =&gt; {
	// 服务前缀
	const mainUrl = &#39;/wechat&#39;
	const educationUrl = &#39;/education/client&#39;
	
	const login = (params = {}) =&gt; vm.$u.post( mainUrl + &#39;/wx/login&#39;, params);

	

	vm.$u.api = {
		remind,
		hdRecord,
		login,
	};
}

export default {
	install
}

=======================================
import request from &#39;@/api/request.js&#39;
Vue.use(request, app)
import httpApi from &#39;@/api/api.js&#39;
Vue.use(httpApi, app)
=========================================
复制store

需查有2
混入
use
由于不会用，选择了番茄树为模板
查看f2的默认样式，人家从哪搞来的？

=============================================
包太大解决，经删除图表分包和引入反复测试发现uni-app会将分包内容打包到主包的vendor.js中，导致主包体积变大
https://blog.csdn.net/weixin_45510256/article/details/119827254
在mainfest.json中的mp-weixin中配置
&quot;optimization&quot;: {
	&quot;subPackages&quot;: true
}

=====================================
echarts在电脑上不显示
https://developers.weixin.qq.com/community/develop/doc/000a2c9b5a4a40c3e97a907d25ec00?_at=1586435654144



=================================
与幸福优化的列表与加载更多需要**写笔记
================================
遇到active动态类名无效，重新pop（进行列表的更改）
或者先删除属性，再$set进去（进行列表莫一项属性的更改）
delete item.active;
item.active = str
https://www.cnblogs.com/wangduojing/p/13723455.html
在组件中的话就不要使用对象了
而是直接在data中定义一个字段，控制显示隐藏
===================================
获取手机号失败，什么原因？getPhoneNumber:fail no permission
未企业认证的话认证微信，已认证的话换个开发账号登陆开发工具试试，我也是遇到这个问题，换了个账号登录，再切换账号登录回来，又可以了
==================================
图表层级太高
-------------------------
小程序登录，先wx.login获取code，再获取手机号，否则第一次登录会失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function t(a,c){return n(),e("div",null,v)}const r=i(l,[["render",t],["__file","06健管师.html.vue"]]);export{r as default};
