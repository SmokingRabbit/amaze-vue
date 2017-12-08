<template>
<pre :class="computedClass">
<code :class="syntax" ref="container"><slot></slot></code>
</pre>
</template>

<script>
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
            if (window.hljs && typeof window.hljs.highlightBlock === 'function') {
                window.hljs.highlightBlock(this.$refs['container']);
            }
        }
    };
</script>
