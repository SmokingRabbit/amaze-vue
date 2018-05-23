<template>
    <am-article>
        <am-article-header title="Confirm"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="showConfirm">显示confirm</am-button>
                    <am-confirm :is-show.sync="confirmVisible" title="确认框" @cancel="cancelHandle" @confirm="confirmHandle">
                        <h1>看看是不是需要你确认？</h1>
                    </am-confirm>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showConfirm&quot;&gt;显示confirm&lt;/am-button&gt;
    &lt;am-confirm :is-show.sync=&quot;confirmVisible&quot; title=&quot;确认框&quot; @cancel=&quot;cancelHandle&quot; @confirm=&quot;confirmHandle&quot;&gt;
        &lt;h1&gt;看看是不是需要你确认？&lt;/h1&gt;
    &lt;/am-confirm&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                 confirmVisible: false
            }
        },
        methods: {
            showConfirm() {
                this.confirmVisible = true;
            },
            cancelHandle() {
                this.$notify({
                    message: &#x27;您点击了取消&#x27;
                });
            },
            confirmHandle() {
                this.$notify({
                    message: &#x27;您点击了确认&#x27;
                });
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-confirm</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-confirm</am-doc-code></h2>
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
                    prop: 'confirm-btn-text',
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
                    prop: 'confirm',
                    trigger: '点击确认按钮时触发',
                    params: 'NULL'
                }],
                confirmVisible: false
            }
        },
        methods: {
            showConfirm() {
                this.confirmVisible = true;
            },
            cancelHandle() {
                this.$notify({
                    message: '您点击了取消'
                });
            },
            confirmHandle() {
                this.$notify({
                    message: '您点击了确认'
                });
            }
        }
    }
</script>