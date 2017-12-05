<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="visible"  @click="globalClickHandle">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';

    export default {
        name: 'am-actions',
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
                }
                else {
                    this.hide();
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
            }
        },
        updated() {
            if (this.visible) {
                this.$el.style.zIndex = this.getZIndex();
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-modal-actions');

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
        }
    };
</script>
