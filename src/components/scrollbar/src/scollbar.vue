<template>
    <div
        @click="calculateSize"
        :class="computedClass"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        :style="computedStyle"
        ref="scrollWrapper" >
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
            :area="{ height: scrollAreaHeight }"
            :wrapper="{ height: scrollWrapperHeight }"
            :scrolling="vMovement"
            :dragging-from-parent="dragging"
            :on-change-position="handleChangePosition"
            :on-dragging="handleScrollbarDragging"
            :on-stop-drag="handleScrollbarStopDrag">
        </vertical>
        <horizontal
            v-if="ready"
            :showTrack="showTrack"
            :area="{ width: scrollAreaWidth }"
            :wrapper="{ width: scrollWrapperWidth }"
            :scrolling="hMovement"
            :dragging-from-parent="dragging"
            :on-change-position="handleChangePosition"
            :on-dragging="handleScrollbarDragging"
            :on-stop-drag="handleScrollbarStopDrag">
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
            height: Number
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
                scrollAreaHeight: null,
                scrollAreaWidth: null,
                scrollWrapperHeight: null,
                scrollWrapperWidth: null,
                vMovement: 0,
                hMovement: 0,
                dragging: false,
                start: {
                    y: 0,
                    x: 0
                },
                showTrack: this.autoHide ? false : true,
                timer: null
            }
        },
        methods: {
            mouseEnter() {
                if (this.autoHide) {
                    this.showTrack = true;
                }
            },
            mouseLeave() {
                if (this.autoHide) {
                    this.showTrack = false;
                }
            },
            scroll(e) {
                e.preventDefault()
                e.stopPropagation();

                this.calculateSize(() => {

                    let num = this.speed;
                    let shifted = e.shiftKey;
                    let scrollY = e.deltaY > 0 ? num : -(num);
                    let scrollX = e.deltaX > 0 ? num : -(num);

                    if (shifted && e.deltaX == 0) {
                        scrollX = e.deltaY > 0 ? num : -(num);
                    }

                    let nextY = this.top + scrollY;
                    let nextX = this.left + scrollX;

                    let canScrollY = this.scrollAreaHeight > this.scrollWrapperHeight;
                    let canScrollX = this.scrollAreaWidth > this.scrollWrapperWidth;

                    if (canScrollY && !shifted) {
                        this.normalizeVertical(nextY);
                    }
                    if (shifted && canScrollX) {
                        this.normalizeHorizontal(nextX);
                    }
                })
            },

            startDrag(e) {
                e.preventDefault();
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
            },
            scrollToY(y) {
                this.normalizeVertical(y);
            },
            scrollToX(x) {
                this.normalizeVertical(x);
            },
            normalizeVertical(next) {
                let elementSize = this.getSize();
                let lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollWrapperHeight;

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
                let elementSize = this.getSize()
                let rightEnd = elementSize.scrollAreaWidth - this.scrollWrapperWidth

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
                    if (orientation == 'vertical') {
                        this.normalizeVertical(next * this.scrollAreaHeight);
                    }
                    if (orientation == 'horizontal') {
                        this.normalizeHorizontal(next * this.scrollAreaWidth);
                    }
                })
            },
            handleScrollbarDragging() {
                this.dragging = true;
            },
            handleScrollbarStopDrag() {
                this.dragging = false;
            },
            getSize() {
                if (!this.isMount) {
                    return {};
                }
                let $scrollArea = this.$refs.scrollArea;
                let $scrollWrapper = this.$refs.scrollWrapper;
                let elementSize = {
                    scrollAreaHeight: $scrollArea.clientHeight,
                    scrollAreaWidth: $scrollArea.clientWidth,
                    scrollWrapperHeight: $scrollWrapper.clientHeight,
                    scrollWrapperWidth: $scrollWrapper.clientWidth,
                };

                return elementSize;
            },
            calculateSize(cb) {
                if (this.autoHide) {
                    this.showTrack = true;
                    if (this.timer !== null) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        this.showTrack = false;
                        this.timer = null;
                    }, 2000);
                }
                if (typeof cb !== 'function') {
                    cb = null;
                }
                let elementSize = this.getSize();
                if (elementSize.scrollWrapperHeight !== this.scrollWrapperHeight ||
                    elementSize.scrollWrapperWidth !== this.scrollWrapperWidth ||
                    elementSize.scrollAreaHeight !== this.scrollAreaHeight ||
                    elementSize.scrollAreaWidth !== this.scrollAreaWidth) {

                    this.scrollAreaHeight = elementSize.scrollAreaHeight;
                    this.scrollAreaWidth = elementSize.scrollAreaWidth;
                    this.scrollWrapperHeight = elementSize.scrollWrapperHeight;
                    this.scrollWrapperWidth = elementSize.scrollWrapperWidth;
                    this.ready = true;

                    return cb ? cb() : false;
                } else {
                    return cb ? cb() : false
                }
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
                    style['height'] = this.height + 'px';
                }

                return style;
            }
        },
        mounted() {
            this.calculateSize();
            this.isMount = true;
            window.addEventListener('resize', this.calculateSize);
        },
        beforeDestroy() {
            this.isMount = false;
            window.removeEventListener('resize', this.calculateSize);
        }
    }
</script>

