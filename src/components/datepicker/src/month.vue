<template>
    <tbody>
        <tr>
            <td colspan="7">
                <span
                    v-for="row,key in loop"
                    :key="key"
                    :class="{'am-active': curMonth === row.month, 'am-disabled': row.disabled}"
                    @click.stop="!row.disabled && clickHandle(row.month)"
                > {{ row.val }}</span>
            </td>
        </tr>
    </tbody>
</template>
<script>
    import { monthZHMap, monthENMap } from './language';
    export default {
        name: 'am-datepicker-month',
        props: {
            value: {},
            curYear: Number,
            curMonth: Number,
            language: String,
            defaultValue: [Number, String],
            disabledBeforeDate: [Number, String, Boolean],
            disabledAfterDate: [Number, String, Boolean]
        },
        methods: {
            clickHandle(month) {
                this.$emit('input', month);
                this.$emit('change', month);
            },
            isDisabled(month) {
                const { defaultValue, disabledBeforeDate, disabledAfterDate } = this;
                let disabled = false;
                if (disabledBeforeDate) {
                    let disabledMonth = disabledBeforeDate === true
                        ? new Date(defaultValue).getMonth()
                        : new Date(disabledBeforeDate).getMonth();
                    disabled = disabledMonth + 1 > month;
                    if (disabled) {
                        return disabled;
                    }
                }
                if (disabledAfterDate) {
                    let disabledMonth = disabledAfterDate === true
                        ? new Date(defaultValue).getMonth()
                        : new Date(disabledAfterDate).getMonth();
                    disabled = disabledMonth + 1 < month;
                }
                return disabled;
            }
        },
        computed: {
            loop() {
                const arr = [];
                let map = this.language === 'zh' ? monthZHMap : monthENMap;
                for (let i = 1; i < 13; i++) {
                    arr.push({
                        val: map[i],
                        month: i,
                        disabled: this.isDisabled(i)
                    });
                }
                return arr;
            }
        }
    };
</script>
