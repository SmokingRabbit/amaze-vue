<template>
    <ul :class="computedClass">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'am-list',
        props: {
            customClass: {
                type: String
            },
            static: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-list');

                if (this.static) {
                    classes.push('am-list-static');
                }

                if (this.border) {
                    classes.push('am-list-border');
                }

                if (this.striped) {
                    classes.push('am-list-striped');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
