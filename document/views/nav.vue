<template>
    <am-article>
        <am-article-header title="导航"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-nav</am-doc-code> 导航容器</li>
                    <li><am-doc-code>am-nav-item</am-doc-code> 导航元素容器</li>
                </ul>

                <am-example>
                    <am-nav>
                        <am-nav-item :active="true" :to="'/'">首页</am-nav-item>
                        <am-nav-item :to="'/button'">按钮</am-nav-item>
                        <am-nav-item :to="'/icon'">图标</am-nav-item>
                        <am-nav-item :to="'/image'">图片</am-nav-item>
                    </am-nav>
                </am-example>
<am-code syntax="xml">&lt;am-nav&gt;
    &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;&lt;a href=&quot;#&quot;&gt;首页&lt;/a&gt;&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/icon&#x27;&quot;&gt;图标&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/image&#x27;&quot;&gt;图片&lt;/am-nav-item&gt;
&lt;/am-nav&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>横向排列</h2>
                <am-example>
                    <am-nav :pill="true">
                        <am-nav-item :active="true" :to="'/'">首页</am-nav-item>
                        <am-nav-item :to="'/button'">按钮</am-nav-item>
                        <am-nav-item :to="'/icon'">图标</am-nav-item>
                        <am-nav-item :to="'/image'">图片</am-nav-item>
                    </am-nav>
                </am-example>
<am-code syntax="xml">&lt;am-nav :pill=&quot;true&quot;&gt;
    &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;首页&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/icon&#x27;&quot;&gt;图标&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/image&#x27;&quot;&gt;图片&lt;/am-nav-item&gt;
&lt;/am-nav&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>选项卡</h2>
                <am-example>
                    <am-nav :pill="true" :tab="true">
                        <am-nav-item :active="true" :to="'/'">首页</am-nav-item>
                        <am-nav-item :to="'/button'">按钮</am-nav-item>
                        <am-nav-item :to="'/icon'">图标</am-nav-item>
                        <am-nav-item :to="'/image'">图片</am-nav-item>
                    </am-nav>
                </am-example>
<am-code syntax="xml">&lt;am-nav :pill=&quot;true&quot; :tab=&quot;true&quot;&gt;
    &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;首页&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/icon&#x27;&quot;&gt;图标&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/image&#x27;&quot;&gt;图片&lt;/am-nav-item&gt;
&lt;/am-nav&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>宽度自适应</h2>
                <am-example>
                    <am-nav :pill="true" :tab="true" :justify="true">
                        <am-nav-item :active="true" :to="'/'">首页</am-nav-item>
                        <am-nav-item :to="'/button'">按钮</am-nav-item>
                        <am-nav-item :to="'/icon'">图标</am-nav-item>
                        <am-nav-item :to="'/image'">图片</am-nav-item>
                    </am-nav>
                </am-example>
<am-code syntax="xml">&lt;am-nav :pill=&quot;true&quot; :tab=&quot;true&quot;&gt;
    &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;首页&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/icon&#x27;&quot;&gt;图标&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/image&#x27;&quot;&gt;图片&lt;/am-nav-item&gt;
&lt;/am-nav&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>导航栏状态</h2>
                <am-example>
                    <am-nav :pill="true" :tab="true" :justify="true">
                        <am-nav-item :active="true" :to="'/'">首页</am-nav-item>
                        <am-nav-item :disabled="true" :to="'/button'">按钮</am-nav-item>
                        <am-nav-item :divider="true" :to="'/icon'">图标</am-nav-item>
                        <am-nav-item :to="'/image'">图片</am-nav-item>
                    </am-nav>
                </am-example>
<am-code syntax="xml">&lt;am-nav :pill=&quot;true&quot; :tab=&quot;true&quot; :justify=&quot;true&quot;&gt;
    &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;首页&lt;/am-nav-item&gt;
    &lt;am-nav-item :disabled=&quot;true&quot; :to=&quot;&#x27;/button&#x27;&quot;&gt;按钮&lt;/am-nav-item&gt;
    &lt;am-nav-item :divider=&quot;true&quot; :to=&quot;&#x27;/icon&#x27;&quot;&gt;图标&lt;/am-nav-item&gt;
    &lt;am-nav-item :to=&quot;&#x27;/image&#x27;&quot;&gt;图片&lt;/am-nav-item&gt;
&lt;/am-nav&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-nav</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-nav-item</am-doc-code></h2>
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
                    prop: 'pill',
                    desc: '横向排列',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'tab',
                    desc: '选项卡样式',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'justify',
                    desc: '宽度自适应',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'topbar',
                    desc: '置顶',
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
                    prop: 'header',
                    desc: '头部标题',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'active',
                    desc: '激活状态',
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
                }],
            }
        }
    }
</script>