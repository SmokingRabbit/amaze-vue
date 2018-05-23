<template>
	<am-article>
		<am-article-header title="时间"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-timepicker></am-timepicker>
				</am-example>
<am-code syntax="xml">&lt;am-timepicker&gt;&lt;/am-timepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>不显示三角插入符</h2>
				<am-example>
					<am-timepicker :caret="false"></am-timepicker>
				</am-example>
<am-code syntax="xml">&lt;am-timepicker :caret=&quot;false&quot;&gt;&lt;/am-timepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>颜色</h2>
				<am-example>
					<am-timepicker color="success"></am-timepicker>
				</am-example>
<am-code syntax="xml">&lt;am-timepicker color=&quot;success&quot;&gt;&lt;/am-timepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>icon位置</h2>
				<am-example>
					<am-timepicker labelPlacement="append" color="primary"></am-timepicker>
				</am-example>
<am-code syntax="xml">&lt;am-timepicker labelPlacement=&quot;append&quot; color=&quot;primary&quot;&gt;&lt;/am-timepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-timepicker</am-doc-code></h2>
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
					prop: 'defaultValue',
					desc: '默认值',
					type: 'Number | String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'labelPlacement',
					desc: 'icon位置',
					type: 'String',
					values: 'prepend、append',
					default: 'prepend'
				}, {
					prop: 'caret',
					desc: '显示三角插入符',
					type: 'Boolean',
					values: 'NULL',
					default: 'true'
				}, {
					prop: 'other',
					desc: '其他属性请参考 am-input、am-input-group',
					type: '-',
					values: '-',
					default: '-'
				}]
			}
		}
	}
</script>