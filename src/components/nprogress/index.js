import NProgress from './src/nprogress';

NProgress.install = function (Vue) {
    let instance = null;

    function createInstance() {
        let Component = Vue.extend(NProgress);
        instance = new Component();
        instance = instance.$mount();
        document.body.appendChild(instance.$el);
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
