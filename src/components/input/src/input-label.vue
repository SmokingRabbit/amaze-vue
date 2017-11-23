<template>
    <span :class="computedClass">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'am-input-label',
        props: {
            customClass: {
                type: String
            },
            transparent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-input-group-label');

                if (this.transparent) {
                    classes.push('am-input-transparent-label');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
