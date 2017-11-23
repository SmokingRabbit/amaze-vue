<template>
    <div :class="computedClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-button-group',
        props: {
            type: {
                type: String,
                default: 'group',
                validator(value) {
                    return ['group', 'stacked', 'justify', 'toolbar'].includes(value);
                }
            },
            size: {
                type: String,
                validator(value) {
                    return ['lg', 'sm', 'xs'].includes(value);
                }
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.type !== 'group') {
                    classes.push('am-btn-group-' + this.type);
                }
                else {
                    classes.push('am-btn-group');
                }

                if (this.size !== undefined) {
                    classes.push('am-btn-group-' + this.size);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
