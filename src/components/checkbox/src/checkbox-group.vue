<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-checkbox-group',
        props: {
            value: {},
            customClass: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            prop: String,
            min: {
                type: Number
            },
            max: {
                type: Number
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

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                classes.push('am-checkbox-group');

                return classes.join(' ');
            }
        }
    };
</script>
