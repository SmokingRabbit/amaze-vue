<template>
<pre :class="computedClass">
<code :class="syntax" ref="container"><slot v-pre></slot></code>
</pre>
</template>

<script>
    import hljs from './lib/highlight';

    export default {
        name: 'am-code',
        props: {
            customClass: {
                type: String
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            syntax: {
                type: String,
                default: 'javascript'
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.scrollable) {
                    classes.push('am-pre-scrollable');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            hljs.highlightBlock(this.$refs['container']);
        }
    }
</script>
