<template>
    <label :class="computedClass">
        <span class="am-checkbox-input">
            <span class="am-checkbox-inner"></span>
            <input
                class="am-checkbox-origin"
                type="checkbox"
                v-model="selfVal"
                :disabled="isDisabled"
                :value="label"
            />
        </span>
        <span class="am-checkbox-label">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
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
            label: {
                type: [String, Number, Boolean]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            checked() {
                if (toString.call(this.selfVal) === '[object Array]'
                    && this.selfVal.indexOf(this.label) > -1
                ) {
                    return true;
                }
                else if (
                    toString.call(this.selfVal) === '[object Boolean]'
                    && this.selfVal
                ){
                    return true;
                }
                else {
                    return this.selfVal === this.label;
                }
            },
            computedClass() {
                const classes = [];

                classes.push('am-checkbox');

                if (this.isDisabled) {
                    classes.push('am-checkbox-disabled');
                }
                if (this.checked) {
                    classes.push('am-checkbox-checked');
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

                        if (this.checkboxGroup.min !== undefined
                            && val.length < this.checkboxGroup.min
                        ) {
                            isLimitExceeded = true;
                        }
                        if (this.checkboxGroup.max !== undefined
                            && val.length > this.checkboxGroup.max
                        ) {
                            isLimitExceeded = true;
                        }

                        if (!isLimitExceeded) {
                            this.dispatch('am-checkbox-group', 'input', [val]);
                        }
                    } else {
                        this.$emit('input', val);
                    }
                }
            },
            isDisabled() {
                return this.isGroup
                    ? (this.checkboxGroup.disabled || this.disabled)
                    : this.disabled;
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";

    @checkbox-size: @global-font-size * 0.875;
    @checkbox-border-color: #bfcbd9;
    @checkbox-checked-border-color: #20a0ff;
    @checkbox-checked-bg-color: #20a0ff;
    @checkbox-disabled-border-color: #d1dbe5;
    @checkbox-disabled-bg-color: #eef1f6;
    @checkbox-disabled-font-color: #bbb;

    .@{ns}checkbox {
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        .@{ns}checkbox-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;

            .@{ns}checkbox-inner {
                width: @checkbox-size;
                height: @checkbox-size;
                border: 1px solid @checkbox-border-color;
                border-radius: 2px;
                background-color: @white;
                position: relative;
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;

                &:after {
                    width: 5px;
                    height: 8px;
                    border: 2px solid transparent;
                    border-left: 0;
                    border-top: 0;
                    transform: translate(-50%, -50%) rotate(45deg) scaleY(1);
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    clear: both;
                    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
                }
            }

            .@{ns}checkbox-origin {
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

        .@{ns}checkbox-label {
            font-size: @checkbox-size;
            padding-left: .2rem;
            font-weight: 400;
        }

        &:hover {
            .@{ns}checkbox-inner {
                border-color: @checkbox-checked-border-color;
            }
        }
    }

    .@{ns}checkbox-checked {
        .@{ns}checkbox-input {
            .@{ns}checkbox-inner {
                border-color: @checkbox-checked-border-color;
                background-color: @checkbox-checked-bg-color;

                &:after {
                    border-color: @white;
                }
            }
        }
    }

    .@{ns}checkbox-disabled {
        .@{ns}checkbox-input {
            .@{ns}checkbox-inner {
                cursor: not-allowed;
                border-color: @checkbox-disabled-border-color;
                background-color: @checkbox-disabled-bg-color;

                &:after {
                    cursor: not-allowed;
                }
            }
        }
        .@{ns}checkbox-label {
            cursor: not-allowed;
            color: @checkbox-disabled-font-color;
        }

        &:hover {
            .@{ns}checkbox-inner {
                border-color: @checkbox-disabled-border-color;
            }
        }
    }
</style>
