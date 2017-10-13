<template>
    <tbody>
        <tr>
            <td colspan="7">
                <span
                    v-for="val,key in loop"
                    :key="key"
                    :class="{'am-active': curMonth === key + 1}"
                    @click.stop="clickHandle(key + 1)"
                > {{ val }}</span>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import { monthZHMap, monthENMap } from './language';

    export default {
        name: 'am-datepicker-month',
        props: {
            value: {},
            curYear: Number,
            curMonth: Number,
            language: String
        },
        methods: {
            clickHandle(month) {
                this.$emit('input', month);
                this.$emit('change', month);
            }
        },
        computed: {
            loop() {
                const arr = [];
                let map = this.language === 'zh' ? monthZHMap : monthENMap;

                for (let i = 1; i < 13; i++) {
                    arr.push(map[i]);
                }

                return arr;
            }
        }
    }
</script>