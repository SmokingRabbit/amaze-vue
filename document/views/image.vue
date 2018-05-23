<template>
	<am-article>
		<am-article-header title="图片"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-image width="120" height="120" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
				</am-example>
<am-code syntax="xml">&lt;am-image width=&quot;120&quot; height=&quot;120&quot; src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80&quot;/&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>圆角</h2>
				<am-example>
					<am-image width="160" height="120" :round="true" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
				</am-example>
<am-code syntax="xml">&lt;am-image width=&quot;160&quot; height=&quot;120&quot; :round=&quot;true&quot; src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80&quot;/&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>圆形</h2>
				<am-example>
					<am-image width="120" height="120" :circle="true" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
				</am-example>
<am-code syntax="xml">&lt;am-image width=&quot;120&quot; height=&quot;120&quot; :circle=&quot;true&quot; src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80&quot;/&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>边框</h2>
				<am-example>
					<am-image width="120" height="120" :circle="true" :thumbnail="true" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
					<am-image width="120" height="120" :thumbnail="true" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
				</am-example>
<am-code syntax="xml">&lt;am-image width=&quot;120&quot; height=&quot;120&quot; :circle=&quot;true&quot; :thumbnail=&quot;true&quot; src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80&quot;/&gt;
&lt;am-image width=&quot;120&quot; height=&quot;120&quot; :thumbnail=&quot;true&quot; src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80&quot;/&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-image</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>
		</am-article-body>
	</am-article>
</template>

<script>
	export default {
		data() {
			return {
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'src',
					desc: '图片url',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'alt',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'responsive',
					desc: '自适应',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'thumbnail',
					desc: '图片边框',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'round',
					desc: '圆角',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'circle',
					desc: '圆形',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}]
			}
		}
	}
</script>

<style lang="less" scoped="true">
	.am-example {
		>img {
			display: inline-block;
		}
	}
</style>