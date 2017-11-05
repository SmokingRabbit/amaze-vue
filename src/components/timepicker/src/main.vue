<template>
    <input-group v-bind="$props">
        <input-label slot="prepend">
            <icon type="clock-o" :color="iconColor"></icon>
        </input-label>
        <am-input v-model="inputVal" v-bind="$props"></am-input>
        <time-picker v-model="curVal"></time-picker>
    </input-group>
</template>

<script>
    import { Input, InputGroup, InputLabel } from '../../input';
    import { Icon } from '../../icon';
    import TimePicker from './timepicker';
    export default {
        name: 'am-timepicker',
        data() {
            return {
                curVal: this.value,
                inputVal: this.value
            }
        },
        props: {
            value: {},
            modelType: String,
            defaultValue: [Number, String],
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
                default: '请选择时间'
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
            InputGroup,
            InputLabel,
            Icon,
            TimePicker
        }
    }
</script>