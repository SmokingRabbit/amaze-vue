<template>
    <am-article>
        <am-article-header title="消息"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="message">message</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;message&quot;&gt;message&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            message() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    message: &#x27;这是一条信息，请注意！&#x27;
                })
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>提示类型</h2>

                <am-example>
                    <am-button @click="message1" color="success">success</am-button>
                    <am-button @click="message2" color="warning">warning</am-button>
                    <am-button @click="message3" color="danger">error</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;message1&quot; color=&quot;success&quot;&gt;success&lt;/am-button&gt;
    &lt;am-button @click=&quot;message2&quot; color=&quot;warning&quot;&gt;warning&lt;/am-button&gt;
    &lt;am-button @click=&quot;message3&quot; color=&quot;danger&quot;&gt;error&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            message1() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    type: &#x27;success&#x27;,
                    message: &#x27;这是一条成功信息，请注意！&#x27;
                })
            },
            message2() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    type: &#x27;warning&#x27;,
                    message: &#x27;这是一条警告信息，请注意！&#x27;
                })
            },
            message3() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    type: &#x27;error&#x27;,
                    message: &#x27;这是一条错误信息，请注意！&#x27;
                })
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>手动关闭</h2>

                <am-example>
                    <am-button @click="message4">message</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;message4&quot;&gt;message&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            message4() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    type: &#x27;error&#x27;,
                    message: &#x27;这是一条错误信息，请注意！&#x27;,
                    closeable: true
                })
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>位置</h2>

                <am-example>
                    <am-button @click="message5">left-top</am-button>
                    <am-button @click="message6">left-bottom</am-button>
                    <am-button @click="message7">right-top</am-button>
                    <am-button @click="message8">right-bottom</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;message5&quot;&gt;left-top&lt;/am-button&gt;
    &lt;am-button @click=&quot;message6&quot;&gt;left-bottom&lt;/am-button&gt;
    &lt;am-button @click=&quot;message7&quot;&gt;right-top&lt;/am-button&gt;
    &lt;am-button @click=&quot;message8&quot;&gt;right-bottom&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            message5() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    message: &#x27;这是一条信息，请注意！&#x27;,
                    placement: &#x27;left-top&#x27;
                })
            },
            message6() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    message: &#x27;这是一条信息，请注意！&#x27;,
                    placement: &#x27;left-bottom&#x27;
                })
            },
            message7() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    message: &#x27;这是一条信息，请注意！&#x27;,
                    placement: &#x27;right-top&#x27;
                })
            },
            message8() {
                this.$message({
                    title: &#x27;测试&#x27;,
                    message: &#x27;这是一条信息，请注意！&#x27;,
                    placement: &#x27;right-bottom&#x27;
                })
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-message</am-doc-code></h2>
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
                    prop: 'title',
                    desc: '标题',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'message',
                    desc: '信息',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'delay',
                    desc: '消失事件',
                    type: 'Number',
                    values: '-',
                    default: '3000'
                }, {
                    prop: 'closeable',
                    desc: '可关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'type',
                    desc: '消息类型',
                    type: 'String',
                    values: '-',
                    default: 'success、warning、error'
                }, {
                    prop: 'placement',
                    desc: '显示位置',
                    type: 'String',
                    values: 'left-top、left-bottom、right-top、right-bottom',
                    default: 'right-top'
                }, {
                    prop: 'onClose',
                    desc: '关闭时回掉函数',
                    type: 'Function',
                    values: '-',
                    default: 'NULL'
                }]
            }
        },
        methods: {
            message() {
                this.$message({
                    title: '测试',
                    message: '这是一条信息，请注意！'
                })
            },
            message1() {
                this.$message({
                    title: '测试',
                    type: 'success',
                    message: '这是一条成功信息，请注意！'
                })
            },
            message2() {
                this.$message({
                    title: '测试',
                    type: 'warning',
                    message: '这是一条警告信息，请注意！'
                })
            },
            message3() {
                this.$message({
                    title: '测试',
                    type: 'error',
                    message: '这是一条错误信息，请注意！'
                })
            },
            message4() {
                this.$message({
                    title: '测试',
                    type: 'error',
                    message: '这是一条错误信息，请注意！',
                    closeable: true
                })
            },
            message5() {
                this.$message({
                    title: '测试',
                    message: '这是一条信息，请注意！',
                    placement: 'left-top'
                })
            },
            message6() {
                this.$message({
                    title: '测试',
                    message: '这是一条信息，请注意！',
                    placement: 'left-bottom'
                })
            },
            message7() {
                this.$message({
                    title: '测试',
                    message: '这是一条信息，请注意！',
                    placement: 'right-top'
                })
            },
            message8() {
                this.$message({
                    title: '测试',
                    message: '这是一条信息，请注意！',
                    placement: 'right-bottom'
                })
            }
        }
    }
</script>