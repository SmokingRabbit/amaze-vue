<template>
    <ul :class="computedClass">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'am-list',
        props: {
            customClass: {
                type: String
            },
            static: {
                type: Boolean,
                default: true
            },
            border: {
                type: Boolean,
                default: true
            },
            striped: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.join('am-list');

                if (this.static) {
                    classes.push('am-list-static');
                }

                if (this.border) {
                    classes.push('am-list-border');
                }

                if (this.striped) {
                    classes.push('am-list-striped');
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
    @import "./list.less";
</style>
