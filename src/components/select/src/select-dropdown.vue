<template>
    <transition :name="transition">
        <div :class="computedClass" v-if="visible">
            <div class="am-selected-search" v-if="search" @click.stop>
                <am-input-group :block="true" size="sm">
                    <am-input-label :transparent="true" slot="prepend">
                        <am-icon type="search" :color="iconColor" ></am-icon>
                    </am-input-label>
                    <am-input v-model="searchVal" placeholder="请输入搜索内容" size="sm"></am-input>
                </am-input-group>
            </div>
            <am-scrollbar :height="scrollbarHeight">
                <ul class="am-selected-list" ref="lists">
                    <li
                        v-for="item,key in renderOptions"
                        :class="{'am-checked': isSelected(item)}"
                        :key="key"
                        @click.stop="selectHandle(item, key)"
                    >
                        <span class="am-selected-text">{{ item.label }}</span>
                        <i class="am-icon-check"></i>
                    </li>
                </ul>
            </am-scrollbar>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../mixins/popup';
    import { Input, InputGroup, InputLabel } from '../../input/';
    import { Icon } from '../../icon/';
    import { Scrollbar } from '../../scrollbar';

    export default {
        name: 'am-select-dropdown',
        mixins: [ Popup ],
        data() {
            const selectValue = [];
            this.options.forEach((item) => {
                if (!this.multiple && selectValue.length) {
                    return;
                }
                if (item.selected) {
                    selectValue.push(item);
                }
            });

            return {
                selectValue,
                saveOptions: this.options,
                renderOptions: this.options,
                searchVal: '',
                scrollbarHeight: this.maxHeight,
                iconColor: this.color === 'default' ? undefined : this.color
            };
        },
        props: [ 'value', 'options', 'maxHeight', 'isFoucs', 'search', 'multiple', 'color', 'transition', 'caret' ],
        methods: {
            isSelected(item) {
                let is = false;
                this.selectValue.every((_item) => {
                    if (_item.value === item.value && _item.label === item.label) {
                        is = true;
                        return false;
                    }
                    return true;
                });
                return is;
            },
            removeSelectItem(item) {
                this.selectValue.splice(this.selectValue.findIndex((_item) => {
                    return _item.label === item.label && _item.value === item.value;
                }), 1);
            },
            selectHandle(item, key) {
                if (this.isSelected(item)) {
                    if (!this.multiple) {
                        return this.hide();
                    }
                    else {
                        return this.removeSelectItem(item);
                    }
                }

                if (!this.multiple) {
                    this.selectValue = [item];
                    this.hide();
                }
                else {
                    this.selectValue.push(item);
                }
            },
            compileSelected(options) {
                const selectValue = [];
                options.every((item) => {
                    if (item.selected) {
                        selectValue.push(item);
                        if (!this.multiple) {
                            return false;
                        }
                    }
                    return true;
                });
                this.selectValue = selectValue;
            },
            popupPosition() {
                const { top, left, height, width } = this.$parent.$el.getBoundingClientRect();
                const { top: offsetTop, left: offsetLeft } = this.getPageOffset();
                const ret = {
                    top: top + offsetTop + height + 'px',
                    left: left + offsetLeft + 'px',
                    width: width + 'px',
                    zIndex: this.getZIndex()
                };

                return ret;
            }
        },
        watch: {
            isFoucs(curVal, oldVal) {
                if (curVal) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            options(curVal, oldVal) {
                this.renderOptions = curVal;
                this.saveOptions = curVal;
                this.scrollbarHeight = this.maxHeight;
                this.hide();
                this.compileSelected(curVal);
            },
            selectValue(curVal, oldVal) {
                this.$emit('input', curVal);
            },
            visible(curVal, oldVal) {
                if (curVal) {
                    this.$parent.isFoucs = true;
                }
                else {
                    this.$parent.isFoucs = false;
                }
            },
            searchVal(curVal, oldVal) {
                if (!curVal) {
                    this.renderOptions = this.saveOptions;
                }
                else {
                    const filter = [];
                    this.saveOptions.forEach((item) => {
                        if (item.label.indexOf(curVal) > -1 || (item.guesser && item.guesser.indexOf(curVal) > -1)) {
                            filter.push(item);
                        }
                    });
                    this.renderOptions = filter;
                }
            }
        },
        created() {
            this.compileSelected(this.options);
        },
        mounted() {
            document.body.appendChild(this.$el);
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-selected-content');
                classes.push('am-dropdown-content');

                if (!this.caret) {
                    classes.push('am-dropdown-no-caret');
                }

                return classes.join(' ');
            }
        },
        components: {
            AmInput: Input,
            AmIcon: Icon,
            AmInputGroup: InputGroup,
            AmInputLabel: InputLabel,
            AmScrollbar: Scrollbar
        }
    };
</script>
