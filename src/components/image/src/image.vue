<template>
    <img :src="src" :alt="alt" :class="computedClass" />
</template>

<script>
    export default {
        name: 'am-image',
        props: {
            customClass: String,
            src: {
                type: String,
                required: true
            },
            alt: String,
            responsive: {
                type: Boolean,
                default: false
            },
            thumbnail: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.responsive) {
                    classes.push('am-img-responsive');
                }

                if (this.thumbnail) {
                    classes.push('am-img-thumbnail');
                }

                if (this.round) {
                    classes.push('am-round');
                }

                if (this.circle) {
                    classes.push('am-circle');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
