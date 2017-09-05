import './styles/base.less';

import { Button, ButtonGroup } from './components/button';
import { Icon } from './components/icon';
import { Animation } from './components/animation';
import { Badge } from './components/badge';
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb';
import { Close } from './components/close';

const install = function (Vue) {
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Animation.name, Animation);
    Vue.component(Badge.name, Badge);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.component(Close.name, Close);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
