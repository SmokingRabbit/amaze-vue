<template>
	<am-article>
		<am-article-header title="快速上手"></am-article-header>
		<am-article-body>
			<hr/>
            <am-doc-section>
            	<blockquote>
	            	amaze-vue 是基于 <a href="http://www.amazeui.org/" target="blank"> amazeui </a>样式封装的vue组件库。并在<a href="http://www.amazeui.org/" target="blank">amazeui</a> 基础上适当进行了修改(增加组件、使用flex布局、调整响应样式等)，以适应不同用户对于组件的需求。您在使用中产生的问题可以加QQ群<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=f69b9d7d833c074b4dc2c45d159e0ebaec4b6169a3cdbbe90fe644826af8c820"><am-doc-code>285353957</am-doc-code></a>进行交流。<b>组件正在不断开发完善中，请以发布最新版本为准，欢迎有空的大神加入到开发队伍中</b>。
	            </blockquote>
            	<h2>NPM 安装</h2>
				<am-code syntax="shell">npm install amaze-vue --save</am-code>
				<h3>目录结构</h3>
<am-code syntax="bash">amaze-vue /*通过 npm install amaze-vue 下载的目录结构*/
|
|-- dist
|   |-- static  /* 静态资源目录 */
|   |   |-- fonts
|	|
|   |-- amaze-vue.css   /* 组件样式 */
|   |-- amaze-vue.jss   /* 组件库 */
|
|-- src
|   |-- 源代码
|-- package.json
|-- README.md</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>webpack 完整引入</h2>
<am-code>import Vue from &#x27;vue&#x27;;
import App from &#x27;./App&#x27;;
import AmazeVue from &#x27;amaze-vue&#x27;;
import &#x27;amaze-vue/dist/amaze-vue.css&#x27;;

Vue.use(AmazeVue);

new Vue({
    el: &#x27;#app&#x27;,
    template: &#x27;&lt;App/&gt;&#x27;,
    components: { App }
});	</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>webpack 按需引入</h2>
<am-code>import Vue from &#x27;vue&#x27;;
import App from &#x27;./App&#x27;;
import { Button, Icon } from &#x27;amaze-vue&#x27;;
import &#x27;amaze-vue/dist/amaze-vue.css&#x27;;

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);

new Vue({
    el: &#x27;#app&#x27;,
    template: &#x27;&lt;App/&gt;&#x27;,
    components: { App }
});	</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>CDN 引入</h2>
				<p> js文件：<am-doc-code>//unpkg.com/amaze-vue/dist/amaze-vue.js</am-doc-code></p>
				<p>css文件：<am-doc-code>//unpkg.com/amaze-vue/dist/amaze-vue.css</am-doc-code></p>
<am-code syntax="xml">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;title&gt;amaze-vue&lt;/title&gt;
	&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;//unpkg.com/amaze-vue/dist/amaze-vue.css&quot;/&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div id=&quot;app&quot;&gt;
		&lt;am-warning color=&quot;success&quot; :close-btn=&quot;true&quot;&gt;&lt;h1&gt;这是一个warning提示&lt;/h1&gt;&lt;/am-warning&gt;
	&lt;/div&gt;
	&lt;script src=&quot;//unpkg.com/vue&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
	&lt;script type=&quot;text/javascript&quot; src=&quot;//unpkg.com/amaze-vue/dist/amaze-vue.js&quot;&gt;&lt;/script&gt;
	&lt;script type=&quot;text/javascript&quot;&gt;
		new Vue({
        	el: &#x27;#app&#x27;
	    })
	&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>版本</h2>
                <h3><am-doc-code>1.1.16</am-doc-code></h3>
				<h3 class="am-text-danger">版本持续更新中。</h3>
			</am-doc-section>
			<am-doc-section>
				<h2>交流群</h2>
				<h3 class="am-text-success"><a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=f69b9d7d833c074b4dc2c45d159e0ebaec4b6169a3cdbbe90fe644826af8c820"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="amaze-vue交流群" title="amaze-vue交流群"></a></h3>
			</am-doc-section>
        </am-article-body>
	</am-article>
</template>
