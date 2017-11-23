<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-topbar-form',
        props: {
            customClass: String,
            placement: {
                type: String,
                default: 'left',
                validator(value) {
                    return ['left', 'right'].includes(value);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-topbar-form');
                classes.push('am-form-inline');
                classes.push('am-topbar-' + this.placement);

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
