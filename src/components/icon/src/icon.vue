<template>
    <i :class="computedClass"></i>
</template>

<script>
    export default {
        name: 'am-icon',
        props: {
            type: {
                type: String
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.type !== undefined) {
                    classes.push('am-icon-' + this.type);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./icon.less";
</style>
