<template>
    <tbody>
        <tr>
            <td colspan="7">
                <span
                    v-for="val,key in loop"
                    :key="key"
                    :class="{'am-active': curYear === val, ' am-datepicker-old': key === 0 || key + 1 === loop.length}"
                    @click.stop="clickHandle(val)"
                > {{ val }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>
    export default {
        name: 'am-datepicker-year',
        props: {
            value: {},
            curYear: Number
        },
        methods: {
            clickHandle(year) {
                this.$emit('input', year);
                this.$emit('change', year);
            }
        },
        computed: {
            loop() {
                const arr = [];
                let year = parseInt(this.value / 10, 10) * 10;

                for (let i = -1; i < 11; i++) {
                    arr.push(year + i);
                }

                return arr;
            }
        }
    }
</script>