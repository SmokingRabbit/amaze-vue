<template>
    <table :class="computedClass">
        <thead v-if="data && rowFields">
            <tr>
                <td v-if="select">{{ selectText }}</td>
                <td v-for="row in rowFields" :width="row.width">{{ row.label }}</td>
            </tr>
        </thead>
        <tbody v-if="data && rowFields">
            <tr v-for="item,index in formatData" :class="{'am-active': item.active}">
                <td v-if="select">
                    <am-checkbox :label="index" :showLabel="false" v-model="selectModel"></am-checkbox>
                </td>
                <td v-for="field in rowFields" :class="[item[field.prop].color ? 'am-' + item[field.prop].color : '']">
                    {{ item[field.prop].value }}
                </td>
            </tr>
        </tbody>
        <tfoot v-if="data && select && selectAll">
            <tr>
                <td><am-checkbox label="全选" @change="selectAllHandle" v-model="selectAllModel"></am-checkbox></td>
                <td :colspan="rowFields.length"><slot name="tfoot"></slot></td>
            </tr>
        </tfoot>
        <slot></slot>
    </table>
</template>

<script>
    import { Checkbox } from '../../checkbox';

    export default {
        name: 'am-table',
        data() {
            return {
                rowFields: [],
                selectModel: [],
                selectAllModel: false
            }
        },
        props: {
            customClass: String,
            data: {
                type: Array
            },
            value: {
                type: Array
            },
            border: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: false
            },
            hover: {
                type: Boolean,
                default: false
            },
            compact: {
                type: Boolean,
                default: false
            },
            nowrap: {
                type: Boolean,
                default: false
            },
            select: {
                type: Boolean,
                default: false
            },
            selectText: {
                type: String,
                default: '选择'
            },
            selectAll: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            appendField(filld) {
                this.rowFields.push(filld);
            },
            selectAllHandle(chekced) {
                if (chekced) {
                    const selectModel = []
                    this.data.forEach((item, index) => {
                        selectModel.push(index);
                    });
                    this.selectModel = selectModel;
                }
                else {
                    this.selectModel = [];
                }
            }
        },
        watch: {
            selectModel(curVal, oldVal) {
                const data = [];
                curVal.forEach((index) => {
                    data.push(this.data[index]);
                });
                this.$emit('input', data);
                if (curVal.length === this.data.length) {
                    this.selectAllModel = true;
                }
                else {
                    this.selectAllModel = false;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-table');

                if (this.border) {
                    classes.push('am-table-bordered');
                }

                if (this.striped) {
                    classes.push('am-table-striped');
                }

                if (this.hover) {
                    classes.push('am-table-hover');
                }

                if (this.compact) {
                    classes.push('am-table-compact');
                }

                if (this.nowrap) {
                    classes.push('am-text-nowrap');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            formatData() {
                const data = [];

                this.data.forEach((item, index) => {
                    const obj = {};
                    for (let prop in item) {
                        if (typeof item[prop] === 'object') {
                            obj[prop] = item[prop];
                        }
                        else {
                            obj[prop] = {
                                value: item[prop]
                            };
                        }
                    }
                    data.push(obj);
                });

                return data;
            }
        },
        components: {
            AmCheckbox: Checkbox
        }
    }
</script>
