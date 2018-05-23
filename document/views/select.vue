<template>
    <am-article>
        <am-article-header title="选择列表"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>
                <am-example>
                    <am-select :options="options"></am-select>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-select :options=&quot;options&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                options: [{
                    label: &#x27;苹果&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                }]
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>不显示三角插入符</h2>
                <am-example>
                    <am-select :options="options" :caret="false"></am-select>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-select :options=&quot;options&quot; :caret=&quot;false&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                options: [{
                    label: &#x27;苹果&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                }]
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>获取选中值</h2>
                <p>您也可以使用<am-doc-code>v-model</am-doc-code>双向绑定选中的值</p>
                <am-example>
                    <am-select @select="selectHandle" :options="options"></am-select>
                    <p>您选择的是：<am-doc-code>{{selectVal.label}}</am-doc-code></p>
                </am-example>
<am-code syntax="vue">&lt;template&gt;
    &lt;am-select @select=&quot;selectHandle&quot; :options=&quot;options&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                selectVal: &#x27;&#x27;,
                options: [{
                    label: &#x27;苹果&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                }]
            }
        },
        methods: {
            selectHandle(val) {
                this.selectVal = val;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>多选</h2>
                <am-example>
                    <am-select :multiple="true" :options="options"></am-select>
                </am-example>
<am-code syntax="vue">&lt;template&gt;
    &lt;am-select :multiple=&quot;true&quot; :options=&quot;options&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                options: [{
                    label: &#x27;苹果&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                }]
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>使用搜索过滤</h2>
                <am-example>
                    <am-select :search="true" :options="options"></am-select>
                </am-example>
<am-code>&lt;template&gt;
    &lt;am-select :search=&quot;true&quot; :options=&quot;options&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                options: [{
                    label: &#x27;苹果&#x27;,
                    guesser: &#x27;pingguo&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;,
                    guesser: &#x27;yali&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                    guesser: &#x27;xiangjiao&#x27;
                }]
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>颜色 & 宽度</h2>
                <am-example>
                    <am-select color="success" width="100%" :search="true" :multiple="true" :options="options"></am-select>
                </am-example>
<am-code syntax="vue">&lt;template&gt;
    &lt;am-select color=&quot;success&quot; width=&quot;100%&quot; :search=&quot;true&quot :multiple=&quot;true&quot; :options=&quot;options&quot;&gt;&lt;/am-select&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                options: [{
                    label: &#x27;苹果&#x27;
                }, {
                    label: &#x27;鸭梨&#x27;
                }, {
                    label: &#x27;香蕉&#x27;,
                }]
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-select</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Attribute <am-doc-code>options</am-doc-code></h2>
                <am-table :data="attr">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-select</am-doc-code></h2>
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
                selectVal: '',
                options: [{
                    value: 1,
                    label: '苹果',
                    guesser: 'pingguo'
                }, {
                    value: 2,
                    label: '鸭梨',
                    guesser: 'yali'
                }, {
                    value: 3,
                    label: '香蕉',
                    guesser: 'xiangjiao'
                }],
                props: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'placeholder',
                    desc: '选择框占位文字',
                    type: 'String',
                    values: '-',
                    default: '请选择'
                }, {
                    prop: 'width',
                    desc: '选择框宽度',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'color',
                    desc: '选择框颜色',
                    type: 'String',
                    values: 'primary, secondary, success, warning, danger',
                    default: 'NULL'
                }, {
                    prop: 'max-height',
                    desc: '下拉栏最大高度',
                    type: 'Number',
                    values: '-',
                    default: '260'
                }, {
                    prop: 'multiple',
                    desc: '支持多选',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'search',
                    desc: '支持模糊查询',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'options',
                    desc: '选项',
                    type: 'Array',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'transition',
                    desc: '下拉栏过度项目',
                    type: 'String',
                    values: '-',
                    default: 'slide-down'
                }, {
                    prop: 'caret',
                    desc: '显示三角插入符',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }],
                attr:[{
                    prop: 'label',
                    desc: '选项名称',
                    type: 'String',
                }, {
                    prop: 'selected',
                    desc: '被选中状态',
                    type: 'Boolean',
                }, {
                    prop: 'guesser',
                    desc: '模糊搜索匹配词',
                    type: 'String',
                }],
                events: [{
                    prop: 'select',
                    trigger: '发生选择的时候',
                    params: 'multiple ? Object : Array'
                }, {
                    prop: 'change',
                    trigger: '选择的时候',
                    params: 'changeObject, status'
                }]
            }
        },
        methods: {
            selectHandle(val) {
                this.selectVal = val;
            }
        }
    }
</script>