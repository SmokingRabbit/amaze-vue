<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-article-body',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-article-bd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
