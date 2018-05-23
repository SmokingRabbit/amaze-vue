<template>
	<am-article>
		<am-article-header title="过渡效果"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>css过渡</h2>
				<p><a href="https://cn.vuejs.org/v2/api/#transition" target="blank">使用方法</a></p>
				<blockquote>
					<h4>Vue只有在插入，更新或者移除DOM元素时才会应用过渡效果，过渡效果的应用可以通过不同方式实现，官方文档中提到了如下几种：</h4>
					<ul>
						<li>在CSS过渡和动画中自动应用class；</li>
						<li>配合使用第三方的CSS动画库，如Animate.css；</li>
						<li>在过渡钩子函数中使用JavaScript直接操作DOM；</li>
						<li>配合使用第三方JavaScript动画库，如Velocity；</li>
						<li>上面四种方式其实主要就是两种，一个是利用<am-doc-code>CSS过渡</am-doc-code>或者动画，另一个是利用JavaScript钩子函数。</li>
					</ul>
				</blockquote>
				<ul class="am-doc-group">
					<li><am-doc-code>fade</am-doc-code></li>
					<li><am-doc-code>jump</am-doc-code></li>
					<li><am-doc-code>long</am-doc-code></li>
					<li><am-doc-code>scale-up</am-doc-code></li>
					<li><am-doc-code>scale-down</am-doc-code></li>
					<li><am-doc-code>slide-left</am-doc-code></li>
					<li><am-doc-code>slide-right</am-doc-code></li>
					<li><am-doc-code>slide-down</am-doc-code></li>
					<li><am-doc-code>locker-left</am-doc-code></li>
					<li><am-doc-code>locker-right</am-doc-code></li>
				</ul>
			</am-doc-section>

			<am-doc-section>
				<h2>示例</h2>
				<am-example>
					<am-button color="primary" @click="showHandle">
						显示 {{ transition }} {{!show ? '进入' : '移出' }}过渡效果
					</am-button>
					<am-container custom-class="react-container">
                    	<transition :name="transition">
							<div class="rect" v-if="show"></div>
                    	</transition>
					</am-container>
                    <am-select :options="options" @select="selectHandle"></am-select>
                </am-example>
            </am-doc-section>

		</am-article-body>
	</am-article>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
                    label: 'fade',
                    selected: true
                }, {
                    label: 'jump',
                }, {
                    label: 'long',
                }, {
                    label: 'scale-up',
                }, {
                    label: 'scale-down',
                }, {
                    label: 'slide-left',
                }, {
                    label: 'slide-right',
                }, {
                    label: 'slide-down',
                }, {
                    label: 'locker-left',
                }, {
                    label: 'locker-right',
                }],
                transition: 'fade',
                show: false
			}
		},
		methods: {
			showHandle() {
				this.show = !this.show;
			},
			selectHandle(val) {
				this.transition = val.label;
			}
		}
	}
</script>

<style>
	.react-container {
		margin-top: 20px;
		margin-bottom: 20px;
		height: 100px;
	}
	.rect {
		width: 100px;
		height: 100px;
		background-color: #F56C6C;
	}
</style>