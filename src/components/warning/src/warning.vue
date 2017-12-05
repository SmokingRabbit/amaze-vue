<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="isVisible">
            <button v-if="closeable" type="button" class="am-close" @click="closeHandle">&times;</button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'am-warning',
        data() {
            return {
                isVisible: this.visible
            };
        },
        props: {
            customClass: {
                type: String
            },
            color: {
                type: String,
                validator(value) {
                    return ['success', 'warning', 'danger', 'secondary'].includes(value);
                }
            },
            visible: {
                type: Boolean,
                default: true
            },
            closeable: {
                type: Boolean,
                default: true
            },
            transition: {
                type: String,
                default: 'fade'
            }
        },
        methods: {
            closeHandle() {
                this.isVisible = false;
            }
        },
        watch: {
            visible(curVal, oldVal) {
                this.isVisible = curVal;
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-alert');

                if (this.color !== undefined) {
                    classes.push('am-alert-' + this.color);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
