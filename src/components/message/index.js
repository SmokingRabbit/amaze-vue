import Message from './src/message';

Message.install = (Vue) => {
    const _constructor = Vue.extend(Message);
    const instances = [];

    Vue.prototype.$message = (propsData) => {
        let instance = new _constructor({ propsData });
        instance = instance.$mount();
        document.body.appendChild(instance.$el);
        // const isTop = instance.placement.indexOf('top') > -1;
        // let _ins = null;
        // instances.forEach((_ins) => {
        //     const rect = _ins.$el.getBoundingClientRect();
        //     if (isTop) {
        //         distance += rect.top;
        //     }
        //     else {

        //     }
        // });
        instance.show();

        return instance;
    }
}

export {
    Message
};