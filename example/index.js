import Vue from 'vue';
import App from './views/app';
import router from './router';
import Amazeui from '../src/index';
import './styles/main.less';

Vue.config.productionTip = false;
Vue.use(Amazeui);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
