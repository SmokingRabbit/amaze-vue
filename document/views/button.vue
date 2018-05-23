<template>
	<am-article>
		<am-article-header title="按钮"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-button>默认按钮</am-button>
					<am-button color="primary">主要按钮</am-button>
					<am-button color="secondary">次要按钮</am-button>
					<am-button color="success">成功按钮</am-button>
					<am-button color="warning">警告按钮</am-button>
					<am-button color="danger">危险按钮</am-button>
				</am-example>
<am-code syntax="xml">&lt;am-button &gt;默认按钮&lt;/am-button&gt;
&lt;am-button color=&quot;primary&quot;&gt;主要按钮&lt;/am-button&gt;
&lt;am-button color=&quot;secondary&quot;&gt;次要按钮&lt;/am-button&gt;
&lt;am-button color=&quot;success&quot;&gt;成功按钮&lt;/am-button&gt;
&lt;am-button color=&quot;warning&quot;&gt;警告按钮&lt;/am-button&gt;
&lt;am-button color=&quot;danger&quot;&gt;危险按钮&lt;/am-button&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>圆角</h2>
				<am-example>
					<am-button :round="true">默认按钮</am-button>
					<am-button :round="true" color="primary">主要按钮</am-button>
					<am-button :round="true" color="secondary">次要按钮</am-button>
					<am-button :round="true" color="success">成功按钮</am-button>
					<am-button :round="true" color="warning">警告按钮</am-button>
					<am-button :round="true" color="danger">危险按钮</am-button>
				</am-example>
<am-code syntax="xml">&lt;am-button :round=&quot;true&quot;&gt;默认按钮&lt;/am-button&gt;
&lt;am-button :round=&quot;true&quot; color=&quot;primary&quot;&gt;主要按钮&lt;/am-button&gt;
&lt;am-button :round=&quot;true&quot; color=&quot;secondary&quot;&gt;次要按钮&lt;/am-button&gt;
&lt;am-button :round=&quot;true&quot; color=&quot;success&quot;&gt;成功按钮&lt;/am-button&gt;
&lt;am-button :round=&quot;true&quot; color=&quot;warning&quot;&gt;警告按钮&lt;/am-button&gt;
&lt;am-button :round=&quot;true&quot; color=&quot;danger&quot;&gt;危险按钮&lt;/am-button&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>loading</h2>
				<am-example>
					<am-button color="primary" @click="click" :loading="loading">点击加载</am-button>
				</am-example>
<am-code>&lt;template&gt;
&lt;am-button color=&quot;primary&quot; @click=&quot;click&quot; :loading=&quot;loading&quot;&gt;点击加载&lt;/am-button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
	data() {
		return {
			loading: false
		}
	},
	methods: {
		click() {
			this.loading = true;

			setTimeout(() =&gt; {
				this.loading = false;
			}, 2000);
		}
	}
}
&lt;/script&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>结合 <am-doc-code>am-button-group</am-doc-code> 使用</h2>
				<am-example>
					<am-button-group>
						<am-button :round="true" size="sm">默认按钮</am-button>
						<am-button :round="true" size="sm" color="primary">主要按钮</am-button>
						<am-button :round="true" size="sm" color="secondary">次要按钮</am-button>
						<am-button :round="true" size="sm" color="success">成功按钮</am-button>
						<am-button :round="true" size="sm" color="warning">警告按钮</am-button>
						<am-button :round="true" size="sm" color="danger">危险按钮</am-button>
					</am-button-group>
				</am-example>
<am-code syntax="xml">&lt;am-button-group&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot;&gt;默认按钮&lt;/am-button&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot; color=&quot;primary&quot;&gt;主要按钮&lt;/am-button&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot; color=&quot;secondary&quot;&gt;次要按钮&lt;/am-button&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot; color=&quot;success&quot;&gt;成功按钮&lt;/am-button&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot; color=&quot;warning&quot;&gt;警告按钮&lt;/am-button&gt;
	&lt;am-button :round=&quot;true&quot; size=&quot;sm&quot; color=&quot;danger&quot;&gt;危险按钮&lt;/am-button&gt;
&lt;/am-button-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-button </am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>
			<am-doc-section>
				<h2>Props <am-doc-code>am-button-group </am-doc-code></h2>
				<am-table :data="groupProps">
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
				loading: false,
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'color',
					desc: '按钮颜色',
					type: 'String',
					values: 'default, primary, secondary, success, warning, danger',
					default: 'default'
				}, {
					prop: 'disabled',
					desc: '禁用状态',
					type: 'Boolean',
					values: '-',
					default: 'false'
				},{
					prop: 'round',
					desc: '大圆角按钮',
					type: 'Boolean',
					values: '-',
					default: 'false'
				},{
					prop: 'is-active',
					desc: '激活状态',
					type: 'Boolean',
					values: '-',
					default: 'false'
				},{
					prop: 'size',
					desc: '按钮尺寸',
					type: 'String',
					values: 'xl、lg、sm、xs、block',
					default: 'NULL'
				},{
					prop: 'loading',
					desc: '加载状态',
					type: 'Boolean',
					values: '-',
					default: 'false'
				},{
					prop: 'loading-text',
					desc: '加载状态提示文字',
					type: 'String',
					values: '-',
					default: 'NULL'
				}],
				groupProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'type',
					desc: '类型',
					type: 'String',
					values: 'group、stacked、justify、toolbar',
					default: 'group'
				}, {
					prop: 'size',
					desc: '按钮尺寸',
					type: 'String',
					values: 'lg、sm、xs',
					default: 'NULL'
				}]
			}
		},
		methods: {
			click() {
				this.loading = true;

				setTimeout(() => {
					this.loading = false;
				}, 2000);
			}
		}
	}
</script>