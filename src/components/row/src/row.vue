<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-row',
        props: {
            customClass: String,
            fixed: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-g');

                if (this.fixed) {
                    classes.push('am-g-fixed');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>
