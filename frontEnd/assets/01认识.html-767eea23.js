import{_ as i,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const v={},d=s(`<h1 id="_01-认识" tabindex="-1"><a class="header-anchor" href="#_01-认识" aria-hidden="true">#</a> 01 认识</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
2. 1. vite 与 webpack 不冲突？
vite是构建工具，提升的是开发体验
webpack是打包工具，主要功能为打包，是主流方案，提供一站式解决。

2. vite 为什么叫构建工具？
让开发者更能专注逻辑，而非机械重复的事，解放双手。
RollUP（优点：TreeShaking）
Parcel(零配置)

回顾babel工具（处理js兼容，给js降级）

---------------------------看一下
2. 导入
import * as obj from xxxx
import demo from &#39;./dome.json&#39; assert {type:&quot;json&quot;}
浏览器type=module意为模块模式，引入了顶级模块。

3. vscode安装Live Serve 插件能开启小型服务器。
右键 open with liveserver
安装 vite 创建项目，vue模板
安装 volar 插件（vscode） 支持vue3 语法检查
vite.config.js 设置 base:&quot;./&quot; 让打包后解决根目录路径问题

4. 预构建
首次执行vite时，会对node_modules 模块配置 optimizeDeps 的目标进行预构建，
不预构建，浏览器疯狂加载你引用的依赖，（文件多，时间长）
引入axios，在vite/deps 查看预构建生成的内容。

5. vite解决跨域问题
server: {
    open:false, 
    host: &quot;127.0.0.1&quot;,
    port: 3456,
    proxy: {
        &quot;^/api/&quot;: {
            target: &quot;https://www.xxx.com&quot;,
            changeOrigin: true, // 允许跨域
            rewrite: path =&gt; path.repalce(/^\\/api/, &quot;&quot;)
        }
    }
}

6. 开发生产环境配置
.env 全局的，没有设置其他环境变量时，会加载这个文件里的内容
    # .env
    NODE_ENV=env
    VITE_NAME=&quot;全局变量&quot;
    VITE_BASE_URL=&quot;&quot;
.env.development 开发环境下的配置文件，
执行npm run dev 命令会自动加载 .env.development 文件
会覆盖.env这个文件里定义的环境变量
    # .env.development
    NODE_ENV=development
    VITE_NAME=&quot;开发环境&quot;
    VITE_BASE_URL=&quot;/api&quot;

    .env.[name]是可以自定义的，在package.json 里做对应名称的修改。

.env.production 
    # .env.production
    NODE_ENV=production
    VITE_NAME=&quot;生产环境&quot;
    VITE_BASE_URL=&quot;http://xxx/api&quot;

根据vite的约定规则，只有以VITE_开头的变量才会在客户端被捕获，捕获方式为 i<wbr>mport.meta.env.[参数名] 然后重启服务器

package.json
scripts: {
    dev: &#39;vite --mnode development&#39;,
    build: &#39;vite build --mode production&#39;
}

vite.config.js
export default defineConfig((mode, command) =&gt; {
    console.log(mode, command) // development dev
    const config = loadEnv(mode, &quot;./&quot;) 
    // { VITE_NAME: &quot;开发环境&quot;, VITE_BASE_URL: &quot;/api&quot; }
    return {
        配置项
    }
})
main.js 可以访问 i<wbr>mport.meta.env

vite 使用 css
vite默认就支持CSS，（link 标签和js 中 import 引入）
css模块：
import divB form &quot;./divB.module.css&quot;
console.log(divB)
ele.className = divB.divWrap (设置唯一类名，相当于scope)

7. css变量/css自定义属性
var() 函数用于读取变量，第二个参数表示变量的默认值，
如果该变量不存在，就是用这个默认值（第二个参数也不传）

定义变量：--变量名
使用变量： var(变量名，默认值)
全局变量：
:root {
    --m-bg: #foo;
}
div{
    background-color: var(--m-bg, #css)
}
:root 这个css伪类，匹配文档的根元素，对于HTML来说，:root表示&lt;html&gt;元素，除了优先级更高之外，与html选择器相同

局部变量：
div{
    --bg: blue;
    background: var(--bg)
}

postcss(工具)
补全浏览器前缀，代码合并，代码压缩，px转rem等。
vite 自身已继承postcss，可以单独配置文件，也可在vite.config.js中

10. css文件内联
@import

vite路径别名
vue.conofig.js
{
    resolve: {
        alias: {
            &quot;@csssrc&quot;: &quot;/a/b/c&quot;
        }
    }
}

main.js
import &quot;@cssscr/c.css&quot;

css引入css
@import url(&quot;@csssrc/d.css&quot;)
或 @import &quot;@csssrc/d.css&quot;
注意点：@import影响浏览器的并行下载，多个@import 导致下载顺序紊乱。

11. vite批量导入
i<wbr>mport.meta.glob(&quot;&quot;)
动态导入 懒加载 通过遍历加then可拿到对应得模块文件信息。

i<wbr>mport.meta.globEage(&quot;./assets/js/*.js&quot;)返回一个数组
直接引入所有的模块，即静态import引入

这两个都是vite的独有功能，不是web标准

如果我们只想获取脚本的url，不想导入脚本，可以通过在导入路径后添加后缀。

a. 只想获取脚本的url，不想导入脚本，添加?url后缀
import jsUrl from &quot;./assets/js/a.js?url&quot;
b. import 导入的图片会转换为一个路径
import imgSrc from &quot;./assets/vue.svg&quot;
c. ?raw以二进制的方式读取
import icon from &#39;./assets/img/icon.png?raw&#39;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function r(a,c){return n(),e("div",null,l)}const m=i(v,[["render",r],["__file","01认识.html.vue"]]);export{m as default};
