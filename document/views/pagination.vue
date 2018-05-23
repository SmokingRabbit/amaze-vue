<template>
    <am-article>
        <am-article-header title="分页"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-pagination :total="100" v-model="pageNum1"></am-pagination>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-pagination :total=&quot;100&quot; v-model=&quot;pageNum1&quot;&gt;&lt;/am-pagination&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                pageNum1: 1
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>居中对齐</h2>

                <am-example>
                    <am-pagination :total="100" align="center" v-model="pageNum2"></am-pagination>
                </am-example>
<am-code syntax="xml">&lt;am-pagination :total=&quot;100&quot; align=&quot;center&quot; v-model=&quot;pageNum2&quot;&gt;&lt;/am-pagination&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>右侧对其</h2>

                <am-example>
                    <am-pagination :total="100" align="right" v-model="pageNum2"></am-pagination>
                </am-example>
<am-code syntax="xml">&lt;am-pagination :total=&quot;100&quot; align=&quot;right&quot; v-model=&quot;pageNum2&quot;&gt;&lt;/am-pagination&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-pagination</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>


            <am-doc-section>
                <h2>事件 <am-doc-code>am-pagination</am-doc-code></h2>
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
                pageNum1: 1,
                pageNum2: 1,
                props: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'disabled',
                    desc: '禁用',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'align',
                    desc: '对齐方式',
                    type: 'String',
                    values: '-',
                    default: 'center、right'
                }, {
                    prop: 'total',
                    desc: '总条目数量',
                    type: 'Number',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'page-size',
                    desc: '每页显示的数量',
                    type: 'Number',
                    values: '-',
                    default: '10'
                }, {
                    prop: 'show-page-btn-count',
                    desc: '数字按钮显示的个数',
                    type: 'Number',
                    values: '-',
                    default: '7'
                }, {
                    prop: 'first-btn-text',
                    desc: '首页按钮文字',
                    type: 'String',
                    values: '-',
                    default: '首页'
                }, {
                    prop: 'last-btn-text',
                    desc: '尾页按钮文字',
                    type: 'String',
                    values: '-',
                    default: '尾页'
                }, {
                    prop: 'pre-btn-text',
                    desc: '上一页按钮文字',
                    type: 'String',
                    values: '-',
                    default: '上一页'
                }, {
                    prop: 'next-btn-text',
                    desc: '下一页按钮文字',
                    type: 'String',
                    values: '-',
                    default: '下一页'
                }],
                events: [{
                    prop: 'change',
                    trigger: '页码发生变化',
                    params: 'pageNumber'
                }]
            }
        }
    }
</script>