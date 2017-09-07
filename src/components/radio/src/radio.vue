<template>
    <label :class="computedClass">
        <input
            class="am-radio-origin"
            type="radio"
            v-model="selfVal"
            :disabled="isDisabled"
            :value="label"
            @focus="focusHandle"
            :checked="value"
        />
        <span class="am-ucheck-icons">
            <i class="am-icon-unchecked"></i>
            <i class="am-icon-checked"></i>
        </span>
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
    </label>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {
        name: 'am-radio',
        mixins: [Emitter],
        props: {
            value: {},
            customClass: {
                type: String
            },
            label: {
                type: [String, Number, Boolean]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                validate(value) {
                    return ['secondary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                }
            },
            inline: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            focusHandle() {
                this.selfVal = this.label;
            }
        },
        watch:{
            selfVal(curVal, oldVal) {
                if (curVal === this.label) {
                    this.checked = true;
                }
                else {
                    this.checked = false;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-radio');
                // classes.push('am-needsclick');

                if (this.checked) {
                    classes.push('am-radio-checked');
                }

                if (this.isDisabled) {
                    classes.push('am-radio-disabled');
                }

                if (this.color !== undefined) {
                    classes.push('am-' + this.color);
                }

                if (this.inline) {
                    classes.push('am-radio-inline');
                }

                return classes.join(' ');
            },
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.name !== 'am-radio-group') {
                        parent = parent.$parent;
                    }
                    else {
                        this.radioGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            selfVal: {
                get() {
                    return this.isGroup ? this.radioGroup.value : this.value;
                },
                set(val) {
                    if (this.isGroup) {
                        this.dispatch('am-radio-group', 'input', [val]);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },
            isDisabled() {
                return this.isGroup
                    ? (this.radioGroup.disabled || this.disabled)
                    : this.disabled;
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";

    @radio-size: @global-font-size * 0.875;
    @radio-border-color: #bfcbd9;
    @radio-checked-border-color: #20a0ff;
    @radio-checked-bg-color: #20a0ff;
    @radio-disabled-border-color: #d1dbe5;
    @radio-disabled-bg-color: #eef1f6;
    @radio-disabled-font-color: #bbb;

    .@{ns}radio {
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        .@{ns}radio-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;

            .@{ns}radio-inner {
                width: @radio-size;
                height: @radio-size;
                border: 1px solid @radio-border-color;
                border-radius: 50%;
                background-color: @white;
                position: relative;
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;

                &:after {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: transparent;
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    clear: both;
                    transform: translate(-50%, -50%);
                    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
                }
            }

            .@{ns}radio-origin {
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
            }
        }

        .@{ns}radio-label {
            font-size: @radio-size;
            padding-left: .2rem;
            font-weight: 400;
        }

        &:hover {
            .@{ns}radio-inner {
                border-color: @radio-checked-border-color;
            }
        }
    }

    .@{ns}radio-checked {
        .@{ns}radio-input {
            .@{ns}radio-inner {
                border-color: @radio-checked-border-color;
                background-color: @radio-checked-bg-color;

                &:after {
                    background-color: @white;
                }
            }
        }
    }

    .@{ns}radio-disabled {
        .@{ns}radio-input {
            .@{ns}radio-inner {
                cursor: not-allowed;
                border-color: @radio-disabled-border-color;
                background-color: @radio-disabled-bg-color;

                &:after {
                    cursor: not-allowed;
                }
            }
        }
        .@{ns}radio-label {
            cursor: not-allowed;
            color: @radio-disabled-font-color;
        }

        &:hover {
            .@{ns}radio-inner {
                border-color: @radio-disabled-border-color;
            }
        }
    }
</style>
