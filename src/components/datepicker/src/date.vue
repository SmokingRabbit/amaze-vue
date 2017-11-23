<template>
    <tbody>
        <tr>
            <td
                v-for="val,key in weekMap"
                :key="key"
                :class="{'am-datepicker-dow': true, 'am-datepicker-red': key > 5}">
                {{ val }}
            </td>
        </tr>
        <tr v-for="row,key in loop" :key="key">
            <td
                v-for="item,_key in row"
                :class="{
                    'am-datepicker-day': true,
                    'am-datepicker-old': item.month !== month,
                    'am-active': item.year === curYear && item.month === curMonth && item.date === curDate,
                    'am-disabled': item.disabled
                }"
                @click.stop="!item.disabled && clickHandle(item)"
            >
                {{ item.date }}
            </td>
        </tr>
    </tbody>
</template>

<script>
    import { weekZHMap, weekENMap } from './language';

    export default {
        name: 'am-datepicker-date',
        props: {
            value: {},
            year: Number,
            curYear: Number,
            month: Number,
            curMonth: Number,
            curDate: Number,
            language: String,
            defaultValue: [Number, String],
            disabledBeforeDate: [Number, String, Boolean],
            disabledAfterDate: [Number, String, Boolean]
        },
        methods: {
            clickHandle(dateObj) {
                this.$emit('change', dateObj);
            },
            getDays(month, year) {
                let days;

                if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
                    days = 31;
                }
                else if (month === 2) {
                    if (year % 4 === 0 && year % 100 !== 0) {
                        days = 29;
                    }
                    else {
                        days = 28;
                    }
                }
                else {
                    days = 30;
                }

                return days;
            },
            isDisabled(year, month, date) {
                const { defaultValue, disabledBeforeDate, disabledAfterDate } = this;
                let disabled = false;
                let YTD = year + '-' + month + '-' + date;
                if (disabledBeforeDate) {
                    let disabledDate = disabledBeforeDate === true
                        ? +new Date(defaultValue)
                        : +new Date(disabledBeforeDate);
                    disabled = disabledDate > +new Date(YTD);
                    if (disabled) {
                        return disabled;
                    }
                }
                if (disabledAfterDate) {
                    let disabledDate = disabledAfterDate === true
                        ? +new Date(defaultValue)
                        : +new Date(disabledAfterDate);
                    disabled = disabledDate < +new Date(YTD);
                }
                return disabled;
            }
        },
        computed: {
            loop() {
                const { year, month } = this;
                const arr = [];
                const days = this.getDays(month, year);
                let week;
                let i = 1;

                week = new Date(year + '-' + month + '-' + 1).getDay();
                week = week === 0 ? 7 : week;

                while (1) {
                    const rowArr = [];
                    if (i === 1) {
                        const preMonth = month === 1 ? 12 : month - 1;
                        const preYear = month === 1 ? year - 1 : year;
                        const preDays = this.getDays(preMonth, preYear);
                        for (let j = 0; j < week - 1; j++) {
                            rowArr.unshift({
                                year: preYear,
                                month: preMonth,
                                date: preDays - j,
                                disabled: this.isDisabled(preYear, preMonth, preDays - j)
                            });
                        }
                    }

                    const rowLen = 7 - rowArr.length;
                    for (let k = 0; k < rowLen; k++) {
                        rowArr.push({
                            year: year,
                            month: month,
                            date: i,
                            disabled: this.isDisabled(year, month, i)
                        });

                        if (i === days) {
                            if (rowArr.length < 7) {
                                const nextMonth = month === 12 ? 1 : month + 1;
                                const nextYear = month === 12 ? year + 1 : year;
                                const nextMonthLen = 7 - rowArr.length;
                                for (let l = 0; l < nextMonthLen; l++) {
                                    rowArr.push({
                                        year: nextYear,
                                        month: nextMonth,
                                        date: l + 1,
                                        disabled: this.isDisabled(nextYear, nextMonth, l + 1)
                                    });
                                }
                            }
                            break;
                        }
                        ++i;
                    }

                    arr.push(rowArr);

                    if (i === days) {
                        break;
                    }
                }
                return arr;
            },
            weekMap() {
                if (this.language === 'zh') {
                    return weekZHMap;
                }
                else {
                    return weekENMap;
                }
            }
        }
    };
</script>
