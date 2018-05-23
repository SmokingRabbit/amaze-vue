<template>
	<am-article>
		<am-article-header title="按钮"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-article</am-doc-code> 文章容器</li>
					<li><am-doc-code>am-article-header</am-doc-code> 文章头部、标题</li>
					<li><am-doc-code>am-article-body</am-doc-code> 文章正文</li>
					<li><am-doc-code>am-article-lead</am-doc-code> 文章摘要</li>
				</ul>

				<am-example>

				</am-example>
<am-code syntax="xml"></am-code>
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

			<am-doc-section>
				<h2>事件 <am-doc-code>am-change</am-doc-code></h2>
				<am-table :data="events">
					<am-table-column label="事件名称" prop="prop"></am-table-column>
					<am-table-column label="触发条件" prop="trigger"></am-table-column>
					<am-table-column label="参数" prop="params"></am-table-column>
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
					prop: 'customClass',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}],
				events: [{
					prop: 'collapse:change',
					trigger: '折叠状态发生变换',
					params: 'isOpen(true or false)'
				}]
			}
		}
	}
</script>