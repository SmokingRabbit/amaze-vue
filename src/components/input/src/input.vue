<template>
    <input
        v-if="type !== 'textarea'"
        :class="computedClass"
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
        ref="input"
        />
    <textarea
        v-else
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
        ref="input"
    >
    </textarea>
</template>

<script>
    export default {
        name: 'am-input',
        props: {
            value: {},
            customClass: String,
            size: {
                type: String,
                validator(value) {
                    return ['lg', 'sm'].includes(value);
                }
            },
            type: {
                type: String,
                default: 'text'
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
                    return ['off', 'on'].includes(value);
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
            };
        },
        watch: {
            value(curVal, oldVal) {
                if (this.validator(curVal)) {
                    this.isError = true;
                    return;
                }

                this.isError = false;
                this.curValue = curVal;
            },
            isError(curVal, oldVal) {
                if (curVal) {
                    this.callParentMethod('showError', this.errMsg);
                }
                else {
                    this.callParentMethod('hideError');
                }
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
            },
            callParentMethod(methods, param) {
                if (this.inputGroupComponent) {
                    this.inputGroupComponent[methods](param);
                }
            },
            validator(curVal) {
                curVal = curVal || this.value;
                if (this.maxLen > 0 && curVal.length > this.maxLen) {
                    this.errMsg = '您最多可以输入' + this.maxLen + '个字符';
                    return true;
                }
                if (this.minLen > 0 && curVal.length < this.minLen) {
                    this.errMsg = '您最少需要输入' + this.minLen + '个字符';
                    return true;
                }
                if (this.regex !== undefined && !new RegExp(this.regex).test(curVal)) {
                    this.errMsg = '您输入的信息不正确';
                    return true;
                }
                return false;
            }
        },
        computed: {
            computedClass() {
                const classes = ['am-form-field'];

                if (this.size) {
                    classes.push('am-input-' + this.size);
                }

                if (this.inputGroupComponent && this.inputGroupComponent.block) {
                    classes.push('am-input-block');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            inputGroupComponent() {
                let tagName = this.$parent.$options._componentTag;
                if (tagName === 'am-input-group' || tagName === 'am-form-group') {
                    return this.$parent;
                }
                return null;
            }
        },
        mounted() {
            if (this.type === 'textarea') {
                this.callParentMethod('setTextarea');
            }
        }
    };
</script>
