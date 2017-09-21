<template>
    <section class="container">
        <!-- Button -->
        <am-button radiusType="radius" size="sm">测试</am-button>
        <!-- ButtonGroup -->
        <am-button-group size="xs" type="stacked">
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" :loading="true" size="sm">测试</am-button>
        </am-button-group>
        <!-- button icon -->
        <am-button><am-icon type="cog"></am-icon> 测试</am-button>
        <!-- icon -->
        <am-icon type="twitter" color="success" size="sm" :btn="true"></am-icon>
        <!-- 动画 -->
        <am-animation type="spin" :iterationCount="10" :delay="3"><am-icon type="cog"></am-icon></am-animation>
        <!-- badge -->
        <am-badge color="primary" :round="true">徽章</am-badge>
        <am-badge color="primary">徽章</am-badge>
        <!-- 面包屑 -->
        <am-breadcrumb :separator="true">
            <am-breadcrumb-item :to="'/'"><am-icon type="home"></am-icon>首页</am-breadcrumb-item>
            <am-breadcrumb-item>列表</am-breadcrumb-item>
            <am-breadcrumb-item>信息</am-breadcrumb-item>
        </am-breadcrumb>
        <!-- 关闭变扭 -->
        <am-close></am-close>
        <am-close :border="true"></am-close>
        <!-- 评论列表 -->
        <am-comment-list :flip="true">
            <am-comment>
                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
                <am-comment-content>
                    <am-comment-header>
                        <am-comment-header-meta>
                            <am-comment-author>某人</am-comment-author>
                        </am-comment-header-meta>
                        <am-comment-header-actions>
                            <a><am-icon type="pencil"></am-icon></a>
                        </am-comment-header-actions>
                    </am-comment-header>
                    <am-comment-body>
                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
                    </am-comment-body>
                </am-comment-content>
            </am-comment>
            <am-comment color="success" :flip="true">
                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
                <am-comment-content>
                    <am-comment-header>
                        <am-comment-header-meta>
                            <am-comment-author>某人</am-comment-author>
                        </am-comment-header-meta>
                        <am-comment-header-actions>
                            <a><am-icon type="pencil"></am-icon></a>
                        </am-comment-header-actions>
                    </am-comment-header>
                    <am-comment-body>
                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
                    </am-comment-body>
                </am-comment-content>
            </am-comment>
        </am-comment-list>
        <!-- 代码 -->
        <am-code :scrollable="true">
            window.addEventListener('load', function() {
                FastClick.attach(document.body);
            }, false);
        </am-code>
        <!-- 输入框 -->
        <am-input v-model="inputVal1" type="textarea" :disabled="false" :maxLen="5"></am-input>
        <am-input v-model="inputVal2" size="sm" type="text" :disabled="false" :maxLen="5">
            <am-input-label slot="prepend">帐 号：</am-input-label>
            <am-input-label slot="append"><am-icon type="twitter" color="success"></am-icon></am-input-label>
        </am-input>
        <!-- form -->
        <am-form title="表单" :horizontal="true">
            <am-input v-model="inputVal3" type="text" :block="true" :maxLen="5">
                <am-input-label slot="prepend" :transparent="true">帐 号</am-input-label>
            </am-input>
        </am-form>
        <!-- radio -->
        <section>
            <am-radio v-model="radioVal" label="1">测试1</am-radio>
            <am-radio v-model="radioVal" label="2">测试2</am-radio>
        </section>
        <section>
            <am-radio-group v-model="radioGroup">
                <am-radio label="1">测试1</am-radio>
                <am-radio label="2">测试2</am-radio>
                <am-radio label="3" color="danger">测试3</am-radio>
                <am-radio label="4">测试4</am-radio>
            </am-radio-group>
        </section>
        <!-- checkbox -->
        <section>
            <am-checkbox v-model="checkboxVal" label="1">测试1</am-checkbox>
            <am-checkbox v-model="checkboxVal" label="2">测试2</am-checkbox>
        </section>
        <section>
            <am-checkbox-group v-model="checkboxGroupVal" :disabled="false" :min="1" :max="2">
                <am-checkbox label="1">测试1</am-checkbox>
                <am-checkbox label="2">测试2</am-checkbox>
                <am-checkbox label="3" :disabled="true">测试3</am-checkbox>
                <am-checkbox label="4" color="success">测试4</am-checkbox>
            </am-checkbox-group>
        </section>
        <!-- popover -->
        <div>
            <am-popover ref="popover1" placement="right" trigger="click" color="danger">右面的提示框</am-popover>
            <am-button v-popover:popover1>单击</am-button>

            <am-popover ref="popover2" size="sm">上面的提示框</am-popover>
            <am-button v-popover:popover2>hover</am-button>

            <am-popover ref="popover3"  placement="left" size="sm">left的提示框</am-popover>
            <am-button v-popover:popover3>hover</am-button>

            <am-popover ref="popover4" placement="bottom" size="sm">bottom的提示框</am-popover>
            <am-button v-popover:popover4>hover</am-button>
        </div>
        <!-- alert -->
        <am-alert color="success" :closeBtn="true">
            <h3>共同渡过</h3>
            <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
                <ul>
                <li>若我可再活多一次都盼</li>
                <li>再可以在路途重逢着你</li>
                <li>共去写一生的句子</li>
                <li>若我可再活多一次千次</li>
                <li>我都盼面前仍是你</li>
                <li>我要他生都有今生的暖意</li>
            </ul>
        </am-alert>
        <!-- panel -->
        <am-panel :collapse="true">
            <am-panel-header title="panel标题"></am-panel-header>
            <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            <am-panel-footer>footer</am-panel-footer>
        </am-panel>
        <am-panel-group :collapse="true">
            <am-panel>
                <am-panel-header title="panel标题"></am-panel-header>
                <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            </am-panel>
            <am-panel>
                <am-panel-header title="panel标题"></am-panel-header>
                <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            </am-panel>
        </am-panel-group>
        <!-- dropdown -->
        <div>
            <am-dropdown ref="dropdown1" placement="bottom">
                <am-dropdown-item :header="true">标题</am-dropdown-item>
                <am-dropdown-item :active="true" @click="dropdownClick" value="bbb"><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item :disabled="true" @click="dropdownClick" value="ccc"><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item :divider="true"></am-dropdown-item>
                <am-dropdown-item><a>快乐的方式不只一种</a></am-dropdown-item>
            </am-dropdown>
            <am-button color="danger" v-dropdown:dropdown1>dropdown</am-button>
        </div>
        <!-- modal -->
        <div>
            <am-button @click="showModal">showModal</am-button>
            <am-modal :isShow.sync="modalVisible">
                <am-modal-header>标题</am-modal-header>
                <am-modal-body>
                    <h1>Modal 内容</h1>
                </am-modal-body>
                <am-modal-footer>
                    footer
                </am-modal-footer>
            </am-modal>
        </div>
        <!-- confirm -->
        <div>
            <am-button @click="showConfirm">showConfirm</am-button>
            <am-confirm :isShow.sync="confirmVisible" title="确认框" @cancel="cancelHandle">
                看看是不是需要你确认？
            </am-confirm>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                inputVal1: '',
                inputVal2: '',
                inputVal3: '',
                radioVal: '',
                radioGroup: '',
                checkboxVal: false,
                checkboxGroupVal: ['1'],
                modalVisible: false,
                confirmVisible: false
            };
        },
        watch: {
            inputVal1(cur, old) {
                console.log('inputVal1值：' + cur, old);
            },
            radioVal(cur, old) {
                console.log('radio选择:' + cur);
            }
        },
        methods: {
            dropdownClick(val) {
                console.log(val)
            },
            showModal() {
                this.modalVisible = true;
            },
            showConfirm() {
                this.confirmVisible = true;
            },
            cancelHandle() {
                console.log('取消了confirm')
            }
        }
    }
</script>

<style lang="less">
    .container {
        width: 980px;
        margin: 20px auto;

        padding-bottom: 50px;

        >div {
            margin-top: 20px;
        }
    }
</style>
