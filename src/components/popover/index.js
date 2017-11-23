import Popover from './src/popover';

Popover.install = function (Vue, options) {
    Vue.directive('popover', {
        bind(el, binding, vnode, oldVnode) {
            vnode.context.$refs[binding.arg].$refs.reference = el;
        }
    });
};

export {
    Popover
};
