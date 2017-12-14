<template>
    <transition name="fade">
        <div :class="computedClass" v-if="visible">
            <span class="am-timepicker-caret" v-if="caret"></span>
            <div class="am-timepicker-container">
                <div class="am-timepicker-main">
                    <div class="am-timepicker-select-wrap"></div>
                    <scrollbar
                        ref="hourScrollbar"
                        customClass="am-timepicker-hour-container"
                        :speed="32"
                        @scroll="hourOnScroll"
                    >
                        <ul>
                            <li
                                v-for="val in hourLoop"
                                :class="{'am-active': val === hourVal}"
                                @click="hourSelectHandle(val)"
                            >
                                {{ double(val) }}
                            </li>
                        </ul>
                    </scrollbar>
                    <scrollbar
                        ref="minuteScrollbar"
                        customClass="am-timepicker-minute-container"
                        :speed="32"
                        @scroll="minuteOnScroll"
                    >
                        <ul>
                            <li
                                v-for="val in minuteLoop"
                                :class="{'am-active': val === minuteVal}"
                                @click="minuteSelectHandle(val)"
                            >
                                {{ double(val) }}
                            </li>
                        </ul>
                    </scrollbar>
                    <scrollbar
                        ref="secondScrollbar"
                        customClass="am-timepicker-second-container"
                        :speed="32"
                        @scroll="secondOnScroll"
                    >
                        <ul>
                            <li
                                v-for="val in secondLoop"
                                :class="{'am-active': val === secondVal}"
                                @click="secondSelectHandle(val)"
                            >
                                {{ double(val) }}
                            </li>
                        </ul>
                    </scrollbar>
                </div>
                <div class="am-timepicker-btn">
                    <am-button color="primary" size="xs" @click="selectTime">确认</am-button>
                    <am-button size="xs" @click="hide">取消</am-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { Scrollbar } from '../../scrollbar';
    import { Button } from '../../button';
    import Popup from '../../../mixins/popup';
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-timepicker',
        mixins: [ Popup ],
        data() {
            let date;
            if (/^\d{13}$/.test(this.defaultValue)) {
                date = new Date(this.defaultValue);
            }
            else if (/^\d{2}:\d{2}:\d{2}$/.test(this.defaultValue)) {
                date = new Date('1970-01-01 ' + this.defaultValue);
            }
            else {
                date = new Date();
            }

            return {
                hourVal: date.getHours(),
                minuteVal: date.getMinutes(),
                secondVal: date.getSeconds(),
                scrollFix: 32,
                itemFixCount: 3
            };
        },
        props: {
            value: {},
            defaultValue: {
                type: [Number, String],
                default: +new Date()
            },
            caret: Boolean
        },
        methods: {
            double(num) {
                if (num > 9) {
                    return num;
                }
                return '0' + num;
            },
            scrollToFixPosition($scrollbar) {
                const { scrollTop } = $scrollbar.getValues();

                if (scrollTop % this.scrollFix !== 0) {
                    let fix = this.scrollFix - scrollTop % this.scrollFix;
                    $scrollbar.scrollTop(scrollTop + fix);
                    return (scrollTop + fix) / this.scrollFix;
                }

                return scrollTop / this.scrollFix;
            },
            hourOnScroll(e) {
                this.hourVal = this.scrollToFixPosition(this.$refs['hourScrollbar']);
            },
            minuteOnScroll() {
                this.minuteVal = this.scrollToFixPosition(this.$refs['minuteScrollbar']);
            },
            secondOnScroll() {
                this.secondVal = this.scrollToFixPosition(this.$refs['secondScrollbar']);
            },
            hourSelectHandle(val) {
                this.hourVal = val;
                this.$refs['hourScrollbar'].scrollTop(val * this.scrollFix);
            },
            minuteSelectHandle(val) {
                this.minuteVal = val;
                this.$refs['minuteScrollbar'].scrollTop(val * this.scrollFix);
            },
            secondSelectHandle(val) {
                this.secondVal = val;
                this.$refs['secondScrollbar'].scrollTop(val * this.scrollFix);
            },
            initLoopArr(len) {
                const arr = [];
                for (let i = 0; i < len; i++) {
                    arr.push(i);
                }
                return arr;
            },
            selectTime() {
                const time = this.double(this.hourVal) + ':' + this.double(this.minuteVal) + ':' + this.double(this.secondVal);
                this.$emit('input', time);
                this.hide();
            },
            autoShow(e) {
                this.visible = !this.visible;
                e.stopPropagation();
            },
            globalClickHandle(e) {
                if (!this.$el.contains(e.target)) {
                    this.hide();
                }
            },
            popupPosition() {
                const { top, left, height } = this.$parent.$el.getBoundingClientRect();
                const { top: offsetTop, left: offsetLeft } = this.getPageOffset();

                return {
                    top: top + offsetTop + height + 'px',
                    left: left + offsetLeft + 'px',
                    zIndex: this.getZIndex()
                };
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
            on(this.$parent.$el, 'click', this.autoShow);
            on(document.body, 'click', this.globalClickHandle);
        },
        beforeDestroy() {
            off(this.$parent.$el, 'click', this.autoShow);
            off(document.body, 'click', this.globalClickHandle);
        },
        watch: {
            visible(curVal, oldVal) {
                if (curVal) {
                    this.$nextTick(() => {
                        this.$refs['hourScrollbar'].scrollTop(this.hourVal * this.scrollFix);
                        this.$refs['minuteScrollbar'].scrollTop(this.minuteVal * this.scrollFix);
                        this.$refs['secondScrollbar'].scrollTop(this.secondVal * this.scrollFix);
                    });
                }
            }
        },
        computed: {
            hourLoop() {
                return this.initLoopArr(24);
            },
            minuteLoop() {
                return this.initLoopArr(60);
            },
            secondLoop() {
                return this.initLoopArr(60);
            },
            computedClass() {
                const classes = [];
                classes.push('am-timepicker');

                if (!this.caret) {
                    classes.push('am-timepicker-no-caret');
                }

                return classes.join(' ');
            }
        },
        components: {
            Scrollbar,
            AmButton: Button
        }
    };
</script>
