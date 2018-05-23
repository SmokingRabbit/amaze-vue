<template>
	<am-article>
		<am-article-header title="滚动栏"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-scrollbar :height="300" :auto-hide="false">
						<p>鹅鹅鹅，</p>
						<p>曲项向天歌。</p>
						<p>白毛浮绿水，</p>
						<p>红掌拨清波。</p>
						<p>春种一粒粟，</p>
						<p>秋收万颗子。</p>
						<p>四海无闲田，</p>
						<p>农夫犹饿死。</p>
						<p>锄禾日当午，</p>
						<p>汗滴禾下土。</p>
						<p>谁知盘中餐，</p>
						<p>粒粒皆辛苦。</p>
					</am-scrollbar>
				</am-example>
<am-code syntax="xml">&lt;am-scrollbar :height=&quot;300&quot; :auto-hide=&quot;false&quot;&gt;
	&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
	&lt;p&gt;曲项向天歌。&lt;/p&gt;
	&lt;p&gt;白毛浮绿水，&lt;/p&gt;
	&lt;p&gt;红掌拨清波。&lt;/p&gt;
	&lt;p&gt;春种一粒粟，&lt;/p&gt;
	&lt;p&gt;秋收万颗子。&lt;/p&gt;
	&lt;p&gt;四海无闲田，&lt;/p&gt;
	&lt;p&gt;农夫犹饿死。&lt;/p&gt;
	&lt;p&gt;锄禾日当午，&lt;/p&gt;
	&lt;p&gt;汗滴禾下土。&lt;/p&gt;
	&lt;p&gt;谁知盘中餐，&lt;/p&gt;
	&lt;p&gt;粒粒皆辛苦。&lt;/p&gt;
&lt;/am-scrollbar&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>横向滚动</h2>
				<am-example>
					<am-scrollbar :height="40"  :auto-hide="false" >
						<p :style="{width: '1000px'}">鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。</p>
					</am-scrollbar>
				</am-example>
<am-code syntax="xml">&lt;am-scrollbar :height=&quot;40&quot;  :auto-hide=&quot;false&quot;&gt;
	&lt;p :style=&quot;{width: &#x27;1000px&#x27;}&quot;&gt;鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。&lt;/p&gt;
&lt;/am-scrollbar&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>获取滚动参数</h2>
				<am-example>
					<am-scrollbar :height="200" :auto-hide="false" ref="scrollbar" @scroll="onScroll">
						<p>鹅鹅鹅，</p>
						<p>曲项向天歌。</p>
						<p>白毛浮绿水，</p>
						<p>红掌拨清波。</p>
						<p>春种一粒粟，</p>
						<p>秋收万颗子。</p>
						<p>四海无闲田，</p>
						<p>农夫犹饿死。</p>
						<p>锄禾日当午，</p>
						<p>汗滴禾下土。</p>
						<p>谁知盘中餐，</p>
						<p>粒粒皆辛苦。</p>
					</am-scrollbar>
					<ul>
						<li><am-doc-code>scrollTop</am-doc-code>: {{scrollbar.scrollTop}}</li>
						<li><am-doc-code>scrollLeft</am-doc-code>: {{scrollbar.scrollLeft}}</li>
						<li><am-doc-code>clientWidth</am-doc-code>: {{scrollbar.clientWidth}}</li>
						<li><am-doc-code>clientHeight</am-doc-code>: {{scrollbar.clientHeight}}</li>
						<li><am-doc-code>scrollAreaHeight</am-doc-code>: {{scrollbar.scrollAreaHeight}}</li>
						<li><am-doc-code>scrollAreaWidth</am-doc-code>: {{scrollbar.scrollAreaWidth}}</li>
					</ul>
				</am-example>
<am-code syntax="xml">&lt;template&gt;
	&lt;am-scrollbar :height=&quot;200&quot; :auto-hide=&quot;false&quot; ref=&quot;scrollbar&quot; @scroll=&quot;onScroll&quot;&gt;
		&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
		&lt;p&gt;曲项向天歌。&lt;/p&gt;
		&lt;p&gt;白毛浮绿水，&lt;/p&gt;
		&lt;p&gt;红掌拨清波。&lt;/p&gt;
		&lt;p&gt;春种一粒粟，&lt;/p&gt;
		&lt;p&gt;秋收万颗子。&lt;/p&gt;
		&lt;p&gt;四海无闲田，&lt;/p&gt;
		&lt;p&gt;农夫犹饿死。&lt;/p&gt;
		&lt;p&gt;锄禾日当午，&lt;/p&gt;
		&lt;p&gt;汗滴禾下土。&lt;/p&gt;
		&lt;p&gt;谁知盘中餐，&lt;/p&gt;
		&lt;p&gt;粒粒皆辛苦。&lt;/p&gt;
	&lt;/am-scrollbar&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;am-doc-code&gt;scrollTop&lt;/am-doc-code&gt;: {{scrollbar.scrollTop}}&lt;/li&gt;
		&lt;li&gt;&lt;am-doc-code&gt;scrollLeft&lt;/am-doc-code&gt;: {{scrollbar.scrollLeft}}&lt;/li&gt;
		&lt;li&gt;&lt;am-doc-code&gt;clientWidth&lt;/am-doc-code&gt;: {{scrollbar.clientWidth}}&lt;/li&gt;
		&lt;li&gt;&lt;am-doc-code&gt;clientHeight&lt;/am-doc-code&gt;: {{scrollbar.clientHeight}}&lt;/li&gt;
		&lt;li&gt;&lt;am-doc-code&gt;scrollAreaHeight&lt;/am-doc-code&gt;: {{scrollbar.scrollAreaHeight}}&lt;/li&gt;
		&lt;li&gt;&lt;am-doc-code&gt;scrollAreaWidth&lt;/am-doc-code&gt;: {{scrollbar.scrollAreaWidth}}&lt;/li&gt;
	&lt;/ul&gt;
&lt;/template&gt;
&lt;script&gt;
	export default {
		data() {
			return {
				scrollbar: {
					scrollTop: 0,
                    scrollLeft: 0,
                    clientWidth: 0,
                    clientHeight: 0,
                    scrollAreaHeight: 0,
                    scrollAreaWidth: 0
				}
			}
		},
		methods: {
			onScroll() {
				this.scrollbar = this.$refs[&#x27;scrollbar&#x27;].getValues();
			}
		},
		mounted() {
			this.scrollbar = this.$refs[&#x27;scrollbar&#x27;].getValues();
		}
	}
&lt;/script&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-scrollbar</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>事件 <am-doc-code>am-scrollbar</am-doc-code></h2>
				<am-table :data="events">
					<am-table-column label="事件名称" prop="prop"></am-table-column>
					<am-table-column label="触发条件" prop="trigger"></am-table-column>
					<am-table-column label="参数" prop="params"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>方法 <am-doc-code>am-scrollbar</am-doc-code></h2>
				<am-table :data="methods">
					<am-table-column label="方法名称" prop="prop"></am-table-column>
					<am-table-column label="参数" prop="params"></am-table-column>
					<am-table-column label="返回值" prop="ret"></am-table-column>
				</am-table>
			</am-doc-section>

		</am-article-body>
	</am-article>
</template>

<script>
	export default {
		data() {
			return {
				scrollbar: {
					scrollTop: 0,
                    scrollLeft: 0,
                    clientWidth: 0,
                    clientHeight: 0,
                    scrollAreaHeight: 0,
                    scrollAreaWidth: 0
				},
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'speed',
					desc: '单步距离',
					type: 'Number',
					values: '-',
					default: '53'
				}, {
					prop: 'auto-hide',
					desc: '自动隐藏拖曳滑块',
					type: 'Boolean',
					values: '-',
					default: 'true'
				}, {
					prop: 'width',
					desc: '滚动区域宽度',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'height',
					desc: '滚动区域高度',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'delay',
					desc: '自动隐藏延时翅时间',
					type: 'Number',
					values: '-',
					default: '1000'
				}],
				events: [{
					prop: 'scroll',
					trigger: '发生滚动',
					params: '$event'
				}],
				methods: [{
					prop: 'getValues',
					params: '-',
					ret: '{scrollTop, scrollLeft, clientWidth, clientHeight, scrollAreaHeight, scrollAreaWidth}'
				}, {
					prop: 'scrollTop',
					params: 'distance',
					ret: '-'
				}, {
					prop: 'scrollLeft',
					params: 'distance',
					ret: '-'
				}]
			}
		},
		methods: {
			onScroll() {
				this.scrollbar = this.$refs['scrollbar'].getValues();
			}
		},
		mounted() {
			this.scrollbar = this.$refs['scrollbar'].getValues();
		}
	}
</script>