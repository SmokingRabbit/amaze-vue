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
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-input-group-label');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>
