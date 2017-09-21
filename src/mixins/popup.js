import * as dom from '../utils/dom';

let zIndex = 999;

export default {
    data() {
        return {
            visible: false,
            overlay: false
        }
    },
    methods: {
        show() {
            this.visible = true;

            if (typeof this.showHook === 'function') {
                setTimeout(() => {
                    this.showHook();
                });
            }
        },
        hide() {
            this.visible = false;
        },
        getZIndex() {
            zIndex++;
            return zIndex;
        },
        stopScroll(e) {
            if (e && e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }
            else{
                e.returnvalue=false;
                return false;
            }
        }
    },
    watch: {
        visible(curVal, oldVal) {
            if (!this.overlay) {
                return ;
            }

            if (curVal) {
                this.$overlay = document.createElement('div');
                dom.addClass(this.$overlay, 'am-dimmer am-active');
                dom.css(this.$overlay, {zIndex: this.getZIndex()});
                document.body.appendChild(this.$overlay);
                this.stopListener = true;
                window.addEventListener('mousewheel', this.stopScroll);
            }
            else {
                setTimeout(() => {
                    document.body.removeChild(this.$overlay);
                    this.stopListener = false;
                    window.removeEventListener('mousewheel', this.stopScroll);
                }, 300);
            }
        }
    },
    beforeDestroy() {
        if (this.stopListener) {
            window.removeEventListener('mousewheel', this.stopScroll);
        }
    }
}
