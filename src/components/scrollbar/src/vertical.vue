<template>
    <div
        v-if="height < 100"
        :class="['am-scrollbar-vertical', {'am-scrollbar-show': showTrack && height < 100}]"
        ref="container"
        @click="jump"
    >
        <div
            class="am-scrollbar-vertical-track"
            ref="scrollbar"
            @touchstart="startDrag"
            @mousedown="startDrag "
            :style="{
                height: height + '%',
                top: scrolling + '%'
            }"
        >
        </div>
    </div>
</template>

<script>
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-vertical',
        props: {
            draggingFromParent: Boolean,
            scrolling: Number,
            scrollAreaHeight: Number,
            scrollContainerHeight: Number,
            onChangePosition: Function,
            onDragging: Function,
            onStopDrag: Function,
            showTrack: Boolean
        },
        data() {
            return {
                height: 0,
                dragging: false,
                start: 0
            };
        },
        watch: {
            scrollContainerHeight (curVal, oldVal) {
                this.calculateSize(this);
            },
            scrollAreaHeight (curVal, oldVal) {
                this.calculateSize(this);
            }
        },
        methods: {
            startDrag(e) {
                e.preventDefault();
                e.stopPropagation();
                e = e.changedTouches ? e.changedTouches[0] : e;
                this.dragging = true;
                this.start = e.clientY;
            },
            onDrag(e) {
                if (this.dragging) {
                    this.onDragging();
                    e.preventDefault();
                    e.stopPropagation();
                    e = e.changedTouches ? e.changedTouches[0] : e;
                    let yMovement = e.clientY - this.start;
                    let yMovementPercentage = yMovement / this.scrollContainerHeight * 100;
                    this.start = e.clientY;
                    let next = this.scrolling + yMovementPercentage;
                    this.onChangePosition(next, 'vertical');
                }
            },
            stopDrag(e) {
                if (this.dragging) {
                    this.onStopDrag();
                    this.dragging = false;
                }
            },
            jump(e) {
                let isContainer = e.target === this.$refs.container;
                if (isContainer) {
                    let position = this.$refs.scrollbar.getBoundingClientRect();
                    let yMovement = e.clientY - position.top;
                    let centerize = (this.height / 2);
                    let yMovementPercentage = yMovement / this.scrollContainerHeight * 100 - centerize;
                    this.start = e.clientY;
                    let next = this.scrolling + yMovementPercentage;
                    this.onChangePosition(next, 'vertical');
                }
            },
            calculateSize(source) {
                this.height = source.scrollContainerHeight / source.scrollAreaHeight * 100;
            }
        },
        mounted() {
            this.calculateSize(this);
            on(document.body, 'mousemove', this.onDrag);
            on(document.body, 'touchmove', this.onDrag);
            on(document.body, 'mouseup', this.stopDrag);
            on(document.body, 'touchend', this.stopDrag);
        },
        beforeDestroy() {
            off(document.body, 'mousemove', this.onDrag);
            off(document.body, 'touchmove', this.onDrag);
            off(document.body, 'mouseup', this.stopDrag);
            on(document.body, 'touchend', this.stopDrag);
        }
    };
</script>
