import NProgress from './src/nprogress';

NProgress.install = (Vue) => {
    const _constructor = Vue.extend(NProgress);
    let instance = new _constructor();
    instance = instance.$mount();
    document.body.appendChild(instance.$el);

    Vue.prototype.$nprogress = {
        start(options) {
            Object.assign(instance, options);
            instance.start();
        },

        end() {
            instance.end();
        }
    };
};

export {
    NProgress
};
