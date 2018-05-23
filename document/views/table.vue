<template>
    <am-article>
        <am-article-header title="表格"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-table</am-doc-code> 表格容器</li>
                    <li><am-doc-code>am-table-column</am-doc-code> 表格列字段</li>
                </ul>

                <am-example>
                    <am-table :data="tableData">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-table :data=&quot;tableData&quot;&gt;
        &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
    &lt;/am-table&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tableData: [{
                    num: 1,
                    title: &#x27;苹果&#x27;,
                    date: &#x27;2017-10-01&#x27;
                },{
                    num: 2,
                    title: &#x27;香蕉&#x27;,
                    date: &#x27;2017-10-02&#x27;
                },
                {
                    num: 3,
                    title: &#x27;葡萄&#x27;,
                    date: &#x27;2017-10-03&#x27;
                }]
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>边框</h2>
                <am-example>
                    <am-table :data="tableData" :border="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;am-table :data=&quot;tableData&quot; :border=&quot;true&quot;&gt;
    &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
&lt;/am-table&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>斑马线</h2>
                <am-example>
                    <am-table :data="tableData" :border="true" :striped="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;am-table :data=&quot;tableData&quot; :border=&quot;true&quot; :striped=&quot;true&quot;&gt;
    &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
&lt;/am-table&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>使用hover效果</h2>
                <am-example>
                    <am-table :data="tableData" :border="true" :striped="true" :hover="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;am-table :data=&quot;tableData&quot; :border=&quot;true&quot; :striped=&quot;true&quot; :hover=&quot;true&quot;&gt;
    &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
    &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
&lt;/am-table&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>单元格颜色与行激活</h2>
                <am-example>
                    <am-table :data="tableData2" :border="true" :striped="true" :hover="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-table :data=&quot;tableData2&quot; :border=&quot;true&quot; :striped=&quot;true&quot; :hover=&quot;true&quot;&gt;
        &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
    &lt;/am-table&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tableData2: [{
                    num: 1,
                    title: {
                        value: &#x27;苹果&#x27;,
                        color: &#x27;primary&#x27;
                    },
                    date: &#x27;2017-10-01&#x27;
                },{
                    num: {
                        value: 2,
                        color: &#x27;danger&#x27;
                    },
                    title: &#x27;香蕉&#x27;,
                    date: &#x27;2017-10-02&#x27;
                },
                {
                    num: 3,
                    title: &#x27;葡萄&#x27;,
                    date: &#x27;2017-10-03&#x27;,
                    active: true
                }],
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>自定义渲染字段</h2>
                <am-example>
                    <am-table :data="tableData1" :border="true" :striped="true" :hover="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="厂商"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-table :data=&quot;tableData1&quot; :border=&quot;true&quot; :striped=&quot;true&quot; :hover=&quot;true&quot;&gt;
        &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;title&quot; label=&quot;厂商&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
    &lt;/am-table&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tableData1: [{
                    num: 1,
                    title: {
                        render(h, fileds, prop, index) {
                            return (
                                &lt;div&gt;
                                    &lt;am-icon type=&quot;qq&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt; &lt;am-button on-click={e =&gt; alert(&#x27;您点击了第&#x27; + (index + 1) + &#x27;行的&#x27; + prop + &#x27;字段&#x27;)}&gt;操作&lt;/am-button&gt;
                                &lt;/div&gt;
                            );
                        }
                    },
                    date: &#x27;2017-10-01&#x27;
                },{
                    num: 2,
                    title: {
                        render(h, fileds, prop, index) {
                            return (&lt;am-icon type=&quot;github&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt;);
                        }
                    },
                    date: &#x27;2017-10-02&#x27;
                },
                {
                    num: 3,
                    title: {
                        render(h, fileds, prop, index) {
                            return (&lt;am-icon type=&quot;twitter&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt;);
                        }
                    },
                    date: &#x27;2017-10-03&#x27;
                }]
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>选择行</h2>
                <am-example>
                    <am-table :data="tableData" v-model="selectRow1" :border="true" :select="true" :striped="true" :hover="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                    </am-table>
                    <p>您选择的是：<am-doc-code>{{selectRow1}}</am-doc-code></p>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-table :data=&quot;tableData&quot; v-model=&quot;selectRow1&quot; :border=&quot;true&quot; :select=&quot;true&quot; :striped=&quot;true&quot; :hover=&quot;true&quot;&gt;
        &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
    &lt;/am-table&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tableData: [{
                    num: 1,
                    title: &#x27;苹果&#x27;,
                    date: &#x27;2017-10-01&#x27;
                },{
                    num: 2,
                    title: &#x27;香蕉&#x27;,
                    date: &#x27;2017-10-02&#x27;
                },
                {
                    num: 3,
                    title: &#x27;葡萄&#x27;,
                    date: &#x27;2017-10-03&#x27;
                }],
                selectRow1: []
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>全选</h2>
                <am-example>
                    <am-table :data="tableData" v-model="selectRow2" :select-all="true" :border="true" :select="true" :striped="true" :hover="true">
                        <am-table-column prop="num" label="编码"></am-table-column>
                        <am-table-column prop="title" label="名称"></am-table-column>
                        <am-table-column prop="date" label="日期"></am-table-column>
                        <div slot="tfoot">您可以在这里添加一些您需要的内容</div>
                    </am-table>
                    <p>您选择的是：<am-doc-code>{{selectRow2}}</am-doc-code></p>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-table :data=&quot;tableData&quot; v-model=&quot;selectRow2&quot; :select-all=&quot;true&quot; :border=&quot;true&quot; :select=&quot;true&quot; :striped=&quot;true&quot; :hover=&quot;true&quot;&gt;
        &lt;am-table-column prop=&quot;num&quot; label=&quot;编码&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;title&quot; label=&quot;名称&quot;&gt;&lt;/am-table-column&gt;
        &lt;am-table-column prop=&quot;date&quot; label=&quot;日期&quot;&gt;&lt;/am-table-column&gt;
        &lt;div slot=&quot;tfoot&quot;&gt;您可以在这里添加一些您需要的内容&lt;/div&gt;
    &lt;/am-table&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                tableData: [{
                    num: 1,
                    title: &#x27;苹果&#x27;,
                    date: &#x27;2017-10-01&#x27;
                },{
                    num: 2,
                    title: &#x27;香蕉&#x27;,
                    date: &#x27;2017-10-02&#x27;
                },
                {
                    num: 3,
                    title: &#x27;葡萄&#x27;,
                    date: &#x27;2017-10-03&#x27;
                }],
                selectRow2: []
            };
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-table</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Attribute <am-doc-code>data</am-doc-code></h2>
<am-code syntax="json">[{
    num: 1,
    title: {
        value: &#x27;苹果&#x27;,
        color: &#x27;primary&#x27;
    },
    date: &#x27;2017-10-01&#x27;
},{
    num: {
        value: 2,
        color: &#x27;danger&#x27;
    },
    title: &#x27;香蕉&#x27;,
    date: &#x27;2017-10-02&#x27;
},
{
    num: 3,
    title: &#x27;葡萄&#x27;,
    date: &#x27;2017-10-03&#x27;,
    active: true
}]
</am-code>
                <p>data中的每一个单元代表着一行数据，每一个单元内的一个索引代表着一个字段，用户可以直接传入数据值，table内会自动进行格式化统一生成标准的 <am-doc-code>value</am-doc-code>、<am-doc-code>color</am-doc-code>、<am-doc-code>render</am-doc-code>格式后进行渲染。</p>
                <p>另，每个单元内的<am-doc-code>active</am-doc-code>是保留字段用来标记行是否被激活。</p>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-table-column</am-doc-code></h2>
                <am-table :data="columnProps">
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
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'data',
                    desc: '渲染数据',
                    type: 'Array',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'border',
                    desc: '显示边框',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'striped',
                    desc: '斑马线间隔',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'hover',
                    desc: 'hover效果',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'compact',
                    desc: '紧凑型表格',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'nowrap',
                    desc: '禁止文字换行',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'select',
                    desc: '选择数据',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'select-text',
                    desc: 'theader中选择的文本',
                    type: 'String',
                    values: '-',
                    default: '选择'
                }, {
                    prop: 'select-all',
                    desc: '全选',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                columnProps: [{
                    prop: 'prop',
                    desc: '字段名',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'label',
                    desc: '标题名称',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'width',
                    desc: '单元格宽度',
                    type: 'Number',
                    values: '-',
                    default: 'NULL'
                }],
                tableData: [{
                    num: 1,
                    title: '苹果',
                    date: '2017-10-01'
                },{
                    num: 2,
                    title: '香蕉',
                    date: '2017-10-02'
                },
                {
                    num: 3,
                    title: '葡萄',
                    date: '2017-10-03'
                }],
                tableData2: [{
                    num: 1,
                    title: {
                        value: '苹果',
                        color: 'primary'
                    },
                    date: '2017-10-01'
                },{
                    num: {
                        value: 2,
                        color: 'danger'
                    },
                    title: '香蕉',
                    date: '2017-10-02'
                },
                {
                    num: 3,
                    title: '葡萄',
                    date: '2017-10-03',
                    active: true
                }],
                tableData1: [{
                    num: 1,
                    title: {
                        render(h, fileds, prop, index) {
                            return (
                                <div>
                                    <am-icon type="qq" color="success"></am-icon> <am-button on-click={e => alert('您点击了第' + (index + 1) + '行的' + prop + '字段')}>操作</am-button>
                                </div>
                            );
                        }
                    },
                    date: '2017-10-01'
                },{
                    num: 2,
                    title: {
                        render(h, fileds, prop, index) {
                            return (<am-icon type="github" color="success"></am-icon>);
                        }
                    },
                    date: '2017-10-02'
                },
                {
                    num: 3,
                    title: {
                        render(h, fileds, prop, index) {
                            return (<am-icon type="twitter" color="success"></am-icon>);
                        }
                    },
                    date: '2017-10-03'
                }],
                selectRow1: [],
                selectRow2: []
            }
        }
    }
</script>