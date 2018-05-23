<template>
    <am-article>
        <am-article-header title="加载进度条"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>基础用法</h2>

                <am-example>
                    <am-button @click="nprogressHandle">nprogress-{{ this.nprogress ? 'end' : 'start' }}</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;nprogressHandle&quot;&gt;nprogress-{{ this.nprogress ? &#x27;end&#x27; : &#x27;start&#x27; }}&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                nprogress: false
            };
        },
        methods: {
            nprogressHandle() {
                if (this.nprogress) {
                    this.$nprogress.end();
                    this.nprogress = false;
                }
                else {
                    this.$nprogress.start({
                        minimum: Math.random(),
                        loading: true
                    });
                    this.nprogress = true;
                }
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-nprogress</am-doc-code></h2>
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
                    prop: 'customClass',
                    desc: '自定义className',
                    type: 'String',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'speed',
                    desc: '速度',
                    type: 'Number',
                    values: '-',
                    default: '200'
                }, {
                    prop: 'minimum',
                    desc: '初始进度',
                    type: 'Number',
                    values: '-',
                    default: '0.08'
                }, {
                    prop: 'inc',
                    desc: '进度增长',
                    type: 'Number',
                    values: '-',
                    default: '0'
                }, {
                    prop: 'effect',
                    desc: '动画效果',
                    type: 'String',
                    values: '-',
                    default: 'linear'
                }, {
                    prop: 'loading',
                    desc: 'loading动画',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                nprogress: false
            }
        },
        methods: {
            nprogressHandle() {
                if (this.nprogress) {
                    this.$nprogress.end();
                    this.nprogress = false;
                }
                else {
                    this.$nprogress.start({
                        minimum: Math.random(),
                        loading: true
                    });
                    this.nprogress = true;
                }
            }
        }
    }
</script>