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
    </section>
</template>

<script>

</script>

<style lang="less">
    .container {
        width: 980px;
        margin: 20px auto;
    }
</style>
