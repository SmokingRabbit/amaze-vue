<template>
    <div :class="computedClass">
        <slot name="prepend" v-if="$slots.prepend"></slot>
        <slot></slot>
        <slot name="append" v-if="$slots.append"></slot>
        <p class="error-notice" v-if="isError" :style="noticeStyle"> {{ errMsg }} </p>
    </div>
</template>

<script>
    export default {
        name: 'am-input-group',
        data() {
            return {
                isError: false,
                errMsg: '',
                isTextarea: false,
                noticeStyle: {}
            };
        },
        props: {
            customClass: String,
            formGroup: {
                type: Boolean,
                default: false
            },
            prop: {
                type: String
            },
            errorNotice: {
                type: String,
                default: '您输入的信息有误'
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
                    ].includes(value);
                }
            },
            block: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['lg', 'sm'].includes(value);
                }
            }
        },
        methods: {
            showError(msg) {
                this.isError = true;
                this.errMsg = msg || this.errorNotice;
            },
            hideError() {
                this.isError = false;
            },
            setTextarea() {
                this.isTextarea = true;
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

                if (this.isTextarea) {
                    classes.push('am-input-group-textarea');
                }

                if (this.block) {
                    classes.push('am-input-group-block');
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
            inputComponent() {
                let componet = null;
                this.$children.every((vComponent) => {
                    if (vComponent.$options._componentTag === 'am-input') {
                        componet = vComponent;
                        return false;
                    }
                    return true;
                });
                return componet;
            }
        },
        mounted() {
            if (this.block) {
                for (let name in this.$slots) {
                    let vComponent = this.$slots[name][0];
                    if (!['prepend', 'append'].includes(name) || !(vComponent.elm instanceof HTMLElement)) {
                        continue;
                    }
                    const paddingInputComponent = (placement) => {
                        if (this.inputComponent) {
                            this.inputComponent.$el.style[placement] =
                                parseInt(getComputedStyle(this.inputComponent.$el, null)[placement], 10) +
                                vComponent.elm.getBoundingClientRect().width + 'px';
                        }
                    };

                    vComponent.elm.style.position = 'absolute';
                    vComponent.elm.style.top = '0px';
                    vComponent.elm.style.zIndex = 10;

                    if (name === 'prepend') {
                        vComponent.elm.style.left = '0px';
                        if (this.inputComponent) {
                            paddingInputComponent('paddingLeft');
                        }
                    }
                    else {
                        vComponent.elm.style.right = '0px';
                        paddingInputComponent('paddingRight');
                    }
                }
            }

            if (this.$slots.append) {
                this.noticeStyle = {
                    right: this.$slots.append[0].elm.getBoundingClientRect().width + 16 + 'px'
                };
            }
        }
    };
</script>
