<template>
	<am-article>
		<am-article-header title="图标"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-icon</am-doc-code>是基于<a href="http://fontawesome.io/icons/" target="blank">fontawesome</a>的封装</li>
				</ul>

				<am-example>
					<am-icon type="bug"></am-icon>
					<am-icon type="bell" color="primary"></am-icon>
					<am-icon type="leaf" color="secondary"></am-icon>
					<am-icon type="cloud" color="success"></am-icon>
					<am-icon type="cab" color="warning"></am-icon>
					<am-icon type="camera" color="danger"></am-icon>
				</am-example>
<am-code syntax="xml">&lt;am-icon type=&quot;bug&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;bell&quot; color=&quot;primary&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;leaf&quot; color=&quot;secondary&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;cloud&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;cab&quot; color=&quot;warning&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot;&gt;&lt;/am-icon&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>图标大小</h2>
				<am-example>
					<am-icon type="camera" color="danger"></am-icon>
					<am-icon type="camera" color="danger" size="sm"></am-icon>
					<am-icon type="camera" color="danger" size="md"></am-icon>
					<am-icon type="camera" color="danger" size="lg"></am-icon>
				</am-example>
<am-code syntax="xml">&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot; size=&quot;sm&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot; size=&quot;md&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot; size=&quot;lg&quot;&gt;&lt;/am-icon&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>图标按钮</h2>
				<am-example>
					<am-icon type="bug" :btn="true"></am-icon>
					<am-icon type="bell" color="primary" :btn="true"></am-icon>
					<am-icon type="leaf" color="secondary" :btn="true"></am-icon>
					<am-icon type="cloud" color="success" :btn="true"></am-icon>
					<am-icon type="cab" color="warning" :btn="true"></am-icon>
					<am-icon type="camera" color="danger" :btn="true"></am-icon>
				</am-example>
<am-code syntax="xml">&lt;am-icon type=&quot;bug&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;bell&quot; color=&quot;primary&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;leaf&quot; color=&quot;secondary&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;cloud&quot; color=&quot;success&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;cab&quot; color=&quot;warning&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;
&lt;am-icon type=&quot;camera&quot; color=&quot;danger&quot; :btn=&quot;true&quot;&gt;&lt;/am-icon&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-icon</am-doc-code></h2>
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
					prop: 'type',
					desc: {
						render() {
							return (<span>对应<a href="http://www.fontawesome.com.cn/faicons/" target="blank">fontawesome</a>的icon名称</span>);
						}
					},
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'btn',
					desc: '图标按钮',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'size',
					desc: '图标大小',
					type: 'String',
					values: 'sm、md、lg',
					default: 'NULL'
				}, {
					prop: 'color',
					desc: '图标颜色',
					type: 'String',
					values: 'primary, secondary, success, warning, danger',
					default: 'NULL'
				}]
			}
		}
	}
</script>