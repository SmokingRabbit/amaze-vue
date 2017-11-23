<template>
    <h1 :class="computedClass">
        <slot></slot>
    </h1>
</template>

<script>
    export default {
        name: 'am-topbar-brand',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-topbar-brand');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
