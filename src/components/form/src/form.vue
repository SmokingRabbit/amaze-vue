<template>
    <form :class="computedClass">
        <fieldset>
            <legend v-if="title">{{ title }}</legend>
            <slot></slot>
        </fieldset>
    </form>
</template>

<script>
    export default {
        name: 'am-form',
        props: {
            type: {
                type: String,
                validator(value) {
                    return ['file', 'help', 'group', 'feedback', 'set', 'icon'].indexOf(value) > -1;
                }
            },
            title: {
                type: String
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-form');

                if (this.type !== undefined) {
                    classes.push('am-form-' + this.type);
                }

                if (this.horizontal) {
                    classes.push('am-form-horizontal');
                }

                if (this.inline) {
                    classes.push('am-form-inline');
                }

                if (this.size !== undefined) {
                    classes.push('am-form-group-' + this.size);
                }

                return classes.join(' ');
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./form.less";
</style>
