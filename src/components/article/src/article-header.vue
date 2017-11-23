<template>
    <div :class="computedClass">
        <h1 class="am-article-title">{{ title }}</h1>
        <p class="am-article-meta" v-if="meta">{{ meta }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'am-article-header',
        props: {
            customClass: String,
            title: {
                type: String,
                required: true
            },
            meta: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-article-hd');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
