import{_ as t,p as e,q as d,a1 as a}from"./framework-96b046e1.js";const s={},r=a('<h1 id="_52-loaderapi" tabindex="-1"><a class="header-anchor" href="#_52-loaderapi" aria-hidden="true">#</a> 52 loaderAPI</h1><p>loader 是一个函数，函数中我们可以通过this 访问他提供的方法。</p><table><thead><tr><th>方法</th><th>作用</th><th>用法</th></tr></thead><tbody><tr><td>this.async</td><td>异步回调loader 返回this.callback</td><td>const callback = this.async()</td></tr><tr><td>this.callback</td><td>可以同步或者异步调用的，并返回多个结果的函数</td><td>this.callback(err, content, sourceMap?, mata?)</td></tr><tr><td>this.getOptions(schema)</td><td>获取loader的 options</td><td>this.getOptions(schema)</td></tr><tr><td>this.emitFile</td><td>产生一个文件</td><td>this.emitFile(name, content, sourceMap)</td></tr><tr><td>this.utils.contextify</td><td>返回一个相对路径</td><td>this.utils.contextify(contest, request)</td></tr><tr><td>this.utils.absolutify</td><td>返回一个绝对路径</td><td>tihs.utils.absolutify(context, request)</td></tr></tbody></table><p>除此之外，还有很多，见文档</p>',4),i=[r];function o(c,l){return e(),d("div",null,i)}const n=t(s,[["render",o],["__file","52loaderAPI.html.vue"]]);export{n as default};
