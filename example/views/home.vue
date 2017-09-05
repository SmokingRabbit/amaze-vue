<template>
    <section class="container">
        <!-- Button -->
        <am-button borderRadius="radius" size="sm">测试</am-button>
        <!-- ButtonGroup -->
        <am-button-group size="xs" type="stacked">
            <am-button borderRadius="radius" type="success" size="sm">测试</am-button>
            <am-button borderRadius="radius" type="success" size="sm">测试</am-button>
            <am-button borderRadius="radius" type="success" size="sm">测试</am-button>
        </am-button-group>
        <!-- button icon -->
        <am-button><am-icon type="cog"></am-icon> 测试</am-button>
        <!-- 动画 -->
        <am-animation></am-animation>
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
