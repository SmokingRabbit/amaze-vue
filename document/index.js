import Vue from 'vue';
import App from './App';
import router from './router';
import AmazeVue from '../src';
import AmDocSection from './components/section';
import AmExample from './components/example';
import AmDocCode from './components/code';

Vue.use(AmazeVue);
Vue.component(AmDocSection.name, AmDocSection);
Vue.component(AmExample.name, AmExample);
Vue.component(AmDocCode.name, AmDocCode);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
