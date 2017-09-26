<template>
    <i :class="computedClass"></i>
</template>

<script>
    export default {
        name: 'am-icon',
        props: {
            type: {
                type: String,
                required: true
            },
            customClass: {
                type: String
            },
            btn: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'md', 'lg'].indexOf(value) > -1;
                }
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
                    ].indexOf(value) > -1;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.btn) {
                    classes.push('am-icon-btn');
                }

                if (this.color !== undefined) {
                    classes.push('am-' + this.color);
                }

                if (this.type !== undefined) {
                    classes.push('am-icon-' + this.type);
                }

                if (this.size !== undefined) {
                    classes.push('am-icon-' + this.size);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>
