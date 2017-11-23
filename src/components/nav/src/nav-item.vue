<template>
    <li :class="computedClass">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'am-nav-item',
        props: {
            customClass: String,
            header: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divider: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.header) {
                    classes.push('am-nav-header');
                }

                if (this.active) {
                    classes.push('am-active');
                }

                if (this.disabled) {
                    classes.push('am-disabled');
                }

                if (this.divider) {
                    classes.push('am-nav-divider');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
