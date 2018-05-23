<template>
	<am-article>
		<am-article-header title="幻灯片"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-slider</am-doc-code> 幻灯片容器</li>
					<li><am-doc-code>am-slider-item</am-doc-code> 幻灯片图片 </li>
				</ul>

				<am-example>
					<am-slider>
		                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></am-slider-item>
		                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></am-slider-item>
		                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></am-slider-item>
		                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></am-slider-item>
		            </am-slider>
				</am-example>
<am-code syntax="xml">&lt;am-slider&gt;
    &lt;am-slider-item&gt;&lt;img src=&quot;http://s.amazeui.org/media/i/demos/bing-1.jpg&quot; /&gt;&lt;/am-slider-item&gt;
    &lt;am-slider-item&gt;&lt;img src=&quot;http://s.amazeui.org/media/i/demos/bing-2.jpg&quot; /&gt;&lt;/am-slider-item&gt;
    &lt;am-slider-item&gt;&lt;img src=&quot;http://s.amazeui.org/media/i/demos/bing-3.jpg&quot; /&gt;&lt;/am-slider-item&gt;
    &lt;am-slider-item&gt;&lt;img src=&quot;http://s.amazeui.org/media/i/demos/bing-4.jpg&quot; /&gt;&lt;/am-slider-item&gt;
&lt;/am-slider&gt;</am-code>
			</am-doc-section>


			<am-doc-section>
				<h2>Props <am-doc-code>am-slider</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-slider-item</am-doc-code></h2>
				<am-table :data="defaultPrps">
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
					prop: 'active-index',
					desc: '显示的幻灯片索引',
					type: 'Number',
					values: '-',
					default: '0'
				}, {
					prop: 'control-nav',
					desc: '下部页码翻页',
					type: 'Boolean',
					values: '-',
					default: 'true'
				}, {
					prop: 'direction-nav',
					desc: '左右切换翻页',
					type: 'Boolean',
					values: '-',
					default: 'true'
				},  {
					prop: 'height',
					desc: '幻灯片高度',
					type: 'Number',
					values: '-',
					default: '300'
				}, {
					prop: 'auto-play',
					desc: '自动播放',
					type: 'Boolean',
					values: '-',
					default: 'true'
				}, {
					prop: 'play-delay',
					desc: '自动播放时间间隔',
					type: 'Number',
					values: '-',
					default: '5000'
				}],
				defaultPrps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}]
			}
		}
	}
</script>