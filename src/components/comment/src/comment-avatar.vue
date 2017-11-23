<template>
    <img :src="src" :class="computedClass" />
</template>

<script>
    export default {
        name: 'am-comment-avatar',
        props: {
            customClass: {
                type: String
            },
            src: {
                type: String,
                required: true
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-comment-avatar');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
