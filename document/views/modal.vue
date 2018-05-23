<template>
    <am-article>
        <am-article-header title="Modal"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-modal</am-doc-code> modal容器</li>
                    <li><am-doc-code>am-modal-header</am-doc-code> modal头部、标题</li>
                    <li><am-doc-code>am-modal-body</am-doc-code> modal正文</li>
                    <li><am-doc-code>am-modal-footer</am-doc-code> modal底部操作</li>
                </ul>

                <am-example>
                    <am-button @click="showModal">显示modal</am-button>
                    <am-modal :is-show.sync="modalVisible" :width="320">
                        <am-modal-header>注册</am-modal-header>
                        <am-modal-body>
                            <am-form>
                                <am-input-group block>
                                    <am-input-label transparent slot="prepend">
                                        <am-icon type="user" placeholder="请输入您的帐号"></am-icon>
                                    </am-input-label>
                                    <am-input></am-input>
                                </am-input-group>
                                <am-input-group block>
                                    <am-input-label transparent slot="prepend">
                                        <am-icon type="lock"></am-icon>
                                    </am-input-label>
                                    <am-input type="password" placeholder="请输入您的密码"></am-input>
                                </am-input-group>
                                <am-input-group block>
                                    <am-input-label transparent slot="prepend">
                                        <am-icon type="lock"></am-icon>
                                    </am-input-label>
                                    <am-input type="password" placeholder="请确认您的密码"></am-input>
                                </am-input-group>
                                <am-input-group>
                                    <am-checkbox>男</am-checkbox>
                                    <am-checkbox>女</am-checkbox>
                                </am-input-group>
                                <am-input-group>
                                    <am-select :options="sections"></am-select>
                                </am-input-group>
                            </am-form>
                        </am-modal-body>
                        <am-modal-footer>
                            <am-button color="primary">注册</am-button>
                            <am-button>取消</am-button>
                        </am-modal-footer>
                    </am-modal>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showModal&quot;&gt;显示modal&lt;/am-button&gt;
    &lt;am-modal :is-show.sync=&quot;modalVisible&quot; :width=&quot;320&quot;&gt;
        &lt;am-modal-header&gt;注册&lt;/am-modal-header&gt;
        &lt;am-modal-body&gt;
            &lt;am-form&gt;
                &lt;am-input-group block&gt;
                    &lt;am-input-label transparent slot=&quot;prepend&quot;&gt;
                        &lt;am-icon type=&quot;user&quot; placeholder=&quot;请输入您的帐号&quot;&gt;&lt;/am-icon&gt;
                    &lt;/am-input-label&gt;
                    &lt;am-input&gt;&lt;/am-input&gt;
                &lt;/am-input-group&gt;
                &lt;am-input-group block&gt;
                    &lt;am-input-label transparent slot=&quot;prepend&quot;&gt;
                        &lt;am-icon type=&quot;lock&quot;&gt;&lt;/am-icon&gt;
                    &lt;/am-input-label&gt;
                    &lt;am-input type=&quot;password&quot; placeholder=&quot;请输入您的密码&quot;&gt;&lt;/am-input&gt;
                &lt;/am-input-group&gt;
                &lt;am-input-group block&gt;
                    &lt;am-input-label transparent slot=&quot;prepend&quot;&gt;
                        &lt;am-icon type=&quot;lock&quot;&gt;&lt;/am-icon&gt;
                    &lt;/am-input-label&gt;
                    &lt;am-input type=&quot;password&quot; placeholder=&quot;请确认您的密码&quot;&gt;&lt;/am-input&gt;
                &lt;/am-input-group&gt;
                &lt;am-input-group&gt;
                    &lt;am-checkbox&gt;男&lt;/am-checkbox&gt;
                    &lt;am-checkbox&gt;女&lt;/am-checkbox&gt;
                &lt;/am-input-group&gt;
                &lt;am-input-group&gt;
                    &lt;am-select :options=&quot;sections&quot;&gt;&lt;/am-select&gt;
                &lt;/am-input-group&gt;
            &lt;/am-form&gt;
        &lt;/am-modal-body&gt;
        &lt;am-modal-footer&gt;
            &lt;am-button color=&quot;primary&quot;&gt;注册&lt;/am-button&gt;
            &lt;am-button&gt;取消&lt;/am-button&gt;
        &lt;/am-modal-footer&gt;
    &lt;/am-modal&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                sections: [{
                    value: 1,
                    label: '安全部',
                    guesser: 'anquan'
                }, {
                    value: 2,
                    label: 'IT部',
                    guesser: 'it'
                }, {
                    value: 3,
                    label: '人事部',
                    guesser: 'renshi'
                }],
                modalVisible: false
            }
        },
        methods: {
            showModal() {
                this.modalVisible = true;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-modal</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-modal-header</am-doc-code></h2>
                <am-table :data="headerProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-modal-body</am-doc-code></h2>
                <am-table :data="defaultProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-modal-footer</am-doc-code></h2>
                <am-table :data="defaultProps">
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
                sections: [{
                    value: 1,
                    label: '安全部',
                    guesser: 'anquan'
                }, {
                    value: 2,
                    label: 'IT部',
                    guesser: 'it'
                }, {
                    value: 3,
                    label: '人事部',
                    guesser: 'renshi'
                }],
                props: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'width',
                    desc: 'modal宽度',
                    type: 'Number',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'height',
                    desc: 'modal高度',
                    type: 'Number',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'is-show',
                    desc: '显示modal',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'close-via-dimmer',
                    desc: '点击背景关闭modal',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'transition',
                    desc: '过渡动画',
                    type: 'String',
                    values: '-',
                    default: 'scale-up'
                }],
                headerProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'closeable',
                    desc: '关闭按钮',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }],
                defaultProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }],
                events: [{
                    prop: 'visible-change',
                    trigger: 'modal显示状态发生变化',
                    params: 'is-show'
                }],
                modalVisible: false
            }
        },
        methods: {
            showModal() {
                this.modalVisible = true;
            }
        }
    }
</script>
