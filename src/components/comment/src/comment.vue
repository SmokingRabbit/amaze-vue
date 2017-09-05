<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-comment',
        props: {
            customClass: {
                type: String
            },
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
            flip: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-comment');
                classes.push('am-comment-' + this.type);

                if (this.flip) {
                    classes.push('am-comment-flip');
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
    @import "./comment.less";
</style>
