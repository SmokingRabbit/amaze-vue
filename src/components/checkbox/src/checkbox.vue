<template>
    <label :class="computedClass">
        <input
            class="am-ucheck-checkbox"
            type="checkbox"
            v-model="selfVal"
            :disabled="isDisabled"
            :value="label"
            :name="name"
        />
        <span class="am-ucheck-icons">
            <i class="am-icon-unchecked"></i>
            <i class="am-icon-checked"></i>
        </span>
        <slot></slot>
        <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </label>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {
        name: 'am-checkbox',
        mixins: [Emitter],
        props: {
            value: {},
            customClass: {
                type: String
            },
            name: String,
            label: {
                type: [String, Number, Boolean]
            },
            showLabel: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                validate(value) {
                    return ['secondary', 'success', 'warning', 'danger'].includes(value);
                }
            },
            inline: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            checked() {
                if (toString.call(this.selfVal) === '[object Array]' &&
                    this.selfVal.indexOf(this.label) > -1) {
                    return true;
                }
                else if (toString.call(this.selfVal) === '[object Boolean]' &&
                    this.selfVal) {
                    return true;
                }
                else {
                    return this.selfVal === this.label;
                }
            },
            computedClass() {
                const classes = [];

                classes.push('am-checkbox');
                classes.push('am-needsclick');

                if (this.checked) {
                    classes.push('am-checkbox-checked');
                }

                if (this.isDisabled) {
                    classes.push('am-checkbox-disabled');
                }

                if (this.color !== undefined) {
                    classes.push('am-' + this.color);
                }

                if (this.inline) {
                    classes.push('am-checkbox-inline');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name !== 'am-checkbox-group') {
                        parent = parent.$parent;
                    }
                    else {
                        this.checkboxGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            selfVal: {
                get() {
                    return this.isGroup ? this.checkboxGroup.value : this.value;
                },
                set(val) {
                    if (this.isGroup) {
                        let isLimitExceeded = false;

                        if (this.checkboxGroup.min !== undefined &&
                            val.length < this.checkboxGroup.min
                        ) {
                            isLimitExceeded = true;
                        }
                        if (this.checkboxGroup.max !== undefined &&
                            val.length > this.checkboxGroup.max
                        ) {
                            isLimitExceeded = true;
                        }

                        if (!isLimitExceeded) {
                            this.dispatch('am-checkbox-group', 'input', [val]);
                        }
                    }
                    else {
                        this.$emit('input', val);
                        this.$emit('change', val);
                    }
                }
            },
            isDisabled() {
                return this.isGroup
                    ? (this.checkboxGroup.disabled || this.disabled)
                    : this.disabled;
            }
        }
    };
</script>
