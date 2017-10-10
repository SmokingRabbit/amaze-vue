<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-radio-group',
        props: {
            value: {},
            customClass: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            value(curVal, oldVal) {
                this.$emit('change', curVal);
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-radio-group');

                return classes.join(' ');
            }
        }
    }
</script>
