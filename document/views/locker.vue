<template>
    <am-article>
        <am-article-header title="抽屉"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="lockerHandle">显示locker</am-button>
                    <am-locker :is-show.sync="lockerVisible">
                        <p>
                            我不愿让你一个人 <br/>
                            承受这世界的残忍 <br/>
                            我不愿眼泪陪你到 永恒 <br/>
                        </p>
                    </am-locker>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;lockerHandle&quot;&gt;显示locker&lt;/am-button&gt;
    &lt;am-locker :is-show.sync=&quot;lockerVisible&quot;&gt;
        &lt;p&gt;
            我不愿让你一个人 &lt;br/&gt;
            承受这世界的残忍 &lt;br/&gt;
            我不愿眼泪陪你到 永恒 &lt;br/&gt;
        &lt;/p&gt;
    &lt;/am-locker&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                lockerVisible: false
            }
        },
        methods: {
            lockerHandle() {
                this.lockerVisible = true;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-locker</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-locker</am-doc-code></h2>
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
                    prop: 'is-show',
                    desc: '显示locker',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'placement',
                    desc: 'locker 位置',
                    type: 'String',
                    values: 'left、right',
                    default: 'left'
                }],
                events: [{
                    prop: 'visible-change',
                    trigger: 'modal显示状态发生变化',
                    params: 'is-show'
                }],
                lockerVisible: false
            }
        },
        methods: {
            lockerHandle() {
                this.lockerVisible = true;
            }
        }
    }
</script>