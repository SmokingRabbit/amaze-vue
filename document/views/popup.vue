<template>
    <am-article>
        <am-article-header title="Popup"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-popup</am-doc-code> popup容器</li>
                    <li><am-doc-code>am-popup-header</am-doc-code> popup头部、标题</li>
                    <li><am-doc-code>am-popup-body</am-doc-code> popup正文</li>
                </ul>

                <am-example>
                    <am-button @click="showPopup">显示popup</am-button>
                    <am-popup :is-show.sync="popupVisible" close-via-dimmer>
                        <am-popup-header title="标题 - 女爵"></am-popup-header>
                        <am-popup-body>
                            <p>为你封了国境<br>为你赦了罪<br>为你撤了历史记载<br>为你涂了装扮<br>为你喝了醉<br>为你建了城池围墙<br>一颗热的心穿着冰冷外衣<br>一张白的脸漆上多少褪色的情节<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味<br>为你封了国境</p><p>为你赦了罪<br>为你撤了历史记载<br>一颗热的心<br>穿着冰冷外衣<br>一张白的脸<br>漆上多少褪色的情节<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味</p>
                        </am-popup-body>
                    </am-popup>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;showPopup&quot;&gt;显示popup&lt;/am-button&gt;
    &lt;am-popup :is-show.sync=&quot;popupVisible&quot;&gt;
        &lt;am-popup-header title=&quot;标题 - 女爵&quot;&gt;&lt;/am-popup-header&gt;
        &lt;am-popup-body&gt;
            &lt;p&gt;为你封了国境&lt;br&gt;为你赦了罪&lt;br&gt;为你撤了历史记载&lt;br&gt;为你涂了装扮&lt;br&gt;为你喝了醉&lt;br&gt;为你建了城池围墙&lt;br&gt;一颗热的心穿着冰冷外衣&lt;br&gt;一张白的脸漆上多少褪色的情节&lt;br&gt;在我的空虚身体里面&lt;br&gt;爱上哪个肤浅的王位&lt;br&gt;在你的空虚宝座里面&lt;br&gt;爱过什麽女爵的滋味&lt;br&gt;为你封了国境&lt;/p&gt;&lt;p&gt;为你赦了罪&lt;br&gt;为你撤了历史记载&lt;br&gt;一颗热的心&lt;br&gt;穿着冰冷外衣&lt;br&gt;一张白的脸&lt;br&gt;漆上多少褪色的情节&lt;br&gt;在我的空虚身体里面&lt;br&gt;爱上哪个肤浅的王位&lt;br&gt;在你的空虚宝座里面&lt;br&gt;爱过什麽女爵的滋味&lt;br&gt;在我的空虚身体里面&lt;br&gt;爱上哪个肤浅的王位&lt;br&gt;在你的空虚宝座里面&lt;br&gt;爱过什麽女爵的滋味&lt;/p&gt;
        &lt;/am-popup-body&gt;
    &lt;/am-popup&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                popupVisible: false
            }
        },
        methods: {
            showPopup() {
                this.popupVisible = true;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-popup</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-popup-header</am-doc-code></h2>
                <am-table :data="headerProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-popup-body</am-doc-code></h2>
                <am-table :data="bodyProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-popup</am-doc-code></h2>
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
                    prop: 'close-via-dimmer',
                    desc: '点击背景关闭',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }, {
                    prop: 'transition',
                    desc: '过度效果',
                    type: 'String',
                    values: '-',
                    default: 'scale-up'
                }, {
                    prop: 'is-show',
                    desc: '显示popup',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                bodyProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }],
                headerProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'title',
                    desc: '标题文字',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'closeable',
                    desc: '可关闭popup',
                    type: 'Boolean',
                    values: '-',
                    default: 'true'
                }],
                events: [{
                    prop: 'visible-change',
                    trigger: 'actions显示状态发生变化',
                    params: 'is-show'
                }],
                popupVisible: false
            }
        },
        methods: {
            showPopup() {
                this.popupVisible = true;
            }
        }
    }
</script>