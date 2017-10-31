<template>
    <div :class="computedClass">
        <input type="checkbox" :name="name" class="am-switch-input">

    </div>
</template>

<script>
    export default {
        name: 'am-switch',
        props: {

        },
        computed: {
            computedClass() {

            }
        }
    }
</script>