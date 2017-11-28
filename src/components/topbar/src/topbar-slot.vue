<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-topbar-slot',
        props: {
            customClass: String,
            placement: {
                type: String,
                default: 'right',
                validator(value) {
                    return ['right', 'left'].includes(value);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-topbar-' + this.placement);

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>