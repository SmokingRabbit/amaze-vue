<template>
    <article :class="computedClass">
        <slot></slot>
    </article>
</template>

<script>
    export default {
        name: 'am-article',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-article');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>

