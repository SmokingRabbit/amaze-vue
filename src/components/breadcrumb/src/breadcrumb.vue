<template>
    <ol :class="computedClass">
        <slot></slot>
    </ol>
</template>

<script>
    export default {
        name: 'am-breadcrumb',
        props: {
            separator: {
                type: Boolean,
                default: false
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-breadcrumb');

                if (this.separator) {
                    classes.push('am-breadcrumb-slash');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
