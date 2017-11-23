<template>
    <am-input-group v-bind="$props">
        <am-input v-model="inputVal" v-bind="$props"></am-input>
        <am-input-label :slot="labelPlacement">
            <am-icon type="calendar"></am-icon>
        </am-input-label>
        <datepicker ref="datepicker" v-bind="$props" v-model="curVal"></datepicker>
    </am-input-group>
</template>

<script>
    import { Input, InputGroup, InputLabel } from '../../input';
    import Datepicker from './datepicker';

    export default {
        name: 'am-datepicker',
        data() {
            return {
                curVal: this.value,
                inputVal: this.value
            };
        },
        props: {
            value: {},
            modelType: String,
            defaultValue: [Number, String],
            disabledBeforeDate: [Number, String, Boolean],
            disabledAfterDate: [Number, String, Boolean],
            language: String,
            format: String,
            prop: String,
            size: String,
            color: String,
            type: {
                type: String,
                default: 'text'
            },
            regex: Object,
            // 原生属性
            placeholder: {
                type: String,
                default: '请选择日期'
            },
            readonly: Boolean,
            disabled: Boolean,
            name: String,
            autofocus: Boolean,
            autocomplete: String,
            labelPlacement: {
                type: String,
                default: 'prepend',
                validaotr(value) {
                    return ['prepend', 'append'].includes(value);
                }
            }
        },
        watch: {
            curVal(curVal) {
                this.inputVal = curVal;
                this.$emit('input', curVal);
            }
        },
        beforeDestroy() {
            this.$refs['datepicker'].$destroy(true);
            if (this.$refs['datepicker'].visible) {
                document.body.removeChild(this.$refs['datepicker'].$el);
            }
        },
        components: {
            AmInput: Input,
            AmInputGroup: InputGroup,
            AmInputLabel: InputLabel,
            Datepicker
        }
    };
</script>
