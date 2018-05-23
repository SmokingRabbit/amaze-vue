<template>
    <am-article>
        <am-article-header title="列表"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-list</am-doc-code> 列表容器</li>
                    <li><am-doc-code>am-list-item</am-doc-code> 列表元素容器</li>
                </ul>

                <am-example>
                    <am-list :static="true">
                        <am-list-item>每个人都有一个死角， 自己走不出来，别人也闯不进去。</am-list-item>
                        <am-list-item>我把最深沉的秘密放在那里。</am-list-item>
                        <am-list-item>你不懂我，我不怪你。</am-list-item>
                        <am-list-item>每个人都有一道伤口， 或深或浅，盖上布，以为不存在。</am-list-item>
                    </am-list>
                </am-example>
<am-code syntax="xml">&lt;am-list :static=&quot;true&quot;&gt;
    &lt;am-list-item&gt;每个人都有一个死角， 自己走不出来，别人也闯不进去。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;我把最深沉的秘密放在那里。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;你不懂我，我不怪你。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;每个人都有一道伤口， 或深或浅，盖上布，以为不存在。&lt;/am-list-item&gt;
&lt;/am-list&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>边框</h2>
                <am-example>
                    <am-list :static="true" :border="true">
                        <am-list-item>每个人都有一个死角， 自己走不出来，别人也闯不进去。</am-list-item>
                        <am-list-item>我把最深沉的秘密放在那里。</am-list-item>
                        <am-list-item>你不懂我，我不怪你。</am-list-item>
                        <am-list-item>每个人都有一道伤口， 或深或浅，盖上布，以为不存在。</am-list-item>
                    </am-list>
                </am-example>
<am-code syntax="xml">&lt;am-list :static=&quot;true&quot; :border=&quot;true&quot;&gt;
    &lt;am-list-item&gt;每个人都有一个死角， 自己走不出来，别人也闯不进去。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;我把最深沉的秘密放在那里。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;你不懂我，我不怪你。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;每个人都有一道伤口， 或深或浅，盖上布，以为不存在。&lt;/am-list-item&gt;
&lt;/am-list&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>斑马线</h2>
                <am-example>
                    <am-list :static="true" :border="true" :striped="true">
                        <am-list-item>每个人都有一个死角， 自己走不出来，别人也闯不进去。</am-list-item>
                        <am-list-item>我把最深沉的秘密放在那里。</am-list-item>
                        <am-list-item>你不懂我，我不怪你。</am-list-item>
                        <am-list-item>每个人都有一道伤口， 或深或浅，盖上布，以为不存在。</am-list-item>
                    </am-list>
                </am-example>
<am-code syntax="xml">&lt;am-list :static=&quot;true&quot; :border=&quot;true&quot; :striped=&quot;true&quot;&gt;
    &lt;am-list-item&gt;每个人都有一个死角， 自己走不出来，别人也闯不进去。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;我把最深沉的秘密放在那里。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;你不懂我，我不怪你。&lt;/am-list-item&gt;
    &lt;am-list-item&gt;每个人都有一道伤口， 或深或浅，盖上布，以为不存在。&lt;/am-list-item&gt;
&lt;/am-list&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>结合 <am-doc-code>am-badge</am-doc-code></h2>
                <am-example>
                    <am-list :border="true" :striped="true">
                        <am-list-item><a href="#">每个人都有一个死角， 自己走不出来，别人也闯不进去。<am-badge>1</am-badge></a></am-list-item>
                        <am-list-item><a href="#">我把最深沉的秘密放在那里。<am-badge>1</am-badge></a></am-list-item>
                        <am-list-item><a href="#">你不懂我，我不怪你。<am-badge>1</am-badge></a></am-list-item>
                        <am-list-item><a href="#">每个人都有一道伤口， 或深或浅，盖上布，以为不存在。<am-badge>1</am-badge></a></am-list-item>
                    </am-list>
                </am-example>
<am-code syntax="xml">&lt;am-list :border=&quot;true&quot; :striped=&quot;true&quot;&gt;
    &lt;am-list-item&gt;&lt;a href=&quot;#&quot;&gt;每个人都有一个死角， 自己走不出来，别人也闯不进去。&lt;am-badge&gt;1&lt;/am-badge&gt;&lt;/a&gt;&lt;/am-list-item&gt;
    &lt;am-list-item&gt;&lt;a href=&quot;#&quot;&gt;我把最深沉的秘密放在那里。&lt;am-badge&gt;1&lt;/am-badge&gt;&lt;/a&gt;&lt;/am-list-item&gt;
    &lt;am-list-item&gt;&lt;a href=&quot;#&quot;&gt;你不懂我，我不怪你。&lt;am-badge&gt;1&lt;/am-badge&gt;&lt;/a&gt;&lt;/am-list-item&gt;
    &lt;am-list-item&gt;&lt;a href=&quot;#&quot;&gt;每个人都有一道伤口， 或深或浅，盖上布，以为不存在。&lt;am-badge&gt;1&lt;/am-badge&gt;&lt;/a&gt;&lt;/am-list-item&gt;
&lt;/am-list&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-list</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-list-item</am-doc-code></h2>
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
                    prop: 'static',
                    desc: '纯文本模式',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'border',
                    desc: '边框',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'striped',
                    desc: '斑马线',
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
                }]
            }
        }
    }
</script>