<template>
	<am-article>
		<am-article-header title="徽章"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-badge>1</am-badge>
					<am-badge color="primary">2</am-badge>
					<am-badge color="secondary">3</am-badge>
					<am-badge color="success">4</am-badge>
					<am-badge color="warning">5</am-badge>
					<am-badge color="danger">6</am-badge>
				</am-example>
<am-code syntax="xml">&lt;am-badge&gt;1&lt;/am-badge&gt;
&lt;am-badge color=&quot;primary&quot;&gt;2&lt;/am-badge&gt;
&lt;am-badge color=&quot;secondary&quot;&gt;3&lt;/am-badge&gt;
&lt;am-badge color=&quot;success&quot;&gt;4&lt;/am-badge&gt;
&lt;am-badge color=&quot;warning&quot;&gt;5&lt;/am-badge&gt;
&lt;am-badge color=&quot;danger&quot;&gt;6&lt;/am-badge&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>圆角</h2>
				<am-example>
					<am-badge :round="true">1</am-badge>
					<am-badge :round="true" color="primary">2</am-badge>
					<am-badge :round="true" color="secondary">3</am-badge>
					<am-badge :round="true" color="success">4</am-badge>
					<am-badge :round="true" color="warning">5</am-badge>
					<am-badge :round="true" color="danger">6</am-badge>
				</am-example>
<am-code syntax="xml">&lt;am-badge :round=&quot;true&quot;&gt;1&lt;/am-badge&gt;
&lt;am-badge :round=&quot;true&quot; color=&quot;primary&quot;&gt;2&lt;/am-badge&gt;
&lt;am-badge :round=&quot;true&quot; color=&quot;secondary&quot;&gt;3&lt;/am-badge&gt;
&lt;am-badge :round=&quot;true&quot; color=&quot;success&quot;&gt;4&lt;/am-badge&gt;
&lt;am-badge :round=&quot;true&quot; color=&quot;warning&quot;&gt;5&lt;/am-badge&gt;
&lt;am-badge :round=&quot;true&quot; color=&quot;danger&quot;&gt;6&lt;/am-badge&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>尺寸</h2>
				<am-example>
					<am-badge size="xl">1</am-badge>
					<am-badge size="lg" color="primary">2</am-badge>
					<am-badge size="sm" color="secondary">3</am-badge>
					<am-badge size="xs" color="success">4</am-badge>
					<am-badge size="xl" color="warning">5</am-badge>
					<am-badge size="block" color="danger">6</am-badge>
				</am-example>
<am-code syntax="xml">&lt;am-badge size=&quot;xl&quot;&gt;1&lt;/am-badge&gt;
&lt;am-badge size=&quot;lg&quot; color=&quot;primary&quot;&gt;2&lt;/am-badge&gt;
&lt;am-badge size=&quot;sm&quot; color=&quot;secondary&quot;&gt;3&lt;/am-badge&gt;
&lt;am-badge size=&quot;xs&quot; color=&quot;success&quot;&gt;4&lt;/am-badge&gt;
&lt;am-badge size=&quot;xl&quot; color=&quot;warning&quot;&gt;5&lt;/am-badge&gt;
&lt;am-badge size=&quot;block&quot; color=&quot;danger&quot;&gt;6&lt;/am-badge&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-badge </am-doc-code></h2>
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
					prop: 'color',
					desc: '徽章屑颜色',
					type: 'String',
					values: 'default, primary, secondary, success, warning, danger',
					default: 'false'
				}, {
					prop: 'size',
					desc: '徽章尺寸',
					type: 'String',
					values: 'xl、lg、sm、xs、block',
					default: 'NULL'
				}, {
					prop: 'round',
					desc: '大圆角按钮',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'onClick',
					desc: '点击事件',
					type: 'Function',
					values: '-',
					default: 'NULL'
				}]
			}
		}
	}
</script>
