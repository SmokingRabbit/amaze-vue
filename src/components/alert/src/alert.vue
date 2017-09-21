<template>
    <modal v-bind="$props" :isShow.sync="syncSlot" ref="modal">
        <modal-header :closeBtn="false">{{ title }}</modal-header>
        <modal-body>
            <slot></slot>
        </modal-body>
        <modal-footer>
            <span class="am-modal-btn" @click="submitHandle">{{ submitBtnText }}</span>
        </modal-footer>
    </modal>
</template>

<script>
    import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../modal';

    export default {
        name: 'am-alert',
        data() {
            return {
                syncSlot: this.isShow
            };
        },
        props: {
            customClass: {
                type: String,
                default: 'am-modal-alert'
            },
            title: {
                type: String
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
                    ].indexOf(value) > -1;
                }
            }
        },
        methods: {
            submitHandle() {
                this.syncSlot = false;
                this.$emit('submit');
            },
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
