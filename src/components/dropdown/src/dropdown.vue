<template>
    <ul :class="computedClass" :style="computedStyle">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'am-dropdown',
        data() {
            return {
                visible: false
            }
        },
        props: {
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-dropdown-content');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.push(' ');
            },
            computedStyle() {
                return {}
            }
        },
        mounted() {

        }
    }
</script>
