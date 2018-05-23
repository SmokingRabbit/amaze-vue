<template>
    <am-article>
        <am-article-header title="置顶导航"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-topbar</am-doc-code> 置顶导航容器</li>
                    <li><am-doc-code>am-topbar-brand</am-doc-code> Logo容器</li>
                    <li><am-doc-code>am-topbar-collapse</am-doc-code> 导航连接容器</li>
                    <li><am-doc-code>am-topbar-from</am-doc-code> 导航表单容器</li>
                    <li><am-doc-code>am-topbar-toggle</am-doc-code> 移动端响应按钮</li>
                    <li><am-doc-code>am-topbar-slot</am-doc-code> 浮动插槽容器</li>
                </ul>

                <am-example>
                    <am-topbar>
                        <am-topbar-brand><a href="#">Amaze UI</a></am-topbar-brand>
                        <am-topbar-toggle></am-topbar-toggle>
                        <am-topbar-collapse>
                            <am-nav :pill="true" :topbar="true">
                                <am-nav-item :active="true" :to="'/'">home</am-nav-item>
                                <am-nav-item :to="'/list'">list</am-nav-item>
                                <am-nav-item :to="'/article'">article</am-nav-item>
                            </am-nav>
                            <am-topbar-form>
                                <am-form-group size="sm">
                                    <am-input placement="请输入要查询的内容"></am-input>
                                </am-form-group>
                            </am-topbar-form>
                            <am-topbar-slot>
                                <am-button color="secondary" custom-class="am-topbar-btn">注册</am-button>
                            </am-topbar-slot>
                            <am-topbar-slot>
                                <am-button color="primary" custom-class="am-topbar-btn">登录</am-button>
                            </am-topbar-slot>
                        </am-topbar-collapse>
                    </am-topbar>
                </am-example>
<am-code syntax="xml">&lt;am-topbar&gt;
    &lt;am-topbar-brand&gt;&lt;a href=&quot;#&quot;&gt;Amaze UI&lt;/a&gt;&lt;/am-topbar-brand&gt;
    &lt;am-topbar-toggle&gt;&lt;/am-topbar-toggle&gt;
    &lt;am-topbar-collapse&gt;
        &lt;am-nav :pill=&quot;true&quot; :topbar=&quot;true&quot;&gt;
            &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;home&lt;/am-nav-item&gt;
            &lt;am-nav-item :to=&quot;&#x27;/list&#x27;&quot;&gt;list&lt;/am-nav-item&gt;
            &lt;am-nav-item :to=&quot;&#x27;/article&#x27;&quot;&gt;article&lt;/am-nav-item&gt;
        &lt;/am-nav&gt;
        &lt;am-topbar-form&gt;
            &lt;am-form-group size=&quot;sm&quot;&gt;
                &lt;am-input placement=&quot;请输入要查询的内容&quot;&gt;&lt;/am-input&gt;
            &lt;/am-form-group&gt;
        &lt;/am-topbar-form&gt;
        &lt;am-topbar-slot&gt;
            &lt;am-button color=&quot;secondary&quot; custom-class=&quot;am-topbar-btn&quot;&gt;注册&lt;/am-button&gt;
        &lt;/am-topbar-slot&gt;
        &lt;am-topbar-slot&gt;
            &lt;am-button color=&quot;primary&quot; custom-class=&quot;am-topbar-btn&quot;&gt;登录&lt;/am-button&gt;
        &lt;/am-topbar-slot&gt;
    &lt;/am-topbar-collapse&gt;
&lt;/am-topbar&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>颜色</h2>
                <am-example>
                    <am-topbar :inverse="true">
                        <am-topbar-brand><a href="#">Amaze UI</a></am-topbar-brand>
                        <am-topbar-toggle></am-topbar-toggle>
                        <am-topbar-collapse>
                            <am-nav :pill="true" :topbar="true">
                                <am-nav-item :active="true" :to="'/'">home</am-nav-item>
                                <am-nav-item :to="'/list'">list</am-nav-item>
                                <am-nav-item :to="'/article'">article</am-nav-item>
                            </am-nav>
                            <am-topbar-form>
                                <am-form-group size="sm">
                                    <am-input placement="请输入要查询的内容"></am-input>
                                </am-form-group>
                            </am-topbar-form>
                            <am-topbar-slot>
                                <am-button color="secondary" custom-class="am-topbar-btn">注册</am-button>
                            </am-topbar-slot>
                            <am-topbar-slot>
                                <am-button color="primary" custom-class="am-topbar-btn">登录</am-button>
                            </am-topbar-slot>
                        </am-topbar-collapse>
                    </am-topbar>
                </am-example>
<am-code syntax="xml">&lt;am-topbar :inverse=&quot;true&quot;&gt;
    &lt;am-topbar-brand&gt;&lt;a href=&quot;#&quot;&gt;Amaze UI&lt;/a&gt;&lt;/am-topbar-brand&gt;
    &lt;am-topbar-toggle&gt;&lt;/am-topbar-toggle&gt;
    &lt;am-topbar-collapse&gt;
        &lt;am-nav :pill=&quot;true&quot; :topbar=&quot;true&quot;&gt;
            &lt;am-nav-item :active=&quot;true&quot; :to=&quot;&#x27;/&#x27;&quot;&gt;home&lt;/am-nav-item&gt;
            &lt;am-nav-item :to=&quot;&#x27;/list&#x27;&quot;&gt;list&lt;/am-nav-item&gt;
            &lt;am-nav-item :to=&quot;&#x27;/article&#x27;&quot;&gt;article&lt;/am-nav-item&gt;
        &lt;/am-nav&gt;
        &lt;am-topbar-form&gt;
            &lt;am-form-group size=&quot;sm&quot;&gt;
                &lt;am-input placement=&quot;请输入要查询的内容&quot;&gt;&lt;/am-input&gt;
            &lt;/am-form-group&gt;
        &lt;/am-topbar-form&gt;
        &lt;am-topbar-slot&gt;
            &lt;am-button color=&quot;secondary&quot; custom-class=&quot;am-topbar-btn&quot;&gt;注册&lt;/am-button&gt;
        &lt;/am-topbar-slot&gt;
        &lt;am-topbar-slot&gt;
            &lt;am-button color=&quot;primary&quot; custom-class=&quot;am-topbar-btn&quot;&gt;登录&lt;/am-button&gt;
        &lt;/am-topbar-slot&gt;
    &lt;/am-topbar-collapse&gt;
&lt;/am-topbar&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar-brand</am-doc-code></h2>
                <am-table :data="brandProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar-collapse</am-doc-code></h2>
                <am-table :data="collapseProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar-from</am-doc-code></h2>
                <am-table :data="fromProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar-toggle</am-doc-code></h2>
                <am-table :data="toggleProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-topbar-slot</am-doc-code></h2>
                <am-table :data="slotProps">
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
                    prop: 'inverse',
                    desc: '反转颜色',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'fixed',
                    desc: '固定位置',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'placement',
                    desc: '位置',
                    type: 'String',
                    values: 'top、bottom',
                    default: 'top'
                }],
                brandProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }],
                collapseProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }],
                fromProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'placement',
                    desc: '位置',
                    type: 'String',
                    values: 'left、right',
                    default: 'left'
                }],
                toggleProps: [{
                    prop: 'color',
                    desc: '按钮颜色',
                    type: 'String',
                    values: 'default, primary, secondary, success, warning, danger',
                    default: 'default'
                }],
                slotProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'placement',
                    desc: '浮动方向',
                    type: 'String',
                    values: 'left、right',
                    default: 'right'
                }]
            }
        }
    }
</script>