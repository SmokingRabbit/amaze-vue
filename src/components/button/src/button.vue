<template>
    <button :disabled="disabled" :class="computedClass">
        <slot v-if="!loading"></slot>
        <span v-if="loading">{{ loadingText }}</span>
    </button>
</template>

<script>
    export default {
        name: 'am-button',
        props: {
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
            },
            disabled: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
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
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: 'Loading……'
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-btn');
                classes.push('am-btn-' + this.color);

                if (this.round) {
                    classes.push('am-round');
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

                if (this.loading) {
                    classes.push('am-btn-loading');
                }

                if (this.disabled || this.loading) {
                    classes.push('am-disabled');
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
