<template>
    <transition :name="transition">
        <ul v-if="visible"
            :class="computedClass"
            @mouseenter="mouseenterHandle"
            @mouseleave="mouseleaveHandle"
            >
            <slot></slot>
        </ul>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-dropdown',
        mixins: [ Popup ],
        props: {
            customClass: {
                type: String
            },
            trigger: {
                type: String,
                default: 'focus',
                validator(value) {
                    return ['focus', 'click'].includes(value);
                }
            },
            fix: {
                type: Number,
                default: 0
            },
            placement: {
                type: String,
                default: 'bottom',
                validator(value) {
                    return ['top', 'bottom'].includes(value);
                }
            },
            delay: {
                type: Number,
                default: 100
            },
            transition: {
                type: String,
                default: 'fade'
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-dropdown-content');

                if (this.visible) {
                    classes.push('am-active');
                }

                if (this.placement === 'top') {
                    classes.push('am-dropdown-up ');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
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
            globalClickHandle() {
                if (this.visible) {
                    this.hide();
                }
            },
            delayHide() {
                if (this.timer !== null) {
                    clearTimeout(this.timer);
                }

                this.timer = setTimeout(this.hide, this.delay);
            },
            mouseleaveHandle() {
                if (this.trigger !== 'click') {
                    this.hide();
                }
            },
            mouseenterHandle() {
                if (this.trigger !== 'click') {
                    if (this.timer !== null) {
                        clearTimeout(this.timer);
                    }
                }
            },
            popupPosition() {
                const $dropdown = this.$el;
                const $reference = this.$refs['reference'];
                const { top, left, height } = $reference.getBoundingClientRect();
                const { height: selfHeight } = $dropdown.getBoundingClientRect();
                const ret = { zIndex: this.getZIndex() };

                ret['left'] = this.pageOffset.left + left + 'px';
                if (this.placement === 'top') {
                    ret['top'] = this.pageOffset.top + top - selfHeight - 9 - this.fix + 'px';
                }
                else {
                    ret['top'] = this.pageOffset.top + top + height + this.fix + 'px';
                }

                return ret;
            }
        },
        beforeDestroy() {
            document.body.removeChild(this.$el);
            const $reference = this.$refs['reference'];

            if (this.trigger === 'click') {
                off($reference, 'click', this.clickHandle);
                off(document.body, 'click', this.globalClickHandle);
            }
            else {
                off($reference, 'mouseenter', this.show);
                off($reference, 'mouseleave', this.delayHide);
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
            const $reference = this.$refs['reference'];

            if (this.trigger === 'click') {
                on($reference, 'click', this.clickHandle);
                on(document.body, 'click', this.globalClickHandle);
            }
            else {
                on($reference, 'mouseenter', this.show);
                on($reference, 'mouseleave', this.delayHide);
            }
        }
    };
</script>
