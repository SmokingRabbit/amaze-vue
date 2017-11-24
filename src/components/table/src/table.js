import { Checkbox } from '../../checkbox';

export default {
    name: 'am-table',
    data() {
        return {
            rowFields: [],
            selectModel: [],
            selectAllModel: false
        };
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
                const selectModel = [];
                this.data.forEach((item, index) => {
                    selectModel.push(index);
                });
                this.selectModel = selectModel;
            }
            else {
                this.selectModel = [];
            }
        },
        selectModelInput(val) {
            this.selectModel = val;
        },
        selectAllModelInput(val) {
            this.selectAllModel = val;
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

            if (!this.data) {
                return data;
            }

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
    render(h) {
        const { computedClass, data, formatData, rowFields, select, selectModel, selectText, selectAll, selectAllModel } = this;
        return (
            <table class={computedClass}>
                {
                    data && rowFields &&
                    <thead>
                        <tr>
                            { select && <td>{ selectText }</td> }
                            {
                                rowFields.map((row, key) => {
                                    return (<td key={key} width={row.width}>{ row.label }</td>);
                                })
                            }
                        </tr>
                    </thead>
                }
                {
                    data && rowFields &&
                    <tbody>
                        {
                            formatData.map((item, index) => {
                                return (
                                    <tr class={item.active ? 'am-active' : ''} key={index}>
                                        {
                                            select &&
                                            <td>
                                                <am-checkbox label={index} showLabel={false} value={selectModel} on-input={this.selectModelInput}></am-checkbox>
                                            </td>
                                        }
                                        {
                                            rowFields.map((field, key) => {
                                                const { render, value, color } = item[field.prop];
                                                return (
                                                    <td key={key} class={color ? 'am-' + color : ''}>
                                                        { typeof render === 'function' ? render(h, item, field.prop, index) : value }
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                }
                {
                    data && select && selectAll &&
                    <tfoot>
                        <tr>
                            <td><am-checkbox label="全选" on-change={this.selectAllHandle} value={selectAllModel} on-input={this.selectAllModelInput}></am-checkbox></td>
                            <td colspan={rowFields.length}>{ this.$slots.tfoot }</td>
                        </tr>
                    </tfoot>
                }
                { this.$slots.default }
            </table>
        );
    },
    components: {
        AmCheckbox: Checkbox
    }
};
