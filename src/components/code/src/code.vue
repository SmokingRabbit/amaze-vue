<template>
    <pre :class="computedClass">
        <code :class="syntax" ref="container">
            <slot></slot>
        </code>
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

<style lang="less">
    @import "../../../styles/main.less";
    @import "./code.less";

    .hljs {
      overflow: visible;
    }


    .hljs,
    .hljs-subst {
      color: #444;
    }

    .hljs-comment {
        color: #888888;
    }

    .hljs-keyword,
    .hljs-attribute,
    .hljs-selector-tag,
    .hljs-meta-keyword,
    .hljs-doctag,
    .hljs-name {
        font-weight: bold;
    }

    .hljs-type,
    .hljs-string,
    .hljs-number,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-quote,
    .hljs-template-tag,
    .hljs-deletion {
        color: #880000;
    }

    .hljs-title,
    .hljs-section {
        color: #880000;
        font-weight: bold;
    }

    .hljs-regexp,
    .hljs-symbol,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-link,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #BC6060;
    }

    .hljs-literal {
      color: #78A960;
    }

    .hljs-built_in,
    .hljs-bullet,
    .hljs-code,
    .hljs-addition {
        color: #397300;
    }

    .hljs-meta {
        color: #1f7199;
    }

    .hljs-meta-string {
        color: #4d99bf;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }
</style>
