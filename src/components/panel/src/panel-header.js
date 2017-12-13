
import { Icon } from '../../icon/';

export default {
    name: 'am-panel-header',
    props: {
        customClass: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        titleLevel: {
            type: Number,
            default: 4,
            validator(value) {
                return value <= 6 && value > 0;
            }
        },
        transparent: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedClass() {
            const classes = [];

            classes.push('am-panel-hd');

            if (this.isCollapse && !(this.isOpen && this.parent.isGroup && !this.parent.isAccordion)) {
                classes.push('am-panel-hd-collapse');
            }

            if (this.isTransparent) {
                classes.push('am-panel-hd-transparent');
            }

            if (this.customClass !== undefined) {
                classes.push(this.customClass);
            }

            return classes.join(' ');
        },
        parent() {
            if (this.$parent.$options._componentTag === 'am-panel') {
                return this.$parent;
            }
            return null;
        },
        isCollapse() {
            if (this.parent) {
                return this.$parent.isCollapse;
            }

            return false;
        },
        isOpen() {
            if (this.parent) {
                return this.parent.isOpen;
            }

            return false;
        },
        isTransparent() {
            if (this.parent) {
                return this.parent.transparent || this.transparent;
            }

            return this.transparent;
        }
    },
    components: {
        Icon
    },
    mounted() {
        if (this.isCollapse) {
            this.parent.panelHeaderEle = this.$el;
        }
    },
    render(h) {
        const { computedClass, title, titleLevel, isCollapse, isOpen, parent } = this;
        const titleEle = h('h' + titleLevel, { class: 'am-panel-title' }, title);

        return (
            <div class={computedClass} on-click={parent && this.parent.collapseHandle}>
                { titleEle }
                { isCollapse && <icon type="caret-up" customClass={isOpen ? 'am-rotate-down' : undefined}></icon>}
            </div>
        );
    }
};
