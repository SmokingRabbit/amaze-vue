import { Close } from '../../close';

export default {
    name: 'am-tabs',
    data() {
        return {
            activeIndex: 0,
            panels: [],
            activePanel: 0
        };
    },
    props: {
        customClass: String,
        removeable: {
            type: Boolean,
            default: false
        },
        justify: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selectHandle(index, panel) {
            if (index === this.activeIndex) {
                return;
            }

            this.activeIndex = index;
            this.activePanel = panel._uid;
            this.$emit('tab-change', panel.label || index);
        },
        removeHandle(e, index) {
            const panel = this.panels.splice(index, 1)[0];
            this.$emit('tab-remove', panel.label || index);
            panel.$destroy();
            panel.$el.remove();

            if (index < this.activeIndex) {
                this.activeIndex -= 1;
            }

            e.stopPropagation();
        },
        panelHandle(vNode) {
            if (this.panels.length === 0) {
                this.activePanel = vNode._uid;
            }

            this.panels.push(vNode);

            if (vNode.active) {
                this.selectHandle(this.panels.length - 1, vNode);
            }

            if (vNode.$slots.label) {
                this.$slots[vNode._uid] = vNode.$slots.label;
            }
        }
    },
    render(h) {
        const { computedClass, $slots, panels, activeIndex, removeable, computedNavClass } = this;

        return (
            <div class={computedClass}>
                <ul class={computedNavClass}>
                    {
                        panels.map((panel, key) => {
                            return (
                                <li key={key} class={{'am-active': key === activeIndex}} on-click={e => this.selectHandle(key, panel)}>
                                    <a href="javascript:void(0);">{ panel.$slots.label || panel.label }</a>
                                    { removeable && key !== activeIndex && <close on-click={ev => this.removeHandle(ev, key)}></close>}
                                </li>
                            );
                        })
                    }
                </ul>
                <div class="am-tabs-bd">
                    { $slots.default }
                </div>
            </div>
        );
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
        },
        computedNavClass() {
            const classes = ['am-tabs-nav', 'am-nav', 'am-nav-tabs'];

            if (this.justify) {
                classes.push('am-nav-justify');
            }

            return classes.join(' ');
        }
    },
    components: {
        Close
    }
};
