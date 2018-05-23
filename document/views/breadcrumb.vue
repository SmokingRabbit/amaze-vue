<template>
    <am-article>
        <am-article-header title="面包屑"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-breadcrumb</am-doc-code> 面包屑容器</li>
                    <li><am-doc-code>am-breadcrumb-item</am-doc-code> 面包屑元素容器</li>
                </ul>

                <am-example>
                    <am-breadcrumb>
                        <am-breadcrumb-item :to="'/'">
                            <am-icon type="home"></am-icon>首页
                        </am-breadcrumb-item>
                        <am-breadcrumb-item :to="'/button'">按钮</am-breadcrumb-item>
                        <am-breadcrumb-item>信息</am-breadcrumb-item>
                    </am-breadcrumb>
                </am-example>
<am-code syntax="xml">&lt;am-breadcrumb&gt;
    &lt;am-breadcrumb-item :to=&quot;&#x27;/&#x27;&quot;&gt;
        &lt;am-icon type=&quot;home&quot;&gt;&lt;/am-icon&gt;首页
    &lt;/am-breadcrumb-item&gt;
    &lt;am-breadcrumb-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-breadcrumb-item&gt;
    &lt;am-breadcrumb-item&gt;信息&lt;/am-breadcrumb-item&gt;
&lt;/am-breadcrumb&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>使用分隔线</h2>
                <am-example>
                    <am-breadcrumb :separator="true">
                        <am-breadcrumb-item :to="'/'">
                            <am-icon type="home"></am-icon>首页
                        </am-breadcrumb-item>
                        <am-breadcrumb-item to="/button">按钮</am-breadcrumb-item>
                        <am-breadcrumb-item>信息</am-breadcrumb-item>
                    </am-breadcrumb>
                </am-example>
<am-code syntax="xml">&lt;am-breadcrumb :separator=&quot;true&quot;&gt;
    &lt;am-breadcrumb-item :to=&quot;&#x27;/&#x27;&quot;&gt;
        &lt;am-icon type=&quot;home&quot;&gt;&lt;/am-icon&gt;首页
    &lt;/am-breadcrumb-item&gt;
    &lt;am-breadcrumb-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-breadcrumb-item&gt;
    &lt;am-breadcrumb-item&gt;信息&lt;/am-breadcrumb-item&gt;
&lt;/am-breadcrumb&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-change</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-change</am-doc-code></h2>
                <am-table :data="itemProps">
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
                    prop: 'separator',
                    desc: '斜线分隔',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                itemProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'router',
                    desc: '使用vue-router',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'to',
                    desc: '路由连接',
                    type: 'String | Loaction',
                    values: '-',
                    default: 'NULL'
                }]
            }
        }
    }
</script>