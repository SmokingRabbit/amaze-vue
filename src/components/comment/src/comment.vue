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
            color: {
                type: String,
                validator(value) {
                    return [
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
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

                if (this.color !== undefined) {
                    classes.push('am-comment-' + this.color);
                }

                if (this.flip) {
                    classes.push('am-comment-flip');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
