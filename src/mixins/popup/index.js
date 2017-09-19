import PopupManage from './popup-manage';

export default {
    data() {
        return {
            popupZIndex: 0,
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
            return PopupManage.getZIndex();
        }
    },
    mounted() {
        // todo overlay
    }
}
