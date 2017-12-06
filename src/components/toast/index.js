import Toast from './src/toast';

Toast.install = function (Vue, options) {
    let instance = null;
    let container = document.createElement('div');

    function createInstance() {
        let Component = Vue.component(Toast.name, Toast);
        instance = new Component({el: container});
        return instance;
    }

    Vue.prototype.$toast = {
        open(message = '', options = {delay: 2000}) {
            instance = instance || createInstance();
            instance.syncIsShow = true;
            Object.assign(instance, { message }, options);
        },

        close() {
            instance = instance || createInstance();
            instance.syncIsShow = false;
        }
    };
};

export {
    Toast
};
