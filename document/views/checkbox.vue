<template>
	<am-article>
		<am-article-header title="多选"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-checkbox</am-doc-code> 多选框</li>
					<li><am-doc-code>am-checkbox-group</am-doc-code> 多选框容器</li>
				</ul>

				<am-example>
					<am-checkbox v-model="checkbox1" label="苹果"></am-checkbox>
				</am-example>
<am-code syntax="xml">&lt;am-checkbox v-model=&quot;checkbox1&quot; label=&quot;苹果&quot;&gt;&lt;/am-checkbox&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>结合<am-doc-code>am-checkbox-group</am-doc-code>使用</h2>
				<am-example>
					<am-checkbox-group v-model="checkbox2">
		                <am-checkbox label="苹果"></am-checkbox>
		                <am-checkbox label="香蕉"></am-checkbox>
		                <am-checkbox label="葡萄"></am-checkbox>
		                <am-checkbox label="压力"></am-checkbox>
		            </am-checkbox-group>
		            <p>您选择的是：<am-doc-code>{{checkbox2}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-checkbox-group v-model=&quot;checkbox2&quot;&gt;
    &lt;am-checkbox label=&quot;苹果&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;香蕉&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;葡萄&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;压力&quot;&gt;&lt;/am-checkbox&gt;
&lt;/am-checkbox-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>自多、最少选择项</h2>
				<am-example>
					<am-checkbox-group v-model="checkbox3" :min="1" :max="2">
		                <am-checkbox label="苹果"></am-checkbox>
		                <am-checkbox label="香蕉"></am-checkbox>
		                <am-checkbox label="葡萄"></am-checkbox>
		                <am-checkbox label="压力"></am-checkbox>
		            </am-checkbox-group>
		            <p>您选择的是：<am-doc-code>{{checkbox3}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-checkbox-group v-model=&quot;checkbox3&quot; :min=&quot;1&quot; :max=&quot;2&quot;&gt;
    &lt;am-checkbox label=&quot;苹果&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;香蕉&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;葡萄&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;压力&quot;&gt;&lt;/am-checkbox&gt;
&lt;/am-checkbox-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>禁用</h2>
				<am-example>
					<am-checkbox-group v-model="checkbox4">
		                <am-checkbox label="苹果" :disabled="true"></am-checkbox>
		                <am-checkbox label="香蕉"></am-checkbox>
		                <am-checkbox label="葡萄"></am-checkbox>
		                <am-checkbox label="压力"></am-checkbox>
		            </am-checkbox-group>
		            <p>您选择的是：<am-doc-code>{{checkbox4}}</am-doc-code></p>

		            <am-checkbox-group v-model="checkbox5" :disabled="true">
		                <am-checkbox label="苹果"></am-checkbox>
		                <am-checkbox label="香蕉"></am-checkbox>
		                <am-checkbox label="葡萄"></am-checkbox>
		                <am-checkbox label="压力"></am-checkbox>
		            </am-checkbox-group>
		            <p>您选择的是：<am-doc-code>{{checkbox5}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-checkbox-group v-model=&quot;checkbox4&quot;&gt;
    &lt;am-checkbox label=&quot;苹果&quot; :disabled=&quot;true&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;香蕉&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;葡萄&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;压力&quot;&gt;&lt;/am-checkbox&gt;
&lt;/am-checkbox-group&gt;
&lt;am-checkbox-group v-model=&quot;checkbox5&quot; :disabled=&quot;true&quot;&gt;
    &lt;am-checkbox label=&quot;苹果&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;香蕉&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;葡萄&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;压力&quot;&gt;&lt;/am-checkbox&gt;
&lt;/am-checkbox-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>颜色</h2>
				<am-example>
					<am-checkbox-group v-model="checkbox6">
		                <am-checkbox label="苹果" color="secondary"></am-checkbox>
		                <am-checkbox label="香蕉" color="success"></am-checkbox>
		                <am-checkbox label="葡萄" color="warning"></am-checkbox>
		                <am-checkbox label="压力" color="danger"></am-checkbox>
		            </am-checkbox-group>
		            <p>您选择的是：<am-doc-code>{{checkbox6}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-checkbox-group v-model=&quot;checkbox5&quot; :min=&quot;1&quot; :max=&quot;2&quot;&gt;
    &lt;am-checkbox label=&quot;苹果&quot; color=&quot;secondary&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;香蕉&quot; color=&quot;success&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;葡萄&quot; color=&quot;warning&quot;&gt;&lt;/am-checkbox&gt;
    &lt;am-checkbox label=&quot;压力&quot; color=&quot;danger&quot;&gt;&lt;/am-checkbox&gt;
&lt;/am-checkbox-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-checkbox</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-checkbox-group</am-doc-code></h2>
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
				checkbox1: false,
				checkbox2: [],
				checkbox3: ['苹果'],
				checkbox4: ['苹果'],
				checkbox5: ['苹果'],
				checkbox6: ['苹果'],
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
				}, {
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
				}, {
					prop: 'min',
					desc: '最少选中的数量',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'max',
					desc: '最多选中的数量',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}],
				events: [{
					prop: 'change',
					trigger: '选中的值发生变化',
					params: 'labels'
				}]
			}
		}
	}
</script>