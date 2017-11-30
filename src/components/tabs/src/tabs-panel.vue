<template>
    <div :class="computedClass">
        <slot name="default"></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-tabs-panel',
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

                if (this.$parent.activePanel === this._uid) {
                    classes.push('am-active');
                    classes.push('am-in');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            let parent = this.$parent;

            while (parent) {
                if (parent.$options._componentTag === 'am-tabs') {
                    parent.panelHandle(this);
                    break;
                }
                parent = parent.$parent;
            }
        }
    };
</script>
