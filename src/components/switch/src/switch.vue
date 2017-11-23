<template>
    <div :class="computedClass">
        <span :class="{'am-switch-text-active': !value, 'am-switch-text': true}" v-if="inactiveText">{{inactiveText}}</span>
        <span class="am-switch-box">
            <span class="am-switch-btn">
                <input type="checkbox" :name="name" :disabled="disabled" v-model="selfVal" :value="selfVal" class="am-switch-input">
            </span>
        </span>
        <span :class="{'am-switch-text-active': value, 'am-switch-text': true}" v-if="activeText">{{activeText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'am-switch',
        data() {
            return {
                selfVal: this.value
            };
        },
        props: {
            value: {
                type: Boolean,
                required: true
            },
            customClass: String,
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: 'am-switch'
            },
            color: {
                type: String,
                default: 'primary',
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
            activeText: String,
            inactiveText: String
        },
        watch: {
            selfVal(curVal, oldVal) {
                this.$emit('input', curVal);
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-switch');
                classes.push('am-switch-' + this.color);
                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                if (this.disabled) {
                    classes.push('am-switch-disabled');
                }

                if (this.value) {
                    classes.push('am-switch-active');
                }

                return classes.join(' ');
            }
        }
    };
</script>
