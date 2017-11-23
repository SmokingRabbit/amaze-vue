<template>
    <div :class="computedClass">
        <div :class="computedBarClass(color)" :style="{width: progress + '%'}">
            <template v-if="showProgress">{{ progress }}%</template>
        </div>
        <div
            v-for="row in pile"
            :class="computedBarClass(row.color)"
            :style="{width: row.progress + '%'}">
            <template v-if="showProgress">{{ row.progress }}%</template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'am-progress',
        props: {
            customClass: String,
            progress: {
                type: Number,
                required: true
            },
            showProgress: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                validaotr(value) {
                    return [
                        'secondary',
                        'success',
                        'warning',
                        'danger'
                    ].includes(value);
                }
            },
            size: {
                type: String,
                validaotr(value) {
                    return ['xs', 'sm'].includes(value);
                }
            },
            striped: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            pile: Array
        },
        methods: {
            computedBarClass(color) {
                let _class = 'am-progress-bar';

                if (color !== undefined) {
                    _class += ' ' + 'am-progress-bar-' + color;
                }

                return _class;
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-progress');

                if (this.size !== undefined) {
                    classes.push('am-progress-' + this.size);
                }

                if (this.striped) {
                    classes.push('am-progress-striped');
                }

                if (this.active) {
                    classes.push('am-active');
                }

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            }
        }
    };
</script>
