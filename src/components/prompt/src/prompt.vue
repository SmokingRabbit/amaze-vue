<template>
    <modal v-bind="$props" :isShow.sync="syncSlot" ref="modal">
        <modal-header :closeBtn="false">{{ title }}</modal-header>
        <modal-body>
            <slot></slot>
            <input type="text" class="am-modal-prompt-input" :value="curValue" @input="inputHandle">
        </modal-body>
        <modal-footer>
            <span class="am-modal-btn" @click="cancelHandle">{{ cancelBtnText }}</span>
            <span class="am-modal-btn" @click="confirmHandle">{{ submitBtnText }}</span>
        </modal-footer>
    </modal>
</template>

<script>
    import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../modal';

    export default {
        name: 'am-prompt',
        data() {
            return {
                curValue: this.value,
                syncSlot: this.isShow
            };
        },
        props: {
            customClass: {
                type: String,
                default: 'am-modal-propmt'
            },
            value: {
                type: [String, Number]
            },
            title: {
                type: String
            },
            cancelBtnText: {
                type: String,
                default: '取消'
            },
            submitBtnText: {
                type: String,
                default: '确定'
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
                    ].includes(value);
                }
            }
        },
        methods: {
            cancelHandle() {
                this.syncSlot = false;
                this.$emit('cancel');
            },
            confirmHandle() {
                this.syncSlot = false;
                this.$emit('submit');
            },
            inputHandle(e) {
                const value = e.target.value;
                this.$emit('input', value);
                this.curValue = value;
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncSlot = curVal;
            },
            syncSlot(curVal, oldVal) {
                this.$emit('update:isShow', curVal);
            }
        },
        components: {
            Modal,
            ModalHeader,
            ModalBody,
            ModalFooter
        }
    }
</script>
