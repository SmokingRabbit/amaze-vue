<template>
    <ul :class="computedClass">
        <li :class="{'am-disabled': value === 1 || disabled}" @click="value !== 1 && changePage(1)">
            <a href="javascript:void(0)">{{ firstBtnText }}</a>
        </li>
        <li :class="{'am-disabled': value === 1 || disabled}" @click="value !== 1 && changePage(value - 1)">
            <a href="javascript:void(0)">&laquo; {{ preBtnText }}</a>
        </li>
        <li v-for="num,key in loop"
            :key="key"
            :class="{'am-active': num === value, 'am-disabled': disabled && num !== value}"
            @click="num !== value && changePage(num)">
            <a href="javascript:void(0)">{{ num }}</a>
        </li>
        <li :class="{'am-disabled': value === pageCount || disabled}" @click="value !== pageCount && changePage(value + 1)">
            <a href="javascript:void(0)">{{ nextBtnText }} &raquo;</a>
        </li>
        <li :class="{'am-disabled': value === pageCount || disabled}" @click="value !== pageCount && changePage(pageCount)">
            <a href="javascript:void(0)">{{ lastBtnText }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'am-pagination',
        props: {
            customClass: String,
            value: {
                type: Number,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            align: {
                type: String,
                validator(value) {
                    return ['center', 'right'].includes(value);
                }
            },
            total: {
                type: Number,
                required: true
            },
            pageSize: {
                type: Number,
                default: 10
            },
            showPageBtnCount: {
                type: Number,
                default: 7
            },
            firstBtnText: {
                type: String,
                default: '首页'
            },
            lastBtnText: {
                type: String,
                default: '尾页'
            },
            preBtnText: {
                type: String,
                default: '上一页'
            },
            nextBtnText: {
                type: String,
                default: '下一页'
            }
        },
        methods: {
            changePage(pageNum) {
                if (this.disabled) {
                    return;
                }

                this.$emit('input', pageNum);
                this.$emit('change', pageNum);
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-pagination');

                if (this.disabled) {
                    classes.push('am-pagination-disabled');
                }
                if (this.align !== undefined) {
                    if (this.align === 'center') {
                        classes.push('am-pagination-centered');
                    }
                    else {
                        classes.push('am-pagination-right');
                    }
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            pageCount() {
                let Count = Math.ceil(this.total / this.pageSize);
                return Count < 0 ? 1 : Count;
            },
            loop() {
                const fix = Math.floor(this.showPageBtnCount / 2);
                let start = this.value;

                if (start - fix <= 0) {
                    start = 1;
                }
                else if (start + this.showPageBtnCount >= this.pageCount) {
                    start = this.pageCount - (this.showPageBtnCount - 1);

                    if (this.value + fix < this.pageCount) {
                        start = this.value - fix;
                    }
                }
                else {
                    start -= fix;
                }

                const arr = [];

                let pageGroupCount = this.pageCount < this.showPageBtnCount ? this.pageCount : this.showPageBtnCount;

                for (let i = 0; i < pageGroupCount; i++) {
                    arr.push(i + start);
                }

                return arr;
            }
        }
    };
</script>
