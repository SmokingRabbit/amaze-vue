<template>
    <am-article>
        <am-article-header title="Alert"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>
                <am-example>
                    <am-button @click="showAlert">显示alert</am-button>
                    <am-alert :is-show.sync="alertVisible" title="提示" @submit="alertSubmitHandle">
                        <h6>请确认alert信息</h6>
                    </am-alert>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showAlert&quot;&gt;alert&lt;/am-button&gt;
    &lt;am-alert :is-show.sync=&quot;alertVisible&quot; title=&quot;提示&quot; @submit=&quot;alertSubmitHandle&quot;&gt;
        &lt;h6&gt;请确认alert信息&lt;/h6&gt;
    &lt;/am-alert&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                alertVisible: false
            }
        },
        methods: {
            showAlert() {
                this.alertVisible = true;
            },
            alertSubmitHandle() {
                this.$notify({
                    message: &#x27;你点击了确认&#x27;
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-change</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-change</am-doc-code></h2>
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
                    desc: 'alert标题',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'submit-btn-text',
                    desc: '确认按钮文字',
                    type: 'String',
                    values: '-',
                    default: '确认'
                }],
                events: [{
                    prop: {
                        render() {
                            return (<span>请参考 <router-link to={'/modal'}>am-modal</router-link></span>)
                        }
                    },
                    trigger: '',
                    params: ''
                }],
                alertVisible: false
            }
        },
        methods: {
            showAlert() {
                this.alertVisible = true;
            },
            alertSubmitHandle() {
                this.$notify({
                    message: '你点击了确认'
                });
            }
        }
    }
</script>