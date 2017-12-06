<template>
    <div :class="computedClass">
        <slot></slot>
        <close v-if="closeable" @click="closeModal" customClass="am-close-spin"></close>
    </div>
</template>

<script>
    import { Close } from '../../close';

    export default {
        name: 'am-modal-header',
        props: {
            customClass: {
                type: String
            },
            closeable: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            closeModal() {
                if (this.closeable) {
                    this.modal.$emit('update:isShow', false);
                }
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
            }
        },
        components: {
            Close
        }
    };
</script>
