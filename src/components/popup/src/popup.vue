<template>
    <transition :name="transition">
        <div v-if="visible" :class="computedClass" @click="dialogClickHandle">
            <div class="am-popup-inner">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-popup',
        mixins: [ Popup ],
        props: {
            customClass: {
                type: String
            },
            isShow: {
                type: Boolean,
                default: false
            },
            closeViaDimmer: {
                type: Boolean,
                default: true
            },
            transition: {
                type: String,
                default: 'slide-down'
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                if (curVal) {
                    this.show();
                    setTimeout(() => {
                        on(document.body, 'click', this.globalClickHandle);
                    });
                }
                else {
                    this.hide();
                    off(document.body, 'click', this.globalClickHandle);
                }
                this.$emit('visible-change', curVal);
            }
        },
        methods: {
            dialogClickHandle(e) {
                e.stopPropagation();
            },
            globalClickHandle() {
                if (this.closeViaDimmer) {
                    this.$emit('update:isShow', false);
                }
            },
            popupPosition() {
                return {
                    zIndex: this.getZIndex()
                };
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-popup');

                if (this.visible) {
                    classes.push('am-modal-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        created() {
            this.overlay = true;
        },
        mounted() {
            document.body.appendChild(this.$el);
        },
        beforeDestroy() {
            off(document.body, 'click', this.globalClickHandle);
        }
    };
</script>
