<template>
    <am-article>
        <am-article-header title="进度条"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-progress :progress="50"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>颜色</h2>

                <am-example>
                    <am-progress :progress="50"></am-progress>
                    <am-progress :progress="50" color="secondary"></am-progress>
                    <am-progress :progress="50" color="success"></am-progress>
                    <am-progress :progress="50" color="warning"></am-progress>
                    <am-progress :progress="50" color="danger"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot;&gt;&lt;/am-progress&gt;
&lt;am-progress :progress=&quot;50&quot; color=&quot;secondary&quot;&gt;&lt;/am-progress&gt;
&lt;am-progress :progress=&quot;50&quot; color=&quot;success&quot;&gt;&lt;/am-progress&gt;
&lt;am-progress :progress=&quot;50&quot; color=&quot;warning&quot;&gt;&lt;/am-progress&gt;
&lt;am-progress :progress=&quot;50&quot; color=&quot;danger&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>不显示文字</h2>

                <am-example>
                    <am-progress :progress="50" :showProgress="false"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>尺寸</h2>

                <am-example>
                    <am-progress :progress="50" :showProgress="false" size="xs"></am-progress>
                    <am-progress :progress="50" :showProgress="false" size="sm"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot; size=&quot;xs&quot;&gt;&lt;/am-progress&gt;
&lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot; size=&quot;sm&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>斑马线</h2>

                <am-example>
                    <am-progress :progress="50" :showProgress="false" :striped="true"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot; :striped=&quot;true&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>激活动画</h2>

                <am-example>
                    <am-progress :progress="50" :showProgress="false" :striped="true" :active="true"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot; :striped=&quot;true&quot; :active=&quot;true&quot;&gt;&lt;/am-progress&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>堆叠</h2>

                <am-example>
                    <am-progress :progress="50" :showProgress="false" :striped="true" :active="true" :pile="pile"></am-progress>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-progress :progress=&quot;50&quot; :showProgress=&quot;false&quot; :striped=&quot;true&quot; :active=&quot;true&quot; :pile=&quot;pile&quot;&gt;&lt;/am-progress&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                pile: [{
                    color: &#x27;success&#x27;,
                    progress: 20
                }, {
                    color: &#x27;danger&#x27;,
                    progress: 30
                }]
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-progress</am-doc-code></h2>
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
                    prop: 'progress',
                    desc: '进度',
                    type: 'Number',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'showProgress',
                    desc: '显示进度文字',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'color',
                    desc: '进度条颜色',
                    type: 'String',
                    values: 'secondary, success, warning, danger',
                    default: 'NULL'
                }, {
                    prop: 'size',
                    desc: '进度条尺寸',
                    type: 'String',
                    values: '-',
                    default: 'xs、sm'
                }, {
                    prop: 'active',
                    desc: 'Boolean',
                    type: 'String',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'striped',
                    desc: '斑马线',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'pile',
                    desc: '堆叠进度调',
                    type: 'Array',
                    values: '-',
                    default: 'NULL'
                }],
                pile: [{
                    color: 'success',
                    progress: 20
                }, {
                    color: 'danger',
                    progress: 30
                }]
            }
        }
    }
</script>