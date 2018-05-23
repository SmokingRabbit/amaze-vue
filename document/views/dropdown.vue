<template>
    <am-article>
        <am-article-header title="下拉菜单"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>
                <am-example>
                    <am-dropdown ref="dropdown1">
                        <am-dropdown-item :header="true">文章类型</am-dropdown-item>
                        <am-dropdown-item><a>散文</a></am-dropdown-item>
                        <am-dropdown-item><a>诗歌</a></am-dropdown-item>
                    </am-dropdown>
                    <am-button v-dropdown:dropdown1>文章类型</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-dropdown ref=&quot;dropdown1&quot;&gt;
    &lt;am-dropdown-item :header=&quot;true&quot;&gt;文章类型&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;散文&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;诗歌&lt;/a&gt;&lt;/am-dropdown-item&gt;
&lt;/am-dropdown&gt;
&lt;am-button v-dropdown:dropdown1&gt;文章类型&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>不显示三角插入符</h2>
                <am-example>
                    <am-dropdown ref="dropdown11" :caret="false">
                        <am-dropdown-item :header="true">文章类型</am-dropdown-item>
                        <am-dropdown-item><a>散文</a></am-dropdown-item>
                        <am-dropdown-item><a>诗歌</a></am-dropdown-item>
                    </am-dropdown>
                    <am-button v-dropdown:dropdown11>文章类型</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-dropdown ref=&quot;dropdown11&quot; :caret=&quot;false&quot;&gt;
    &lt;am-dropdown-item :header=&quot;true&quot;&gt;文章类型&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;散文&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;诗歌&lt;/a&gt;&lt;/am-dropdown-item&gt;
&lt;/am-dropdown&gt;
&lt;am-button v-dropdown:dropdown11&gt;文章类型&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2><am-doc-code>click</am-doc-code>激活</h2>
                <am-example>
                    <am-dropdown ref="dropdown2" trigger="click">
                        <am-dropdown-item :header="true">文章类型</am-dropdown-item>
                        <am-dropdown-item><a>散文</a></am-dropdown-item>
                        <am-dropdown-item><a>诗歌</a></am-dropdown-item>
                    </am-dropdown>
                    <am-button v-dropdown:dropdown2>文章类型</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-dropdown ref=&quot;dropdown2&quot; trigger=&quot;click&quot;&gt;
    &lt;am-dropdown-item :header=&quot;true&quot;&gt;文章类型&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;散文&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;诗歌&lt;/a&gt;&lt;/am-dropdown-item&gt;
&lt;/am-dropdown&gt;
&lt;am-button v-dropdown:dropdown2&gt;文章类型&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>位置</h2>
                <am-example>
                    <am-dropdown ref="dropdown3" placement="top" trigger="click">
                        <am-dropdown-item :header="true">文章类型</am-dropdown-item>
                        <am-dropdown-item><a>散文</a></am-dropdown-item>
                        <am-dropdown-item><a>诗歌</a></am-dropdown-item>
                    </am-dropdown>
                    <am-button v-dropdown:dropdown3>文章类型</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-dropdown ref=&quot;dropdown3&quot; placement=&quot;top&quot; trigger=&quot;click&quot;&gt;
    &lt;am-dropdown-item :header=&quot;true&quot;&gt;文章类型&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;散文&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;诗歌&lt;/a&gt;&lt;/am-dropdown-item&gt;
&lt;/am-dropdown&gt;
&lt;am-button v-dropdown:dropdown3&gt;文章类型&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>菜单状态</h2>
                <am-example>
                    <am-dropdown ref="dropdown4" placement="top" trigger="click">
                        <am-dropdown-item :header="true">苹果</am-dropdown-item>
                        <am-dropdown-item :active="true"><a>香蕉</a></am-dropdown-item>
                        <am-dropdown-item :disabled="true"><a>橘子</a></am-dropdown-item>
                        <am-dropdown-item><a>葡萄</a></am-dropdown-item>
                        <am-dropdown-item :divider="true"></am-dropdown-item>
                        <am-dropdown-item><a>山楂</a></am-dropdown-item>
                    </am-dropdown>
                    <am-button v-dropdown:dropdown4>水果类型</am-button>
                </am-example>
<am-code syntax="xml">&lt;am-dropdown ref=&quot;dropdown4&quot; placement=&quot;top&quot; trigger=&quot;click&quot;&gt;
    &lt;am-dropdown-item :header=&quot;true&quot;&gt;苹果&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item :active=&quot;true&quot;&gt;&lt;a&gt;香蕉&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item :disabled=&quot;true&quot;&gt;&lt;a&gt;橘子&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;葡萄&lt;/a&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item :divider=&quot;true&quot;&gt;&lt;/am-dropdown-item&gt;
    &lt;am-dropdown-item&gt;&lt;a&gt;山楂&lt;/a&gt;&lt;/am-dropdown-item&gt;
&lt;/am-dropdown&gt;
&lt;am-button v-dropdown:dropdown4&gt;水果类型&lt;/am-button&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-dropdown</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-dropdown-item</am-doc-code></h2>
                <am-table :data="itemProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-dropdown-item</am-doc-code></h2>
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
                    prop: 'trigger',
                    desc: '触发事件',
                    type: 'String',
                    values: 'focus、click',
                    default: 'focus'
                }, {
                    prop: 'fix',
                    desc: '偏移位置',
                    type: 'Number',
                    values: '-',
                    default: '0'
                }, {
                    prop: 'placement',
                    desc: '菜单位置',
                    type: 'String',
                    values: 'bottom',
                    default: 'top、bottom'
                }, {
                    prop: 'delay',
                    desc: '延时隐藏菜单时间',
                    type: 'Number',
                    values: '-',
                    default: '100'
                }, {
                    prop: 'transition',
                    desc: '过渡效果',
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
                itemProps:[{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'active',
                    desc: '激活状态',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'header',
                    desc: '菜单头部',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'disabled',
                    desc: '禁用',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'divider',
                    desc: '分割线',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'value',
                    desc: '绑定菜单值，触发click时传入',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                events: [{
                    prop: 'click',
                    trigger: '菜单发生选择',
                    params: 'value'
                }]
            }
        }
    }
</script>