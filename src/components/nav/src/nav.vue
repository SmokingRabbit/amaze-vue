<template>
    <ul :class="computedClass">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'am-nav',
        props: {
            customClass: String,
            pill: {
                type: Boolean,
                default: false
            },
            tab: {
                type: Boolean,
                default: false
            },
            justify: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-nav');

                if (this.pill) {
                    classes.push('am-nav-pills');
                }

                if (this.tab) {
                    classes.push('am-nav-tabs');
                }

                if (this.justify) {
                    classes.push('am-nav-justify');
                }

                return classes.join(' ');
            }
        }
    }
</script>
