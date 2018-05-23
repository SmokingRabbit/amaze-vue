<template>
    <am-article>
        <am-article-header title="选项卡"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <ul class="am-doc-group">
                    <li><am-doc-code>am-tabs</am-doc-code> 选项卡容器</li>
                    <li><am-doc-code>am-tabs-panel</am-doc-code> 卡片容器</li>
                </ul>

                <am-example>
                    <am-tabs>
                        <am-tabs-panel label="最美">
                            <p>安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。</p>
                        </am-tabs-panel>
                        <am-tabs-panel label="尘世">
                            <p>我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。</p>
                        </am-tabs-panel>
                        <am-tabs-panel label="光阴">
                            <p>也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。</p>
                        </am-tabs-panel>
                    </am-tabs>
                </am-example>
<am-code syntax="xml">&lt;am-tabs&gt;
    &lt;am-tabs-panel label=&quot;最美&quot;&gt;
        &lt;p&gt;安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel label=&quot;尘世&quot;&gt;
        &lt;p&gt;我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel label=&quot;光阴&quot;&gt;
        &lt;p&gt;也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
&lt;/am-tabs&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>自定义tab按钮</h2>

                <am-example>
                    <am-tabs>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="cab"></am-icon> 最美</template>
                            <p>安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="car"></am-icon> 尘世</template>
                            <p>我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="truck"></am-icon> 光阴</template>
                            <p>也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。</p>
                        </am-tabs-panel>
                    </am-tabs>
                </am-example>
<am-code syntax="xml">&lt;am-tabs&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;cab&quot;&gt;&lt;/am-icon&gt; 最美&lt;/template&gt;
        &lt;p&gt;安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;car&quot;&gt;&lt;/am-icon&gt; 尘世&lt;/template&gt;
        &lt;p&gt;我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;truck&quot;&gt;&lt;/am-icon&gt; 光阴&lt;/template&gt;
        &lt;p&gt;也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
&lt;/am-tabs&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>tab按钮自适应宽度</h2>

                <am-example>
                    <am-tabs :justify="true">
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="cab"></am-icon> 最美</template>
                            <p>安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="car"></am-icon> 尘世</template>
                            <p>我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="truck"></am-icon> 光阴</template>
                            <p>也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。</p>
                        </am-tabs-panel>
                    </am-tabs>
                </am-example>
<am-code syntax="xml">&lt;am-tabs :justify=&quot;true&quot;&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;cab&quot;&gt;&lt;/am-icon&gt; 最美&lt;/template&gt;
        &lt;p&gt;安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;car&quot;&gt;&lt;/am-icon&gt; 尘世&lt;/template&gt;
        &lt;p&gt;我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;truck&quot;&gt;&lt;/am-icon&gt; 光阴&lt;/template&gt;
        &lt;p&gt;也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
&lt;/am-tabs&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>删除tab</h2>

                <am-example>
                    <am-tabs :justify="true" :removeable="true">
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="cab"></am-icon> 最美</template>
                            <p>安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="car"></am-icon> 尘世</template>
                            <p>我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。</p>
                        </am-tabs-panel>
                        <am-tabs-panel>
                            <template slot="label"><am-icon type="truck"></am-icon> 光阴</template>
                            <p>也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。</p>
                        </am-tabs-panel>
                    </am-tabs>
                </am-example>
<am-code syntax="xml">&lt;am-tabs :justify=&quot;true&quot; :removeable=&quot;true&quot;&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;cab&quot;&gt;&lt;/am-icon&gt; 最美&lt;/template&gt;
        &lt;p&gt;安静的时候，喜欢看花看树，看日子深深浅浅；听风听雨，听流年嘀嘀嗒嗒。似乎每一个触手可及的今朝，都是染了香味的静好。想来，这就是尘世的幸福吧。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;car&quot;&gt;&lt;/am-icon&gt; 尘世&lt;/template&gt;
        &lt;p&gt;我们都是行与尘世的旅者，而真正的旅行是回归于生命的本源，是将世俗纷扰渡成眉目的清朗。任岁月暖凉，我们在路上，藏着柔软，更藏着深爱，用最美的心情过着自己的日子。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
    &lt;am-tabs-panel&gt;
        &lt;template slot=&quot;label&quot;&gt;&lt;am-icon type=&quot;truck&quot;&gt;&lt;/am-icon&gt; 光阴&lt;/template&gt;
        &lt;p&gt;也许，光阴的故事总是镌刻着太多的相似，而我们要做的，就是将庸常过成不将就。坚定的走下去，贴着许多的温暖，用最美的心情过好自己的日子，不张扬，不对抗，只是默默的将时光深爱。&lt;/p&gt;
    &lt;/am-tabs-panel&gt;
&lt;/am-tabs&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-tabs</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>Props <am-doc-code>am-tabs-panel</am-doc-code></h2>
                <am-table :data="panelProps">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>事件 <am-doc-code>am-change</am-doc-code></h2>
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
                    prop: 'removeable',
                    desc: '删除选项卡',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }, {
                    prop: 'justify',
                    desc: '选项卡按钮自适应宽度',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                panelProps: [{
                    prop: 'custom-class',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'label',
                    desc: '对应按钮名称',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'active',
                    desc: '默认显示选项卡',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                events: [{
                    prop: 'tab-change',
                    trigger: '选项卡显示发生变化',
                    params: 'label || index'
                }]
            }
        }
    }
</script>