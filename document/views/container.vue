<template>
	<am-article>
		<am-article-header title="布局容器"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>
				<am-example>
					<am-container custom-class="container-example">响应容器</am-container>
				</am-example>
<am-code syntax="xml">&lt;am-container&gt;&lt;/am-container&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>常见页面布局</h2>
				<p>示例代码中的css代码，<a href="https://github.com/sunshineJi/amaze-vue">amaze-vue</a>并没有提供，因为amazeui没有使用flex布局，各位同学如果有需要请复制代码到项目中。</p>
				<am-example>
					<am-container custom-class="am-layout">
						<header class="am-header">Header</header>
						<main class="am-main">Main</main>
						<footer class="am-footer">Footer</footer>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-container custom-class=&quot;am-layout&quot;&gt;
        &lt;header class=&quot;am-header&quot;&gt;Header&lt;/header&gt;
        &lt;main class=&quot;am-main&quot;&gt;Main&lt;/main&gt;
    &lt;/am-container&gt;
&lt;/template&gt;
&lt;style&gt;
    .am-layout {
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 0;
        margin: auto;
    }
    .am-header {
        text-align: center;
        line-height: 65px;
        background-color: #444;
    }
    .am-main {
        flex: 1;
        background-color: #666;
        line-height: 320px;
        text-align: center;
    }
    .am-footer {
        background-color: #555;
        line-height: 40px;
        text-align: center;
    }
&lt;/style&gt;</am-code>

				<am-example>
					<am-container custom-class="am-layout">
						<header class="am-header">Header</header>
						<am-container custom-class="am-layout horizontal">
							<aside class="am-aside">Aside</aside>
							<am-container custom-class="am-layout">
								<main class="am-main">Main</main>
								<footer class="am-footer">Footer</footer>
							</am-container>
						</am-container>
					</am-container>
				</am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-container custom-class=&quot;am-layout&quot;&gt;
        &lt;header class=&quot;am-header&quot;&gt;Header&lt;/header&gt;
        &lt;am-container custom-class=&quot;am-layout horizontal&quot;&gt;
            &lt;aside class=&quot;am-aside&quot;&gt;Aside&lt;/aside&gt;
            &lt;am-container custom-class=&quot;am-layout&quot;&gt;
                &lt;main class=&quot;am-main&quot;&gt;Main&lt;/main&gt;
                &lt;footer class=&quot;am-footer&quot;&gt;Footer&lt;/footer&gt;
            &lt;/am-container&gt;
        &lt;/am-container&gt;
    &lt;/am-container&gt;
&lt;/template&gt;
&lt;style&gt;
    .am-layout {
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 0;
        margin: auto;
    }
    .horizontal {
        flex-direction: row;
    }
    .am-header {
        text-align: center;
        line-height: 65px;
        background-color: #444;
    }
    .am-aside {
        width: 200px;
        background-color: #777;
        line-height: 360px;
        text-align: center;
    }
    .am-main {
        flex: 1;
        background-color: #666;
        line-height: 320px;
        text-align: center;
    }
    .am-footer {
        background-color: #555;
        line-height: 40px;
        text-align: center;
    }
&lt;/style&gt;</am-code>

			</am-doc-section>


			<am-doc-section>
				<h2>Props <am-doc-code>am-container</am-doc-code></h2>
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
				}]
			}
		}
	}
</script>

<style lang="less" scoped="true">
	.container-example {
		background-color: #e5e9f2;
		height: 120px;
		line-height: 120px;
		text-align: center;
		color: #666;
	}
	.am-layout {
		display: flex;
		flex-direction: column;
		color: #fff;
		padding: 0;
		margin: auto;
	}
	.horizontal {
		flex-direction: row;
	}
	.am-header {
		text-align: center;
		line-height: 65px;
		background-color: #444;
	}
	.am-aside {
		width: 200px;
		background-color: #777;
		line-height: 360px;
		text-align: center;
	}
	.am-main {
		flex: 1;
		background-color: #666;
		line-height: 320px;
		text-align: center;
	}
	.am-footer {
		background-color: #555;
		line-height: 40px;
		text-align: center;
	}
</style>