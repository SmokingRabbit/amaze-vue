<template>
    <div :class="computedClass">
        <slot></slot>
        <a v-if="closeBtn" href="javascript: void(0)" @click="closeModal" class="am-close am-close-spin">&times;</a>
    </div>
</template>

<script>
    export default {
        name: 'am-modal-header',
        props: {
            customClass: {
                type: String,
            },
            closeBtn: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            closeModal() {
                this.modal.$emit('update:isShow', false);
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-modal-hd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            modal() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name !== 'am-modal') {
                        parent = parent.$parent;
                    }
                    else {
                        return parent;
                    }
                }
            },
        }
    }
</script>
