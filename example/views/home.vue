<template>
    <section class="container">
        <!-- Button -->
        <am-button radiusType="radius" size="sm">测试</am-button>
        <!-- ButtonGroup -->
        <am-button-group size="xs" type="stacked">
            <am-button radiusType="radius" type="success" size="sm">测试</am-button>
            <am-button radiusType="radius" type="success" size="sm">测试</am-button>
            <am-button radiusType="radius" type="success" size="sm">测试</am-button>
        </am-button-group>
        <!-- button icon -->
        <am-button><am-icon type="cog"></am-icon> 测试</am-button>
        <!-- 动画 -->
        <am-animation type="spin" :iterationCount="10" :delay="3"><am-icon type="cog"></am-icon></am-animation>
        <!-- badge -->
        <am-badge type="primary" radiusType="round">徽章</am-badge>
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
            <am-comment type="success" :flip="true">
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
    </section>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {};
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .container {
        width: 980px;
        margin: 20px auto;
    }
</style>
