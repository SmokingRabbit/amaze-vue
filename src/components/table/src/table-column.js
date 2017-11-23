export default {
    name: 'am-table-column',
    props: {
        prop: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        width: Number
    },
    created() {
        if (this.$parent.$options._componentTag === 'am-table') {
            this.$parent.appendField(this.$options.propsData);
        }
    },
    render() {
        return null;
    }
};
