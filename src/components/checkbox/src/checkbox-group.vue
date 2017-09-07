<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-checkbox-group',
        props: {
            value: {},
            customClass: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            min: {
                type: Number
            },
            max: {
                type: Number
            }
        },
        watch: {
            value(curVal, oldVal) {
                this.$emit('change', curVal);
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-checkbox-group');

                return classes.join(' ');
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";

    .@{ns}checkbox-group {
        display: inline-block;
        vertical-align: middle;
    }
</style>
