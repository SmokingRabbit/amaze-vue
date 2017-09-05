<template>
    <img :src="src" :width="width" :height="height" :class="computedClass" />
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
            },
            height: {
                type: Number
            },
            width: {
                type: Number
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
    }
</script>
