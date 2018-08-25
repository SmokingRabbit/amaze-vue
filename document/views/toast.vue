<template>
    <am-article>
        <am-article-header title="Toast"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="showToast">显示toast</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showToast&quot;&gt;显示toast&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            showToast() {
                this.$toast.open(&#x27;这是一条toast信息&#x27;);
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>手动关闭</h2>

                <am-example>
                    <am-button @click="showToast1">显示toast</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showToast&quot;&gt;显示toast&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        methods: {
            showToast1() {
                this.$toast.open(&#x27;这是一条toast信息&#x27;, { delay: 0 });
                setTimeout(() =&gt; {
                    this.$toast.close()
                }, 2000);
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Options <am-doc-code>am-toast</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>方法 <am-doc-code>am-toast</am-doc-code></h2>
                <am-table :data="methods">
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
                    prop: 'customClass',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'message',
                    desc: 'toast信息',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'closeViaDimmer',
                    desc: '点击背景关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'transition',
                    desc: '过度效果',
                    type: 'String',
                    values: '-',
                    default: 'scale-up'
                }, {
                    prop: 'delay',
                    desc: '关闭延时',
                    type: 'Number',
                    values: '-',
                    default: '0'
                }, {
                    prop: 'iconColor',
                    desc: 'loading icon颜色',
                    type: 'String',
                    values: 'primary, secondary, success, warning, danger',
                    default: 'primary'
                }],
                methods: [{
                    prop: 'open',
                    trigger: '打开toast',
                    params: 'options'
                }, {
                    prop: 'close',
                    trigger: '关闭toast',
                    params: 'NULL'
                }]
            }
        },
        methods: {
            showToast() {
                this.$toast.open('这是一条toast信息');
            },
            showToast1() {
                this.$toast.open('这是一条toast信息', { delay: 0 });
                setTimeout(() => {
                    this.$toast.close()
                }, 2000);
            }
        }
    }
</script>
