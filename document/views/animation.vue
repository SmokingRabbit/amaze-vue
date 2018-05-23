<template>
	<am-article>
		<am-article-header title="动画"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-animation type="spin">
						<am-icon type="cog"></am-icon>
					</am-animation>
				</am-example>
<am-code syntax="xml">&lt;am-animation type=&quot;spin&quot;&gt;
	&lt;am-icon type=&quot;cog&quot;&gt;&lt;/am-icon&gt;
&lt;/am-animation&gt;</am-code>
			</am-doc-section>


			<am-doc-section>
				<h2>Props <am-doc-code>am-animation</am-doc-code></h2>
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
					desc: '动画类型',
					type: 'String',
					values: 'fade、scale-up、scale-down、slide-top、slide-bottom、slide-left、slide-right、slide-top-fixed、shake、spin、left-spring、right-spring',
					default: 'fade'
				}, {
					prop: 'reverse',
					desc: '动画反向播放',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'pause',
					desc: '动画暂停',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'delay',
					desc: '延时',
					type: 'Number',
					values: '-',
					default: '0'
				}, {
					prop: 'duration',
					desc: '动画周期',
					type: 'Number',
					values: '-',
					default: '0.5'
				}, {
					prop: 'timing-fun',
					desc: '过度速度曲线',
					type: 'String',
					values: 'linear、ease、ease-in、ease-out、ease-in-out',
					default: 'ease-out'
				}, {
					prop: 'fill-mode',
					desc: '动画完成之后效果是否可见',
					type: 'String',
					values: 'none、forwards、backwards、both、',
					default: 'none'
				}, {
					prop: 'iteration-count',
					desc: '动画播放次数',
					type: 'String | Number',
					values: '-',
					default: 'NULL'
				}]
			}
		}
	}
</script>