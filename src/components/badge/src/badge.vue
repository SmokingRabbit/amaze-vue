<template>
    <span :class="computedClass">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'am-badge',
        props: {
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
            round: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['xl', 'lg', 'sm', 'xs', 'block'].includes(value);
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

                if (this.color !== undefined) {
                    classes.push('am-badge-' + this.color);
                }

                if (this.round) {
                    classes.push('am-round');
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
    };
</script>
