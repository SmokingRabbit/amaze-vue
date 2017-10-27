<template>
    <modal v-bind="$props" :isShow.sync="syncSlot" ref="modal">
        <!-- <modal-header :closeBtn="false">{{ message }}</modal-header> -->
        <modal-body>
            <animation type="spin">
                <icon type="spinner"></icon>
            </animation>
            {{ message }}
        </modal-body>
    </modal>
</template>

<script>
    import { Modal, ModalHeader, ModalBody } from '../../modal';
    import { Animation } from '../../animation';
    import { Icon } from '../../icon';

    export default {
        name: 'am-toast',
        data() {
            return {
                syncSlot: this.isShow
            };
        },
        props: {
            customClass: {
                type: String,
                default: 'am-modal-loading'
            },
            message: {
                type: String
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
                default: false
            },
            transition: {
                type: String,
                default: 'scale-up'
            },
            timeout: {
                type: Number,
                default: 0
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncSlot = curVal;
            },
            syncSlot(curVal, oldVal) {
                this.$emit('update:isShow', curVal);

                if (curVal && this.timeout > 0) {
                    this.timer = setTimeout(() => {
                        this.timer = null;
                        this.syncSlot = false;
                    }, this.timeout);
                }
                else {
                    if (this.timer !== null) {
                        clearTimeout(this.timer);
                    }
                }
            }
        },
        created() {
            this.timer = null;
        },
        components: {
            Modal,
            ModalHeader,
            ModalBody,
            Animation,
            Icon
        }
    }
</script>
