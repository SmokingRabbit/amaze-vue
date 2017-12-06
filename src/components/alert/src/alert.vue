<template>
    <modal v-bind="$props" :isShow.sync="syncIsShow">
        <modal-header :closeable="false">{{ title }}</modal-header>
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
                syncIsShow: this.isShow
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
                default: 'scale-up'
            }
        },
        methods: {
            submitHandle() {
                this.syncIsShow = false;
                this.$emit('submit');
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
        components: {
            Modal,
            ModalHeader,
            ModalBody,
            ModalFooter
        }
    };
</script>
