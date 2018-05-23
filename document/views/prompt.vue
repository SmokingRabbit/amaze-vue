<template>
    <am-article>
        <am-article-header title="Prompt"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="showPrompt">显示prompt</am-button>
                    <am-prompt :is-show.sync="promptVisbile" title="说点什么吧" @submit="submitHandle" @cancel="cancelHandle">
                    </am-prompt>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showPrompt&quot;&gt;显示prompt&lt;/am-button&gt;
    &lt;am-prompt :is-show.sync=&quot;promptVisbile&quot; title=&quot;说点什么吧&quot; @submit=&quot;submitHandle&quot; @cancel=&quot;cancelHandle&quot;&gt;
    &lt;/am-prompt&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                promptVisbile: false
            }
        },
        methods: {
            showPrompt() {
                this.promptVisbile = true;
            },
            submitHandle(msg) {
                this.$notify({
                    message: &#x27;您输入了&#x27; + msg
                });
            },
            cancelHandle() {
                this.$notify({
                    message: &#x27;您点击了取消&#x27;
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-prompt</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-prompt</am-doc-code></h2>
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
                    prop: {
                        render() {
                            return (<span>请参考 <router-link to={'/modal'}>am-modal</router-link></span>)
                        }
                    },
                    desc: '',
                    type: '',
                    values: '',
                    default: ''
                }, {
                    prop: 'title',
                    desc: 'confirm标题',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'cancel-btn-text',
                    desc: '取消按钮文字',
                    type: 'String',
                    values: '-',
                    default: '取消'
                }, {
                    prop: 'submit-btn-text',
                    desc: '确认按钮文字',
                    type: 'String',
                    values: '-',
                    default: '确定'
                }],
                events: [{
                    prop: {
                        render() {
                            return (<span>请参考 <router-link to={'/modal'}>am-modal</router-link></span>)
                        }
                    },
                    trigger: '',
                    params: ''
                }, {
                    prop: 'cancel',
                    trigger: '点击取消按钮时触发',
                    params: 'NULL'
                }, , {
                    prop: 'submit',
                    trigger: '点击确认按钮时触发',
                    params: 'NULL'
                }],
                promptVisbile: false
            }
        },
        methods: {
            showPrompt() {
                this.promptVisbile = true;
            },
            submitHandle(msg) {
                this.$notify({
                    message: '您输入了' + msg
                });
            },
            cancelHandle() {
                this.$notify({
                    message: '您点击了取消'
                });
            }
        }
    }
</script>