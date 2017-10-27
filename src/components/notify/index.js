import Vue from 'vue';
import NotifyComponent from './src/notify';

const _constructor = Vue.extend(NotifyComponent);

const Notify = (options) => {
    const instance = new _constructor({
        propsData: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.show();
};

export {
    Notify
};
