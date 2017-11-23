<template>
    <button :disabled="disabled" :class="computedClass" @click="clickHandle">
        <slot v-if="!loading"></slot>
        <span v-if="loading">
            <animation type="spin">
                <icon type="spinner"></icon>
            </animation>
            {{ loadingText }}
        </span>
    </button>
</template>

<script>
    import { Animation } from '../../animation';
    import { Icon } from '../../icon';

    export default {
        name: 'am-button',
        props: {
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            block: {
                type: Boolean,
                default: false
            },
            isActive: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['xl', 'lg', 'sm', 'xs', 'block'].includes(value);
                }
            },
            customClass: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: 'Loading……'
            }
        },
        methods: {
            clickHandle() {
                if (!this.disabled) {
                    this.$emit('click');
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-btn');
                classes.push('am-btn-' + this.color);

                if (this.round) {
                    classes.push('am-round');
                }

                if (this.block) {
                    classes.push('am-btn-block');
                }

                if (this.isActive) {
                    classes.push('am-active');
                }

                if (this.size !== undefined) {
                    classes.push('am-btn-' + this.size);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                if (this.loading) {
                    classes.push('am-btn-loading');
                }

                if (this.disabled || this.loading) {
                    classes.push('am-disabled');
                }

                return classes.join(' ');
            }
        },
        components: {
            Animation,
            Icon
        }
    };
</script>
