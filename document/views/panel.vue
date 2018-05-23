<template>
	<am-article>
		<am-article-header title="面板"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>am-panel</am-doc-code> 面板容器</li>
					<li><am-doc-code>am-panel-header</am-doc-code> 面板头部</li>
					<li><am-doc-code>am-panel-body</am-doc-code> 面板正文</li>
					<li><am-doc-code>am-panel-footer</am-doc-code> 面板底部</li>
					<li><am-doc-code>am-panel-group</am-doc-code> 面板组</li>
				</ul>
				<am-example>
					<am-panel>
						<am-panel-header title="咏鹅" :title-level=4></am-panel-header>
						<am-panel-body>
							<p>鹅鹅鹅，</p>
							<p>曲项向天歌。</p>
							<p>白毛浮绿水，</p>
							<p>红掌拨清波。</p>
						</am-panel-body>
						<am-panel-footer>
							作者：骆宾王
						</am-panel-footer>
					</am-panel>
				</am-example>
<am-code syntax="xml">&lt;am-panel&gt;
	&lt;am-panel-header title=&quot;咏鹅&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
		&lt;p&gt;曲项向天歌。&lt;/p&gt;
		&lt;p&gt;白毛浮绿水，&lt;/p&gt;
		&lt;p&gt;红掌拨清波。&lt;/p&gt;
	&lt;/am-panel-body&gt;
	&lt;am-panel-footer&gt;
		作者：骆宾王
	&lt;/am-panel-footer&gt;
&lt;/am-panel&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>透明背景</h2>
				<p><am-doc-code>transparent</am-doc-code>仅在<am-doc-code>color</am-doc-code>=<am-doc-code>default</am-doc-code>的情况下生效</p>
				<am-example>
					<am-panel collapse transparent>
						<am-panel-header title="咏鹅" ></am-panel-header>
						<am-panel-body>
							<p>鹅鹅鹅，</p>
							<p>曲项向天歌。</p>
							<p>白毛浮绿水，</p>
							<p>红掌拨清波。</p>
						</am-panel-body>
					</am-panel>
				</am-example>
<am-code syntax="xml">&lt;am-panel collapse transparent&gt;
	&lt;am-panel-header title=&quot;咏鹅&quot; &gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
		&lt;p&gt;曲项向天歌。&lt;/p&gt;
		&lt;p&gt;白毛浮绿水，&lt;/p&gt;
		&lt;p&gt;红掌拨清波。&lt;/p&gt;
	&lt;/am-panel-body&gt;
&lt;/am-panel&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>list样式</h2>
				<p><am-doc-code>transparent</am-doc-code>仅在<am-doc-code>color</am-doc-code>=<am-doc-code>default</am-doc-code>的情况下生效</p>
				<am-example>
					<am-panel collapse transparent list>
						<am-panel-header title="咏鹅" ></am-panel-header>
						<am-panel-body>
							<p>鹅鹅鹅，</p>
							<p>曲项向天歌。</p>
							<p>白毛浮绿水，</p>
							<p>红掌拨清波。</p>
						</am-panel-body>
					</am-panel>
				</am-example>
<am-code syntax="xml">&lt;am-panel collapse transparent list&gt;
	&lt;am-panel-header title=&quot;咏鹅&quot; &gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
		&lt;p&gt;曲项向天歌。&lt;/p&gt;
		&lt;p&gt;白毛浮绿水，&lt;/p&gt;
		&lt;p&gt;红掌拨清波。&lt;/p&gt;
	&lt;/am-panel-body&gt;
&lt;/am-panel&gt;</am-code>
			</am-doc-section>


			<am-doc-section>
				<h2>折叠</h2>
				<am-example>
					<am-panel :collapse="true" color="warning">
						<am-panel-header title="咏鹅" :title-level=4></am-panel-header>
						<am-panel-body>
							<p>鹅鹅鹅，</p>
							<p>曲项向天歌。</p>
							<p>白毛浮绿水，</p>
							<p>红掌拨清波。</p>
						</am-panel-body>
					</am-panel>
				</am-example>
<am-code syntax="xml">&lt;am-panel :collapse=&quot;true&quot; color=&quot;warning&quot;&gt;
&lt;am-panel-header title=&quot;咏鹅&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
&lt;am-panel-body&gt;
	&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
	&lt;p&gt;曲项向天歌。&lt;/p&gt;
	&lt;p&gt;白毛浮绿水，&lt;/p&gt;
	&lt;p&gt;红掌拨清波。&lt;/p&gt;
&lt;/am-panel-body&gt;
&lt;/am-panel&gt;</am-code>
			</am-doc-section>


			<am-doc-section>
				<h2>结合 <am-doc-code>am-panel-group</am-doc-code> 使用 <small>可折叠</small></h2>
				<am-example>
					<am-panel-group :collapse="true">
						<am-panel color="primary">
							<am-panel-header title="咏鹅" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>鹅鹅鹅，</p>
								<p>曲项向天歌。</p>
								<p>白毛浮绿水，</p>
								<p>红掌拨清波。</p>
							</am-panel-body>
						</am-panel>
						<am-panel color="secondary">
							<am-panel-header title="古风二首 / 悯农二首 (一)" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>春种一粒粟，</p>
								<p>秋收万颗子。</p>
								<p>四海无闲田，</p>
								<p>农夫犹饿死。</p>
							</am-panel-body>
						</am-panel>
						<am-panel color="success">
							<am-panel-header title="古风二首 / 悯农二首 (二)" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>锄禾日当午，</p>
								<p>汗滴禾下土。</p>
								<p>谁知盘中餐，</p>
								<p>粒粒皆辛苦。</p>
							</am-panel-body>
						</am-panel>
					</am-panel-group>
				</am-example>
<am-code syntax="xml">&lt;am-panel-group :collapse=&quot;true&quot;&gt;
	&lt;am-panel color=&quot;primary&quot;&gt;
		&lt;am-panel-header title=&quot;咏鹅&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
		&lt;am-panel-body&gt;
			&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
			&lt;p&gt;曲项向天歌。&lt;/p&gt;
			&lt;p&gt;白毛浮绿水，&lt;/p&gt;
			&lt;p&gt;红掌拨清波。&lt;/p&gt;
		&lt;/am-panel-body&gt;
	&lt;/am-panel&gt;
	&lt;am-panel color=&quot;secondary&quot;&gt;
		&lt;am-panel-header title=&quot;古风二首 / 悯农二首 (一)&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
		&lt;am-panel-body&gt;
			&lt;p&gt;春种一粒粟，&lt;/p&gt;
			&lt;p&gt;秋收万颗子。&lt;/p&gt;
			&lt;p&gt;四海无闲田，&lt;/p&gt;
			&lt;p&gt;农夫犹饿死。&lt;/p&gt;
		&lt;/am-panel-body&gt;
	&lt;/am-panel&gt;
	&lt;am-panel color=&quot;success&quot;&gt;
		&lt;am-panel-header title=&quot;古风二首 / 悯农二首 (二)&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
		&lt;am-panel-body&gt;
			&lt;p&gt;锄禾日当午，&lt;/p&gt;
			&lt;p&gt;汗滴禾下土。&lt;/p&gt;
			&lt;p&gt;谁知盘中餐，&lt;/p&gt;
			&lt;p&gt;粒粒皆辛苦。&lt;/p&gt;
		&lt;/am-panel-body&gt;
	&lt;/am-panel&gt;
&lt;/am-panel-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>结合 <am-doc-code>am-panel-group</am-doc-code> 使用 <small>可同时折叠、展开</small></h2>
				<am-example>
					<am-panel-group :collapse="true" :accordion="true">
						<am-panel color="primary">
							<am-panel-header title="咏鹅" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>鹅鹅鹅，</p>
								<p>曲项向天歌。</p>
								<p>白毛浮绿水，</p>
								<p>红掌拨清波。</p>
							</am-panel-body>
						</am-panel>
						<am-panel color="secondary">
							<am-panel-header title="古风二首 / 悯农二首 (一)" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>春种一粒粟，</p>
								<p>秋收万颗子。</p>
								<p>四海无闲田，</p>
								<p>农夫犹饿死。</p>
							</am-panel-body>
						</am-panel>
						<am-panel color="success">
							<am-panel-header title="古风二首 / 悯农二首 (二)" :title-level=4></am-panel-header>
							<am-panel-body>
								<p>锄禾日当午，</p>
								<p>汗滴禾下土。</p>
								<p>谁知盘中餐，</p>
								<p>粒粒皆辛苦。</p>
							</am-panel-body>
						</am-panel>
					</am-panel-group>
				</am-example>
<am-code syntax="xml">&lt;am-panel-group :collapse=&quot;true&quot; :accordion=&quot;true&quot;&gt;
&lt;am-panel color=&quot;primary&quot;&gt;
	&lt;am-panel-header title=&quot;咏鹅&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;鹅鹅鹅，&lt;/p&gt;
		&lt;p&gt;曲项向天歌。&lt;/p&gt;
		&lt;p&gt;白毛浮绿水，&lt;/p&gt;
		&lt;p&gt;红掌拨清波。&lt;/p&gt;
	&lt;/am-panel-body&gt;
&lt;/am-panel&gt;
&lt;am-panel color=&quot;secondary&quot;&gt;
	&lt;am-panel-header title=&quot;古风二首 / 悯农二首 (一)&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;春种一粒粟，&lt;/p&gt;
		&lt;p&gt;秋收万颗子。&lt;/p&gt;
		&lt;p&gt;四海无闲田，&lt;/p&gt;
		&lt;p&gt;农夫犹饿死。&lt;/p&gt;
	&lt;/am-panel-body&gt;
&lt;/am-panel&gt;
&lt;am-panel color=&quot;success&quot;&gt;
	&lt;am-panel-header title=&quot;古风二首 / 悯农二首 (二)&quot; :title-level=4&gt;&lt;/am-panel-header&gt;
	&lt;am-panel-body&gt;
		&lt;p&gt;锄禾日当午，&lt;/p&gt;
		&lt;p&gt;汗滴禾下土。&lt;/p&gt;
		&lt;p&gt;谁知盘中餐，&lt;/p&gt;
		&lt;p&gt;粒粒皆辛苦。&lt;/p&gt;
	&lt;/am-panel-body&gt;
&lt;/am-panel&gt;
&lt;/am-panel-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-panel</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-panel-header</am-doc-code></h2>
				<am-table :data="headerProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-panel-body</am-doc-code></h2>
				<am-table :data="bodyProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-panel-footer</am-doc-code></h2>
				<am-table :data="footerProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-panel-group</am-doc-code></h2>
				<am-table :data="groupProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>事件 <am-doc-code>am-panel</am-doc-code></h2>
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
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'color',
					desc: '面板颜色',
					type: 'String',
					values: 'default, primary, secondary, success, warning, danger',
					default: 'default'
				}, {
					prop: 'collapse',
					desc: '可折叠',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'transparent',
					desc: 'header和footer在color=default的情况下背景透明',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'list',
					desc: '使用list样式',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				headerProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'title',
					desc: '面板标题',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'title-level',
					desc: '面板标题大小',
					type: 'String',
					values: '1、2、3、4、5、6',
					default: '4'
				}, {
					prop: 'transparent',
					desc: '在color=default的情况下背景透明',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				bodyProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}],
				footerProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'transparent',
					desc: '在color=default的情况下背景透明',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				groupProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'collapse',
					desc: '可折叠',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'accordion',
					desc: '可同时折叠',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				events: [{
					prop: 'collapse-change',
					trigger: '折叠状态发生变换',
					params: 'isOpen(true or false)'
				}]
			}
		}
	}
</script>