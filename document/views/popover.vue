<template>
    <am-article>
        <am-article-header title="Popover"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-popover ref="popover1">这是一个popover</am-popover>
                    <am-button v-popover:popover1>hover显示popover</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-popover ref=&quot;popover1&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover1&gt;hover显示popover&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>显示位置</h2>

                <am-example>
                    <am-popover ref="popover2">这是一个popover</am-popover>
                    <am-button v-popover:popover2>上方显示</am-button>

                    <am-popover ref="popover3" placement="right">这是一个popover</am-popover>
                    <am-button v-popover:popover3>右侧显示</am-button>

                    <am-popover ref="popover4" placement="bottom">这是一个popover</am-popover>
                    <am-button v-popover:popover4>下方显示</am-button>

                    <am-popover ref="popover5" placement="left">这是一个popover</am-popover>
                    <am-button v-popover:popover5>左侧显示</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-popover ref=&quot;popover2&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover2&gt;上方显示&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover2&quot; placement=&quot;right&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover2&gt;右侧显示&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover3&quot; placement=&quot;bottom&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover3&gt;下方显示&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover4&quot; placement=&quot;left&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover4&gt;左侧显示&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>颜色</h2>

                <am-example>
                    <am-popover ref="popover6">这是一个popover</am-popover>
                    <am-button v-popover:popover6>默认颜色</am-button>

                    <am-popover ref="popover7" color="primary">这是一个popover</am-popover>
                    <am-button v-popover:popover7>primary</am-button>

                    <am-popover ref="popover8" color="secondary">这是一个popover</am-popover>
                    <am-button v-popover:popover8>secondary</am-button>

                    <am-popover ref="popover9" color="success">这是一个popover</am-popover>
                    <am-button v-popover:popover9>success</am-button>

                    <am-popover ref="popover10" color="warning">这是一个popover</am-popover>
                    <am-button v-popover:popover10>warning</am-button>

                    <am-popover ref="popover11" color="danger">这是一个popover</am-popover>
                    <am-button v-popover:popover11>danger</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-popover ref=&quot;popover6&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover6&gt;默认颜色&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover7&quot; color=&quot;primary&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover7&gt;primary&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover8&quot; color=&quot;warning&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover8&gt;warning&lt;/am-button&gt;

&lt;am-popover ref=&quot;popover9&quot; color=&quot;danger&quot;&gt;这是一个popover&lt;/am-popover&gt;
&lt;am-button v-popover:popover9&gt;danger&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-popover</am-doc-code></h2>
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
                    prop: 'trigger',
                    desc: '触发条件',
                    type: 'String',
                    values: 'click、hover',
                    default: 'hover'
                }, {
                    prop: 'fix',
                    desc: 'popover与trigger元素距离的调教',
                    type: 'Number',
                    values: '-',
                    default: '10'
                }, {
                    prop: 'placement',
                    desc: '位置',
                    type: 'String',
                    values: 'top、left、right、bottom',
                    default: 'top'
                }, {
                    prop: 'color',
                    desc: '颜色',
                    type: 'String',
                    values: 'primary、secondary、success、warning、danger',
                    default: 'NULL'
                }, {
                    prop: 'size',
                    desc: '尺寸',
                    type: 'String',
                    values: 'sm、lg',
                    default: 'NULL'
                }, {
                    prop: 'transition',
                    desc: '过渡效果',
                    type: 'String',
                    values: '-',
                    default: 'scale-up'
                }]
            }
        }
    }
</script>