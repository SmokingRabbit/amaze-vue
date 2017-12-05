<template>
    <div :class="computedClass">
        <slot></slot>
        <close v-if="closeBtn" @click="closeModal" customClass="am-close-spin"></close>
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
            closeBtn: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            closeModal() {
                this.modal.$emit('visible-change', false);
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
