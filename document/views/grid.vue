<template>
	<am-article>
		<am-article-header title="栅格"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><a href="http://amazeui.org/" target="blank">Amaaze Ui</a> 提供<am-doc-code>12</am-doc-code>列响应网格系统</li>
					<li>栅格系统由 <am-doc-code>am-row</am-doc-code> 与 <am-doc-code>am-col</am-doc-code> 组成</li>
				</ul>

				<am-example>
					<am-container>
						<am-row>
							<am-col :span="4"><div class="block">4</div></am-col>
							<am-col :span="4"><div class="block light">4</div></am-col>
							<am-col :span="4"><div class="block">4</div></am-col>
						</am-row>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;am-container&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;block&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;block light&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;block&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
&lt;/am-container&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>不足12份</h2>
				<ul class="am-doc-group">
					<li>在使用中网格不足12份的情况下，需要给<am-doc-code>am-col</am-doc-code>设置<am-doc-code>end=true</am-doc-code></li>
				</ul>
				<am-example>
					<am-container>
						<am-row>
							<am-col :span="4"><div class="block">4</div></am-col>
							<am-col :span="4"><div class="block light">4</div></am-col>
						</am-row>
						<am-row>
							<am-col :span="4"><div class="block light">4</div></am-col>
							<am-col :span="4" :end="true"><div class="block">4</div></am-col>
						</am-row>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;am-container&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;block&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;bloc lightk&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;4&quot;&gt;&lt;div class=&quot;block light&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;4&quot; :end=&quot;true&quot;&gt;&lt;div class=&quot;block&quot;&gt;4&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
&lt;/am-container&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>列边距</h2>
				<am-example>
					<am-container>
						<am-row>
							<am-col :span="1"><div class="block">1</div></am-col>
							<am-col :span="11"><div class="block light">11</div></am-col>
						</am-row>
						<am-row>
							<am-col :span="1"><div class="block light">1</div></am-col>
							<am-col :span="8" :end="true" :offset="3"><div class="block">8</div></am-col>
						</am-row>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;am-container&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;1&quot;&gt;&lt;div class=&quot;block&quot;&gt;1&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;11&quot;&gt;&lt;div class=&quot;block light&quot;&gt;11&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;1&quot;&gt;&lt;div class=&quot;block light&quot;&gt;1&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;8&quot; :end=&quot;true&quot; :offset=&quot;3&quot;&gt;&lt;div class=&quot;block&quot;&gt;8&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
&lt;/am-container&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>清除列边距</h2>
				<am-example>
					<am-container>
						<am-row :collapse="true">
							<am-col :span="1"><div class="block">1</div></am-col>
							<am-col :span="11"><div class="block light">11</div></am-col>
						</am-row>
						<am-row>
							<am-col :span="1"><div class="block light">1</div></am-col>
							<am-col :span="8" :end="true" :offset="3"><div class="block">8</div></am-col>
						</am-row>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;am-container&gt;
	&lt;am-row :collapse=&quot;true&quot;&gt;
		&lt;am-col :span=&quot;1&quot;&gt;&lt;div class=&quot;block&quot;&gt;1&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;11&quot;&gt;&lt;div class=&quot;block light&quot;&gt;11&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
	&lt;am-row&gt;
		&lt;am-col :span=&quot;1&quot;&gt;&lt;div class=&quot;block light&quot;&gt;1&lt;/div&gt;&lt;/am-col&gt;
		&lt;am-col :span=&quot;8&quot; :end=&quot;true&quot; :offset=&quot;3&quot;&gt;&lt;div class=&quot;block&quot;&gt;8&lt;/div&gt;&lt;/am-col&gt;
	&lt;/am-row&gt;
&lt;/am-container&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-row</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-col</am-doc-code></h2>
				<am-table :data="colProps">
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
					prop: 'collapse',
					desc: '清除列边距',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'fixed',
					desc: '行最大宽度不超过1000px',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				colProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'span',
					desc: '列数',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'size',
					desc: '列的最大宽度',
					type: 'String',
					values: 'sm、md、lg',
					default: 'sm'
				}, {
					prop: 'offset',
					desc: '列边距',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'center',
					desc: '列居中',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'push',
					desc: '向前排序',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'pull',
					desc: '向后排序',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'end',
					desc: '不满12列时向前对齐',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, ]
			}
		}
	}
</script>

<style lang="less" scoped="true">
	.block {
		margin-bottom: 10px;
		height: 40px;
		background-color: #444;
		border-radius: 2px;
		text-align: center;
		color: #fff;
		line-height: 40px;

		&.light {
			background-color: #777;
		}
	}
</style>