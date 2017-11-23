import Dropdown from './src/dropdown';
import DropdownItem from './src/dropdown-item';

Dropdown.install = function (Vue, options) {
    Vue.directive('dropdown', {
        bind(el, binding, vnode, oldVnode) {
            vnode.context.$refs[binding.arg].$refs.reference = el;
        }
    });
};

export {
    Dropdown,
    DropdownItem
};
