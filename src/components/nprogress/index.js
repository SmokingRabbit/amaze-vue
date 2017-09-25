import NProgress from './src/nprogress';

NProgress.install = function (Vue, options) {
    let instance = null;
    let container = document.createElement('div');

    function createInstance() {
        let Component = Vue.component(NProgress.name, NProgress);
        instance = new Component({el: container});
        return instance;
    }

    Vue.prototype.$nprogress = {
        start(options) {
            instance = instance || createInstance();
            Object.assign(instance, options);
            instance.start();
        },

        end() {
            instance = instance || createInstance();
            instance.end();
        }
    }
}

export {
    NProgress
};
