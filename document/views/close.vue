<template>
	<am-article>
		<am-article-header title="关闭按钮"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-close></am-close>
				</am-example>
<am-code syntax="xml">&lt;am-close&gt;&lt;/am-close&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>border</h2>
				<am-example>
					<am-close :border="true"></am-close>
				</am-example>
<am-code syntax="xml">&lt;am-close :border=&quot;true&quot;&gt;&lt;/am-close&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-close</am-doc-code></h2>
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
					prop: 'border',
					desc: '使用边框',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}]
			}
		}
	}
</script>