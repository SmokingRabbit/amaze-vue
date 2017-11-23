<template>
    <section :class="computedClass">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'am-container',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-container');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
