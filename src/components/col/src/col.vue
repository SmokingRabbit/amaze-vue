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
            type: {
                type: String,
                default: 'sm',
                validator(value) {
                    return ['sm', 'md', 'lg'].includes(value);
                }
            },
            end: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-u-' + this.type + '-' + this.span);

                if (this.end) {
                    classes.push('am-u-end');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>
