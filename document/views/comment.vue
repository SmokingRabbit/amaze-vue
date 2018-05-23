<template>
	<am-article>
		<am-article-header title="评论列表"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>评论列表</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-comment</am-doc-code> 评论容器 </li>
					<li><am-doc-code>am-comment-avatar</am-doc-code> 用户头像</li>
					<li><am-doc-code>am-comment-header</am-doc-code> 评论顶部通栏</li>
					<li><am-doc-code>am-comment-header-meta</am-doc-code> 评论元信息</li>
					<li><am-doc-code>am-comment-author</am-doc-code> 评论者名称</li>
					<li><am-doc-code>am-comment-header-actions</am-doc-code> 通栏操作区域</li>
					<li><am-doc-code>am-comment-body</am-doc-code> 评论内容容器</li>
					<li><am-doc-code>am-comment-list</am-doc-code> 评论列表容器</li>
				</ul>

				<am-example>
					<am-comment>
		                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
		                <am-comment-content>
		                    <am-comment-header>
		                        <am-comment-header-meta>
		                            <am-comment-author>某人</am-comment-author>
		                        </am-comment-header-meta>
		                        <am-comment-header-actions>
		                            <a><am-icon type="pencil"></am-icon></a>
		                        </am-comment-header-actions>
		                    </am-comment-header>
		                    <am-comment-body>
		                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
		                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
		                    </am-comment-body>
		                </am-comment-content>
		            </am-comment>
				</am-example>
<am-code syntax="xml">&lt;am-comment&gt;
    &lt;am-comment-avatar src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96&quot;&gt;&lt;/am-comment-avatar&gt;
    &lt;am-comment-content&gt;
        &lt;am-comment-header&gt;
            &lt;am-comment-header-meta&gt;
                &lt;am-comment-author&gt;某人&lt;/am-comment-author&gt;
            &lt;/am-comment-header-meta&gt;
            &lt;am-comment-header-actions&gt;
                &lt;a&gt;&lt;am-icon type=&quot;pencil&quot;&gt;&lt;/am-icon&gt;&lt;/a&gt;
            &lt;/am-comment-header-actions&gt;
        &lt;/am-comment-header&gt;
        &lt;am-comment-body&gt;
            &lt;p&gt;那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？&lt;/p&gt;
            &lt;blockquote&gt;妈：我打算在下个月和樱子结婚。&lt;/blockquote&gt;
        &lt;/am-comment-body&gt;
    &lt;/am-comment-content&gt;
&lt;/am-comment&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>结合 <am-doc-code>am-comment-list</am-doc-code> 使用</h2>
				<am-example>
					<am-comment-list>
			            <am-comment>
			                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
			                <am-comment-content>
			                    <am-comment-header>
			                        <am-comment-header-meta>
			                            <am-comment-author>某人</am-comment-author>
			                        </am-comment-header-meta>
			                        <am-comment-header-actions>
			                            <a><am-icon type="pencil"></am-icon></a>
			                        </am-comment-header-actions>
			                    </am-comment-header>
			                    <am-comment-body>
			                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
			                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
			                    </am-comment-body>
			                </am-comment-content>
			            </am-comment>
			            <am-comment color="success" :flip="true">
			                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
			                <am-comment-content>
			                    <am-comment-header>
			                        <am-comment-header-meta>
			                            <am-comment-author>某人</am-comment-author>
			                        </am-comment-header-meta>
			                        <am-comment-header-actions>
			                            <a><am-icon type="pencil"></am-icon></a>
			                        </am-comment-header-actions>
			                    </am-comment-header>
			                    <am-comment-body>
			                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
			                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
			                    </am-comment-body>
			                </am-comment-content>
			            </am-comment>
			        </am-comment-list>
				</am-example>
<am-code syntax="xml">&lt;am-comment-list&gt;
    &lt;am-comment&gt;
        &lt;am-comment-avatar src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96&quot;&gt;&lt;/am-comment-avatar&gt;
        &lt;am-comment-content&gt;
            &lt;am-comment-header&gt;
                &lt;am-comment-header-meta&gt;
                    &lt;am-comment-author&gt;某人&lt;/am-comment-author&gt;
                &lt;/am-comment-header-meta&gt;
                &lt;am-comment-header-actions&gt;
                    &lt;a&gt;&lt;am-icon type=&quot;pencil&quot;&gt;&lt;/am-icon&gt;&lt;/a&gt;
                &lt;/am-comment-header-actions&gt;
            &lt;/am-comment-header&gt;
            &lt;am-comment-body&gt;
                &lt;p&gt;那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？&lt;/p&gt;
                &lt;blockquote&gt;妈：我打算在下个月和樱子结婚。&lt;/blockquote&gt;
            &lt;/am-comment-body&gt;
        &lt;/am-comment-content&gt;
    &lt;/am-comment&gt;
    &lt;am-comment color=&quot;success&quot; :flip=&quot;true&quot;&gt;
        &lt;am-comment-avatar src=&quot;http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96&quot;&gt;&lt;/am-comment-avatar&gt;
        &lt;am-comment-content&gt;
            &lt;am-comment-header&gt;
                &lt;am-comment-header-meta&gt;
                    &lt;am-comment-author&gt;某人&lt;/am-comment-author&gt;
                &lt;/am-comment-header-meta&gt;
                &lt;am-comment-header-actions&gt;
                    &lt;a&gt;&lt;am-icon type=&quot;pencil&quot;&gt;&lt;/am-icon&gt;&lt;/a&gt;
                &lt;/am-comment-header-actions&gt;
            &lt;/am-comment-header&gt;
            &lt;am-comment-body&gt;
                &lt;p&gt;那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？&lt;/p&gt;
                &lt;blockquote&gt;妈：我打算在下个月和樱子结婚。&lt;/blockquote&gt;
            &lt;/am-comment-body&gt;
        &lt;/am-comment-content&gt;
    &lt;/am-comment&gt;
&lt;/am-comment-list&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-avatar</am-doc-code></h2>
				<am-table :data="avatarProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-header</am-doc-code></h2>
				<am-table :data="defaultPrps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-header-meta</am-doc-code></h2>
				<am-table :data="defaultPrps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-header-actions</am-doc-code></h2>
				<am-table :data="defaultPrps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-author</am-doc-code></h2>
				<am-table :data="defaultPrps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-body</am-doc-code></h2>
				<am-table :data="defaultPrps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-comment-list</am-doc-code></h2>
				<am-table :data="listProps">
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
					prop: 'color',
					desc: '评论面板颜色',
					type: 'String',
					values: 'primary, secondary, success, warning, danger',
					default: 'NULL'
				}, {
					prop: 'flip',
					desc: '右侧显示头像',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				avatarProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'src',
					desc: '头像url',
					type: 'String',
					values: '-',
					default: 'NULL'
				}],
				listProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'flip',
					desc: '评论body对齐',
					type: 'Boolean',
					values: '-',
					default: 'false'
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