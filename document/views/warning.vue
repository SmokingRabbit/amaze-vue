<template>
    <am-article>
        <am-article-header title="提醒面板"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-warning>
                        <h3>共同渡过</h3>
                        <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
                            <ul>
                            <li>若我可再活多一次都盼</li>
                            <li>再可以在路途重逢着你</li>
                            <li>共去写一生的句子</li>
                            <li>若我可再活多一次千次</li>
                            <li>我都盼面前仍是你</li>
                            <li>我要他生都有今生的暖意</li>
                        </ul>
                    </am-warning>
                </am-example>
<am-code syntax="xml">&lt;am-warning&gt;
    &lt;h3&gt;共同渡过&lt;/h3&gt;
    &lt;p&gt;《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。&lt;/p&gt;
        &lt;ul&gt;
        &lt;li&gt;若我可再活多一次都盼&lt;/li&gt;
        &lt;li&gt;再可以在路途重逢着你&lt;/li&gt;
        &lt;li&gt;共去写一生的句子&lt;/li&gt;
        &lt;li&gt;若我可再活多一次千次&lt;/li&gt;
        &lt;li&gt;我都盼面前仍是你&lt;/li&gt;
        &lt;li&gt;我要他生都有今生的暖意&lt;/li&gt;
    &lt;/ul&gt;
&lt;/am-warning&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>颜色</h2>

                <am-example>
                    <am-warning color="danger">
                        <h3>共同渡过</h3>
                        <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
                            <ul>
                            <li>若我可再活多一次都盼</li>
                            <li>再可以在路途重逢着你</li>
                            <li>共去写一生的句子</li>
                            <li>若我可再活多一次千次</li>
                            <li>我都盼面前仍是你</li>
                            <li>我要他生都有今生的暖意</li>
                        </ul>
                    </am-warning>
                </am-example>
<am-code syntax="xml">&lt;am-warning color=&quot;danger&quot;&gt;
    &lt;h3&gt;共同渡过&lt;/h3&gt;
    &lt;p&gt;《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。&lt;/p&gt;
        &lt;ul&gt;
        &lt;li&gt;若我可再活多一次都盼&lt;/li&gt;
        &lt;li&gt;再可以在路途重逢着你&lt;/li&gt;
        &lt;li&gt;共去写一生的句子&lt;/li&gt;
        &lt;li&gt;若我可再活多一次千次&lt;/li&gt;
        &lt;li&gt;我都盼面前仍是你&lt;/li&gt;
        &lt;li&gt;我要他生都有今生的暖意&lt;/li&gt;
    &lt;/ul&gt;
&lt;/am-warning&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>不可关闭</h2>

                <am-example>
                    <am-warning color="danger" :closeable="false">
                        <h3>共同渡过</h3>
                        <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
                            <ul>
                            <li>若我可再活多一次都盼</li>
                            <li>再可以在路途重逢着你</li>
                            <li>共去写一生的句子</li>
                            <li>若我可再活多一次千次</li>
                            <li>我都盼面前仍是你</li>
                            <li>我要他生都有今生的暖意</li>
                        </ul>
                    </am-warning>
                </am-example>
<am-code syntax="xml">&lt;am-warning color=&quot;danger&quot; :closeable=&quot;false&quot;&gt;
    &lt;h3&gt;共同渡过&lt;/h3&gt;
    &lt;p&gt;《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。&lt;/p&gt;
        &lt;ul&gt;
        &lt;li&gt;若我可再活多一次都盼&lt;/li&gt;
        &lt;li&gt;再可以在路途重逢着你&lt;/li&gt;
        &lt;li&gt;共去写一生的句子&lt;/li&gt;
        &lt;li&gt;若我可再活多一次千次&lt;/li&gt;
        &lt;li&gt;我都盼面前仍是你&lt;/li&gt;
        &lt;li&gt;我要他生都有今生的暖意&lt;/li&gt;
    &lt;/ul&gt;
&lt;/am-warning&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-warning</am-doc-code></h2>
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
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'color',
                    desc: '颜色',
                    type: 'String',
                    values: 'secondary, success, warning, danger',
                    default: 'NULL'
                }, {
                    prop: 'visible',
                    desc: '是否可见',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'closeable',
                    desc: '可关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'transition',
                    desc: '过渡动画',
                    type: 'String',
                    values: {
                        render() {
                            return (<p>请参考<router-link to={'/transition'}>Transition</router-link></p>);
                        }
                    },
                    default: 'fade'
                }]
            }
        }
    }
</script>