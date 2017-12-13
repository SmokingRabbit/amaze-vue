<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="visible">
            <span class="am-popover-caret"></span>
            <div class="am-popover-inner"><slot></slot></div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-popover',
        mixins: [ Popup ],
        props: {
            trigger: {
                type: String,
                default: 'focus',
                validator(value) {
                    return ['focus', 'click'].includes(value);
                }
            },
            fix: {
                type: Number,
                default: 10
            },
            placement: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'left', 'right', 'bottom'].includes(value);
                }
            },
            color: {
                type: String,
                validator(value) {
                    return ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value);
                }
            },
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].includes(value);
                }
            },
            transition: {
                type: String,
                default: 'scale-up'
            },
            customClass: {
                type: String
            }
        },
        watch: {
            visible(curVal, oldVal) {
                this.$emit('visible.change', curVal);
            }
        },
        methods: {
            clickHandle(e) {
                if (this.visible) {
                    this.hide();
                }
                else {
                    this.show();
                }

                e.stopPropagation();
            },
            globalClickHandle(e) {
                if (this.visible && !this.$el.contains(e.target)) {
                    this.hide();
                }
            },
            popupPosition() {
                const $popover = this.$el;
                const { top, left, width, height } = this.$refs['reference'].getBoundingClientRect();
                const { width: selfWidth, height: selfHeight } = $popover.getBoundingClientRect();
                const { top: offsetTop, left: offsetLeft } = this.getPageOffset();
                const ret = { zIndex: this.getZIndex() };

                if (this.placement === 'top' || this.placement === 'bottom') {
                    ret['left'] = left + offsetLeft - (selfWidth - width) / 2 + 'px';
                    if (this.placement === 'top') {
                        ret['top'] = offsetTop + top - selfHeight - this.fix + 'px';
                    }
                    else {
                        ret['top'] = offsetTop + top + height + this.fix + 'px';
                    }
                }
                else {
                    ret['top'] = offsetTop + top - (selfHeight - height) / 2 + 'px';
                    if (this.placement === 'left') {
                        ret['left'] = left + offsetLeft - this.fix - selfWidth + 'px';
                    }
                    else {
                        ret['left'] = left + offsetLeft + this.fix + width + 'px';
                    }
                }

                return ret;
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-popover');

                if (this.visible) {
                    classes.push('am-active');
                }

                classes.push('am-popover-' + this.placement);

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                if (this.color !== undefined) {
                    classes.push('am-popover-' + this.color);
                }

                if (this.size !== undefined) {
                    classes.push('am-popover-' + this.size);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
            const $reference = this.$refs['reference'];

            if (this.trigger === 'focus') {
                on($reference, 'mouseenter', this.show);
                on($reference, 'mouseleave', this.hide);
            }
            else {
                on($reference, 'click', this.clickHandle);
                on(document.body, 'click', this.globalClickHandle);
            }
        },
        beforeDestroy() {
            document.body.removeChild(this.$el);
            const $reference = this.$refs['reference'];
            if (this.trigger === 'focus') {
                off($reference, 'mouseenter', this.show);
                off($reference, 'mouseleave', this.hide);
            }
            else {
                off($reference, 'click', this.clickHandle);
                off(document.body, 'click', this.globalClickHandle);
            }
        }
    };
</script>
