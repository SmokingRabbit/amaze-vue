<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="visible" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
            <div class="am-message-icon" v-if="iconType">
                <icon :type="iconType"></icon>
            </div>
            <div class="am-message-inner">
                <h2 class="am-message-title">{{ title }}</h2>
                <p class="am-message-content">{{ message }}</p>
            </div>
            <close v-if="close" @click="closeHandle"></close>
        </div>
    </transition>
</template>

<script>
    import { Icon } from '../../icon';
    import { Close } from '../../close';
    import Popup from '../../../mixins/popup';

    export default {
        name: 'am-message',
        data() {
            return {
                offsetTop: 0,
                offsetBottom: 0
            }
        },
        mixins: [ Popup ],
        props: {
            customClass: String,
            title: {
                type: [String, Object],
                required: true
            },
            message: {
                type: [String, Object],
                required: true
            },
            delay: {
                type: Number,
                default: 3000
            },
            close: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return ['default', 'success', 'warning', 'error'].includes(value);
                }
            },
            placement: {
                type: String,
                default: 'right-top',
                validator(value) {
                    return ['left-top', 'left-bottom', 'right-top', 'right-bottom'].includes(value);
                }
            },
            onClose: {
                type: Function
            }
        },
        methods: {
           closeHandle() {
                if (this.close) {
                    clearTimeout(this.timer);
                    this.hide();
                }
            },
            mouseEnter() {
                clearTimeout(this.timer);
            },
            mouseLeave() {
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
        updated() {
            if (this.visible) {
                this.$el.style.zIndex= this.getZIndex();
                if (this.placement.indexOf('top') > -1) {
                    this.$el.style.top = this.offsetTop + 'px';
                }
                else {
                    this.$el.style.bottom = this.offsetBottom + 'px';
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-message');
                classes.push('am-message-' + this.placement);
                if (this.type !== undefined) {
                    classes.push('am-message-' + this.type);
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
            },
            transition() {
                if (this.placement.indexOf('left') > -1) {
                    return 'message-left';
                }
                else {
                    return 'message-right';
                }
            }
        },
        components: {
            Close,
            Icon
        },
        mounted() {
            if (this.delay > 0) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, this.delay);
            }
        }
    }
</script>