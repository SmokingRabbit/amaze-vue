import Message from './src/message';

Message.install = (Vue) => {
    const _constructor = Vue.extend(Message);
    const instances = {
        'left-top': [], 
        'left-bottom': [], 
        'right-top': [], 
        'right-bottom': []
    };

    Vue.prototype.$message = (propsData) => {
        let instance = new _constructor({ propsData });
        instance = instance.$mount();
        document.body.appendChild(instance.$el);
        
        // show
        const isTop = instance.placement.indexOf('top') > -1;
        let offsetIns = null;
        instances[instance.placement].forEach((_ins) => {
            const rect = _ins.$el.getBoundingClientRect();
            if (_ins.placement === instance.placement) {
                if (isTop) {
                   offsetIns = _ins;
                }
                else {
                    offsetIns = _ins;
                    return false;
                }
            }
            return true;
        });
        if (offsetIns !== null) {
            const rect = offsetIns.$el.getBoundingClientRect();
            if (isTop) {
                instance.offsetTop = rect.top + rect.height + 16;
            }
            else {
                instance.offsetBottom = rect.top + 16;
            }
        }
        instance.show();
        instances[instance.placement].push(instance);

        // hide 劫持一下
        instance.hide = function() {
            instance.visible = false;
            console.log(this);
        }

        return instance;
    }
}

export {
    Message
};