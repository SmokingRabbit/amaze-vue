<template>
    <div :class="computedClass" v-if="visible">
        <div class="nprogress-bar" :style="computedStyle">
            <div class="nprogress-peg"></div>
        </div>
        <div class="nprogress-spinner" >
            <div class="nprogress-spinner-icon"></div>
        </div>
    </div>
</template>

<script>
    import Popup from '../../../mixins/popup';

    export default {
        name: 'am-nprogress',
        mixins: [ Popup ],
        data() {
            return {
                computedStyle: {},
                incMaker: 0
            };
        },
        props: {
            customClass: {
                type: String
            },
            speed: {
                type: Number,
                default: 200
            },
            minimum: {
                type: Number,
                default: 0.08
            },
            inc: {
                type: Number,
                default: 0
            }
        },
        methods: {
            clamp(n, min, max) {
                if (n < min) {
                    return min;
                }
                if (n > max) {
                    return max;
                }
                return n;
            },
            render(inc) {
                const { speed, minimum } = this;
                const precent = this.clamp(inc, minimum, 1);

                if (precent === 1) {
                    return clearInterval(this.timer);
                }

                this.computedStyle = {
                    transition: 'all ' + speed + 'ms linear',
                    transform: 'translate3d('+ ((-1 + precent) * 100) + '%, 0, 0)'
                };
            },
            start() {
                this.render(this.inc);
                this.show();

                this.incMaker = this.inc;
                this.timer = setInterval(() => {
                    this.incMaker += Math.random() / 10;
                    this.render(this.incMaker);
                }, this.speed);
            },
            end() {
                if (this.timer) {
                    clearInterval(this.timer);
                }

                this.computedStyle = {
                    transition: 'all ' + this.speed + 'ms linear',
                    transform: 'translate3d(0%, 0, 0)'
                };

                setTimeout(this.hide, this.speed + 800);
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('nprogress');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
        }
    }
</script>

<style lang="less">
    @import "../../../styles/main.less";
    @import "./nprogress.less";
</style>
