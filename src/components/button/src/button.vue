<template>
    <button :disabled="disabled" :class="computedClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'am-button',
        props: {
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return ['default', 'primary', 'secondary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            borderRadius: {
                type: String,
                validator(value) {
                    return ['radius', 'round'].indexOf(value) > -1;
                }
            },
            isActive: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['xl', 'lg', 'sm', 'xs', 'block'].indexOf(value) > -1;
                }
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-btn');
                classes.push('am-btn-' + this.type);

                if (this.borderRadius !== undefined) {
                    classes.push('am-' + this.borderRadius);
                }

                if (this.isActive) {
                    classes.push('am-active');
                }

                if (this.size !== undefined) {
                    classes.push('am-btn-' + this.size);
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
    @import "./button.less";
</style>
