import * as dom from '../utils/dom';

let zIndex = 999;

export default {
    data() {
        return {
            visible: false,
            overlay: false,
            overlayClassName: 'am-dimmer',
            pageOffset: {
                top: 0,
                left: 0
            }
        }
    },
    methods: {
        show() {
            this.visible = true;
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
        },
        getPageOffset() {
            let top = 0;
            let left = 0;

            if(typeof window.pageYOffset != 'undefined'){
                top = window.pageYOffset;
                left = window.pageXOffset;
            }
            else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                top = document.documentElement.scrollTop;
                left = document.documentElement.scrollLeft;
            }
            else if(typeof document.body != 'undefined'){
                top = document.body.scrollTop;
                left = document.body.scrollLeft;
            }

            return { top, left };
        },
        autoGetPageOffset() {
            this.pageOffset = this.getPageOffset();
        }
    },
    watch: {
        visible(curVal, oldVal) {
            if (!this.overlay) {
                return ;
            }

            if (curVal) {
                this.$overlay = document.createElement('div');
                dom.addClass(this.$overlay, this.overlayClassName + ' am-active');
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
    created() {
        this.autoGetPageOffset();
        window.addEventListener('scroll', this.autoGetPageOffset, false);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.autoGetPageOffset);
        if (this.stopListener) {
            window.removeEventListener('mousewheel', this.stopScroll);
        }
    }
}
