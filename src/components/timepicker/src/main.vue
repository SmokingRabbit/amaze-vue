<template>
    <input-group v-bind="$props">
        <am-input v-model="inputVal" v-bind="$props"></am-input>
        <input-label :slot="labelPlacement">
            <icon type="clock-o"></icon>
        </input-label>
        <time-picker ref="timepicker" v-model="curVal" :defaultValue="defaultValue" :caret="caret"></time-picker>
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
            };
        },
        props: {
            value: {},
            modelType: String,
            defaultValue: [Number, String],
            prop: String,
            size: String,
            color: String,
            caret: {
                type: Boolean,
                default: true
            },
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
            this.$refs['timepicker'].$destroy(true);
            if (this.$refs['timepicker'].visible) {
                document.body.removeChild(this.$refs['timepicker'].$el);
            }
        },
        components: {
            AmInput: Input,
            InputGroup,
            InputLabel,
            Icon,
            TimePicker
        }
    };
</script>
