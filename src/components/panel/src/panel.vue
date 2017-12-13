<template>
    <div :class="computedClass" ref="container">
        <slot></slot>
    </div>
</template>

<script>
    import * as dom from '../../../utils/dom';

    export default {
        name: 'am-panel',
        data() {
            return {
                isOpen: true
            };
        },
        props: {
            customClass: {
                type: String
            },
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
                }
            },
            collapse: {
                type: Boolean,
                default: false
            },
            transparent: {
                type: Boolean,
                default: false
            },
            list: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isOpen(curVal, oldVal) {
                this.$emit('collapse-change', curVal);

                if (curVal && this.isGroup && !this.isAccordion) {
                    this.$parent.$children.forEach((vNode, index) => {
                        if (vNode.$options.name === 'am-panel' && vNode !== this) {
                            vNode.close();
                        }
                    });
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-panel');
                classes.push('am-panel-' + this.color);

                if (this.list) {
                    classes.push('am-panel-list');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name !== 'am-panel-group') {
                        parent = parent.$parent;
                    }
                    else {
                        this.panelGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            isCollapse() {
                if (this.isGroup) {
                    return this.panelGroup.collapse;
                }
                else {
                    return this.collapse;
                }
            },
            isAccordion() {
                if (this.isGroup) {
                    return this.panelGroup.accordion;
                }
                else {
                    return false;
                }
            }
        },
        methods: {
            collapseHandle() {
                if (!this.isOpen) {
                    this.open();
                }
                else {
                    if (this.isGroup && !this.isAccordion) {
                        return;
                    }

                    this.close();
                }
            },
            close() {
                dom.css(this.$refs['container'], {
                    height: this.panelHeaderEle.getBoundingClientRect().height + 'px'
                });
                this.isOpen = false;
            },
            open() {
                dom.css(this.$refs['container'], {
                    height: this.containerHeight + 'px'
                });
                this.isOpen = true;
            }
        },
        mounted() {
            if (this.isCollapse) {
                this.containerHeight = this.$el.getBoundingClientRect().height;
                dom.css(this.$el, {
                    height: this.containerHeight + 'px',
                    overflow: 'hidden'
                });
            }
        }
    };
</script>
