import './styles/base.less';

import { Button, ButtonGroup } from './components/button';
import { Icon } from './components/icon';
import { Animation } from './components/animation';

const install = function (Vue) {
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Animation.name, Animation);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
