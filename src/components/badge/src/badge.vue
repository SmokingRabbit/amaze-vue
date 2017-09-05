<template>
    <span :class="computedClass">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'am-badge',
        props: {
            type: {
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
            radiusType: {
                type: String,
                validator(value) {
                    return ['radius', 'round'].indexOf(value) > -1;
                }
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
                classes.push('am-badge');
                classes.push('am-badge-' + this.type);

                if (this.radiusType !== undefined) {
                    classes.push('am-' + this.radiusType);
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
    @import "./badge.less";
</style>
