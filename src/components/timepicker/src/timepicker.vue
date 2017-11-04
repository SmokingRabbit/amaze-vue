<template>
	<div class="am-timepicker">
		<span class="am-timepicker-caret"></span>
		<div class="am-timepicker-container">
			<div class="am-timepicker-main">
				<div class="am-timepicker-select-wrap"></div>
				<scrollbar 
					ref="hourScrollbar" 
					customClass="am-timepicker-hour-container" 
					:autoHide="true"
					@scroll="hourOnScroll"
				>
					<ul>
						<li v-for="val in 24">{{ double(val - 1) }}</li>
					</ul>
				</scrollbar>
				<scrollbar ref="minuteScrollbar" customClass="am-timepicker-minute-container" :autoHide="true">
					<ul>
						<li v-for="val in 60">{{ double(val - 1) }}</li>
					</ul>
				</scrollbar>
				<scrollbar ref="secondScrollbar" customClass="am-timepicker-second-container" :autoHide="true">
					<ul>
						<li v-for="val in 60">{{ double(val - 1) }}</li>
					</ul>
				</scrollbar>
			</div>
			<div class="am-timepicker-btn">
				<am-button color="primary" size="xs">确认</am-button>
				<am-button size="xs">取消</am-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Scrollbar } from '../../scrollbar';
	import { Button } from '../../button';

	export default {
		name: 'am-timepicker',
		data() {
			return {
				hourVal: 0,
				minuteVal: 1,
				secondVal: 1
			}
		},
		props: {
			value: {},
			deaultValue: {
				type: [Number, String],
				default: + new Date()
			}
		},
		methods: {
			double(num) {
				if (num > 9) {
					return num;
				}
				return '0' + num;
			},
			hourOnScroll() {
				console.log('hour scroll')
			}
		},
		compunted: {

		},
		components: {
			Scrollbar,
			AmButton: Button
		}
	}
</script>