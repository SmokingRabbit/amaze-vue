<template>
    <am-input-group v-bind="$props">
        <am-input v-model="inputVal" v-bind="$props"></am-input>
        <am-input-label slot="prepend"><am-icon type="calendar" :color="iconColor"></am-icon></am-input-label>
        <datepicker v-bind="$props" v-model="curVal"></datepicker>
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
            }
        },
        props: {
            value: {},
            modelType: String,
            defaultValue: [Number],
            disabledBeforeDate: [Number, String, Boolean],
            disabledAfterDate: [Number, String, Boolean],
            language: String,
            format: String,
            iconColor: {
                type: String,
                default: 'primary'
            },
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
            readonly:Boolean,
            disabled: Boolean,
            name: String,
            autofocus: Boolean,
            autocomplete: String
        },
        watch: {
            curVal(curVal) {
                this.inputVal = curVal;
                this.$emit('input', curVal);
            }
        },
        components: {
            AmInput: Input,
            AmInputGroup: InputGroup,
            AmInputLabel: InputLabel,
            Datepicker
        }
    }
</script>