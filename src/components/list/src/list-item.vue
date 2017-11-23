<template>
    <li :class="computedClass">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'am-list-item',
        props: {
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
