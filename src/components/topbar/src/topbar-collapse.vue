<template>
    <div :class="computedClass">
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
            }
        },
        props: {
            customClass: String
        },
        methods: {
            autoFold() {
                this.unfold = !this.unfold;
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-topbar-collapse');
                classes.push('am-collapse');

                if (this.unfold) {
                    classes.push('am-in');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>
