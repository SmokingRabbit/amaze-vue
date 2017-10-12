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
                        <slot :name="panel._uid"></slot>
                    </template>
                </a>
                <close v-if="removeable && key !== activeIndex" @click.native="removeHandle($event, key)"></close>
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
            removeHandle(e, index) {
                const panel = this.panels.splice(index, 1)[0];
                this.$emit('tab-remove', panel.label || index);
                panel.$destroy();
                panel.$el.remove();

                e.stopPropagation();
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
                    this.$slots[vNode._uid] = vNode.$slots.label;
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

                if (this.removeable) {
                    classes.push('am-tabs-removeable');
                }

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