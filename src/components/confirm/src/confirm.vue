<template>
    <modal v-bind="$props" :isShow.sync="syncIsShow">
        <modal-header :closeable="false">{{ title }}</modal-header>
        <modal-body>
            <slot></slot>
        </modal-body>
        <modal-footer>
            <span class="am-modal-btn" @click="cancelHandle">{{ cancelBtnText }}</span>
            <span class="am-modal-btn" @click="confirmHandle">{{ confirmBtnText }}</span>
        </modal-footer>
    </modal>
</template>

<script>
    import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../modal';

    export default {
        name: 'am-confirm',
        data() {
            return {
                syncIsShow: this.isShow
            };
        },
        props: {
            customClass: {
                type: String,
                default: 'am-modal-confirm'
            },
            title: {
                type: String
            },
            cancelBtnText: {
                type: String,
                default: '取消'
            },
            confirmBtnText: {
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
                default: 'scale-up'
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncIsShow = curVal;
                this.$emit('visible-change', curVal);
            },
            syncIsShow(curVal, oldVal) {
                this.$emit('update:isShow', curVal);
            }
        },
        methods: {
            cancelHandle() {
                this.syncIsShow = false;
                this.$emit('cancel');
            },
            confirmHandle() {
                this.syncIsShow = false;
                this.$emit('confirm');
            }
        },
        components: {
            Modal,
            ModalHeader,
            ModalBody,
            ModalFooter
        }
    };
</script>
