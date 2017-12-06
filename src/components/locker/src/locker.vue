<template>
    <transition v-if="visible" :name="transition">
        <div :class="computedClass" @click="clickHandle" ref="container">
            <div class="am-offcanvas-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-locker',
        mixins: [ Popup ],
        created() {
            this.overlayClassName = 'am-offcanvas';
            this.overlay = true;
        },
        data() {
            return {
                transition: 'locker-' + this.placement
            };
        },
        props: {
            placement: {
                type: String,
                default: 'left',
                validator(value) {
                    return ['left', 'right'].includes(value);
                }
            },
            customClass: {
                type: String
            },
            isShow: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            visible(curVal, oldVal) {
                this.$emit('visible-change', curVal);
            },
            isShow(curVal, oldVal) {
                if (curVal) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
        },
        updated() {
            if (this.visible) {
                this.$refs['container'].style.zIndex = this.getZIndex();
                setTimeout(() => {
                    on(document.body, 'click', this.gloablClickHandle);
                });
            }
            else {
                off(document.body, 'click', this.gloablClickHandle);
            }
        },
        methods: {
            clickHandle(e) {
                e.stopPropagation();
            },
            gloablClickHandle() {
                this.$emit('update:isShow', false);
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-offcanvas-bar');

                if (this.placement === 'right') {
                    classes.push('am-offcanvas-bar-flip');
                }

                if (this.visible) {
                    classes.push('am-offcanvas-bar-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
        }
    };
</script>
