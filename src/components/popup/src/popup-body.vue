<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-popup-body',
        props: {
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-popup-bd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
