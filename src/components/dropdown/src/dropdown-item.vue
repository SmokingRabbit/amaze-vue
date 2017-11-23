<template>
    <li :class="computedClass" @click="clickHandle">
        <slot v-if="!divider"></slot>
    </li>
</template>

<script>
    export default {
        name: 'am-dropdown-item',
        props: {
            customClass: {
                type: String
            },
            active: {
                type: Boolean,
                default: false
            },
            header: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divider: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Number, String]
            }
        },
        methods: {
            clickHandle() {
                if (!this.disabled && !this.active) {
                    this.$emit('click', this.value);
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                if (this.active) {
                    classes.push('am-active');
                }

                if (this.header) {
                    classes.push('am-dropdown-header');
                }

                if (this.disabled) {
                    classes.push('am-disabled');
                }

                if (this.divider) {
                    classes.push('am-divider');
                }

                return classes.join(' ');
            }
        }
    };
</script>
