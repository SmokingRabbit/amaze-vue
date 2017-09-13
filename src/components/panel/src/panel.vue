<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-panel',
        props: {
            customClass: {
                type: String
            },
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].indexOf(value) > -1;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-panel');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                classes.push('am-panel-' + this.color);

                return classes.join(' ');
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./panel.less";
</style>
