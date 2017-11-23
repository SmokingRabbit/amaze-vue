<template>
    <tbody>
        <tr>
            <td colspan="7">
                <span
                    v-for="row,key in loop"
                    :key="key"
                    :class="{
                        'am-active': curYear === row.val,
                        'am-datepicker-old': key === 0 || key + 1 === loop.length,
                        'am-disabled': row.disabled
                    }"
                    @click.stop="!row.disabled && clickHandle(row.val)"
                > {{ row.val }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>
    export default {
        name: 'am-datepicker-year',
        props: {
            value: {},
            curYear: Number,
            defaultValue: [Number, String],
            disabledBeforeDate: [Number, String, Boolean],
            disabledAfterDate: [Number, String, Boolean]
        },
        methods: {
            clickHandle(year) {
                this.$emit('input', year);
                this.$emit('change', year);
            },
            isDisabled(year) {
                const { defaultValue, disabledBeforeDate, disabledAfterDate } = this;
                let disabled = false;
                if (disabledBeforeDate) {
                    let disabledYear = disabledBeforeDate === true
                        ? new Date(defaultValue).getFullYear()
                        : new Date(disabledBeforeDate).getFullYear();
                    disabled = disabledYear > year;
                    if (disabled) {
                        return disabled;
                    }
                }
                if (disabledAfterDate) {
                    let disabledYear = disabledAfterDate === true
                        ? new Date(defaultValue).getFullYear()
                        : new Date(disabledAfterDate).getFullYear();
                    disabled = disabledYear < year;
                }
                return disabled;
            }
        },
        computed: {
            loop() {
                const arr = [];
                let year = parseInt(this.value / 10, 10) * 10;

                for (let i = -1; i < 11; i++) {
                    arr.push({
                        val: year + i,
                        disabled: this.isDisabled(year + i)
                    });
                }
                return arr;
            }
        }
    };
</script>
