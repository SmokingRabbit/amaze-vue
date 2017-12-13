<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-panel-footer',
        props: {
            customClass: {
                type: String
            },
            transparent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-panel-footer');

                if (this.isTransparent) {
                    classes.push('am-panel-hd-transparent');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            isTransparent() {
                let parent = null;
                if (this.$parent.$options._componentTag === 'am-panel') {
                    parent = this.$parent;
                }
                if (parent) {
                    return parent.transparent || this.transparent;
                }

                return this.transparent;
            }
        }
    };
</script>
