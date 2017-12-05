<template>
    <transition name="notify">
        <div :class="computedClass" @mouseenter="mouseenter" @mouseleave="mouseleave" v-if="visible">
            <icon :type="iconType"></icon>
            <p class="am-notify-message">{{ message }}</p>
            <close v-if="closeable" @click="closeHandle"></close>
        </div>
    </transition>
</template>

<script>
    import { Icon } from '../../icon';
    import { Close } from '../../close';
    import Popup from '../../../mixins/popup';

    export default {
        name: 'am-notify',
        mixins: [ Popup ],
        props: {
            customClass: String,
            type: {
                type: String,
                default: 'default',
                validaor(value) {
                    return [
                        'default',
                        'success',
                        'warning',
                        'error'
                    ].includes(value);
                }
            },
            message: {
                type: [String, Object],
                required: true
            },
            closeable: {
                type: Boolean,
                default: false
            },
            delay: {
                type: Number,
                default: 3000
            },
            align: {
                type: String,
                default: 'left',
                validaor(value) {
                    return ['left', 'center'].includes(value);
                }
            },
            onClose: {
                type: Function
            }
        },
        methods: {
            closeHandle() {
                if (this.closeable) {
                    clearTimeout(this.timer);
                    this.hide();
                }
            },
            mouseenter() {
                clearTimeout(this.timer);
            },
            mouseleave() {
                if (this.delay > 0) {
                    this.timer = setTimeout(() => {
                        this.hide();
                    }, this.delay);
                }
            },
            destroy() {
                this.$el.removeEventListener('transitionend', this.destroy);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            popupPosition() {
                return {
                    zIndex: this.getZIndex()
                };
            }
        },
        watch: {
            visible(curVal, oldVal) {
                if (curVal) {
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
                else {
                    if (this.onClose) {
                        this.onClose.apply(this);
                    }
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-notify');
                classes.push('am-notify-' + this.type);
                classes.push('am-notify-' + this.align);

                if (this.visible) {
                    classes.push('am-notify-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            iconType() {
                const map = {
                    'default': 'info-circle',
                    'success': 'check-circle',
                    'warning': 'exclamation-circle',
                    'error': 'times-circle'
                };

                return map[this.type];
            }
        },
        components: {
            Icon,
            Close
        },
        mounted() {
            if (this.delay > 0) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, this.delay);
            }
        }
    };
</script>
