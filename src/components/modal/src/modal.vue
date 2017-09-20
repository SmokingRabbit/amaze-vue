<template>
    <transition :name="transition">
        <div :class="computedClass" ref="modal" v-if="visible"  @click="globalClickHandle">
            <div class="am-modal-dialog" :style="computedStyle" @click="dialogClickHandle">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';

    export default {
        name: 'am-modal',
        mixins: [ Popup ],
        props: {
            customClass: {
                type: String,
            },
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
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
                default: 'scale-up',
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
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                if (curVal) {
                    this.show();
                }
                else {
                    this.hide();
                }
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
            showHook() {
                this.$refs['modal'].style.zIndex = this.getZIndex();
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-modal');

                if (this.visible) {
                    classes.push('am-modal-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            computedStyle() {
                const styles = {};

                if (this.height !== 0) {
                    styles['height'] = this.height + 'px';
                }

                if (this.width !== 0) {
                    styles['width'] = this.width + 'px';
                }

                return styles;
            }
        },
        created() {
            this.overlay = true;
        },
        mounted() {
            document.body.appendChild(this.$el);
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./modal.less";
</style>
