<template>
    <li :class="customClass" ref="container" :style="{transform: 'translateX('+ translate +'px)'}">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'am-slider-item',
        data() {
            return {
                translate: 0
            };
        },
        props: {
            customClass: {
                type: String
            }
        },
        methods: {
            translateItem(x) {
                this.translate = x;
            }
        }
    };
</script>
