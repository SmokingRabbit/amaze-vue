<template>
	<am-article>
		<am-article-header title="代码"></am-article-header>
		<am-article-body>
			<hr>

			<am-doc-section>
                <blockquote>
                    代码高亮这一功能并不是绝大多数用户需要的功能，为了保证组件压缩后的大小，方便大多数用户，所以组件内干掉了<am-doc-code>highlight.js</am-doc-code>，但是组件内部已经做了兼容，您可以全局引入文件hljs文件即可进行正常高亮展示。<a href="https://highlightjs.org/download/" target="blank">引入highlight.js文件</a>
                </blockquote>
				<h2>基础用法</h2>
				<am-example>
<am-code syntax="jsx">class DragDownload extends Component {
    constructor(props) {
        super(props);

        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(e) {
        const { MIME, FileName, FileUrl } = this.props;

        // {MIME}:{FileName}:{FileUrl}
        const DownloadURL = MIME + &#x27;:&#x27; + FileName + &#x27;:&#x27; + FileUrl;
        e.dataTransfer.setData(&quot;DownloadURL&quot;,  DownloadURL);
    }

    render() {
        const { children } = this.props;

        return(
            &lt;div {...this.props} draggable={true} onDragStart={this.onDragStart}&gt;
                {children}
            &lt;/div&gt;
        );
    }
}</am-code>
				</am-example>
<am-code syntax="jsx">&lt;am-code syntax=&quot;jsx&quot;&gt;
	class DragDownload extends Component {
	    constructor(props) {
	        super(props);

	        this.onDragStart = this.onDragStart.bind(this);
	    }

	    onDragStart(e) {
	        const { MIME, FileName, FileUrl } = this.props;

	        // {MIME}:{FileName}:{FileUrl}
	        const DownloadURL = MIME + &#x27;:&#x27; + FileName + &#x27;:&#x27; + FileUrl;
	        e.dataTransfer.setData(&quot;DownloadURL&quot;,  DownloadURL);
	    }

	    render() {
	        const { children } = this.props;

	        return(
	            &lt;div {...this.props} draggable={true} onDragStart={this.onDragStart}&gt;
	                {children}
	            &lt;/div&gt;
	        );
	    }
	}
&lt;/am-code&gt;</am-code>
			</am-doc-section>


			<am-doc-section>
				<h2>Props <am-doc-code>am-code</am-doc-code></h2>
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
					prop: 'scrollable',
					desc: 'Amaze UI原生滚动支持',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'syntax',
					desc: '代码语言',
					type: 'String',
					values: '-',
					default: 'javascript'
				}]
			}
		}
	}
</script>