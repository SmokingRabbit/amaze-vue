<template>
    <div :class="computedClass">
        <ul class="am-tabs-nav am-nav am-nav-tabs">
            <li
                v-for="panel,key in panels"
                :key="key"
                @click="key !== activeIndex && selectHandle(key)"
                :class="{'am-active': key === activeIndex}"
            >
                <a href="javascript:void(0);">
                    <template v-if="panel.label">{{ panel.label }}</template>
                    <template v-else>
                        <slot :name="key"></slot>
                    </template>
                </a>
                <close v-if="removeable" @click="removeHandle(key)"></close>
            </li>
        </ul>
        <div class="am-tabs-bd">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { Close } from '../../close';

    export default {
        name: 'am-tabs',
        data() {
            return {
                activeIndex: 0,
                panels: []
            };
        },
        props: {
            customClass: String,
            value: {},
            removeable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            selectHandle(index) {
                if (index === this.activeIndex) {
                    return ;
                }

                this.activeIndex = index;
                this.$emit('tab-click', this.panels[index].label || index);
            },
            removeHandle(index) {
                const panel = this.panels.splice(index, 1);
                panel.$el.remove();
                this.$emit('tab-remove', this.panels[index].label || index);
            },
            panelHandle(vNode) {
                if (this.panels.length === 0) {
                    vNode.show();
                }

                this.panels.push(vNode);

                if (vNode.active) {
                    this.selectHandle(this.panels.length - 1);
                }

                if (vNode.$slots.label) {
                    this.$slots[this.panels.length - 1] = vNode.$slots.label;
                }
            }
        },
        watch: {
            activeIndex(curVal, oldVal) {
                this.panels[oldVal].hide();
                this.panels[curVal].show();
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-tabs');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        components: {
            Close
        }
    }
</script>