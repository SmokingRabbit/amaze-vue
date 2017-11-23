<template>
    <span :class="computedClass" :style="computedStyle">
        <slot></slot>
    </span>
</template>
<script>
    export default {
        name: 'am-animation',
        props: {
            type: {
                type: String,
                default: 'fade',
                validator(value) {
                    return [
                        'fade',
                        'scale-up',
                        'scale-down',
                        'slide-top',
                        'slide-bottom',
                        'slide-left',
                        'slide-right',
                        'slide-top-fixed',
                        'shake',
                        'spin',
                        'left-spring',
                        'right-spring'
                    ].includes(value);
                }
            },
            reverse: {
                type: Boolean,
                default: false
            },
            pause: {
                type: Boolean,
                default: false
            },
            delay: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 0.5
            },
            timingFun: {
                type: String,
                default: 'ease-out',
                validator(value) {
                    return [
                        'linear',
                        'ease',
                        'ease-in',
                        'ease-out',
                        'ease-in-out'
                    ].includes(value);
                }
            },
            fillMode: {
                type: String,
                default: 'none',
                validator(value) {
                    return [
                        'none',
                        'forwards',
                        'backwards',
                        'both'
                    ].includes(value);
                }
            },
            iterationCount: {
                validator(value) {
                    return value === 'infinite' || parseInt(value, 10) > 0;
                }
            },
            customClass: {
                type: String
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-animation-' + this.type);

                if (this.reverse) {
                    classes.push('am-animation-reverse');
                }

                if (this.pause) {
                    classes.push('am-animation-paused');
                }

                if (this.delay > 0) {
                    classes.push('am-animation-delay-' + this.delay);
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            computedStyle() {
                const styles = {};

                if (this.duration !== 0.5) {
                    styles['animation-duration'] = this.duration + 's';
                }

                if (this.timingFun !== 'ease-out') {
                    styles['animation-timing-function'] = this.timingFun;
                }

                if (this.fillMode !== 'both') {
                    styles['animation-fill-mode'] = this.fillMode;
                }

                if (this.iterationCount !== undefined) {
                    styles['animation-iteration-count'] = this.iterationCount;
                }

                styles['display'] = 'inline-block';
                return styles;
            }
        }
    };
</script>
