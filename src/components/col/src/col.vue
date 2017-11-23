<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-col',
        props: {
            customClass: String,
            span: {
                type: Number,
                default: 12,
                validator(value) {
                    return value > 0 && value < 13;
                }
            },
            size: {
                type: String,
                default: 'sm',
                validator(value) {
                    return ['sm', 'md', 'lg'].includes(value);
                }
            },
            offset: Number,
            center: {
                type: Boolean,
                default: false
            },
            push: Number,
            pull: Number,
            end: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-u-' + this.size + '-' + this.span);

                if (this.offset) {
                    classes.push('am-u-' + this.size + '-offset-' + this.offset);
                }

                if (this.center) {
                    classes.push('am-u-' + this.size + '-centered');
                }

                if (this.push) {
                    classes.push('am-u-' + this.size + '-push-' + this.push);
                    classes.push('am-u-lg-reset-order');
                }

                if (this.pull) {
                    classes.push('am-u-' + this.size + '-pull-' + this.pull);
                    classes.push('am-u-lg-reset-order');
                }

                if (this.end) {
                    classes.push('am-u-end');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
