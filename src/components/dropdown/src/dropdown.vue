<template>
    <transition :name="transition" >
        <ul v-if="visible"
            ref="dropdown"
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
                    return ['focus', 'click'].indexOf(value) > -1;
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
                    return ['top', 'bottom'].indexOf(value) > -1;
                }
            },
            delay: {
                type: Number,
                default: 100
            },
            transition: {
                type: String,
                default: 'fade',
                validator(value) {
                    return [
                        'fade',
                        'jump',
                        'long',
                        'scale-up',
                        'scale-down',
                        'slide-left',
                        'slide-right'
                    ].indexOf(value) > -1;
                }
            },
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
            showHook() {
                const $dropdown = this.$refs['dropdown'];
                const $reference = this.$refs['reference'];

                const { top, left, height } = $reference.getBoundingClientRect();
                const { height: selfHeight } = $dropdown.getBoundingClientRect();

                $dropdown.style.zIndex = this.getZIndex();
                $dropdown.style.left = document.body.scrollLeft + left + 'px';

                if (this.placement == 'top') {
                    $dropdown.style.top = document.body.scrollTop + top - selfHeight - 28 - this.fix + 'px';
                }
                else {
                    $dropdown.style.top = document.body.scrollTop + top + height - 19 + this.fix + 'px';
                }
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
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./dropdown.less";
</style>
