<template>
    <p :class="computedClass"><slot></slot></p>
</template>

<script>
    export default {
        name: 'am-article-lead',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-article-lead');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
