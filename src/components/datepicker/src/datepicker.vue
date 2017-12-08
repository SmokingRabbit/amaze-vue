<template>
    <transition name="fade">
        <div class="am-datepicker" v-if="visible">
            <span class="am-datepicker-caret"></span>
            <table class="am-datepicker-table">
                <thead>
                    <tr class="am-datepicker-header">
                        <th class="am-datepicker-prev" >
                            <i class="am-datepicker-prev-icon" v-show="activeType !== 'month'" @click.stop="preHandle"></i>
                        </th>
                        <th colspan="5" class="am-datepicker-switch">
                            <div class="am-datepicker-select" @click.stop="selectType">{{ headerTitle }}</div>
                        </th>
                        <th class="am-datepicker-next">
                            <i class="am-datepicker-next-icon" v-show="activeType !== 'month'" @click.stop="nextHandle"></i>
                        </th>
                    </tr>
                </thead>
                <am-datepicker-year
                    v-model="year"
                    v-if="activeType === 'year'"
                    :curYear="curYear"
                    :defaultValue="defaultValue"
                    :disabledBeforeDate="disabledBeforeDate"
                    :disabledAfterDate="disabledAfterDate"
                    @change="selectYear">
                </am-datepicker-year>
                <am-datepicker-month
                    v-model="month"
                    :curYear="curYear"
                    :curMonth="curMonth"
                    v-if="activeType === 'month'"
                    @change="selectMonth"
                    :defaultValue="defaultValue"
                    :disabledBeforeDate="disabledBeforeDate"
                    :disabledAfterDate="disabledAfterDate"
                    :language="language">
                </am-datepicker-month>
                <am-datepicker-date
                    v-if="activeType === 'date'"
                    :year="year"
                    :curYear="curYear"
                    :month="month"
                    :curMonth="curMonth"
                    :curDate="curDate"
                    :language="language"
                    @change="selectDate"
                    :defaultValue="defaultValue"
                    :disabledBeforeDate="disabledBeforeDate"
                    :disabledAfterDate="disabledAfterDate"
                >
                </am-datepicker-date>
            </table>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { monthZHMap, monthENMap } from './language';
    import AmDatepickerYear from './year';
    import AmDatepickerMonth from './month';
    import AmDatepickerDate from './date';
    import { on, off } from '../../../utils/dom';
    import { detectMobile } from '../../../utils/navigator';

    export default {
        name: 'am-datepicker',
        mixins: [ Popup ],
        data() {
            const { year, month, date } = this.parseDate(this.defaultValue);

            return {
                year,
                month,
                date,
                curYear: year,
                curMonth: month,
                curDate: date,
                activeType: this.modelType
            };
        },
        props: {
            modelType: {
                type: String,
                default: 'date',
                validator(value) {
                    return ['year', 'month', 'date'].includes(value);
                }
            },
            value: {},
            defaultValue: {
                type: [Number, String],
                default: +new Date()
            },
            disabledBeforeDate: {
                type: [Number, String, Boolean]
            },
            disabledAfterDate: {
                type: [Number, String, Boolean]
            },
            language: {
                type: String,
                default: 'zh',
                validator(value) {
                    return ['zh', 'en'].includes(value);
                }
            },
            format: {
                type: String,
                default: 'yyyy-mm-dd'
            }
        },
        methods: {
            parseDate(stamp) {
                const d = new Date(stamp);

                return {
                    year: d.getFullYear(),
                    month: d.getMonth() + 1,
                    date: d.getDate()
                };
            },
            preHandle() {
                switch (this.activeType) {
                    case 'year':
                        this.year -= 10;
                        break;

                    case 'date':
                        if (this.month === 1) {
                            this.year -= 1;
                            this.month = 12;
                        }
                        else {
                            this.month -= 1;
                        }
                        break;
                }
            },
            nextHandle() {
                switch (this.activeType) {
                    case 'year':
                        this.year += 10;
                        break;

                    case 'date':
                        if (this.month === 12) {
                            this.year += 1;
                            this.month = 1;
                        }
                        else {
                            this.month += 1;
                        }
                        break;
                }
            },
            selectType() {
                if (this.activeType !== 'month' && this.modelType !== 'year') {
                    this.activeType = 'month';
                }
                else {
                    this.activeType = 'year';
                }
            },
            selectYear(year) {
                this.curYear = year;

                if (this.modelType === 'year') {
                    this.hide();
                }
                else {
                    this.activeType = this.modelType;
                }
            },
            selectMonth(month) {
                this.curMonth = month;
                if (this.modelType === 'month') {
                    this.hide();
                }
                else {
                    this.activeType = this.modelType;
                }
            },
            selectDate(dateObj) {
                this.curYear = dateObj.year;
                this.curMonth = dateObj.month;
                this.curDate = dateObj.date;

                if (this.modelType === 'date') {
                    this.hide();
                }
                else {
                    this.activeType = this.modelType;
                }
            },
            autoShow(e) {
                this.visible = !this.visible;
                e.stopPropagation();
            },
            globalClickHandle() {
                this.hide();
            },
            popupPosition() {
                const { top, left, height } = this.$parent.$el.getBoundingClientRect();
                const { top: offsetTop, left: offsetLeft } = this.getPageOffset();

                return {
                    top: top + offsetTop + height + 'px',
                    left: (detectMobile() ? 0 : left + offsetLeft) + 'px',
                    zIndex: this.getZIndex()
                };
            }
        },
        watch: {
            curYear(curVal, oldVal) {
                this.$emit('change-year', curVal);
                this.$emit('input', this.result);
            },
            curMonth(curVal, oldVal) {
                this.$emit('change-month', curVal);
                this.$emit('input', this.result);
            },
            curDate(curVal, oldVal) {
                this.$emit('change-date', curVal);
                this.$emit('input', this.result);
            }
        },
        computed: {
            headerTitle() {
                let str;

                switch (this.activeType) {
                    case 'year':
                        let _year = parseInt(this.curYear / 10, 10) * 10;
                        str = (_year - 1) + ' - ' + (_year + 9);
                        break;

                    default:
                        if (this.language === 'zh') {
                            str = this.year + '年  ' + monthZHMap[this.month] + '月';
                        }
                        else {
                            str = monthENMap[this.month] + ', ' + this.year;
                        }
                        break;
                }

                return str;
            },
            result() {
                let str = this.format;

                function double(num) {
                    if (num > 9) {
                        return num;
                    }

                    return '0' + num;
                }
                str = str.replace('yyyy', this.curYear);
                str = str.replace('mm', double(this.curMonth));
                str = str.replace('dd', double(this.curDate));

                return str;
            }
        },
        components: {
            AmDatepickerYear,
            AmDatepickerMonth,
            AmDatepickerDate
        },
        mounted() {
            document.body.appendChild(this.$el);
            on(this.$parent.$el, 'click', this.autoShow);
            on(document.body, 'click', this.globalClickHandle);
        },
        beforeDestroy() {
            off(this.$parent.$el, 'click', this.autoShow);
            off(document.body, 'click', this.globalClickHandle);
        }
    };
</script>
