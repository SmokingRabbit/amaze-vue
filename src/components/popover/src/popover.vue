<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="visible" ref="popover">
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
                    return ['focus', 'click'].indexOf(value) > -1;
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
                    return ['top', 'left', 'right', 'bottom'].indexOf(value) > -1;
                }
            },
            color: {
                type: String,
                validator(value) {
                    return ['primary', 'danger', 'warning'].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                }
            },
            transition: {
                type: String,
                default: 'fade'
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
            }
        },
        updated() {
            if (this.visible) {
                const $popover = this.$refs['popover'];
                const { top, left, width, height } = this.$refs['reference'].getBoundingClientRect();
                const { width: selfWidth, height: selfHeight } = $popover.getBoundingClientRect();

                $popover.style.zIndex = this.getZIndex();
                if (this.placement === 'top' || this.placement === 'bottom') {
                    $popover.style.left = left + this.pageOffset.left - (selfWidth - width) / 2 + 'px';

                    if (this.placement === 'top') {
                        $popover.style.top = this.pageOffset.top + top - selfHeight - this.fix + 'px';
                    }
                    else {
                        $popover.style.top = this.pageOffset.top + top + height + this.fix + 'px';
                    }
                }
                else {
                    $popover.style.top = this.pageOffset.top + top - (selfHeight - height) / 2 + 'px';

                    if (this.placement === 'left') {
                        $popover.style.left = left + this.pageOffset.left - this.fix - selfWidth + 'px';
                    }
                    else {
                        $popover.style.left = left + this.pageOffset.left + this.fix + width + 'px';
                    }
                }
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
    }
</script>
