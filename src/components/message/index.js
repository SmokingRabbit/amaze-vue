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

        let distance = 16;
        instances[instance.placement].forEach((_ins) => {
            distance += _ins.$el.offsetHeight + 16;
        });
        if (instance.isTop) {
            instance.offsetTop = distance;
        }
        else {
            instance.offsetBottom = distance;
        }
        instance.show();
        instances[instance.placement].push(instance);

        instance.hide = function() {
            instance.visible = false;
            let index = -1;
            instances[this.placement].every((_ins, key) => {
                if (_ins.uid === this.uid) {
                    index = key;
                    return false;
                }
                return true;
            });
            if (index > -1) {
                let _distance = 16;
                instances[this.placement].splice(index, 1);
                instances[this.placement].forEach((_ins) => {
                    if (_ins.isTop) {
                        _ins.$el.style.top = _distance + 'px';
                    }
                    else {
                        _ins.$el.style.bottom = _distance + 'px';
                    }
                    _distance += _ins.$el.offsetHeight + 16;
                });
            }
        };

        return instance;
    };
};

export {
    Message
};
