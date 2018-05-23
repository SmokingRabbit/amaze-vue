<template>
    <am-article>
        <am-article-header title="表单"></am-article-header>
        <am-article-body>
            <hr>
            <am-doc-section>
                <blockquote>
                    您可以根据您的实际使用情况使用<am-doc-code>am-input-group</am-doc-code>与<am-doc-code>am-form-group</am-doc-code>对字段进行自由组合
                </blockquote>
                <h2>基础用法</h2>
                <am-example>
                    <am-form>
                        <am-form-group>
                            <label>帐 号</label>
                            <am-input placeholder="请输入您的帐号"></am-input>
                        </am-form-group>
                        <am-form-group>
                            <label>密 码</label>
                            <am-input placeholder="请输入您的密码"></am-input>
                        </am-form-group>
                        <am-button>登录</am-button>
                    </am-form>
                </am-example>
<am-code syntax="xml">&lt;am-form&gt;
    &lt;am-form-group&gt;
        &lt;label&gt;帐 号&lt;/label&gt;
        &lt;am-input placeholder=&quot;请输入您的帐号&quot;&gt;&lt;/am-input&gt;
    &lt;/am-form-group&gt;
    &lt;am-form-group&gt;
        &lt;label&gt;密 码&lt;/label&gt;
        &lt;am-input placeholder=&quot;请输入您的密码&quot;&gt;&lt;/am-input&gt;
    &lt;/am-form-group&gt;
    &lt;am-button&gt;登录&lt;/am-button&gt;
&lt;/am-form&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>单行显示</h2>
                <am-example>
                    <am-form :inline="true">
                        <am-form-group>
                            <am-input placeholder="请输入您的帐号"></am-input>
                        </am-form-group>
                        <am-form-group>
                            <am-input placeholder="请输入您的密码"></am-input>
                        </am-form-group>
                        <am-button>登录</am-button>
                    </am-form>
                </am-example>
<am-code syntax="xml">&lt;am-form :inline=&quot;true&quot;&gt;
    &lt;am-form-group&gt;
        &lt;am-input placeholder=&quot;请输入您的帐号&quot;&gt;&lt;/am-input&gt;
    &lt;/am-form-group&gt;
    &lt;am-form-group&gt;
        &lt;am-input placeholder=&quot;请输入您的密码&quot;&gt;&lt;/am-input&gt;
    &lt;/am-form-group&gt;
    &lt;am-button&gt;登录&lt;/am-button&gt;
&lt;/am-form&gt;</am-code>
            </am-doc-section>

            <am-doc-section>
                <h2>表单验证、表单重置</h2>
                <am-example>
                    <am-form ref="form">
                        <am-form-group>
                            <label>帐 号</label>
                            <am-input :min-len="6" v-model="form.username" placeholder="请输入您的帐号"></am-input>
                        </am-form-group>
                        <am-form-group>
                            <label>密码</label>
                            <am-input :min-len="6" v-model="form.password" placeholder="请输入您的密码"></am-input>
                        </am-form-group>
                        <am-button color="primary" @click="validator">验证</am-button>
                        <am-button color="danger" @click="reset">重置</am-button>
                    </am-form>
                </am-example>
<am-code syntax="xml">&lt;template&gt;
    &lt;am-form ref=&quot;form&quot;&gt;
        &lt;am-form-group&gt;
            &lt;label&gt;帐 号&lt;/label&gt;
            &lt;am-input :min-len=&quot;6&quot; v-model=&quot;form.username&quot; placeholder=&quot;请输入您的帐号&quot;&gt;&lt;/am-input&gt;
        &lt;/am-form-group&gt;
        &lt;am-form-group&gt;
            &lt;label&gt;密码&lt;/label&gt;
            &lt;am-input :min-len=&quot;6&quot; v-model=&quot;form.password&quot; placeholder=&quot;请输入您的密码&quot;&gt;&lt;/am-input&gt;
        &lt;/am-form-group&gt;
        &lt;am-button color=&quot;primary&quot; @click=&quot;validator&quot;&gt;验证&lt;/am-button&gt;
        &lt;am-button color=&quot;danger&quot; @click=&quot;reset&quot;&gt;重置&lt;/am-button&gt;
    &lt;/am-form&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {
        data() {
            return {
                form: {
                    username: &#x27;&#x27;,
                    password: &#x27;&#x27;
                }
            }
        },
        methods: {
            validator() {
                this.$refs[&#x27;form&#x27;].validate();
            },
            reset() {
                this.$refs[&#x27;form&#x27;].resetFields();
            }
        }
    }
&lt;/script&gt;</am-code>
            </am-doc-section>


            <am-doc-section>
                <h2>Props <am-doc-code>am-form</am-doc-code></h2>
                <am-table :data="props">
                    <am-table-column label="参数" prop="prop"></am-table-column>
                    <am-table-column label="说明" prop="desc"></am-table-column>
                    <am-table-column label="类型" prop="type"></am-table-column>
                    <am-table-column label="可选值" prop="values"></am-table-column>
                    <am-table-column label="默认值" prop="default"></am-table-column>
                </am-table>
            </am-doc-section>

            <am-doc-section>
                <h2>方法 <am-doc-code>am-form</am-doc-code></h2>
                <am-table :data="methods">
                    <am-table-column label="方法名称" prop="prop"></am-table-column>
                    <am-table-column label="方法功能" prop="fun"></am-table-column>
                    <am-table-column label="参数" prop="params"></am-table-column>
                    <am-table-column label="返回值" prop="ret"></am-table-column>
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
                    prop: 'inline',
                    desc: '字段行内显示',
                    type: 'Boolean',
                    values: '-',
                    default: 'false'
                }],
                methods: [{
                    prop: 'validate',
                    fun: '表单验证',
                    params: '-',
                    ret: 'true | false'
                }, {
                    prop: 'resetFields',
                    fun: '重置表单',
                    params: '-',
                    ret: '-'
                }],
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            validator() {
                this.$refs['form'].validate();
            },
            reset() {
                this.$refs['form'].resetFields();
            }
        }
    }
</script>