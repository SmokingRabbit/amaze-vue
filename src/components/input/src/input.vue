<template>
    <div :class="computedClass">
        <template v-if="type !== 'textarea'">
            <slot name="prepend" v-if="$slots.prepend"></slot>
            <input
                :class="inputComputedClass"
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
                ref="input"
            >
            </textarea>
        </template>
        <p class="error-notice" v-if="isError" :style="noticeStyle"> {{ errMsg }} </p>
    </div>
</template>

<script>
    export default {
        name: 'am-input',
        props: {
            value: {},
            formGroup: {
                type: Boolean,
                default: false
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
            block: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['lg', 'sm'].indexOf(value) > -1;
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
                errMsg: '',
                noticeStyle: {}
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
            computedClass() {
                const classes = [];

                if (this.formGroup) {
                    classes.push('am-form-group');
                }
                else {
                    classes.push('am-input-group');
                }

                if (this.type === "textarea") {
                    classes.push('am-input-group-textarea');
                }

                if (this.block) {
                    classes.push('am-input-block');
                }

                if (this.color !== undefined) {
                    classes.push('am-input-group-' + this.color);
                }

                if (this.isError) {
                    classes.push('am-form-warning');
                }

                if (this.size !== undefined) {
                    classes.push('am-input-group-' + this.size);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            inputComputedClass() {
                const classes = ['am-form-field'];

                if (this.size) {
                    classes.push('am-input-' + this.size);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            if (this.block) {
                for (let name in this.$slots) {
                    let vComponent = this.$slots[name][0];

                    if (!(vComponent.elm instanceof HTMLElement)) {
                        contiune;
                    }

                    vComponent.elm.style.position = 'absolute';
                    vComponent.elm.style.top = '0px';
                    vComponent.elm.style.zIndex = 10;

                    if (name === 'prepend') {
                        vComponent.elm.style.left = '0px';
                        this.$refs['input'].style.paddingLeft =
                            parseInt(getComputedStyle(this.$refs['input'], null)['paddingLeft'], 10)
                            + vComponent.elm.getBoundingClientRect().width + 'px';
                    }
                    else {
                        vComponent.elm.style.right = '0px';
                        this.$refs['input'].style.paddingRight =
                            parseInt(getComputedStyle(this.$refs['input'], null)['paddingRight'], 10)
                            + vComponent.elm.getBoundingClientRect().width + 'px';
                    }
                }
            }

            if (this.$slots.append) {
                this.noticeStyle = {
                    right: this.$slots.append[0].elm.getBoundingClientRect().width + 16 + 'px'
                }
            }
        }
    }
</script>
