<template>
	<am-article>
		<am-article-header title="日历"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-datepicker v-model="date" :defaultValue="date"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;template&gt;
	&lt;am-datepicker v-model=&quot;date&quot; :defaultValue=&quot;date&quot;&gt;&lt;/am-datepicker&gt;
&lt;/template&gt;
&lt;script&gt;
	export default {
		data(){
			return {
				date: &#x27;2017-11-11&#x27;
			}
		}
	}
&lt;/script&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>选择年-月</h2>
				<am-example>
					<am-datepicker modelType="month" format="yyyy-mm"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;am-datepicker modelType=&quot;month&quot; format=&quot;yyyy-mm&quot;&gt;&lt;/am-datepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>选择年</h2>
				<am-example>
					<am-datepicker modelType="year" format="yyyy"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;am-datepicker modelType=&quot;year&quot; format=&quot;yyyy&quot;&gt;&lt;/am-datepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>颜色</h2>
				<am-example>
					<am-datepicker color="success"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;am-datepicker color=&quot;success&quot;&gt;&lt;/am-datepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>icon位置</h2>
				<am-example>
					<am-datepicker labelPlacement="append" color="primary"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;am-datepicker labelPlacement="append" color=&quot;primary&quot;&gt;&lt;/am-datepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>禁选日期</h2>
				<am-example>
					<am-datepicker color="danger" defaultValue="2017-11-11" disabledBeforeDate="2017-11-05" disabledAfterDate="2017-11-20"></am-datepicker>
				</am-example>
<am-code syntax="xml">&lt;am-datepicker color=&quot;danger&quot; defaultValue=&quot;2017-11-11&quot; disabledBeforeDate=&quot;2017-11-05&quot; disabledAfterDate=&quot;2017-11-20&quot;&gt;&lt;/am-datepicker&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-datepicker</am-doc-code></h2>
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
				date: '2017-11-11',
				props: [{
					prop: 'modelType',
					desc: '日期类型',
					type: 'String',
					values: 'year、month、date',
					default: 'year、month、date'
				}, {
					prop: 'defaultValue',
					desc: '默认值',
					type: 'Number | String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'disabledBeforeDate',
					desc: '禁选之前的日期，如果传入true会是禁选默认日期之前的日期',
					type: 'Number | String | Boolean',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'disabledAfterDate',
					desc: '禁选之后的日期，如果传入true会是禁选默认日期之后的日期',
					type: 'Number | String | Boolean',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'language',
					desc: '日期语言',
					type: 'String',
					values: 'zh、en',
					default: 'NULL'
				}, {
					prop: 'format',
					desc: '日期格式化',
					type: 'String',
					values: '-',
					default: 'yyyy-mm-dd'
				}, {
					prop: 'labelPlacement',
					desc: 'icon位置',
					type: 'String',
					values: 'prepend、append',
					default: 'prepend'
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