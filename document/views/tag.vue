<template>
    <am-article>
        <am-article-header title="标签"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-tag>标签</am-tag>
                    <am-tag color="primary">标签</am-tag>
                    <am-tag color="secondary">标签</am-tag>
                    <am-tag color="success">标签</am-tag>
                    <am-tag color="warning">标签</am-tag>
                    <am-tag color="danger">标签</am-tag>
                </am-example>
<am-code syntax="xml">&lt;am-tag&gt;标签&lt;/am-tag&gt;
&lt;am-tag color=&quot;primary&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag color=&quot;secondary&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag color=&quot;success&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag color=&quot;warning&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag color=&quot;danger&quot;&gt;标签&lt;/am-tag&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>可删除</h2>

                <am-example>
                    <am-tag closeable>标签</am-tag>
                    <am-tag closeable color="primary">标签</am-tag>
                    <am-tag closeable color="secondary">标签</am-tag>
                    <am-tag closeable color="success">标签</am-tag>
                    <am-tag closeable color="warning">标签</am-tag>
                    <am-tag closeable color="danger">标签</am-tag>
                </am-example>
<am-code syntax="xml">&lt;am-tag closeable&gt;标签&lt;/am-tag&gt;
&lt;am-tag closeable color=&quot;primary&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag closeable color=&quot;secondary&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag closeable color=&quot;success&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag closeable color=&quot;warning&quot;&gt;标签&lt;/am-tag&gt;
&lt;am-tag closeable color=&quot;danger&quot;&gt;标签&lt;/am-tag&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>编辑便签</h2>

                <am-example>
                    <am-tag
                        v-for="tag,index in tags"
                        closeable
                        @tag-remove="removeTag(index)"
                        :color="tag.color"
                        :key="index"
                    >
                        {{ tag.value }}
                    </am-tag>
                </am-example>
<am-code syntax="xml" v-pre>&lt;template&gt;
    &lt;am-tag
        v-for=&quot;tag,index in tags&quot;
        closeable
        @tag-remove=&quot;removeTag(index)&quot;
        :color=&quot;tag.color&quot;
        :key=&quot;index&quot;
    &gt;
        {{ tag.value }}
    &lt;/am-tag&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tags: [{
                    value: &#x27;苹果&#x27;
                }, {
                    value: &#x27;香蕉&#x27;,
                    color: &#x27;primary&#x27;
                }, {
                    value: &#x27;葡萄&#x27;,
                    color: &#x27;secondary&#x27;
                }, {
                    value: &#x27;鸭梨&#x27;,
                    color: &#x27;danger&#x27;
                }, {
                    value: &#x27;榴莲&#x27;,
                    color: &#x27;warning&#x27;
                }, {
                    value: &#x27;山楂&#x27;,
                    color: &#x27;success&#x27;
                }]
            }
        },
        methods: {
            removeTag(index) {
                this.tags.splice(index, 1);
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-tag</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-tag</am-doc-code></h2>
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
                    prop: 'transition',
                    desc: '过渡效果',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'closeable',
                    desc: '可关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'color',
                    desc: '标签颜色',
                    type: 'String',
                    values: 'primary、secondary、success、warning、danger',
                    default: 'NULL'
                }, {
                    prop: 'onClick',
                    desc: '点击事件',
                    type: 'Function',
                    values: '-',
                    default: 'NULL'
                }],
                events: [{
                    prop: 'tag-remove',
                    trigger: '标签被删除',
                    params: 'NULL'
                }],
                tags: [{
                    value: '苹果'
                }, {
                    value: '香蕉',
                    color: 'primary'
                }, {
                    value: '葡萄',
                    color: 'secondary'
                }, {
                    value: '鸭梨',
                    color: 'danger'
                }, {
                    value: '榴莲',
                    color: 'warning'
                }, {
                    value: '山楂',
                    color: 'success'
                }]
            }
        },
        methods: {
            removeTag(index) {
                this.tags.splice(index, 1);
            }
        }
    }
</script>
