<template>
    <div :class="computedClass">
        <slot name="default"></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-tabs-panel',
        data() {
            return {
                isActive: false
            }
        },
        props: {
            customClass: String,
            label: String,
            active: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-tab-panel');

                if (this.isActive) {
                    classes.push('am-active');
                    classes.push('am-in');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        methods: {
            show() {
                this.isActive = true;
            },
            hide() {
                this.isActive = false;
            }
        },
        mounted() {
            let parent = this.$parent;

            while(parent) {
                if (parent.$options._componentTag === 'am-tabs') {
                    parent.panelHandle(this);
                    break;
                }
                parent = parent.$parent;
            }
        }
    }
</script>