<template>
    <am-article>
        <am-article-header title="Actions"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-actions</am-doc-code> actions容器</li>
                    <li><am-doc-code>am-actions-group</am-doc-code> actions 操作组容器</li>
                </ul>

                <am-example>
                    <am-button @click="showActions">显示actions</am-button>
                    <am-actions :is-show.sync="actionsVisible">
                        <am-actions-group>
                            <am-list>
                                <am-list-item custom-class="am-modal-actions-header">这是一个分享示例</am-list-item>
                                <am-list-item>
                                    <a href="#"><am-icon type="wechat"></am-icon> 分享到微信</a>
                                </am-list-item>
                                <am-list-item>
                                    <a href="#"><am-icon type="qq" color="success"></am-icon> 分享到QQ</a>
                                </am-list-item>
                                <am-list-item>
                                    <a href="#"><am-icon type="twitter" color="danger"></am-icon> 分享到吞特</a>
                                </am-list-item>
                            </am-list>
                        </am-actions-group>
                        <am-actions-group>
                            <am-button color="secondary" :block="true">取消</am-button>
                        </am-actions-group>
                    </am-actions>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showActions&quot;&gt;显示actions&lt;/am-button&gt;
    &lt;am-actions :is-show.sync=&quot;actionsVisible&quot;&gt;
        &lt;am-actions-group&gt;
            &lt;am-list&gt;
                &lt;am-list-item custom-class=&quot;am-modal-actions-header&quot;&gt;这是一个分享示例&lt;/am-list-item&gt;
                &lt;am-list-item&gt;
                    &lt;a href=&quot;#&quot;&gt;&lt;am-icon type=&quot;wechat&quot;&gt;&lt;/am-icon&gt; 分享到微信&lt;/a&gt;
                &lt;/am-list-item&gt;
                &lt;am-list-item&gt;
                    &lt;a href=&quot;#&quot;&gt;&lt;am-icon type=&quot;qq&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt; 分享到QQ&lt;/a&gt;
                &lt;/am-list-item&gt;
                &lt;am-list-item&gt;
                    &lt;a href=&quot;#&quot;&gt;&lt;am-icon type=&quot;twitter&quot; color=&quot;danger&quot;&gt;&lt;/am-icon&gt; 分享到吞特&lt;/a&gt;
                &lt;/am-list-item&gt;
            &lt;/am-list&gt;
        &lt;/am-actions-group&gt;
        &lt;am-actions-group&gt;
            &lt;am-button color=&quot;secondary&quot; :block=&quot;true&quot;&gt;取消&lt;/am-button&gt;
        &lt;/am-actions-group&gt;
    &lt;/am-actions&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                actionsVisible: false
            }
        },
        methods: {
            showActions() {
                this.actionsVisible = true;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-actions</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-actions-group</am-doc-code></h2>
                <am-table :data="groupProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-actions</am-doc-code></h2>
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
                    desc: '显示actions',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'close-via-dimmer',
                    desc: '点击背景关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'transition',
                    desc: '过渡效果',
                    type: 'String',
                    values: '-',
                    default: 'slide-down'
                }],
                groupProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }],
                events: [{
                    prop: 'visible-change',
                    trigger: 'actions显示状态发生变化',
                    params: 'is-show'
                }],
                actionsVisible: false
            }
        },
        methods: {
            showActions() {
                this.actionsVisible = true;
            }
        }
    }
</script>