import Loading from './src/loading';

Loading.install = (Vue) => {
    const _constructor = Vue.extend(Loading);

    Vue.prototype.$loading = (propsData) => {
        propsData = Object.assign({}, propsData, {
            fullscreen: true,
            loading: true
        });
        let instance = new _constructor({ propsData });
        instance = instance.$mount();
        document.body.appendChild(instance.$el);
        instance.show();

        instance.close = function() {
            this.hide();
        };

        return instance;
    };
};

export {
    Loading
};
