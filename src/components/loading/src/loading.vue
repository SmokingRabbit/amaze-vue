<template>
    <transition name="fade">
        <div :class="computedClass" v-if="visible">
            <div class="am-loading-spinner">
                <am-animation type="spin">
                    <am-icon type="spinner"></am-icon>
                </am-animation>
                <span class="am-loading-text">{{ loadingText }}</span>
            </div>
        </div>
    </transition>
</template>
<script>
    import { Animation } from '../../animation';
    import { Icon } from '../../icon';
    import Popup from '../../../mixins/popup';
    export default {
        name: 'am-loading',
        mixins: [ Popup ],
        props: {
            customClass: String,
            loadingText: {
                type: String,
                default: '正在加载……'
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return ['default', 'success', 'primary', 'warning', 'danger', 'secondary'].includes(value);
                }
            },
            loading: {
                type: Boolean,
                default: false,
                required: true
            }
        },
        updated() {
            if (this.visible) {
                this.$el.style.zIndex = this.getZIndex();
            }
        },
        watch: {
            loading(curVal, oldVal) {
                if (curVal) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-loading');
                classes.push('am-loading-' + this.color);
                if (this.fullscreen) {
                    classes.push('am-loading-fullscreen');
                }
                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }
                return classes.join(' ');
            }
        },
        components: {
            AmAnimation: Animation,
            AmIcon: Icon
        }
    };
</script>
