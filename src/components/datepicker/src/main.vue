<template>
    <am-input v-bind="$props" v-model="inputVal">
        <input-label slot="prepend"><am-icon type="calendar" :color="iconColor"></am-icon></input-label>
        <datepicker v-bind="$props" v-model="curVal"></datepicker>
    </am-input>
</template>

<script>
    import { Input, InputLabel } from '../../input';
    import Datepicker from './datepicker';
    const AmInput = Input;

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
            placeholder: {
                default: '请选择日期'
            },
            iconColor: {
                default: 'primary'
            },
            readonly: {
                // default: true
            }
        },
        watch: {
            curVal(curVal) {
                this.inputVal = curVal;
                // this.$emit('input', curVal)
            }
        },
        components: {
            AmInput,
            InputLabel,
            Datepicker
        }
    }
</script>