<template>
    <div
        v-if="width < 100"
        :class="['am-scrollbar-horizontal', {'am-scrollbar-show': showTrack && width < 100}]"
        ref="container"
        @click="jump"
    >
        <div
            class="am-scrollbar-horizontal-track"
            ref="scrollbar"
            @touchstart="startDrag"
            @mousedown="startDrag"
            :style="{
                width: this.width+'%',
                left: this.scrolling + '%'
            }"
        >
        </div>
    </div>
</template>

<script>
    import { on, off } from '../../../utils/dom';

    export default {
        name: 'am-orizontal',
        props: {
            draggingFromParent: Boolean,
            scrolling: Number,
            scrollContainerWidth: Number,
            scrollAreaWidth: Number,
            onChangePosition: Function,
            onDragging: Function,
            onStopDrag: Function,
            showTrack: Boolean
        },
        data() {
            return {
                width: 0,
                dragging: false,
                start: 0
            };
        },
        watch: {
            scrollContainerWidth (curVal, oldVal) {
                this.calculateSize(this);
            },
            scrollAreaWidth (curVal, oldVal) {
                this.calculateSize(this);
            }
        },
        methods: {
            startDrag(e) {
                e.preventDefault();
                e.stopPropagation();
                e = e.changedTouches ? e.changedTouches[0] : e;
                this.dragging = true;
                this.start = e.clientX;
            },
            onDrag(e) {
                if (this.dragging) {
                    this.onDragging();
                    e.preventDefault();
                    e.stopPropagation();
                    e = e.changedTouches ? e.changedTouches[0] : e;
                    let xMovement = e.clientX - this.start;
                    let xMovementPercentage = xMovement / this.scrollContainerWidth * 100;
                    this.start = e.clientX;
                    let next = this.scrolling + xMovementPercentage;
                    this.onChangePosition(next, 'horizontal');
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
                    let xMovement = e.clientX - position.left;
                    let centerize = (this.width / 2);
                    let xMovementPercentage = xMovement / this.scrollContainerWidth * 100 - centerize;
                    this.start = e.clientX;
                    let next = this.scrolling + xMovementPercentage;
                    this.onChangePosition(next, 'horizontal');
                }
            },
            calculateSize(source) {
                this.width = source.scrollContainerWidth / source.scrollAreaWidth * 100;
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
