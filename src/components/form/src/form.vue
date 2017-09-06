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
            file: {
                type: Boolean,
                default: false
            },
            help: {
                type: Boolean,
                default: false
            },
            group: {
                type: Boolean,
                default: false
            },
            feedback: {
                type: Boolean,
                default: false
            },
            set: {
                type: Boolean,
                default: false
            },
            icon: {
                type: Boolean,
                default: false
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

                if (this.file) {
                    classes.push('am-form-file');
                }

                if (this.help) {
                    classes.push('am-form-help');
                }

                if (this.group) {
                    classes.push('am-form-group');
                }

                if (this.feedback) {
                    classes.push('am-form-feedback');
                }

                if (this.set) {
                    classes.push('am-form-set');
                }

                if (this.icon) {
                    classes.push('am-form-icon');
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
