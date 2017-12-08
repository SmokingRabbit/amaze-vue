<template>
    <div
        @click="calculateSize"
        :class="computedClass"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        :style="computedStyle"
        ref="scrollContainer" >
        <div class="am-scrollbar-area"
            ref="scrollArea"
            @wheel="scroll"
            @touchstart="startDrag"
            @touchmove="onDrag"
            @touchend="stopDrag"
            :style="{
                transform: 'translate(' + (this.left * -1 +'px,') + (this.top * -1 +'px)')
            }"
        >
            <slot></slot>
        </div>
        <vertical
            v-if="ready"
            :showTrack="showTrack"
            :scrollAreaHeight="scrollAreaHeight"
            :scrollContainerHeight="scrollContainerHeight"
            :scrolling="vMovement"
            :draggingFromParent="dragging"
            :onChangePosition="handleChangePosition"
            :onDragging="handleScrollbarDragging"
            :onStopDrag="handleScrollbarStopDrag">
        </vertical>
        <horizontal
            v-if="ready"
            :showTrack="showTrack"
            :scrollAreaWidth="scrollAreaWidth"
            :scrollContainerWidth="scrollContainerWidth"
            :scrolling="hMovement"
            :draggingFromParent="dragging"
            :onChangePosition="handleChangePosition"
            :onDragging="handleScrollbarDragging"
            :onStopDrag="handleScrollbarStopDrag">
        </horizontal>
    </div>
</template>


<script>
    import Vertical from './vertical';
    import Horizontal from './horizontal';

    export default {
        name: 'am-scrollbar',
        props: {
            customClass: String,
            speed: {
                type: Number,
                default: 53
            },
            autoHide: {
                type: Boolean,
                default: true
            },
            width: Number,
            height: Number,
            delay: {
                type: Number,
                default: 1000
            }
        },
        components: {
            Vertical,
            Horizontal
        },
        data() {
            return {
                ready: false,
                top: 0,
                left: 0,
                scrollAreaHeight: 0,
                scrollAreaWidth: 0,
                scrollContainerHeight: 0,
                scrollContainerWidth: 0,
                vMovement: 0,
                hMovement: 0,
                dragging: false,
                start: {
                    y: 0,
                    x: 0
                },
                showTrack: !this.autoHide,
                timer: null
            };
        },
        methods: {
            mouseEnter() {
                if (this.autoHide) {
                    this.showTrack = true;
                    if (this.timer !== null) {
                        clearTimeout(this.timer);
                    }
                }
            },
            mouseLeave() {
                if (this.autoHide) {
                    this.timer = setTimeout(() => {
                        this.showTrack = false;
                        this.timer = null;
                    }, this.delay);
                }
            },
            scroll(e) {
                this.calculateSize(() => {
                    let num = this.speed;
                    let shifted = e.shiftKey;
                    let scrollY = e.deltaY > 0 ? num : -(num);
                    let scrollX = e.deltaX > 0 ? num : -(num);

                    if (shifted && e.deltaX === 0) {
                        scrollX = e.deltaY > 0 ? num : -(num);
                    }

                    let nextY = this.top + scrollY;
                    let nextX = this.left + scrollX;
                    let canScrollY = this.scrollAreaHeight > this.scrollContainerHeight;
                    let canScrollX = this.scrollAreaWidth > this.scrollContainerWidth;
                    if (canScrollY && !shifted) {
                        this.normalizeVertical(nextY);
                    }
                    if (shifted && canScrollX) {
                        this.normalizeHorizontal(nextX);
                    }

                    if ((nextY + this.scrollContainerHeight <= this.scrollAreaHeight && nextY >= 0) ||
                        (nextX + this.scrollContainerWidth <= this.scrollAreaWidth && nextX >= 0)
                    ) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
                this.$emit('scroll', e);
            },
            getValues() {
                let elementSize = this.getSize();

                return {
                    scrollTop: this.top,
                    scrollLeft: this.left,
                    clientWidth: elementSize.scrollContainerWidth,
                    clientHeight: elementSize.scrollContainerHeight,
                    scrollAreaHeight: elementSize.scrollAreaHeight,
                    scrollAreaWidth: elementSize.scrollAreaWidth
                };
            },
            startDrag(e) {
                // to fix mobile click event
                // e.preventDefault();
                e.stopPropagation();
                e = e.changedTouches ? e.changedTouches[0] : e;

                this.calculateSize(() => {
                    this.dragging = true;
                    this.start = {
                        y: e.pageY,
                        x: e.pageX
                    };
                });
            },
            onDrag(e) {
                if (this.dragging) {
                    e.preventDefault();
                    e.stopPropagation();
                    e = e.changedTouches ? e.changedTouches[0] : e;

                    let yMovement = this.start.y - e.clientY;
                    let xMovement = this.start.x - e.clientX;

                    this.start = {
                        y: e.clientY,
                        x: e.clientX
                    };

                    let nextY = this.top + yMovement;
                    let nextX = this.left + xMovement;
                    this.normalizeVertical(nextY);
                    this.normalizeHorizontal(nextX);
                }
            },
            stopDrag(e) {
                this.dragging = false;
                // fix 移动端拖动的问题，有点流氓，后期优化吧
                this.$emit('scroll', e);
            },
            scrollToY(y) {
                this.normalizeVertical(y);
            },
            scrollToX(x) {
                this.normalizeVertical(x);
            },
            scrollTop(y) {
                this.scrollToY(y);
            },
            scrollLeft(x) {
                this.scrollToX(x);
            },
            normalizeVertical(next) {
                let elementSize = this.getSize();
                let lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollContainerHeight;

                if (next > lowerEnd) {
                    next = lowerEnd;
                }
                else if (next < 0) {
                    next = 0;
                }

                this.top = next;
                this.vMovement = next / elementSize.scrollAreaHeight * 100;
            },
            normalizeHorizontal(next) {
                let elementSize = this.getSize();
                let rightEnd = elementSize.scrollAreaWidth - this.scrollContainerWidth;

                if (next > rightEnd) {
                    next = rightEnd;
                }
                else if (next < 0) {
                    next = 0;
                }

                this.left = next;
                this.hMovement = next / elementSize.scrollAreaWidth * 100;
            },
            handleChangePosition(movement, orientation) {
                this.calculateSize(() => {
                    let next = movement / 100;
                    if (orientation === 'vertical') {
                        this.normalizeVertical(next * this.scrollAreaHeight);
                    }
                    if (orientation === 'horizontal') {
                        this.normalizeHorizontal(next * this.scrollAreaWidth);
                    }
                });
            },
            handleScrollbarDragging() {
                this.dragging = true;
            },
            handleScrollbarStopDrag() {
                this.dragging = false;
            },
            getSize() {
                let $scrollArea = this.$refs.scrollArea;
                let $scrollContainer = this.$refs.scrollContainer;
                let elementSize = {
                    scrollAreaHeight: $scrollArea.clientHeight,
                    scrollAreaWidth: $scrollArea.clientWidth,
                    scrollContainerHeight: $scrollContainer.clientHeight,
                    scrollContainerWidth: $scrollContainer.clientWidth
                };

                return elementSize;
            },
            calculateSize(cb) {
                if (typeof cb !== 'function') {
                    cb = null;
                }
                let elementSize = this.getSize();
                if (elementSize.scrollContainerHeight !== this.scrollContainerHeight ||
                    elementSize.scrollContainerWidth !== this.scrollContainerWidth ||
                    elementSize.scrollAreaHeight !== this.scrollAreaHeight ||
                    elementSize.scrollAreaWidth !== this.scrollAreaWidth
                ) {
                    this.scrollAreaHeight = elementSize.scrollAreaHeight;
                    this.scrollAreaWidth = elementSize.scrollAreaWidth;
                    this.scrollContainerHeight = elementSize.scrollContainerHeight;
                    this.scrollContainerWidth = elementSize.scrollContainerWidth;
                    this.ready = true;
                }

                return cb ? cb() : false;
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push('am-scrollbar');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            computedStyle() {
                const style = {};

                if (this.width !== undefined) {
                    style['width'] = this.width + 'px';
                }
                if (this.height !== undefined) {
                    style['maxHeight'] = this.height + 'px';
                }

                return style;
            }
        },
        mounted() {
            setTimeout(() => {
                this.calculateSize();
            }, 100);
            window.addEventListener('resize', this.calculateSize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.calculateSize);
        }
    };
</script>
