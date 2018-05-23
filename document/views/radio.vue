<template>
	<am-article>
		<am-article-header title="单选"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<h4>单选时结合<am-doc-code>am-radio-group</am-doc-code>使用</h4>
				<ul class="am-doc-group">
					<li><am-doc-code>am-radio</am-doc-code> 单选框</li>
					<li><am-doc-code>am-radio-group</am-doc-code> 单选框容器</li>
				</ul>

				<am-example>
					<am-radio-group v-model="radio1">
		                <am-radio label="苹果"></am-radio>
		                <am-radio label="香蕉"></am-radio>
		                <am-radio label="葡萄"></am-radio>
		                <am-radio label="鸭梨"></am-radio>
		            </am-radio-group>
		            <p>您选择的是：<am-doc-code>{{radio1}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-radio-group v-model=&quot;radio1&quot;&gt;
    &lt;am-radio label=&quot;苹果&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;香蕉&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;葡萄&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;鸭梨&quot;&gt;&lt;/am-radio&gt;
&lt;/am-radio-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>禁用选项</h2>
				<am-example>
					<am-radio-group v-model="radio2">
		                <am-radio label="苹果" :disabled="true"></am-radio>
		                <am-radio label="香蕉"></am-radio>
		                <am-radio label="葡萄"></am-radio>
		                <am-radio label="鸭梨"></am-radio>
		            </am-radio-group>
		            <p>您选择的是：<am-doc-code>{{radio2}}</am-doc-code></p>

		            <am-radio-group v-model="radio3" :disabled="true">
		                <am-radio label="苹果" ></am-radio>
		                <am-radio label="香蕉"></am-radio>
		                <am-radio label="葡萄"></am-radio>
		                <am-radio label="鸭梨"></am-radio>
		            </am-radio-group>
		            <p>您选择的是：<am-doc-code>{{radio3}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-radio-group v-model=&quot;radio2&quot;&gt;
    &lt;am-radio label=&quot;苹果&quot; :disabled=&quot;true&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;香蕉&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;葡萄&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;鸭梨&quot;&gt;&lt;/am-radio&gt;
&lt;/am-radio-group&gt;
&lt;am-radio-group v-model=&quot;radio3&quot; :disabled=&quot;true&quot;&gt;
    &lt;am-radio label=&quot;苹果&quot; &gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;香蕉&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;葡萄&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;鸭梨&quot;&gt;&lt;/am-radio&gt;
&lt;/am-radio-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>颜色</h2>
				<am-example>
					<am-radio-group v-model="radio4">
		                <am-radio label="苹果" color="secondary"></am-radio>
		                <am-radio label="香蕉" color="success"></am-radio>
		                <am-radio label="葡萄" color="warning"></am-radio>
		                <am-radio label="鸭梨" color="danger"></am-radio>
		            </am-radio-group>
		            <p>您选择的是：<am-doc-code>{{radio4}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-radio-group v-model=&quot;radio4&quot;&gt;
    &lt;am-radio label=&quot;苹果&quot; color=&quot;secondary&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;香蕉&quot; color=&quot;success&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;葡萄&quot; color=&quot;warning&quot;&gt;&lt;/am-radio&gt;
    &lt;am-radio label=&quot;鸭梨&quot; color=&quot;danger&quot;&gt;&lt;/am-radio&gt;
&lt;/am-radio-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-radio</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-radio-group</am-doc-code></h2>
				<am-table :data="groupProps">
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
				radio1: '',
				radio2: '香蕉',
				radio3: '',
				radio4: '',
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'name',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'label',
					desc: '选中值',
					type: 'String | Number | Boolean',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'show-label',
					desc: '显示便签label值',
					type: 'Boolean',
					values: '-',
					default: 'true'
				}, {
					prop: 'disabled',
					desc: '禁用',
					type: 'Boolean',
					values: '-',
					default: 'false'
				},{
					prop: 'color',
					desc: '选中后的颜色',
					type: 'String',
					values: 'secondary, success, warning, danger',
					default: 'NULL'
				}, {
					prop: 'inline',
					desc: '使用inline-block属性',
					type: 'Boolean',
					values: '-',
					default: 'true'
				}],
				groupProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'prop',
					desc: '内部属性名称',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'disabled',
					desc: '禁用全部单选',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				events: [{
					prop: 'change',
					trigger: '选中状态发生改变',
					params: 'label'
				}]
			}
		}
	}
</script>