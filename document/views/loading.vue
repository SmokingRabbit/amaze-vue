<template>
    <am-article>
        <am-article-header title="Loading"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <h2>局部使用</h2>

                <am-example>
                    <am-button @click="sectionLoading">局部loading-{{ loading ? '关闭' : '开启 '}}</am-button>
                    <div :style="{height: '300px', position: 'relative', background: '#eee', marginTop: '10px'}">
                        <h1 :style="{lineHeight: '300px', textAlign: 'center' ,color: '#bbb'}">这是一个待加载区域</h1>
                        <am-loading color="primary" :loading="loading"></am-loading>
                    </div>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;sectionLoading&quot;&gt;局部loading-{{ loading ? &#x27;关闭&#x27; : &#x27;开启 &#x27;}}&lt;/am-button&gt;
    &lt;div :style=&quot;{height: &#x27;300px&#x27;, position: &#x27;relative&#x27;, background: &#x27;#eee&#x27;, marginTop: &#x27;10px&#x27;}&quot;&gt;
        &lt;h1 :style=&quot;{lineHeight: &#x27;300px&#x27;, textAlign: &#x27;center&#x27; ,color: &#x27;#bbb&#x27;}&quot;&gt;这是一个待加载区域&lt;/h1&gt;
        &lt;am-loading color=&quot;primary&quot; :loading=&quot;loading&quot;&gt;&lt;/am-loading&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                lloading: false
            }
        },
        methods: {
            sectionLoading() {
                this.loading = !this.loading;
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>全局使用</h2>

                <am-example>
                    <am-button @click="globalLoading">全局loading</am-button>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-button @click=&quot;globalLoading&quot;&gt;全局loading&lt;/am-button&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                lloading: false
            }
        },
        methods: {
            globalLoading() {
                const _ins = this.$loading();

                setTimeout(() =&gt; {
                    _ins.close();
                }, 3000);
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>Props & Options <am-doc-code>am-change</am-doc-code></h2>
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
                    prop: 'loadingText',
                    desc: '加载文字',
                    type: 'String',
                    values: '-',
                    default: '正在加载……'
                }, {
                    prop: 'fullscreen',
                    desc: '全屏加载',
                    type: 'Boolean',
                    values: '-',
                    default: 'NULL'
                }, {
                    prop: 'color',
                    desc: 'laoding icon颜色',
                    type: 'String',
                    values: 'default, primary, secondary, success, warning, danger',
                    default: 'default'
                }, {
                    prop: 'loading',
                    desc: '显示loading',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                loading: false
            }
        },
        methods: {
            sectionLoading() {
                this.loading = !this.loading;
            },
            globalLoading() {
                const _ins = this.$loading();

                setTimeout(() => {
                    _ins.close();
                }, 3000);
            }
        }
    }
</script>