<template>
    <li :class="computedClass">
        <router-link v-if="link && router" :to="link">
            <slot></slot>
        </router-link>
        <a :href="link" v-if="link && !router">
            <slot></slot>
        </a>
        <slot v-if="!link"></slot>
    </li>
</template>

<script>
    export default {
        name: 'am-nav-item',
        props: {
            customClass: String,
            header: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divider: {
                type: Boolean,
                default: false
            },
            router: {
                type: Boolean,
                default: true
            },
            to: {
                validator(value) {
                    return (typeof value === 'string') ||
                        (toString.call(value) === '[object Object]' && value.path);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.header) {
                    classes.push('am-nav-header');
                }

                if (this.active) {
                    classes.push('am-active');
                }

                if (this.disabled) {
                    classes.push('am-disabled');
                }

                if (this.divider) {
                    classes.push('am-nav-divider');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            link() {
                if (typeof this.to === 'string') {
                    return this.to;
                }
                else if (toString.call(this.to) === '[object Object]') {
                    let link = this.to.path;

                    if (this.to.params) {
                        for (let param in this.to.params) {
                            link += '/' + this.to.params[param];
                        }
                    }

                    if (this.to.query) {
                        let querys = [];
                        for (let property in this.to.query) {
                            querys.push(property + '=' + this.to.query[property]);
                        }
                        link += '?' + querys.join('&');
                    }

                    return link;
                }
                else {
                    return false;
                }
            }
        }
    };
</script>
