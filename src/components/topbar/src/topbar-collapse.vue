<template>
    <div :class="computedClass" ref="container">
        <slot></slot>
    </div>
</template>

<script>
    import * as dom from '../../../utils/dom';
    export default {
        name: 'am-topbar-collapse',
        data() {
            return {
                unfold: false
            };
        },
        props: {
            customClass: String
        },
        methods: {
            autoFold() {
                this.unfold = !this.unfold;

                const $ref = this.$refs['container'];

                if (this.timer !== null) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }

                if (this.unfold) {
                    dom.addClass($ref, 'am-in am-collapsing');
                    dom.css($ref, 'height', $ref.scrollHeight + 'px');
                }
                else {
                    dom.removeAttr($ref, 'style');
                    this.timer = setTimeout(() => {
                        this.timer = null;
                        dom.removeClass($ref, ['am-in', 'am-collapsing']);
                    }, 300);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-topbar-collapse');
                classes.push('am-collapse');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
