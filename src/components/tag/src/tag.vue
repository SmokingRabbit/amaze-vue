<template>
    <transition :name="transition">
        <span :class="computedClass">
            <slot></slot>
            <am-close v-if="closeable" @click="closeHandle"></am-close>
        </span>
    </transition>
</template>

<script>
    import { Close } from '../../close';

    export default {
        name: 'am-tag',
        props: {
            customClass: String,
            transition: {
                type: String,
                default: 'fade'
            },
            closeable: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                validator(value) {
                    return [
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
                }
            }
        },
        methods: {
            closeHandle() {
                this.$emit('tag-remove');
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-tag');

                if (this.color !== undefined) {
                    classes.push('am-tag-' + this.color);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        components: {
            AmClose: Close
        }
    };
</script>
