<template>
    <am-input-group :size="size" :color="color">
        <am-input v-model="inputVal"></am-input>
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
        props: [
            'value',
            'type',
            'defaultValue',
            'disabledBeforeDate',
            'disabledAfterDate',
            'language',
            'format',
            'iconColor',
            'size',
            'color'
        ],
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