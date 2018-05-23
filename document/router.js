import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router =  new VueRouter({
    routes: [
        { path: '/', component: require('./views/home.vue') },

        { path: '/utility', component: require('./views/utility.vue') },
        { path: '/container', component: require('./views/container.vue') },
        { path: '/grid', component: require('./views/grid.vue') },
        { path: '/color', component: require('./views/color.vue') },
        { path: '/icon', component: require('./views/icon.vue') },

        { path: '/button', component: require('./views/button.vue') },
        { path: '/close', component: require('./views/close.vue') },
        { path: '/badge', component: require('./views/badge.vue') },
        { path: '/image', component: require('./views/image.vue') },
        { path: '/panel', component: require('./views/panel.vue') },
        { path: '/article', component: require('./views/article.vue') },
        { path: '/comment', component: require('./views/comment.vue') },
        { path: '/code', component: require('./views/code.vue') },
        { path: '/slider', component: require('./views/slider.vue') },
        { path: '/scrollbar', component: require('./views/scrollbar.vue') },

        { path: '/animation', component: require('./views/animation.vue') },
        { path: '/transition', component: require('./views/transition.vue') },

        { path: '/input', component: require('./views/input.vue') },
        { path: '/radio', component: require('./views/radio.vue') },
        { path: '/checkbox', component: require('./views/checkbox.vue') },
        { path: '/switch', component: require('./views/switch.vue') },
        { path: '/datepicker', component: require('./views/datepicker.vue') },
        { path: '/timepicker', component: require('./views/timepicker.vue') },
        { path: '/select', component: require('./views/select.vue') },
        { path: '/dropdown', component: require('./views/dropdown.vue') },
        { path: '/form', component: require('./views/form.vue') },

        { path: '/tag', component: require('./views/tag.vue') },
        { path: '/table', component: require('./views/table.vue') },
        { path: '/list', component: require('./views/list.vue') },
        { path: '/pagination', component: require('./views/pagination.vue') },

        { path: '/breadcrumb', component: require('./views/breadcrumb.vue') },
        { path: '/nav', component: require('./views/nav.vue') },
        { path: '/topbar', component: require('./views/topbar.vue') },
        { path: '/tabs', component: require('./views/tabs.vue') },

        { path: '/progress', component: require('./views/progress.vue') },
        { path: '/nprogress', component: require('./views/nprogress.vue') },

        { path: '/warning', component: require('./views/warning.vue') },
        { path: '/notify', component: require('./views/notify.vue') },
        { path: '/message', component: require('./views/message.vue') },

        { path: '/modal', component: require('./views/modal.vue') },
        { path: '/alert', component: require('./views/alert.vue') },
        { path: '/confirm', component: require('./views/confirm.vue') },
        { path: '/prompt', component: require('./views/prompt.vue') },
        { path: '/toast', component: require('./views/toast.vue') },
        { path: '/actions', component: require('./views/actions.vue') },
        { path: '/popup', component: require('./views/popup.vue') },
        { path: '/locker', component: require('./views/locker.vue') },
        { path: '/popover', component: require('./views/popover.vue') },
        { path: '/loading', component: require('./views/loading.vue') },

        { path: '*', component: require('./views/empty.vue')}
    ]
});


export default router;
