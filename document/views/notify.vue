<template>
    <am-article>
        <am-article-header title="通知"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="notify">notify</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;notify&quot;&gt;notify&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            notify() {
                this.$notify({
                    message: &#x27;这是一条提示信息&#x27;
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>提示类型</h2>

                <am-example>
                    <am-button @click="notify1" color="success">success</am-button>
                    <am-button @click="notify3" color="warning">warning</am-button>
                    <am-button @click="notify4" color="danger">error</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;notify1&quot; color=&quot;success&quot;&gt;success&lt;/am-button&gt;
    &lt;am-button @click=&quot;notify3&quot; color=&quot;warning&quot;&gt;warning&lt;/am-button&gt;
    &lt;am-button @click=&quot;notify4&quot; color=&quot;danger&quot;&gt;error&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            notify1() {
                this.$notify({
                    message: &#x27;这是一条成功提示信息&#x27;,
                    type: &#x27;success&#x27;
                });
            },
            notify3() {
                this.$notify({
                    message: &#x27;这是一条警告提示信息&#x27;,
                    type: &#x27;warning&#x27;
                });
            },
            notify4() {
                this.$notify({
                    message: &#x27;这是一条错误提示信息&#x27;,
                    type: &#x27;error&#x27;
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

             <am-doc-section>
                <h2>手动关闭</h2>

                <am-example>
                    <am-button @click="notify2">notify</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;notify1&quot;&gt;notify&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            notify2() {
                this.$notify({
                    message: &#x27;这是一条提示信息&#x27;,
                    type: &#x27;success&#x27;,
                    closeable: true
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-notify</am-doc-code></h2>
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
                    prop: 'customClass',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'type',
                    desc: '类型',
                    type: 'String',
                    values: 'success、warning、error',
                    default: 'NULL'
                }, {
                    prop: 'message',
                    desc: '提示信息',
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
                    prop: 'delay',
                    desc: '消失时间',
                    type: 'Number',
                    values: '-',
                    default: '3000'
                }, {
                    prop: 'align',
                    desc: '文字对齐方式',
                    type: 'String',
                    values: 'left、center',
                    default: 'left'
                }, {
                    prop: 'onClose',
                    desc: '信息关闭时回掉函数',
                    type: 'Function',
                    values: '-',
                    default: 'NULL'
                }]
            }
        },
        methods: {
            notify() {
                this.$notify({
                    message: '这是一条提示信息'
                });
            },
            notify1() {
                this.$notify({
                    message: '这是一条成功提示信息',
                    type: 'success'
                });
            },
            notify2() {
                this.$notify({
                    message: '这是一条提示信息',
                    type: 'success',
                    closeable: true
                });
            },
            notify3() {
                this.$notify({
                    message: '这是一条警告提示信息',
                    type: 'warning'
                });
            },
            notify4() {
                this.$notify({
                    message: '这是一条错误提示信息',
                    type: 'error'
                });
            }
        }
    }
</script>