<template>
    <header :class="computedClass">
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name: 'am-topbar',
        props: {
            customClass: String,
            inverse: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: Boolean,
                default: false
            },
            placement: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom'].includes(value);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-topbar');

                if (this.inverse) {
                    classes.push('am-topbar-inverse');
                }

                if (this.fixed) {
                    classes.push('am-topbar-fixed-' + this.placement);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
