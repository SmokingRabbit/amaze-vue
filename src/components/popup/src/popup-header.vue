<template>
    <div :class="computedClass">
        <h4 class="am-popup-title">{{ title }}</h4>
        <close v-if="closeable" @click="closeModal" customClass="am-close-spin"></close>
    </div>
</template>

<script>
    import { Close } from '../../close';

    export default {
        name: 'am-popup-header',
        props: {
            customClass: {
                type: String
            },
            closeable: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
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

                classes.push('am-popup-hd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            modal() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name !== 'am-popup') {
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
