<template>
    <modal v-bind="$props" :isShow.sync="syncIsShow" customClass="am-modal-toast">
        <modal-body>
            <animation type="spin">
                <icon type="spinner" :color="iconColor"></icon>
            </animation>
            <span class="am-modal-toast-message">{{ message }}</span>
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
                syncIsShow: this.isShow
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
            delay: {
                type: Number,
                default: 0
            },
            iconColor: {
                type: String,
                default: 'primary'
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncIsShow = curVal;
            },
            syncIsShow(curVal, oldVal) {
                this.$emit('visible-change', curVal);

                if (curVal && this.delay > 0) {
                    this.timer = setTimeout(() => {
                        this.timer = null;
                        this.syncIsShow = false;
                    }, this.delay);
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
    };
</script>
