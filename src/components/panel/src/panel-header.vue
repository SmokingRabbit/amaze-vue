<template>
    <div :class="computedClass" v-html="titleRender">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-panel-header',
        props: {
            customClass: {
                type: String
            },
            title: {
                type: String,
                required: true
            },
            titleLevel: {
                type: Number,
                default: 4,
                validator(value) {
                    return value <= 6 && value > 0;
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-panel-hd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            titleRender() {
                if (this.title !== undefined) {
                    const { title, titleLevel } = this;

                    return `<h${titleLevel} class="am-panel-title">${title}</h${titleLevel}>`;
                }
                else {
                    return '';
                }
            }
        }
    };
</script>
