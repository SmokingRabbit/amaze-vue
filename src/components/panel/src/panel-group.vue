<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-panel-group',
        props: {
            customClass: {
                type: String
            },
            collapse: {
                type: Boolean,
                default: false
            },
            accordion: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-panel-group');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            if (this.collapse && !this.accordion) {
                let isFirst = false;

                this.$slots.default.forEach((vNode, index) => {
                    if (vNode.componentInstance && vNode.componentOptions.tag === 'am-panel') {
                        if (!isFirst) {
                            isFirst = true;
                        }
                        else {
                            vNode.componentInstance.close();
                        }
                    }
                });
            }
        }
    };
</script>
