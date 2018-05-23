<template>
	<am-article>
		<am-article-header title="开关"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-switch v-model="switch1"></am-switch>
				</am-example>
<am-code syntax="xml">&lt;am-switch v-model=&quot;switch1&quot;&gt;&lt;/am-switch&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>文字</h2>
				<am-example>
					<am-switch v-model="switch2" active-text="开启" inactive-text="关闭"></am-switch>
				</am-example>
<am-code syntax="xml">&lt;am-switch v-model=&quot;switch2&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot;&gt;&lt;/am-switch&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>颜色</h2>
				<am-example>
					<am-switch v-model="switch3" active-text="开启" inactive-text="关闭"></am-switch>
					<am-switch v-model="switch3" active-text="开启" inactive-text="关闭" color="secondary"></am-switch>
					<am-switch v-model="switch3" active-text="开启" inactive-text="关闭" color="success">></am-switch>
					<am-switch v-model="switch3" active-text="开启" inactive-text="关闭" color="warning">></am-switch>
					<am-switch v-model="switch3" active-text="开启" inactive-text="关闭" color="danger">></am-switch>
				</am-example>
<am-code syntax="xml">&lt;am-switch v-model=&quot;switch3&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot;&gt;&lt;/am-switch&gt;
&lt;am-switch v-model=&quot;switch3&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot; color=&quot;secondary&quot;&gt;&lt;/am-switch&gt;
&lt;am-switch v-model=&quot;switch3&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot; color=&quot;success&quot;&gt;&gt;&lt;/am-switch&gt;
&lt;am-switch v-model=&quot;switch3&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot; color=&quot;warning&quot;&gt;&gt;&lt;/am-switch&gt;
&lt;am-switch v-model=&quot;switch3&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot; color=&quot;danger&quot;&gt;&gt;&lt;/am-switch&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>禁用</h2>
				<am-example>
					<am-switch v-model="switch4" :disabled="true" active-text="开启" inactive-text="关闭"></am-switch>
				</am-example>
<am-code syntax="xml">&lt;am-switch v-model=&quot;switch4&quot; :disabled=&quot;true&quot; active-text=&quot;开启&quot; inactive-text=&quot;关闭&quot;&gt;&lt;/am-switch&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-change</am-doc-code></h2>
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
				switch1: false,
				switch2: false,
				switch3: false,
				switch4: false,
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'disabled',
					desc: '禁用开关',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'name',
					desc: 'form属性',
					type: 'String',
					values: '-',
					default: 'am-switch'
				}, {
					prop: 'color',
					desc: '自定义className',
					type: 'String',
					values: 'primary, secondary, success, warning, danger',
					default: 'primary'
				}, {
					prop: 'active-text',
					desc: '开启状态文字',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'inactive-text',
					desc: '关闭状态文字',
					type: 'String',
					values: '-',
					default: 'NULL'
				}]
			}
		}
	}
</script>