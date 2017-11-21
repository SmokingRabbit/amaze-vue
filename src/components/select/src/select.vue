<template>
    <div :class="computedClass" ref="container" @click.stop="triggerHandle">
        <button :class="['am-selected-btn', 'am-btn', 'am-dropdown-toggle', 'am-btn-' + color]">
            <span class="am-selected-status am-fl">{{ text }}</span>
            <i class="am-selected-icon am-icon-caret-down"></i>
        </button>
        <select-dropdown
            :options="options"
            :search="search"
            :isFoucs="isFoucs"
            :maxHeight="maxHeight"
            :multiple="multiple"
            :width="width"
            :color="color"
            v-model="selectValue"
        ></select-dropdown>
    </div>
</template>

<script>
    import * as doms from '../../../utils/dom';
    import SelectDropdown from './select-dropdown';

    export default {
        name: 'am-select',
        data() {
            return {
                isFoucs: false,
                selectValue: []
            }
        },
        props: {
            customClass: String,
            placeholder: {
                type: String,
                default: '请选择'
            },
            width: String,
            size: {
                type: String,
                validator(value) {
                    return ['xl', 'lg', 'xm', 'xs'].includes(value);
                }
            },
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
                }
            },
            maxHeight: {
                type: Number,
                default: 260
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            search: {
                type: Boolean,
                default: false
            },
            options: {
                type: Array,
                required: true
            }
        },
        methods: {
            triggerHandle() {
                this.isFoucs = !this.isFoucs;
            },
            globalClickHandle() {
                if (this.isFoucs) {
                    this.triggerHandle();
                }
            }
        },
        watch: {
            selectValue(curVal, oldVal) {
                this.$emit('select', this.multiple ? curVal : curVal[0]);
                this.$emit('change', curVal[curVal.length - 1]);
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-selected');
                classes.push('am-dropdown');

                if (this.isFoucs) {
                    classes.push('am-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }
                return classes.join(' ');
            },
            text() {
                if (!this.selectValue.length) {
                    return this.placeholder;
                }

                const text = [];
                this.selectValue.forEach((item) => {
                    text.push(item.label);
                });
                return text.join('，');
            }
        },
        components: {
            SelectDropdown
        },
        mounted() {
            doms.on(document.body, 'click', this.globalClickHandle);
            if (this.width !== undefined) {
                doms.css(this.$el, 'width', this.width);
            }
        },
        beforeDestory() {
            doms.off(document.body, 'click', this.globalClickHandle);
        }
    }
</script>