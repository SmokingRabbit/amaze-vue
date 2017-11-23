<template>
    <button type="button" @click="clickHandle" :class="computedClass">&times;</button>
</template>

<script>
    export default {
        name: 'am-close',
        props: {
            border: {
                type: Boolean,
                default: false
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-close');

                if (this.border) {
                    classes.push('am-close-alt');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        methods: {
            clickHandle(e) {
                this.$emit('click', e);
            }
        }
    };
</script>
