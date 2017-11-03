<template>
    <table :class="computedClass">
        <slot></slot>
    </table>
</template>

<script>
    export default {
        name: 'am-table',
        props: {
            customClass: String,
            data: {
                type: Array
            },
            value: {
                type: Array
            },
            border: {
                type: Boolean,
                default: true
            },
            striped: {
                type: Boolean,
                default: true
            },
            hover: {
                type: Boolean,
                default: true
            },
            compact: {
                type: Boolean,
                default: false
            },
            nowrap: {
                type: Boolean,
                default: true
            },
            select: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-table');

                if (this.border) {
                    classes.push('am-table-bordered');
                }

                if (this.striped) {
                    classes.push('am-table-striped');
                }

                if (this.hover) {
                    classes.push('am-table-hover');
                }

                if (this.compact) {
                    classes.push('am-table-compact');
                }

                if (this.nowrap) {
                    classes.push('am-text-nowrap');
                }

                return classes.join(' ');
            }
        }
    }
</script>
