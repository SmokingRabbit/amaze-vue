<template>
    <div :class="computedClass">
        <template v-if="type !== 'textarea'">
            <slot name="prepend" v-if="$slots.prepend"></slot>
            <input
                class="am-form-field"
                :type="type"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :name="name"
                :max="max"
                :min="min"
                :step="step"
                :autofocus="autofocus"
                :autocomplete="autocomplete"
                :form="form"
                :value="curValue"
                @input="inputHandle"
                @focus="focusHandle"
                @blur="blurHandle"
                />
            <slot name="append" v-if="$slots.append"></slot>
        </template>
        <template v-else>
            <textarea
                class="am-textarea"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :name="name"
                :max="max"
                :min="min"
                :step="step"
                :autofocus="autofocus"
                :autocomplete="autocomplete"
                :form="form"
                :style="{resize: resize ? 'both' : 'none'}"
                :value="curValue"
                @input="inputHandle"
                @focus="focusHandle"
                @blur="blurHandle"
            >
            </textarea>
        </template>
        <p class="error-notice" v-if="isError"> {{ errMsg }} </p>
    </div>
</template>

<script>
    export default {
        name: 'am-input',
        props: {
            value: {
                type: [String, Number]
            },
            color: {
                type: String,
                validator(value) {
                    return [
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].indexOf(value) > -1;
                }
            },
            type: {
                type: String,
                default: 'text'
            },
            size: {
                type: String,
                validator(value) {
                    return ['xl', 'lg', 'sm', 'xs', 'block'].indexOf(value) > -1;
                }
            },
            customClass: {
                type: String
            },
            maxLen: {
                type: Number,
                default: 0
            },
            minLen: {
                type: Number,
                default: 0
            },
            regex: {
                type: [Object, String]
            },
            // 原生属性
            placeholder: {
                type: String,
                default: '请输入内容……'
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            max: {},
            min: {},
            step: {},
            autofocus: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                validator(value) {
                    return ['off', 'on'].indexOf(value) > -1;
                }
            },
            resize: {
                type: Boolean,
                default: false
            },
            form: {
                type: String
            }
        },
        data() {
            return {
                curValue: this.value,
                isError: false,
                errMsg: ''
            }
        },
        watch: {
            value(curVal, oldVal) {
                if (this.maxLen > 0 && curVal.length > this.maxLen) {
                    this.errMsg = '您最多可以输入' + this.maxLen + '个字符';
                    return this.isError = true;
                }

                if (this.minLen > 0 && curVal.length < this.minLen) {
                    this.errMsg = '您最少需要输入' + this.maxLen + '个字符';
                    return this.isError = true;
                }

                if (this.regex !== undefined && !new RegExp(this.regex).text(curVal)) {
                    this.errMsg = '您输入的信息不正确';
                    return this.isError = true;
                }

                this.isError = false;
            }
        },
        methods: {
            inputHandle(e) {
                const value = e.target.value;
                this.$emit('input', value);
                this.curValue = value;
            },
            focusHandle(e) {
                this.$emit('focus', e);
            },
            blurHandle(e) {
                this.$emit('blur', e);
            }
        },
        computed: {
            computedClass() { console.log(this.value)
                const classes = [];

                classes.push('am-input-group');

                if (this.color !== undefined) {
                    classes.push('am-input-group-' + this.color);
                }

                if (this.isError) {
                    classes.push('am-input-group-danger');
                }

                if (this.size !== undefined) {
                    classes.push('am-input-group-' + this.size);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./input.less";

    .error-notice {
        display: table-footer-group;
        font-size: @global-font-size - 0.4;
        color: @global-danger;
    }

    .am-textarea {
        width: 100%;
        min-height: @global-font-size * 5;
        font-size: @global-font-size - 0.2;
        padding: @global-font-size - 0.6;
        border: 1px solid @input-group-label-border-color;
    }
</style>
